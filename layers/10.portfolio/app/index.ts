export { getPortfolioContentUseCase } from './application/get-portfolio-content'
export type {
  Project,
  StackGroup,
  WorkValue,
  FocusItem,
  CredibilityItem,
  LinkItem,
  ProjectAvailability,
  ProjectAccent,
  ProjectArtifact,
  PortfolioContent,
  PortfolioContentCopy
} from './domain/portfolio'
export { filterProjectsByStatus, getProjectBySlug } from './domain/project-rules'
