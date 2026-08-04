export function formatEur(n: number): string {
  return new Intl.NumberFormat('es-ES', { style: 'currency', currency: 'EUR' }).format(n)
}

export function formatEuroRounded(n: number): string {
  return new Intl.NumberFormat('es-ES', { style: 'currency', currency: 'EUR', maximumFractionDigits: 0 }).format(n)
}

export function formatDateShort(d: string): string {
  return new Date(d).toLocaleDateString('es-ES', { day: '2-digit', month: '2-digit' })
}

export function formatToday(): string {
  return new Date().toLocaleDateString('es-ES', { weekday: 'long', day: 'numeric', month: 'long' })
}
