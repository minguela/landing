import { neon, Pool, type PoolClient } from '@neondatabase/serverless'
import type { NeonSqlExecutor } from './neon-content-repository'

/**
 * Neon HTTP is used for public read queries. Import work uses a short-lived
 * WebSocket client so every upsert in the import is committed atomically.
 */
export function createNeonSqlExecutor(connectionString: string): NeonSqlExecutor {
  if (!connectionString.trim()) throw new Error('DATABASE_URL is required for Neon content storage')

  const sql = neon(connectionString)

  return {
    async query<Row extends Record<string, unknown>>(statement: string, params: unknown[] = []) {
      return await sql.query(statement, params) as Row[]
    },

    async transaction<T>(work: (transaction: NeonSqlExecutor) => Promise<T>) {
      const pool = new Pool({ connectionString })
      let client: PoolClient | undefined
      let isOpen = false

      try {
        const connectedClient = await pool.connect()
        client = connectedClient
        await connectedClient.query('BEGIN')
        isOpen = true

        const transaction: NeonSqlExecutor = {
          async query<Row extends Record<string, unknown>>(statement: string, params: unknown[] = []) {
            const result = await connectedClient.query<Row>(statement, params)
            return result.rows
          },
          transaction: async () => {
            throw new Error('Nested Neon content transactions are not supported')
          },
        }

        const result = await work(transaction)
        await connectedClient.query('COMMIT')
        isOpen = false
        return result
      } catch (error) {
        if (isOpen && client) await client.query('ROLLBACK')
        throw error
      } finally {
        client?.release()
        await pool.end()
      }
    },
  }
}
