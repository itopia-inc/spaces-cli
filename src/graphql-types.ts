export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = {
  [K in keyof T]: T[K];
};
export type MakeOptional<T, K extends keyof T> = Omit<T, K> &
  { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> &
  { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** The javascript `Date` as integer. Type represents date and time as number of milliseconds from start of UNIX epoch. */
  Timestamp: any;
  /** The `Upload` scalar type represents a file upload. */
  Upload: any;
};

export type AccessRolesPayload = {
  __typename?: "AccessRolesPayload";
  problem?: Maybe<AccessRolesProblem>;
  roles?: Maybe<Array<Maybe<UserAdminRole>>>;
};

export type AccessRolesProblem =
  | AuthenticationRequiredProblem
  | AuthorizationRequiredProblem;

export type ActiveEndUsersProblem = Problem & {
  __typename?: "ActiveEndUsersProblem";
  message: Scalars["String"];
};

export type AddDeploymentUserAccountInput = {
  deploymentId: Scalars["ID"];
  email: Scalars["String"];
  organizationId: Scalars["ID"];
  roles: Array<Scalars["String"]>;
};

export type AddDeploymentUserAccountPayload = {
  __typename?: "AddDeploymentUserAccountPayload";
  problem?: Maybe<AddDeploymentUserAccountProblem>;
  userAccount?: Maybe<UserAccount>;
};

export type AddDeploymentUserAccountProblem =
  | AuthenticationRequiredProblem
  | AuthorizationRequiredProblem
  | InvalidFieldProblem;

export type AddOrganizationUserAccountInput = {
  email: Scalars["String"];
  organizationId: Scalars["ID"];
  roles: Array<Scalars["String"]>;
};

export type AddOrganizationUserAccountPayload = {
  __typename?: "AddOrganizationUserAccountPayload";
  problem?: Maybe<AddDeploymentUserAccountProblem>;
  userAccount?: Maybe<UserAccount>;
};

export type AddOrganizationUserAccountProblem =
  | AuthenticationRequiredProblem
  | AuthorizationRequiredProblem
  | InvalidFieldProblem;

export enum AdministratorStatus {
  Deleted = "DELETED",
  Ready = "READY",
  WaitingForInviteeToAccept = "WAITING_FOR_INVITEE_TO_ACCEPT",
}

export type AggregateBilling = {
  __typename?: "AggregateBilling";
  projectLastWindowsMonthCost?: Maybe<AggregateBillingCost>;
  projectWindowsMonthCost?: Maybe<AggregateBillingCost>;
  projectWindowsThreeMonthCost?: Maybe<AggregateBillingCost>;
  windowsCost?: Maybe<AggregateBillingCost>;
  windowsMonthCost?: Maybe<AggregateBillingCost>;
};

export type AggregateBillingCost = {
  __typename?: "AggregateBillingCost";
  billingWindowDate?: Maybe<BillingWindowDate>;
  planDiscount?: Maybe<Scalars["Float"]>;
  total?: Maybe<Scalars["Float"]>;
  totalWithDiscount?: Maybe<Scalars["Float"]>;
};

export type AssetAccessDenied = Problem & {
  __typename?: "AssetAccessDenied";
  message: Scalars["String"];
};

export type AuthenticationRequiredProblem = Problem & {
  __typename?: "AuthenticationRequiredProblem";
  message: Scalars["String"];
};

export type AuthorizationRequiredProblem = Problem & {
  __typename?: "AuthorizationRequiredProblem";
  message: Scalars["String"];
};

export type Billing = {
  __typename?: "Billing";
  aggregateBilling?: Maybe<AggregateBilling>;
  billingPerFeature?: Maybe<Array<Maybe<BillingPerFeature>>>;
};

export enum BillingFeature {
  None = "NONE",
  RatePlatformFees = "RATE_PLATFORM_FEES",
  RateSpaceSizeLarge = "RATE_SPACE_SIZE_LARGE",
  RateSpaceSizeMedium = "RATE_SPACE_SIZE_MEDIUM",
  RateSpaceSizeSmall = "RATE_SPACE_SIZE_SMALL",
  RateUserStorage = "RATE_USER_STORAGE",
}

export type BillingPerFeature = {
  __typename?: "BillingPerFeature";
  average?: Maybe<Scalars["Float"]>;
  cost?: Maybe<Scalars["Float"]>;
  displayName?: Maybe<Scalars["String"]>;
  metric?: Maybe<Scalars["String"]>;
  metricUnitType?: Maybe<MetricUnitType>;
  name?: Maybe<BillingFeature>;
  rate?: Maybe<Scalars["Float"]>;
  value?: Maybe<Scalars["Float"]>;
};

export type BillingWindowDate = {
  __typename?: "BillingWindowDate";
  windowEnd?: Maybe<Scalars["String"]>;
  windowStart?: Maybe<Scalars["String"]>;
};

export type BulkImportInProgressProblem = Problem & {
  __typename?: "BulkImportInProgressProblem";
  message: Scalars["String"];
};

export enum BulkImportStatus {
  Completed = "COMPLETED",
  Failed = "FAILED",
  Imported = "IMPORTED",
  Importing = "IMPORTING",
  ImportingFailed = "IMPORTING_FAILED",
  ImportingRetry = "IMPORTING_RETRY",
  None = "NONE",
  PrepareImporting = "PREPARE_IMPORTING",
  PrepareImportingFailed = "PREPARE_IMPORTING_FAILED",
  Start = "START",
  Validated = "VALIDATED",
  Validating = "VALIDATING",
  ValidationFailed = "VALIDATION_FAILED",
}

export type CatalogItem = {
  __typename?: "CatalogItem";
  createdAt: Scalars["String"];
  createdBy: Scalars["String"];
  deploymentRegistryCredential?: Maybe<DeploymentRegistryCredential>;
  description: Scalars["String"];
  icon: Scalars["String"];
  id: Scalars["ID"];
  imageRepositoryUrl: Scalars["String"];
  imageTag: Scalars["String"];
  isPublic?: Maybe<Scalars["Boolean"]>;
  lastModifiedAt: Scalars["String"];
  lastModifiedBy: Scalars["String"];
  name: Scalars["String"];
  organizationId: Scalars["ID"];
  recommendedSettings: SpaceSettings;
  spaces: Array<Space>;
  status: CatalogItemStatus;
};

export type CatalogItemSpacesArgs = {
  deploymentId: Scalars["String"];
};

export type CatalogItemAlreadyExistsProblem = Problem & {
  __typename?: "CatalogItemAlreadyExistsProblem";
  message: Scalars["String"];
};

export type CatalogItemCreateInput = {
  deploymentRegistryCredentialId?: Maybe<Scalars["String"]>;
  description?: Maybe<Scalars["String"]>;
  icon: Scalars["String"];
  imageRepositoryUrl: Scalars["String"];
  imageTag: Scalars["String"];
  isPublic?: Maybe<Scalars["Boolean"]>;
  name: Scalars["String"];
  organizationId: Scalars["String"];
  recommendedSettings: SpaceSettingsInput;
  status: CatalogItemStatus;
};

export type CatalogItemCreatePayload = {
  __typename?: "CatalogItemCreatePayload";
  catalogItem?: Maybe<CatalogItem>;
  problem?: Maybe<CatalogItemCreateProblem>;
};

export type CatalogItemCreateProblem =
  | AssetAccessDenied
  | AuthenticationRequiredProblem
  | AuthorizationRequiredProblem
  | CatalogItemAlreadyExistsProblem
  | InvalidFieldProblem
  | OrganizationCannotPublishCatalogItemsProblem
  | OrganizationDoesNotExistProblem
  | OrganizationWithoutAccessToImageProblem;

export type CatalogItemDeleteInput = {
  catalogItemId: Scalars["String"];
  organizationId: Scalars["String"];
};

export type CatalogItemDeletePayload = {
  __typename?: "CatalogItemDeletePayload";
  problem?: Maybe<CatalogItemDeleteProblem>;
};

export type CatalogItemDeleteProblem =
  | AssetAccessDenied
  | AuthenticationRequiredProblem
  | AuthorizationRequiredProblem
  | CatalogItemDoesNotExistProblem
  | CatalogItemSpacesMustBeUnattachedProblem;

export type CatalogItemDoesNotExistProblem = Problem & {
  __typename?: "CatalogItemDoesNotExistProblem";
  message: Scalars["String"];
};

export type CatalogItemInput = {
  catalogItemId: Scalars["ID"];
  organizationId: Scalars["ID"];
};

export type CatalogItemPayload = {
  __typename?: "CatalogItemPayload";
  catalogItem?: Maybe<CatalogItem>;
  problem?: Maybe<CatalogItemProblem>;
};

export type CatalogItemProblem =
  | AuthenticationRequiredProblem
  | AuthorizationRequiredProblem
  | CatalogItemDoesNotExistProblem
  | OrganizationDoesNotExistProblem;

export type CatalogItemSpacesMustBeUnattachedProblem = Problem & {
  __typename?: "CatalogItemSpacesMustBeUnattachedProblem";
  message: Scalars["String"];
};

export enum CatalogItemStatus {
  Deprecated = "DEPRECATED",
  Draft = "DRAFT",
  Live = "LIVE",
  None = "NONE",
}

export type CatalogItemUpdateInput = {
  catalogItemId: Scalars["String"];
  deploymentRegistryCredentialId?: Maybe<Scalars["String"]>;
  description?: Maybe<Scalars["String"]>;
  icon?: Maybe<Scalars["String"]>;
  isPublic?: Maybe<Scalars["Boolean"]>;
  organizationId: Scalars["String"];
  recommendedSettings?: Maybe<SpaceSettingsInput>;
  status?: Maybe<CatalogItemStatus>;
};

export type CatalogItemUpdatePayload = {
  __typename?: "CatalogItemUpdatePayload";
  catalogItem?: Maybe<CatalogItem>;
  problem?: Maybe<CatalogItemUpdateProblem>;
};

export type CatalogItemUpdateProblem =
  | AssetAccessDenied
  | AuthenticationRequiredProblem
  | AuthorizationRequiredProblem
  | CatalogItemDoesNotExistProblem
  | InvalidFieldProblem
  | OrganizationCannotPublishCatalogItemsProblem
  | OrganizationWithoutAccessToImageProblem;

export type Charges = {
  __typename?: "Charges";
  charge?: Maybe<Scalars["Float"]>;
  displayName?: Maybe<Scalars["String"]>;
  metric?: Maybe<Scalars["String"]>;
  metricUnitType?: Maybe<MetricUnitType>;
  name?: Maybe<Scalars["String"]>;
  rate?: Maybe<Scalars["Float"]>;
  value?: Maybe<Scalars["Float"]>;
};

export type CloudProcessingProblem = Problem & {
  __typename?: "CloudProcessingProblem";
  message: Scalars["String"];
};

export type Collection = {
  __typename?: "Collection";
  endUsers: Array<EndUser>;
  id: Scalars["ID"];
  name: Scalars["String"];
  spaces: Array<Space>;
};

export type CollectionCreateInput = {
  deploymentId: Scalars["ID"];
  name: Scalars["String"];
};

export type CollectionCreatePayload = {
  __typename?: "CollectionCreatePayload";
  collectionId?: Maybe<Scalars["ID"]>;
  problem?: Maybe<CollectionCreateProblem>;
  query: Query;
};

export type CollectionCreateProblem =
  | AuthenticationRequiredProblem
  | AuthorizationRequiredProblem
  | DeploymentDoesNotExistProblem
  | InvalidFieldProblem
  | OrganizationDoesNotExistProblem;

export type CollectionDeleteInput = {
  collectionId: Scalars["ID"];
  deploymentId: Scalars["ID"];
};

export type CollectionDeletePayload = {
  __typename?: "CollectionDeletePayload";
  problem?: Maybe<CollectionDeleteProblem>;
  query: Query;
};

export type CollectionDeleteProblem =
  | AuthenticationRequiredProblem
  | AuthorizationRequiredProblem
  | CollectionDoesNotExistProblem
  | DeploymentDoesNotExistProblem;

export type CollectionDoesNotExistProblem = Problem & {
  __typename?: "CollectionDoesNotExistProblem";
  message: Scalars["String"];
};

export type CollectionInput = {
  collectionId: Scalars["ID"];
  deploymentId: Scalars["ID"];
};

export type CollectionPayload = {
  __typename?: "CollectionPayload";
  collection?: Maybe<Collection>;
  problem?: Maybe<CollectionProblem>;
};

export type CollectionProblem =
  | AuthenticationRequiredProblem
  | CollectionDoesNotExistProblem
  | DeploymentDoesNotExistProblem;

export type CollectionTrialNotReadyProblem = Problem & {
  __typename?: "CollectionTrialNotReadyProblem";
  message: Scalars["String"];
};

export type CollectionUpdateInput = {
  collectionId: Scalars["ID"];
  deploymentId: Scalars["ID"];
  name?: Maybe<Scalars["String"]>;
};

export type CollectionUpdatePayload = {
  __typename?: "CollectionUpdatePayload";
  problem?: Maybe<CollectionUpdateProblem>;
  query: Query;
};

export type CollectionUpdateProblem =
  | AuthenticationRequiredProblem
  | AuthorizationRequiredProblem
  | CollectionDoesNotExistProblem
  | DeploymentDoesNotExistProblem
  | InvalidFieldProblem;

export type CollectionsInput = {
  deploymentId: Scalars["ID"];
};

export type CollectionsPayload = {
  __typename?: "CollectionsPayload";
  collections?: Maybe<Array<Maybe<Collection>>>;
  problem?: Maybe<CollectionsProblem>;
};

export type CollectionsProblem =
  | AuthenticationRequiredProblem
  | DeploymentDoesNotExistProblem;

export type CustomDomain = {
  __typename?: "CustomDomain";
  createdAt: Scalars["String"];
  deploymentId: Scalars["String"];
  domain: Scalars["String"];
  id: Scalars["ID"];
  stateMessage: Scalars["String"];
  status: CustomDomainStatusType;
  updatedAt: Scalars["String"];
};

export type CustomDomainAlreadyExistProblem = Problem & {
  __typename?: "CustomDomainAlreadyExistProblem";
  message: Scalars["String"];
};

export type CustomDomainCreateInput = {
  deploymentId: Scalars["ID"];
  domain: Scalars["String"];
};

export type CustomDomainCreatePayload = {
  __typename?: "CustomDomainCreatePayload";
  customDomain?: Maybe<CustomDomain>;
  problem?: Maybe<CustomDomainCreateProblem>;
};

export type CustomDomainCreateProblem =
  | AuthenticationRequiredProblem
  | AuthorizationRequiredProblem
  | CustomDomainAlreadyExistProblem
  | DeploymentDoesNotExistProblem
  | InvalidFieldProblem;

export type CustomDomainDeleteInput = {
  customDomainId: Scalars["String"];
  deploymentId: Scalars["ID"];
};

export type CustomDomainDeletePayload = {
  __typename?: "CustomDomainDeletePayload";
  problem?: Maybe<CustomDomainDeleteProblem>;
};

export type CustomDomainDeleteProblem =
  | AuthenticationRequiredProblem
  | AuthorizationRequiredProblem
  | CustomDomainDoesNotExistProblem
  | DeploymentDoesNotExistProblem;

export type CustomDomainDoesNotExistProblem = Problem & {
  __typename?: "CustomDomainDoesNotExistProblem";
  message: Scalars["String"];
};

export type CustomDomainInProgressProblem = Problem & {
  __typename?: "CustomDomainInProgressProblem";
  message: Scalars["String"];
};

export type CustomDomainRevertInput = {
  deploymentId: Scalars["ID"];
};

export type CustomDomainRevertPayload = {
  __typename?: "CustomDomainRevertPayload";
  problem?: Maybe<CustomDomainRevertProblem>;
  result?: Maybe<Scalars["Boolean"]>;
};

export type CustomDomainRevertProblem =
  | AuthenticationRequiredProblem
  | AuthorizationRequiredProblem
  | CustomDomainInProgressProblem
  | DeploymentDoesNotExistProblem;

export enum CustomDomainStatusType {
  Creating = "CREATING",
  CreationFailed = "CREATION_FAILED",
  Deleted = "DELETED",
  Draft = "DRAFT",
  None = "NONE",
  Ready = "READY",
  ResetingToDefault = "RESETING_TO_DEFAULT",
  Validated = "VALIDATED",
  Validating = "VALIDATING",
  ValidationFailed = "VALIDATION_FAILED",
}

export type CustomDomainUpdateInput = {
  customDomainId: Scalars["String"];
  deploymentId: Scalars["ID"];
  domain: Scalars["String"];
};

export type CustomDomainUpdatePayload = {
  __typename?: "CustomDomainUpdatePayload";
  customDomain?: Maybe<CustomDomain>;
  problem?: Maybe<CustomDomainUpdateProblem>;
};

export type CustomDomainUpdateProblem =
  | AuthenticationRequiredProblem
  | AuthorizationRequiredProblem
  | CustomDomainAlreadyExistProblem
  | CustomDomainDoesNotExistProblem
  | DeploymentDoesNotExistProblem
  | InvalidFieldProblem;

export type CustomDomainsInput = {
  deploymentId: Scalars["ID"];
};

export type CustomDomainsPayload = {
  __typename?: "CustomDomainsPayload";
  customDomains?: Maybe<Array<Maybe<CustomDomain>>>;
  problem?: Maybe<CustomDomainsProblem>;
};

export type CustomDomainsProblem =
  | AuthenticationRequiredProblem
  | AuthorizationRequiredProblem
  | DeploymentDoesNotExistProblem;

export type DefaultDeploymentClusterConfigurationInput = {
  deploymentId: Scalars["ID"];
};

export type DefaultDeploymentClusterConfigurationPayload = {
  __typename?: "DefaultDeploymentClusterConfigurationPayload";
  defaultDeploymentClusterConfiguration?: Maybe<DeploymentClusterConfiguration>;
  problem?: Maybe<DefaultDeploymentClusterConfigurationProblem>;
};

export type DefaultDeploymentClusterConfigurationProblem =
  | AuthenticationRequiredProblem
  | DeploymentDoesNotExistProblem;

export type Deployment = Resource & {
  __typename?: "Deployment";
  billingCost?: Maybe<Billing>;
  collections: Array<Collection>;
  customDomains: Array<Maybe<CustomDomain>>;
  defaultClusterConfiguration?: Maybe<DeploymentClusterConfiguration>;
  fixedCost?: Maybe<Array<Maybe<FixedCost>>>;
  id: Scalars["ID"];
  isGoogleIdentityProviderEnabled: Scalars["Boolean"];
  launcherUrl: Scalars["String"];
  name: Scalars["String"];
  organization: Organization;
  resourceUsageBilling?: Maybe<Array<Maybe<ResourceUsageBilling>>>;
  sessionBilling?: Maybe<Array<Maybe<SessionBilling>>>;
  statistics: DeploymentStatistics;
  status: DeploymentStatus;
  userAccounts: Array<UserAccount>;
};

export type DeploymentBillingCostArgs = {
  variables?: Maybe<BillingFeature>;
  windowEnd: Scalars["String"];
  windowStart: Scalars["String"];
};

export type DeploymentFixedCostArgs = {
  windowEnd: Scalars["String"];
  windowStart: Scalars["String"];
};

export type DeploymentResourceUsageBillingArgs = {
  windowEnd: Scalars["String"];
  windowStart: Scalars["String"];
};

export type DeploymentSessionBillingArgs = {
  windowEnd: Scalars["String"];
  windowStart: Scalars["String"];
};

export type DeploymentStatisticsArgs = {
  windowEnd: Scalars["Timestamp"];
  windowStart: Scalars["Timestamp"];
};

export type DeploymentClusterConfiguration = {
  __typename?: "DeploymentClusterConfiguration";
  brokerEndpoint: Scalars["String"];
  createdAt: Scalars["String"];
  deploymentId: Scalars["String"];
  id: Scalars["ID"];
  location: Scalars["String"];
  projectId: Scalars["String"];
  status: DeploymentClusterConfigurationStatusType;
  updatedAt: Scalars["String"];
};

export enum DeploymentClusterConfigurationStatusType {
  Creating = "CREATING",
  Deleting = "DELETING",
  Draft = "DRAFT",
  ErrorToCreate = "ERROR_TO_CREATE",
  ErrorToDelete = "ERROR_TO_DELETE",
  ErrorToUpdate = "ERROR_TO_UPDATE",
  None = "NONE",
  PendingToCreate = "PENDING_TO_CREATE",
  PendingToDelete = "PENDING_TO_DELETE",
  PendingToUpdate = "PENDING_TO_UPDATE",
  Ready = "READY",
  Updating = "UPDATING",
}

export type DeploymentCreateInput = {
  isGoogleIdentityProviderEnabled: Scalars["Boolean"];
  name: Scalars["String"];
  organizationId: Scalars["ID"];
  region: Scalars["String"];
};

export type DeploymentCreatePayload = {
  __typename?: "DeploymentCreatePayload";
  deployment?: Maybe<Deployment>;
  problem?: Maybe<DeploymentCreateProblem>;
  query: Query;
};

export type DeploymentCreateProblem =
  | AssetAccessDenied
  | AuthenticationRequiredProblem
  | AuthorizationRequiredProblem
  | InvalidFieldProblem
  | OrganizationDoesNotExistProblem
  | UnsupportedRegionProblem;

export type DeploymentDeleteInput = {
  deploymentId: Scalars["ID"];
  organizationId: Scalars["ID"];
};

export type DeploymentDeletePayload = {
  __typename?: "DeploymentDeletePayload";
  problem?: Maybe<DeploymentDeleteProblem>;
  query: Query;
};

export type DeploymentDeleteProblem =
  | AuthenticationRequiredProblem
  | AuthorizationRequiredProblem
  | DeploymentDoesNotExistProblem
  | OrganizationDoesNotExistProblem;

export type DeploymentDoesNotExistProblem = Problem & {
  __typename?: "DeploymentDoesNotExistProblem";
  message: Scalars["String"];
};

export type DeploymentInput = {
  deploymentId: Scalars["ID"];
  organizationId: Scalars["ID"];
};

export type DeploymentNatGateway = {
  __typename?: "DeploymentNatGateway";
  creationTimestamp: Scalars["String"];
  deploymentId: Scalars["String"];
  id: Scalars["ID"];
  name: Scalars["String"];
  natMappings: Array<Maybe<DeploymentNatGatewaysMapping>>;
  network: Scalars["String"];
  region: Scalars["String"];
  status: DeploymentNatGatewayStatus;
};

export enum DeploymentNatGatewayStatus {
  Down = "DOWN",
  None = "NONE",
  Up = "UP",
}

export type DeploymentNatGatewaysInput = {
  deploymentId: Scalars["ID"];
};

export type DeploymentNatGatewaysMapping = {
  __typename?: "DeploymentNatGatewaysMapping";
  ipAddress: Scalars["String"];
  name: Scalars["String"];
};

export type DeploymentNatGatewaysPayload = {
  __typename?: "DeploymentNatGatewaysPayload";
  deploymentNatGateways?: Maybe<Array<Maybe<DeploymentNatGateway>>>;
  problem?: Maybe<DeploymentNatGatewaysProblem>;
};

export type DeploymentNatGatewaysProblem =
  | AuthenticationRequiredProblem
  | AuthorizationRequiredProblem
  | DeploymentDoesNotExistProblem;

export type DeploymentPayload = {
  __typename?: "DeploymentPayload";
  deployment?: Maybe<Deployment>;
  problem?: Maybe<DeploymentProblem>;
};

export type DeploymentProblem =
  | AuthenticationRequiredProblem
  | DeploymentDoesNotExistProblem
  | OrganizationDoesNotExistProblem;

export type DeploymentRegion = {
  __typename?: "DeploymentRegion";
  code: Scalars["String"];
  id: Scalars["ID"];
  name: Scalars["String"];
};

export type DeploymentRegionsInput = {
  organizationId: Scalars["ID"];
};

export type DeploymentRegionsPayload = {
  __typename?: "DeploymentRegionsPayload";
  deploymentRegions?: Maybe<Array<Maybe<DeploymentRegion>>>;
  problem?: Maybe<DeploymentRegionsProblem>;
};

export type DeploymentRegionsProblem =
  | AuthenticationRequiredProblem
  | AuthorizationRequiredProblem
  | OrganizationDoesNotExistProblem;

export type DeploymentRegistryCredential = {
  __typename?: "DeploymentRegistryCredential";
  active: Scalars["Boolean"];
  code: Scalars["String"];
  createdAt: Scalars["String"];
  id: Scalars["ID"];
  name: Scalars["String"];
  organizationId: Scalars["String"];
  status: DeploymentRegistryCredentialStatusType;
  type: DeploymentRegistryCredentialType;
  updatedAt: Scalars["String"];
};

export type DeploymentRegistryCredentialCreateInput = {
  deploymentRegistryCredentialManager: DeploymentRegistryCredentialManagerInput;
  name: Scalars["String"];
  organizationId: Scalars["ID"];
  type: DeploymentRegistryCredentialType;
};

export type DeploymentRegistryCredentialCreatePayload = {
  __typename?: "DeploymentRegistryCredentialCreatePayload";
  deploymentRegistryCredential?: Maybe<DeploymentRegistryCredential>;
  problem?: Maybe<DeploymentRegistryCredentialCreateProblem>;
};

export type DeploymentRegistryCredentialCreateProblem =
  | AssetAccessDenied
  | AuthenticationRequiredProblem
  | AuthorizationRequiredProblem
  | InvalidFieldProblem
  | OrganizationDoesNotExistProblem;

export type DeploymentRegistryCredentialDeleteInput = {
  id: Scalars["ID"];
  organizationId: Scalars["ID"];
};

export type DeploymentRegistryCredentialDeletePayload = {
  __typename?: "DeploymentRegistryCredentialDeletePayload";
  problem?: Maybe<DeploymentRegistryCredentialDeleteProblem>;
};

export type DeploymentRegistryCredentialDeleteProblem =
  | AssetAccessDenied
  | AuthenticationRequiredProblem
  | AuthorizationRequiredProblem
  | DeploymentRegistryCredentialDependencyProblem
  | DeploymentRegistryCredentialDoesNotExistProblem;

export type DeploymentRegistryCredentialDependencyProblem = Problem & {
  __typename?: "DeploymentRegistryCredentialDependencyProblem";
  message: Scalars["String"];
};

export type DeploymentRegistryCredentialDoesNotExistProblem = Problem & {
  __typename?: "DeploymentRegistryCredentialDoesNotExistProblem";
  message: Scalars["String"];
};

export type DeploymentRegistryCredentialManagerDockerHub = {
  __typename?: "DeploymentRegistryCredentialManagerDockerHub";
  accessToken?: Maybe<Scalars["String"]>;
  userName?: Maybe<Scalars["String"]>;
};

export type DeploymentRegistryCredentialManagerGitHubContainerRegistry = {
  __typename?: "DeploymentRegistryCredentialManagerGitHubContainerRegistry";
  accessToken?: Maybe<Scalars["String"]>;
  userName?: Maybe<Scalars["String"]>;
};

export type DeploymentRegistryCredentialManagerGoogleArtifactRegistry = {
  __typename?: "DeploymentRegistryCredentialManagerGoogleArtifactRegistry";
  fileJson?: Maybe<Scalars["String"]>;
  location?: Maybe<Scalars["String"]>;
};

export type DeploymentRegistryCredentialManagerGoogleContainerRegistry = {
  __typename?: "DeploymentRegistryCredentialManagerGoogleContainerRegistry";
  fileJson?: Maybe<Scalars["String"]>;
  location?: Maybe<Scalars["String"]>;
};

export type DeploymentRegistryCredentialManagerInput = {
  accessToken?: Maybe<Scalars["String"]>;
  fileJson?: Maybe<Scalars["String"]>;
  location?: Maybe<Scalars["String"]>;
  userName?: Maybe<Scalars["String"]>;
};

export enum DeploymentRegistryCredentialStatusType {
  CreationFailed = "CREATION_FAILED",
  CreationPending = "CREATION_PENDING",
  DeletionFailed = "DELETION_FAILED",
  DeletionPending = "DELETION_PENDING",
  None = "NONE",
  Ready = "READY",
  UpdateFailed = "UPDATE_FAILED",
  UpdatePending = "UPDATE_PENDING",
}

export enum DeploymentRegistryCredentialType {
  DockerHub = "DOCKER_HUB",
  GitHubContainerRegistry = "GIT_HUB_CONTAINER_REGISTRY",
  GoogleArtifactRegistry = "GOOGLE_ARTIFACT_REGISTRY",
  GoogleContainerRegistry = "GOOGLE_CONTAINER_REGISTRY",
  None = "NONE",
}

export type DeploymentRegistryCredentialUpdateInput = {
  deploymentRegistryCredentialManager: DeploymentRegistryCredentialManagerInput;
  id: Scalars["ID"];
  name: Scalars["String"];
  organizationId: Scalars["ID"];
  type: DeploymentRegistryCredentialType;
};

export type DeploymentRegistryCredentialUpdatePayload = {
  __typename?: "DeploymentRegistryCredentialUpdatePayload";
  deploymentRegistryCredential?: Maybe<DeploymentRegistryCredential>;
  problem?: Maybe<DeploymentRegistryCredentialUpdateProblem>;
};

export type DeploymentRegistryCredentialUpdateProblem =
  | AssetAccessDenied
  | AuthenticationRequiredProblem
  | AuthorizationRequiredProblem
  | InvalidFieldProblem
  | OrganizationDoesNotExistProblem;

export type DeploymentStatistics = {
  __typename?: "DeploymentStatistics";
  averageSessionComputeUsedInCores: StatisticsWindowValues;
  averageSessionMemoryUsedInGigabytes: StatisticsWindowValues;
  totalSessionTimeUsedInHours: StatisticsWindowValues;
};

export enum DeploymentStatus {
  Creating = "CREATING",
  Deleting = "DELETING",
  Draft = "DRAFT",
  ErrorToCreate = "ERROR_TO_CREATE",
  ErrorToDelete = "ERROR_TO_DELETE",
  ErrorToUpdate = "ERROR_TO_UPDATE",
  None = "NONE",
  PendingToCreate = "PENDING_TO_CREATE",
  PendingToDelete = "PENDING_TO_DELETE",
  PendingToUpdate = "PENDING_TO_UPDATE",
  Ready = "READY",
  Updating = "UPDATING",
}

export type DeploymentTrialNotReadyProblem = Problem & {
  __typename?: "DeploymentTrialNotReadyProblem";
  message: Scalars["String"];
};

export type DeploymentUpdateInput = {
  deploymentId: Scalars["ID"];
  isGoogleIdentityProviderEnabled?: Maybe<Scalars["Boolean"]>;
  name?: Maybe<Scalars["String"]>;
  organizationId: Scalars["ID"];
};

export type DeploymentUpdatePayload = {
  __typename?: "DeploymentUpdatePayload";
  problem?: Maybe<DeploymentUpdateProblem>;
  query: Query;
};

export type DeploymentUpdateProblem =
  | AuthenticationRequiredProblem
  | AuthorizationRequiredProblem
  | DeploymentDoesNotExistProblem
  | InvalidFieldProblem
  | OrganizationDoesNotExistProblem;

export type DeploymentVpn = {
  __typename?: "DeploymentVPN";
  active: Scalars["Boolean"];
  createdAt: Scalars["String"];
  createdByUser: Scalars["String"];
  deploymentId: Scalars["String"];
  deploymentVPNGoogleCrossConnectivity?: Maybe<DeploymentVpnGoogleCrossConnectivity>;
  deploymentVPNGoogleResources?: Maybe<DeploymentVpnGoogleResources>;
  description: Scalars["String"];
  displayName: Scalars["String"];
  id: Scalars["ID"];
  interconnectPeer?: Maybe<DeploymentVpnInterconnect>;
  interconnectPeerType: DeploymentVpnInterconnectPeerType;
  ipAddresses: Array<Maybe<Scalars["String"]>>;
  lastStatusChange: Scalars["String"];
  slug: Scalars["String"];
  stateMessage: Scalars["String"];
  status: DeploymentVpnStatusType;
  updatedAt: Scalars["String"];
};

export type DeploymentVpnDeploymentVpnGoogleCrossConnectivityArgs = {
  input: DeploymentVpnGoogleCrossConnectivityInput;
};

export type DeploymentVpnDeploymentVpnGoogleResourcesArgs = {
  input: DeploymentVpnGoogleResourcesInput;
};

export type DeploymentVpnBasicInformationCreateInput = {
  deploymentId: Scalars["String"];
  deploymentVPNId?: Maybe<Scalars["String"]>;
  description: Scalars["String"];
  displayName: Scalars["String"];
  interconnectPeerType: DeploymentVpnInterconnectPeerType;
};

export type DeploymentVpnCreatePayload = {
  __typename?: "DeploymentVPNCreatePayload";
  deploymentVPN?: Maybe<DeploymentVpn>;
  problem?: Maybe<DeploymentVpnCreateProblem>;
};

export type DeploymentVpnCreateProblem =
  | AuthenticationRequiredProblem
  | AuthorizationRequiredProblem
  | DeploymentDoesNotExistProblem
  | InvalidFieldProblem;

export type DeploymentVpnDraftInput = {
  deploymentId: Scalars["String"];
};

export type DeploymentVpnDraftPayload = {
  __typename?: "DeploymentVPNDraftPayload";
  deploymentVPN?: Maybe<DeploymentVpn>;
  problem?: Maybe<DeploymentVpnDraftProblem>;
};

export type DeploymentVpnDraftProblem =
  | AuthenticationRequiredProblem
  | AuthorizationRequiredProblem
  | DeploymentDoesNotExistProblem;

export type DeploymentVpnGoogleConfigurationCreateInput = {
  bgpSessions: Array<Maybe<DeploymentVpnInterconnectBgpSessionInput>>;
  customIAMRole: Scalars["String"];
  deploymentId: Scalars["String"];
  deploymentVPNId: Scalars["String"];
  gatewayName: Scalars["String"];
  projectId: Scalars["String"];
  region: Scalars["String"];
  routerName: Scalars["String"];
  serviceAccountEmail: Scalars["String"];
  tunnels: Array<Maybe<DeploymentVpnInterconnectTunnelInput>>;
  vpcName: Scalars["String"];
};

export type DeploymentVpnGoogleCrossConnectivity = {
  __typename?: "DeploymentVPNGoogleCrossConnectivity";
  createBGPInterfacesCommand: Array<Maybe<Scalars["String"]>>;
  createBGPPeerCommand: Array<Maybe<Scalars["String"]>>;
  createVPNTunnelsCommand: Array<Maybe<Scalars["String"]>>;
  deploymentId: Scalars["String"];
  deploymentVPNId: Scalars["String"];
};

export type DeploymentVpnGoogleCrossConnectivityInput = {
  deploymentId: Scalars["String"];
  deploymentVPNId: Scalars["String"];
};

export type DeploymentVpnGoogleResources = {
  __typename?: "DeploymentVPNGoogleResources";
  addIAMPolicyToServiceAccountCommand: Scalars["String"];
  createCloudRouterCommand: Scalars["String"];
  createCustomerServiceAccountCommand: Scalars["String"];
  createIAMRoleCommand: Scalars["String"];
  createVPNGateway: Scalars["String"];
  deploymentId: Scalars["String"];
  deploymentVPNId: Scalars["String"];
  iamRoles: Array<Maybe<Scalars["String"]>>;
};

export type DeploymentVpnGoogleResourcesInput = {
  deploymentId: Scalars["String"];
  deploymentVPNId: Scalars["String"];
};

export type DeploymentVpnInput = {
  deploymentId: Scalars["String"];
  deploymentVPNId: Scalars["String"];
};

export type DeploymentVpnInterconnect = {
  deploymentNetworkName: Scalars["String"];
  deploymentProjectId: Scalars["String"];
  deploymentRegion: Scalars["String"];
  deploymentServiceAccountEmail: Scalars["String"];
  deploymentVPNGatewayName: Scalars["String"];
};

export type DeploymentVpnInterconnectBgpSession = {
  __typename?: "DeploymentVPNInterconnectBGPSession";
  interconnectPeerType: DeploymentVpnInterconnectPeerType;
  interfaceType: DeploymentVpnInterconnectInterfaceType;
  ipAddressRange: Scalars["String"];
  name: Scalars["String"];
  peerASN: Scalars["Int"];
  peerIPAddress: Scalars["String"];
};

export type DeploymentVpnInterconnectBgpSessionInput = {
  interconnectPeerType: DeploymentVpnInterconnectPeerType;
  interfaceType: DeploymentVpnInterconnectInterfaceType;
  ipAddressRange: Scalars["String"];
  name: Scalars["String"];
  peerASN: Scalars["Int"];
  peerIPAddress: Scalars["String"];
};

export type DeploymentVpnInterconnectGoogle = DeploymentVpnInterconnect & {
  __typename?: "DeploymentVPNInterconnectGoogle";
  bgpSessions: Array<Maybe<DeploymentVpnInterconnectBgpSession>>;
  customIAMRole: Scalars["String"];
  deploymentNetworkName: Scalars["String"];
  deploymentProjectId: Scalars["String"];
  deploymentRegion: Scalars["String"];
  deploymentServiceAccountEmail: Scalars["String"];
  deploymentVPNGatewayName: Scalars["String"];
  gatewayName: Scalars["String"];
  projectId: Scalars["String"];
  region: Scalars["String"];
  routerName: Scalars["String"];
  serviceAccountEmail: Scalars["String"];
  tunnels: Array<Maybe<DeploymentVpnInterconnectTunnel>>;
  vpcName: Scalars["String"];
};

export enum DeploymentVpnInterconnectInterfaceType {
  Interface_0 = "INTERFACE_0",
  Interface_1 = "INTERFACE_1",
  None = "NONE",
}

export enum DeploymentVpnInterconnectPeerType {
  GcpToExternal = "GCP_TO_EXTERNAL",
  GcpToGcp = "GCP_TO_GCP",
  None = "NONE",
}

export type DeploymentVpnInterconnectTunnel = {
  __typename?: "DeploymentVPNInterconnectTunnel";
  ikeSharedKey: Scalars["String"];
  ikeVersion: Scalars["Int"];
  interconnectPeerType: DeploymentVpnInterconnectPeerType;
  interfaceType: DeploymentVpnInterconnectInterfaceType;
  name: Scalars["String"];
  status: DeploymentVpnInterconnectTunnelStatusType;
};

export type DeploymentVpnInterconnectTunnelInput = {
  ikeSharedKey: Scalars["String"];
  ikeVersion: Scalars["Int"];
  interconnectPeerType: DeploymentVpnInterconnectPeerType;
  interfaceType: DeploymentVpnInterconnectInterfaceType;
  name: Scalars["String"];
  status: DeploymentVpnInterconnectTunnelStatusType;
};

export enum DeploymentVpnInterconnectTunnelStatusType {
  Draft = "DRAFT",
  Failed = "FAILED",
  None = "NONE",
  Ready = "READY",
}

export type DeploymentVpnPayload = {
  __typename?: "DeploymentVPNPayload";
  deploymentVPN?: Maybe<DeploymentVpn>;
  problem?: Maybe<DeploymentVpnProblem>;
};

export type DeploymentVpnPolicyUpdateInput = {
  deploymentId: Scalars["String"];
  deploymentVPNId: Scalars["String"];
};

export type DeploymentVpnPolicyUpdatePayload = {
  __typename?: "DeploymentVPNPolicyUpdatePayload";
  problem?: Maybe<DeploymentVpnPolicyUpdateProblem>;
  result?: Maybe<Scalars["Boolean"]>;
};

export type DeploymentVpnPolicyUpdateProblem =
  | AuthenticationRequiredProblem
  | AuthorizationRequiredProblem
  | DeploymentDoesNotExistProblem;

export type DeploymentVpnProblem =
  | AuthenticationRequiredProblem
  | AuthorizationRequiredProblem
  | DeploymentDoesNotExistProblem;

export enum DeploymentVpnStatusType {
  Creating = "CREATING",
  CreationFailed = "CREATION_FAILED",
  Deleted = "DELETED",
  Deleting = "DELETING",
  DeletionFailed = "DELETION_FAILED",
  Draft = "DRAFT",
  None = "NONE",
  Ready = "READY",
  ReadyWithAllTunnelsFailed = "READY_WITH_ALL_TUNNELS_FAILED",
  ReadyWithSomeTunnelsFailed = "READY_WITH_SOME_TUNNELS_FAILED",
}

export type DeploymentVpNsInput = {
  deploymentId: Scalars["ID"];
};

export type DeploymentVpNsPayload = {
  __typename?: "DeploymentVPNsPayload";
  deploymentVPNs?: Maybe<Array<Maybe<DeploymentVpn>>>;
  problem?: Maybe<DeploymentVpNsProblem>;
};

export type DeploymentVpNsProblem =
  | AuthenticationRequiredProblem
  | AuthorizationRequiredProblem
  | DeploymentDoesNotExistProblem;

export type DeploymentsInput = {
  organizationId: Scalars["ID"];
};

export type DeploymentsPayload = {
  __typename?: "DeploymentsPayload";
  deployments?: Maybe<Array<Maybe<Deployment>>>;
  problem?: Maybe<DeploymentsProblem>;
};

export type DeploymentsProblem =
  | AuthenticationRequiredProblem
  | OrganizationDoesNotExistProblem;

export type EditDeploymentUserAccountInput = {
  deploymentId: Scalars["ID"];
  email: Scalars["String"];
  organizationId: Scalars["ID"];
  roles: Array<Scalars["String"]>;
};

export type EditDeploymentUserAccountPayload = {
  __typename?: "EditDeploymentUserAccountPayload";
  problem?: Maybe<EditDeploymentUserAccountProblem>;
  userAccount?: Maybe<UserAccount>;
};

export type EditDeploymentUserAccountProblem =
  | AuthenticationRequiredProblem
  | AuthorizationRequiredProblem
  | InvalidFieldProblem;

export type EditOrganizationUserAccountInput = {
  email: Scalars["String"];
  organizationId: Scalars["ID"];
  roles: Array<Scalars["String"]>;
};

export type EditOrganizationUserAccountPayload = {
  __typename?: "EditOrganizationUserAccountPayload";
  problem?: Maybe<EditOrganizationUserAccountProblem>;
  userAccount?: Maybe<UserAccount>;
};

export type EditOrganizationUserAccountProblem =
  | AuthenticationRequiredProblem
  | AuthorizationRequiredProblem
  | InvalidFieldProblem;

export type EndUser = {
  __typename?: "EndUser";
  createdAt: Scalars["String"];
  displayName?: Maybe<Scalars["String"]>;
  emailAddress: Scalars["String"];
  id: Scalars["ID"];
  status: Scalars["String"];
  updatedAt: Scalars["String"];
};

export type EndUserAlreadyExistProblem = Problem & {
  __typename?: "EndUserAlreadyExistProblem";
  message: Scalars["String"];
};

export type EndUserBulkImportInput = {
  collectionId: Scalars["String"];
  deploymentId: Scalars["String"];
  file: Scalars["Upload"];
  sendInvitationEmail: Scalars["Boolean"];
};

export type EndUserBulkImportItem = {
  __typename?: "EndUserBulkImportItem";
  email: Scalars["String"];
  message: Scalars["String"];
  reportedAt: Scalars["String"];
  severity: EndUserBulkImportItemSeverity;
};

export enum EndUserBulkImportItemSeverity {
  Error = "ERROR",
  Info = "INFO",
  None = "NONE",
  Warning = "WARNING",
}

export type EndUserBulkImportPayload = {
  __typename?: "EndUserBulkImportPayload";
  endUserBulkImport?: Maybe<EndUserBulkImportStatus>;
  problem?: Maybe<EndUserBulkImportProblem>;
};

export type EndUserBulkImportProblem =
  | AuthenticationRequiredProblem
  | AuthorizationRequiredProblem
  | BulkImportInProgressProblem
  | CollectionDoesNotExistProblem
  | DeploymentDoesNotExistProblem
  | InvalidFieldProblem;

export type EndUserBulkImportStatus = {
  __typename?: "EndUserBulkImportStatus";
  active: Scalars["Boolean"];
  bulkImportItems: Array<EndUserBulkImportItem>;
  collectionId: Scalars["String"];
  createdAt: Scalars["String"];
  deploymentId: Scalars["String"];
  filename: Scalars["String"];
  id: Scalars["ID"];
  importedAt: Scalars["String"];
  status: BulkImportStatus;
  totalFailedItemsCount: Scalars["Float"];
  totalImportedCount: Scalars["Float"];
  totalItemCount: Scalars["Float"];
  totalWarnedItemsCount: Scalars["Float"];
  updatedAt: Scalars["String"];
};

export type EndUserBulkImportStatusInput = {
  collectionId: Scalars["String"];
  deploymentId: Scalars["String"];
};

export type EndUserBulkImportStatusPayload = {
  __typename?: "EndUserBulkImportStatusPayload";
  endUserBulkImportStatus?: Maybe<EndUserBulkImportStatus>;
  problem?: Maybe<EndUserBulkImportStatusProblem>;
};

export type EndUserBulkImportStatusProblem =
  | AuthenticationRequiredProblem
  | AuthorizationRequiredProblem
  | CollectionDoesNotExistProblem
  | DeploymentDoesNotExistProblem;

export type EndUserCreateInput = {
  collectionId: Scalars["ID"];
  deploymentId: Scalars["ID"];
  doSendNotificationEmail: Scalars["Boolean"];
  endUserEmailAddress: Scalars["String"];
};

export type EndUserCreatePayload = {
  __typename?: "EndUserCreatePayload";
  endUser?: Maybe<EndUser>;
  problem?: Maybe<EndUserCreateProblem>;
};

export type EndUserCreateProblem =
  | AuthenticationRequiredProblem
  | AuthorizationRequiredProblem
  | BulkImportInProgressProblem
  | CollectionDoesNotExistProblem
  | DeploymentDoesNotExistProblem
  | InvalidFieldProblem;

export type EndUserDeleteInput = {
  collectionId: Scalars["ID"];
  deploymentId: Scalars["ID"];
  endUserEmailAddress: Scalars["String"];
};

export type EndUserDeletePayload = {
  __typename?: "EndUserDeletePayload";
  problem?: Maybe<EndUserDeleteProblem>;
};

export type EndUserDeleteProblem =
  | AuthenticationRequiredProblem
  | AuthorizationRequiredProblem
  | BulkImportInProgressProblem
  | CollectionDoesNotExistProblem
  | DeploymentDoesNotExistProblem
  | InvalidFieldProblem;

export type EndUserDoesNotExistProblem = Problem & {
  __typename?: "EndUserDoesNotExistProblem";
  message: Scalars["String"];
};

export type EndUserInput = {
  collectionId: Scalars["ID"];
  deploymentId: Scalars["ID"];
  endUserEmailAddress: Scalars["String"];
};

export type EndUserPayload = {
  __typename?: "EndUserPayload";
  endUser?: Maybe<EndUser>;
  problem?: Maybe<EndUserProblem>;
};

export type EndUserProblem =
  | AuthenticationRequiredProblem
  | AuthorizationRequiredProblem
  | CollectionDoesNotExistProblem
  | DeploymentDoesNotExistProblem
  | EndUserDoesNotExistProblem
  | InvalidFieldProblem;

export type EndUserRetryInput = {
  collectionId: Scalars["ID"];
  deploymentId: Scalars["ID"];
  endUserEmailAddress: Scalars["String"];
};

export type EndUserRetryPayload = {
  __typename?: "EndUserRetryPayload";
  endUser?: Maybe<EndUser>;
  problem?: Maybe<EndUserRetryProblem>;
};

export type EndUserRetryProblem =
  | AuthenticationRequiredProblem
  | AuthorizationRequiredProblem
  | BulkImportInProgressProblem
  | CollectionDoesNotExistProblem
  | DeploymentDoesNotExistProblem;

export enum EndUserStatus {
  Created = "CREATED",
  Deleted = "DELETED",
  ErrorToCreate = "ERROR_TO_CREATE",
  ErrorToDelete = "ERROR_TO_DELETE",
  None = "NONE",
  PendingToCreate = "PENDING_TO_CREATE",
  PendingToDelete = "PENDING_TO_DELETE",
}

export type EndUserSubscriptionResult = {
  __typename?: "EndUserSubscriptionResult";
  id: Scalars["ID"];
  status: Scalars["String"];
};

export type EndUsersInput = {
  collectionId: Scalars["ID"];
  deploymentId: Scalars["ID"];
};

export type EndUsersPayload = {
  __typename?: "EndUsersPayload";
  endUsers?: Maybe<Array<EndUser>>;
  problem?: Maybe<EndUsersProblem>;
};

export type EndUsersProblem =
  | AuthenticationRequiredProblem
  | AuthorizationRequiredProblem
  | CollectionDoesNotExistProblem
  | DeploymentDoesNotExistProblem;

export type Feature = {
  __typename?: "Feature";
  active?: Maybe<Scalars["Boolean"]>;
  createdAt?: Maybe<Scalars["String"]>;
  description?: Maybe<Scalars["String"]>;
  displayName?: Maybe<Scalars["String"]>;
  id: Scalars["ID"];
  metric?: Maybe<Scalars["String"]>;
  metricUnitType?: Maybe<MetricUnitType>;
  name?: Maybe<BillingFeature>;
  planTypeId?: Maybe<Scalars["String"]>;
  rate?: Maybe<Scalars["Float"]>;
  updatedAt?: Maybe<Scalars["String"]>;
};

export type FeatureRelease = {
  __typename?: "FeatureRelease";
  active: Scalars["Boolean"];
  createdAt: Scalars["String"];
  description: Scalars["String"];
  featureRelease: FeatureReleaseType;
  id: Scalars["ID"];
  organizationFullAccess: Scalars["Boolean"];
  organizationId?: Maybe<Scalars["String"]>;
  tag: FeatureReleaseTagType;
  updatedAt: Scalars["String"];
};

export enum FeatureReleaseTagType {
  Alpha = "ALPHA",
  Beta = "BETA",
  New = "NEW",
  None = "NONE",
  Release = "RELEASE",
}

export enum FeatureReleaseType {
  CustomDomain = "CUSTOM_DOMAIN",
  None = "NONE",
  SpaceGitRepository = "SPACE_GIT_REPOSITORY",
  VpnGateway = "VPN_GATEWAY",
}

export type FeatureReleasesInput = {
  organizationId: Scalars["ID"];
};

export type FeatureReleasesPayload = {
  __typename?: "FeatureReleasesPayload";
  featureRelease?: Maybe<Array<FeatureRelease>>;
  problem?: Maybe<FeatureReleasesProblem>;
};

export type FeatureReleasesProblem =
  | AuthenticationRequiredProblem
  | AuthorizationRequiredProblem;

export type FeedbackSubmitInput = {
  description: Scalars["String"];
  organizationId: Scalars["ID"];
  screenshotImageStoragePath?: Maybe<Scalars["String"]>;
};

export type FeedbackSubmitPayload = {
  __typename?: "FeedbackSubmitPayload";
  problem?: Maybe<FeedbackSubmitProblem>;
};

export type FeedbackSubmitProblem =
  | AuthenticationRequiredProblem
  | AuthorizationRequiredProblem
  | OrganizationDoesNotExistProblem
  | ScreenshotImageDoesNotExistProblem;

export type FixedCost = {
  __typename?: "FixedCost";
  charges?: Maybe<Array<Maybe<Charges>>>;
  deploymentId?: Maybe<Scalars["String"]>;
  endAt?: Maybe<Scalars["String"]>;
  id: Scalars["ID"];
  organizationId?: Maybe<Scalars["String"]>;
  planTypeId?: Maybe<Scalars["String"]>;
  startAt?: Maybe<Scalars["String"]>;
};

export type GraphqlSchemaValidationProblem = Problem & {
  __typename?: "GraphqlSchemaValidationProblem";
  message: Scalars["String"];
};

export type Ide = {
  __typename?: "Ide";
  active: Scalars["Boolean"];
  createdAt: Scalars["String"];
  icon: Scalars["String"];
  id: Scalars["ID"];
  name: Scalars["String"];
  productIdentifier: Scalars["String"];
  slug: Scalars["String"];
  updatedAt: Scalars["String"];
  version: Scalars["String"];
};

export type IdeProblem =
  | AuthenticationRequiredProblem
  | AuthorizationRequiredProblem;

export type IdesPayload = {
  __typename?: "IdesPayload";
  ide?: Maybe<Array<Maybe<Ide>>>;
  problem?: Maybe<IdeProblem>;
};

export type ImageAccessInput = {
  deploymentRegistryCredentialId: Scalars["String"];
  imageRepositoryUrl: Scalars["String"];
  imageTag: Scalars["String"];
  organizationId: Scalars["String"];
};

export type ImageAccessPayload = {
  __typename?: "ImageAccessPayload";
  imageAccess?: Maybe<Scalars["Boolean"]>;
  problem?: Maybe<ImageAccessProblem>;
};

export type ImageAccessProblem =
  | AuthenticationRequiredProblem
  | AuthorizationRequiredProblem
  | InvalidFieldProblem
  | RegistryCredentialDoNotBelongsToOrganizationProblem;

export type InvalidFieldProblem = Problem & {
  __typename?: "InvalidFieldProblem";
  message: Scalars["String"];
};

export type InvalidInviteTokenProblem = Problem & {
  __typename?: "InvalidInviteTokenProblem";
  message: Scalars["String"];
};

export type InviteAcceptPayload = {
  __typename?: "InviteAcceptPayload";
  problem?: Maybe<InviteAcceptProblem>;
};

export type InviteAcceptProblem =
  | CloudProcessingProblem
  | InvalidInviteTokenProblem;

export type MePayload = {
  __typename?: "MePayload";
  problem?: Maybe<MeProblem>;
  userAccount?: Maybe<UserAccount>;
};

export type MeProblem =
  | AuthenticationRequiredProblem
  | AuthorizationRequiredProblem;

export enum MetricUnitType {
  CustomInNone = "CUSTOM_IN_NONE",
  DataProcessedInByte = "DATA_PROCESSED_IN_BYTE",
  DataProcessedInGibibyte = "DATA_PROCESSED_IN_GIBIBYTE",
  DataProcessedInKibibyte = "DATA_PROCESSED_IN_KIBIBYTE",
  DataProcessedInMebibyte = "DATA_PROCESSED_IN_MEBIBYTE",
  None = "NONE",
  StorageTimeInByte_30Day = "STORAGE_TIME_IN_BYTE_30_DAY",
  StorageTimeInByteDay = "STORAGE_TIME_IN_BYTE_DAY",
  StorageTimeInByteHour = "STORAGE_TIME_IN_BYTE_HOUR",
  StorageTimeInByteMinute = "STORAGE_TIME_IN_BYTE_MINUTE",
  StorageTimeInByteSecond = "STORAGE_TIME_IN_BYTE_SECOND",
  StorageTimeInGibibyte_30Day = "STORAGE_TIME_IN_GIBIBYTE_30_DAY",
  StorageTimeInGibibyteDay = "STORAGE_TIME_IN_GIBIBYTE_DAY",
  StorageTimeInGibibyteHour = "STORAGE_TIME_IN_GIBIBYTE_HOUR",
  StorageTimeInGibibyteMinute = "STORAGE_TIME_IN_GIBIBYTE_MINUTE",
  StorageTimeInGibibyteSecond = "STORAGE_TIME_IN_GIBIBYTE_SECOND",
  StorageTimeInKibibyte_30Day = "STORAGE_TIME_IN_KIBIBYTE_30_DAY",
  StorageTimeInKibibyteDay = "STORAGE_TIME_IN_KIBIBYTE_DAY",
  StorageTimeInKibibyteHour = "STORAGE_TIME_IN_KIBIBYTE_HOUR",
  StorageTimeInKibibyteMinute = "STORAGE_TIME_IN_KIBIBYTE_MINUTE",
  StorageTimeInKibibyteSecond = "STORAGE_TIME_IN_KIBIBYTE_SECOND",
  StorageTimeInMebibyte_30Day = "STORAGE_TIME_IN_MEBIBYTE_30_DAY",
  StorageTimeInMebibyteDay = "STORAGE_TIME_IN_MEBIBYTE_DAY",
  StorageTimeInMebibyteHour = "STORAGE_TIME_IN_MEBIBYTE_HOUR",
  StorageTimeInMebibyteMinute = "STORAGE_TIME_IN_MEBIBYTE_MINUTE",
  StorageTimeInMebibyteSecond = "STORAGE_TIME_IN_MEBIBYTE_SECOND",
  TimeIn_30Day = "TIME_IN_30_DAY",
  TimeInDay = "TIME_IN_DAY",
  TimeInHour = "TIME_IN_HOUR",
  TimeInMinute = "TIME_IN_MINUTE",
  TimeInSecond = "TIME_IN_SECOND",
}

export type Mutation = {
  __typename?: "Mutation";
  addDeploymentUserAccount: AddDeploymentUserAccountPayload;
  addOrganizationUserAccount: AddOrganizationUserAccountPayload;
  catalogItemCreate: CatalogItemCreatePayload;
  catalogItemDelete: CatalogItemDeletePayload;
  catalogItemUpdate: CatalogItemUpdatePayload;
  collectionCreate?: Maybe<CollectionCreatePayload>;
  collectionDelete?: Maybe<CollectionDeletePayload>;
  collectionUpdate?: Maybe<CollectionUpdatePayload>;
  customDomainCreate: CustomDomainCreatePayload;
  customDomainDelete: CustomDomainDeletePayload;
  customDomainRevert: CustomDomainRevertPayload;
  customDomainUpdate: CustomDomainUpdatePayload;
  deploymentCreate?: Maybe<DeploymentCreatePayload>;
  deploymentDelete?: Maybe<DeploymentDeletePayload>;
  deploymentRegistryCredentialCreate: DeploymentRegistryCredentialCreatePayload;
  deploymentRegistryCredentialDelete: DeploymentRegistryCredentialDeletePayload;
  deploymentRegistryCredentialUpdate: DeploymentRegistryCredentialUpdatePayload;
  deploymentUpdate?: Maybe<DeploymentUpdatePayload>;
  deploymentVPNBasicInformationCreate: DeploymentVpnCreatePayload;
  deploymentVPNGoogleConfigurationCreate: DeploymentVpnCreatePayload;
  deploymentVPNGoogleCrossConnectivityCreate: DeploymentVpnCreatePayload;
  deploymentVPNGoogleResourcesCreate: DeploymentVpnCreatePayload;
  deploymentVPNPolicyUpdate: DeploymentVpnPolicyUpdatePayload;
  editDeploymentUserAccount: EditDeploymentUserAccountPayload;
  editOrganizationUserAccount: EditOrganizationUserAccountPayload;
  endUserBulkImport: EndUserBulkImportPayload;
  endUserCreate: EndUserCreatePayload;
  endUserDelete: EndUserDeletePayload;
  endUserRetry: EndUserRetryPayload;
  feedbackSubmit: FeedbackSubmitPayload;
  inviteAccept: InviteAcceptPayload;
  organizationDelete: OrganizationDeletePayload;
  organizationRegister: OrganizationRegisterPayload;
  organizationUpdate: OrganizationUpdatePayload;
  personalAccessTokenCreate: PersonalAccessTokenCreatePayload;
  personalAccessTokenDelete: PersonalAccessTokenDeletePayload;
  removeDeploymentUserAccount: RemoveDeploymentUserAccountPayload;
  removeOrganizationUserAccount: RemoveOrganizationUserAccountPayload;
  spaceCreate: SpaceCreatePayload;
  spaceDelete: SpaceDeletePayload;
  spaceGitRepositoryCreate: SpaceGitRepositoryCreatePayload;
  spaceGitRepositoryDelete: SpaceGitRepositoryDeletePayload;
  spaceRetry: SpaceRetryPayload;
  spaceUpdate: SpaceUpdatePayload;
  supportRequest: SupportRequestPayload;
  userTrialRegister: UserTrialRegisterPayload;
};

export type MutationAddDeploymentUserAccountArgs = {
  input: AddDeploymentUserAccountInput;
};

export type MutationAddOrganizationUserAccountArgs = {
  input: AddOrganizationUserAccountInput;
};

export type MutationCatalogItemCreateArgs = {
  input: CatalogItemCreateInput;
};

export type MutationCatalogItemDeleteArgs = {
  input: CatalogItemDeleteInput;
};

export type MutationCatalogItemUpdateArgs = {
  input: CatalogItemUpdateInput;
};

export type MutationCollectionCreateArgs = {
  input: CollectionCreateInput;
};

export type MutationCollectionDeleteArgs = {
  input: CollectionDeleteInput;
};

export type MutationCollectionUpdateArgs = {
  input: CollectionUpdateInput;
};

export type MutationCustomDomainCreateArgs = {
  input: CustomDomainCreateInput;
};

export type MutationCustomDomainDeleteArgs = {
  input: CustomDomainDeleteInput;
};

export type MutationCustomDomainRevertArgs = {
  input: CustomDomainRevertInput;
};

export type MutationCustomDomainUpdateArgs = {
  input: CustomDomainUpdateInput;
};

export type MutationDeploymentCreateArgs = {
  input: DeploymentCreateInput;
};

export type MutationDeploymentDeleteArgs = {
  input: DeploymentDeleteInput;
};

export type MutationDeploymentRegistryCredentialCreateArgs = {
  input: DeploymentRegistryCredentialCreateInput;
};

export type MutationDeploymentRegistryCredentialDeleteArgs = {
  input: DeploymentRegistryCredentialDeleteInput;
};

export type MutationDeploymentRegistryCredentialUpdateArgs = {
  input: DeploymentRegistryCredentialUpdateInput;
};

export type MutationDeploymentUpdateArgs = {
  input: DeploymentUpdateInput;
};

export type MutationDeploymentVpnBasicInformationCreateArgs = {
  input: DeploymentVpnBasicInformationCreateInput;
};

export type MutationDeploymentVpnGoogleConfigurationCreateArgs = {
  input: DeploymentVpnGoogleConfigurationCreateInput;
};

export type MutationDeploymentVpnGoogleCrossConnectivityCreateArgs = {
  input: DeploymentVpnGoogleCrossConnectivityInput;
};

export type MutationDeploymentVpnGoogleResourcesCreateArgs = {
  input: DeploymentVpnGoogleResourcesInput;
};

export type MutationDeploymentVpnPolicyUpdateArgs = {
  input: DeploymentVpnPolicyUpdateInput;
};

export type MutationEditDeploymentUserAccountArgs = {
  input: EditDeploymentUserAccountInput;
};

export type MutationEditOrganizationUserAccountArgs = {
  input: EditOrganizationUserAccountInput;
};

export type MutationEndUserBulkImportArgs = {
  input: EndUserBulkImportInput;
};

export type MutationEndUserCreateArgs = {
  input: EndUserCreateInput;
};

export type MutationEndUserDeleteArgs = {
  input: EndUserDeleteInput;
};

export type MutationEndUserRetryArgs = {
  input: EndUserRetryInput;
};

export type MutationFeedbackSubmitArgs = {
  input: FeedbackSubmitInput;
};

export type MutationInviteAcceptArgs = {
  token: Scalars["String"];
};

export type MutationOrganizationDeleteArgs = {
  input: OrganizationDeleteInput;
};

export type MutationOrganizationRegisterArgs = {
  input: OrganizationRegisterInput;
};

export type MutationOrganizationUpdateArgs = {
  input: OrganizationUpdateInput;
};

export type MutationPersonalAccessTokenCreateArgs = {
  input: PersonalAccessTokenCreateInput;
};

export type MutationPersonalAccessTokenDeleteArgs = {
  input: PersonalAccessTokenDeleteInput;
};

export type MutationRemoveDeploymentUserAccountArgs = {
  input: RemoveDeploymentUserAccountInput;
};

export type MutationRemoveOrganizationUserAccountArgs = {
  input: RemoveOrganizationUserAccountInput;
};

export type MutationSpaceCreateArgs = {
  input: SpaceCreateInput;
};

export type MutationSpaceDeleteArgs = {
  input: SpaceDeleteInput;
};

export type MutationSpaceGitRepositoryCreateArgs = {
  input: SpaceGitRepositoryCreateInput;
};

export type MutationSpaceGitRepositoryDeleteArgs = {
  input: SpaceGitRepositoryDeleteInput;
};

export type MutationSpaceRetryArgs = {
  input: SpaceRetryInput;
};

export type MutationSpaceUpdateArgs = {
  input: SpaceUpdateInput;
};

export type MutationSupportRequestArgs = {
  input: SupportRequestInput;
};

export type MutationUserTrialRegisterArgs = {
  input: UserTrialRegisterInput;
};

export type Organization = Resource & {
  __typename?: "Organization";
  billingCost?: Maybe<Billing>;
  catalogItems: Array<CatalogItem>;
  deploymentRegistryCredentials: Array<DeploymentRegistryCredential>;
  deployments: Array<Deployment>;
  fixedCost?: Maybe<Array<Maybe<FixedCost>>>;
  id: Scalars["ID"];
  name: Scalars["String"];
  plan?: Maybe<Plan>;
  planAssets: Array<PlanAsset>;
  resourceUsageBilling?: Maybe<Array<Maybe<ResourceUsageBilling>>>;
  sessionBilling?: Maybe<Array<Maybe<SessionBilling>>>;
  settings: OrganizationSettings;
  supportTickets: Array<SupportTicket>;
  userAccounts: Array<UserAccount>;
};

export type OrganizationBillingCostArgs = {
  variables?: Maybe<BillingFeature>;
  windowEnd: Scalars["String"];
  windowStart: Scalars["String"];
};

export type OrganizationFixedCostArgs = {
  windowEnd: Scalars["String"];
  windowStart: Scalars["String"];
};

export type OrganizationResourceUsageBillingArgs = {
  windowEnd: Scalars["String"];
  windowStart: Scalars["String"];
};

export type OrganizationSessionBillingArgs = {
  windowEnd: Scalars["String"];
  windowStart: Scalars["String"];
};

export type OrganizationCannotPublishCatalogItemsProblem = Problem & {
  __typename?: "OrganizationCannotPublishCatalogItemsProblem";
  message: Scalars["String"];
};

export type OrganizationDeleteInput = {
  id: Scalars["ID"];
};

export type OrganizationDeletePayload = {
  __typename?: "OrganizationDeletePayload";
  problem?: Maybe<OrganizationDeleteProblem>;
  query: Query;
};

export type OrganizationDeleteProblem =
  | AuthenticationRequiredProblem
  | AuthorizationRequiredProblem
  | OrganizationDoesNotExistProblem;

export type OrganizationDoesNotExistProblem = Problem & {
  __typename?: "OrganizationDoesNotExistProblem";
  message: Scalars["String"];
};

export type OrganizationInput = {
  id: Scalars["ID"];
};

export type OrganizationPayload = {
  __typename?: "OrganizationPayload";
  organization?: Maybe<Organization>;
  problem?: Maybe<OrganizationProblem>;
};

export type OrganizationProblem =
  | AuthenticationRequiredProblem
  | OrganizationDoesNotExistProblem;

export type OrganizationRegisterInput = {
  name: Scalars["String"];
  subscriptionToken: Scalars["String"];
};

export type OrganizationRegisterPayload = {
  __typename?: "OrganizationRegisterPayload";
  organization?: Maybe<Organization>;
  problem?: Maybe<OrganizationRegisterProblem>;
  query: Query;
};

export type OrganizationRegisterProblem =
  | AuthenticationRequiredProblem
  | AuthorizationRequiredProblem
  | InvalidFieldProblem;

export type OrganizationSettings = {
  __typename?: "OrganizationSettings";
  catalogImageName: Scalars["String"];
  catalogImageRepository: Scalars["String"];
  catalogImageTag: Scalars["String"];
  displayNewDeploymentButton: Scalars["Boolean"];
  displayStorageModeSetting: Scalars["Boolean"];
  displayVpcPeeringSection: Scalars["Boolean"];
  egressAllowlistAddresses: Array<Scalars["String"]>;
  egressAllowlistDomains: Array<Scalars["String"]>;
  enableUnfinishedFeatures: Scalars["Boolean"];
  prohibitEgressTraffic: Scalars["Boolean"];
  sessionTimeoutInMinutes: Scalars["Int"];
};

export type OrganizationTrialNotReadyProblem = Problem & {
  __typename?: "OrganizationTrialNotReadyProblem";
  message: Scalars["String"];
};

export type OrganizationUpdateInput = {
  id: Scalars["ID"];
  name: Scalars["String"];
};

export type OrganizationUpdatePayload = {
  __typename?: "OrganizationUpdatePayload";
  organization?: Maybe<Organization>;
  problem?: Maybe<OrganizationUpdateProblem>;
  query: Query;
};

export type OrganizationUpdateProblem =
  | AuthenticationRequiredProblem
  | AuthorizationRequiredProblem
  | InvalidFieldProblem
  | OrganizationDoesNotExistProblem;

export type OrganizationWithoutAccessToImageProblem = Problem & {
  __typename?: "OrganizationWithoutAccessToImageProblem";
  message: Scalars["String"];
};

export type PersonalAccessToken = {
  __typename?: "PersonalAccessToken";
  createdAt: Scalars["String"];
  customToken?: Maybe<Scalars["String"]>;
  description: Scalars["String"];
  expiredAt?: Maybe<Scalars["String"]>;
  id: Scalars["ID"];
  roles: Array<UserAdminRole>;
  updatedAt: Scalars["String"];
  userId: Scalars["String"];
};

export type PersonalAccessTokenCreateInput = {
  description: Scalars["String"];
  email: Scalars["String"];
  expiredAt?: Maybe<Scalars["String"]>;
  roles: Array<Scalars["String"]>;
};

export type PersonalAccessTokenCreatePayload = {
  __typename?: "PersonalAccessTokenCreatePayload";
  personalAccessToken?: Maybe<PersonalAccessToken>;
  problem?: Maybe<PersonalAccessTokenCreateProblem>;
};

export type PersonalAccessTokenCreateProblem =
  | AuthenticationRequiredProblem
  | AuthorizationRequiredProblem;

export type PersonalAccessTokenDeleteInput = {
  email: Scalars["String"];
  personalAccessTokenId: Scalars["String"];
};

export type PersonalAccessTokenDeletePayload = {
  __typename?: "PersonalAccessTokenDeletePayload";
  problem?: Maybe<PersonalAccessTokenDeleteProblem>;
};

export type PersonalAccessTokenDeleteProblem =
  | AuthenticationRequiredProblem
  | AuthorizationRequiredProblem
  | PersonalAccessTokenDoesNotExistProblem;

export type PersonalAccessTokenDoesNotExistProblem = Problem & {
  __typename?: "PersonalAccessTokenDoesNotExistProblem";
  message: Scalars["String"];
};

export type PersonalAccessTokensInput = {
  email: Scalars["String"];
};

export type PersonalAccessTokensPayload = {
  __typename?: "PersonalAccessTokensPayload";
  personalAccessToken?: Maybe<Array<PersonalAccessToken>>;
  problem?: Maybe<PersonalAccessTokensProblem>;
};

export type PersonalAccessTokensProblem =
  | AuthenticationRequiredProblem
  | AuthorizationRequiredProblem;

export type Plan = {
  __typename?: "Plan";
  accountId?: Maybe<Scalars["String"]>;
  active?: Maybe<Scalars["Boolean"]>;
  createdAt?: Maybe<Scalars["String"]>;
  endAt?: Maybe<Scalars["String"]>;
  entitlementId?: Maybe<Scalars["String"]>;
  id: Scalars["ID"];
  organizationId?: Maybe<Scalars["String"]>;
  planType?: Maybe<PlanType>;
  planTypeId?: Maybe<Scalars["String"]>;
  providerTypeId?: Maybe<Scalars["String"]>;
  startAt?: Maybe<Scalars["String"]>;
  status?: Maybe<PlanStatusType>;
  updatedAt?: Maybe<Scalars["String"]>;
  usageReportingId?: Maybe<Scalars["String"]>;
};

export type PlanAsset = {
  __typename?: "PlanAsset";
  id: Scalars["ID"];
  name?: Maybe<PlanAssetName>;
  sourceType?: Maybe<PlanAssetSourceType>;
};

export enum PlanAssetDenied {
  Deployment = "DEPLOYMENT",
  DeploymentRegion = "DEPLOYMENT_REGION",
  Image = "IMAGE",
  RegistryCredential = "REGISTRY_CREDENTIAL",
}

export enum PlanAssetName {
  PropertyValueDeploymentRegion = "PROPERTY_VALUE_DEPLOYMENT_REGION",
  ResourceCatalogApp = "RESOURCE_CATALOG_APP",
  ResourceCustomDomain = "RESOURCE_CUSTOM_DOMAIN",
  ResourceDeployment = "RESOURCE_DEPLOYMENT",
  ResourceDeploymentRegistryCredential = "RESOURCE_DEPLOYMENT_REGISTRY_CREDENTIAL",
  ResourceDeploymentVpn = "RESOURCE_DEPLOYMENT_VPN",
}

export enum PlanAssetSourceType {
  Property = "PROPERTY",
  PropertyValue = "PROPERTY_VALUE",
  Resource = "RESOURCE",
}

export type PlanDiscount = {
  __typename?: "PlanDiscount";
  createdAt: Scalars["String"];
  description: Scalars["String"];
  endAt?: Maybe<Scalars["String"]>;
  id: Scalars["ID"];
  organizationId: Scalars["String"];
  planDiscountType: PlanDiscountType;
  planId: Scalars["String"];
  startAt: Scalars["String"];
  updatedAt: Scalars["String"];
  value: Scalars["Float"];
};

export enum PlanDiscountType {
  None = "NONE",
  Numeric = "NUMERIC",
  Percentual = "PERCENTUAL",
}

export type PlanDiscountsInput = {
  organizationId: Scalars["String"];
};

export type PlanDiscountsPayload = {
  __typename?: "PlanDiscountsPayload";
  planDiscounts?: Maybe<Array<Maybe<PlanDiscount>>>;
  problem?: Maybe<PlanDiscountsProblem>;
};

export type PlanDiscountsProblem = AuthenticationRequiredProblem;

export type PlanListPayload = {
  __typename?: "PlanListPayload";
  plans?: Maybe<Array<Maybe<PlanType>>>;
  problem?: Maybe<PlanListProblem>;
};

export type PlanListProblem = AuthenticationRequiredProblem;

export enum PlanStatusType {
  Deactivated = "DEACTIVATED",
  ErrorToActivate = "ERROR_TO_ACTIVATE",
  ErrorToChange = "ERROR_TO_CHANGE",
  ErrorToDeactivate = "ERROR_TO_DEACTIVATE",
  None = "NONE",
  PendingToActivate = "PENDING_TO_ACTIVATE",
  Ready = "READY",
}

export type PlanType = {
  __typename?: "PlanType";
  active?: Maybe<Scalars["Boolean"]>;
  code?: Maybe<Scalars["String"]>;
  createdAt?: Maybe<Scalars["String"]>;
  description?: Maybe<Scalars["String"]>;
  externalPlanIdentifier?: Maybe<Scalars["String"]>;
  feature?: Maybe<Array<Maybe<Feature>>>;
  id: Scalars["ID"];
  name?: Maybe<Scalars["String"]>;
  order?: Maybe<Scalars["Int"]>;
  providerTypeId?: Maybe<Scalars["String"]>;
  updatedAt?: Maybe<Scalars["String"]>;
  visible?: Maybe<Scalars["Boolean"]>;
};

export type Problem = {
  message: Scalars["String"];
};

export type Query = {
  __typename?: "Query";
  accessRoles?: Maybe<AccessRolesPayload>;
  catalogItem: CatalogItemPayload;
  collection?: Maybe<CollectionPayload>;
  collections?: Maybe<CollectionsPayload>;
  customDomains?: Maybe<CustomDomainsPayload>;
  defaultDeploymentClusterConfiguration?: Maybe<DefaultDeploymentClusterConfigurationPayload>;
  deployment?: Maybe<DeploymentPayload>;
  deploymentNatGateways?: Maybe<DeploymentNatGatewaysPayload>;
  deploymentRegions?: Maybe<DeploymentRegionsPayload>;
  deploymentVPN?: Maybe<DeploymentVpnPayload>;
  deploymentVPNDraft?: Maybe<DeploymentVpnDraftPayload>;
  deploymentVPNs?: Maybe<DeploymentVpNsPayload>;
  deployments?: Maybe<DeploymentsPayload>;
  endUser?: Maybe<EndUserPayload>;
  endUserBulkImportStatus: EndUserBulkImportStatusPayload;
  endUsers?: Maybe<EndUsersPayload>;
  featureReleases: FeatureReleasesPayload;
  ides?: Maybe<IdesPayload>;
  imageAccess?: Maybe<ImageAccessPayload>;
  me: MePayload;
  organization?: Maybe<OrganizationPayload>;
  personalAccessTokens: PersonalAccessTokensPayload;
  planDiscounts?: Maybe<PlanDiscountsPayload>;
  plans?: Maybe<PlanListPayload>;
  rolePermissions?: Maybe<RolePermissionsPayload>;
  roles?: Maybe<RolesPayload>;
  runtimes?: Maybe<RuntimesPayload>;
  session: SessionPayload;
  space: SpacePayload;
  spaceGitRepositories: SpaceGitRepositoriesPayload;
  spaces?: Maybe<SpacesPayload>;
  userAccounts: UserAccountsPayload;
  versionControlRepositories?: Maybe<VersionControlRepositoriesPayload>;
  versionControlRepositoryDetails?: Maybe<VersionControlRepositoryDetailsPayload>;
};

export type QueryAccessRolesArgs = {
  email: Scalars["String"];
};

export type QueryCatalogItemArgs = {
  input: CatalogItemInput;
};

export type QueryCollectionArgs = {
  input: CollectionInput;
};

export type QueryCollectionsArgs = {
  input: CollectionsInput;
};

export type QueryCustomDomainsArgs = {
  input: CustomDomainsInput;
};

export type QueryDefaultDeploymentClusterConfigurationArgs = {
  input: DefaultDeploymentClusterConfigurationInput;
};

export type QueryDeploymentArgs = {
  input: DeploymentInput;
};

export type QueryDeploymentNatGatewaysArgs = {
  input: DeploymentNatGatewaysInput;
};

export type QueryDeploymentRegionsArgs = {
  input: DeploymentRegionsInput;
};

export type QueryDeploymentVpnArgs = {
  input: DeploymentVpnInput;
};

export type QueryDeploymentVpnDraftArgs = {
  input: DeploymentVpnDraftInput;
};

export type QueryDeploymentVpNsArgs = {
  input: DeploymentVpNsInput;
};

export type QueryDeploymentsArgs = {
  input: DeploymentsInput;
};

export type QueryEndUserArgs = {
  input: EndUserInput;
};

export type QueryEndUserBulkImportStatusArgs = {
  input: EndUserBulkImportStatusInput;
};

export type QueryEndUsersArgs = {
  input: EndUsersInput;
};

export type QueryFeatureReleasesArgs = {
  input: FeatureReleasesInput;
};

export type QueryImageAccessArgs = {
  input: ImageAccessInput;
};

export type QueryOrganizationArgs = {
  input: OrganizationInput;
};

export type QueryPersonalAccessTokensArgs = {
  input: PersonalAccessTokensInput;
};

export type QueryPlanDiscountsArgs = {
  input: PlanDiscountsInput;
};

export type QueryRolePermissionsArgs = {
  input: RolePermissionsInput;
};

export type QueryRolesArgs = {
  roleAccess: RoleAccess;
};

export type QuerySessionArgs = {
  input: SessionInput;
};

export type QuerySpaceArgs = {
  input: SpaceInput;
};

export type QuerySpaceGitRepositoriesArgs = {
  input: SpaceGitRepositoriesInput;
};

export type QuerySpacesArgs = {
  input: SpacesInput;
};

export type QueryUserAccountsArgs = {
  input: UserAccountsInput;
};

export type QueryVersionControlRepositoriesArgs = {
  input: VersionControlRepositoriesInput;
};

export type QueryVersionControlRepositoryDetailsArgs = {
  input: VersionControlRepositoriesInput;
};

export type RegistryCredentialDoNotBelongsToOrganizationProblem = Problem & {
  __typename?: "RegistryCredentialDoNotBelongsToOrganizationProblem";
  message: Scalars["String"];
};

export type RemoveDeploymentUserAccountInput = {
  deploymentId: Scalars["ID"];
  email: Scalars["String"];
  organizationId: Scalars["ID"];
  roles: Array<Scalars["String"]>;
};

export type RemoveDeploymentUserAccountPayload = {
  __typename?: "RemoveDeploymentUserAccountPayload";
  problem?: Maybe<RemoveDeploymentUserAccountProblem>;
  userAccount?: Maybe<UserAccount>;
};

export type RemoveDeploymentUserAccountProblem =
  | AuthenticationRequiredProblem
  | AuthorizationRequiredProblem
  | InvalidFieldProblem;

export type RemoveOrganizationUserAccountInput = {
  email: Scalars["String"];
  organizationId: Scalars["ID"];
  roles: Array<Scalars["String"]>;
};

export type RemoveOrganizationUserAccountPayload = {
  __typename?: "RemoveOrganizationUserAccountPayload";
  problem?: Maybe<RemoveOrganizationUserAccountProblem>;
  userAccount?: Maybe<UserAccount>;
};

export type RemoveOrganizationUserAccountProblem =
  | AuthenticationRequiredProblem
  | AuthorizationRequiredProblem
  | InvalidFieldProblem;

export type Resource = {
  id: Scalars["ID"];
  name: Scalars["String"];
};

export enum ResourceState {
  CreationFailed = "CREATION_FAILED",
  CreationPending = "CREATION_PENDING",
  DeletionFailed = "DELETION_FAILED",
  DeletionPending = "DELETION_PENDING",
  None = "NONE",
  Ready = "READY",
  UpdateFailed = "UPDATE_FAILED",
  UpdatePending = "UPDATE_PENDING",
}

export enum ResourceType {
  None = "NONE",
  Storage = "STORAGE",
}

export type ResourceUsageBilling = {
  __typename?: "ResourceUsageBilling";
  charges?: Maybe<Array<Maybe<Charges>>>;
  collectionId?: Maybe<Scalars["String"]>;
  createdAt?: Maybe<Scalars["String"]>;
  deploymentId?: Maybe<Scalars["String"]>;
  endAt?: Maybe<Scalars["String"]>;
  id: Scalars["ID"];
  organizationId?: Maybe<Scalars["String"]>;
  planTypeId?: Maybe<Scalars["String"]>;
  resource?: Maybe<ResourceType>;
  spaceId?: Maybe<Scalars["String"]>;
  startAt?: Maybe<Scalars["String"]>;
  updatedAt?: Maybe<Scalars["String"]>;
  userEmailAddress?: Maybe<Scalars["String"]>;
  userId?: Maybe<Scalars["String"]>;
};

export enum RoleAccess {
  Deployment = "DEPLOYMENT",
  Organization = "ORGANIZATION",
}

export enum RoleLevel {
  Editor = "EDITOR",
  Owner = "OWNER",
  Viewer = "VIEWER",
}

export type RolePermission = {
  __typename?: "RolePermission";
  deploymentId?: Maybe<Scalars["String"]>;
  organizationFullAccess: Scalars["Boolean"];
  organizationId: Scalars["String"];
  permissions: Array<Scalars["String"]>;
  userEmail: Scalars["String"];
  userId: Scalars["String"];
};

export type RolePermissionsInput = {
  deploymentId?: Maybe<Scalars["String"]>;
  organizationId: Scalars["String"];
};

export type RolePermissionsPayload = {
  __typename?: "RolePermissionsPayload";
  problem?: Maybe<RolePermissionsProblem>;
  rolePermissions?: Maybe<RolePermission>;
};

export type RolePermissionsProblem =
  | AuthenticationRequiredProblem
  | AuthorizationRequiredProblem;

export type RolesPayload = {
  __typename?: "RolesPayload";
  problem?: Maybe<RolesProblem>;
  roles?: Maybe<Array<Maybe<UserAdminRole>>>;
};

export type RolesProblem =
  | AuthenticationRequiredProblem
  | AuthorizationRequiredProblem;

export type Runtime = {
  __typename?: "Runtime";
  active: Scalars["Boolean"];
  createdAt: Scalars["String"];
  icon: Scalars["String"];
  id: Scalars["ID"];
  name: Scalars["String"];
  productIdentifier: Scalars["String"];
  slug: Scalars["String"];
  updatedAt: Scalars["String"];
  version: Scalars["String"];
};

export type RuntimeProblem =
  | AuthenticationRequiredProblem
  | AuthorizationRequiredProblem;

export type RuntimesPayload = {
  __typename?: "RuntimesPayload";
  problem?: Maybe<RuntimeProblem>;
  runtime?: Maybe<Array<Maybe<Runtime>>>;
};

export type ScreenshotImageDoesNotExistProblem = Problem & {
  __typename?: "ScreenshotImageDoesNotExistProblem";
  message: Scalars["String"];
};

export type Session = {
  __typename?: "Session";
  end: Scalars["String"];
  endUserEmailAddress: Scalars["String"];
  id: Scalars["ID"];
  perMinutePageSize: Scalars["Int"];
  start: Scalars["String"];
  statistics?: Maybe<SessionStatistics>;
  statisticsPerMinute?: Maybe<SessionStatisticsPerMinute>;
};

export type SessionBilling = {
  __typename?: "SessionBilling";
  charges?: Maybe<Array<Maybe<Charges>>>;
  collectionId?: Maybe<Scalars["String"]>;
  createdAt?: Maybe<Scalars["String"]>;
  deploymentId?: Maybe<Scalars["String"]>;
  endAt?: Maybe<Scalars["String"]>;
  id: Scalars["ID"];
  organizationId?: Maybe<Scalars["String"]>;
  sessionId?: Maybe<Scalars["String"]>;
  sessionStatsId?: Maybe<Scalars["String"]>;
  spaceId?: Maybe<Scalars["String"]>;
  startAt?: Maybe<Scalars["String"]>;
  updatedAt?: Maybe<Scalars["String"]>;
  userEmailAddress?: Maybe<Scalars["String"]>;
  userId?: Maybe<Scalars["String"]>;
};

export type SessionDoesNotExistProblem = Problem & {
  __typename?: "SessionDoesNotExistProblem";
  message: Scalars["String"];
};

export type SessionFilters = {
  endUserEmailAddresses?: Maybe<Array<Scalars["String"]>>;
  windowEnd?: Maybe<Scalars["Timestamp"]>;
  windowStart?: Maybe<Scalars["Timestamp"]>;
};

export type SessionInput = {
  collectionId: Scalars["ID"];
  deploymentId: Scalars["ID"];
  organizationId: Scalars["ID"];
  perMinutePageIndex?: Maybe<Scalars["Int"]>;
  sessionId: Scalars["ID"];
  spaceId: Scalars["ID"];
};

export type SessionPayload = {
  __typename?: "SessionPayload";
  problem?: Maybe<SessionProblem>;
  session?: Maybe<Session>;
};

export type SessionProblem =
  | AuthenticationRequiredProblem
  | AuthorizationRequiredProblem
  | CollectionDoesNotExistProblem
  | DeploymentDoesNotExistProblem
  | OrganizationDoesNotExistProblem
  | SessionDoesNotExistProblem
  | SpaceDoesNotExistProblem;

export type SessionStatistics = {
  __typename?: "SessionStatistics";
  averageComputeUsedInCores: Scalars["Float"];
  averageEphemeralStorageUsedInGigabytes: Scalars["Float"];
  averageMemoryUsedInGigabytes: Scalars["Float"];
  totalSessionTimeUsedInHours: Scalars["Float"];
};

export type SessionStatisticsPerMinute = {
  __typename?: "SessionStatisticsPerMinute";
  averageComputeUsedInCoresPerMinute: Array<TimestampedFloat>;
  averageEphemeralStorageUsedInGigabytesPerMinute: Array<TimestampedFloat>;
  averageMemoryUsedInGigabytesPerMinute: Array<TimestampedFloat>;
  perMinuteEndAt: Scalars["String"];
  perMinutePageIndex: Scalars["Int"];
  perMinutePageSize: Scalars["Int"];
  perMinuteStartAt: Scalars["String"];
  totalSessionTimeUsedPerMinute: Array<TimestampedFloat>;
};

export type Space = {
  __typename?: "Space";
  catalogItem: CatalogItem;
  catalogItemOrganizationId: Scalars["ID"];
  createdAt: Scalars["String"];
  description: Scalars["String"];
  icon: Scalars["String"];
  id: Scalars["ID"];
  imageRepositoryUrl: Scalars["String"];
  imageTag: Scalars["String"];
  launcherUrl: Scalars["String"];
  name: Scalars["String"];
  sessions: Array<Session>;
  settings: SpaceSettings;
  slug: Scalars["String"];
  state: ResourceState;
  stateMessage: Scalars["String"];
  statistics?: Maybe<SpaceStatistics>;
  updatedAt: Scalars["String"];
};

export type SpaceSessionsArgs = {
  filters?: Maybe<SessionFilters>;
};

export type SpaceStatisticsArgs = {
  windowEnd: Scalars["Timestamp"];
  windowStart: Scalars["Timestamp"];
};

export type SpaceAlreadyExistsProblem = Problem & {
  __typename?: "SpaceAlreadyExistsProblem";
  message: Scalars["String"];
};

export type SpaceCreateInput = {
  catalogItemId: Scalars["ID"];
  catalogItemOrganizationId: Scalars["ID"];
  collectionId: Scalars["ID"];
  deploymentId: Scalars["ID"];
  description?: Maybe<Scalars["String"]>;
  icon?: Maybe<Scalars["String"]>;
  name: Scalars["String"];
  settings: SpaceSettingsInput;
};

export type SpaceCreatePayload = {
  __typename?: "SpaceCreatePayload";
  problem?: Maybe<SpaceCreateProblem>;
  space?: Maybe<Space>;
};

export type SpaceCreateProblem =
  | AssetAccessDenied
  | AuthenticationRequiredProblem
  | AuthorizationRequiredProblem
  | CollectionDoesNotExistProblem
  | DeploymentDoesNotExistProblem
  | SpaceAlreadyExistsProblem;

export type SpaceDeleteInput = {
  collectionId: Scalars["ID"];
  deploymentId: Scalars["ID"];
  forceShutDownAllSessions?: Maybe<Scalars["Boolean"]>;
  spaceId: Scalars["ID"];
};

export type SpaceDeletePayload = {
  __typename?: "SpaceDeletePayload";
  problem?: Maybe<SpaceDeleteProblem>;
};

export type SpaceDeleteProblem =
  | ActiveEndUsersProblem
  | AuthenticationRequiredProblem
  | AuthorizationRequiredProblem
  | SpaceDoesNotExistProblem
  | SpaceNotReadyProblem;

export type SpaceDoesNotExistProblem = Problem & {
  __typename?: "SpaceDoesNotExistProblem";
  message: Scalars["String"];
};

export type SpaceGitRepositoriesInput = {
  collectionId: Scalars["ID"];
  deploymentId: Scalars["ID"];
  spaceId: Scalars["ID"];
};

export type SpaceGitRepositoriesPayload = {
  __typename?: "SpaceGitRepositoriesPayload";
  problem?: Maybe<SpaceGitRepositoriesProblem>;
  spaceGitRepositories?: Maybe<Array<Maybe<SpaceGitRepository>>>;
};

export type SpaceGitRepositoriesProblem =
  | AuthenticationRequiredProblem
  | AuthorizationRequiredProblem
  | CollectionDoesNotExistProblem
  | DeploymentDoesNotExistProblem
  | SpaceDoesNotExistProblem;

export type SpaceGitRepository = {
  __typename?: "SpaceGitRepository";
  collectionId: Scalars["String"];
  createdAt: Scalars["String"];
  deploymentId: Scalars["String"];
  gitUrl: Scalars["String"];
  id: Scalars["ID"];
  organizationId: Scalars["String"];
  spaceId: Scalars["String"];
  updatedAt: Scalars["String"];
};

export type SpaceGitRepositoryCreateInput = {
  collectionId: Scalars["ID"];
  deploymentId: Scalars["ID"];
  gitUrl: Array<Scalars["String"]>;
  spaceId: Scalars["ID"];
};

export type SpaceGitRepositoryCreatePayload = {
  __typename?: "SpaceGitRepositoryCreatePayload";
  problem?: Maybe<SpaceGitRepositoryCreateProblem>;
  spaceGitRepository?: Maybe<SpaceGitRepository>;
};

export type SpaceGitRepositoryCreateProblem =
  | AuthenticationRequiredProblem
  | AuthorizationRequiredProblem
  | CollectionDoesNotExistProblem
  | DeploymentDoesNotExistProblem
  | SpaceDoesNotExistProblem
  | SpaceGitRepositoryDuplicatedProblem
  | SpaceNotReadyProblem;

export type SpaceGitRepositoryDeleteInput = {
  collectionId: Scalars["ID"];
  deploymentId: Scalars["ID"];
  spaceGitRepositoryId: Scalars["ID"];
  spaceId: Scalars["ID"];
};

export type SpaceGitRepositoryDeletePayload = {
  __typename?: "SpaceGitRepositoryDeletePayload";
  problem?: Maybe<SpaceGitRepositoryDeleteProblem>;
};

export type SpaceGitRepositoryDeleteProblem =
  | AuthenticationRequiredProblem
  | AuthorizationRequiredProblem
  | CollectionDoesNotExistProblem
  | DeploymentDoesNotExistProblem
  | SpaceDoesNotExistProblem
  | SpaceGitRepositoryDoesNotExistProblem
  | SpaceNotReadyProblem;

export type SpaceGitRepositoryDoesNotExistProblem = Problem & {
  __typename?: "SpaceGitRepositoryDoesNotExistProblem";
  message: Scalars["String"];
};

export type SpaceGitRepositoryDuplicatedProblem = Problem & {
  __typename?: "SpaceGitRepositoryDuplicatedProblem";
  message: Scalars["String"];
};

export type SpaceInput = {
  collectionId: Scalars["ID"];
  deploymentId: Scalars["ID"];
  spaceId: Scalars["ID"];
};

export type SpaceNotReadyProblem = Problem & {
  __typename?: "SpaceNotReadyProblem";
  message: Scalars["String"];
};

export type SpacePayload = {
  __typename?: "SpacePayload";
  problem?: Maybe<SpaceProblem>;
  space?: Maybe<Space>;
};

export type SpaceProblem =
  | AuthenticationRequiredProblem
  | SpaceDoesNotExistProblem;

export type SpaceRetryInput = {
  collectionId: Scalars["ID"];
  deploymentId: Scalars["ID"];
  spaceId: Scalars["ID"];
};

export type SpaceRetryPayload = {
  __typename?: "SpaceRetryPayload";
  problem?: Maybe<SpaceRetryProblem>;
  space?: Maybe<Space>;
};

export type SpaceRetryProblem =
  | AuthenticationRequiredProblem
  | AuthorizationRequiredProblem
  | CollectionDoesNotExistProblem
  | DeploymentDoesNotExistProblem
  | SpaceDoesNotExistProblem;

export type SpaceSettings = {
  __typename?: "SpaceSettings";
  dockerPersistentStorageSizeinGigabytes: Scalars["Int"];
  enableDocker: Scalars["Boolean"];
  enableInboundClipboardRedirection: Scalars["Boolean"];
  enableOutboundClipboardRedirection: Scalars["Boolean"];
  enablePDFPrinter: Scalars["Boolean"];
  enablePersistentHome: Scalars["Boolean"];
  inactivityTerminationDelayInMinutes: Scalars["Int"];
  persistentHomeSizeInGigabytes: Scalars["Int"];
  size: SpaceSize;
};

export type SpaceSettingsInput = {
  dockerPersistentStorageSizeinGigabytes: Scalars["Int"];
  enableDocker: Scalars["Boolean"];
  enableInboundClipboardRedirection: Scalars["Boolean"];
  enableOutboundClipboardRedirection: Scalars["Boolean"];
  enablePDFPrinter: Scalars["Boolean"];
  enablePersistentHome: Scalars["Boolean"];
  inactivityTerminationDelayInMinutes: Scalars["Int"];
  persistentHomeSizeInGigabytes: Scalars["Int"];
  size: SpaceSize;
};

export enum SpaceSize {
  Large = "LARGE",
  Medium = "MEDIUM",
  None = "NONE",
  Small = "SMALL",
}

export type SpaceStatistics = {
  __typename?: "SpaceStatistics";
  averageSessionComputeUsedInCores: StatisticsWindowValues;
  averageSessionMemoryUsedInGigabytes: StatisticsWindowValues;
  averageSessionStorageUsedInGigabytes: StatisticsWindowValues;
  totalSessionTimeUsedInHours: StatisticsWindowValues;
  uniqueActiveEndUsers: StatisticsWindowValues;
};

export type SpaceUpdateInput = {
  catalogItemId: Scalars["ID"];
  catalogItemOrganizationId: Scalars["ID"];
  collectionId: Scalars["ID"];
  deploymentId: Scalars["ID"];
  description?: Maybe<Scalars["String"]>;
  icon?: Maybe<Scalars["String"]>;
  settings?: Maybe<SpaceSettingsInput>;
  spaceId: Scalars["ID"];
};

export type SpaceUpdatePayload = {
  __typename?: "SpaceUpdatePayload";
  problem?: Maybe<SpaceUpdateProblem>;
  space?: Maybe<Space>;
};

export type SpaceUpdateProblem =
  | AssetAccessDenied
  | AuthenticationRequiredProblem
  | AuthorizationRequiredProblem
  | InvalidFieldProblem
  | SpaceDoesNotExistProblem
  | SpaceNotReadyProblem;

export type SpacesInput = {
  collectionId: Scalars["ID"];
  deploymentId: Scalars["ID"];
};

export type SpacesPayload = {
  __typename?: "SpacesPayload";
  problem?: Maybe<SpacesProblem>;
  spaces?: Maybe<Array<Maybe<Space>>>;
};

export type SpacesProblem =
  | AuthenticationRequiredProblem
  | CollectionDoesNotExistProblem
  | DeploymentDoesNotExistProblem;

export type StatisticsValueOverEntireWindow = {
  __typename?: "StatisticsValueOverEntireWindow";
  averageValueOverEntireWindow?: Maybe<Scalars["Float"]>;
  totalValueOverEntireWindow?: Maybe<Scalars["Float"]>;
};

export type StatisticsWindowValues = {
  __typename?: "StatisticsWindowValues";
  valueOverEntireWindow: StatisticsValueOverEntireWindow;
  valuesOverEachDay: Array<TimestampedFloat>;
};

export type Subscription = {
  __typename?: "Subscription";
  endUserAdded?: Maybe<EndUserSubscriptionResult>;
  endUserRemoved?: Maybe<EndUserSubscriptionResult>;
};

export type SubscriptionEndUserAddedArgs = {
  emailAddress: Scalars["String"];
};

export type SubscriptionEndUserRemovedArgs = {
  emailAddress: Scalars["String"];
};

export enum SupportPriority {
  High = "HIGH",
  Low = "LOW",
  None = "NONE",
  Normal = "NORMAL",
  Urgent = "URGENT",
}

export type SupportRequestInput = {
  collaboratorEmailAddresses?: Maybe<Array<Scalars["String"]>>;
  description: Scalars["String"];
  organizationId: Scalars["ID"];
  priority: SupportPriority;
  requesterEmailAddress: Scalars["String"];
  subject: Scalars["String"];
};

export type SupportRequestPayload = {
  __typename?: "SupportRequestPayload";
  problem?: Maybe<SupportRequestProblem>;
};

export type SupportRequestProblem =
  | AuthenticationRequiredProblem
  | AuthorizationRequiredProblem
  | InvalidFieldProblem
  | OrganizationDoesNotExistProblem;

export enum SupportStatus {
  Closed = "CLOSED",
  Hold = "HOLD",
  New = "NEW",
  None = "NONE",
  Open = "OPEN",
  Pending = "PENDING",
  Solved = "SOLVED",
}

export type SupportTicket = {
  __typename?: "SupportTicket";
  collaboratorEmailAddresses: Array<Scalars["String"]>;
  description: Scalars["String"];
  id: Scalars["String"];
  priority: SupportPriority;
  requesterEmailAddress: Scalars["String"];
  status: SupportStatus;
  subject: Scalars["String"];
};

export type TimestampedFloat = {
  __typename?: "TimestampedFloat";
  timeAt: Scalars["String"];
  value: Scalars["Float"];
};

export type UnsupportedRegionProblem = Problem & {
  __typename?: "UnsupportedRegionProblem";
  message: Scalars["String"];
};

export type UserAccount = {
  __typename?: "UserAccount";
  active: Scalars["Boolean"];
  createdAt: Scalars["String"];
  displayName: Scalars["String"];
  email: Scalars["String"];
  id: Scalars["ID"];
  intercomHash: Scalars["String"];
  organizationFullAccess: Scalars["Boolean"];
  organizations: Array<Organization>;
  roles: Array<UserAdminRole>;
  status: UserAccountStatus;
  updatedAt: Scalars["String"];
};

export enum UserAccountStatus {
  CreationFailed = "CREATION_FAILED",
  DeletionFailed = "DELETION_FAILED",
  Draft = "DRAFT",
  None = "NONE",
  Ready = "READY",
  UpdateFailed = "UPDATE_FAILED",
}

export type UserAccountsInput = {
  deploymentId: Scalars["String"];
  organizationId: Scalars["String"];
};

export type UserAccountsPayload = {
  __typename?: "UserAccountsPayload";
  problem?: Maybe<UserAccountsProblem>;
  userAccount?: Maybe<Array<UserAccount>>;
};

export type UserAccountsProblem =
  | AuthenticationRequiredProblem
  | AuthorizationRequiredProblem;

export type UserAdminRole = {
  __typename?: "UserAdminRole";
  displayName: Scalars["String"];
  name: Scalars["String"];
  rolAccess: Scalars["String"];
};

export type UserTrial = {
  __typename?: "UserTrial";
  appUserId: Scalars["ID"];
  collectionName: Scalars["String"];
  deploymentName: Scalars["String"];
  launcher: Scalars["String"];
  region: Scalars["String"];
  registeredAt: Scalars["String"];
  spaceReady: Scalars["Boolean"];
  status: Scalars["String"];
  userEmail: Scalars["String"];
};

export type UserTrialRegisterInput = {
  email: Scalars["String"];
  ideProductIdentifiers?: Maybe<Array<Scalars["String"]>>;
  repositoryBranch: Scalars["String"];
  repositoryUrl: Scalars["String"];
  runtimeProductIdentifiers?: Maybe<Array<Scalars["String"]>>;
};

export type UserTrialRegisterPayload = {
  __typename?: "UserTrialRegisterPayload";
  problem?: Maybe<UserTrialRegisterProblem>;
  userTrial?: Maybe<UserTrial>;
};

export type UserTrialRegisterProblem =
  | AuthenticationRequiredProblem
  | AuthorizationRequiredProblem
  | CollectionTrialNotReadyProblem
  | DeploymentTrialNotReadyProblem
  | EndUserAlreadyExistProblem
  | InvalidFieldProblem
  | OrganizationTrialNotReadyProblem;

export type VersionControlRepositories = {
  __typename?: "VersionControlRepositories";
  description: Scalars["String"];
  details: VersionControlRepositoryDetails;
  fullName: Scalars["String"];
  htmlUrl: Scalars["String"];
  id: Scalars["ID"];
  name: Scalars["String"];
  private: Scalars["Boolean"];
  url: Scalars["String"];
};

export type VersionControlRepositoriesInput = {
  filterName: Scalars["String"];
};

export type VersionControlRepositoriesPayload = {
  __typename?: "VersionControlRepositoriesPayload";
  problem?: Maybe<VersionControlRepositoriesProblem>;
  versionControlRepositories?: Maybe<Array<VersionControlRepositories>>;
};

export type VersionControlRepositoriesProblem =
  | AuthenticationRequiredProblem
  | AuthorizationRequiredProblem;

export type VersionControlRepositoryDetails = {
  __typename?: "VersionControlRepositoryDetails";
  branches: Array<Scalars["String"]>;
  languages: Array<Scalars["String"]>;
};

export type VersionControlRepositoryDetailsPayload = {
  __typename?: "VersionControlRepositoryDetailsPayload";
  problem?: Maybe<VersionControlRepositoryDetailsProblem>;
  versionControlRepository?: Maybe<VersionControlRepositories>;
};

export type VersionControlRepositoryDetailsProblem =
  | AuthenticationRequiredProblem
  | AuthorizationRequiredProblem;
