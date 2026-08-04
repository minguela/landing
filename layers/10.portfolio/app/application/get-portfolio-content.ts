import type { Locale } from '#layers/00.core/app/domain/locale'
import type { PortfolioContent } from '../domain/portfolio'
import { getPortfolioContent as fetchPortfolioContent } from '../infrastructure/portfolio-data'

export function getPortfolioContentUseCase(locale: Locale): PortfolioContent {
  return fetchPortfolioContent(locale)
}
