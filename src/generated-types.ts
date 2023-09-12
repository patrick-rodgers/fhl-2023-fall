export const KeyProperty = Symbol.for("key");
export const enum appliedConditionalAccessPolicyResult {
success = 0,
failure = 1,
notApplied = 2,
notEnabled = 3,
unknown = 4,
unknownFutureValue = 5
}
export const enum authenticationMethodFeature {
ssprRegistered = 0,
ssprEnabled = 1,
ssprCapable = 2,
passwordlessCapable = 3,
mfaCapable = 4,
unknownFutureValue = 5
}
export const enum conditionalAccessStatus {
success = 0,
failure = 1,
notApplied = 2,
unknownFutureValue = 3
}
export const enum featureType {
registration = 0,
reset = 1,
unknownFutureValue = 2
}
export const enum groupType {
unifiedGroups = 0,
azureAD = 1,
unknownFutureValue = 2
}
export const enum includedUserRoles {
all = 0,
privilegedAdmin = 1,
admin = 2,
user = 3,
unknownFutureValue = 4
}
export const enum includedUserTypes {
all = 0,
member = 1,
guest = 2,
unknownFutureValue = 3
}
export const enum initiatorType {
user = 0,
application = 1,
system = 2,
unknownFutureValue = 3
}
export const enum operationResult {
success = 0,
failure = 1,
timeout = 2,
unknownFutureValue = 3
}
export const enum outlierContainerType {
group = 0,
unknownFutureValue = 1
}
export const enum outlierMemberType {
user = 0,
unknownFutureValue = 1
}
export const enum provisioningAction {
other = 0,
create = 1,
delete = 2,
disable = 3,
update = 4,
stagedDelete = 5,
unknownFutureValue = 6
}
export const enum provisioningResult {
success = 0,
failure = 1,
skipped = 2,
warning = 3,
unknownFutureValue = 4
}
export const enum provisioningStatusErrorCategory {
failure = 0,
nonServiceFailure = 1,
success = 2,
unknownFutureValue = 3
}
export const enum provisioningStepType {
import = 0,
scoping = 1,
matching = 2,
processing = 3,
referenceResolution = 4,
export = 5,
unknownFutureValue = 6
}
export const enum riskDetail {
none = 0,
adminGeneratedTemporaryPassword = 1,
userPerformedSecuredPasswordChange = 2,
userPerformedSecuredPasswordReset = 3,
adminConfirmedSigninSafe = 4,
aiConfirmedSigninSafe = 5,
userPassedMFADrivenByRiskBasedPolicy = 6,
adminDismissedAllRiskForUser = 7,
adminConfirmedSigninCompromised = 8,
hidden = 9,
adminConfirmedUserCompromised = 10,
unknownFutureValue = 11,
adminConfirmedServicePrincipalCompromised = 13,
adminDismissedAllRiskForServicePrincipal = 14,
m365DAdminDismissedDetection = 12
}
export const enum riskEventType {
unlikelyTravel = 0,
anonymizedIPAddress = 1,
maliciousIPAddress = 2,
unfamiliarFeatures = 3,
malwareInfectedIPAddress = 4,
suspiciousIPAddress = 5,
leakedCredentials = 6,
investigationsThreatIntelligence = 7,
generic = 8,
adminConfirmedUserCompromised = 9,
mcasImpossibleTravel = 10,
mcasSuspiciousInboxManipulationRules = 11,
investigationsThreatIntelligenceSigninLinked = 12,
maliciousIPAddressValidCredentialsBlockedIP = 13,
unknownFutureValue = 14
}
export const enum riskLevel {
low = 0,
medium = 1,
high = 2,
hidden = 3,
none = 4,
unknownFutureValue = 5
}
export const enum riskState {
none = 0,
confirmedSafe = 1,
remediated = 2,
dismissed = 3,
atRisk = 4,
confirmedCompromised = 5,
unknownFutureValue = 6
}
export const enum signInUserType {
member = 0,
guest = 1,
unknownFutureValue = 3
}
export const enum userDefaultAuthenticationMethod {
push = 0,
oath = 1,
voiceMobile = 2,
voiceAlternateMobile = 3,
voiceOffice = 4,
sms = 5,
none = 6,
unknownFutureValue = 7
}
export const enum advancedConfigState {
default = 0,
enabled = 1,
disabled = 2,
unknownFutureValue = 3
}
export const enum authenticationMethodModes {
password = 1,
voice = 2,
hardwareOath = 4,
softwareOath = 8,
sms = 16,
fido2 = 32,
windowsHelloForBusiness = 64,
microsoftAuthenticatorPush = 128,
deviceBasedPush = 256,
temporaryAccessPassOneTime = 512,
temporaryAccessPassMultiUse = 1024,
email = 2048,
x509CertificateSingleFactor = 4096,
x509CertificateMultiFactor = 8192,
federatedSingleFactor = 16384,
federatedMultiFactor = 32768,
unknownFutureValue = 65536
}
export const enum authenticationMethodsPolicyMigrationState {
preMigration = 0,
migrationInProgress = 1,
migrationComplete = 2,
unknownFutureValue = 3
}
export const enum authenticationMethodState {
enabled = 0,
disabled = 1
}
export const enum authenticationMethodTargetType {
user = 0,
group = 1,
unknownFutureValue = 2
}
export const enum authenticationStrengthPolicyType {
builtIn = 0,
custom = 1,
unknownFutureValue = 2
}
export const enum authenticationStrengthRequirements {
none = 0,
mfa = 1,
unknownFutureValue = 2
}
export const enum baseAuthenticationMethod {
password = 1,
voice = 2,
hardwareOath = 3,
softwareOath = 4,
sms = 5,
fido2 = 6,
windowsHelloForBusiness = 7,
microsoftAuthenticator = 8,
temporaryAccessPass = 9,
email = 10,
x509Certificate = 11,
federation = 12,
unknownFutureValue = 13
}
export const enum externalEmailOtpState {
default = 0,
enabled = 1,
disabled = 2,
unknownFutureValue = 3
}
export const enum featureTargetType {
group = 0,
administrativeUnit = 1,
role = 2,
unknownFutureValue = 3
}
export const enum fido2RestrictionEnforcementType {
allow = 0,
block = 1,
unknownFutureValue = 2
}
export const enum microsoftAuthenticatorAuthenticationMode {
deviceBasedPush = 0,
push = 1,
any = 2
}
export const enum x509CertificateAuthenticationMode {
x509CertificateSingleFactor = 0,
x509CertificateMultiFactor = 1,
unknownFutureValue = 2
}
export const enum x509CertificateRuleType {
issuerSubject = 0,
policyOID = 1,
unknownFutureValue = 2
}
export const enum volumeType {
operatingSystemVolume = 1,
fixedDataVolume = 2,
removableDataVolume = 3,
unknownFutureValue = 4
}
export const enum answerInputType {
text = 0,
radioButton = 1,
unknownFutureValue = 2
}
export const enum bookingPriceType {
undefined = 0,
fixedPrice = 1,
startingAt = 2,
hourly = 3,
free = 4,
priceVaries = 5,
callUs = 6,
notSet = 7,
unknownFutureValue = 8
}
export const enum bookingReminderRecipients {
allAttendees = 0,
staff = 1,
customer = 2,
unknownFutureValue = 3
}
export const enum bookingsAvailabilityStatus {
available = 0,
busy = 1,
slotsAvailable = 2,
outOfOffice = 3,
unknownFutureValue = 4
}
export const enum bookingStaffRole {
guest = 0,
administrator = 1,
viewer = 2,
externalGuest = 3,
unknownFutureValue = 4,
scheduler = 5,
teamMember = 6
}
export const enum dayOfWeek {
sunday = 0,
monday = 1,
tuesday = 2,
wednesday = 3,
thursday = 4,
friday = 5,
saturday = 6
}
export const enum locationType {
default = 0,
conferenceRoom = 1,
homeAddress = 2,
businessAddress = 3,
geoCoordinates = 4,
streetAddress = 5,
hotel = 6,
restaurant = 7,
localBusiness = 8,
postalAddress = 9
}
export const enum locationUniqueIdType {
unknown = 0,
locationStore = 1,
directory = 2,
private = 3,
bing = 4
}
export const enum phoneType {
home = 0,
business = 1,
mobile = 2,
other = 3,
assistant = 4,
homeFax = 5,
businessFax = 6,
otherFax = 7,
pager = 8,
radio = 9
}
export const enum physicalAddressType {
unknown = 0,
home = 1,
business = 2,
other = 3
}
export const enum bodyType {
text = 0,
html = 1
}
export const enum dataSubjectType {
customer = 0,
currentEmployee = 1,
formerEmployee = 2,
prospectiveEmployee = 3,
student = 4,
teacher = 5,
faculty = 6,
other = 7,
unknownFutureValue = 8
}
export const enum subjectRightsRequestStage {
contentRetrieval = 0,
contentReview = 1,
generateReport = 2,
contentDeletion = 3,
caseResolved = 4,
contentEstimate = 5,
unknownFutureValue = 6,
approval = 7
}
export const enum subjectRightsRequestStageStatus {
notStarted = 0,
current = 1,
completed = 3,
failed = 4,
unknownFutureValue = 5
}
export const enum subjectRightsRequestStatus {
active = 0,
closed = 1,
unknownFutureValue = 2
}
export const enum subjectRightsRequestType {
export = 0,
delete = 1,
access = 2,
tagForAction = 3,
unknownFutureValue = 4
}
export const enum identityUserFlowAttributeDataType {
string = 1,
boolean = 2,
int64 = 3,
stringCollection = 4,
dateTime = 5,
unknownFutureValue = 6
}
export const enum identityUserFlowAttributeInputType {
textBox = 1,
dateTimeDropdown = 2,
radioSingleSelect = 3,
dropdownSingleSelect = 4,
emailBox = 5,
checkboxMultiSelect = 6
}
export const enum identityUserFlowAttributeType {
builtIn = 1,
custom = 2,
required = 3,
unknownFutureValue = 4
}
export const enum userFlowType {
signUp = 1,
signIn = 2,
signUpOrSignIn = 3,
passwordReset = 4,
profileUpdate = 5,
resourceOwner = 6,
unknownFutureValue = 7
}
export const enum lobbyBypassScope {
organizer = 0,
organization = 1,
organizationAndFederated = 2,
everyone = 3,
unknownFutureValue = 4,
invited = 5,
organizationExcludingGuests = 6
}
export const enum meetingChatMode {
enabled = 0,
disabled = 1,
limited = 2,
unknownFutureValue = 3
}
export const enum onlineMeetingPresenters {
everyone = 0,
organization = 1,
roleIsPresenter = 2,
organizer = 3,
unknownFutureValue = 4
}
export const enum allowInvitesFrom {
none = 0,
adminsAndGuestInviters = 1,
adminsGuestInvitersAndAllMembers = 2,
everyone = 3,
unknownFutureValue = 4
}
export const enum appCredentialRestrictionType {
passwordAddition = 0,
passwordLifetime = 1,
symmetricKeyAddition = 2,
symmetricKeyLifetime = 3,
customPasswordAddition = 4,
unknownFutureValue = 99
}
export const enum appKeyCredentialRestrictionType {
asymmetricKeyLifetime = 0,
unknownFutureValue = 99
}
export const enum authenticationProtocol {
wsFed = 0,
saml = 1,
unknownFutureValue = 2
}
export const enum crossTenantAccessPolicyTargetConfigurationAccessType {
allowed = 1,
blocked = 2,
unknownFutureValue = 3
}
export const enum crossTenantAccessPolicyTargetType {
user = 1,
group = 2,
application = 3,
unknownFutureValue = 4
}
export const enum federatedIdpMfaBehavior {
acceptIfMfaDoneByFederatedIdp = 0,
enforceMfaByFederatedIdp = 1,
rejectMfaByFederatedIdp = 2,
unknownFutureValue = 3
}
export const enum layoutTemplateType {
default = 0,
verticalSplit = 1,
unknownFutureValue = 10
}
export const enum onPremisesDirectorySynchronizationDeletionPreventionType {
disabled = 0,
enabledForCount = 1,
enabledForPercentage = 2,
unknownFutureValue = 3
}
export const enum partnerTenantType {
microsoftSupport = 1,
syndicatePartner = 2,
breadthPartner = 3,
breadthPartnerDelegatedAdmin = 4,
resellerPartnerDelegatedAdmin = 5,
valueAddedResellerPartnerDelegatedAdmin = 6,
unknownFutureValue = 7
}
export const enum permissionClassificationType {
low = 1,
medium = 2,
high = 3,
unknownFutureValue = 4
}
export const enum permissionType {
application = 3,
delegated = 2,
delegatedUserConsentable = 1
}
export const enum promptLoginBehavior {
translateToFreshPasswordAuthentication = 0,
nativeSupport = 1,
disabled = 2,
unknownFutureValue = 3
}
export const enum weakAlgorithms {
rsaSha1 = 1,
unknownFutureValue = 2
}
export const enum browserSharedCookieSourceEnvironment {
microsoftEdge = 0,
internetExplorer11 = 1,
both = 2,
unknownFutureValue = 3
}
export const enum browserSharedCookieStatus {
published = 0,
pendingAdd = 1,
pendingEdit = 2,
pendingDelete = 3,
unknownFutureValue = 4
}
export const enum browserSiteCompatibilityMode {
default = 0,
internetExplorer8Enterprise = 1,
internetExplorer7Enterprise = 2,
internetExplorer11 = 3,
internetExplorer10 = 4,
internetExplorer9 = 5,
internetExplorer8 = 6,
internetExplorer7 = 7,
internetExplorer5 = 8,
unknownFutureValue = 9
}
export const enum browserSiteListStatus {
draft = 0,
published = 1,
pending = 2,
unknownFutureValue = 3
}
export const enum browserSiteMergeType {
noMerge = 0,
default = 1,
unknownFutureValue = 2
}
export const enum browserSiteStatus {
published = 0,
pendingAdd = 1,
pendingEdit = 2,
pendingDelete = 3,
unknownFutureValue = 4
}
export const enum browserSiteTargetEnvironment {
internetExplorerMode = 0,
internetExplorer11 = 1,
microsoftEdge = 2,
configurable = 3,
none = 4,
unknownFutureValue = 5
}
export const enum educationAddedStudentAction {
none = 0,
assignIfOpen = 1,
unknownFutureValue = 2
}
export const enum educationAddToCalendarOptions {
none = 0,
studentsAndPublisher = 1,
studentsAndTeamOwners = 2,
unknownFutureValue = 3,
studentsOnly = 4
}
export const enum educationAssignmentStatus {
draft = 0,
published = 1,
assigned = 2,
unknownFutureValue = 3
}
export const enum educationFeedbackResourceOutcomeStatus {
notPublished = 0,
pendingPublish = 1,
published = 2,
failedPublish = 3,
unknownFutureValue = 4
}
export const enum educationSubmissionStatus {
working = 0,
submitted = 1,
released = 2,
returned = 3,
unknownFutureValue = 4,
reassigned = 5
}
export const enum contactRelationship {
parent = 0,
relative = 1,
aide = 2,
doctor = 3,
guardian = 4,
child = 5,
other = 6,
unknownFutureValue = 7
}
export const enum educationExternalSource {
sis = 0,
manual = 1,
unknownFutureValue = 2
}
export const enum educationGender {
female = 0,
male = 1,
other = 2,
unknownFutureValue = 3
}
export const enum educationUserRole {
student = 0,
teacher = 1,
none = 2,
unknownFutureValue = 3
}
export const enum workbookOperationStatus {
notStarted = 0,
running = 1,
succeeded = 2,
failed = 3
}
export const enum activityDomain {
unknown = 0,
work = 1,
personal = 2,
unrestricted = 3
}
export const enum attendeeType {
required = 0,
optional = 1,
resource = 2
}
export const enum freeBusyStatus {
unknown = -1,
free = 0,
tentative = 1,
busy = 2,
oof = 3,
workingElsewhere = 4
}
export const enum bookingType {
unknown = 0,
standard = 1,
reserved = 2
}
export const enum attachmentType {
file = 0,
item = 1,
reference = 2
}
export const enum automaticRepliesStatus {
disabled = 0,
alwaysEnabled = 1,
scheduled = 2
}
export const enum calendarColor {
auto = -1,
lightBlue = 0,
lightGreen = 1,
lightOrange = 2,
lightGray = 3,
lightYellow = 4,
lightTeal = 5,
lightPink = 6,
lightBrown = 7,
lightRed = 8,
maxColor = 9
}
export const enum calendarRoleType {
none = 0,
freeBusyRead = 1,
limitedRead = 2,
read = 3,
write = 4,
delegateWithoutPrivateEventAccess = 5,
delegateWithPrivateEventAccess = 6,
custom = 7
}
export const enum calendarSharingAction {
accept = 0,
acceptAndViewCalendar = 1,
viewCalendar = 2,
addThisCalendar = 3
}
export const enum calendarSharingActionImportance {
primary = 0,
secondary = 1
}
export const enum calendarSharingActionType {
accept = 0
}
export const enum categoryColor {
none = -1,
preset0 = 0,
preset1 = 1,
preset2 = 2,
preset3 = 3,
preset4 = 4,
preset5 = 5,
preset6 = 6,
preset7 = 7,
preset8 = 8,
preset9 = 9,
preset10 = 10,
preset11 = 11,
preset12 = 12,
preset13 = 13,
preset14 = 14,
preset15 = 15,
preset16 = 16,
preset17 = 17,
preset18 = 18,
preset19 = 19,
preset20 = 20,
preset21 = 21,
preset22 = 22,
preset23 = 23,
preset24 = 24
}
export const enum delegateMeetingMessageDeliveryOptions {
sendToDelegateAndInformationToPrincipal = 0,
sendToDelegateAndPrincipal = 1,
sendToDelegateOnly = 2
}
export const enum eventType {
singleInstance = 0,
occurrence = 1,
exception = 2,
seriesMaster = 3
}
export const enum exchangeIdFormat {
entryId = 0,
ewsId = 1,
immutableEntryId = 2,
restId = 3,
restImmutableEntryId = 4
}
export const enum externalAudienceScope {
none = 0,
contactsOnly = 1,
all = 2
}
export const enum followupFlagStatus {
notFlagged = 0,
complete = 1,
flagged = 2
}
export const enum importance {
low = 0,
normal = 1,
high = 2
}
export const enum inferenceClassificationType {
focused = 0,
other = 1
}
export const enum mailTipsType {
automaticReplies = 1,
mailboxFullStatus = 2,
customMailTip = 4,
externalMemberCount = 8,
totalMemberCount = 16,
maxMessageSize = 32,
deliveryRestriction = 64,
moderationStatus = 128,
recipientScope = 256,
recipientSuggestions = 512
}
export const enum meetingMessageType {
none = 0,
meetingRequest = 1,
meetingCancelled = 2,
meetingAccepted = 3,
meetingTenativelyAccepted = 4,
meetingDeclined = 5
}
export const enum meetingRequestType {
none = 0,
newMeetingRequest = 1,
fullUpdate = 65536,
informationalUpdate = 131072,
silentUpdate = 262144,
outdated = 524288,
principalWantsCopy = 1048576
}
export const enum messageActionFlag {
any = 0,
call = 1,
doNotForward = 2,
followUp = 3,
fyi = 4,
forward = 5,
noResponseNecessary = 6,
read = 7,
reply = 8,
replyToAll = 9,
review = 10
}
export const enum onlineMeetingProviderType {
unknown = 0,
skypeForBusiness = 1,
skypeForConsumer = 2,
teamsForBusiness = 3
}
export const enum recipientScopeType {
none = 0,
internal = 1,
external = 2,
externalPartner = 4,
externalNonPartner = 8
}
export const enum recurrencePatternType {
daily = 0,
weekly = 1,
absoluteMonthly = 2,
relativeMonthly = 3,
absoluteYearly = 4,
relativeYearly = 5
}
export const enum recurrenceRangeType {
endDate = 0,
noEnd = 1,
numbered = 2
}
export const enum responseType {
none = 0,
organizer = 1,
tentativelyAccepted = 2,
accepted = 3,
declined = 4,
notResponded = 5
}
export const enum selectionLikelihoodInfo {
notSpecified = 0,
high = 1
}
export const enum sensitivity {
normal = 0,
personal = 1,
private = 2,
confidential = 3
}
export const enum timeZoneStandard {
windows = 0,
iana = 1
}
export const enum userPurpose {
user = 1,
linked = 2,
shared = 3,
room = 4,
equipment = 5,
others = 6,
unknownFutureValue = 7
}
export const enum websiteType {
other = 0,
home = 1,
work = 2,
blog = 3,
profile = 4
}
export const enum weekIndex {
first = 0,
second = 1,
third = 2,
fourth = 3,
last = 4
}
export const enum imageTaggingChoice {
disabled = 0,
basic = 1,
enhanced = 2,
unknownFutureValue = 3
}
export const enum sharingCapabilities {
disabled = 0,
externalUserSharingOnly = 1,
externalUserAndGuestSharing = 2,
existingExternalUserSharingOnly = 3,
unknownFutureValue = 4
}
export const enum sharingDomainRestrictionMode {
none = 0,
allowList = 1,
blockList = 2,
unknownFutureValue = 3
}
export const enum columnTypes {
note = 0,
text = 1,
choice = 2,
multichoice = 3,
number = 4,
currency = 5,
dateTime = 6,
lookup = 7,
boolean = 8,
user = 9,
url = 10,
calculated = 11,
location = 12,
geolocation = 13,
term = 14,
multiterm = 15,
thumbnail = 16,
approvalStatus = 17,
unknownFutureValue = 18
}
export const enum longRunningOperationStatus {
notStarted = 0,
running = 1,
succeeded = 2,
failed = 3,
unknownFutureValue = 4
}
export const enum sensitivityLabelAssignmentMethod {
standard = 0,
privileged = 1,
auto = 2,
unknownFutureValue = 3
}
export const enum stagedFeatureName {
passthroughAuthentication = 0,
seamlessSso = 1,
passwordHashSync = 2,
emailAsAlternateId = 3,
unknownFutureValue = 4,
certificateBasedAuthentication = 5,
multiFactorAuthentication = 6
}
export const enum attributeDefinitionMetadata {
BaseAttributeName = 0,
ComplexObjectDefinition = 1,
IsContainer = 2,
IsCustomerDefined = 3,
IsDomainQualified = 4,
LinkPropertyNames = 5,
LinkTypeName = 6,
MaximumLength = 7,
ReferencedProperty = 8
}
export const enum attributeFlowBehavior {
FlowWhenChanged = 0,
FlowAlways = 1
}
export const enum attributeFlowType {
Always = 0,
ObjectAddOnly = 1,
MultiValueAddOnly = 2,
ValueAddOnly = 3,
AttributeAddOnly = 4
}
export const enum attributeMappingSourceType {
Attribute = 0,
Constant = 1,
Function = 2
}
export const enum attributeType {
String = 0,
Integer = 1,
Reference = 2,
Binary = 3,
Boolean = 4,
DateTime = 5
}
export const enum directoryDefinitionDiscoverabilities {
None = 0,
AttributeNames = 1,
AttributeDataTypes = 2,
AttributeReadOnly = 4,
ReferenceAttributes = 8,
UnknownFutureValue = 16
}
export const enum entryExportStatus {
Noop = 0,
Success = 1,
RetryableError = 2,
PermanentError = 3,
Error = 4
}
export const enum entrySyncOperation {
None = 0,
Add = 1,
Delete = 2,
Update = 3
}
export const enum escrowBehavior {
Default = 1,
IgnoreLookupReferenceResolutionFailure = 2
}
export const enum mutability {
ReadWrite = 0,
ReadOnly = 1,
Immutable = 2,
WriteOnly = 3
}
export const enum objectDefinitionMetadata {
PropertyNameAccountEnabled = 0,
PropertyNameSoftDeleted = 1,
IsSoftDeletionSupported = 2,
IsSynchronizeAllSupported = 3,
ConnectorDataStorageRequired = 4,
Extensions = 5,
BaseObjectName = 6
}
export const enum objectFlowTypes {
None = 0,
Add = 1,
Update = 2,
Delete = 4
}
export const enum objectMappingMetadata {
EscrowBehavior = 0,
DisableMonitoringForChanges = 1,
OriginalJoiningProperty = 2,
Disposition = 3,
IsCustomerDefined = 4,
ExcludeFromReporting = 5,
Unsynchronized = 6
}
export const enum quarantineReason {
EncounteredBaseEscrowThreshold = 0,
EncounteredTotalEscrowThreshold = 1,
EncounteredEscrowProportionThreshold = 2,
EncounteredQuarantineException = 4,
Unknown = 8,
QuarantinedOnDemand = 16,
TooManyDeletes = 32,
IngestionInterrupted = 64
}
export const enum scopeOperatorMultiValuedComparisonType {
All = 0,
Any = 1
}
export const enum scopeOperatorType {
Binary = 0,
Unary = 1
}
export const enum synchronizationDisposition {
Normal = 0,
Discard = 1,
Escrow = 2
}
export const enum synchronizationJobRestartScope {
None = 0,
ConnectorDataStore = 1,
Escrows = 2,
Watermark = 4,
QuarantineState = 8,
Full = 15,
ForceDeletes = 32
}
export const enum synchronizationMetadata {
GalleryApplicationIdentifier = 0,
GalleryApplicationKey = 1,
IsOAuthEnabled = 2,
IsSynchronizationAgentAssignmentRequired = 3,
IsSynchronizationAgentRequired = 4,
IsSynchronizationInPreview = 5,
OAuthSettings = 6,
SynchronizationLearnMoreIbizaFwLink = 7,
ConfigurationFields = 8
}
export const enum synchronizationScheduleState {
Active = 0,
Disabled = 1,
Paused = 2
}
export const enum synchronizationSecret {
None = 0,
UserName = 1,
Password = 2,
SecretToken = 3,
AppKey = 4,
BaseAddress = 5,
ClientIdentifier = 6,
ClientSecret = 7,
SingleSignOnType = 11,
Sandbox = 12,
Url = 13,
Domain = 14,
ConsumerKey = 15,
ConsumerSecret = 16,
TokenKey = 17,
TokenExpiration = 18,
Oauth2AccessToken = 19,
Oauth2AccessTokenCreationTime = 20,
Oauth2RefreshToken = 21,
SyncAll = 22,
InstanceName = 24,
Oauth2ClientId = 27,
Oauth2ClientSecret = 28,
CompanyId = 29,
UpdateKeyOnSoftDelete = 30,
SynchronizationSchedule = 33,
SystemOfRecord = 34,
SandboxName = 35,
EnforceDomain = 36,
SyncNotificationSettings = 37,
SkipOutOfScopeDeletions = 40,
Oauth2AuthorizationCode = 62,
Oauth2RedirectUri = 63,
ApplicationTemplateIdentifier = 64,
Oauth2TokenExchangeUri = 65,
Oauth2AuthorizationUri = 66,
AuthenticationType = 67,
Server = 70,
PerformInboundEntitlementGrants = 100,
HardDeletesEnabled = 101,
SyncAgentCompatibilityKey = 102,
SyncAgentADContainer = 103,
ValidateDomain = 206,
TestReferences = 207,
ConnectionString = 250
}
export const enum synchronizationStatusCode {
NotConfigured = 0,
NotRun = 1,
Active = 2,
Paused = 3,
Quarantine = 4
}
export const enum synchronizationTaskExecutionResult {
Succeeded = 0,
Failed = 1,
EntryLevelErrors = 2
}
export const enum accessReviewHistoryDecisionFilter {
approve = 0,
deny = 1,
notReviewed = 2,
dontKnow = 3,
notNotified = 4,
unknownFutureValue = 5
}
export const enum accessReviewHistoryStatus {
done = 0,
inprogress = 1,
error = 2,
requested = 3,
unknownFutureValue = 4
}
export const enum accessReviewInstanceDecisionItemFilterByCurrentUserOptions {
reviewer = 1,
unknownFutureValue = 2
}
export const enum accessReviewInstanceFilterByCurrentUserOptions {
reviewer = 1,
unknownFutureValue = 2
}
export const enum accessReviewScheduleDefinitionFilterByCurrentUserOptions {
reviewer = 1,
unknownFutureValue = 2
}
export const enum accessReviewStageFilterByCurrentUserOptions {
reviewer = 1,
unknownFutureValue = 2
}
export const enum approvalFilterByCurrentUserOptions {
target = 0,
createdBy = 1,
approver = 2,
unknownFutureValue = 3
}
export const enum consentRequestFilterByCurrentUserOptions {
reviewer = 0,
unknownFutureValue = 1
}
export const enum userSignInRecommendationScope {
tenant = 0,
application = 1,
unknownFutureValue = 2
}
export const enum agreementAcceptanceState {
accepted = 2,
declined = 3,
unknownFutureValue = 5
}
export const enum activityType {
signin = 0,
user = 1,
unknownFutureValue = 2,
servicePrincipal = 3
}
export const enum cloudAppSecuritySessionControlType {
mcasConfigured = 0,
monitorOnly = 1,
blockDownloads = 2,
unknownFutureValue = 3
}
export const enum conditionalAccessClientApp {
all = 0,
browser = 1,
mobileAppsAndDesktopClients = 2,
exchangeActiveSync = 3,
easSupported = 4,
other = 5,
unknownFutureValue = 6
}
export const enum conditionalAccessDevicePlatform {
android = 0,
iOS = 1,
windows = 2,
windowsPhone = 3,
macOS = 4,
all = 5,
unknownFutureValue = 6,
linux = 7
}
export const enum conditionalAccessExternalTenantsMembershipKind {
all = 0,
enumerated = 1,
unknownFutureValue = 2
}
export const enum conditionalAccessGrantControl {
block = 0,
mfa = 1,
compliantDevice = 2,
domainJoinedDevice = 3,
approvedApplication = 4,
compliantApplication = 5,
passwordChange = 6,
unknownFutureValue = 7
}
export const enum conditionalAccessGuestOrExternalUserTypes {
none = 0,
internalGuest = 1,
b2bCollaborationGuest = 2,
b2bCollaborationMember = 4,
b2bDirectConnectUser = 8,
otherExternalUser = 16,
serviceProvider = 32,
unknownFutureValue = 64
}
export const enum conditionalAccessPolicyState {
enabled = 0,
disabled = 1,
enabledForReportingButNotEnforced = 2
}
export const enum countryLookupMethodType {
clientIpAddress = 0,
authenticatorAppGps = 1,
unknownFutureValue = 2
}
export const enum filterMode {
include = 0,
exclude = 1
}
export const enum persistentBrowserSessionMode {
always = 0,
never = 1
}
export const enum riskDetectionTimingType {
notDefined = 0,
realtime = 1,
nearRealtime = 2,
offline = 3,
unknownFutureValue = 4
}
export const enum signInFrequencyAuthenticationType {
primaryAndSecondaryAuthentication = 0,
secondaryAuthentication = 1,
unknownFutureValue = 2
}
export const enum signInFrequencyInterval {
timeBased = 0,
everyTime = 1,
unknownFutureValue = 2
}
export const enum signinFrequencyType {
days = 0,
hours = 1
}
export const enum templateScenarios {
new = 0,
secureFoundation = 1,
zeroTrust = 2,
remoteWork = 4,
protectAdmins = 8,
emergingThreats = 16,
unknownFutureValue = 32
}
export const enum tokenIssuerType {
AzureAD = 0,
ADFederationServices = 1,
UnknownFutureValue = 2,
AzureADBackupAuth = 3,
ADFederationServicesMFAAdapter = 4,
NPSExtension = 5
}
export const enum accessPackageAssignmentFilterByCurrentUserOptions {
target = 1,
createdBy = 2,
unknownFutureValue = 99
}
export const enum accessPackageAssignmentRequestFilterByCurrentUserOptions {
target = 1,
createdBy = 2,
approver = 3,
unknownFutureValue = 99
}
export const enum accessPackageAssignmentState {
delivering = 0,
partiallyDelivered = 1,
delivered = 2,
expired = 3,
deliveryFailed = 4,
unknownFutureValue = 5
}
export const enum accessPackageCatalogState {
unpublished = 1,
published = 2,
unknownFutureValue = 3
}
export const enum accessPackageCatalogType {
userManaged = 1,
serviceDefault = 2,
serviceManaged = 3,
unknownFutureValue = 4
}
export const enum accessPackageCustomExtensionStage {
assignmentRequestCreated = 1,
assignmentRequestApproved = 2,
assignmentRequestGranted = 3,
assignmentRequestRemoved = 4,
assignmentFourteenDaysBeforeExpiration = 5,
assignmentOneDayBeforeExpiration = 6,
unknownFutureValue = 7
}
export const enum accessPackageExternalUserLifecycleAction {
none = 0,
blockSignIn = 1,
blockSignInAndDelete = 2,
unknownFutureValue = 3
}
export const enum accessPackageFilterByCurrentUserOptions {
allowedRequestor = 1,
unknownFutureValue = 99
}
export const enum accessPackageRequestState {
submitted = 0,
pendingApproval = 1,
delivering = 2,
delivered = 3,
deliveryFailed = 4,
denied = 5,
scheduled = 6,
canceled = 7,
partiallyDelivered = 8,
unknownFutureValue = 9
}
export const enum accessPackageRequestType {
notSpecified = 0,
userAdd = 1,
userUpdate = 2,
userRemove = 3,
adminAdd = 4,
adminUpdate = 5,
adminRemove = 6,
systemAdd = 7,
systemUpdate = 8,
systemRemove = 9,
onBehalfAdd = 10,
unknownFutureValue = 11
}
export const enum accessPackageSubjectType {
notSpecified = 0,
user = 1,
servicePrincipal = 2,
unknownFutureValue = 3
}
export const enum accessReviewExpirationBehavior {
keepAccess = 0,
removeAccess = 1,
acceptAccessRecommendation = 2,
unknownFutureValue = 99
}
export const enum allowedTargetScope {
notSpecified = 0,
specificDirectoryUsers = 1,
specificConnectedOrganizationUsers = 2,
specificDirectoryServicePrincipals = 3,
allMemberUsers = 4,
allDirectoryUsers = 5,
allDirectoryServicePrincipals = 6,
allConfiguredConnectedOrganizationUsers = 7,
allExternalUsers = 8,
unknownFutureValue = 10
}
export const enum customExtensionCalloutInstanceStatus {
calloutSent = 1,
callbackReceived = 2,
calloutFailed = 3,
callbackTimedOut = 4,
waitingForCallback = 5,
unknownFutureValue = 6
}
export const enum expirationPatternType {
notSpecified = 0,
noExpiration = 1,
afterDateTime = 2,
afterDuration = 3
}
export const enum connectedOrganizationState {
configured = 0,
proposed = 1,
unknownFutureValue = 2
}
export const enum certificateStatus {
notProvisioned = 0,
provisioned = 1
}
export const enum complianceStatus {
unknown = 0,
notApplicable = 1,
compliant = 2,
remediated = 3,
nonCompliant = 4,
error = 5,
conflict = 6,
notAssigned = 7
}
export const enum installIntent {
available = 0,
required = 1,
uninstall = 2,
availableWithoutEnrollment = 3
}
export const enum managedAppAvailability {
global = 0,
lineOfBusiness = 1
}
export const enum mdmAppConfigKeyType {
stringType = 0,
integerType = 1,
realType = 2,
booleanType = 3,
tokenType = 4
}
export const enum microsoftEdgeChannel {
dev = 0,
beta = 1,
stable = 2,
unknownFutureValue = 3
}
export const enum microsoftStoreForBusinessLicenseType {
offline = 0,
online = 1
}
export const enum mobileAppContentFileUploadState {
success = 0,
transientError = 1,
error = 2,
unknown = 3,
azureStorageUriRequestSuccess = 100,
azureStorageUriRequestPending = 101,
azureStorageUriRequestFailed = 102,
azureStorageUriRequestTimedOut = 103,
azureStorageUriRenewalSuccess = 200,
azureStorageUriRenewalPending = 201,
azureStorageUriRenewalFailed = 202,
azureStorageUriRenewalTimedOut = 203,
commitFileSuccess = 300,
commitFilePending = 301,
commitFileFailed = 302,
commitFileTimedOut = 303
}
export const enum mobileAppPublishingState {
notPublished = 0,
processing = 1,
published = 2
}
export const enum runAsAccountType {
system = 0,
user = 1
}
export const enum vppTokenAccountType {
business = 0,
education = 1
}
export const enum win32LobAppDeliveryOptimizationPriority {
notConfigured = 0,
foreground = 1
}
export const enum win32LobAppFileSystemOperationType {
notConfigured = 0,
exists = 1,
modifiedDate = 2,
createdDate = 3,
version = 4,
sizeInMB = 5
}
export const enum win32LobAppMsiPackageType {
perMachine = 0,
perUser = 1,
dualPurpose = 2
}
export const enum win32LobAppNotification {
showAll = 0,
showReboot = 1,
hideAll = 2
}
export const enum win32LobAppPowerShellScriptRuleOperationType {
notConfigured = 0,
string = 1,
dateTime = 2,
integer = 3,
float = 4,
version = 5,
boolean = 6
}
export const enum win32LobAppRegistryRuleOperationType {
notConfigured = 0,
exists = 1,
doesNotExist = 2,
string = 3,
integer = 4,
version = 5
}
export const enum win32LobAppRestartBehavior {
basedOnReturnCode = 0,
allow = 1,
suppress = 2,
force = 3
}
export const enum win32LobAppReturnCodeType {
failed = 0,
success = 1,
softReboot = 2,
hardReboot = 3,
retry = 4
}
export const enum win32LobAppRuleOperator {
notConfigured = 0,
equal = 1,
notEqual = 2,
greaterThan = 4,
greaterThanOrEqual = 5,
lessThan = 8,
lessThanOrEqual = 9
}
export const enum win32LobAppRuleType {
detection = 0,
requirement = 1
}
export const enum windowsArchitecture {
none = 0,
x86 = 1,
x64 = 2,
arm = 4,
neutral = 8
}
export const enum windowsDeviceType {
none = 0,
desktop = 1,
mobile = 2,
holographic = 4,
team = 8,
unknownFutureValue = 16
}
export const enum installState {
notApplicable = 0,
installed = 1,
failed = 2,
notInstalled = 3,
uninstallFailed = 4,
unknown = 5
}
export const enum androidRequiredPasswordType {
deviceDefault = 0,
alphabetic = 1,
alphanumeric = 2,
alphanumericWithSymbols = 3,
lowSecurityBiometric = 4,
numeric = 5,
numericComplex = 6,
any = 7
}
export const enum androidWorkProfileCrossProfileDataSharingType {
deviceDefault = 0,
preventAny = 1,
allowPersonalToWork = 2,
noRestrictions = 3
}
export const enum androidWorkProfileDefaultAppPermissionPolicyType {
deviceDefault = 0,
prompt = 1,
autoGrant = 2,
autoDeny = 3
}
export const enum androidWorkProfileRequiredPasswordType {
deviceDefault = 0,
lowSecurityBiometric = 1,
required = 2,
atLeastNumeric = 3,
numericComplex = 4,
atLeastAlphabetic = 5,
atLeastAlphanumeric = 6,
alphanumericWithSymbols = 7
}
export const enum applicationGuardBlockClipboardSharingType {
notConfigured = 0,
blockBoth = 1,
blockHostToContainer = 2,
blockContainerToHost = 3,
blockNone = 4
}
export const enum applicationGuardBlockFileTransferType {
notConfigured = 0,
blockImageAndTextFile = 1,
blockImageFile = 2,
blockNone = 3,
blockTextFile = 4
}
export const enum appListType {
none = 0,
appsInListCompliant = 1,
appsNotInListCompliant = 2
}
export const enum appLockerApplicationControlType {
notConfigured = 0,
enforceComponentsAndStoreApps = 1,
auditComponentsAndStoreApps = 2,
enforceComponentsStoreAppsAndSmartlocker = 3,
auditComponentsStoreAppsAndSmartlocker = 4
}
export const enum automaticUpdateMode {
userDefined = 0,
notifyDownload = 1,
autoInstallAtMaintenanceTime = 2,
autoInstallAndRebootAtMaintenanceTime = 3,
autoInstallAndRebootAtScheduledTime = 4,
autoInstallAndRebootWithoutEndUserControl = 5
}
export const enum autoRestartNotificationDismissalMethod {
notConfigured = 0,
automatic = 1,
user = 2,
unknownFutureValue = 3
}
export const enum bitLockerEncryptionMethod {
aesCbc128 = 3,
aesCbc256 = 4,
xtsAes128 = 6,
xtsAes256 = 7
}
export const enum defenderCloudBlockLevelType {
notConfigured = 0,
high = 1,
highPlus = 2,
zeroTolerance = 3
}
export const enum defenderMonitorFileActivity {
userDefined = 0,
disable = 1,
monitorAllFiles = 2,
monitorIncomingFilesOnly = 3,
monitorOutgoingFilesOnly = 4
}
export const enum defenderPromptForSampleSubmission {
userDefined = 0,
alwaysPrompt = 1,
promptBeforeSendingPersonalData = 2,
neverSendData = 3,
sendAllDataWithoutPrompting = 4
}
export const enum defenderScanType {
userDefined = 0,
disabled = 1,
quick = 2,
full = 3
}
export const enum defenderThreatAction {
deviceDefault = 0,
clean = 1,
quarantine = 2,
remove = 3,
allow = 4,
userDefined = 5,
block = 6
}
export const enum deviceComplianceActionType {
noAction = 0,
notification = 1,
block = 2,
retire = 3,
wipe = 4,
removeResourceAccessProfiles = 5,
pushNotification = 9
}
export const enum deviceThreatProtectionLevel {
unavailable = 0,
secured = 1,
low = 2,
medium = 3,
high = 4,
notSet = 10
}
export const enum diagnosticDataSubmissionMode {
userDefined = 0,
none = 1,
basic = 2,
enhanced = 3,
full = 4
}
export const enum edgeCookiePolicy {
userDefined = 0,
allow = 1,
blockThirdParty = 2,
blockAll = 3
}
export const enum edgeSearchEngineType {
default = 0,
bing = 1
}
export const enum editionUpgradeLicenseType {
productKey = 0,
licenseFile = 1
}
export const enum enablement {
notConfigured = 0,
enabled = 1,
disabled = 2
}
export const enum firewallCertificateRevocationListCheckMethodType {
deviceDefault = 0,
none = 1,
attempt = 2,
require = 3
}
export const enum firewallPacketQueueingMethodType {
deviceDefault = 0,
disabled = 1,
queueInbound = 2,
queueOutbound = 3,
queueBoth = 4
}
export const enum firewallPreSharedKeyEncodingMethodType {
deviceDefault = 0,
none = 1,
utF8 = 2
}
export const enum internetSiteSecurityLevel {
userDefined = 0,
medium = 1,
mediumHigh = 2,
high = 3
}
export const enum iosNotificationAlertType {
deviceDefault = 0,
banner = 1,
modal = 2,
none = 3
}
export const enum iosUpdatesInstallStatus {
deviceOsHigherThanDesiredOsVersion = -2016330696,
sharedDeviceUserLoggedInError = -2016330699,
notSupportedOperation = -2016330701,
installFailed = -2016330702,
installPhoneCallInProgress = -2016330703,
installInsufficientPower = -2016330704,
installInsufficientSpace = -2016330705,
installing = -2016330706,
downloadInsufficientNetwork = -2016330707,
downloadInsufficientPower = -2016330708,
downloadInsufficientSpace = -2016330709,
downloadRequiresComputer = -2016330710,
downloadFailed = -2016330711,
downloading = -2016330712,
success = 0,
available = 1,
idle = 2,
unknown = 3
}
export const enum miracastChannel {
userDefined = 0,
one = 1,
two = 2,
three = 3,
four = 4,
five = 5,
six = 6,
seven = 7,
eight = 8,
nine = 9,
ten = 10,
eleven = 11,
thirtySix = 36,
forty = 40,
fortyFour = 44,
fortyEight = 48,
oneHundredFortyNine = 149,
oneHundredFiftyThree = 153,
oneHundredFiftySeven = 157,
oneHundredSixtyOne = 161,
oneHundredSixtyFive = 165
}
export const enum policyPlatformType {
android = 0,
androidForWork = 1,
iOS = 2,
macOS = 3,
windowsPhone81 = 4,
windows81AndLater = 5,
windows10AndLater = 6,
all = 100
}
export const enum prereleaseFeatures {
userDefined = 0,
settingsOnly = 1,
settingsAndExperimentations = 2,
notAllowed = 3
}
export const enum ratingAppsType {
allAllowed = 0,
allBlocked = 1,
agesAbove4 = 2,
agesAbove9 = 3,
agesAbove12 = 4,
agesAbove17 = 5
}
export const enum ratingAustraliaMoviesType {
allAllowed = 0,
allBlocked = 1,
general = 2,
parentalGuidance = 3,
mature = 4,
agesAbove15 = 5,
agesAbove18 = 6
}
export const enum ratingAustraliaTelevisionType {
allAllowed = 0,
allBlocked = 1,
preschoolers = 2,
children = 3,
general = 4,
parentalGuidance = 5,
mature = 6,
agesAbove15 = 7,
agesAbove15AdultViolence = 8
}
export const enum ratingCanadaMoviesType {
allAllowed = 0,
allBlocked = 1,
general = 2,
parentalGuidance = 3,
agesAbove14 = 4,
agesAbove18 = 5,
restricted = 6
}
export const enum ratingCanadaTelevisionType {
allAllowed = 0,
allBlocked = 1,
children = 2,
childrenAbove8 = 3,
general = 4,
parentalGuidance = 5,
agesAbove14 = 6,
agesAbove18 = 7
}
export const enum ratingFranceMoviesType {
allAllowed = 0,
allBlocked = 1,
agesAbove10 = 2,
agesAbove12 = 3,
agesAbove16 = 4,
agesAbove18 = 5
}
export const enum ratingFranceTelevisionType {
allAllowed = 0,
allBlocked = 1,
agesAbove10 = 2,
agesAbove12 = 3,
agesAbove16 = 4,
agesAbove18 = 5
}
export const enum ratingGermanyMoviesType {
allAllowed = 0,
allBlocked = 1,
general = 2,
agesAbove6 = 3,
agesAbove12 = 4,
agesAbove16 = 5,
adults = 6
}
export const enum ratingGermanyTelevisionType {
allAllowed = 0,
allBlocked = 1,
general = 2,
agesAbove6 = 3,
agesAbove12 = 4,
agesAbove16 = 5,
adults = 6
}
export const enum ratingIrelandMoviesType {
allAllowed = 0,
allBlocked = 1,
general = 2,
parentalGuidance = 3,
agesAbove12 = 4,
agesAbove15 = 5,
agesAbove16 = 6,
adults = 7
}
export const enum ratingIrelandTelevisionType {
allAllowed = 0,
allBlocked = 1,
general = 2,
children = 3,
youngAdults = 4,
parentalSupervision = 5,
mature = 6
}
export const enum ratingJapanMoviesType {
allAllowed = 0,
allBlocked = 1,
general = 2,
parentalGuidance = 3,
agesAbove15 = 4,
agesAbove18 = 5
}
export const enum ratingJapanTelevisionType {
allAllowed = 0,
allBlocked = 1,
explicitAllowed = 2
}
export const enum ratingNewZealandMoviesType {
allAllowed = 0,
allBlocked = 1,
general = 2,
parentalGuidance = 3,
mature = 4,
agesAbove13 = 5,
agesAbove15 = 6,
agesAbove16 = 7,
agesAbove18 = 8,
restricted = 9,
agesAbove16Restricted = 10
}
export const enum ratingNewZealandTelevisionType {
allAllowed = 0,
allBlocked = 1,
general = 2,
parentalGuidance = 3,
adults = 4
}
export const enum ratingUnitedKingdomMoviesType {
allAllowed = 0,
allBlocked = 1,
general = 2,
universalChildren = 3,
parentalGuidance = 4,
agesAbove12Video = 5,
agesAbove12Cinema = 6,
agesAbove15 = 7,
adults = 8
}
export const enum ratingUnitedKingdomTelevisionType {
allAllowed = 0,
allBlocked = 1,
caution = 2
}
export const enum ratingUnitedStatesMoviesType {
allAllowed = 0,
allBlocked = 1,
general = 2,
parentalGuidance = 3,
parentalGuidance13 = 4,
restricted = 5,
adults = 6
}
export const enum ratingUnitedStatesTelevisionType {
allAllowed = 0,
allBlocked = 1,
childrenAll = 2,
childrenAbove7 = 3,
general = 4,
parentalGuidance = 5,
childrenAbove14 = 6,
adults = 7
}
export const enum requiredPasswordType {
deviceDefault = 0,
alphanumeric = 1,
numeric = 2
}
export const enum safeSearchFilterType {
userDefined = 0,
strict = 1,
moderate = 2
}
export const enum settingSourceType {
deviceConfiguration = 0,
deviceIntent = 1
}
export const enum sharedPCAccountDeletionPolicyType {
immediate = 0,
diskSpaceThreshold = 1,
diskSpaceThresholdOrInactiveThreshold = 2
}
export const enum sharedPCAllowedAccountType {
guest = 1,
domain = 2
}
export const enum siteSecurityLevel {
userDefined = 0,
low = 1,
mediumLow = 2,
medium = 3,
mediumHigh = 4,
high = 5
}
export const enum stateManagementSetting {
notConfigured = 0,
blocked = 1,
allowed = 2
}
export const enum visibilitySetting {
notConfigured = 0,
hide = 1,
show = 2
}
export const enum webBrowserCookieSettings {
browserDefault = 0,
blockAlways = 1,
allowCurrentWebSite = 2,
allowFromWebsitesVisited = 3,
allowAlways = 4
}
export const enum weeklySchedule {
userDefined = 0,
everyday = 1,
sunday = 2,
monday = 3,
tuesday = 4,
wednesday = 5,
thursday = 6,
friday = 7,
saturday = 8
}
export const enum welcomeScreenMeetingInformation {
userDefined = 0,
showOrganizerAndTimeOnly = 1,
showOrganizerAndTimeAndSubject = 2
}
export const enum windows10EditionType {
windows10Enterprise = 0,
windows10EnterpriseN = 1,
windows10Education = 2,
windows10EducationN = 3,
windows10MobileEnterprise = 4,
windows10HolographicEnterprise = 5,
windows10Professional = 6,
windows10ProfessionalN = 7,
windows10ProfessionalEducation = 8,
windows10ProfessionalEducationN = 9,
windows10ProfessionalWorkstation = 10,
windows10ProfessionalWorkstationN = 11
}
export const enum windowsDeliveryOptimizationMode {
userDefined = 0,
httpOnly = 1,
httpWithPeeringNat = 2,
httpWithPeeringPrivateGroup = 3,
httpWithInternetPeering = 4,
simpleDownload = 99,
bypassMode = 100
}
export const enum windowsSpotlightEnablementSettings {
notConfigured = 0,
disabled = 1,
enabled = 2
}
export const enum windowsStartMenuAppListVisibilityType {
userDefined = 0,
collapse = 1,
remove = 2,
disableSettingsApp = 4
}
export const enum windowsStartMenuModeType {
userDefined = 0,
fullScreen = 1,
nonFullScreen = 2
}
export const enum windowsUpdateForBusinessUpdateWeeks {
userDefined = 0,
firstWeek = 1,
secondWeek = 2,
thirdWeek = 4,
fourthWeek = 8,
everyWeek = 15,
unknownFutureValue = 22
}
export const enum windowsUpdateNotificationDisplayOption {
notConfigured = 0,
defaultNotifications = 1,
restartWarningsOnly = 2,
disableAllNotifications = 3,
unknownFutureValue = 4
}
export const enum windowsUpdateType {
userDefined = 0,
all = 1,
businessReadyOnly = 2,
windowsInsiderBuildFast = 3,
windowsInsiderBuildSlow = 4,
windowsInsiderBuildRelease = 5
}
export const enum windowsUserAccountControlSettings {
userDefined = 0,
alwaysNotify = 1,
notifyOnAppChanges = 2,
notifyOnAppChangesWithoutDimming = 3,
neverNotify = 4
}
export const enum deviceManagementExchangeConnectorStatus {
none = 0,
connectionPending = 1,
connected = 2,
disconnected = 3,
unknownFutureValue = 4
}
export const enum deviceManagementExchangeConnectorSyncType {
fullSync = 0,
deltaSync = 1
}
export const enum deviceManagementExchangeConnectorType {
onPremises = 0,
hosted = 1,
serviceToService = 2,
dedicated = 3,
unknownFutureValue = 4
}
export const enum deviceManagementPartnerAppType {
unknown = 0,
singleTenantApp = 1,
multiTenantApp = 2
}
export const enum deviceManagementPartnerTenantState {
unknown = 0,
unavailable = 1,
enabled = 2,
terminated = 3,
rejected = 4,
unresponsive = 5
}
export const enum mdmAuthority {
unknown = 0,
intune = 1,
sccm = 2,
office365 = 3
}
export const enum mobileThreatPartnerTenantState {
unavailable = 0,
available = 1,
enabled = 2,
unresponsive = 3
}
export const enum vppTokenState {
unknown = 0,
valid = 1,
expired = 2,
invalid = 3,
assignedToExternalMDM = 4
}
export const enum vppTokenSyncStatus {
none = 0,
inProgress = 1,
completed = 2,
failed = 3
}
export const enum windowsHelloForBusinessPinUsage {
allowed = 0,
required = 1,
disallowed = 2
}
export const enum actionState {
none = 0,
pending = 1,
canceled = 2,
active = 3,
done = 4,
failed = 5,
notSupported = 6
}
export const enum appLogDecryptionAlgorithm {
aes256 = 0,
unknownFutureValue = 1
}
export const enum appLogUploadState {
pending = 0,
completed = 1,
failed = 2,
unknownFutureValue = 3
}
export const enum complianceState {
unknown = 0,
compliant = 1,
noncompliant = 2,
conflict = 3,
error = 4,
inGracePeriod = 254,
configManager = 255
}
export const enum detectedAppPlatformType {
unknown = 0,
windows = 1,
windowsMobile = 2,
windowsHolographic = 3,
ios = 4,
macOS = 5,
chromeOS = 6,
androidOSP = 7,
androidDeviceAdministrator = 8,
androidWorkProfile = 9,
androidDedicatedAndFullyManaged = 10,
unknownFutureValue = 11
}
export const enum deviceEnrollmentType {
unknown = 0,
userEnrollment = 1,
deviceEnrollmentManager = 2,
appleBulkWithUser = 3,
appleBulkWithoutUser = 4,
windowsAzureADJoin = 5,
windowsBulkUserless = 6,
windowsAutoEnrollment = 7,
windowsBulkAzureDomainJoin = 8,
windowsCoManagement = 9,
windowsAzureADJoinUsingDeviceAuth = 10,
appleUserEnrollment = 11,
appleUserEnrollmentWithServiceAccount = 12
}
export const enum deviceLogCollectionTemplateType {
predefined = 0,
unknownFutureValue = 1
}
export const enum deviceManagementExchangeAccessState {
none = 0,
unknown = 1,
allowed = 2,
blocked = 3,
quarantined = 4
}
export const enum deviceManagementExchangeAccessStateReason {
none = 0,
unknown = 1,
exchangeGlobalRule = 2,
exchangeIndividualRule = 3,
exchangeDeviceRule = 4,
exchangeUpgrade = 5,
exchangeMailboxPolicy = 6,
other = 7,
compliant = 8,
notCompliant = 9,
notEnrolled = 10,
unknownLocation = 12,
mfaRequired = 13,
azureADBlockDueToAccessPolicy = 14,
compromisedPassword = 15,
deviceNotKnownWithManagedApp = 16
}
export const enum deviceManagementSubscriptionState {
pending = 0,
active = 1,
warning = 2,
disabled = 3,
deleted = 4,
blocked = 5,
lockedOut = 8
}
export const enum deviceRegistrationState {
notRegistered = 0,
registered = 2,
revoked = 3,
keyConflict = 4,
approvalPending = 5,
certificateReset = 6,
notRegisteredPendingEnrollment = 7,
unknown = 8
}
export const enum diskType {
unknown = 0,
hdd = 1,
ssd = 2,
unknownFutureValue = 3
}
export const enum managedDeviceOwnerType {
unknown = 0,
company = 1,
personal = 2
}
export const enum managedDevicePartnerReportedHealthState {
unknown = 0,
activated = 1,
deactivated = 2,
secured = 3,
lowSeverity = 4,
mediumSeverity = 5,
highSeverity = 6,
unresponsive = 7,
compromised = 8,
misconfigured = 9
}
export const enum managementAgentType {
eas = 1,
mdm = 2,
easMdm = 3,
intuneClient = 4,
easIntuneClient = 5,
configurationManagerClient = 8,
configurationManagerClientMdm = 10,
configurationManagerClientMdmEas = 11,
unknown = 16,
jamf = 32,
googleCloudDevicePolicyController = 64,
microsoft365ManagedMdm = 258,
msSense = 1024
}
export const enum obliterationBehavior {
default = 0,
doNotObliterate = 1,
obliterateWithWarning = 2,
always = 3,
unknownFutureValue = 999
}
export const enum operatingSystemUpgradeEligibility {
upgraded = 0,
unknown = 1,
notCapable = 2,
capable = 3,
unknownFutureValue = 4
}
export const enum userExperienceAnalyticsHealthState {
unknown = 0,
insufficientData = 1,
needsAttention = 2,
meetingGoals = 3,
unknownFutureValue = 4
}
export const enum userExperienceAnalyticsInsightSeverity {
none = 0,
informational = 1,
warning = 2,
error = 3,
unknownFutureValue = 4
}
export const enum userExperienceAnalyticsOperatingSystemRestartCategory {
unknown = 0,
restartWithUpdate = 1,
restartWithoutUpdate = 2,
blueScreen = 3,
shutdownWithUpdate = 4,
shutdownWithoutUpdate = 5,
longPowerButtonPress = 6,
bootError = 7,
update = 8,
unknownFutureValue = 9
}
export const enum userExperienceAnalyticsSummarizedBy {
none = 0,
model = 1,
allRegressions = 3,
modelRegression = 4,
manufacturerRegression = 5,
operatingSystemVersionRegression = 6,
unknownFutureValue = 7
}
export const enum windowsDefenderProductStatus {
noStatus = 0,
serviceNotRunning = 1,
serviceStartedWithoutMalwareProtection = 2,
pendingFullScanDueToThreatAction = 4,
pendingRebootDueToThreatAction = 8,
pendingManualStepsDueToThreatAction = 16,
avSignaturesOutOfDate = 32,
asSignaturesOutOfDate = 64,
noQuickScanHappenedForSpecifiedPeriod = 128,
noFullScanHappenedForSpecifiedPeriod = 256,
systemInitiatedScanInProgress = 512,
systemInitiatedCleanInProgress = 1024,
samplesPendingSubmission = 2048,
productRunningInEvaluationMode = 4096,
productRunningInNonGenuineMode = 8192,
productExpired = 16384,
offlineScanRequired = 32768,
serviceShutdownAsPartOfSystemShutdown = 65536,
threatRemediationFailedCritically = 131072,
threatRemediationFailedNonCritically = 262144,
noStatusFlagsSet = 524288,
platformOutOfDate = 1048576,
platformUpdateInProgress = 2097152,
platformAboutToBeOutdated = 4194304,
signatureOrPlatformEndOfLifeIsPastOrIsImpending = 8388608,
windowsSModeSignaturesInUseOnNonWin10SInstall = 16777216
}
export const enum windowsDeviceHealthState {
clean = 0,
fullScanPending = 1,
rebootPending = 2,
manualStepsPending = 4,
offlineScanPending = 8,
critical = 16
}
export const enum windowsMalwareCategory {
invalid = 0,
adware = 1,
spyware = 2,
passwordStealer = 3,
trojanDownloader = 4,
worm = 5,
backdoor = 6,
remoteAccessTrojan = 7,
trojan = 8,
emailFlooder = 9,
keylogger = 10,
dialer = 11,
monitoringSoftware = 12,
browserModifier = 13,
cookie = 14,
browserPlugin = 15,
aolExploit = 16,
nuker = 17,
securityDisabler = 18,
jokeProgram = 19,
hostileActiveXControl = 20,
softwareBundler = 21,
stealthNotifier = 22,
settingsModifier = 23,
toolBar = 24,
remoteControlSoftware = 25,
trojanFtp = 26,
potentialUnwantedSoftware = 27,
icqExploit = 28,
trojanTelnet = 29,
exploit = 30,
filesharingProgram = 31,
malwareCreationTool = 32,
remote_Control_Software = 33,
tool = 34,
trojanDenialOfService = 36,
trojanDropper = 37,
trojanMassMailer = 38,
trojanMonitoringSoftware = 39,
trojanProxyServer = 40,
virus = 42,
known = 43,
unknown = 44,
spp = 45,
behavior = 46,
vulnerability = 47,
policy = 48,
enterpriseUnwantedSoftware = 49,
ransom = 50,
hipsRule = 51
}
export const enum windowsMalwareExecutionState {
unknown = 0,
blocked = 1,
allowed = 2,
running = 3,
notRunning = 4
}
export const enum windowsMalwareSeverity {
unknown = 0,
low = 1,
moderate = 2,
high = 4,
severe = 5
}
export const enum windowsMalwareState {
unknown = 0,
detected = 1,
cleaned = 2,
quarantined = 3,
removed = 4,
allowed = 5,
blocked = 6,
cleanFailed = 102,
quarantineFailed = 103,
removeFailed = 104,
allowFailed = 105,
abandoned = 106,
blockFailed = 107
}
export const enum windowsMalwareThreatState {
active = 0,
actionFailed = 1,
manualStepsRequired = 2,
fullScanRequired = 3,
rebootRequired = 4,
remediatedWithNonCriticalFailures = 5,
quarantined = 6,
removed = 7,
cleaned = 8,
allowed = 9,
noStatusCleared = 10
}
export const enum enrollmentState {
unknown = 0,
enrolled = 1,
pendingReset = 2,
failed = 3,
notContacted = 4
}
export const enum importedWindowsAutopilotDeviceIdentityImportStatus {
unknown = 0,
pending = 1,
partial = 2,
complete = 3,
error = 4
}
export const enum importedWindowsAutopilotDeviceIdentityUploadStatus {
noUpload = 0,
pending = 1,
complete = 2,
error = 3
}
export const enum managedAppClipboardSharingLevel {
allApps = 0,
managedAppsWithPasteIn = 1,
managedApps = 2,
blocked = 3
}
export const enum managedAppDataEncryptionType {
useDeviceSettings = 0,
afterDeviceRestart = 1,
whenDeviceLockedExceptOpenFiles = 2,
whenDeviceLocked = 3
}
export const enum managedAppDataStorageLocation {
oneDriveForBusiness = 1,
sharePoint = 2,
box = 3,
localStorage = 6
}
export const enum managedAppDataTransferLevel {
allApps = 0,
managedApps = 1,
none = 2
}
export const enum managedAppFlaggedReason {
none = 0,
rootedDevice = 1
}
export const enum managedAppPinCharacterSet {
numeric = 0,
alphanumericAndSymbol = 1
}
export const enum managedBrowserType {
notConfigured = 0,
microsoftEdge = 1
}
export const enum targetedManagedAppGroupType {
selectedPublicApps = 0,
allCoreMicrosoftApps = 1,
allMicrosoftApps = 2,
allApps = 4
}
export const enum windowsInformationProtectionEnforcementLevel {
noProtection = 0,
encryptAndAuditOnly = 1,
encryptAuditAndPrompt = 2,
encryptAuditAndBlock = 3
}
export const enum windowsInformationProtectionPinCharacterRequirements {
notAllow = 0,
requireAtLeastOne = 1,
allow = 2
}
export const enum notificationTemplateBrandingOptions {
none = 0,
includeCompanyLogo = 1,
includeCompanyName = 2,
includeContactInformation = 4,
includeCompanyPortalLink = 8,
includeDeviceDetails = 16,
unknownFutureValue = 32
}
export const enum remoteAssistanceOnboardingStatus {
notOnboarded = 0,
onboarding = 1,
onboarded = 2
}
export const enum deviceManagementExportJobLocalizationType {
localizedValuesAsAdditionalColumn = 0,
replaceLocalizableValues = 1
}
export const enum deviceManagementReportFileFormat {
csv = 0,
pdf = 1,
json = 2,
unknownFutureValue = 3
}
export const enum deviceManagementReportStatus {
unknown = 0,
notStarted = 1,
inProgress = 2,
completed = 3,
failed = 4
}
export const enum deviceEnrollmentFailureReason {
unknown = 0,
authentication = 1,
authorization = 2,
accountValidation = 3,
userValidation = 4,
deviceNotSupported = 5,
inMaintenance = 6,
badRequest = 7,
featureNotSupported = 8,
enrollmentRestrictionsEnforced = 9,
clientDisconnected = 10,
userAbandonment = 11
}
export const enum applicationType {
universal = 1,
desktop = 2
}
export const enum postType {
regular = 0,
quick = 1,
strategic = 2,
unknownFutureValue = 3
}
export const enum serviceHealthClassificationType {
advisory = 1,
incident = 2,
unknownFutureValue = 3
}
export const enum serviceHealthOrigin {
microsoft = 1,
thirdParty = 2,
customer = 3,
unknownFutureValue = 4
}
export const enum serviceHealthStatus {
serviceOperational = 0,
investigating = 1,
restoringService = 2,
verifyingService = 3,
serviceRestored = 4,
postIncidentReviewPublished = 5,
serviceDegradation = 6,
serviceInterruption = 7,
extendedRecovery = 8,
falsePositive = 9,
investigationSuspended = 10,
resolved = 11,
mitigatedExternal = 12,
mitigated = 13,
resolvedExternal = 14,
confirmed = 15,
reported = 16,
unknownFutureValue = 17
}
export const enum serviceUpdateCategory {
preventOrFixIssue = 1,
planForChange = 2,
stayInformed = 3,
unknownFutureValue = 4
}
export const enum serviceUpdateSeverity {
normal = 1,
high = 2,
critical = 3,
unknownFutureValue = 4
}
export const enum bucketAggregationSortProperty {
count = 0,
keyAsString = 1,
keyAsNumber = 2,
unknownFutureValue = 3
}
export const enum entityType {
event = 0,
message = 1,
driveItem = 2,
externalItem = 4,
site = 5,
list = 6,
listItem = 7,
drive = 8,
unknownFutureValue = 9,
acronym = 12,
bookmark = 13,
chatMessage = 10,
person = 11
}
export const enum searchAlterationType {
suggestion = 0,
modification = 1,
unknownFutureValue = 2
}
export const enum searchContent {
sharedContent = 1,
privateContent = 2,
unknownFutureValue = 4
}
export const enum plannerContainerType {
group = 1,
unknownFutureValue = 2,
roster = 3
}
export const enum plannerPreviewType {
automatic = 0,
noPreview = 1,
checklist = 2,
description = 3,
reference = 4
}
export const enum onenotePatchActionType {
Replace = 0,
Append = 1,
Delete = 2,
Insert = 3,
Prepend = 4
}
export const enum onenotePatchInsertPosition {
After = 0,
Before = 1
}
export const enum onenoteSourceService {
Unknown = 0,
OneDrive = 1,
OneDriveForBusiness = 2,
OnPremOneDriveForBusiness = 3
}
export const enum onenoteUserRole {
None = -1,
Owner = 0,
Contributor = 1,
Reader = 2
}
export const enum operationStatus {
NotStarted = 0,
Running = 1,
Completed = 2,
Failed = 3
}
export const enum delegatedAdminAccessAssignmentStatus {
pending = 0,
active = 1,
deleting = 2,
deleted = 3,
error = 4,
unknownFutureValue = 5
}
export const enum delegatedAdminAccessContainerType {
securityGroup = 0,
unknownFutureValue = 1
}
export const enum delegatedAdminRelationshipOperationType {
delegatedAdminAccessAssignmentUpdate = 0,
unknownFutureValue = 1
}
export const enum delegatedAdminRelationshipRequestAction {
lockForApproval = 0,
approve = 1,
terminate = 2,
unknownFutureValue = 3
}
export const enum delegatedAdminRelationshipRequestStatus {
created = 0,
pending = 1,
succeeded = 2,
failed = 3,
unknownFutureValue = 4
}
export const enum delegatedAdminRelationshipStatus {
activating = 0,
active = 1,
approvalPending = 2,
approved = 3,
created = 4,
expired = 5,
expiring = 6,
terminated = 7,
terminating = 8,
terminationRequested = 9,
unknownFutureValue = 10
}
export const enum roleAssignmentScheduleFilterByCurrentUserOptions {
principal = 1,
unknownFutureValue = 2
}
export const enum roleAssignmentScheduleInstanceFilterByCurrentUserOptions {
principal = 1,
unknownFutureValue = 2
}
export const enum roleAssignmentScheduleRequestFilterByCurrentUserOptions {
principal = 1,
createdBy = 2,
approver = 3,
unknownFutureValue = 4
}
export const enum roleEligibilityScheduleFilterByCurrentUserOptions {
principal = 1,
unknownFutureValue = 2
}
export const enum roleEligibilityScheduleInstanceFilterByCurrentUserOptions {
principal = 1,
unknownFutureValue = 2
}
export const enum roleEligibilityScheduleRequestFilterByCurrentUserOptions {
principal = 1,
createdBy = 2,
approver = 3,
unknownFutureValue = 4
}
export const enum unifiedRoleManagementPolicyRuleTargetOperations {
all = 0,
activate = 1,
deactivate = 2,
assign = 3,
update = 4,
remove = 5,
extend = 6,
renew = 7,
unknownFutureValue = 8
}
export const enum unifiedRoleScheduleRequestActions {
adminAssign = 1,
adminUpdate = 2,
adminRemove = 3,
selfActivate = 4,
selfDeactivate = 5,
adminExtend = 6,
adminRenew = 7,
selfExtend = 8,
selfRenew = 9,
unknownFutureValue = 10
}
export const enum printColorMode {
blackAndWhite = 0,
grayscale = 1,
color = 2,
auto = 3,
unknownFutureValue = 4
}
export const enum printDuplexMode {
flipOnLongEdge = 0,
flipOnShortEdge = 1,
oneSided = 2,
unknownFutureValue = 3
}
export const enum printerFeedOrientation {
longEdgeFirst = 0,
shortEdgeFirst = 1,
unknownFutureValue = 2
}
export const enum printerProcessingState {
unknown = 0,
idle = 1,
processing = 2,
stopped = 3,
unknownFutureValue = 4
}
export const enum printerProcessingStateDetail {
paused = 0,
mediaJam = 2,
mediaNeeded = 3,
mediaLow = 4,
mediaEmpty = 5,
coverOpen = 6,
interlockOpen = 7,
outputTrayMissing = 9,
outputAreaFull = 10,
markerSupplyLow = 11,
markerSupplyEmpty = 12,
inputTrayMissing = 13,
outputAreaAlmostFull = 14,
markerWasteAlmostFull = 15,
markerWasteFull = 16,
fuserOverTemp = 17,
fuserUnderTemp = 18,
other = 19,
none = 20,
movingToPaused = 21,
shutdown = 22,
connectingToDevice = 23,
timedOut = 24,
stopping = 25,
stoppedPartially = 26,
tonerLow = 27,
tonerEmpty = 28,
spoolAreaFull = 29,
doorOpen = 30,
opticalPhotoConductorNearEndOfLife = 31,
opticalPhotoConductorLifeOver = 32,
developerLow = 33,
developerEmpty = 34,
interpreterResourceUnavailable = 35,
unknownFutureValue = 36,
alertRemovalOfBinaryChangeEntry = 37,
banderAdded = 38,
banderAlmostEmpty = 39,
banderAlmostFull = 40,
banderAtLimit = 41,
banderClosed = 42,
banderConfigurationChange = 43,
banderCoverClosed = 44,
banderCoverOpen = 45,
banderEmpty = 46,
banderFull = 47,
banderInterlockClosed = 48,
banderInterlockOpen = 49,
banderJam = 50,
banderLifeAlmostOver = 51,
banderLifeOver = 52,
banderMemoryExhausted = 53,
banderMissing = 54,
banderMotorFailure = 55,
banderNearLimit = 56,
banderOffline = 57,
banderOpened = 58,
banderOverTemperature = 59,
banderPowerSaver = 60,
banderRecoverableFailure = 61,
banderRecoverableStorage = 62,
banderRemoved = 63,
banderResourceAdded = 64,
banderResourceRemoved = 65,
banderThermistorFailure = 66,
banderTimingFailure = 67,
banderTurnedOff = 68,
banderTurnedOn = 69,
banderUnderTemperature = 70,
banderUnrecoverableFailure = 71,
banderUnrecoverableStorageError = 72,
banderWarmingUp = 73,
binderAdded = 74,
binderAlmostEmpty = 75,
binderAlmostFull = 76,
binderAtLimit = 77,
binderClosed = 78,
binderConfigurationChange = 79,
binderCoverClosed = 80,
binderCoverOpen = 81,
binderEmpty = 82,
binderFull = 83,
binderInterlockClosed = 84,
binderInterlockOpen = 85,
binderJam = 86,
binderLifeAlmostOver = 87,
binderLifeOver = 88,
binderMemoryExhausted = 89,
binderMissing = 90,
binderMotorFailure = 91,
binderNearLimit = 92,
binderOffline = 93,
binderOpened = 94,
binderOverTemperature = 95,
binderPowerSaver = 96,
binderRecoverableFailure = 97,
binderRecoverableStorage = 98,
binderRemoved = 99,
binderResourceAdded = 100,
binderResourceRemoved = 101,
binderThermistorFailure = 102,
binderTimingFailure = 103,
binderTurnedOff = 104,
binderTurnedOn = 105,
binderUnderTemperature = 106,
binderUnrecoverableFailure = 107,
binderUnrecoverableStorageError = 108,
binderWarmingUp = 109,
cameraFailure = 110,
chamberCooling = 111,
chamberFailure = 112,
chamberHeating = 113,
chamberTemperatureHigh = 114,
chamberTemperatureLow = 115,
cleanerLifeAlmostOver = 116,
cleanerLifeOver = 117,
configurationChange = 118,
deactivated = 119,
deleted = 120,
dieCutterAdded = 121,
dieCutterAlmostEmpty = 122,
dieCutterAlmostFull = 123,
dieCutterAtLimit = 124,
dieCutterClosed = 125,
dieCutterConfigurationChange = 126,
dieCutterCoverClosed = 127,
dieCutterCoverOpen = 128,
dieCutterEmpty = 129,
dieCutterFull = 130,
dieCutterInterlockClosed = 131,
dieCutterInterlockOpen = 132,
dieCutterJam = 133,
dieCutterLifeAlmostOver = 134,
dieCutterLifeOver = 135,
dieCutterMemoryExhausted = 136,
dieCutterMissing = 137,
dieCutterMotorFailure = 138,
dieCutterNearLimit = 139,
dieCutterOffline = 140,
dieCutterOpened = 141,
dieCutterOverTemperature = 142,
dieCutterPowerSaver = 143,
dieCutterRecoverableFailure = 144,
dieCutterRecoverableStorage = 145,
dieCutterRemoved = 146,
dieCutterResourceAdded = 147,
dieCutterResourceRemoved = 148,
dieCutterThermistorFailure = 149,
dieCutterTimingFailure = 150,
dieCutterTurnedOff = 151,
dieCutterTurnedOn = 152,
dieCutterUnderTemperature = 153,
dieCutterUnrecoverableFailure = 154,
dieCutterUnrecoverableStorageError = 155,
dieCutterWarmingUp = 156,
extruderCooling = 157,
extruderFailure = 158,
extruderHeating = 159,
extruderJam = 160,
extruderTemperatureHigh = 161,
extruderTemperatureLow = 162,
fanFailure = 163,
faxModemLifeAlmostOver = 164,
faxModemLifeOver = 165,
faxModemMissing = 166,
faxModemTurnedOff = 167,
faxModemTurnedOn = 168,
folderAdded = 169,
folderAlmostEmpty = 170,
folderAlmostFull = 171,
folderAtLimit = 172,
folderClosed = 173,
folderConfigurationChange = 174,
folderCoverClosed = 175,
folderCoverOpen = 176,
folderEmpty = 177,
folderFull = 178,
folderInterlockClosed = 179,
folderInterlockOpen = 180,
folderJam = 181,
folderLifeAlmostOver = 182,
folderLifeOver = 183,
folderMemoryExhausted = 184,
folderMissing = 185,
folderMotorFailure = 186,
folderNearLimit = 187,
folderOffline = 188,
folderOpened = 189,
folderOverTemperature = 190,
folderPowerSaver = 191,
folderRecoverableFailure = 192,
folderRecoverableStorage = 193,
folderRemoved = 194,
folderResourceAdded = 195,
folderResourceRemoved = 196,
folderThermistorFailure = 197,
folderTimingFailure = 198,
folderTurnedOff = 199,
folderTurnedOn = 200,
folderUnderTemperature = 201,
folderUnrecoverableFailure = 202,
folderUnrecoverableStorageError = 203,
folderWarmingUp = 204,
hibernate = 205,
holdNewJobs = 206,
identifyPrinterRequested = 207,
imprinterAdded = 208,
imprinterAlmostEmpty = 209,
imprinterAlmostFull = 210,
imprinterAtLimit = 211,
imprinterClosed = 212,
imprinterConfigurationChange = 213,
imprinterCoverClosed = 214,
imprinterCoverOpen = 215,
imprinterEmpty = 216,
imprinterFull = 217,
imprinterInterlockClosed = 218,
imprinterInterlockOpen = 219,
imprinterJam = 220,
imprinterLifeAlmostOver = 221,
imprinterLifeOver = 222,
imprinterMemoryExhausted = 223,
imprinterMissing = 224,
imprinterMotorFailure = 225,
imprinterNearLimit = 226,
imprinterOffline = 227,
imprinterOpened = 228,
imprinterOverTemperature = 229,
imprinterPowerSaver = 230,
imprinterRecoverableFailure = 231,
imprinterRecoverableStorage = 232,
imprinterRemoved = 233,
imprinterResourceAdded = 234,
imprinterResourceRemoved = 235,
imprinterThermistorFailure = 236,
imprinterTimingFailure = 237,
imprinterTurnedOff = 238,
imprinterTurnedOn = 239,
imprinterUnderTemperature = 240,
imprinterUnrecoverableFailure = 241,
imprinterUnrecoverableStorageError = 242,
imprinterWarmingUp = 243,
inputCannotFeedSizeSelected = 244,
inputManualInputRequest = 245,
inputMediaColorChange = 246,
inputMediaFormPartsChange = 247,
inputMediaSizeChange = 248,
inputMediaTrayFailure = 249,
inputMediaTrayFeedError = 250,
inputMediaTrayJam = 251,
inputMediaTypeChange = 252,
inputMediaWeightChange = 253,
inputPickRollerFailure = 254,
inputPickRollerLifeOver = 255,
inputPickRollerLifeWarn = 256,
inputPickRollerMissing = 257,
inputTrayElevationFailure = 258,
inputTrayPositionFailure = 259,
inserterAdded = 260,
inserterAlmostEmpty = 261,
inserterAlmostFull = 262,
inserterAtLimit = 263,
inserterClosed = 264,
inserterConfigurationChange = 265,
inserterCoverClosed = 266,
inserterCoverOpen = 267,
inserterEmpty = 268,
inserterFull = 269,
inserterInterlockClosed = 270,
inserterInterlockOpen = 271,
inserterJam = 272,
inserterLifeAlmostOver = 273,
inserterLifeOver = 274,
inserterMemoryExhausted = 275,
inserterMissing = 276,
inserterMotorFailure = 277,
inserterNearLimit = 278,
inserterOffline = 279,
inserterOpened = 280,
inserterOverTemperature = 281,
inserterPowerSaver = 282,
inserterRecoverableFailure = 283,
inserterRecoverableStorage = 284,
inserterRemoved = 285,
inserterResourceAdded = 286,
inserterResourceRemoved = 287,
inserterThermistorFailure = 288,
inserterTimingFailure = 289,
inserterTurnedOff = 290,
inserterTurnedOn = 291,
inserterUnderTemperature = 292,
inserterUnrecoverableFailure = 293,
inserterUnrecoverableStorageError = 294,
inserterWarmingUp = 295,
interlockClosed = 296,
interpreterCartridgeAdded = 297,
interpreterCartridgeDeleted = 298,
interpreterComplexPageEncountered = 299,
interpreterMemoryDecrease = 300,
interpreterMemoryIncrease = 301,
interpreterResourceAdded = 302,
interpreterResourceDeleted = 303,
lampAtEol = 304,
lampFailure = 305,
lampNearEol = 306,
laserAtEol = 307,
laserFailure = 308,
laserNearEol = 309,
makeEnvelopeAdded = 310,
makeEnvelopeAlmostEmpty = 311,
makeEnvelopeAlmostFull = 312,
makeEnvelopeAtLimit = 313,
makeEnvelopeClosed = 314,
makeEnvelopeConfigurationChange = 315,
makeEnvelopeCoverClosed = 316,
makeEnvelopeCoverOpen = 317,
makeEnvelopeEmpty = 318,
makeEnvelopeFull = 319,
makeEnvelopeInterlockClosed = 320,
makeEnvelopeInterlockOpen = 321,
makeEnvelopeJam = 322,
makeEnvelopeLifeAlmostOver = 323,
makeEnvelopeLifeOver = 324,
makeEnvelopeMemoryExhausted = 325,
makeEnvelopeMissing = 326,
makeEnvelopeMotorFailure = 327,
makeEnvelopeNearLimit = 328,
makeEnvelopeOffline = 329,
makeEnvelopeOpened = 330,
makeEnvelopeOverTemperature = 331,
makeEnvelopePowerSaver = 332,
makeEnvelopeRecoverableFailure = 333,
makeEnvelopeRecoverableStorage = 334,
makeEnvelopeRemoved = 335,
makeEnvelopeResourceAdded = 336,
makeEnvelopeResourceRemoved = 337,
makeEnvelopeThermistorFailure = 338,
makeEnvelopeTimingFailure = 339,
makeEnvelopeTurnedOff = 340,
makeEnvelopeTurnedOn = 341,
makeEnvelopeUnderTemperature = 342,
makeEnvelopeUnrecoverableFailure = 343,
makeEnvelopeUnrecoverableStorageError = 344,
makeEnvelopeWarmingUp = 345,
markerAdjustingPrintQuality = 346,
markerCleanerMissing = 347,
markerDeveloperAlmostEmpty = 348,
markerDeveloperEmpty = 349,
markerDeveloperMissing = 350,
markerFuserMissing = 351,
markerFuserThermistorFailure = 352,
markerFuserTimingFailure = 353,
markerInkAlmostEmpty = 354,
markerInkEmpty = 355,
markerInkMissing = 356,
markerOpcMissing = 357,
markerPrintRibbonAlmostEmpty = 358,
markerPrintRibbonEmpty = 359,
markerPrintRibbonMissing = 360,
markerSupplyAlmostEmpty = 361,
markerSupplyMissing = 362,
markerTonerCartridgeMissing = 363,
markerTonerMissing = 364,
markerWasteInkReceptacleAlmostFull = 365,
markerWasteInkReceptacleFull = 366,
markerWasteInkReceptacleMissing = 367,
markerWasteMissing = 368,
markerWasteTonerReceptacleAlmostFull = 369,
markerWasteTonerReceptacleFull = 370,
markerWasteTonerReceptacleMissing = 371,
materialEmpty = 372,
materialLow = 373,
materialNeeded = 374,
mediaDrying = 375,
mediaPathCannotDuplexMediaSelected = 376,
mediaPathFailure = 377,
mediaPathInputEmpty = 378,
mediaPathInputFeedError = 379,
mediaPathInputJam = 380,
mediaPathInputRequest = 381,
mediaPathJam = 382,
mediaPathMediaTrayAlmostFull = 383,
mediaPathMediaTrayFull = 384,
mediaPathMediaTrayMissing = 385,
mediaPathOutputFeedError = 386,
mediaPathOutputFull = 387,
mediaPathOutputJam = 388,
mediaPathPickRollerFailure = 389,
mediaPathPickRollerLifeOver = 390,
mediaPathPickRollerLifeWarn = 391,
mediaPathPickRollerMissing = 392,
motorFailure = 393,
outputMailboxSelectFailure = 394,
outputMediaTrayFailure = 395,
outputMediaTrayFeedError = 396,
outputMediaTrayJam = 397,
perforaterAdded = 398,
perforaterAlmostEmpty = 399,
perforaterAlmostFull = 400,
perforaterAtLimit = 401,
perforaterClosed = 402,
perforaterConfigurationChange = 403,
perforaterCoverClosed = 404,
perforaterCoverOpen = 405,
perforaterEmpty = 406,
perforaterFull = 407,
perforaterInterlockClosed = 408,
perforaterInterlockOpen = 409,
perforaterJam = 410,
perforaterLifeAlmostOver = 411,
perforaterLifeOver = 412,
perforaterMemoryExhausted = 413,
perforaterMissing = 414,
perforaterMotorFailure = 415,
perforaterNearLimit = 416,
perforaterOffline = 417,
perforaterOpened = 418,
perforaterOverTemperature = 419,
perforaterPowerSaver = 420,
perforaterRecoverableFailure = 421,
perforaterRecoverableStorage = 422,
perforaterRemoved = 423,
perforaterResourceAdded = 424,
perforaterResourceRemoved = 425,
perforaterThermistorFailure = 426,
perforaterTimingFailure = 427,
perforaterTurnedOff = 428,
perforaterTurnedOn = 429,
perforaterUnderTemperature = 430,
perforaterUnrecoverableFailure = 431,
perforaterUnrecoverableStorageError = 432,
perforaterWarmingUp = 433,
platformCooling = 434,
platformFailure = 435,
platformHeating = 436,
platformTemperatureHigh = 437,
platformTemperatureLow = 438,
powerDown = 439,
powerUp = 440,
printerManualReset = 441,
printerNmsReset = 442,
printerReadyToPrint = 443,
puncherAdded = 444,
puncherAlmostEmpty = 445,
puncherAlmostFull = 446,
puncherAtLimit = 447,
puncherClosed = 448,
puncherConfigurationChange = 449,
puncherCoverClosed = 450,
puncherCoverOpen = 451,
puncherEmpty = 452,
puncherFull = 453,
puncherInterlockClosed = 454,
puncherInterlockOpen = 455,
puncherJam = 456,
puncherLifeAlmostOver = 457,
puncherLifeOver = 458,
puncherMemoryExhausted = 459,
puncherMissing = 460,
puncherMotorFailure = 461,
puncherNearLimit = 462,
puncherOffline = 463,
puncherOpened = 464,
puncherOverTemperature = 465,
puncherPowerSaver = 466,
puncherRecoverableFailure = 467,
puncherRecoverableStorage = 468,
puncherRemoved = 469,
puncherResourceAdded = 470,
puncherResourceRemoved = 471,
puncherThermistorFailure = 472,
puncherTimingFailure = 473,
puncherTurnedOff = 474,
puncherTurnedOn = 475,
puncherUnderTemperature = 476,
puncherUnrecoverableFailure = 477,
puncherUnrecoverableStorageError = 478,
puncherWarmingUp = 479,
resuming = 480,
scanMediaPathFailure = 481,
scanMediaPathInputEmpty = 482,
scanMediaPathInputFeedError = 483,
scanMediaPathInputJam = 484,
scanMediaPathInputRequest = 485,
scanMediaPathJam = 486,
scanMediaPathOutputFeedError = 487,
scanMediaPathOutputFull = 488,
scanMediaPathOutputJam = 489,
scanMediaPathPickRollerFailure = 490,
scanMediaPathPickRollerLifeOver = 491,
scanMediaPathPickRollerLifeWarn = 492,
scanMediaPathPickRollerMissing = 493,
scanMediaPathTrayAlmostFull = 494,
scanMediaPathTrayFull = 495,
scanMediaPathTrayMissing = 496,
scannerLightFailure = 497,
scannerLightLifeAlmostOver = 498,
scannerLightLifeOver = 499,
scannerLightMissing = 500,
scannerSensorFailure = 501,
scannerSensorLifeAlmostOver = 502,
scannerSensorLifeOver = 503,
scannerSensorMissing = 504,
separationCutterAdded = 505,
separationCutterAlmostEmpty = 506,
separationCutterAlmostFull = 507,
separationCutterAtLimit = 508,
separationCutterClosed = 509,
separationCutterConfigurationChange = 510,
separationCutterCoverClosed = 511,
separationCutterCoverOpen = 512,
separationCutterEmpty = 513,
separationCutterFull = 514,
separationCutterInterlockClosed = 515,
separationCutterInterlockOpen = 516,
separationCutterJam = 517,
separationCutterLifeAlmostOver = 518,
separationCutterLifeOver = 519,
separationCutterMemoryExhausted = 520,
separationCutterMissing = 521,
separationCutterMotorFailure = 522,
separationCutterNearLimit = 523,
separationCutterOffline = 524,
separationCutterOpened = 525,
separationCutterOverTemperature = 526,
separationCutterPowerSaver = 527,
separationCutterRecoverableFailure = 528,
separationCutterRecoverableStorage = 529,
separationCutterRemoved = 530,
separationCutterResourceAdded = 531,
separationCutterResourceRemoved = 532,
separationCutterThermistorFailure = 533,
separationCutterTimingFailure = 534,
separationCutterTurnedOff = 535,
separationCutterTurnedOn = 536,
separationCutterUnderTemperature = 537,
separationCutterUnrecoverableFailure = 538,
separationCutterUnrecoverableStorageError = 539,
separationCutterWarmingUp = 540,
sheetRotatorAdded = 541,
sheetRotatorAlmostEmpty = 542,
sheetRotatorAlmostFull = 543,
sheetRotatorAtLimit = 544,
sheetRotatorClosed = 545,
sheetRotatorConfigurationChange = 546,
sheetRotatorCoverClosed = 547,
sheetRotatorCoverOpen = 548,
sheetRotatorEmpty = 549,
sheetRotatorFull = 550,
sheetRotatorInterlockClosed = 551,
sheetRotatorInterlockOpen = 552,
sheetRotatorJam = 553,
sheetRotatorLifeAlmostOver = 554,
sheetRotatorLifeOver = 555,
sheetRotatorMemoryExhausted = 556,
sheetRotatorMissing = 557,
sheetRotatorMotorFailure = 558,
sheetRotatorNearLimit = 559,
sheetRotatorOffline = 560,
sheetRotatorOpened = 561,
sheetRotatorOverTemperature = 562,
sheetRotatorPowerSaver = 563,
sheetRotatorRecoverableFailure = 564,
sheetRotatorRecoverableStorage = 565,
sheetRotatorRemoved = 566,
sheetRotatorResourceAdded = 567,
sheetRotatorResourceRemoved = 568,
sheetRotatorThermistorFailure = 569,
sheetRotatorTimingFailure = 570,
sheetRotatorTurnedOff = 571,
sheetRotatorTurnedOn = 572,
sheetRotatorUnderTemperature = 573,
sheetRotatorUnrecoverableFailure = 574,
sheetRotatorUnrecoverableStorageError = 575,
sheetRotatorWarmingUp = 576,
slitterAdded = 577,
slitterAlmostEmpty = 578,
slitterAlmostFull = 579,
slitterAtLimit = 580,
slitterClosed = 581,
slitterConfigurationChange = 582,
slitterCoverClosed = 583,
slitterCoverOpen = 584,
slitterEmpty = 585,
slitterFull = 586,
slitterInterlockClosed = 587,
slitterInterlockOpen = 588,
slitterJam = 589,
slitterLifeAlmostOver = 590,
slitterLifeOver = 591,
slitterMemoryExhausted = 592,
slitterMissing = 593,
slitterMotorFailure = 594,
slitterNearLimit = 595,
slitterOffline = 596,
slitterOpened = 597,
slitterOverTemperature = 598,
slitterPowerSaver = 599,
slitterRecoverableFailure = 600,
slitterRecoverableStorage = 601,
slitterRemoved = 602,
slitterResourceAdded = 603,
slitterResourceRemoved = 604,
slitterThermistorFailure = 605,
slitterTimingFailure = 606,
slitterTurnedOff = 607,
slitterTurnedOn = 608,
slitterUnderTemperature = 609,
slitterUnrecoverableFailure = 610,
slitterUnrecoverableStorageError = 611,
slitterWarmingUp = 612,
stackerAdded = 613,
stackerAlmostEmpty = 614,
stackerAlmostFull = 615,
stackerAtLimit = 616,
stackerClosed = 617,
stackerConfigurationChange = 618,
stackerCoverClosed = 619,
stackerCoverOpen = 620,
stackerEmpty = 621,
stackerFull = 622,
stackerInterlockClosed = 623,
stackerInterlockOpen = 624,
stackerJam = 625,
stackerLifeAlmostOver = 626,
stackerLifeOver = 627,
stackerMemoryExhausted = 628,
stackerMissing = 629,
stackerMotorFailure = 630,
stackerNearLimit = 631,
stackerOffline = 632,
stackerOpened = 633,
stackerOverTemperature = 634,
stackerPowerSaver = 635,
stackerRecoverableFailure = 636,
stackerRecoverableStorage = 637,
stackerRemoved = 638,
stackerResourceAdded = 639,
stackerResourceRemoved = 640,
stackerThermistorFailure = 641,
stackerTimingFailure = 642,
stackerTurnedOff = 643,
stackerTurnedOn = 644,
stackerUnderTemperature = 645,
stackerUnrecoverableFailure = 646,
stackerUnrecoverableStorageError = 647,
stackerWarmingUp = 648,
standby = 649,
staplerAdded = 650,
staplerAlmostEmpty = 651,
staplerAlmostFull = 652,
staplerAtLimit = 653,
staplerClosed = 654,
staplerConfigurationChange = 655,
staplerCoverClosed = 656,
staplerCoverOpen = 657,
staplerEmpty = 658,
staplerFull = 659,
staplerInterlockClosed = 660,
staplerInterlockOpen = 661,
staplerJam = 662,
staplerLifeAlmostOver = 663,
staplerLifeOver = 664,
staplerMemoryExhausted = 665,
staplerMissing = 666,
staplerMotorFailure = 667,
staplerNearLimit = 668,
staplerOffline = 669,
staplerOpened = 670,
staplerOverTemperature = 671,
staplerPowerSaver = 672,
staplerRecoverableFailure = 673,
staplerRecoverableStorage = 674,
staplerRemoved = 675,
staplerResourceAdded = 676,
staplerResourceRemoved = 677,
staplerThermistorFailure = 678,
staplerTimingFailure = 679,
staplerTurnedOff = 680,
staplerTurnedOn = 681,
staplerUnderTemperature = 682,
staplerUnrecoverableFailure = 683,
staplerUnrecoverableStorageError = 684,
staplerWarmingUp = 685,
stitcherAdded = 686,
stitcherAlmostEmpty = 687,
stitcherAlmostFull = 688,
stitcherAtLimit = 689,
stitcherClosed = 690,
stitcherConfigurationChange = 691,
stitcherCoverClosed = 692,
stitcherCoverOpen = 693,
stitcherEmpty = 694,
stitcherFull = 695,
stitcherInterlockClosed = 696,
stitcherInterlockOpen = 697,
stitcherJam = 698,
stitcherLifeAlmostOver = 699,
stitcherLifeOver = 700,
stitcherMemoryExhausted = 701,
stitcherMissing = 702,
stitcherMotorFailure = 703,
stitcherNearLimit = 704,
stitcherOffline = 705,
stitcherOpened = 706,
stitcherOverTemperature = 707,
stitcherPowerSaver = 708,
stitcherRecoverableFailure = 709,
stitcherRecoverableStorage = 710,
stitcherRemoved = 711,
stitcherResourceAdded = 712,
stitcherResourceRemoved = 713,
stitcherThermistorFailure = 714,
stitcherTimingFailure = 715,
stitcherTurnedOff = 716,
stitcherTurnedOn = 717,
stitcherUnderTemperature = 718,
stitcherUnrecoverableFailure = 719,
stitcherUnrecoverableStorageError = 720,
stitcherWarmingUp = 721,
subunitAdded = 722,
subunitAlmostEmpty = 723,
subunitAlmostFull = 724,
subunitAtLimit = 725,
subunitClosed = 726,
subunitCoolingDown = 727,
subunitEmpty = 728,
subunitFull = 729,
subunitLifeAlmostOver = 730,
subunitLifeOver = 731,
subunitMemoryExhausted = 732,
subunitMissing = 733,
subunitMotorFailure = 734,
subunitNearLimit = 735,
subunitOffline = 736,
subunitOpened = 737,
subunitOverTemperature = 738,
subunitPowerSaver = 739,
subunitRecoverableFailure = 740,
subunitRecoverableStorage = 741,
subunitRemoved = 742,
subunitResourceAdded = 743,
subunitResourceRemoved = 744,
subunitThermistorFailure = 745,
subunitTimingFailure = 746,
subunitTurnedOff = 747,
subunitTurnedOn = 748,
subunitUnderTemperature = 749,
subunitUnrecoverableFailure = 750,
subunitUnrecoverableStorage = 751,
subunitWarmingUp = 752,
suspend = 753,
testing = 754,
trimmerAdded = 755,
trimmerAlmostEmpty = 756,
trimmerAlmostFull = 757,
trimmerAtLimit = 758,
trimmerClosed = 759,
trimmerConfigurationChange = 760,
trimmerCoverClosed = 761,
trimmerCoverOpen = 762,
trimmerEmpty = 763,
trimmerFull = 764,
trimmerInterlockClosed = 765,
trimmerInterlockOpen = 766,
trimmerJam = 767,
trimmerLifeAlmostOver = 768,
trimmerLifeOver = 769,
trimmerMemoryExhausted = 770,
trimmerMissing = 771,
trimmerMotorFailure = 772,
trimmerNearLimit = 773,
trimmerOffline = 774,
trimmerOpened = 775,
trimmerOverTemperature = 776,
trimmerPowerSaver = 777,
trimmerRecoverableFailure = 778,
trimmerRecoverableStorage = 779,
trimmerRemoved = 780,
trimmerResourceAdded = 781,
trimmerResourceRemoved = 782,
trimmerThermistorFailure = 783,
trimmerTimingFailure = 784,
trimmerTurnedOff = 785,
trimmerTurnedOn = 786,
trimmerUnderTemperature = 787,
trimmerUnrecoverableFailure = 788,
trimmerUnrecoverableStorageError = 789,
trimmerWarmingUp = 790,
unknown = 791,
wrapperAdded = 792,
wrapperAlmostEmpty = 793,
wrapperAlmostFull = 794,
wrapperAtLimit = 795,
wrapperClosed = 796,
wrapperConfigurationChange = 797,
wrapperCoverClosed = 798,
wrapperCoverOpen = 799,
wrapperEmpty = 800,
wrapperFull = 801,
wrapperInterlockClosed = 802,
wrapperInterlockOpen = 803,
wrapperJam = 804,
wrapperLifeAlmostOver = 805,
wrapperLifeOver = 806,
wrapperMemoryExhausted = 807,
wrapperMissing = 808,
wrapperMotorFailure = 809,
wrapperNearLimit = 810,
wrapperOffline = 811,
wrapperOpened = 812,
wrapperOverTemperature = 813,
wrapperPowerSaver = 814,
wrapperRecoverableFailure = 815,
wrapperRecoverableStorage = 816,
wrapperRemoved = 817,
wrapperResourceAdded = 818,
wrapperResourceRemoved = 819,
wrapperThermistorFailure = 820,
wrapperTimingFailure = 821,
wrapperTurnedOff = 822,
wrapperTurnedOn = 823,
wrapperUnderTemperature = 824,
wrapperUnrecoverableFailure = 825,
wrapperUnrecoverableStorageError = 826,
wrapperWarmingUp = 827
}
export const enum printEvent {
jobStarted = 0,
unknownFutureValue = 1
}
export const enum printFinishing {
none = 3,
staple = 4,
punch = 5,
cover = 6,
bind = 7,
saddleStitch = 8,
stitchEdge = 9,
stapleTopLeft = 20,
stapleBottomLeft = 21,
stapleTopRight = 22,
stapleBottomRight = 23,
stitchLeftEdge = 24,
stitchTopEdge = 25,
stitchRightEdge = 26,
stitchBottomEdge = 27,
stapleDualLeft = 28,
stapleDualTop = 29,
stapleDualRight = 30,
stapleDualBottom = 31,
unknownFutureValue = 32
}
export const enum printJobProcessingState {
unknown = 0,
pending = 1,
processing = 2,
paused = 3,
stopped = 4,
completed = 5,
canceled = 6,
aborted = 7,
unknownFutureValue = 8
}
export const enum printJobStateDetail {
uploadPending = 0,
transforming = 1,
completedSuccessfully = 2,
completedWithWarnings = 3,
completedWithErrors = 4,
releaseWait = 5,
interpreting = 6,
unknownFutureValue = 7
}
export const enum printMultipageLayout {
clockwiseFromTopLeft = 0,
counterclockwiseFromTopLeft = 1,
counterclockwiseFromTopRight = 2,
clockwiseFromTopRight = 3,
counterclockwiseFromBottomLeft = 4,
clockwiseFromBottomLeft = 5,
counterclockwiseFromBottomRight = 6,
clockwiseFromBottomRight = 7,
unknownFutureValue = 8
}
export const enum printOperationProcessingState {
notStarted = 0,
running = 1,
succeeded = 2,
failed = 3,
unknownFutureValue = 4
}
export const enum printOrientation {
portrait = 3,
landscape = 4,
reverseLandscape = 5,
reversePortrait = 6,
unknownFutureValue = 7
}
export const enum printQuality {
low = 0,
medium = 1,
high = 2,
unknownFutureValue = 3
}
export const enum printScaling {
auto = 0,
shrinkToFit = 1,
fill = 2,
fit = 3,
none = 4,
unknownFutureValue = 5
}
export const enum printTaskProcessingState {
pending = 0,
processing = 1,
completed = 2,
aborted = 3,
unknownFutureValue = 4
}
export const enum status {
active = 0,
updated = 1,
deleted = 2,
ignored = 3,
unknownFutureValue = 4
}
export const enum dataPolicyOperationStatus {
notStarted = 0,
running = 1,
complete = 2,
failed = 3,
unknownFutureValue = 4
}
export const enum payloadDeliveryPlatform {
unknown = 0,
sms = 1,
email = 2,
teams = 3,
unknownFutureValue = 4
}
export const enum simulationAttackTechnique {
unknown = 0,
credentialHarvesting = 1,
attachmentMalware = 2,
driveByUrl = 3,
linkInAttachment = 4,
linkToMalwareFile = 5,
unknownFutureValue = 6
}
export const enum simulationAttackType {
unknown = 0,
social = 1,
cloud = 2,
endpoint = 3,
unknownFutureValue = 4
}
export const enum simulationAutomationRunStatus {
unknown = 0,
running = 1,
succeeded = 2,
failed = 3,
skipped = 4,
unknownFutureValue = 5
}
export const enum simulationAutomationStatus {
unknown = 0,
draft = 1,
notRunning = 2,
running = 3,
completed = 4,
unknownFutureValue = 5
}
export const enum simulationStatus {
unknown = 0,
draft = 1,
running = 2,
scheduled = 3,
succeeded = 4,
failed = 5,
cancelled = 6,
excluded = 7,
unknownFutureValue = 8
}
export const enum trainingStatus {
unknown = 0,
assigned = 1,
inProgress = 2,
completed = 3,
overdue = 4,
unknownFutureValue = 5
}
export const enum alertFeedback {
unknown = 0,
truePositive = 1,
falsePositive = 2,
benignPositive = 3,
unknownFutureValue = 127
}
export const enum alertSeverity {
unknown = 0,
informational = 1,
low = 2,
medium = 3,
high = 4,
unknownFutureValue = 127
}
export const enum alertStatus {
unknown = 0,
newAlert = 1,
inProgress = 2,
resolved = 3,
dismissed = 4,
unknownFutureValue = 127
}
export const enum connectionDirection {
unknown = 0,
inbound = 1,
outbound = 2,
unknownFutureValue = 127
}
export const enum connectionStatus {
unknown = 0,
attempted = 1,
succeeded = 2,
blocked = 3,
failed = 4,
unknownFutureValue = 127
}
export const enum emailRole {
unknown = 0,
sender = 1,
recipient = 2,
unknownFutureValue = 127
}
export const enum fileHashType {
unknown = 0,
sha1 = 1,
sha256 = 2,
md5 = 3,
authenticodeHash256 = 4,
lsHash = 5,
ctph = 6,
unknownFutureValue = 127
}
export const enum logonType {
unknown = 0,
interactive = 1,
remoteInteractive = 2,
network = 3,
batch = 4,
service = 5,
unknownFutureValue = 127
}
export const enum processIntegrityLevel {
unknown = 0,
untrusted = 1,
low = 2,
medium = 3,
high = 4,
system = 5,
unknownFutureValue = 127
}
export const enum registryHive {
unknown = 0,
currentConfig = 1,
currentUser = 2,
localMachineSam = 3,
localMachineSecurity = 4,
localMachineSoftware = 5,
localMachineSystem = 6,
usersDefault = 7,
unknownFutureValue = 127
}
export const enum registryOperation {
unknown = 0,
create = 1,
modify = 2,
delete = 3,
unknownFutureValue = 127
}
export const enum registryValueType {
unknown = 0,
binary = 1,
dword = 2,
dwordLittleEndian = 3,
dwordBigEndian = 4,
expandSz = 5,
link = 6,
multiSz = 7,
none = 8,
qword = 9,
qwordlittleEndian = 10,
sz = 11,
unknownFutureValue = 127
}
export const enum securityNetworkProtocol {
unknown = -1,
ip = 0,
icmp = 1,
igmp = 2,
ggp = 3,
ipv4 = 4,
tcp = 6,
pup = 12,
udp = 17,
idp = 22,
ipv6 = 41,
ipv6RoutingHeader = 43,
ipv6FragmentHeader = 44,
ipSecEncapsulatingSecurityPayload = 50,
ipSecAuthenticationHeader = 51,
icmpV6 = 58,
ipv6NoNextHeader = 59,
ipv6DestinationOptions = 60,
nd = 77,
raw = 255,
ipx = 1000,
spx = 1256,
spxII = 1257,
unknownFutureValue = 32767
}
export const enum securityResourceType {
unknown = 0,
attacked = 1,
related = 2,
unknownFutureValue = 3
}
export const enum userAccountSecurityType {
unknown = 0,
standard = 1,
power = 2,
administrator = 3,
unknownFutureValue = 127
}
export const enum broadcastMeetingAudience {
roleIsAttendee = 0,
organization = 1,
everyone = 2,
unknownFutureValue = 3
}
export const enum callDirection {
incoming = 0,
outgoing = 1
}
export const enum callState {
incoming = 0,
establishing = 1,
established = 3,
hold = 4,
transferring = 5,
transferAccepted = 6,
redirecting = 7,
terminating = 8,
terminated = 9,
unknownFutureValue = 10
}
export const enum callTranscriptionState {
notStarted = 0,
active = 1,
inactive = 2,
unknownFutureValue = 3
}
export const enum changeType {
created = 0,
updated = 1,
deleted = 2
}
export const enum endpointType {
default = 0,
voicemail = 1,
skypeForBusiness = 2,
skypeForBusinessVoipPhone = 3,
unknownFutureValue = 4
}
export const enum mediaDirection {
inactive = 0,
sendOnly = 1,
receiveOnly = 2,
sendReceive = 3
}
export const enum mediaState {
active = 0,
inactive = 1,
unknownFutureValue = 2
}
export const enum meetingChatHistoryDefaultMode {
none = 0,
all = 1,
unknownFutureValue = 2
}
export const enum modality {
audio = 1,
video = 2,
videoBasedScreenSharing = 3,
data = 4,
unknownFutureValue = 5
}
export const enum onlineMeetingContentSharingDisabledReason {
watermarkProtection = 1,
unknownFutureValue = 2
}
export const enum onlineMeetingRole {
attendee = 0,
presenter = 1,
unknownFutureValue = 2,
producer = 3,
coorganizer = 4
}
export const enum onlineMeetingVideoDisabledReason {
watermarkProtection = 1,
unknownFutureValue = 2
}
export const enum recordingStatus {
unknown = 0,
notRecording = 1,
recording = 2,
failed = 3,
unknownFutureValue = 4
}
export const enum rejectReason {
none = 0,
busy = 1,
forbidden = 2,
unknownFutureValue = 3
}
export const enum routingMode {
oneToOne = 0,
multicast = 1,
unknownFutureValue = 2
}
export const enum routingType {
forwarded = 0,
lookup = 1,
selfFork = 2,
unknownFutureValue = 3
}
export const enum screenSharingRole {
viewer = 0,
sharer = 1
}
export const enum tone {
tone0 = 0,
tone1 = 1,
tone2 = 2,
tone3 = 3,
tone4 = 4,
tone5 = 5,
tone6 = 6,
tone7 = 7,
tone8 = 8,
tone9 = 9,
star = 10,
pound = 11,
a = 12,
b = 13,
c = 14,
d = 15,
flash = 16
}
export const enum attestationLevel {
attested = 0,
notAttested = 1,
unknownFutureValue = 2
}
export const enum authenticationMethodKeyStrength {
normal = 0,
weak = 1,
unknown = 2
}
export const enum authenticationMethodSignInState {
notSupported = 0,
notAllowedByPolicy = 1,
notEnabled = 2,
phoneNumberNotUnique = 3,
ready = 4,
notConfigured = 5,
unknownFutureValue = 6
}
export const enum authenticationPhoneType {
mobile = 0,
alternateMobile = 1,
office = 2,
unknownFutureValue = 3
}
export const enum lifecycleEventType {
missed = 0,
subscriptionRemoved = 1,
reauthorizationRequired = 2
}
export const enum binaryOperator {
or = 0,
and = 1
}
export const enum callRecordingStatus {
success = 0,
failure = 1,
initial = 2,
chunkFinished = 3,
unknownFutureValue = 4
}
export const enum channelMembershipType {
standard = 0,
private = 1,
unknownFutureValue = 2,
shared = 3
}
export const enum chatMessageActions {
reactionAdded = 1,
reactionRemoved = 2,
actionUndefined = 4,
unknownFutureValue = 8
}
export const enum chatMessageImportance {
normal = 0,
high = 1,
urgent = 2,
unknownFutureValue = 3
}
export const enum chatMessagePolicyViolationDlpActionTypes {
none = 0,
notifySender = 1,
blockAccess = 2,
blockAccessExternal = 4
}
export const enum chatMessagePolicyViolationUserActionTypes {
none = 0,
override = 1,
reportFalsePositive = 2
}
export const enum chatMessagePolicyViolationVerdictDetailsTypes {
none = 0,
allowFalsePositiveOverride = 1,
allowOverrideWithoutJustification = 2,
allowOverrideWithJustification = 4
}
export const enum chatMessageType {
message = 0,
chatEvent = 1,
typing = 2,
unknownFutureValue = 3,
systemEventMessage = 4
}
export const enum chatType {
oneOnOne = 0,
group = 1,
meeting = 2,
unknownFutureValue = 3
}
export const enum clonableTeamParts {
apps = 1,
tabs = 2,
settings = 4,
channels = 8,
members = 16
}
export const enum giphyRatingType {
strict = 0,
moderate = 1,
unknownFutureValue = 2
}
export const enum teamsAppDistributionMethod {
store = 0,
organization = 1,
sideloaded = 2,
unknownFutureValue = 3
}
export const enum teamsAppPublishingState {
submitted = 0,
rejected = 1,
published = 2,
unknownFutureValue = 3
}
export const enum teamsAppResourceSpecificPermissionType {
delegated = 0,
application = 1,
unknownFutureValue = 2
}
export const enum teamsAsyncOperationStatus {
invalid = 0,
notStarted = 1,
inProgress = 2,
succeeded = 3,
failed = 4,
unknownFutureValue = 5
}
export const enum teamsAsyncOperationType {
invalid = 0,
cloneTeam = 1,
archiveTeam = 2,
unarchiveTeam = 3,
createTeam = 4,
unknownFutureValue = 5,
teamifyGroup = 6,
createChannel = 7
}
export const enum teamSpecialization {
none = 0,
educationStandard = 1,
educationClass = 2,
educationProfessionalLearningCommunity = 3,
educationStaff = 4,
healthcareStandard = 5,
healthcareCareCoordination = 6,
unknownFutureValue = 7
}
export const enum teamVisibilityType {
private = 0,
public = 1,
hiddenMembership = 2,
unknownFutureValue = 3
}
export const enum teamworkActivityTopicSource {
entityUrl = 0,
text = 1
}
export const enum teamworkApplicationIdentityType {
aadApplication = 0,
bot = 1,
tenantBot = 2,
office365Connector = 3,
outgoingWebhook = 4,
unknownFutureValue = 5
}
export const enum teamworkCallEventType {
call = 0,
meeting = 1,
screenShare = 2,
unknownFutureValue = 3
}
export const enum teamworkConversationIdentityType {
team = 0,
channel = 1,
chat = 2,
unknownFutureValue = 3
}
export const enum teamworkTagType {
standard = 0,
unknownFutureValue = 1
}
export const enum teamworkUserIdentityType {
aadUser = 0,
onPremiseAadUser = 1,
anonymousGuest = 2,
federatedUser = 3,
personalMicrosoftAccountUser = 4,
skypeUser = 5,
phoneUser = 6,
unknownFutureValue = 7,
emailUser = 8
}
export const enum scheduleChangeRequestActor {
sender = 0,
recipient = 1,
manager = 2,
system = 3,
unknownFutureValue = 4
}
export const enum scheduleChangeState {
pending = 0,
approved = 1,
declined = 2,
unknownFutureValue = 3
}
export const enum scheduleEntityTheme {
white = 0,
blue = 1,
green = 2,
purple = 3,
pink = 4,
yellow = 5,
gray = 6,
darkBlue = 7,
darkGreen = 8,
darkPurple = 9,
darkPink = 10,
darkYellow = 11,
unknownFutureValue = 12
}
export const enum timeOffReasonIconType {
none = 0,
car = 1,
calendar = 2,
running = 3,
plane = 4,
firstAid = 5,
doctor = 6,
notWorking = 7,
clock = 8,
juryDuty = 9,
globe = 10,
cup = 11,
phone = 12,
weather = 13,
umbrella = 14,
piggyBank = 15,
dog = 16,
cake = 17,
trafficCone = 18,
pin = 19,
sunny = 20,
unknownFutureValue = 21
}
export const enum workforceIntegrationEncryptionProtocol {
sharedSecret = 0,
unknownFutureValue = 1
}
export const enum workforceIntegrationSupportedEntities {
none = 0,
shift = 1,
swapRequest = 2,
userShiftPreferences = 8,
openShift = 16,
openShiftRequest = 32,
offerShiftRequest = 64,
unknownFutureValue = 1024
}
export const enum mailDestinationRoutingReason {
none = 0,
mailFlowRule = 1,
safeSender = 2,
blockedSender = 3,
advancedSpamFiltering = 4,
domainAllowList = 5,
domainBlockList = 6,
notInAddressBook = 7,
firstTimeSender = 8,
autoPurgeToInbox = 9,
autoPurgeToJunk = 10,
autoPurgeToDeleted = 11,
outbound = 12,
notJunk = 13,
junk = 14,
unknownFutureValue = 15
}
export const enum threatAssessmentContentType {
mail = 1,
url = 2,
file = 3
}
export const enum threatAssessmentRequestSource {
undefined = 0,
user = 1,
administrator = 2
}
export const enum threatAssessmentResultType {
checkPolicy = 1,
rescan = 2,
unknownFutureValue = 3
}
export const enum threatAssessmentStatus {
pending = 1,
completed = 2
}
export const enum threatCategory {
undefined = 0,
spam = 1,
phishing = 2,
malware = 3,
unknownFutureValue = 4
}
export const enum threatExpectedAssessment {
block = 1,
unblock = 2
}
export const enum taskStatus {
notStarted = 0,
inProgress = 1,
completed = 2,
waitingOnOthers = 3,
deferred = 4
}
export const enum wellknownListName {
none = 0,
defaultList = 1,
flaggedEmails = 2,
unknownFutureValue = 3
}
export const enum assignmentType {
required = 0,
recommended = 1,
unknownFutureValue = 2
}
export const enum courseStatus {
notStarted = 0,
inProgress = 1,
completed = 2,
unknownFutureValue = 3
}
export interface entity  {
[KeyProperty]: "id";
id: string | null;
}
export interface customExtensionAuthenticationConfiguration  {
}
export interface azureAdPopTokenAuthentication extends customExtensionAuthenticationConfiguration {
}
export interface customExtensionCallbackConfiguration  {
timeoutDuration: number;
}
export interface customExtensionCalloutRequest  {
data: customExtensionData;
source: string;
type: string;
}
export interface customExtensionData  {
}
export interface customExtensionCalloutResponse  {
data: customExtensionData;
source: string;
type: string;
}
export interface customExtensionClientConfiguration  {
timeoutInMilliseconds: number;
}
export interface customExtensionEndpointConfiguration  {
}
export interface emailSettings  {
senderDomain: string | null;
useCompanyBranding: boolean | null;
}
export interface identity  {
displayName: string;
id: string;
}
export interface keyValuePair  {
name: string | null;
value: string;
}
export interface logicAppTriggerEndpointConfiguration extends customExtensionEndpointConfiguration {
logicAppWorkflowName: string;
resourceGroupName: string;
subscriptionId: string;
url: string;
}
export interface subjectSet  {
}
export interface directoryObject extends entity {
deletedDateTime: Date;
}
export interface application extends directoryObject {
addIns: addIn[] | null;
api: apiApplication;
appId: string;
applicationTemplateId: string;
appRoles: appRole[] | null;
certification: certification;
createdDateTime: Date;
defaultRedirectUri: string;
description: string;
disabledByMicrosoftStatus: string;
displayName: string;
groupMembershipClaims: string;
identifierUris: string[] | null;
info: informationalUrl;
isDeviceOnlyAuthSupported: boolean;
isFallbackPublicClient: boolean;
keyCredentials: keyCredential[] | null;
logo: Buffer | null;
notes: string;
oauth2RequirePostResponse: boolean | null;
optionalClaims: optionalClaims;
parentalControlSettings: parentalControlSettings;
passwordCredentials: passwordCredential[] | null;
publicClient: publicClientApplication;
publisherDomain: string;
requestSignatureVerification: requestSignatureVerification;
requiredResourceAccess: requiredResourceAccess[] | null;
samlMetadataUrl: string;
serviceManagementReference: string;
servicePrincipalLockConfiguration: servicePrincipalLockConfiguration;
signInAudience: string;
spa: spaApplication;
tags: string[] | null;
tokenEncryptionKeyId: string;
verifiedPublisher: verifiedPublisher;
web: webApplication;
appManagementPolicies: appManagementPolicy[];
createdOnBehalfOf: directoryObject;
extensionProperties: extensionProperty[];
federatedIdentityCredentials: federatedIdentityCredential[];
homeRealmDiscoveryPolicies: homeRealmDiscoveryPolicy[];
owners: directoryObject[];
tokenIssuancePolicies: tokenIssuancePolicy[];
tokenLifetimePolicies: tokenLifetimePolicy[];
synchronization: synchronization;
}
export interface addIn  {
id: string;
properties: keyValue[] | null;
type: string | null;
}
export interface apiApplication  {
acceptMappedClaims: boolean;
knownClientApplications: string[];
oauth2PermissionScopes: permissionScope[] | null;
preAuthorizedApplications: preAuthorizedApplication[];
requestedAccessTokenVersion: number;
}
export interface appRole  {
allowedMemberTypes: string[] | null;
description: string;
displayName: string;
id: string | null;
isEnabled: boolean | null;
origin: string;
value: string;
}
export interface certification  {
certificationDetailsUrl: string;
certificationExpirationDateTime: Date;
isCertifiedByMicrosoft: boolean;
isPublisherAttested: boolean;
lastCertificationDateTime: Date;
}
export interface informationalUrl  {
logoUrl: string;
marketingUrl: string;
privacyStatementUrl: string;
supportUrl: string;
termsOfServiceUrl: string;
}
export interface keyCredential  {
customKeyIdentifier: Buffer;
displayName: string;
endDateTime: Date;
key: Buffer;
keyId: string;
startDateTime: Date;
type: string;
usage: string;
}
export interface optionalClaims  {
accessToken: optionalClaim[];
idToken: optionalClaim[];
saml2Token: optionalClaim[];
}
export interface parentalControlSettings  {
countriesBlockedForMinors: string[];
legalAgeGroupRule: string;
}
export interface passwordCredential  {
customKeyIdentifier: Buffer;
displayName: string;
endDateTime: Date;
hint: string;
keyId: string;
secretText: string;
startDateTime: Date;
}
export interface publicClientApplication  {
redirectUris: string[] | null;
}
export interface requestSignatureVerification  {
allowedWeakAlgorithms: weakAlgorithms;
isSignedRequestRequired: boolean | null;
}
export interface requiredResourceAccess  {
resourceAccess: resourceAccess[] | null;
resourceAppId: string | null;
}
export interface servicePrincipalLockConfiguration  {
allProperties: boolean;
credentialsWithUsageSign: boolean;
credentialsWithUsageVerify: boolean;
isEnabled: boolean | null;
tokenEncryptionKeyId: boolean;
}
export interface spaApplication  {
redirectUris: string[] | null;
}
export interface verifiedPublisher  {
addedDateTime: Date;
displayName: string;
verifiedPublisherId: string;
}
export interface webApplication  {
homePageUrl: string;
implicitGrantSettings: implicitGrantSettings;
logoutUrl: string;
redirectUris: string[] | null;
redirectUriSettings: redirectUriSettings[] | null;
}
export interface policyBase extends directoryObject {
description: string;
displayName: string;
}
export interface appManagementPolicy extends policyBase {
isEnabled: boolean | null;
restrictions: appManagementConfiguration;
appliesTo: directoryObject[];
}
export interface extensionProperty extends directoryObject {
appDisplayName: string;
dataType: string | null;
isSyncedFromOnPremises: boolean;
name: string | null;
targetObjects: string[] | null;
}
export interface federatedIdentityCredential extends entity {
audiences: string[] | null;
description: string;
issuer: string | null;
name: string | null;
subject: string | null;
}
export interface stsPolicy extends policyBase {
definition: string[] | null;
isOrganizationDefault: boolean;
appliesTo: directoryObject[];
}
export interface homeRealmDiscoveryPolicy extends stsPolicy {
}
export interface tokenIssuancePolicy extends stsPolicy {
}
export interface tokenLifetimePolicy extends stsPolicy {
}
export interface synchronization extends entity {
secrets: synchronizationSecretKeyStringValuePair[];
jobs: synchronizationJob[];
templates: synchronizationTemplate[];
}
export interface customCalloutExtension extends entity {
authenticationConfiguration: customExtensionAuthenticationConfiguration;
clientConfiguration: customExtensionClientConfiguration;
description: string;
displayName: string;
endpointConfiguration: customExtensionEndpointConfiguration;
}
export interface deletedItemContainer extends entity {

}
export interface identityGovernance  {
accessReviews: accessReviewSet;
appConsent: appConsentApprovalRoute;
termsOfUse: termsOfUseContainer;
entitlementManagement: entitlementManagement;
}
export interface accessReviewSet extends entity {
definitions: accessReviewScheduleDefinition[];
historyDefinitions: accessReviewHistoryDefinition[];
}
export interface appConsentApprovalRoute extends entity {
appConsentRequests: appConsentRequest[];
}
export interface termsOfUseContainer extends entity {
agreementAcceptances: agreementAcceptance[];
agreements: agreement[];
}
export interface entitlementManagement extends entity {
accessPackageAssignmentApprovals: approval[];
accessPackages: accessPackage[];
assignmentPolicies: accessPackageAssignmentPolicy[];
assignmentRequests: accessPackageAssignmentRequest[];
assignments: accessPackageAssignment[];
catalogs: accessPackageCatalog[];
connectedOrganizations: connectedOrganization[];
resourceEnvironments: accessPackageResourceEnvironment[];
resourceRequests: accessPackageResourceRequest[];
resourceRoleScopes: accessPackageResourceRoleScope[];
resources: accessPackageResource[];
settings: entitlementManagementSettings;
}
export interface user extends directoryObject {
signInActivity: signInActivity;
accountEnabled: boolean;
ageGroup: string;
assignedLicenses: assignedLicense[] | null;
assignedPlans: assignedPlan[] | null;
authorizationInfo: authorizationInfo;
businessPhones: string[] | null;
city: string;
companyName: string;
consentProvidedForMinor: string;
country: string;
createdDateTime: Date;
creationType: string;
customSecurityAttributes: customSecurityAttributeValue;
department: string;
displayName: string;
employeeHireDate: Date;
employeeId: string;
employeeLeaveDateTime: Date;
employeeOrgData: employeeOrgData;
employeeType: string;
externalUserState: string;
externalUserStateChangeDateTime: Date;
faxNumber: string;
givenName: string;
identities: objectIdentity[];
imAddresses: string[];
isResourceAccount: boolean;
jobTitle: string;
lastPasswordChangeDateTime: Date;
legalAgeGroupClassification: string;
licenseAssignmentStates: licenseAssignmentState[];
mail: string;
mailNickname: string;
mobilePhone: string;
officeLocation: string;
onPremisesDistinguishedName: string;
onPremisesDomainName: string;
onPremisesExtensionAttributes: onPremisesExtensionAttributes;
onPremisesImmutableId: string;
onPremisesLastSyncDateTime: Date;
onPremisesProvisioningErrors: onPremisesProvisioningError[];
onPremisesSamAccountName: string;
onPremisesSecurityIdentifier: string;
onPremisesSyncEnabled: boolean;
onPremisesUserPrincipalName: string;
otherMails: string[] | null;
passwordPolicies: string;
passwordProfile: passwordProfile;
postalCode: string;
preferredDataLocation: string;
preferredLanguage: string;
provisionedPlans: provisionedPlan[] | null;
proxyAddresses: string[] | null;
securityIdentifier: string;
serviceProvisioningErrors: serviceProvisioningError[];
showInAddressList: boolean;
signInSessionsValidFromDateTime: Date;
state: string;
streetAddress: string;
surname: string;
usageLocation: string;
userPrincipalName: string;
userType: string;
mailboxSettings: mailboxSettings;
deviceEnrollmentLimit: number | null;
print: userPrint;
aboutMe: string;
birthday: Date | null;
hireDate: Date | null;
interests: string[];
mySite: string;
pastProjects: string[];
preferredName: string;
responsibilities: string[];
schools: string[];
skills: string[];
appRoleAssignments: appRoleAssignment[];
createdObjects: directoryObject[];
directReports: directoryObject[];
licenseDetails: licenseDetails[];
manager: directoryObject;
memberOf: directoryObject[];
oauth2PermissionGrants: oAuth2PermissionGrant[];
ownedDevices: directoryObject[];
ownedObjects: directoryObject[];
registeredDevices: directoryObject[];
scopedRoleMemberOf: scopedRoleMembership[];
transitiveMemberOf: directoryObject[];
calendar: calendar;
calendarGroups: calendarGroup[];
calendars: calendar[];
calendarView: event[];
contactFolders: contactFolder[];
contacts: contact[];
events: event[];
inferenceClassification: inferenceClassification;
mailFolders: mailFolder[];
messages: message[];
outlook: outlookUser;
people: person[];
drive: drive;
drives: drive[];
followedSites: site[];
extensions: extension[];
agreementAcceptances: agreementAcceptance[];
managedDevices: managedDevice[];
managedAppRegistrations: managedAppRegistration[];
deviceManagementTroubleshootingEvents: deviceManagementTroubleshootingEvent[];
planner: plannerUser;
insights: officeGraphInsights;
settings: userSettings;
onenote: onenote;
photo: profilePhoto;
photos: profilePhoto[];
activities: userActivity[];
onlineMeetings: onlineMeeting[];
presence: presence;
authentication: authentication;
chats: chat[];
joinedTeams: team[];
teamwork: userTeamwork;
todo: todo;
employeeExperience: employeeExperienceUser;
}
export interface signInActivity  {
lastNonInteractiveSignInDateTime: Date;
lastNonInteractiveSignInRequestId: string;
lastSignInDateTime: Date;
lastSignInRequestId: string;
}
export interface assignedLicense  {
disabledPlans: string[] | null;
skuId: string;
}
export interface assignedPlan  {
assignedDateTime: Date;
capabilityStatus: string;
service: string;
servicePlanId: string;
}
export interface authorizationInfo  {
certificateUserIds: string[];
}
export interface customSecurityAttributeValue  {
}
export interface employeeOrgData  {
costCenter: string;
division: string;
}
export interface objectIdentity  {
issuer: string;
issuerAssignedId: string;
signInType: string;
}
export interface licenseAssignmentState  {
assignedByGroup: string;
disabledPlans: string[];
error: string;
lastUpdatedDateTime: Date;
skuId: string;
state: string;
}
export interface onPremisesExtensionAttributes  {
extensionAttribute1: string;
extensionAttribute10: string;
extensionAttribute11: string;
extensionAttribute12: string;
extensionAttribute13: string;
extensionAttribute14: string;
extensionAttribute15: string;
extensionAttribute2: string;
extensionAttribute3: string;
extensionAttribute4: string;
extensionAttribute5: string;
extensionAttribute6: string;
extensionAttribute7: string;
extensionAttribute8: string;
extensionAttribute9: string;
}
export interface onPremisesProvisioningError  {
category: string;
occurredDateTime: Date;
propertyCausingError: string;
value: string;
}
export interface passwordProfile  {
forceChangePasswordNextSignIn: boolean;
forceChangePasswordNextSignInWithMfa: boolean;
password: string;
}
export interface provisionedPlan  {
capabilityStatus: string;
provisioningStatus: string;
service: string;
}
export interface serviceProvisioningError  {
createdDateTime: Date;
isResolved: boolean;
serviceInstance: string;
}
export interface appRoleAssignment extends directoryObject {
appRoleId: string | null;
createdDateTime: Date;
principalDisplayName: string;
principalId: string;
principalType: string;
resourceDisplayName: string;
resourceId: string;
}
export interface licenseDetails extends entity {
servicePlans: servicePlanInfo[] | null;
skuId: string;
skuPartNumber: string;
}
export interface oAuth2PermissionGrant extends entity {
clientId: string | null;
consentType: string;
principalId: string;
resourceId: string | null;
scope: string;
}
export interface scopedRoleMembership extends entity {
administrativeUnitId: string | null;
roleId: string | null;
roleMemberInfo: identity | null;
}
export interface mailboxSettings  {
archiveFolder: string;
automaticRepliesSetting: automaticRepliesSetting;
dateFormat: string;
delegateMeetingMessageDeliveryOptions: delegateMeetingMessageDeliveryOptions;
language: localeInfo;
timeFormat: string;
timeZone: string;
userPurpose: userPurpose;
workingHours: workingHours;
}
export interface calendar extends entity {
allowedOnlineMeetingProviders: onlineMeetingProviderType[];
canEdit: boolean;
canShare: boolean;
canViewPrivateItems: boolean;
changeKey: string;
color: calendarColor;
defaultOnlineMeetingProvider: onlineMeetingProviderType;
hexColor: string;
isDefaultCalendar: boolean;
isRemovable: boolean;
isTallyingResponses: boolean;
name: string;
owner: emailAddress;
calendarPermissions: calendarPermission[];
calendarView: event[];
events: event[];
multiValueExtendedProperties: multiValueLegacyExtendedProperty[];
singleValueExtendedProperties: singleValueLegacyExtendedProperty[];
}
export interface calendarGroup extends entity {
changeKey: string;
classId: string;
name: string;
calendars: calendar[];
}
export interface outlookItem extends entity {
categories: string[];
changeKey: string;
createdDateTime: Date;
lastModifiedDateTime: Date;
}
export interface event extends outlookItem {
allowNewTimeProposals: boolean;
attendees: attendee[];
body: itemBody;
bodyPreview: string;
end: dateTimeTimeZone;
hasAttachments: boolean;
hideAttendees: boolean;
iCalUId: string;
importance: importance;
isAllDay: boolean;
isCancelled: boolean;
isDraft: boolean;
isOnlineMeeting: boolean;
isOrganizer: boolean;
isReminderOn: boolean;
location: location;
locations: location[];
onlineMeeting: onlineMeetingInfo;
onlineMeetingProvider: onlineMeetingProviderType;
onlineMeetingUrl: string;
organizer: recipient;
originalEndTimeZone: string;
originalStart: Date;
originalStartTimeZone: string;
recurrence: patternedRecurrence;
reminderMinutesBeforeStart: number;
responseRequested: boolean;
responseStatus: responseStatus;
sensitivity: sensitivity;
seriesMasterId: string;
showAs: freeBusyStatus;
start: dateTimeTimeZone;
subject: string;
transactionId: string;
type: eventType;
webLink: string;
attachments: attachment[];
calendar: calendar;
extensions: extension[];
instances: event[];
multiValueExtendedProperties: multiValueLegacyExtendedProperty[];
singleValueExtendedProperties: singleValueLegacyExtendedProperty[];
}
export interface contactFolder extends entity {
displayName: string;
parentFolderId: string;
childFolders: contactFolder[];
contacts: contact[];
multiValueExtendedProperties: multiValueLegacyExtendedProperty[];
singleValueExtendedProperties: singleValueLegacyExtendedProperty[];
}
export interface contact extends outlookItem {
assistantName: string;
birthday: Date;
businessAddress: physicalAddress;
businessHomePage: string;
businessPhones: string[];
children: string[];
companyName: string;
department: string;
displayName: string;
emailAddresses: emailAddress[];
fileAs: string;
generation: string;
givenName: string;
homeAddress: physicalAddress;
homePhones: string[];
imAddresses: string[];
initials: string;
jobTitle: string;
manager: string;
middleName: string;
mobilePhone: string;
nickName: string;
officeLocation: string;
otherAddress: physicalAddress;
parentFolderId: string;
personalNotes: string;
profession: string;
spouseName: string;
surname: string;
title: string;
yomiCompanyName: string;
yomiGivenName: string;
yomiSurname: string;
extensions: extension[];
multiValueExtendedProperties: multiValueLegacyExtendedProperty[];
photo: profilePhoto;
singleValueExtendedProperties: singleValueLegacyExtendedProperty[];
}
export interface inferenceClassification extends entity {
overrides: inferenceClassificationOverride[];
}
export interface mailFolder extends entity {
childFolderCount: number;
displayName: string;
isHidden: boolean;
parentFolderId: string;
totalItemCount: number;
unreadItemCount: number;
childFolders: mailFolder[];
messageRules: messageRule[];
messages: message[];
multiValueExtendedProperties: multiValueLegacyExtendedProperty[];
singleValueExtendedProperties: singleValueLegacyExtendedProperty[];
}
export interface message extends outlookItem {
bccRecipients: recipient[];
body: itemBody;
bodyPreview: string;
ccRecipients: recipient[];
conversationId: string;
conversationIndex: Buffer;
flag: followupFlag;
from: recipient;
hasAttachments: boolean;
importance: importance;
inferenceClassification: inferenceClassificationType;
internetMessageHeaders: internetMessageHeader[];
internetMessageId: string;
isDeliveryReceiptRequested: boolean;
isDraft: boolean;
isRead: boolean;
isReadReceiptRequested: boolean;
parentFolderId: string;
receivedDateTime: Date;
replyTo: recipient[];
sender: recipient;
sentDateTime: Date;
subject: string;
toRecipients: recipient[];
uniqueBody: itemBody;
webLink: string;
attachments: attachment[];
extensions: extension[];
multiValueExtendedProperties: multiValueLegacyExtendedProperty[];
singleValueExtendedProperties: singleValueLegacyExtendedProperty[];
}
export interface outlookUser extends entity {
masterCategories: outlookCategory[];
}
export interface person extends entity {
birthday: string;
companyName: string;
department: string;
displayName: string;
givenName: string;
imAddress: string;
isFavorite: boolean;
jobTitle: string;
officeLocation: string;
personNotes: string;
personType: personType;
phones: phone[];
postalAddresses: location[];
profession: string;
scoredEmailAddresses: scoredEmailAddress[];
surname: string;
userPrincipalName: string;
websites: website[];
yomiCompany: string;
}
export interface baseItem extends entity {
createdBy: identitySet;
createdDateTime: Date | null;
description: string;
eTag: string;
lastModifiedBy: identitySet;
lastModifiedDateTime: Date | null;
name: string;
parentReference: itemReference;
webUrl: string;
createdByUser: user;
lastModifiedByUser: user;
}
export interface drive extends baseItem {
driveType: string;
owner: identitySet;
quota: quota;
sharePointIds: sharepointIds;
system: systemFacet;
bundles: driveItem[];
following: driveItem[];
items: driveItem[];
list: list;
root: driveItem;
special: driveItem[];
}
export interface site extends baseItem {
displayName: string;
error: publicError;
isPersonalSite: boolean;
root: root;
sharepointIds: sharepointIds;
siteCollection: siteCollection;
analytics: itemAnalytics;
columns: columnDefinition[];
contentTypes: contentType[];
drive: drive;
drives: drive[];
externalColumns: columnDefinition[];
items: baseItem[];
lists: list[];
operations: richLongRunningOperation[];
permissions: permission[];
sites: site[];
onenote: onenote;
}
export interface extension extends entity {
}
export interface agreementAcceptance extends entity {
agreementFileId: string;
agreementId: string;
deviceDisplayName: string;
deviceId: string;
deviceOSType: string;
deviceOSVersion: string;
expirationDateTime: Date;
recordedDateTime: Date;
state: agreementAcceptanceState;
userDisplayName: string;
userEmail: string;
userId: string;
userPrincipalName: string;
}
export interface managedDevice extends entity {
activationLockBypassCode: string;
androidSecurityPatchLevel: string;
azureADDeviceId: string;
azureADRegistered: boolean;
complianceGracePeriodExpirationDateTime: Date | null;
complianceState: complianceState | null;
configurationManagerClientEnabledFeatures: configurationManagerClientEnabledFeatures;
deviceActionResults: deviceActionResult[];
deviceCategoryDisplayName: string;
deviceEnrollmentType: deviceEnrollmentType | null;
deviceHealthAttestationState: deviceHealthAttestationState;
deviceName: string;
deviceRegistrationState: deviceRegistrationState | null;
easActivated: boolean | null;
easActivationDateTime: Date | null;
easDeviceId: string;
emailAddress: string;
enrolledDateTime: Date | null;
ethernetMacAddress: string;
exchangeAccessState: deviceManagementExchangeAccessState | null;
exchangeAccessStateReason: deviceManagementExchangeAccessStateReason | null;
exchangeLastSuccessfulSyncDateTime: Date | null;
freeStorageSpaceInBytes: number | null;
iccid: string;
imei: string;
isEncrypted: boolean | null;
isSupervised: boolean | null;
jailBroken: string;
lastSyncDateTime: Date | null;
managedDeviceName: string;
managedDeviceOwnerType: managedDeviceOwnerType | null;
managementAgent: managementAgentType | null;
managementCertificateExpirationDate: Date | null;
manufacturer: string;
meid: string;
model: string;
notes: string;
operatingSystem: string;
osVersion: string;
partnerReportedThreatState: managedDevicePartnerReportedHealthState | null;
phoneNumber: string;
physicalMemoryInBytes: number | null;
remoteAssistanceSessionErrorDetails: string;
remoteAssistanceSessionUrl: string;
requireUserEnrollmentApproval: boolean;
serialNumber: string;
subscriberCarrier: string;
totalStorageSpaceInBytes: number | null;
udid: string;
userDisplayName: string;
userId: string;
userPrincipalName: string;
wiFiMacAddress: string;
deviceCompliancePolicyStates: deviceCompliancePolicyState[];
deviceConfigurationStates: deviceConfigurationState[];
deviceCategory: deviceCategory;
logCollectionRequests: deviceLogCollectionResponse[];
users: user[];
windowsProtectionState: windowsProtectionState;
}
export interface managedAppRegistration extends entity {
appIdentifier: mobileAppIdentifier;
applicationVersion: string;
createdDateTime: Date | null;
deviceName: string;
deviceTag: string;
deviceType: string;
flaggedReasons: managedAppFlaggedReason[] | null;
lastSyncDateTime: Date | null;
managementSdkVersion: string;
platformVersion: string;
userId: string;
version: string;
appliedPolicies: managedAppPolicy[];
intendedPolicies: managedAppPolicy[];
operations: managedAppOperation[];
}
export interface deviceManagementTroubleshootingEvent extends entity {
correlationId: string;
eventDateTime: Date | null;
}
export interface plannerUser extends entity {
plans: plannerPlan[];
tasks: plannerTask[];
}
export interface officeGraphInsights extends entity {
shared: sharedInsight[];
trending: trending[];
used: usedInsight[];
}
export interface userSettings extends entity {
contributionToContentDiscoveryAsOrganizationDisabled: boolean | null;
contributionToContentDiscoveryDisabled: boolean | null;
shiftPreferences: shiftPreferences;
}
export interface onenote extends entity {
notebooks: notebook[];
operations: onenoteOperation[];
pages: onenotePage[];
resources: onenoteResource[];
sectionGroups: sectionGroup[];
sections: onenoteSection[];
}
export interface profilePhoto extends entity {
height: number;
width: number;
}
export interface userPrint  {
recentPrinterShares: printerShare[];
}
export interface userActivity extends entity {
activationUrl: string | null;
activitySourceHost: string | null;
appActivityId: string | null;
appDisplayName: string;
contentInfo: Json;
contentUrl: string;
createdDateTime: Date;
expirationDateTime: Date;
fallbackUrl: string;
lastModifiedDateTime: Date;
status: status;
userTimezone: string;
visualElements: visualInfo | null;
historyItems: activityHistoryItem[];
}
export interface onlineMeeting extends entity {
allowAttendeeToEnableCamera: boolean;
allowAttendeeToEnableMic: boolean;
allowedPresenters: onlineMeetingPresenters;
allowMeetingChat: meetingChatMode;
allowParticipantsToChangeName: boolean;
allowTeamworkReactions: boolean;
attendeeReport: Buffer;
audioConferencing: audioConferencing;
broadcastSettings: broadcastMeetingSettings;
chatInfo: chatInfo;
creationDateTime: Date;
endDateTime: Date;
externalId: string;
isBroadcast: boolean;
isEntryExitAnnounced: boolean;
joinInformation: itemBody;
joinMeetingIdSettings: joinMeetingIdSettings;
joinWebUrl: string;
lobbyBypassSettings: lobbyBypassSettings;
participants: meetingParticipants;
recordAutomatically: boolean;
shareMeetingChatHistoryDefault: meetingChatHistoryDefaultMode;
startDateTime: Date;
subject: string;
videoTeleconferenceId: string;
watermarkProtection: watermarkProtectionValues;
attendanceReports: meetingAttendanceReport[];
}
export interface presence extends entity {
activity: string;
availability: string;
statusMessage: presenceStatusMessage;
}
export interface authentication extends entity {
emailMethods: emailAuthenticationMethod[];
fido2Methods: fido2AuthenticationMethod[];
methods: authenticationMethod[];
microsoftAuthenticatorMethods: microsoftAuthenticatorAuthenticationMethod[];
operations: longRunningOperation[];
passwordMethods: passwordAuthenticationMethod[];
phoneMethods: phoneAuthenticationMethod[];
softwareOathMethods: softwareOathAuthenticationMethod[];
temporaryAccessPassMethods: temporaryAccessPassAuthenticationMethod[];
windowsHelloForBusinessMethods: windowsHelloForBusinessAuthenticationMethod[];
}
export interface chat extends entity {
chatType: chatType | null;
createdDateTime: Date;
lastUpdatedDateTime: Date;
onlineMeetingInfo: teamworkOnlineMeetingInfo;
tenantId: string;
topic: string;
viewpoint: chatViewpoint;
webUrl: string;
installedApps: teamsAppInstallation[];
lastMessagePreview: chatMessageInfo;
members: conversationMember[];
messages: chatMessage[];
permissionGrants: resourceSpecificPermissionGrant[];
pinnedMessages: pinnedChatMessageInfo[];
tabs: teamsTab[];
}
export interface team extends entity {
classification: string;
createdDateTime: Date;
description: string;
displayName: string;
funSettings: teamFunSettings;
guestSettings: teamGuestSettings;
internalId: string;
isArchived: boolean;
memberSettings: teamMemberSettings;
messagingSettings: teamMessagingSettings;
specialization: teamSpecialization;
summary: teamSummary;
tenantId: string;
visibility: teamVisibilityType;
webUrl: string;
allChannels: channel[];
channels: channel[];
group: group;
incomingChannels: channel[];
installedApps: teamsAppInstallation[];
members: conversationMember[];
operations: teamsAsyncOperation[];
permissionGrants: resourceSpecificPermissionGrant[];
photo: profilePhoto;
primaryChannel: channel;
tags: teamworkTag[];
template: teamsTemplate;
schedule: schedule;
}
export interface userTeamwork extends entity {
associatedTeams: associatedTeamInfo[];
installedApps: userScopeTeamsAppInstallation[];
}
export interface todo extends entity {
lists: todoTaskList[];
}
export interface employeeExperienceUser extends entity {
learningCourseActivities: learningCourseActivity[];
}
export interface appIdentity  {
appId: string;
displayName: string;
servicePrincipalId: string;
servicePrincipalName: string;
}
export interface appliedConditionalAccessPolicy  {
displayName: string;
enforcedGrantControls: string[];
enforcedSessionControls: string[];
id: string;
result: appliedConditionalAccessPolicyResult;
}
export interface auditActivityInitiator  {
app: appIdentity;
user: userIdentity;
}
export interface userIdentity extends identity {
ipAddress: string;
userPrincipalName: string;
}
export interface detailsInfo  {
}
export interface deviceDetail  {
browser: string;
deviceId: string;
displayName: string;
isCompliant: boolean;
isManaged: boolean;
operatingSystem: string;
trustType: string;
}
export interface geoCoordinates  {
altitude: number;
latitude: number;
longitude: number;
}
export interface initiator extends identity {
initiatorType: initiatorType;
}
export interface keyValue  {
key: string;
value: string;
}
export interface modifiedProperty  {
displayName: string;
newValue: string;
oldValue: string;
}
export interface provisionedIdentity extends identity {
details: detailsInfo;
identityType: string;
}
export interface provisioningErrorInfo  {
additionalDetails: string;
errorCategory: provisioningStatusErrorCategory;
errorCode: string;
reason: string;
recommendedAction: string;
}
export interface provisioningServicePrincipal extends identity {
}
export interface provisioningStatusInfo  {
errorInformation: provisioningErrorInfo;
status: provisioningResult;
}
export interface provisioningStep  {
description: string;
details: detailsInfo;
name: string;
provisioningStepType: provisioningStepType;
status: provisioningResult;
}
export interface provisioningSystem extends identity {
details: detailsInfo;
}
export interface signInLocation  {
city: string;
countryOrRegion: string;
geoCoordinates: geoCoordinates;
state: string;
}
export interface signInStatus  {
additionalDetails: string;
errorCode: number;
failureReason: string;
}
export interface targetResource  {
displayName: string;
groupType: groupType;
id: string;
modifiedProperties: modifiedProperty[];
type: string;
userPrincipalName: string;
}
export interface userRegistrationFeatureCount  {
feature: authenticationMethodFeature | null;
userCount: number | null;
}
export interface userRegistrationFeatureSummary  {
totalUserCount: number | null;
userRegistrationFeatureCounts: userRegistrationFeatureCount[] | null;
userRoles: includedUserRoles;
userTypes: includedUserTypes;
}
export interface userRegistrationMethodCount  {
authenticationMethod: string | null;
userCount: number | null;
}
export interface userRegistrationMethodSummary  {
totalUserCount: number | null;
userRegistrationMethodCounts: userRegistrationMethodCount[] | null;
userRoles: includedUserRoles;
userTypes: includedUserTypes;
}
export interface auditLogRoot extends entity {
directoryAudits: directoryAudit[];
provisioning: provisioningObjectSummary[];
signIns: signIn[];
}
export interface directoryAudit extends entity {
activityDateTime: Date | null;
activityDisplayName: string | null;
additionalDetails: keyValue[];
category: string | null;
correlationId: string;
initiatedBy: auditActivityInitiator | null;
loggedByService: string;
operationType: string;
result: operationResult;
resultReason: string;
targetResources: targetResource[];
}
export interface provisioningObjectSummary extends entity {
activityDateTime: Date | null;
changeId: string;
cycleId: string;
durationInMilliseconds: number;
initiatedBy: initiator;
jobId: string;
modifiedProperties: modifiedProperty[];
provisioningAction: provisioningAction;
provisioningStatusInfo: provisioningStatusInfo;
provisioningSteps: provisioningStep[];
servicePrincipal: provisioningServicePrincipal;
sourceIdentity: provisionedIdentity;
sourceSystem: provisioningSystem;
targetIdentity: provisionedIdentity;
targetSystem: provisioningSystem;
tenantId: string;
}
export interface signIn extends entity {
appDisplayName: string;
appId: string;
appliedConditionalAccessPolicies: appliedConditionalAccessPolicy[];
clientAppUsed: string;
conditionalAccessStatus: conditionalAccessStatus;
correlationId: string;
createdDateTime: Date | null;
deviceDetail: deviceDetail;
ipAddress: string;
isInteractive: boolean;
location: signInLocation;
resourceDisplayName: string;
resourceId: string;
riskDetail: riskDetail;
riskEventTypes: riskEventType[];
riskEventTypes_v2: string[];
riskLevelAggregated: riskLevel;
riskLevelDuringSignIn: riskLevel;
riskState: riskState;
status: signInStatus;
userDisplayName: string;
userId: string | null;
userPrincipalName: string;
}
export interface authenticationMethodsRoot extends entity {
userRegistrationDetails: userRegistrationDetails[];
}
export interface userRegistrationDetails extends entity {
isAdmin: boolean;
isMfaCapable: boolean | null;
isMfaRegistered: boolean | null;
isPasswordlessCapable: boolean | null;
isSsprCapable: boolean | null;
isSsprEnabled: boolean | null;
isSsprRegistered: boolean | null;
isSystemPreferredAuthenticationMethodEnabled: boolean;
lastUpdatedDateTime: Date | null;
methodsRegistered: string[];
systemPreferredAuthenticationMethods: string[];
userDisplayName: string | null;
userPreferredMethodForSecondaryAuthentication: userDefaultAuthenticationMethod;
userPrincipalName: string | null;
userType: signInUserType;
}
export interface governanceInsight extends entity {
insightCreatedDateTime: Date;
}
export interface membershipOutlierInsight extends governanceInsight {
containerId: string | null;
memberId: string | null;
outlierContainerType: outlierContainerType | null;
outlierMemberType: outlierMemberType | null;
container: directoryObject;
lastModifiedBy: user;
member: directoryObject;
}
export interface reportRoot  {
authenticationMethods: authenticationMethodsRoot;
dailyPrintUsageByPrinter: printUsageByPrinter[];
dailyPrintUsageByUser: printUsageByUser[];
monthlyPrintUsageByPrinter: printUsageByPrinter[];
monthlyPrintUsageByUser: printUsageByUser[];
security: securityReportsRoot;
}
export interface printUsage extends entity {
blackAndWhitePageCount: number;
colorPageCount: number;
completedBlackAndWhiteJobCount: number | null;
completedColorJobCount: number | null;
completedJobCount: number;
doubleSidedSheetCount: number;
incompleteJobCount: number | null;
mediaSheetCount: number;
pageCount: number;
singleSidedSheetCount: number;
usageDate: Date | null;
}
export interface printUsageByPrinter extends printUsage {
printerId: string | null;
printerName: string;
}
export interface printUsageByUser extends printUsage {
userPrincipalName: string | null;
}
export interface securityReportsRoot extends entity {
}
export interface emailAddress  {
address: string;
name: string;
}
export interface invitedUserMessageInfo  {
ccRecipients: recipient[];
customizedMessageBody: string;
messageLanguage: string;
}
export interface recipient  {
emailAddress: emailAddress;
}
export interface invitation extends entity {
invitedUserDisplayName: string;
invitedUserEmailAddress: string | null;
invitedUserMessageInfo: invitedUserMessageInfo;
invitedUserType: string;
inviteRedeemUrl: string;
inviteRedirectUrl: string | null;
resetRedemption: boolean;
sendInvitationMessage: boolean;
status: string;
invitedUser: user;
}
export interface applicationServicePrincipal  {
application: application;
servicePrincipal: servicePrincipal;
}
export interface servicePrincipal extends directoryObject {
accountEnabled: boolean;
addIns: addIn[] | null;
alternativeNames: string[] | null;
appDescription: string;
appDisplayName: string;
appId: string;
applicationTemplateId: string;
appOwnerOrganizationId: string;
appRoleAssignmentRequired: boolean | null;
appRoles: appRole[] | null;
customSecurityAttributes: customSecurityAttributeValue;
description: string;
disabledByMicrosoftStatus: string;
displayName: string;
homepage: string;
info: informationalUrl;
keyCredentials: keyCredential[] | null;
loginUrl: string;
logoutUrl: string;
notes: string;
notificationEmailAddresses: string[] | null;
oauth2PermissionScopes: permissionScope[] | null;
passwordCredentials: passwordCredential[] | null;
preferredSingleSignOnMode: string;
preferredTokenSigningKeyThumbprint: string;
replyUrls: string[] | null;
resourceSpecificApplicationPermissions: resourceSpecificPermission[] | null;
samlSingleSignOnSettings: samlSingleSignOnSettings;
servicePrincipalNames: string[] | null;
servicePrincipalType: string;
signInAudience: string;
tags: string[] | null;
tokenEncryptionKeyId: string;
verifiedPublisher: verifiedPublisher;
appManagementPolicies: appManagementPolicy[];
appRoleAssignedTo: appRoleAssignment[];
appRoleAssignments: appRoleAssignment[];
claimsMappingPolicies: claimsMappingPolicy[];
createdObjects: directoryObject[];
delegatedPermissionClassifications: delegatedPermissionClassification[];
endpoints: endpoint[];
federatedIdentityCredentials: federatedIdentityCredential[];
homeRealmDiscoveryPolicies: homeRealmDiscoveryPolicy[];
memberOf: directoryObject[];
oauth2PermissionGrants: oAuth2PermissionGrant[];
ownedObjects: directoryObject[];
owners: directoryObject[];
tokenIssuancePolicies: tokenIssuancePolicy[];
tokenLifetimePolicies: tokenLifetimePolicy[];
transitiveMemberOf: directoryObject[];
synchronization: synchronization;
}
export interface applicationTemplate extends entity {
categories: string[];
description: string;
displayName: string;
homePageUrl: string;
logoUrl: string;
publisher: string;
supportedProvisioningTypes: string[];
supportedSingleSignOnModes: string[];
}
export interface permissionScope  {
adminConsentDescription: string;
adminConsentDisplayName: string;
id: string | null;
isEnabled: boolean | null;
origin: string;
type: string;
userConsentDescription: string;
userConsentDisplayName: string;
value: string;
}
export interface resourceSpecificPermission  {
description: string;
displayName: string;
id: string | null;
isEnabled: boolean | null;
value: string;
}
export interface samlSingleSignOnSettings  {
relayState: string;
}
export interface claimsMappingPolicy extends stsPolicy {
}
export interface delegatedPermissionClassification extends entity {
classification: permissionClassificationType;
permissionId: string;
permissionName: string;
}
export interface endpoint extends directoryObject {
capability: string | null;
providerId: string;
providerName: string;
providerResourceId: string;
uri: string | null;
}
export interface authenticationMethodFeatureConfiguration  {
excludeTarget: featureTarget;
includeTarget: featureTarget;
state: advancedConfigState;
}
export interface featureTarget  {
id: string;
targetType: featureTargetType;
}
export interface authenticationMethodsRegistrationCampaign  {
excludeTargets: excludeTarget[] | null;
includeTargets: authenticationMethodsRegistrationCampaignIncludeTarget[] | null;
snoozeDurationInDays: number | null;
state: advancedConfigState | null;
}
export interface excludeTarget  {
id: string | null;
targetType: authenticationMethodTargetType | null;
}
export interface authenticationMethodsRegistrationCampaignIncludeTarget  {
id: string | null;
targetedAuthenticationMethod: string;
targetType: authenticationMethodTargetType | null;
}
export interface fido2KeyRestrictions  {
aaGuids: string[];
enforcementType: fido2RestrictionEnforcementType;
isEnforced: boolean;
}
export interface microsoftAuthenticatorFeatureSettings  {
displayAppInformationRequiredState: authenticationMethodFeatureConfiguration;
displayLocationInformationRequiredState: authenticationMethodFeatureConfiguration;
}
export interface registrationEnforcement  {
authenticationMethodsRegistrationCampaign: authenticationMethodsRegistrationCampaign;
}
export interface updateAllowedCombinationsResult  {
additionalInformation: string;
conditionalAccessReferences: string[];
currentCombinations: authenticationMethodModes[] | null;
previousCombinations: authenticationMethodModes[] | null;
}
export interface x509CertificateAuthenticationModeConfiguration  {
rules: x509CertificateRule[];
x509CertificateAuthenticationDefaultMode: x509CertificateAuthenticationMode;
}
export interface x509CertificateRule  {
identifier: string;
x509CertificateAuthenticationMode: x509CertificateAuthenticationMode;
x509CertificateRuleType: x509CertificateRuleType;
}
export interface x509CertificateUserBinding  {
priority: number | null;
userProperty: string;
x509CertificateField: string;
}
export interface authenticationCombinationConfiguration extends entity {
appliesToCombinations: authenticationMethodModes[] | null;
}
export interface authenticationMethodConfiguration extends entity {
excludeTargets: excludeTarget[];
state: authenticationMethodState;
}
export interface authenticationMethodModeDetail extends entity {
authenticationMethod: baseAuthenticationMethod | null;
displayName: string | null;
}
export interface authenticationMethodsPolicy extends entity {
description: string;
displayName: string;
lastModifiedDateTime: Date;
policyMigrationState: authenticationMethodsPolicyMigrationState;
policyVersion: string;
reconfirmationInDays: number;
registrationEnforcement: registrationEnforcement;
authenticationMethodConfigurations: authenticationMethodConfiguration[];
}
export interface authenticationMethodTarget extends entity {
isRegistrationRequired: boolean | null;
targetType: authenticationMethodTargetType | null;
}
export interface authenticationStrengthPolicy extends entity {
allowedCombinations: authenticationMethodModes[] | null;
createdDateTime: Date | null;
description: string;
displayName: string | null;
modifiedDateTime: Date | null;
policyType: authenticationStrengthPolicyType | null;
requirementsSatisfied: authenticationStrengthRequirements | null;
combinationConfigurations: authenticationCombinationConfiguration[];
}
export interface authenticationStrengthRoot extends entity {
combinations: authenticationMethodModes[] | null;
authenticationMethodModes: authenticationMethodModeDetail[];
policies: authenticationStrengthPolicy[];
}
export interface conditionalAccessRoot extends entity {
authenticationStrength: authenticationStrengthRoot;
authenticationContextClassReferences: authenticationContextClassReference[];
namedLocations: namedLocation[];
policies: conditionalAccessPolicy[];
templates: conditionalAccessTemplate[];
}
export interface authenticationContextClassReference extends entity {
description: string;
displayName: string;
isAvailable: boolean;
}
export interface namedLocation extends entity {
createdDateTime: Date;
displayName: string | null;
modifiedDateTime: Date;
}
export interface conditionalAccessPolicy extends entity {
conditions: conditionalAccessConditionSet | null;
createdDateTime: Date;
description: string;
displayName: string | null;
grantControls: conditionalAccessGrantControls;
modifiedDateTime: Date;
sessionControls: conditionalAccessSessionControls;
state: conditionalAccessPolicyState | null;
templateId: string;
}
export interface conditionalAccessTemplate extends entity {
description: string | null;
details: conditionalAccessPolicyDetail | null;
name: string | null;
scenarios: templateScenarios | null;
}
export interface emailAuthenticationMethodConfiguration extends authenticationMethodConfiguration {
allowExternalIdToUseEmailOtp: externalEmailOtpState;
includeTargets: authenticationMethodTarget[];
}
export interface fido2AuthenticationMethodConfiguration extends authenticationMethodConfiguration {
isAttestationEnforced: boolean;
isSelfServiceRegistrationAllowed: boolean;
keyRestrictions: fido2KeyRestrictions;
includeTargets: authenticationMethodTarget[];
}
export interface fido2CombinationConfiguration extends authenticationCombinationConfiguration {
allowedAAGUIDs: string[] | null;
}
export interface microsoftAuthenticatorAuthenticationMethodConfiguration extends authenticationMethodConfiguration {
featureSettings: microsoftAuthenticatorFeatureSettings;
isSoftwareOathEnabled: boolean;
includeTargets: microsoftAuthenticatorAuthenticationMethodTarget[];
}
export interface microsoftAuthenticatorAuthenticationMethodTarget extends authenticationMethodTarget {
authenticationMode: microsoftAuthenticatorAuthenticationMode | null;
}
export interface policyRoot extends entity {
authenticationMethodsPolicy: authenticationMethodsPolicy;
authenticationStrengthPolicies: authenticationStrengthPolicy[];
authenticationFlowsPolicy: authenticationFlowsPolicy;
activityBasedTimeoutPolicies: activityBasedTimeoutPolicy[];
appManagementPolicies: appManagementPolicy[];
authorizationPolicy: authorizationPolicy;
claimsMappingPolicies: claimsMappingPolicy[];
crossTenantAccessPolicy: crossTenantAccessPolicy;
defaultAppManagementPolicy: tenantAppManagementPolicy;
homeRealmDiscoveryPolicies: homeRealmDiscoveryPolicy[];
permissionGrantPolicies: permissionGrantPolicy[];
tokenIssuancePolicies: tokenIssuancePolicy[];
tokenLifetimePolicies: tokenLifetimePolicy[];
featureRolloutPolicies: featureRolloutPolicy[];
adminConsentRequestPolicy: adminConsentRequestPolicy;
conditionalAccessPolicies: conditionalAccessPolicy[];
identitySecurityDefaultsEnforcementPolicy: identitySecurityDefaultsEnforcementPolicy;
roleManagementPolicies: unifiedRoleManagementPolicy[];
roleManagementPolicyAssignments: unifiedRoleManagementPolicyAssignment[];
}
export interface authenticationFlowsPolicy extends entity {
description: string;
displayName: string;
selfServiceSignUp: selfServiceSignUpAuthenticationFlowConfiguration;
}
export interface activityBasedTimeoutPolicy extends stsPolicy {
}
export interface authorizationPolicy extends policyBase {
allowedToSignUpEmailBasedSubscriptions: boolean | null;
allowedToUseSSPR: boolean | null;
allowEmailVerifiedUsersToJoinOrganization: boolean | null;
allowInvitesFrom: allowInvitesFrom;
allowUserConsentForRiskyApps: boolean;
blockMsolPowerShell: boolean;
defaultUserRolePermissions: defaultUserRolePermissions | null;
guestUserRoleId: string;
}
export interface crossTenantAccessPolicy extends policyBase {
allowedCloudEndpoints: string[] | null;
default: crossTenantAccessPolicyConfigurationDefault;
partners: crossTenantAccessPolicyConfigurationPartner[];
}
export interface tenantAppManagementPolicy extends policyBase {
applicationRestrictions: appManagementConfiguration;
isEnabled: boolean | null;
servicePrincipalRestrictions: appManagementConfiguration;
}
export interface permissionGrantPolicy extends policyBase {
excludes: permissionGrantConditionSet[];
includes: permissionGrantConditionSet[];
}
export interface featureRolloutPolicy extends entity {
description: string;
displayName: string | null;
feature: stagedFeatureName | null;
isAppliedToOrganization: boolean | null;
isEnabled: boolean | null;
appliesTo: directoryObject[];
}
export interface adminConsentRequestPolicy extends entity {
isEnabled: boolean | null;
notifyReviewers: boolean | null;
remindersEnabled: boolean | null;
requestDurationInDays: number | null;
reviewers: accessReviewReviewerScope[];
version: number | null;
}
export interface identitySecurityDefaultsEnforcementPolicy extends policyBase {
isEnabled: boolean | null;
}
export interface unifiedRoleManagementPolicy extends entity {
description: string | null;
displayName: string | null;
isOrganizationDefault: boolean;
lastModifiedBy: identity;
lastModifiedDateTime: Date;
scopeId: string | null;
scopeType: string | null;
effectiveRules: unifiedRoleManagementPolicyRule[];
rules: unifiedRoleManagementPolicyRule[];
}
export interface unifiedRoleManagementPolicyAssignment extends entity {
policyId: string | null;
roleDefinitionId: string;
scopeId: string | null;
scopeType: string | null;
policy: unifiedRoleManagementPolicy;
}
export interface smsAuthenticationMethodConfiguration extends authenticationMethodConfiguration {
includeTargets: smsAuthenticationMethodTarget[];
}
export interface smsAuthenticationMethodTarget extends authenticationMethodTarget {
isUsableForSignIn: boolean | null;
}
export interface softwareOathAuthenticationMethodConfiguration extends authenticationMethodConfiguration {
includeTargets: authenticationMethodTarget[];
}
export interface temporaryAccessPassAuthenticationMethodConfiguration extends authenticationMethodConfiguration {
defaultLength: number;
defaultLifetimeInMinutes: number;
isUsableOnce: boolean;
maximumLifetimeInMinutes: number;
minimumLifetimeInMinutes: number;
includeTargets: authenticationMethodTarget[];
}
export interface voiceAuthenticationMethodConfiguration extends authenticationMethodConfiguration {
isOfficePhoneAllowed: boolean;
includeTargets: authenticationMethodTarget[];
}
export interface x509CertificateAuthenticationMethodConfiguration extends authenticationMethodConfiguration {
authenticationModeConfiguration: x509CertificateAuthenticationModeConfiguration;
certificateUserBindings: x509CertificateUserBinding[];
includeTargets: authenticationMethodTarget[];
}
export interface bitlocker extends entity {
recoveryKeys: bitlockerRecoveryKey[];
}
export interface bitlockerRecoveryKey extends entity {
createdDateTime: Date | null;
deviceId: string;
key: string | null;
volumeType: volumeType;
}
export interface informationProtection  {
bitlocker: bitlocker;
threatAssessmentRequests: threatAssessmentRequest[];
}
export interface threatAssessmentRequest extends entity {
category: threatCategory | null;
contentType: threatAssessmentContentType;
createdBy: identitySet;
createdDateTime: Date;
expectedAssessment: threatExpectedAssessment | null;
requestSource: threatAssessmentRequestSource;
status: threatAssessmentStatus;
results: threatAssessmentResult[];
}
export interface availabilityItem  {
endDateTime: dateTimeTimeZone | null;
serviceId: string;
startDateTime: dateTimeTimeZone | null;
status: bookingsAvailabilityStatus;
}
export interface dateTimeTimeZone  {
dateTime: string | null;
timeZone: string;
}
export interface bookingCustomerInformationBase  {
}
export interface bookingCustomerInformation extends bookingCustomerInformationBase {
customerId: string;
customQuestionAnswers: bookingQuestionAnswer[];
emailAddress: string;
location: location;
name: string;
notes: string;
phone: string;
timeZone: string;
}
export interface bookingQuestionAnswer  {
answer: string;
answerInputType: answerInputType;
answerOptions: string[];
isRequired: boolean;
question: string;
questionId: string;
selectedOptions: string[];
}
export interface location  {
address: physicalAddress;
coordinates: outlookGeoCoordinates;
displayName: string;
locationEmailAddress: string;
locationType: locationType;
locationUri: string;
uniqueId: string;
uniqueIdType: locationUniqueIdType;
}
export interface bookingQuestionAssignment  {
isRequired: boolean | null;
questionId: string | null;
}
export interface bookingReminder  {
message: string | null;
offset: number | null;
recipients: bookingReminderRecipients | null;
}
export interface bookingSchedulingPolicy  {
allowStaffSelection: boolean | null;
maximumAdvance: number | null;
minimumLeadTime: number | null;
sendConfirmationsToOwner: boolean | null;
timeSlotInterval: number | null;
}
export interface bookingWorkHours  {
day: dayOfWeek | null;
timeSlots: bookingWorkTimeSlot[];
}
export interface bookingWorkTimeSlot  {
endTime: Date | null;
startTime: Date | null;
}
export interface physicalAddress  {
city: string;
countryOrRegion: string;
postalCode: string;
state: string;
street: string;
}
export interface outlookGeoCoordinates  {
accuracy: number;
altitude: number;
altitudeAccuracy: number;
latitude: number;
longitude: number;
}
export interface phone  {
language: string;
number: string;
region: string;
type: phoneType;
}
export interface staffAvailabilityItem  {
availabilityItems: availabilityItem[];
staffId: string;
}
export interface timeSlot  {
end: dateTimeTimeZone | null;
start: dateTimeTimeZone | null;
}
export interface bookingAppointment extends entity {
additionalInformation: string;
anonymousJoinWebUrl: string;
customers: bookingCustomerInformationBase[] | null;
customerTimeZone: string;
duration: number | null;
endDateTime: dateTimeTimeZone | null;
filledAttendeesCount: number | null;
isLocationOnline: boolean | null;
joinWebUrl: string;
maximumAttendeesCount: number | null;
optOutOfCustomerEmail: boolean | null;
postBuffer: number | null;
preBuffer: number | null;
price: number | null;
priceType: bookingPriceType | null;
reminders: bookingReminder[];
selfServiceAppointmentId: string;
serviceId: string;
serviceLocation: location;
serviceName: string | null;
serviceNotes: string;
smsNotificationsEnabled: boolean | null;
staffMemberIds: string[];
startDateTime: dateTimeTimeZone | null;
}
export interface bookingBusiness extends entity {
address: physicalAddress;
businessHours: bookingWorkHours[];
businessType: string;
defaultCurrencyIso: string;
displayName: string | null;
email: string;
isPublished: boolean;
languageTag: string;
phone: string;
publicUrl: string;
schedulingPolicy: bookingSchedulingPolicy;
webSiteUrl: string;
appointments: bookingAppointment[];
calendarView: bookingAppointment[];
customers: bookingCustomerBase[];
customQuestions: bookingCustomQuestion[];
services: bookingService[];
staffMembers: bookingStaffMemberBase[];
}
export interface bookingCustomerBase extends entity {
}
export interface bookingCustomQuestion extends entity {
answerInputType: answerInputType;
answerOptions: string[];
displayName: string | null;
}
export interface bookingService extends entity {
additionalInformation: string;
customQuestions: bookingQuestionAssignment[];
defaultDuration: number | null;
defaultLocation: location;
defaultPrice: number | null;
defaultPriceType: bookingPriceType | null;
defaultReminders: bookingReminder[];
description: string;
displayName: string | null;
isAnonymousJoinEnabled: boolean | null;
isHiddenFromCustomers: boolean | null;
isLocationOnline: boolean | null;
languageTag: string | null;
maximumAttendeesCount: number | null;
notes: string;
postBuffer: number | null;
preBuffer: number | null;
schedulingPolicy: bookingSchedulingPolicy;
smsNotificationsEnabled: boolean | null;
staffMemberIds: string[];
webUrl: string;
}
export interface bookingStaffMemberBase extends entity {
}
export interface bookingCurrency extends entity {
symbol: string | null;
}
export interface bookingCustomer extends bookingCustomerBase {
addresses: physicalAddress[];
displayName: string | null;
emailAddress: string;
phones: phone[];
}
export interface bookingStaffMember extends bookingStaffMemberBase {
availabilityIsAffectedByPersonalCalendar: boolean | null;
displayName: string | null;
emailAddress: string;
isEmailNotificationEnabled: boolean | null;
role: bookingStaffRole | null;
timeZone: string;
useBusinessHours: boolean | null;
workingHours: bookingWorkHours[];
}
export interface solutionsRoot  {
bookingBusinesses: bookingBusiness[];
bookingCurrencies: bookingCurrency[];
}
export interface dataSubject  {
email: string;
firstName: string;
lastName: string;
residency: string;
}
export interface identitySet  {
application: identity;
device: identity;
user: identity;
}
export interface itemBody  {
content: string;
contentType: bodyType;
}
export interface publicError  {
code: string;
details: publicErrorDetail[];
innerError: publicInnerError;
message: string;
target: string;
}
export interface publicErrorDetail  {
code: string;
message: string;
target: string;
}
export interface publicInnerError  {
code: string;
details: publicErrorDetail[];
message: string;
target: string;
}
export interface subjectRightsRequestMailboxLocation  {
}
export interface subjectRightsRequestAllMailboxLocation extends subjectRightsRequestMailboxLocation {
}
export interface subjectRightsRequestSiteLocation  {
}
export interface subjectRightsRequestAllSiteLocation extends subjectRightsRequestSiteLocation {
}
export interface subjectRightsRequestDetail  {
excludedItemCount: number;
insightCounts: keyValuePair[];
itemCount: number;
itemNeedReview: number;
productItemCounts: keyValuePair[];
signedOffItemCount: number;
totalItemSize: number;
}
export interface subjectRightsRequestEnumeratedMailboxLocation extends subjectRightsRequestMailboxLocation {
userPrincipalNames: string[];
}
export interface subjectRightsRequestEnumeratedSiteLocation extends subjectRightsRequestSiteLocation {
urls: string[];
}
export interface subjectRightsRequestHistory  {
changedBy: identitySet;
eventDateTime: Date;
stage: subjectRightsRequestStage;
stageStatus: subjectRightsRequestStageStatus;
type: string;
}
export interface subjectRightsRequestStageDetail  {
error: publicError;
stage: subjectRightsRequestStage;
status: subjectRightsRequestStageStatus;
}
export interface authoredNote extends entity {
author: identity;
content: itemBody;
createdDateTime: Date;
}
export interface privacy  {
subjectRightsRequests: subjectRightsRequest[];
}
export interface subjectRightsRequest extends entity {
assignedTo: identity;
closedDateTime: Date;
contentQuery: string;
createdBy: identitySet;
createdDateTime: Date;
dataSubject: dataSubject;
dataSubjectType: dataSubjectType;
description: string;
displayName: string;
externalId: string;
history: subjectRightsRequestHistory[];
includeAllVersions: boolean;
includeAuthoredContent: boolean;
insight: subjectRightsRequestDetail;
internalDueDateTime: Date;
lastModifiedBy: identitySet;
lastModifiedDateTime: Date;
mailboxlocations: subjectRightsRequestMailboxLocation;
pauseAfterEstimate: boolean;
regulations: string[];
sitelocations: subjectRightsRequestSiteLocation;
stages: subjectRightsRequestStageDetail[];
status: subjectRightsRequestStatus;
type: subjectRightsRequestType;
approvers: user[];
collaborators: user[];
notes: authoredNote[];
team: team;
}
export interface security extends entity {
subjectRightsRequests: subjectRightsRequest[];
attackSimulation: attackSimulationRoot;
alerts: alert[];
secureScoreControlProfiles: secureScoreControlProfile[];
secureScores: secureScore[];
}
export interface attackSimulationRoot extends entity {
simulationAutomations: simulationAutomation[];
simulations: simulation[];
}
export interface alert extends entity {
activityGroupName: string;
alertDetections: alertDetection[];
assignedTo: string;
azureSubscriptionId: string;
azureTenantId: string | null;
category: string;
closedDateTime: Date;
cloudAppStates: cloudAppSecurityState[];
comments: string[];
confidence: number;
createdDateTime: Date;
description: string;
detectionIds: string[];
eventDateTime: Date;
feedback: alertFeedback;
fileStates: fileSecurityState[];
historyStates: alertHistoryState[];
hostStates: hostSecurityState[];
incidentIds: string[];
investigationSecurityStates: investigationSecurityState[];
lastEventDateTime: Date;
lastModifiedDateTime: Date;
malwareStates: malwareState[];
messageSecurityStates: messageSecurityState[];
networkConnections: networkConnection[];
processes: process[];
recommendedActions: string[];
registryKeyStates: registryKeyState[];
securityResources: securityResource[];
severity: alertSeverity | null;
sourceMaterials: string[];
status: alertStatus | null;
tags: string[];
title: string;
triggers: alertTrigger[];
uriClickSecurityStates: uriClickSecurityState[];
userStates: userSecurityState[];
vendorInformation: securityVendorInformation;
vulnerabilityStates: vulnerabilityState[];
}
export interface secureScoreControlProfile extends entity {
actionType: string;
actionUrl: string;
azureTenantId: string | null;
complianceInformation: complianceInformation[];
controlCategory: string;
controlStateUpdates: secureScoreControlStateUpdate[];
deprecated: boolean;
implementationCost: string;
lastModifiedDateTime: Date;
maxScore: number;
rank: number;
remediation: string;
remediationImpact: string;
service: string;
threats: string[];
tier: string;
title: string;
userImpact: string;
vendorInformation: securityVendorInformation;
}
export interface secureScore extends entity {
activeUserCount: number;
averageComparativeScores: averageComparativeScore[];
azureTenantId: string | null;
controlScores: controlScore[];
createdDateTime: Date;
currentScore: number;
enabledServices: string[];
licensedUserCount: number;
maxScore: number;
vendorInformation: securityVendorInformation;
}
export interface teamFunSettings  {
allowCustomMemes: boolean;
allowGiphy: boolean;
allowStickersAndMemes: boolean;
giphyContentRating: giphyRatingType;
}
export interface teamGuestSettings  {
allowCreateUpdateChannels: boolean;
allowDeleteChannels: boolean;
}
export interface teamMemberSettings  {
allowAddRemoveApps: boolean;
allowCreatePrivateChannels: boolean;
allowCreateUpdateChannels: boolean;
allowCreateUpdateRemoveConnectors: boolean;
allowCreateUpdateRemoveTabs: boolean;
allowDeleteChannels: boolean;
}
export interface teamMessagingSettings  {
allowChannelMentions: boolean;
allowOwnerDeleteMessages: boolean;
allowTeamMentions: boolean;
allowUserDeleteMessages: boolean;
allowUserEditMessages: boolean;
}
export interface teamSummary  {
guestsCount: number;
membersCount: number;
ownersCount: number;
}
export interface channel extends entity {
createdDateTime: Date;
description: string;
displayName: string | null;
email: string;
isFavoriteByDefault: boolean;
membershipType: channelMembershipType;
tenantId: string;
webUrl: string;
filesFolder: driveItem;
members: conversationMember[];
messages: chatMessage[];
sharedWithTeams: sharedWithChannelTeamInfo[];
tabs: teamsTab[];
}
export interface group extends directoryObject {
assignedLabels: assignedLabel[];
assignedLicenses: assignedLicense[];
classification: string;
createdDateTime: Date;
description: string;
displayName: string;
expirationDateTime: Date;
groupTypes: string[] | null;
hasMembersWithLicenseErrors: boolean;
isAssignableToRole: boolean;
licenseProcessingState: licenseProcessingState;
mail: string;
mailEnabled: boolean;
mailNickname: string;
membershipRule: string;
membershipRuleProcessingState: string;
onPremisesDomainName: string;
onPremisesLastSyncDateTime: Date;
onPremisesNetBiosName: string;
onPremisesProvisioningErrors: onPremisesProvisioningError[];
onPremisesSamAccountName: string;
onPremisesSecurityIdentifier: string;
onPremisesSyncEnabled: boolean;
preferredDataLocation: string;
preferredLanguage: string;
proxyAddresses: string[] | null;
renewedDateTime: Date;
securityEnabled: boolean;
securityIdentifier: string;
serviceProvisioningErrors: serviceProvisioningError[];
theme: string;
visibility: string;
allowExternalSenders: boolean;
autoSubscribeNewMembers: boolean;
hideFromAddressLists: boolean;
hideFromOutlookClients: boolean;
isSubscribedByMail: boolean;
unseenCount: number;
isArchived: boolean;
appRoleAssignments: appRoleAssignment[];
createdOnBehalfOf: directoryObject;
memberOf: directoryObject[];
members: directoryObject[];
membersWithLicenseErrors: directoryObject[];
owners: directoryObject[];
permissionGrants: resourceSpecificPermissionGrant[];
settings: groupSetting[];
transitiveMemberOf: directoryObject[];
transitiveMembers: directoryObject[];
acceptedSenders: directoryObject[];
calendar: calendar;
calendarView: event[];
conversations: conversation[];
events: event[];
rejectedSenders: directoryObject[];
threads: conversationThread[];
drive: drive;
drives: drive[];
sites: site[];
extensions: extension[];
groupLifecyclePolicies: groupLifecyclePolicy[];
planner: plannerGroup;
onenote: onenote;
photo: profilePhoto;
photos: profilePhoto[];
team: team;
}
export interface teamsAppInstallation extends entity {
consentedPermissionSet: teamsAppPermissionSet;
teamsApp: teamsApp;
teamsAppDefinition: teamsAppDefinition;
}
export interface conversationMember extends entity {
displayName: string;
roles: string[];
visibleHistoryStartDateTime: Date;
}
export interface teamsAsyncOperation extends entity {
attemptsCount: number | null;
createdDateTime: Date | null;
error: operationError;
lastActionDateTime: Date | null;
operationType: teamsAsyncOperationType | null;
status: teamsAsyncOperationStatus | null;
targetResourceId: string;
targetResourceLocation: string;
}
export interface resourceSpecificPermissionGrant extends directoryObject {
clientAppId: string;
clientId: string;
permission: string;
permissionType: string;
resourceAppId: string;
}
export interface teamworkTag extends entity {
description: string;
displayName: string;
memberCount: number;
tagType: teamworkTagType;
teamId: string;
members: teamworkTagMember[];
}
export interface teamsTemplate extends entity {
}
export interface schedule extends entity {
enabled: boolean;
offerShiftRequestsEnabled: boolean;
openShiftsEnabled: boolean;
provisionStatus: operationStatus;
provisionStatusCode: string;
swapShiftsRequestsEnabled: boolean;
timeClockEnabled: boolean;
timeOffRequestsEnabled: boolean;
timeZone: string;
workforceIntegrationIds: string[];
offerShiftRequests: offerShiftRequest[];
openShiftChangeRequests: openShiftChangeRequest[];
openShifts: openShift[];
schedulingGroups: schedulingGroup[];
shifts: shift[];
swapShiftsChangeRequests: swapShiftsChangeRequest[];
timeOffReasons: timeOffReason[];
timeOffRequests: timeOffRequest[];
timesOff: timeOff[];
}
export interface resultInfo  {
code: number | null;
message: string;
subcode: number | null;
}
export interface compliance  {
}
export interface assignedLabel  {
displayName: string;
labelId: string;
}
export interface licenseProcessingState  {
state: string;
}
export interface groupSetting extends entity {
displayName: string;
templateId: string;
values: settingValue[] | null;
}
export interface conversation extends entity {
hasAttachments: boolean | null;
lastDeliveredDateTime: Date | null;
preview: string | null;
topic: string | null;
uniqueSenders: string[] | null;
threads: conversationThread[];
}
export interface conversationThread extends entity {
ccRecipients: recipient[] | null;
hasAttachments: boolean | null;
isLocked: boolean | null;
lastDeliveredDateTime: Date | null;
preview: string | null;
topic: string | null;
toRecipients: recipient[] | null;
uniqueSenders: string[] | null;
posts: post[];
}
export interface groupLifecyclePolicy extends entity {
alternateNotificationEmails: string;
groupLifetimeInDays: number;
managedGroupTypes: string;
}
export interface plannerGroup extends entity {
plans: plannerPlan[];
}
export interface root  {
}
export interface sharepointIds  {
listId: string;
listItemId: string;
listItemUniqueId: string;
siteId: string;
siteUrl: string;
tenantId: string;
webId: string;
}
export interface siteCollection  {
dataLocationCode: string;
hostname: string;
root: root;
}
export interface itemAnalytics extends entity {
allTime: itemActivityStat;
itemActivityStats: itemActivityStat[];
lastSevenDays: itemActivityStat;
}
export interface columnDefinition extends entity {
boolean: booleanColumn;
calculated: calculatedColumn;
choice: choiceColumn;
columnGroup: string;
contentApprovalStatus: contentApprovalStatusColumn;
currency: currencyColumn;
dateTime: dateTimeColumn;
defaultValue: defaultColumnValue;
description: string;
displayName: string;
enforceUniqueValues: boolean;
geolocation: geolocationColumn;
hidden: boolean;
hyperlinkOrPicture: hyperlinkOrPictureColumn;
indexed: boolean;
isDeletable: boolean;
isReorderable: boolean;
isSealed: boolean;
lookup: lookupColumn;
name: string;
number: numberColumn;
personOrGroup: personOrGroupColumn;
propagateChanges: boolean;
readOnly: boolean;
required: boolean;
sourceContentType: contentTypeInfo;
term: termColumn;
text: textColumn;
thumbnail: thumbnailColumn;
type: columnTypes;
validation: columnValidation;
sourceColumn: columnDefinition;
}
export interface contentType extends entity {
associatedHubsUrls: string[];
description: string;
documentSet: documentSet;
documentTemplate: documentSetContent;
group: string;
hidden: boolean;
inheritedFrom: itemReference;
isBuiltIn: boolean;
name: string;
order: contentTypeOrder;
parentId: string;
propagateChanges: boolean;
readOnly: boolean;
sealed: boolean;
base: contentType;
baseTypes: contentType[];
columnLinks: columnLink[];
columnPositions: columnDefinition[];
columns: columnDefinition[];
}
export interface list extends baseItem {
displayName: string;
list: listInfo;
sharepointIds: sharepointIds;
system: systemFacet;
columns: columnDefinition[];
contentTypes: contentType[];
drive: drive;
items: listItem[];
operations: richLongRunningOperation[];
subscriptions: subscription[];
}
export interface longRunningOperation extends entity {
createdDateTime: Date;
lastActionDateTime: Date;
resourceLocation: string;
status: longRunningOperationStatus;
statusDetail: string;
}
export interface richLongRunningOperation extends longRunningOperation {
error: publicError;
percentageComplete: number;
resourceId: string;
type: string;
}
export interface permission extends entity {
expirationDateTime: Date;
grantedTo: identitySet;
grantedToIdentities: identitySet[];
grantedToIdentitiesV2: sharePointIdentitySet[];
grantedToV2: sharePointIdentitySet;
hasPassword: boolean;
inheritedFrom: itemReference;
invitation: sharingInvitation;
link: sharingLink;
roles: string[];
shareId: string;
}
export interface apiAuthenticationConfigurationBase  {
}
export interface assignmentOrder  {
order: string[];
}
export interface basicAuthentication extends apiAuthenticationConfigurationBase {
password: string;
username: string;
}
export interface clientCertificateAuthentication extends apiAuthenticationConfigurationBase {
certificateList: pkcs12CertificateInformation[];
}
export interface pkcs12CertificateInformation  {
isActive: boolean | null;
notAfter: number | null;
notBefore: number | null;
thumbprint: string;
}
export interface pkcs12Certificate extends apiAuthenticationConfigurationBase {
password: string;
pkcs12Value: string;
}
export interface selfServiceSignUpAuthenticationFlowConfiguration  {
isEnabled: boolean | null;
}
export interface userAttributeValuesItem  {
isDefault: boolean | null;
name: string;
value: string;
}
export interface userFlowApiConnectorConfiguration  {
postAttributeCollection: identityApiConnector;
postFederationSignup: identityApiConnector;
}
export interface identityApiConnector extends entity {
authenticationConfiguration: apiAuthenticationConfigurationBase;
displayName: string;
targetUrl: string;
}
export interface identityProviderBase extends entity {
displayName: string;
}
export interface appleManagedIdentityProvider extends identityProviderBase {
certificateData: string;
developerId: string;
keyId: string;
serviceId: string;
}
export interface identityUserFlow extends entity {
userFlowType: userFlowType | null;
userFlowTypeVersion: number | null;
}
export interface b2xIdentityUserFlow extends identityUserFlow {
apiConnectorConfiguration: userFlowApiConnectorConfiguration;
identityProviders: identityProvider[];
languages: userFlowLanguageConfiguration[];
userAttributeAssignments: identityUserFlowAttributeAssignment[];
userFlowIdentityProviders: identityProviderBase[];
}
export interface identityProvider extends entity {
clientId: string;
clientSecret: string;
name: string;
type: string;
}
export interface userFlowLanguageConfiguration extends entity {
displayName: string;
isEnabled: boolean | null;
defaultPages: userFlowLanguagePage[];
overridesPages: userFlowLanguagePage[];
}
export interface identityUserFlowAttributeAssignment extends entity {
displayName: string;
isOptional: boolean | null;
requiresVerification: boolean | null;
userAttributeValues: userAttributeValuesItem[];
userInputType: identityUserFlowAttributeInputType | null;
userAttribute: identityUserFlowAttribute;
}
export interface builtInIdentityProvider extends identityProviderBase {
identityProviderType: string;
}
export interface identityUserFlowAttribute extends entity {
dataType: identityUserFlowAttributeDataType | null;
description: string;
displayName: string;
userFlowAttributeType: identityUserFlowAttributeType | null;
}
export interface identityBuiltInUserFlowAttribute extends identityUserFlowAttribute {
}
export interface identityContainer extends entity {
apiConnectors: identityApiConnector[];
b2xUserFlows: b2xIdentityUserFlow[];
identityProviders: identityProviderBase[];
userFlowAttributes: identityUserFlowAttribute[];
conditionalAccess: conditionalAccessRoot;
}
export interface identityCustomUserFlowAttribute extends identityUserFlowAttribute {
}
export interface socialIdentityProvider extends identityProviderBase {
clientId: string;
clientSecret: string;
identityProviderType: string;
}
export interface userFlowLanguagePage extends entity {
}
export interface lobbyBypassSettings  {
isDialInBypassEnabled: boolean;
scope: lobbyBypassScope;
}
export interface watermarkProtectionValues  {
isEnabledForContentSharing: boolean;
isEnabledForVideo: boolean;
}
export interface alternativeSecurityId  {
identityProvider: string;
key: Buffer;
type: number;
}
export interface preAuthorizedApplication  {
appId: string;
delegatedPermissionIds: string[] | null;
}
export interface appManagementConfiguration  {
keyCredentials: keyCredentialConfiguration[];
passwordCredentials: passwordCredentialConfiguration[];
}
export interface keyCredentialConfiguration  {
maxLifetime: number;
restrictForAppsCreatedAfterDateTime: Date;
restrictionType: appKeyCredentialRestrictionType;
}
export interface passwordCredentialConfiguration  {
maxLifetime: number;
restrictForAppsCreatedAfterDateTime: Date;
restrictionType: appCredentialRestrictionType;
}
export interface certificateAuthority  {
certificate: Buffer | null;
certificateRevocationListUrl: string;
deltaCertificateRevocationListUrl: string;
isRootAuthority: boolean | null;
issuer: string | null;
issuerSki: string | null;
}
export interface ComplexExtensionValue  {
}
export interface crossTenantAccessPolicyB2BSetting  {
applications: crossTenantAccessPolicyTargetConfiguration;
usersAndGroups: crossTenantAccessPolicyTargetConfiguration;
}
export interface crossTenantAccessPolicyTargetConfiguration  {
accessType: crossTenantAccessPolicyTargetConfigurationAccessType;
targets: crossTenantAccessPolicyTarget[];
}
export interface crossTenantAccessPolicyInboundTrust  {
isCompliantDeviceAccepted: boolean;
isHybridAzureADJoinedDeviceAccepted: boolean;
isMfaAccepted: boolean;
}
export interface crossTenantAccessPolicyTarget  {
target: string;
targetType: crossTenantAccessPolicyTargetType;
}
export interface crossTenantUserSyncInbound  {
isSyncAllowed: boolean;
}
export interface defaultUserRolePermissions  {
allowedToCreateApps: boolean | null;
allowedToCreateSecurityGroups: boolean | null;
allowedToCreateTenants: boolean;
allowedToReadBitlockerKeysForOwnedDevice: boolean;
allowedToReadOtherUsers: boolean | null;
permissionGrantPoliciesAssigned: string[];
}
export interface domainState  {
lastActionDateTime: Date;
operation: string;
status: string;
}
export interface implicitGrantSettings  {
enableAccessTokenIssuance: boolean;
enableIdTokenIssuance: boolean;
}
export interface inboundOutboundPolicyConfiguration  {
inboundAllowed: boolean;
outboundAllowed: boolean;
}
export interface instanceResourceAccess  {
permissions: resourcePermission[] | null;
resourceAppId: string | null;
}
export interface resourcePermission  {
type: string | null;
value: string | null;
}
export interface licenseUnitsDetail  {
enabled: number;
lockedOut: number;
suspended: number;
warning: number;
}
export interface loginPageLayoutConfiguration  {
isFooterShown: boolean;
isHeaderShown: boolean;
layoutTemplateType: layoutTemplateType;
}
export interface loginPageTextVisibilitySettings  {
hideAccountResetCredentials: boolean;
hideCannotAccessYourAccount: boolean;
hideForgotMyPassword: boolean;
hidePrivacyAndCookies: boolean;
hideResetItNow: boolean;
hideTermsOfUse: boolean;
}
export interface onPremisesAccidentalDeletionPrevention  {
alertThreshold: number;
synchronizationPreventionType: onPremisesDirectorySynchronizationDeletionPreventionType;
}
export interface onPremisesDirectorySynchronizationConfiguration  {
accidentalDeletionPrevention: onPremisesAccidentalDeletionPrevention;
}
export interface onPremisesDirectorySynchronizationFeature  {
blockCloudObjectTakeoverThroughHardMatchEnabled: boolean;
blockSoftMatchEnabled: boolean;
bypassDirSyncOverridesEnabled: boolean;
cloudPasswordPolicyForPasswordSyncedUsersEnabled: boolean;
concurrentCredentialUpdateEnabled: boolean;
concurrentOrgIdProvisioningEnabled: boolean;
deviceWritebackEnabled: boolean;
directoryExtensionsEnabled: boolean;
fopeConflictResolutionEnabled: boolean;
groupWriteBackEnabled: boolean;
passwordSyncEnabled: boolean;
passwordWritebackEnabled: boolean;
quarantineUponProxyAddressesConflictEnabled: boolean;
quarantineUponUpnConflictEnabled: boolean;
softMatchOnUpnEnabled: boolean;
synchronizeUpnForManagedUsersEnabled: boolean;
unifiedGroupWritebackEnabled: boolean;
userForcePasswordChangeOnLogonEnabled: boolean;
userWritebackEnabled: boolean;
}
export interface optionalClaim  {
additionalProperties: string[];
essential: boolean | null;
name: string | null;
source: string;
}
export interface physicalOfficeAddress  {
city: string;
countryOrRegion: string;
officeLocation: string;
postalCode: string;
state: string;
street: string;
}
export interface privacyProfile  {
contactEmail: string;
statementUrl: string;
}
export interface redirectUriSettings  {
index: number;
uri: string;
}
export interface resourceAccess  {
id: string | null;
type: string;
}
export interface selfSignedCertificate  {
customKeyIdentifier: Buffer;
displayName: string;
endDateTime: Date;
key: Buffer;
keyId: string;
startDateTime: Date;
thumbprint: string;
type: string;
usage: string;
}
export interface servicePlanInfo  {
appliesTo: string;
provisioningStatus: string;
servicePlanId: string;
servicePlanName: string;
}
export interface serviceProvisioningXmlError extends serviceProvisioningError {
errorDetail: string;
}
export interface settingTemplateValue  {
defaultValue: string;
description: string;
name: string;
type: string;
}
export interface settingValue  {
name: string;
value: string;
}
export interface signingCertificateUpdateStatus  {
certificateUpdateResult: string;
lastRunDateTime: Date;
}
export interface tenantInformation  {
defaultDomainName: string;
displayName: string;
federationBrandName: string;
tenantId: string | null;
}
export interface unifiedRolePermission  {
allowedResourceActions: string[] | null;
condition: string;
excludedResourceActions: string[];
}
export interface verifiedDomain  {
capabilities: string;
isDefault: boolean;
isInitial: boolean;
name: string;
type: string;
}
export interface administrativeUnit extends directoryObject {
description: string;
displayName: string;
visibility: string;
members: directoryObject[];
scopedRoleMembers: scopedRoleMembership[];
extensions: extension[];
}
export interface allowedValue extends entity {
isActive: boolean;
}
export interface appScope extends entity {
displayName: string;
type: string;
}
export interface attributeSet extends entity {
description: string;
maxAttributesPerSet: number;
}
export interface certificateBasedAuthConfiguration extends entity {
certificateAuthorities: certificateAuthority[] | null;
}
export interface contract extends directoryObject {
contractType: string;
customerId: string;
defaultDomainName: string;
displayName: string;
}
export interface crossTenantAccessPolicyConfigurationDefault extends entity {
automaticUserConsentSettings: inboundOutboundPolicyConfiguration;
b2bCollaborationInbound: crossTenantAccessPolicyB2BSetting;
b2bCollaborationOutbound: crossTenantAccessPolicyB2BSetting;
b2bDirectConnectInbound: crossTenantAccessPolicyB2BSetting;
b2bDirectConnectOutbound: crossTenantAccessPolicyB2BSetting;
inboundTrust: crossTenantAccessPolicyInboundTrust;
isServiceDefault: boolean;
}
export interface crossTenantAccessPolicyConfigurationPartner  {
[KeyProperty]: "tenantId";
automaticUserConsentSettings: inboundOutboundPolicyConfiguration;
b2bCollaborationInbound: crossTenantAccessPolicyB2BSetting;
b2bCollaborationOutbound: crossTenantAccessPolicyB2BSetting;
b2bDirectConnectInbound: crossTenantAccessPolicyB2BSetting;
b2bDirectConnectOutbound: crossTenantAccessPolicyB2BSetting;
inboundTrust: crossTenantAccessPolicyInboundTrust;
isServiceProvider: boolean;
tenantId: string | null;
identitySynchronization: crossTenantIdentitySyncPolicyPartner;
}
export interface crossTenantIdentitySyncPolicyPartner  {
[KeyProperty]: "tenantId";
displayName: string;
tenantId: string | null;
userSyncInbound: crossTenantUserSyncInbound;
}
export interface customSecurityAttributeDefinition extends entity {
attributeSet: string | null;
description: string;
isCollection: boolean | null;
isSearchable: boolean;
name: string | null;
status: string | null;
type: string | null;
usePreDefinedValuesOnly: boolean;
allowedValues: allowedValue[];
}
export interface device extends directoryObject {
accountEnabled: boolean;
alternativeSecurityIds: alternativeSecurityId[] | null;
approximateLastSignInDateTime: Date;
complianceExpirationDateTime: Date;
deviceCategory: string;
deviceId: string;
deviceMetadata: string;
deviceOwnership: string;
deviceVersion: number;
displayName: string;
enrollmentProfileName: string;
isCompliant: boolean;
isManaged: boolean;
mdmAppId: string;
onPremisesLastSyncDateTime: Date;
onPremisesSyncEnabled: boolean;
operatingSystem: string;
operatingSystemVersion: string;
physicalIds: string[] | null;
profileType: string;
registrationDateTime: Date;
systemLabels: string[] | null;
trustType: string;
memberOf: directoryObject[];
registeredOwners: directoryObject[];
registeredUsers: directoryObject[];
transitiveMemberOf: directoryObject[];
extensions: extension[];
}
export interface directory extends entity {
administrativeUnits: administrativeUnit[];
attributeSets: attributeSet[];
customSecurityAttributeDefinitions: customSecurityAttributeDefinition[];
deletedItems: directoryObject[];
federationConfigurations: identityProviderBase[];
onPremisesSynchronization: onPremisesDirectorySynchronization[];
}
export interface onPremisesDirectorySynchronization extends entity {
configuration: onPremisesDirectorySynchronizationConfiguration;
features: onPremisesDirectorySynchronizationFeature | null;
}
export interface directoryObjectPartnerReference extends directoryObject {
description: string;
displayName: string;
externalPartnerTenantId: string;
objectType: string;
}
export interface directoryRole extends directoryObject {
description: string;
displayName: string;
roleTemplateId: string;
members: directoryObject[];
scopedMembers: scopedRoleMembership[];
}
export interface directoryRoleTemplate extends directoryObject {
description: string;
displayName: string;
}
export interface domain extends entity {
authenticationType: string | null;
availabilityStatus: string;
isAdminManaged: boolean | null;
isDefault: boolean | null;
isInitial: boolean | null;
isRoot: boolean | null;
isVerified: boolean | null;
manufacturer: string;
model: string;
passwordNotificationWindowInDays: number;
passwordValidityPeriodInDays: number;
state: domainState;
supportedServices: string[] | null;
domainNameReferences: directoryObject[];
federationConfiguration: internalDomainFederation[];
serviceConfigurationRecords: domainDnsRecord[];
verificationDnsRecords: domainDnsRecord[];
}
export interface samlOrWsFedProvider extends identityProviderBase {
issuerUri: string;
metadataExchangeUri: string;
passiveSignInUri: string;
preferredAuthenticationProtocol: authenticationProtocol;
signingCertificate: string;
}
export interface internalDomainFederation extends samlOrWsFedProvider {
activeSignInUri: string;
federatedIdpMfaBehavior: federatedIdpMfaBehavior;
isSignedAuthenticationRequestRequired: boolean;
nextSigningCertificate: string;
promptLoginBehavior: promptLoginBehavior;
signingCertificateUpdateStatus: signingCertificateUpdateStatus;
signOutUri: string;
}
export interface domainDnsRecord extends entity {
isOptional: boolean | null;
label: string | null;
recordType: string;
supportedService: string | null;
ttl: number | null;
}
export interface domainDnsCnameRecord extends domainDnsRecord {
canonicalName: string;
}
export interface domainDnsMxRecord extends domainDnsRecord {
mailExchange: string | null;
preference: number;
}
export interface domainDnsSrvRecord extends domainDnsRecord {
nameTarget: string;
port: number;
priority: number;
protocol: string;
service: string;
weight: number;
}
export interface domainDnsTxtRecord extends domainDnsRecord {
text: string | null;
}
export interface domainDnsUnavailableRecord extends domainDnsRecord {
description: string;
}
export interface externalDomainName extends entity {
}
export interface groupSettingTemplate extends directoryObject {
description: string;
displayName: string;
values: settingTemplateValue[] | null;
}
export interface organization extends directoryObject {
assignedPlans: assignedPlan[] | null;
businessPhones: string[] | null;
city: string;
country: string;
countryLetterCode: string;
createdDateTime: Date;
defaultUsageLocation: string;
displayName: string;
marketingNotificationEmails: string[] | null;
onPremisesLastSyncDateTime: Date;
onPremisesSyncEnabled: boolean;
partnerTenantType: partnerTenantType;
postalCode: string;
preferredLanguage: string;
privacyProfile: privacyProfile;
provisionedPlans: provisionedPlan[] | null;
securityComplianceNotificationMails: string[] | null;
securityComplianceNotificationPhones: string[] | null;
state: string;
street: string;
technicalNotificationMails: string[] | null;
tenantType: string;
verifiedDomains: verifiedDomain[] | null;
mobileDeviceManagementAuthority: mdmAuthority | null;
branding: organizationalBranding;
certificateBasedAuthConfiguration: certificateBasedAuthConfiguration[];
extensions: extension[];
}
export interface organizationalBrandingProperties extends entity {
backgroundColor: string;
backgroundImage: Buffer;
backgroundImageRelativeUrl: string;
bannerLogo: Buffer;
bannerLogoRelativeUrl: string;
cdnList: string[];
customAccountResetCredentialsUrl: string;
customCannotAccessYourAccountText: string;
customCannotAccessYourAccountUrl: string;
customCSS: Buffer;
customCSSRelativeUrl: string;
customForgotMyPasswordText: string;
customPrivacyAndCookiesText: string;
customPrivacyAndCookiesUrl: string;
customResetItNowText: string;
customTermsOfUseText: string;
customTermsOfUseUrl: string;
favicon: Buffer;
faviconRelativeUrl: string;
headerBackgroundColor: string;
headerLogo: Buffer;
headerLogoRelativeUrl: string;
loginPageLayoutConfiguration: loginPageLayoutConfiguration;
loginPageTextVisibilitySettings: loginPageTextVisibilitySettings;
signInPageText: string;
squareLogo: Buffer;
squareLogoDark: Buffer;
squareLogoDarkRelativeUrl: string;
squareLogoRelativeUrl: string;
usernameHintText: string;
}
export interface organizationalBranding extends organizationalBrandingProperties {
localizations: organizationalBrandingLocalization[];
}
export interface organizationalBrandingLocalization extends organizationalBrandingProperties {
}
export interface orgContact extends directoryObject {
addresses: physicalOfficeAddress[];
companyName: string;
department: string;
displayName: string;
givenName: string;
jobTitle: string;
mail: string;
mailNickname: string;
onPremisesLastSyncDateTime: Date;
onPremisesProvisioningErrors: onPremisesProvisioningError[];
onPremisesSyncEnabled: boolean;
phones: phone[];
proxyAddresses: string[] | null;
serviceProvisioningErrors: serviceProvisioningError[];
surname: string;
directReports: directoryObject[];
manager: directoryObject;
memberOf: directoryObject[];
transitiveMemberOf: directoryObject[];
}
export interface permissionGrantConditionSet extends entity {
clientApplicationIds: string[];
clientApplicationPublisherIds: string[];
clientApplicationsFromVerifiedPublisherOnly: boolean;
clientApplicationTenantIds: string[];
permissionClassification: string;
permissions: string[];
permissionType: permissionType;
resourceApplication: string;
}
export interface rbacApplication extends entity {
resourceNamespaces: unifiedRbacResourceNamespace[];
roleAssignments: unifiedRoleAssignment[];
roleDefinitions: unifiedRoleDefinition[];
roleAssignmentScheduleInstances: unifiedRoleAssignmentScheduleInstance[];
roleAssignmentScheduleRequests: unifiedRoleAssignmentScheduleRequest[];
roleAssignmentSchedules: unifiedRoleAssignmentSchedule[];
roleEligibilityScheduleInstances: unifiedRoleEligibilityScheduleInstance[];
roleEligibilityScheduleRequests: unifiedRoleEligibilityScheduleRequest[];
roleEligibilitySchedules: unifiedRoleEligibilitySchedule[];
}
export interface unifiedRbacResourceNamespace extends entity {
name: string | null;
resourceActions: unifiedRbacResourceAction[];
}
export interface unifiedRoleAssignment extends entity {
appScopeId: string;
condition: string;
directoryScopeId: string;
principalId: string;
roleDefinitionId: string;
appScope: appScope;
directoryScope: directoryObject;
principal: directoryObject;
roleDefinition: unifiedRoleDefinition;
}
export interface unifiedRoleDefinition extends entity {
description: string;
displayName: string;
isBuiltIn: boolean;
isEnabled: boolean;
resourceScopes: string[] | null;
rolePermissions: unifiedRolePermission[] | null;
templateId: string;
version: string;
inheritsPermissionsFrom: unifiedRoleDefinition[];
}
export interface unifiedRoleScheduleInstanceBase extends entity {
appScopeId: string;
directoryScopeId: string;
principalId: string;
roleDefinitionId: string;
appScope: appScope;
directoryScope: directoryObject;
principal: directoryObject;
roleDefinition: unifiedRoleDefinition;
}
export interface unifiedRoleAssignmentScheduleInstance extends unifiedRoleScheduleInstanceBase {
assignmentType: string;
endDateTime: Date;
memberType: string;
roleAssignmentOriginId: string;
roleAssignmentScheduleId: string;
startDateTime: Date;
activatedUsing: unifiedRoleEligibilityScheduleInstance;
}
export interface request extends entity {
approvalId: string;
completedDateTime: Date;
createdBy: identitySet;
createdDateTime: Date;
customData: string;
status: string | null;
}
export interface unifiedRoleAssignmentScheduleRequest extends request {
action: unifiedRoleScheduleRequestActions;
appScopeId: string;
directoryScopeId: string;
isValidationOnly: boolean;
justification: string;
principalId: string;
roleDefinitionId: string;
scheduleInfo: requestSchedule;
targetScheduleId: string;
ticketInfo: ticketInfo;
activatedUsing: unifiedRoleEligibilitySchedule;
appScope: appScope;
directoryScope: directoryObject;
principal: directoryObject;
roleDefinition: unifiedRoleDefinition;
targetSchedule: unifiedRoleAssignmentSchedule;
}
export interface unifiedRoleScheduleBase extends entity {
appScopeId: string;
createdDateTime: Date;
createdUsing: string;
directoryScopeId: string;
modifiedDateTime: Date;
principalId: string;
roleDefinitionId: string;
status: string;
appScope: appScope;
directoryScope: directoryObject;
principal: directoryObject;
roleDefinition: unifiedRoleDefinition;
}
export interface unifiedRoleAssignmentSchedule extends unifiedRoleScheduleBase {
assignmentType: string;
memberType: string;
scheduleInfo: requestSchedule;
activatedUsing: unifiedRoleEligibilitySchedule;
}
export interface unifiedRoleEligibilityScheduleInstance extends unifiedRoleScheduleInstanceBase {
endDateTime: Date;
memberType: string;
roleEligibilityScheduleId: string;
startDateTime: Date;
}
export interface unifiedRoleEligibilityScheduleRequest extends request {
action: unifiedRoleScheduleRequestActions;
appScopeId: string;
directoryScopeId: string;
isValidationOnly: boolean;
justification: string;
principalId: string;
roleDefinitionId: string;
scheduleInfo: requestSchedule;
targetScheduleId: string;
ticketInfo: ticketInfo;
appScope: appScope;
directoryScope: directoryObject;
principal: directoryObject;
roleDefinition: unifiedRoleDefinition;
targetSchedule: unifiedRoleEligibilitySchedule;
}
export interface unifiedRoleEligibilitySchedule extends unifiedRoleScheduleBase {
memberType: string;
scheduleInfo: requestSchedule;
}
export interface roleManagement  {
directory: rbacApplication;
entitlementManagement: rbacApplication;
}
export interface samlOrWsFedExternalDomainFederation extends samlOrWsFedProvider {
domains: externalDomainName[];
}
export interface subscribedSku extends entity {
accountId: string;
accountName: string;
appliesTo: string;
capabilityStatus: string;
consumedUnits: number;
prepaidUnits: licenseUnitsDetail;
servicePlans: servicePlanInfo[] | null;
skuId: string;
skuPartNumber: string;
subscriptionIds: string[];
}
export interface tenantRelationship  {
delegatedAdminCustomers: delegatedAdminCustomer[];
delegatedAdminRelationships: delegatedAdminRelationship[];
}
export interface delegatedAdminCustomer extends entity {
displayName: string;
tenantId: string | null;
serviceManagementDetails: delegatedAdminServiceManagementDetail[];
}
export interface delegatedAdminRelationship extends entity {
accessDetails: delegatedAdminAccessDetails | null;
activatedDateTime: Date;
createdDateTime: Date;
customer: delegatedAdminRelationshipCustomerParticipant;
displayName: string | null;
duration: number | null;
endDateTime: Date;
lastModifiedDateTime: Date;
status: delegatedAdminRelationshipStatus;
accessAssignments: delegatedAdminAccessAssignment[];
operations: delegatedAdminRelationshipOperation[];
requests: delegatedAdminRelationshipRequest[];
}
export interface unifiedRbacResourceAction extends entity {
actionVerb: string;
authenticationContextId: string;
description: string;
isAuthenticationContextSettable: boolean;
name: string | null;
resourceScopeId: string;
}
export interface browserSharedCookieHistory  {
comment: string;
displayName: string | null;
hostOnly: boolean | null;
hostOrDomain: string;
lastModifiedBy: identitySet | null;
path: string;
publishedDateTime: Date | null;
sourceEnvironment: browserSharedCookieSourceEnvironment;
}
export interface browserSiteHistory  {
allowRedirect: boolean;
comment: string | null;
compatibilityMode: browserSiteCompatibilityMode;
lastModifiedBy: identitySet;
mergeType: browserSiteMergeType;
publishedDateTime: Date | null;
targetEnvironment: browserSiteTargetEnvironment;
}
export interface admin  {
edge: edge;
sharepoint: sharepoint;
serviceAnnouncement: serviceAnnouncement;
}
export interface edge extends entity {
internetExplorerMode: internetExplorerMode;
}
export interface sharepoint extends entity {
settings: sharepointSettings;
}
export interface serviceAnnouncement extends entity {
healthOverviews: serviceHealth[];
issues: serviceHealthIssue[];
messages: serviceUpdateMessage[];
}
export interface browserSharedCookie extends entity {
comment: string | null;
createdDateTime: Date | null;
deletedDateTime: Date;
displayName: string | null;
history: browserSharedCookieHistory[] | null;
hostOnly: boolean | null;
hostOrDomain: string | null;
lastModifiedBy: identitySet;
lastModifiedDateTime: Date | null;
path: string | null;
sourceEnvironment: browserSharedCookieSourceEnvironment | null;
status: browserSharedCookieStatus | null;
}
export interface browserSite extends entity {
allowRedirect: boolean | null;
comment: string | null;
compatibilityMode: browserSiteCompatibilityMode | null;
createdDateTime: Date | null;
deletedDateTime: Date;
history: browserSiteHistory[] | null;
lastModifiedBy: identitySet;
lastModifiedDateTime: Date | null;
mergeType: browserSiteMergeType | null;
status: browserSiteStatus | null;
targetEnvironment: browserSiteTargetEnvironment | null;
webUrl: string | null;
}
export interface browserSiteList extends entity {
description: string | null;
displayName: string | null;
lastModifiedBy: identitySet;
lastModifiedDateTime: Date | null;
publishedBy: identitySet;
publishedDateTime: Date;
revision: string | null;
status: browserSiteListStatus | null;
sharedCookies: browserSharedCookie[];
sites: browserSite[];
}
export interface internetExplorerMode extends entity {
siteLists: browserSiteList[];
}
export interface educationAssignmentRecipient  {
}
export interface educationAssignmentClassRecipient extends educationAssignmentRecipient {
}
export interface educationAssignmentGrade  {
gradedBy: identitySet;
gradedDateTime: Date;
}
export interface educationAssignmentGradeType  {
}
export interface educationAssignmentGroupRecipient extends educationAssignmentRecipient {
}
export interface educationAssignmentIndividualRecipient extends educationAssignmentRecipient {
recipients: string[];
}
export interface educationAssignmentPointsGrade extends educationAssignmentGrade {
points: number;
}
export interface educationAssignmentPointsGradeType extends educationAssignmentGradeType {
maxPoints: number;
}
export interface educationResource  {
createdBy: identitySet;
createdDateTime: Date;
displayName: string;
lastModifiedBy: identitySet;
lastModifiedDateTime: Date;
}
export interface educationExcelResource extends educationResource {
fileUrl: string;
}
export interface educationExternalResource extends educationResource {
webUrl: string;
}
export interface educationFeedback  {
feedbackBy: identitySet;
feedbackDateTime: Date;
text: educationItemBody;
}
export interface educationItemBody  {
content: string;
contentType: bodyType;
}
export interface educationFileResource extends educationResource {
fileUrl: string;
}
export interface educationLinkResource extends educationResource {
link: string;
}
export interface educationMediaResource extends educationResource {
fileUrl: string;
}
export interface educationPowerPointResource extends educationResource {
fileUrl: string;
}
export interface educationSubmissionRecipient  {
}
export interface educationSubmissionIndividualRecipient extends educationSubmissionRecipient {
userId: string;
}
export interface educationTeamsAppResource extends educationResource {
appIconWebUrl: string;
appId: string;
teamsEmbeddedContentUrl: string;
webUrl: string;
}
export interface educationWordResource extends educationResource {
fileUrl: string;
}
export interface rubricCriterion  {
description: educationItemBody;
}
export interface rubricLevel  {
description: educationItemBody;
displayName: string;
grading: educationAssignmentGradeType;
levelId: string;
}
export interface rubricQuality  {
criteria: rubricCriterion[];
description: educationItemBody;
displayName: string;
qualityId: string;
weight: number;
}
export interface rubricQualityFeedbackModel  {
feedback: educationItemBody;
qualityId: string;
}
export interface rubricQualitySelectedColumnModel  {
columnId: string;
qualityId: string;
}
export interface educationAssignment extends entity {
addedStudentAction: educationAddedStudentAction;
addToCalendarAction: educationAddToCalendarOptions;
allowLateSubmissions: boolean;
allowStudentsToAddResourcesToSubmission: boolean;
assignDateTime: Date;
assignedDateTime: Date;
assignTo: educationAssignmentRecipient;
classId: string;
closeDateTime: Date;
createdBy: identitySet;
createdDateTime: Date;
displayName: string;
dueDateTime: Date;
feedbackResourcesFolderUrl: string;
grading: educationAssignmentGradeType;
instructions: educationItemBody;
lastModifiedBy: identitySet;
lastModifiedDateTime: Date;
notificationChannelUrl: string;
resourcesFolderUrl: string;
status: educationAssignmentStatus;
webUrl: string;
categories: educationCategory[];
resources: educationAssignmentResource[];
rubric: educationRubric;
submissions: educationSubmission[];
}
export interface educationCategory extends entity {
displayName: string;
}
export interface educationAssignmentResource extends entity {
distributeForStudentWork: boolean;
resource: educationResource;
}
export interface educationRubric extends entity {
createdBy: identitySet;
createdDateTime: Date;
description: educationItemBody;
displayName: string;
grading: educationAssignmentGradeType;
lastModifiedBy: identitySet;
lastModifiedDateTime: Date;
levels: rubricLevel[];
qualities: rubricQuality[];
}
export interface educationSubmission extends entity {
reassignedBy: identitySet;
reassignedDateTime: Date;
recipient: educationSubmissionRecipient;
resourcesFolderUrl: string;
returnedBy: identitySet;
returnedDateTime: Date;
status: educationSubmissionStatus;
submittedBy: identitySet;
submittedDateTime: Date;
unsubmittedBy: identitySet;
unsubmittedDateTime: Date;
outcomes: educationOutcome[];
resources: educationSubmissionResource[];
submittedResources: educationSubmissionResource[];
}
export interface educationAssignmentDefaults extends entity {
addedStudentAction: educationAddedStudentAction;
addToCalendarAction: educationAddToCalendarOptions;
dueTime: Date;
notificationChannelUrl: string;
}
export interface educationAssignmentSettings extends entity {
submissionAnimationDisabled: boolean;
}
export interface educationClass extends entity {
classCode: string;
course: educationCourse;
createdBy: identitySet;
description: string;
displayName: string | null;
externalId: string;
externalName: string;
externalSource: educationExternalSource;
externalSourceDetail: string;
grade: string;
mailNickname: string | null;
term: educationTerm;
assignmentCategories: educationCategory[];
assignmentDefaults: educationAssignmentDefaults;
assignments: educationAssignment[];
assignmentSettings: educationAssignmentSettings;
group: group;
members: educationUser[];
schools: educationSchool[];
teachers: educationUser[];
}
export interface educationCourse  {
courseNumber: string;
description: string;
displayName: string;
externalId: string;
subject: string;
}
export interface educationTerm  {
displayName: string;
endDate: Date;
externalId: string;
startDate: Date;
}
export interface educationUser extends entity {
relatedContacts: relatedContact[];
accountEnabled: boolean;
assignedLicenses: assignedLicense[] | null;
assignedPlans: assignedPlan[] | null;
businessPhones: string[] | null;
createdBy: identitySet;
department: string;
displayName: string;
externalSource: educationExternalSource;
externalSourceDetail: string;
givenName: string;
mail: string;
mailingAddress: physicalAddress;
mailNickname: string;
middleName: string;
mobilePhone: string;
officeLocation: string;
onPremisesInfo: educationOnPremisesInfo;
passwordPolicies: string;
passwordProfile: passwordProfile;
preferredLanguage: string;
primaryRole: educationUserRole | null;
provisionedPlans: provisionedPlan[] | null;
refreshTokensValidFromDateTime: Date;
residenceAddress: physicalAddress;
showInAddressList: boolean;
student: educationStudent;
surname: string;
teacher: educationTeacher;
usageLocation: string;
userPrincipalName: string;
userType: string;
assignments: educationAssignment[];
rubrics: educationRubric[];
classes: educationClass[];
schools: educationSchool[];
taughtClasses: educationClass[];
user: user;
}
export interface educationOrganization extends entity {
description: string;
displayName: string | null;
externalSource: educationExternalSource;
externalSourceDetail: string;
}
export interface educationSchool extends educationOrganization {
address: physicalAddress;
createdBy: identitySet;
externalId: string;
externalPrincipalId: string;
fax: string;
highestGrade: string;
lowestGrade: string;
phone: string;
principalEmail: string;
principalName: string;
schoolNumber: string;
administrativeUnit: administrativeUnit;
classes: educationClass[];
users: educationUser[];
}
export interface educationOutcome extends entity {
lastModifiedBy: identitySet;
lastModifiedDateTime: Date;
}
export interface educationFeedbackOutcome extends educationOutcome {
feedback: educationFeedback;
publishedFeedback: educationFeedback;
}
export interface educationFeedbackResourceOutcome extends educationOutcome {
feedbackResource: educationResource;
resourceStatus: educationFeedbackResourceOutcomeStatus;
}
export interface educationPointsOutcome extends educationOutcome {
points: educationAssignmentPointsGrade;
publishedPoints: educationAssignmentPointsGrade;
}
export interface educationRoot  {
classes: educationClass[];
me: educationUser;
schools: educationSchool[];
users: educationUser[];
}
export interface educationRubricOutcome extends educationOutcome {
publishedRubricQualityFeedback: rubricQualityFeedbackModel[];
publishedRubricQualitySelectedLevels: rubricQualitySelectedColumnModel[];
rubricQualityFeedback: rubricQualityFeedbackModel[];
rubricQualitySelectedLevels: rubricQualitySelectedColumnModel[];
}
export interface educationSubmissionResource extends entity {
assignmentResourceUrl: string;
resource: educationResource;
}
export interface relatedContact  {
accessConsent: boolean;
displayName: string | null;
emailAddress: string | null;
mobilePhone: string;
relationship: contactRelationship | null;
}
export interface educationOnPremisesInfo  {
immutableId: string;
}
export interface educationStudent  {
birthDate: Date;
externalId: string;
gender: educationGender;
grade: string;
graduationYear: string;
studentNumber: string;
}
export interface educationTeacher  {
externalId: string;
teacherNumber: string;
}
export interface Json  {
}
export interface workbookFilterCriteria  {
color: string;
criterion1: string;
criterion2: string;
dynamicCriteria: string | null;
filterOn: string | null;
icon: workbookIcon;
operator: string | null;
values: Json;
}
export interface workbookIcon  {
index: number | null;
set: string | null;
}
export interface workbookFilterDatetime  {
date: string;
specificity: string | null;
}
export interface workbookOperationError  {
code: string;
innerError: workbookOperationError;
message: string;
}
export interface workbookRangeReference  {
address: string;
}
export interface workbookSessionInfo  {
id: string;
persistChanges: boolean;
}
export interface workbookSortField  {
ascending: boolean | null;
color: string;
dataOption: string | null;
icon: workbookIcon;
key: number | null;
sortOn: string | null;
}
export interface workbookWorksheetProtectionOptions  {
allowAutoFilter: boolean | null;
allowDeleteColumns: boolean | null;
allowDeleteRows: boolean | null;
allowFormatCells: boolean | null;
allowFormatColumns: boolean | null;
allowFormatRows: boolean | null;
allowInsertColumns: boolean | null;
allowInsertHyperlinks: boolean | null;
allowInsertRows: boolean | null;
allowPivotTables: boolean | null;
allowSort: boolean | null;
}
export interface quota  {
deleted: number;
remaining: number;
state: string;
storagePlanInformation: storagePlanInformation;
total: number;
used: number;
}
export interface systemFacet  {
}
export interface driveItem extends baseItem {
audio: audio;
bundle: bundle;
content: Buffer;
cTag: string;
deleted: deleted;
file: file;
fileSystemInfo: fileSystemInfo;
folder: folder;
image: image;
location: geoCoordinates;
malware: malware;
package: packageType;
pendingOperations: pendingOperations;
photo: photo;
publication: publicationFacet;
remoteItem: remoteItem;
root: root;
searchResult: searchResult;
shared: shared;
sharepointIds: sharepointIds;
size: number;
specialFolder: specialFolder;
video: video;
webDavUrl: string;
workbook: workbook;
analytics: itemAnalytics;
children: driveItem[];
listItem: listItem;
permissions: permission[];
subscriptions: subscription[];
thumbnails: thumbnailSet[];
versions: driveItemVersion[];
}
export interface workbook extends entity {
application: workbookApplication;
comments: workbookComment[];
functions: workbookFunctions;
names: workbookNamedItem[];
operations: workbookOperation[];
tables: workbookTable[];
worksheets: workbookWorksheet[];
}
export interface audio  {
album: string;
albumArtist: string;
artist: string;
bitrate: number;
composers: string;
copyright: string;
disc: number;
discCount: number;
duration: number;
genre: string;
hasDrm: boolean;
isVariableBitrate: boolean;
title: string;
track: number;
trackCount: number;
year: number;
}
export interface bundle  {
album: album;
childCount: number;
}
export interface deleted  {
state: string;
}
export interface file  {
hashes: hashes;
mimeType: string;
processingMetadata: boolean;
}
export interface fileSystemInfo  {
createdDateTime: Date;
lastAccessedDateTime: Date;
lastModifiedDateTime: Date;
}
export interface folder  {
childCount: number;
view: folderView;
}
export interface image  {
height: number;
width: number;
}
export interface malware  {
description: string;
}
export interface packageType  {
type: string;
}
export interface pendingOperations  {
pendingContentUpdate: pendingContentUpdate;
}
export interface photo  {
cameraMake: string;
cameraModel: string;
exposureDenominator: number;
exposureNumerator: number;
fNumber: number;
focalLength: number;
iso: number;
orientation: number;
takenDateTime: Date;
}
export interface publicationFacet  {
checkedOutBy: identitySet;
level: string;
versionId: string;
}
export interface remoteItem  {
createdBy: identitySet;
createdDateTime: Date;
file: file;
fileSystemInfo: fileSystemInfo;
folder: folder;
id: string;
image: image;
lastModifiedBy: identitySet;
lastModifiedDateTime: Date;
name: string;
package: packageType;
parentReference: itemReference;
shared: shared;
sharepointIds: sharepointIds;
size: number;
specialFolder: specialFolder;
video: video;
webDavUrl: string;
webUrl: string;
}
export interface searchResult  {
onClickTelemetryUrl: string;
}
export interface shared  {
owner: identitySet;
scope: string;
sharedBy: identitySet;
sharedDateTime: Date;
}
export interface specialFolder  {
name: string;
}
export interface video  {
audioBitsPerSample: number;
audioChannels: number;
audioFormat: string;
audioSamplesPerSecond: number;
bitrate: number;
duration: number;
fourCC: string;
frameRate: number;
height: number;
width: number;
}
export interface listItem extends baseItem {
contentType: contentTypeInfo;
sharepointIds: sharepointIds;
analytics: itemAnalytics;
documentSetVersions: documentSetVersion[];
driveItem: driveItem;
fields: fieldValueSet;
versions: listItemVersion[];
}
export interface subscription extends entity {
applicationId: string;
changeType: string | null;
clientState: string;
creatorId: string;
encryptionCertificate: string;
encryptionCertificateId: string;
expirationDateTime: Date | null;
includeResourceData: boolean;
latestSupportedTlsVersion: string;
lifecycleNotificationUrl: string;
notificationQueryOptions: string;
notificationUrl: string | null;
notificationUrlAppId: string;
resource: string | null;
}
export interface thumbnailSet extends entity {
large: thumbnail;
medium: thumbnail;
small: thumbnail;
source: thumbnail;
}
export interface baseItemVersion extends entity {
lastModifiedBy: identitySet;
lastModifiedDateTime: Date;
publication: publicationFacet;
}
export interface driveItemVersion extends baseItemVersion {
content: Buffer;
size: number;
}
export interface listInfo  {
contentTypesEnabled: boolean;
hidden: boolean;
template: string;
}
export interface workbookApplication extends entity {
calculationMode: string | null;
}
export interface workbookComment extends entity {
content: string;
contentType: string | null;
replies: workbookCommentReply[];
}
export interface workbookFunctions extends entity {
}
export interface workbookNamedItem extends entity {
comment: string;
name: string;
scope: string | null;
type: string;
value: Json;
visible: boolean | null;
worksheet: workbookWorksheet;
}
export interface workbookOperation extends entity {
error: workbookOperationError;
resourceLocation: string;
status: workbookOperationStatus | null;
}
export interface workbookTable extends entity {
highlightFirstColumn: boolean | null;
highlightLastColumn: boolean | null;
legacyId: string;
name: string;
showBandedColumns: boolean | null;
showBandedRows: boolean | null;
showFilterButton: boolean | null;
showHeaders: boolean | null;
showTotals: boolean | null;
style: string;
columns: workbookTableColumn[];
rows: workbookTableRow[];
sort: workbookTableSort;
worksheet: workbookWorksheet;
}
export interface workbookWorksheet extends entity {
name: string;
position: number | null;
visibility: string | null;
charts: workbookChart[];
names: workbookNamedItem[];
pivotTables: workbookPivotTable[];
protection: workbookWorksheetProtection;
tables: workbookTable[];
}
export interface workbookChart extends entity {
height: number | null;
left: number | null;
name: string;
top: number | null;
width: number | null;
axes: workbookChartAxes;
dataLabels: workbookChartDataLabels;
format: workbookChartAreaFormat;
legend: workbookChartLegend;
series: workbookChartSeries[];
title: workbookChartTitle;
worksheet: workbookWorksheet;
}
export interface workbookChartAxes extends entity {
categoryAxis: workbookChartAxis;
seriesAxis: workbookChartAxis;
valueAxis: workbookChartAxis;
}
export interface workbookChartDataLabels extends entity {
position: string;
separator: string;
showBubbleSize: boolean;
showCategoryName: boolean;
showLegendKey: boolean;
showPercentage: boolean;
showSeriesName: boolean;
showValue: boolean;
format: workbookChartDataLabelFormat;
}
export interface workbookChartAreaFormat extends entity {
fill: workbookChartFill;
font: workbookChartFont;
}
export interface workbookChartLegend extends entity {
overlay: boolean;
position: string;
visible: boolean | null;
format: workbookChartLegendFormat;
}
export interface workbookChartSeries extends entity {
name: string;
format: workbookChartSeriesFormat;
points: workbookChartPoint[];
}
export interface workbookChartTitle extends entity {
overlay: boolean;
text: string;
visible: boolean | null;
format: workbookChartTitleFormat;
}
export interface workbookChartFill extends entity {
}
export interface workbookChartFont extends entity {
bold: boolean;
color: string;
italic: boolean;
name: string;
size: number;
underline: string;
}
export interface workbookChartAxis extends entity {
majorUnit: Json;
maximum: Json;
minimum: Json;
minorUnit: Json;
format: workbookChartAxisFormat;
majorGridlines: workbookChartGridlines;
minorGridlines: workbookChartGridlines;
title: workbookChartAxisTitle;
}
export interface workbookChartAxisFormat extends entity {
font: workbookChartFont;
line: workbookChartLineFormat;
}
export interface workbookChartGridlines extends entity {
visible: boolean | null;
format: workbookChartGridlinesFormat;
}
export interface workbookChartAxisTitle extends entity {
text: string;
visible: boolean | null;
format: workbookChartAxisTitleFormat;
}
export interface workbookChartLineFormat extends entity {
color: string;
}
export interface workbookChartAxisTitleFormat extends entity {
font: workbookChartFont;
}
export interface workbookChartDataLabelFormat extends entity {
fill: workbookChartFill;
font: workbookChartFont;
}
export interface workbookChartGridlinesFormat extends entity {
line: workbookChartLineFormat;
}
export interface workbookChartLegendFormat extends entity {
fill: workbookChartFill;
font: workbookChartFont;
}
export interface workbookChartPoint extends entity {
value: Json;
format: workbookChartPointFormat;
}
export interface workbookChartPointFormat extends entity {
fill: workbookChartFill;
}
export interface workbookChartSeriesFormat extends entity {
fill: workbookChartFill;
line: workbookChartLineFormat;
}
export interface workbookChartTitleFormat extends entity {
fill: workbookChartFill;
font: workbookChartFont;
}
export interface workbookCommentReply extends entity {
content: string;
contentType: string | null;
}
export interface workbookFilter extends entity {
criteria: workbookFilterCriteria;
}
export interface workbookFormatProtection extends entity {
formulaHidden: boolean;
locked: boolean;
}
export interface workbookFunctionResult extends entity {
error: string;
value: Json;
}
export interface workbookPivotTable extends entity {
name: string;
worksheet: workbookWorksheet;
}
export interface workbookRange extends entity {
address: string;
addressLocal: string;
cellCount: number | null;
columnCount: number | null;
columnHidden: boolean;
columnIndex: number | null;
formulas: Json;
formulasLocal: Json;
formulasR1C1: Json;
hidden: boolean;
numberFormat: Json;
rowCount: number | null;
rowHidden: boolean;
rowIndex: number | null;
text: Json;
values: Json;
valueTypes: Json;
format: workbookRangeFormat;
sort: workbookRangeSort;
worksheet: workbookWorksheet;
}
export interface workbookRangeFormat extends entity {
columnWidth: number;
horizontalAlignment: string;
rowHeight: number;
verticalAlignment: string;
wrapText: boolean;
borders: workbookRangeBorder[];
fill: workbookRangeFill;
font: workbookRangeFont;
protection: workbookFormatProtection;
}
export interface workbookRangeSort extends entity {
}
export interface workbookRangeBorder extends entity {
color: string;
sideIndex: string;
style: string;
weight: string;
}
export interface workbookRangeFill extends entity {
color: string;
}
export interface workbookRangeFont extends entity {
bold: boolean;
color: string;
italic: boolean;
name: string;
size: number;
underline: string;
}
export interface workbookRangeView extends entity {
cellAddresses: Json;
columnCount: number | null;
formulas: Json;
formulasLocal: Json;
formulasR1C1: Json;
index: number | null;
numberFormat: Json;
rowCount: number | null;
text: Json;
values: Json;
valueTypes: Json;
rows: workbookRangeView[];
}
export interface workbookTableColumn extends entity {
index: number | null;
name: string;
values: Json;
filter: workbookFilter;
}
export interface workbookTableRow extends entity {
index: number | null;
values: Json;
}
export interface workbookTableSort extends entity {
fields: workbookSortField[];
matchCase: boolean | null;
method: string | null;
}
export interface workbookWorksheetProtection extends entity {
options: workbookWorksheetProtectionOptions;
protected: boolean | null;
}
export interface attendeeAvailability  {
attendee: attendeeBase;
availability: freeBusyStatus;
}
export interface attendeeBase extends recipient {
type: attendeeType;
}
export interface locationConstraint  {
isRequired: boolean;
locations: locationConstraintItem[];
suggestLocation: boolean;
}
export interface locationConstraintItem extends location {
resolveAvailability: boolean;
}
export interface meetingTimeSuggestion  {
attendeeAvailability: attendeeAvailability[];
confidence: number;
locations: location[];
meetingTimeSlot: timeSlot;
order: number;
organizerAvailability: freeBusyStatus;
suggestionReason: string;
}
export interface meetingTimeSuggestionsResult  {
emptySuggestionsReason: string;
meetingTimeSuggestions: meetingTimeSuggestion[];
}
export interface timeConstraint  {
activityDomain: activityDomain;
timeSlots: timeSlot[];
}
export interface place extends entity {
address: physicalAddress;
displayName: string | null;
geoCoordinates: outlookGeoCoordinates;
phone: string;
}
export interface room extends place {
audioDeviceName: string;
bookingType: bookingType;
building: string;
capacity: number;
displayDeviceName: string;
emailAddress: string;
floorLabel: string;
floorNumber: number;
isWheelChairAccessible: boolean;
label: string;
nickname: string | null;
tags: string[];
videoDeviceName: string;
}
export interface roomList extends place {
emailAddress: string;
rooms: room[];
}
export interface attachmentItem  {
attachmentType: attachmentType;
contentId: string;
contentType: string;
isInline: boolean;
name: string;
size: number;
}
export interface attendee extends attendeeBase {
proposedNewTime: timeSlot;
status: responseStatus;
}
export interface responseStatus  {
response: responseType;
time: Date;
}
export interface automaticRepliesMailTips  {
message: string;
messageLanguage: localeInfo;
scheduledEndTime: dateTimeTimeZone;
scheduledStartTime: dateTimeTimeZone;
}
export interface localeInfo  {
displayName: string;
locale: string;
}
export interface automaticRepliesSetting  {
externalAudience: externalAudienceScope;
externalReplyMessage: string;
internalReplyMessage: string;
scheduledEndDateTime: dateTimeTimeZone;
scheduledStartDateTime: dateTimeTimeZone;
status: automaticRepliesStatus;
}
export interface calendarSharingMessageAction  {
action: calendarSharingAction;
actionType: calendarSharingActionType;
importance: calendarSharingActionImportance;
}
export interface convertIdResult  {
errorDetails: genericError;
sourceId: string;
targetId: string;
}
export interface genericError  {
code: string;
message: string;
}
export interface timeZoneBase  {
name: string;
}
export interface customTimeZone extends timeZoneBase {
bias: number;
daylightOffset: daylightTimeZoneOffset;
standardOffset: standardTimeZoneOffset;
}
export interface standardTimeZoneOffset  {
dayOccurrence: number;
dayOfWeek: dayOfWeek;
month: number;
time: Date;
year: number;
}
export interface daylightTimeZoneOffset extends standardTimeZoneOffset {
daylightBias: number;
}
export interface followupFlag  {
completedDateTime: dateTimeTimeZone;
dueDateTime: dateTimeTimeZone;
flagStatus: followupFlagStatus;
startDateTime: dateTimeTimeZone;
}
export interface freeBusyError  {
message: string;
responseCode: string;
}
export interface internetMessageHeader  {
name: string;
value: string;
}
export interface workingHours  {
daysOfWeek: dayOfWeek[];
endTime: Date;
startTime: Date;
timeZone: timeZoneBase;
}
export interface mailTips  {
automaticReplies: automaticRepliesMailTips;
customMailTip: string;
deliveryRestricted: boolean;
emailAddress: emailAddress;
error: mailTipsError;
externalMemberCount: number;
isModerated: boolean;
mailboxFull: boolean;
maxMessageSize: number;
recipientScope: recipientScopeType;
recipientSuggestions: recipient[];
totalMemberCount: number;
}
export interface mailTipsError  {
code: string;
message: string;
}
export interface messageRuleActions  {
assignCategories: string[];
copyToFolder: string;
delete: boolean;
forwardAsAttachmentTo: recipient[];
forwardTo: recipient[];
markAsRead: boolean;
markImportance: importance;
moveToFolder: string;
permanentDelete: boolean;
redirectTo: recipient[];
stopProcessingRules: boolean;
}
export interface messageRulePredicates  {
bodyContains: string[];
bodyOrSubjectContains: string[];
categories: string[];
fromAddresses: recipient[];
hasAttachments: boolean;
headerContains: string[];
importance: importance;
isApprovalRequest: boolean;
isAutomaticForward: boolean;
isAutomaticReply: boolean;
isEncrypted: boolean;
isMeetingRequest: boolean;
isMeetingResponse: boolean;
isNonDeliveryReport: boolean;
isPermissionControlled: boolean;
isReadReceipt: boolean;
isSigned: boolean;
isVoicemail: boolean;
messageActionFlag: messageActionFlag;
notSentToMe: boolean;
recipientContains: string[];
senderContains: string[];
sensitivity: sensitivity;
sentCcMe: boolean;
sentOnlyToMe: boolean;
sentToAddresses: recipient[];
sentToMe: boolean;
sentToOrCcMe: boolean;
subjectContains: string[];
withinSizeRange: sizeRange;
}
export interface sizeRange  {
maximumSize: number;
minimumSize: number;
}
export interface onlineMeetingInfo  {
conferenceId: string;
joinUrl: string;
phones: phone[];
quickDial: string;
tollFreeNumbers: string[];
tollNumber: string;
}
export interface patternedRecurrence  {
pattern: recurrencePattern;
range: recurrenceRange;
}
export interface recurrencePattern  {
dayOfMonth: number | null;
daysOfWeek: dayOfWeek[];
firstDayOfWeek: dayOfWeek;
index: weekIndex;
interval: number | null;
month: number | null;
type: recurrencePatternType;
}
export interface recurrenceRange  {
endDate: Date;
numberOfOccurrences: number | null;
recurrenceTimeZone: string;
startDate: Date;
type: recurrenceRangeType;
}
export interface personType  {
class: string;
subclass: string;
}
export interface reminder  {
changeKey: string;
eventEndTime: dateTimeTimeZone;
eventId: string;
eventLocation: location;
eventStartTime: dateTimeTimeZone;
eventSubject: string;
eventWebLink: string;
reminderFireTime: dateTimeTimeZone;
}
export interface scheduleInformation  {
availabilityView: string;
error: freeBusyError;
scheduleId: string;
scheduleItems: scheduleItem[];
workingHours: workingHours;
}
export interface scheduleItem  {
end: dateTimeTimeZone;
isPrivate: boolean;
location: string;
start: dateTimeTimeZone;
status: freeBusyStatus;
subject: string;
}
export interface scoredEmailAddress  {
address: string;
itemId: string;
relevanceScore: number;
selectionLikelihood: selectionLikelihoodInfo;
}
export interface timeZoneInformation  {
alias: string;
displayName: string;
}
export interface uploadSession  {
expirationDateTime: Date;
nextExpectedRanges: string[];
uploadUrl: string;
}
export interface website  {
address: string;
displayName: string;
type: websiteType;
}
export interface attachment extends entity {
contentType: string;
isInline: boolean | null;
lastModifiedDateTime: Date;
name: string;
size: number | null;
}
export interface calendarPermission extends entity {
allowedRoles: calendarRoleType[];
emailAddress: emailAddress;
isInsideOrganization: boolean;
isRemovable: boolean;
role: calendarRoleType;
}
export interface multiValueLegacyExtendedProperty extends entity {
value: string[];
}
export interface singleValueLegacyExtendedProperty extends entity {
value: string;
}
export interface calendarSharingMessage extends message {
canAccept: boolean;
sharingMessageAction: calendarSharingMessageAction;
sharingMessageActions: calendarSharingMessageAction[];
suggestedCalendarName: string;
}
export interface post extends outlookItem {
body: itemBody;
conversationId: string;
conversationThreadId: string;
from: recipient | null;
hasAttachments: boolean | null;
newParticipants: recipient[] | null;
receivedDateTime: Date | null;
sender: recipient;
attachments: attachment[];
extensions: extension[];
inReplyTo: post;
multiValueExtendedProperties: multiValueLegacyExtendedProperty[];
singleValueExtendedProperties: singleValueLegacyExtendedProperty[];
}
export interface eventMessage extends message {
endDateTime: dateTimeTimeZone;
isAllDay: boolean;
isDelegated: boolean;
isOutOfDate: boolean;
location: location;
meetingMessageType: meetingMessageType;
recurrence: patternedRecurrence;
startDateTime: dateTimeTimeZone;
type: eventType;
event: event;
}
export interface eventMessageRequest extends eventMessage {
allowNewTimeProposals: boolean;
meetingRequestType: meetingRequestType;
previousEndDateTime: dateTimeTimeZone;
previousLocation: location;
previousStartDateTime: dateTimeTimeZone;
responseRequested: boolean;
}
export interface eventMessageResponse extends eventMessage {
proposedNewTime: timeSlot;
responseType: responseType;
}
export interface fileAttachment extends attachment {
contentBytes: Buffer;
contentId: string;
contentLocation: string;
}
export interface inferenceClassificationOverride extends entity {
classifyAs: inferenceClassificationType;
senderEmailAddress: emailAddress;
}
export interface itemAttachment extends attachment {
item: outlookItem;
}
export interface messageRule extends entity {
actions: messageRuleActions;
conditions: messageRulePredicates;
displayName: string;
exceptions: messageRulePredicates;
hasError: boolean;
isEnabled: boolean;
isReadOnly: boolean;
sequence: number;
}
export interface mailSearchFolder extends mailFolder {
filterQuery: string;
includeNestedFolders: boolean;
isSupported: boolean;
sourceFolderIds: string[];
}
export interface openTypeExtension extends extension {
extensionName: string | null;
}
export interface outlookCategory extends entity {
color: categoryColor;
displayName: string;
}
export interface referenceAttachment extends attachment {
}
export interface idleSessionSignOut  {
isEnabled: boolean;
signOutAfterInSeconds: number;
warnAfterInSeconds: number;
}
export interface sharepointSettings extends entity {
allowedDomainGuidsForSyncApp: string[];
availableManagedPathsForSiteCreation: string[] | null;
deletedUserPersonalSiteRetentionPeriodInDays: number;
excludedFileExtensionsForSyncApp: string[];
idleSessionSignOut: idleSessionSignOut;
imageTaggingOption: imageTaggingChoice;
isCommentingOnSitePagesEnabled: boolean;
isFileActivityNotificationEnabled: boolean;
isLegacyAuthProtocolsEnabled: boolean;
isLoopEnabled: boolean;
isMacSyncAppEnabled: boolean;
isRequireAcceptingUserToMatchInvitedUserEnabled: boolean;
isResharingByExternalUsersEnabled: boolean;
isSharePointMobileNotificationEnabled: boolean;
isSharePointNewsfeedEnabled: boolean;
isSiteCreationEnabled: boolean;
isSiteCreationUIEnabled: boolean;
isSitePagesCreationEnabled: boolean;
isSitesStorageLimitAutomatic: boolean;
isSyncButtonHiddenOnPersonalSite: boolean;
isUnmanagedSyncAppForTenantRestricted: boolean;
personalSiteDefaultStorageLimitInMB: number;
sharingAllowedDomainList: string[];
sharingBlockedDomainList: string[];
sharingCapability: sharingCapabilities;
sharingDomainRestrictionMode: sharingDomainRestrictionMode;
siteCreationDefaultManagedPath: string | null;
siteCreationDefaultStorageLimitInMB: number;
tenantDefaultTimezone: string;
}
export interface accessAction  {
}
export interface album  {
coverImageItemId: string;
}
export interface booleanColumn  {
}
export interface calculatedColumn  {
format: string;
formula: string;
outputType: string;
}
export interface choiceColumn  {
allowTextEntry: boolean;
choices: string[];
displayAs: string;
}
export interface columnValidation  {
defaultLanguage: string;
descriptions: displayNameLocalization[];
formula: string;
}
export interface displayNameLocalization  {
displayName: string;
languageTag: string;
}
export interface commentAction  {
isReply: boolean;
parentAuthor: identitySet;
participants: identitySet[];
}
export interface contentApprovalStatusColumn  {
}
export interface contentTypeInfo  {
id: string;
name: string;
}
export interface contentTypeOrder  {
default: boolean;
position: number;
}
export interface createAction  {
}
export interface currencyColumn  {
locale: string;
}
export interface dateTimeColumn  {
displayAs: string;
format: string;
}
export interface defaultColumnValue  {
formula: string;
value: string;
}
export interface deleteAction  {
name: string;
objectType: string;
}
export interface documentSet  {
allowedContentTypes: contentTypeInfo[];
defaultContents: documentSetContent[];
propagateWelcomePageChanges: boolean;
shouldPrefixNameToFile: boolean;
welcomePageUrl: string;
sharedColumns: columnDefinition[];
welcomePageColumns: columnDefinition[];
}
export interface documentSetContent  {
contentType: contentTypeInfo;
fileName: string;
folderName: string;
}
export interface documentSetVersionItem  {
itemId: string;
title: string;
versionId: string;
}
export interface driveItemUploadableProperties  {
description: string;
fileSize: number;
fileSystemInfo: fileSystemInfo;
name: string;
}
export interface driveRecipient  {
alias: string;
email: string;
objectId: string;
}
export interface editAction  {
}
export interface extractSensitivityLabelsResult  {
labels: sensitivityLabelAssignment[];
}
export interface sensitivityLabelAssignment  {
assignmentMethod: sensitivityLabelAssignmentMethod | null;
sensitivityLabelId: string | null;
tenantId: string | null;
}
export interface hashes  {
crc32Hash: string;
quickXorHash: string;
sha1Hash: string;
sha256Hash: string;
}
export interface folderView  {
sortBy: string;
sortOrder: string;
viewType: string;
}
export interface geolocationColumn  {
}
export interface hyperlinkOrPictureColumn  {
isPicture: boolean;
}
export interface incompleteData  {
missingDataBeforeDateTime: Date;
wasThrottled: boolean;
}
export interface itemActionStat  {
actionCount: number;
actorCount: number;
}
export interface itemPreviewInfo  {
getUrl: string;
postParameters: string;
postUrl: string;
}
export interface itemReference  {
driveId: string;
driveType: string;
id: string;
name: string;
path: string;
shareId: string;
sharepointIds: sharepointIds;
siteId: string;
}
export interface lookupColumn  {
allowMultipleValues: boolean;
allowUnlimitedLength: boolean;
columnName: string;
listId: string;
primaryLookupColumnId: string;
}
export interface mentionAction  {
mentionees: identitySet[];
}
export interface moveAction  {
from: string;
to: string;
}
export interface numberColumn  {
decimalPlaces: string;
displayAs: string;
maximum: number;
minimum: number;
}
export interface pendingContentUpdate  {
queuedDateTime: Date;
}
export interface personOrGroupColumn  {
allowMultipleSelection: boolean;
chooseFromType: string;
displayAs: string;
}
export interface storagePlanInformation  {
upgradeAvailable: boolean;
}
export interface renameAction  {
newName: string;
oldName: string;
}
export interface restoreAction  {
}
export interface shareAction  {
recipients: identitySet[];
}
export interface sharePointIdentity extends identity {
loginName: string;
}
export interface sharePointIdentitySet extends identitySet {
group: identity;
siteGroup: sharePointIdentity;
siteUser: sharePointIdentity;
}
export interface sharingInvitation  {
email: string;
invitedBy: identitySet;
redeemedBy: string;
signInRequired: boolean;
}
export interface sharingLink  {
application: identity;
preventsDownload: boolean;
scope: string;
type: string;
webHtml: string;
webUrl: string;
}
export interface termColumn  {
allowMultipleValues: boolean;
showFullyQualifiedName: boolean;
}
export interface textColumn  {
allowMultipleLines: boolean;
appendChangesToExistingText: boolean;
linesForEditing: number;
maxLength: number;
textType: string;
}
export interface thumbnail  {
content: Buffer;
height: number;
sourceItemId: string;
url: string;
width: number;
}
export interface thumbnailColumn  {
}
export interface versionAction  {
newVersion: string;
}
export interface columnLink extends entity {
name: string;
}
export interface listItemVersion extends baseItemVersion {
fields: fieldValueSet;
}
export interface documentSetVersion extends listItemVersion {
comment: string;
createdBy: identitySet;
createdDateTime: Date;
items: documentSetVersionItem[];
shouldCaptureMinorVersion: boolean;
}
export interface fieldValueSet extends entity {
}
export interface itemActivity extends entity {
access: accessAction;
activityDateTime: Date;
actor: identitySet;
driveItem: driveItem;
}
export interface itemActivityStat extends entity {
access: itemActionStat;
create: itemActionStat;
delete: itemActionStat;
edit: itemActionStat;
endDateTime: Date;
incompleteData: incompleteData;
isTrending: boolean;
move: itemActionStat;
startDateTime: Date;
activities: itemActivity[];
}
export interface sharedDriveItem extends baseItem {
owner: identitySet;
driveItem: driveItem;
items: driveItem[];
list: list;
listItem: listItem;
permission: permission;
root: driveItem;
site: site;
}
export interface audioConferencing  {
conferenceId: string;
dialinUrl: string;
tollFreeNumber: string;
tollFreeNumbers: string[];
tollNumber: string;
tollNumbers: string[];
}
export interface broadcastMeetingSettings  {
allowedAudience: broadcastMeetingAudience;
captions: broadcastMeetingCaptionSettings;
isAttendeeReportEnabled: boolean;
isQuestionAndAnswerEnabled: boolean;
isRecordingEnabled: boolean;
isVideoOnDemandEnabled: boolean;
}
export interface chatInfo  {
messageId: string;
replyChainMessageId: string;
threadId: string;
}
export interface joinMeetingIdSettings  {
isPasscodeRequired: boolean;
joinMeetingId: string;
passcode: string;
}
export interface meetingParticipants  {
attendees: meetingParticipantInfo[];
organizer: meetingParticipantInfo;
}
export interface meetingAttendanceReport extends entity {
meetingEndDateTime: Date;
meetingStartDateTime: Date;
totalParticipantCount: number;
attendanceRecords: attendanceRecord[];
}
export interface extensionSchemaProperty  {
name: string;
type: string;
}
export interface schemaExtension extends entity {
description: string;
owner: string | null;
properties: extensionSchemaProperty[] | null;
status: string | null;
targetTypes: string[] | null;
}
export interface attributeDefinition  {
anchor: boolean | null;
apiExpressions: stringKeyStringValuePair[];
caseExact: boolean | null;
defaultValue: string;
flowNullValues: boolean | null;
metadata: attributeDefinitionMetadataEntry[];
multivalued: boolean | null;
mutability: mutability | null;
name: string;
referencedObjects: referencedObject[];
required: boolean | null;
type: attributeType | null;
}
export interface stringKeyStringValuePair  {
key: string;
value: string;
}
export interface attributeDefinitionMetadataEntry  {
key: attributeDefinitionMetadata;
value: string;
}
export interface referencedObject  {
referencedObjectName: string;
referencedProperty: string;
}
export interface attributeMapping  {
defaultValue: string;
exportMissingReferences: boolean | null;
flowBehavior: attributeFlowBehavior | null;
flowType: attributeFlowType | null;
matchingPriority: number | null;
source: attributeMappingSource;
targetAttributeName: string;
}
export interface attributeMappingSource  {
expression: string;
name: string;
parameters: stringKeyAttributeMappingSourceValuePair[];
type: attributeMappingSourceType | null;
}
export interface attributeMappingParameterSchema  {
allowMultipleOccurrences: boolean | null;
name: string;
required: boolean | null;
type: attributeType | null;
}
export interface stringKeyAttributeMappingSourceValuePair  {
key: string;
value: attributeMappingSource;
}
export interface containerFilter  {
includedContainers: string[];
}
export interface expressionInputObject  {
definition: objectDefinition;
properties: stringKeyObjectValuePair[];
}
export interface objectDefinition  {
attributes: attributeDefinition[];
metadata: objectDefinitionMetadataEntry[];
name: string;
supportedApis: string[];
}
export interface stringKeyObjectValuePair  {
key: string;
}
export interface filter  {
categoryFilterGroups: filterGroup[];
groups: filterGroup[];
inputFilterGroups: filterGroup[];
}
export interface filterGroup  {
clauses: filterClause[];
name: string;
}
export interface filterClause  {
operatorName: string;
sourceOperandName: string;
targetOperand: filterOperand;
}
export interface filterOperand  {
values: string[];
}
export interface groupFilter  {
includedGroups: string[];
}
export interface objectDefinitionMetadataEntry  {
key: objectDefinitionMetadata;
value: string;
}
export interface objectMapping  {
attributeMappings: attributeMapping[];
enabled: boolean | null;
flowTypes: objectFlowTypes | null;
metadata: objectMappingMetadataEntry[];
name: string;
scope: filter;
sourceObjectName: string;
targetObjectName: string;
}
export interface objectMappingMetadataEntry  {
key: objectMappingMetadata;
value: string;
}
export interface parseExpressionResponse  {
error: publicError;
evaluationResult: string[];
evaluationSucceeded: boolean | null;
parsedExpression: attributeMappingSource;
parsingSucceeded: boolean | null;
}
export interface publicErrorResponse  {
error: publicError;
}
export interface stringKeyLongValuePair  {
key: string;
value: number | null;
}
export interface synchronizationError  {
code: string;
message: string;
tenantActionable: boolean | null;
}
export interface synchronizationJobApplicationParameters  {
ruleId: string;
subjects: synchronizationJobSubject[];
}
export interface synchronizationJobSubject  {
links: synchronizationLinkedObjects;
objectId: string;
objectTypeName: string;
}
export interface synchronizationJobRestartCriteria  {
resetScope: synchronizationJobRestartScope;
}
export interface synchronizationLinkedObjects  {
manager: synchronizationJobSubject;
members: synchronizationJobSubject[];
owners: synchronizationJobSubject[];
}
export interface synchronizationMetadataEntry  {
key: synchronizationMetadata;
value: string;
}
export interface synchronizationProgress  {
completedUnits: number | null;
progressObservationDateTime: Date | null;
totalUnits: number | null;
units: string;
}
export interface synchronizationQuarantine  {
currentBegan: Date | null;
error: synchronizationError;
nextAttempt: Date | null;
reason: quarantineReason | null;
seriesBegan: Date | null;
seriesCount: number | null;
}
export interface synchronizationRule  {
containerFilter: containerFilter;
editable: boolean | null;
groupFilter: groupFilter;
id: string;
metadata: stringKeyStringValuePair[];
name: string;
objectMappings: objectMapping[];
priority: number | null;
sourceDirectoryName: string;
targetDirectoryName: string;
}
export interface synchronizationSchedule  {
expiration: Date;
interval: number | null;
state: synchronizationScheduleState | null;
}
export interface synchronizationSecretKeyStringValuePair  {
key: synchronizationSecret | null;
value: string;
}
export interface synchronizationStatus  {
code: synchronizationStatusCode | null;
countSuccessiveCompleteFailures: number | null;
escrowsPruned: boolean | null;
lastExecution: synchronizationTaskExecution;
lastSuccessfulExecution: synchronizationTaskExecution;
lastSuccessfulExecutionWithExports: synchronizationTaskExecution;
progress: synchronizationProgress[];
quarantine: synchronizationQuarantine;
steadyStateFirstAchievedTime: Date | null;
steadyStateLastAchievedTime: Date | null;
synchronizedEntryCountByType: stringKeyLongValuePair[];
troubleshootingUrl: string;
}
export interface synchronizationTaskExecution  {
activityIdentifier: string;
countEntitled: number | null;
countEntitledForProvisioning: number | null;
countEscrowed: number | null;
countEscrowedRaw: number | null;
countExported: number | null;
countExports: number | null;
countImported: number | null;
countImportedDeltas: number | null;
countImportedReferenceDeltas: number | null;
error: synchronizationError;
state: synchronizationTaskExecutionResult | null;
timeBegan: Date | null;
timeEnded: Date | null;
}
export interface attributeMappingFunctionSchema extends entity {
parameters: attributeMappingParameterSchema[];
}
export interface directoryDefinition extends entity {
discoverabilities: directoryDefinitionDiscoverabilities | null;
discoveryDateTime: Date;
name: string;
objects: objectDefinition[];
readOnly: boolean | null;
version: string;
}
export interface filterOperatorSchema extends entity {
arity: scopeOperatorType | null;
multivaluedComparisonType: scopeOperatorMultiValuedComparisonType | null;
supportedAttributeTypes: attributeType[] | null;
}
export interface synchronizationJob extends entity {
schedule: synchronizationSchedule;
status: synchronizationStatus;
synchronizationJobSettings: keyValuePair[];
templateId: string;
schema: synchronizationSchema;
}
export interface synchronizationTemplate extends entity {
applicationId: string | null;
default: boolean | null;
description: string;
discoverable: boolean | null;
factoryTag: string;
metadata: synchronizationMetadataEntry[];
schema: synchronizationSchema;
}
export interface synchronizationSchema extends entity {
synchronizationRules: synchronizationRule[];
version: string;
directories: directoryDefinition[];
}
export interface cloudCommunications  {
calls: call[];
onlineMeetings: onlineMeeting[];
presences: presence[];
}
export interface call extends entity {
callbackUri: string | null;
callChainId: string;
callOptions: callOptions;
callRoutes: callRoute[];
chatInfo: chatInfo;
direction: callDirection;
incomingContext: incomingContext;
mediaConfig: mediaConfig;
mediaState: callMediaState;
meetingInfo: meetingInfo;
myParticipantId: string;
requestedModalities: modality[];
resultInfo: resultInfo;
source: participantInfo;
state: callState;
subject: string;
targets: invitationParticipantInfo[];
tenantId: string;
toneInfo: toneInfo;
transcription: callTranscriptionInfo;
audioRoutingGroups: audioRoutingGroup[];
contentSharingSessions: contentSharingSession[];
operations: commsOperation[];
participants: participant[];
}
export interface accessReviewApplyAction  {
}
export interface accessReviewHistoryScheduleSettings  {
recurrence: patternedRecurrence | null;
reportRange: string | null;
}
export interface accessReviewScope  {
}
export interface accessReviewQueryScope extends accessReviewScope {
query: string;
queryRoot: string;
queryType: string;
}
export interface accessReviewInactiveUsersQueryScope extends accessReviewQueryScope {
inactiveDuration: number;
}
export interface accessReviewInstanceDecisionItemResource  {
displayName: string;
id: string;
type: string;
}
export interface accessReviewInstanceDecisionItemAccessPackageAssignmentPolicyResource extends accessReviewInstanceDecisionItemResource {
accessPackageDisplayName: string;
accessPackageId: string;
}
export interface accessReviewInstanceDecisionItemAzureRoleResource extends accessReviewInstanceDecisionItemResource {
scope: accessReviewInstanceDecisionItemResource;
}
export interface accessReviewInstanceDecisionItemServicePrincipalResource extends accessReviewInstanceDecisionItemResource {
appId: string;
}
export interface accessReviewNotificationRecipientItem  {
notificationRecipientScope: accessReviewNotificationRecipientScope;
notificationTemplateType: string;
}
export interface accessReviewNotificationRecipientScope  {
}
export interface accessReviewNotificationRecipientQueryScope extends accessReviewNotificationRecipientScope {
query: string;
queryRoot: string;
queryType: string;
}
export interface accessReviewRecommendationInsightSetting  {
}
export interface accessReviewReviewerScope  {
query: string;
queryRoot: string;
queryType: string;
}
export interface accessReviewScheduleSettings  {
applyActions: accessReviewApplyAction[];
autoApplyDecisionsEnabled: boolean | null;
decisionHistoriesForReviewersEnabled: boolean;
defaultDecision: string;
defaultDecisionEnabled: boolean | null;
instanceDurationInDays: number | null;
justificationRequiredOnApproval: boolean | null;
mailNotificationsEnabled: boolean | null;
recommendationInsightSettings: accessReviewRecommendationInsightSetting[];
recommendationLookBackDuration: number;
recommendationsEnabled: boolean | null;
recurrence: patternedRecurrence;
reminderNotificationsEnabled: boolean | null;
}
export interface accessReviewStageSettings  {
decisionsThatWillMoveToNextStage: string[];
dependsOn: string[] | null;
durationInDays: number | null;
fallbackReviewers: accessReviewReviewerScope[];
recommendationInsightSettings: accessReviewRecommendationInsightSetting[];
recommendationsEnabled: boolean | null;
reviewers: accessReviewReviewerScope[];
stageId: string | null;
}
export interface appConsentRequestScope  {
displayName: string;
}
export interface disableAndDeleteUserApplyAction extends accessReviewApplyAction {
}
export interface groupPeerOutlierRecommendationInsightSettings extends accessReviewRecommendationInsightSetting {
}
export interface principalResourceMembershipsScope extends accessReviewScope {
principalScopes: accessReviewScope[];
resourceScopes: accessReviewScope[];
}
export interface removeAccessApplyAction extends accessReviewApplyAction {
}
export interface servicePrincipalIdentity extends identity {
appId: string;
}
export interface userLastSignInRecommendationInsightSetting extends accessReviewRecommendationInsightSetting {
recommendationLookBackDuration: number;
signInScope: userSignInRecommendationScope;
}
export interface accessReviewHistoryDefinition extends entity {
createdBy: userIdentity | null;
createdDateTime: Date | null;
decisions: accessReviewHistoryDecisionFilter[];
displayName: string | null;
reviewHistoryPeriodEndDateTime: Date | null;
reviewHistoryPeriodStartDateTime: Date | null;
scheduleSettings: accessReviewHistoryScheduleSettings;
scopes: accessReviewScope[] | null;
status: accessReviewHistoryStatus;
instances: accessReviewHistoryInstance[];
}
export interface accessReviewHistoryInstance extends entity {
downloadUri: string;
expirationDateTime: Date | null;
fulfilledDateTime: Date;
reviewHistoryPeriodEndDateTime: Date;
reviewHistoryPeriodStartDateTime: Date;
runDateTime: Date | null;
status: accessReviewHistoryStatus;
}
export interface accessReviewInstance extends entity {
endDateTime: Date;
fallbackReviewers: accessReviewReviewerScope[];
reviewers: accessReviewReviewerScope[];
scope: accessReviewScope;
startDateTime: Date;
status: string;
contactedReviewers: accessReviewReviewer[];
decisions: accessReviewInstanceDecisionItem[];
stages: accessReviewStage[];
}
export interface accessReviewReviewer extends entity {
createdDateTime: Date;
displayName: string;
userPrincipalName: string;
}
export interface accessReviewInstanceDecisionItem extends entity {
accessReviewId: string | null;
appliedBy: userIdentity;
appliedDateTime: Date;
applyResult: string;
decision: string;
justification: string;
principal: identity;
principalLink: string;
recommendation: string;
resource: accessReviewInstanceDecisionItemResource;
resourceLink: string;
reviewedBy: userIdentity;
reviewedDateTime: Date;
insights: governanceInsight[];
}
export interface accessReviewStage extends entity {
endDateTime: Date;
fallbackReviewers: accessReviewReviewerScope[];
reviewers: accessReviewReviewerScope[];
startDateTime: Date;
status: string;
decisions: accessReviewInstanceDecisionItem[];
}
export interface accessReviewScheduleDefinition extends entity {
additionalNotificationRecipients: accessReviewNotificationRecipientItem[];
createdBy: userIdentity;
createdDateTime: Date;
descriptionForAdmins: string;
descriptionForReviewers: string;
displayName: string;
fallbackReviewers: accessReviewReviewerScope[];
instanceEnumerationScope: accessReviewScope;
lastModifiedDateTime: Date;
reviewers: accessReviewReviewerScope[];
scope: accessReviewScope;
settings: accessReviewScheduleSettings;
stageSettings: accessReviewStageSettings[];
status: string;
instances: accessReviewInstance[];
}
export interface appConsentRequest extends entity {
appDisplayName: string;
appId: string | null;
pendingScopes: appConsentRequestScope[];
userConsentRequests: userConsentRequest[];
}
export interface userConsentRequest extends request {
reason: string;
approval: approval;
}
export interface approval extends entity {
stages: approvalStage[];
}
export interface approvalStage extends entity {
assignedToMe: boolean;
displayName: string;
justification: string;
reviewedBy: identity;
reviewedDateTime: Date;
reviewResult: string;
status: string;
}
export interface accessPackage extends entity {
createdDateTime: Date;
description: string;
displayName: string;
isHidden: boolean;
modifiedDateTime: Date;
accessPackagesIncompatibleWith: accessPackage[];
assignmentPolicies: accessPackageAssignmentPolicy[];
catalog: accessPackageCatalog;
incompatibleAccessPackages: accessPackage[];
incompatibleGroups: group[];
resourceRoleScopes: accessPackageResourceRoleScope[];
}
export interface accessPackageAssignmentPolicy extends entity {
allowedTargetScope: allowedTargetScope;
automaticRequestSettings: accessPackageAutomaticRequestSettings;
createdDateTime: Date;
description: string;
displayName: string;
expiration: expirationPattern;
modifiedDateTime: Date;
requestApprovalSettings: accessPackageAssignmentApprovalSettings;
requestorSettings: accessPackageAssignmentRequestorSettings;
reviewSettings: accessPackageAssignmentReviewSettings;
specificAllowedTargets: subjectSet[];
accessPackage: accessPackage;
catalog: accessPackageCatalog;
customExtensionStageSettings: customExtensionStageSetting[];
questions: accessPackageQuestion[];
}
export interface accessPackageAssignmentRequest extends entity {
answers: accessPackageAnswer[];
completedDateTime: Date;
createdDateTime: Date;
customExtensionCalloutInstances: customExtensionCalloutInstance[];
requestType: accessPackageRequestType;
schedule: entitlementManagementSchedule;
state: accessPackageRequestState;
status: string;
accessPackage: accessPackage;
assignment: accessPackageAssignment;
requestor: accessPackageSubject;
}
export interface accessPackageAssignment extends entity {
customExtensionCalloutInstances: customExtensionCalloutInstance[];
expiredDateTime: Date;
schedule: entitlementManagementSchedule;
state: accessPackageAssignmentState;
status: string;
accessPackage: accessPackage;
assignmentPolicy: accessPackageAssignmentPolicy;
target: accessPackageSubject;
}
export interface accessPackageCatalog extends entity {
catalogType: accessPackageCatalogType;
createdDateTime: Date;
description: string;
displayName: string;
isExternallyVisible: boolean;
modifiedDateTime: Date;
state: accessPackageCatalogState;
accessPackages: accessPackage[];
customWorkflowExtensions: customCalloutExtension[];
resourceRoles: accessPackageResourceRole[];
resources: accessPackageResource[];
resourceScopes: accessPackageResourceScope[];
}
export interface connectedOrganization extends entity {
createdDateTime: Date;
description: string;
displayName: string;
identitySources: identitySource[];
modifiedDateTime: Date;
state: connectedOrganizationState;
externalSponsors: directoryObject[];
internalSponsors: directoryObject[];
}
export interface accessPackageResourceEnvironment extends entity {
createdDateTime: Date;
description: string;
displayName: string;
isDefaultEnvironment: boolean;
modifiedDateTime: Date;
originId: string;
originSystem: string;
resources: accessPackageResource[];
}
export interface accessPackageResourceRequest extends entity {
createdDateTime: Date;
requestType: accessPackageRequestType;
state: accessPackageRequestState;
catalog: accessPackageCatalog;
resource: accessPackageResource;
}
export interface accessPackageResourceRoleScope extends entity {
createdDateTime: Date;
role: accessPackageResourceRole;
scope: accessPackageResourceScope;
}
export interface accessPackageResource extends entity {
createdDateTime: Date;
description: string;
displayName: string;
modifiedDateTime: Date;
originId: string;
originSystem: string;
environment: accessPackageResourceEnvironment;
roles: accessPackageResourceRole[];
scopes: accessPackageResourceScope[];
}
export interface entitlementManagementSettings extends entity {
durationUntilExternalUserDeletedAfterBlocked: number;
externalUserLifecycleAction: accessPackageExternalUserLifecycleAction;
}
export interface userSignInInsight extends governanceInsight {
lastSignInDateTime: Date;
}
export interface agreementFileData  {
data: Buffer;
}
export interface termsExpiration  {
frequency: number;
startDateTime: Date;
}
export interface agreement extends entity {
displayName: string;
isPerDeviceAcceptanceRequired: boolean;
isViewingBeforeAcceptanceRequired: boolean;
termsExpiration: termsExpiration;
userReacceptRequiredFrequency: number;
acceptances: agreementAcceptance[];
file: agreementFile;
files: agreementFileLocalization[];
}
export interface agreementFileProperties extends entity {
createdDateTime: Date;
displayName: string;
fileData: agreementFileData;
fileName: string;
isDefault: boolean;
isMajorVersion: boolean;
language: string;
}
export interface agreementFile extends agreementFileProperties {
localizations: agreementFileLocalization[];
}
export interface agreementFileLocalization extends agreementFileProperties {
versions: agreementFileVersion[];
}
export interface agreementFileVersion extends agreementFileProperties {
}
export interface conditionalAccessSessionControl  {
isEnabled: boolean;
}
export interface applicationEnforcedRestrictionsSessionControl extends conditionalAccessSessionControl {
}
export interface authenticationStrengthUsage  {
mfa: conditionalAccessPolicy[];
none: conditionalAccessPolicy[];
}
export interface cloudAppSecuritySessionControl extends conditionalAccessSessionControl {
cloudAppSecurityType: cloudAppSecuritySessionControlType;
}
export interface conditionalAccessExternalTenants  {
membershipKind: conditionalAccessExternalTenantsMembershipKind;
}
export interface conditionalAccessAllExternalTenants extends conditionalAccessExternalTenants {
}
export interface conditionalAccessApplications  {
applicationFilter: conditionalAccessFilter;
excludeApplications: string[] | null;
includeApplications: string[] | null;
includeAuthenticationContextClassReferences: string[] | null;
includeUserActions: string[] | null;
}
export interface conditionalAccessFilter  {
mode: filterMode | null;
rule: string | null;
}
export interface conditionalAccessClientApplications  {
excludeServicePrincipals: string[] | null;
includeServicePrincipals: string[] | null;
servicePrincipalFilter: conditionalAccessFilter;
}
export interface conditionalAccessConditionSet  {
applications: conditionalAccessApplications;
clientApplications: conditionalAccessClientApplications;
clientAppTypes: conditionalAccessClientApp[] | null;
devices: conditionalAccessDevices;
locations: conditionalAccessLocations;
platforms: conditionalAccessPlatforms;
servicePrincipalRiskLevels: riskLevel[] | null;
signInRiskLevels: riskLevel[] | null;
userRiskLevels: riskLevel[] | null;
users: conditionalAccessUsers;
}
export interface conditionalAccessDevices  {
deviceFilter: conditionalAccessFilter;
}
export interface conditionalAccessLocations  {
excludeLocations: string[] | null;
includeLocations: string[] | null;
}
export interface conditionalAccessPlatforms  {
excludePlatforms: conditionalAccessDevicePlatform[] | null;
includePlatforms: conditionalAccessDevicePlatform[] | null;
}
export interface conditionalAccessUsers  {
excludeGroups: string[] | null;
excludeGuestsOrExternalUsers: conditionalAccessGuestsOrExternalUsers;
excludeRoles: string[] | null;
excludeUsers: string[] | null;
includeGroups: string[] | null;
includeGuestsOrExternalUsers: conditionalAccessGuestsOrExternalUsers;
includeRoles: string[] | null;
includeUsers: string[] | null;
}
export interface conditionalAccessEnumeratedExternalTenants extends conditionalAccessExternalTenants {
members: string[] | null;
}
export interface conditionalAccessGrantControls  {
builtInControls: conditionalAccessGrantControl[] | null;
customAuthenticationFactors: string[] | null;
operator: string;
termsOfUse: string[] | null;
authenticationStrength: authenticationStrengthPolicy;
}
export interface conditionalAccessGuestsOrExternalUsers  {
externalTenants: conditionalAccessExternalTenants;
guestOrExternalUserTypes: conditionalAccessGuestOrExternalUserTypes | null;
}
export interface conditionalAccessPolicyDetail  {
conditions: conditionalAccessConditionSet | null;
grantControls: conditionalAccessGrantControls;
sessionControls: conditionalAccessSessionControls;
}
export interface conditionalAccessSessionControls  {
applicationEnforcedRestrictions: applicationEnforcedRestrictionsSessionControl;
cloudAppSecurity: cloudAppSecuritySessionControl;
disableResilienceDefaults: boolean;
persistentBrowser: persistentBrowserSessionControl;
signInFrequency: signInFrequencySessionControl;
}
export interface persistentBrowserSessionControl extends conditionalAccessSessionControl {
mode: persistentBrowserSessionMode;
}
export interface signInFrequencySessionControl extends conditionalAccessSessionControl {
authenticationType: signInFrequencyAuthenticationType;
frequencyInterval: signInFrequencyInterval;
type: signinFrequencyType;
value: number;
}
export interface ipRange  {
}
export interface iPv4CidrRange extends ipRange {
cidrAddress: string | null;
}
export interface iPv6CidrRange extends ipRange {
cidrAddress: string | null;
}
export interface riskServicePrincipalActivity  {
detail: riskDetail;
riskEventTypes: string[];
}
export interface riskUserActivity  {
detail: riskDetail;
riskEventTypes: string[];
}
export interface countryNamedLocation extends namedLocation {
countriesAndRegions: string[] | null;
countryLookupMethod: countryLookupMethodType;
includeUnknownCountriesAndRegions: boolean | null;
}
export interface identityProtectionRoot  {
riskDetections: riskDetection[];
riskyServicePrincipals: riskyServicePrincipal[];
riskyUsers: riskyUser[];
servicePrincipalRiskDetections: servicePrincipalRiskDetection[];
}
export interface riskDetection extends entity {
activity: activityType;
activityDateTime: Date;
additionalInfo: string;
correlationId: string;
detectedDateTime: Date;
detectionTimingType: riskDetectionTimingType;
ipAddress: string;
lastUpdatedDateTime: Date;
location: signInLocation;
requestId: string;
riskDetail: riskDetail;
riskEventType: string;
riskLevel: riskLevel;
riskState: riskState;
source: string;
tokenIssuerType: tokenIssuerType;
userDisplayName: string;
userId: string;
userPrincipalName: string;
}
export interface riskyServicePrincipal extends entity {
appId: string;
displayName: string;
isEnabled: boolean;
isProcessing: boolean;
riskDetail: riskDetail;
riskLastUpdatedDateTime: Date;
riskLevel: riskLevel;
riskState: riskState;
servicePrincipalType: string;
history: riskyServicePrincipalHistoryItem[];
}
export interface riskyUser extends entity {
isDeleted: boolean;
isProcessing: boolean;
riskDetail: riskDetail;
riskLastUpdatedDateTime: Date;
riskLevel: riskLevel;
riskState: riskState;
userDisplayName: string;
userPrincipalName: string;
history: riskyUserHistoryItem[];
}
export interface servicePrincipalRiskDetection extends entity {
activity: activityType;
activityDateTime: Date;
additionalInfo: string;
appId: string;
correlationId: string;
detectedDateTime: Date;
detectionTimingType: riskDetectionTimingType;
ipAddress: string;
keyIds: string[];
lastUpdatedDateTime: Date;
location: signInLocation;
requestId: string;
riskDetail: riskDetail;
riskEventType: string;
riskLevel: riskLevel;
riskState: riskState;
servicePrincipalDisplayName: string;
servicePrincipalId: string;
source: string;
tokenIssuerType: tokenIssuerType;
}
export interface ipNamedLocation extends namedLocation {
ipRanges: ipRange[] | null;
isTrusted: boolean | null;
}
export interface riskyServicePrincipalHistoryItem extends riskyServicePrincipal {
activity: riskServicePrincipalActivity;
initiatedBy: string;
}
export interface riskyUserHistoryItem extends riskyUser {
activity: riskUserActivity;
initiatedBy: string;
userId: string;
}
export interface accessPackageAnswer  {
displayValue: string;
answeredQuestion: accessPackageQuestion;
}
export interface accessPackageQuestion extends entity {
isAnswerEditable: boolean;
isRequired: boolean;
localizations: accessPackageLocalizedText[];
sequence: number;
text: string;
}
export interface accessPackageAnswerChoice  {
actualValue: string;
localizations: accessPackageLocalizedText[];
text: string;
}
export interface accessPackageLocalizedText  {
languageCode: string | null;
text: string;
}
export interface accessPackageAnswerString extends accessPackageAnswer {
value: string;
}
export interface accessPackageApprovalStage  {
durationBeforeAutomaticDenial: number;
durationBeforeEscalation: number;
escalationApprovers: subjectSet[];
fallbackEscalationApprovers: subjectSet[];
fallbackPrimaryApprovers: subjectSet[];
isApproverJustificationRequired: boolean;
isEscalationEnabled: boolean;
primaryApprovers: subjectSet[];
}
export interface accessPackageAssignmentApprovalSettings  {
isApprovalRequiredForAdd: boolean;
isApprovalRequiredForUpdate: boolean;
stages: accessPackageApprovalStage[];
}
export interface accessPackageAssignmentRequestCallbackData extends customExtensionData {
customExtensionStageInstanceDetail: string;
customExtensionStageInstanceId: string;
stage: accessPackageCustomExtensionStage;
state: string;
}
export interface accessPackageAssignmentRequestorSettings  {
allowCustomAssignmentSchedule: boolean;
enableOnBehalfRequestorsToAddAccess: boolean;
enableOnBehalfRequestorsToRemoveAccess: boolean;
enableOnBehalfRequestorsToUpdateAccess: boolean;
enableTargetsToSelfAddAccess: boolean;
enableTargetsToSelfRemoveAccess: boolean;
enableTargetsToSelfUpdateAccess: boolean;
onBehalfRequestors: subjectSet[];
}
export interface accessPackageAssignmentRequestRequirements  {
allowCustomAssignmentSchedule: boolean;
isApprovalRequiredForAdd: boolean;
isApprovalRequiredForUpdate: boolean;
policyDescription: string;
policyDisplayName: string;
policyId: string;
schedule: entitlementManagementSchedule;
questions: accessPackageQuestion[];
}
export interface entitlementManagementSchedule  {
expiration: expirationPattern;
recurrence: patternedRecurrence;
startDateTime: Date;
}
export interface accessPackageAssignmentReviewSettings  {
expirationBehavior: accessReviewExpirationBehavior;
fallbackReviewers: subjectSet[];
isEnabled: boolean;
isRecommendationEnabled: boolean;
isReviewerJustificationRequired: boolean;
isSelfReview: boolean;
primaryReviewers: subjectSet[];
schedule: entitlementManagementSchedule;
}
export interface accessPackageAutomaticRequestSettings  {
gracePeriodBeforeAccessRemoval: number;
removeAccessWhenTargetLeavesAllowedTargets: boolean;
requestAccessForAllowedTargets: boolean;
}
export interface attributeRuleMembers extends subjectSet {
description: string;
membershipRule: string;
}
export interface connectedOrganizationMembers extends subjectSet {
connectedOrganizationId: string;
description: string;
}
export interface connectionInfo  {
url: string;
}
export interface customExtensionCalloutInstance  {
customExtensionId: string;
detail: string;
externalCorrelationId: string;
id: string;
status: customExtensionCalloutInstanceStatus;
}
export interface expirationPattern  {
duration: number;
endDateTime: Date;
type: expirationPatternType;
}
export interface externalSponsors extends subjectSet {
}
export interface groupMembers extends subjectSet {
description: string;
groupId: string;
}
export interface internalSponsors extends subjectSet {
}
export interface requestorManager extends subjectSet {
managerLevel: number;
}
export interface singleServicePrincipal extends subjectSet {
description: string;
servicePrincipalId: string;
}
export interface singleUser extends subjectSet {
description: string;
userId: string;
}
export interface targetApplicationOwners extends subjectSet {
}
export interface targetManager extends subjectSet {
managerLevel: number;
}
export interface accessPackageSubject extends entity {
displayName: string;
email: string;
objectId: string;
onPremisesSecurityIdentifier: string;
principalName: string;
subjectType: accessPackageSubjectType;
connectedOrganization: connectedOrganization;
}
export interface customExtensionStageSetting extends entity {
stage: accessPackageCustomExtensionStage | null;
customExtension: customCalloutExtension;
}
export interface accessPackageAssignmentRequestWorkflowExtension extends customCalloutExtension {
callbackConfiguration: customExtensionCallbackConfiguration;
createdBy: string;
createdDateTime: Date;
lastModifiedBy: string;
lastModifiedDateTime: Date;
}
export interface accessPackageAssignmentWorkflowExtension extends customCalloutExtension {
callbackConfiguration: customExtensionCallbackConfiguration;
createdBy: string;
createdDateTime: Date;
lastModifiedBy: string;
lastModifiedDateTime: Date;
}
export interface accessPackageResourceRole extends entity {
description: string;
displayName: string;
originId: string;
originSystem: string;
resource: accessPackageResource;
}
export interface accessPackageResourceScope extends entity {
description: string;
displayName: string;
isRootScope: boolean;
originId: string;
originSystem: string;
resource: accessPackageResource;
}
export interface accessPackageMultipleChoiceQuestion extends accessPackageQuestion {
choices: accessPackageAnswerChoice[];
isMultipleSelectionAllowed: boolean;
}
export interface accessPackageTextInputQuestion extends accessPackageQuestion {
isSingleLineQuestion: boolean;
regexPattern: string;
}
export interface identitySource  {
}
export interface azureActiveDirectoryTenant extends identitySource {
displayName: string;
tenantId: string;
}
export interface crossCloudAzureActiveDirectoryTenant extends identitySource {
cloudInstance: string | null;
displayName: string;
tenantId: string;
}
export interface domainIdentitySource extends identitySource {
displayName: string;
domainName: string;
}
export interface externalDomainFederation extends identitySource {
displayName: string;
domainName: string;
issuerUri: string;
}
export interface deviceAndAppManagementAssignmentTarget  {
}
export interface allDevicesAssignmentTarget extends deviceAndAppManagementAssignmentTarget {
}
export interface allLicensedUsersAssignmentTarget extends deviceAndAppManagementAssignmentTarget {
}
export interface androidMinimumOperatingSystem  {
v10_0: boolean | null;
v11_0: boolean | null;
v4_0: boolean | null;
v4_0_3: boolean | null;
v4_1: boolean | null;
v4_2: boolean | null;
v4_3: boolean | null;
v4_4: boolean | null;
v5_0: boolean | null;
v5_1: boolean | null;
v6_0: boolean | null;
v7_0: boolean | null;
v7_1: boolean | null;
v8_0: boolean | null;
v8_1: boolean | null;
v9_0: boolean | null;
}
export interface appConfigurationSettingItem  {
appConfigKey: string | null;
appConfigKeyType: mdmAppConfigKeyType | null;
appConfigKeyValue: string | null;
}
export interface configurationManagerCollectionAssignmentTarget extends deviceAndAppManagementAssignmentTarget {
collectionId: string;
}
export interface groupAssignmentTarget extends deviceAndAppManagementAssignmentTarget {
groupId: string;
}
export interface exclusionGroupAssignmentTarget extends groupAssignmentTarget {
}
export interface fileEncryptionInfo  {
encryptionKey: Buffer;
fileDigest: Buffer;
fileDigestAlgorithm: string;
initializationVector: Buffer;
mac: Buffer;
macKey: Buffer;
profileIdentifier: string;
}
export interface iosDeviceType  {
iPad: boolean | null;
iPhoneAndIPod: boolean | null;
}
export interface mobileAppAssignmentSettings  {
}
export interface iosLobAppAssignmentSettings extends mobileAppAssignmentSettings {
isRemovable: boolean;
uninstallOnDeviceRemoval: boolean;
vpnConfigurationId: string;
}
export interface iosMinimumOperatingSystem  {
v10_0: boolean | null;
v11_0: boolean | null;
v12_0: boolean | null;
v13_0: boolean | null;
v14_0: boolean | null;
v15_0: boolean | null;
v8_0: boolean | null;
v9_0: boolean | null;
}
export interface iosStoreAppAssignmentSettings extends mobileAppAssignmentSettings {
isRemovable: boolean;
uninstallOnDeviceRemoval: boolean;
vpnConfigurationId: string;
}
export interface iosVppAppAssignmentSettings extends mobileAppAssignmentSettings {
useDeviceLicensing: boolean | null;
vpnConfigurationId: string;
}
export interface macOSIncludedApp  {
bundleId: string | null;
bundleVersion: string | null;
}
export interface macOsLobAppAssignmentSettings extends mobileAppAssignmentSettings {
uninstallOnDeviceRemoval: boolean;
}
export interface macOSLobChildApp  {
buildNumber: string;
bundleId: string;
versionNumber: string;
}
export interface macOSMinimumOperatingSystem  {
v10_10: boolean | null;
v10_11: boolean | null;
v10_12: boolean | null;
v10_13: boolean | null;
v10_14: boolean | null;
v10_15: boolean | null;
v10_7: boolean | null;
v10_8: boolean | null;
v10_9: boolean | null;
v11_0: boolean | null;
v12_0: boolean | null;
v13_0: boolean | null;
}
export interface microsoftStoreForBusinessAppAssignmentSettings extends mobileAppAssignmentSettings {
useDeviceContext: boolean | null;
}
export interface mimeContent  {
type: string;
value: Buffer;
}
export interface mobileAppInstallTimeSettings  {
deadlineDateTime: Date;
startDateTime: Date;
useLocalTime: boolean | null;
}
export interface vppLicensingType  {
supportsDeviceLicensing: boolean | null;
supportsUserLicensing: boolean | null;
}
export interface win32LobAppAssignmentSettings extends mobileAppAssignmentSettings {
deliveryOptimizationPriority: win32LobAppDeliveryOptimizationPriority | null;
installTimeSettings: mobileAppInstallTimeSettings;
notifications: win32LobAppNotification | null;
restartSettings: win32LobAppRestartSettings;
}
export interface win32LobAppRestartSettings  {
countdownDisplayBeforeRestartInMinutes: number | null;
gracePeriodInMinutes: number | null;
restartNotificationSnoozeDurationInMinutes: number;
}
export interface win32LobAppRule  {
ruleType: win32LobAppRuleType | null;
}
export interface win32LobAppFileSystemRule extends win32LobAppRule {
check32BitOn64System: boolean | null;
comparisonValue: string;
fileOrFolderName: string;
operationType: win32LobAppFileSystemOperationType | null;
operator: win32LobAppRuleOperator | null;
path: string;
}
export interface win32LobAppInstallExperience  {
deviceRestartBehavior: win32LobAppRestartBehavior | null;
runAsAccount: runAsAccountType | null;
}
export interface win32LobAppMsiInformation  {
packageType: win32LobAppMsiPackageType | null;
productCode: string;
productName: string;
productVersion: string;
publisher: string;
requiresReboot: boolean | null;
upgradeCode: string;
}
export interface win32LobAppPowerShellScriptRule extends win32LobAppRule {
comparisonValue: string;
displayName: string;
enforceSignatureCheck: boolean | null;
operationType: win32LobAppPowerShellScriptRuleOperationType | null;
operator: win32LobAppRuleOperator | null;
runAs32Bit: boolean | null;
runAsAccount: runAsAccountType;
scriptContent: string;
}
export interface win32LobAppProductCodeRule extends win32LobAppRule {
productCode: string;
productVersion: string;
productVersionOperator: win32LobAppRuleOperator | null;
}
export interface win32LobAppRegistryRule extends win32LobAppRule {
check32BitOn64System: boolean | null;
comparisonValue: string;
keyPath: string;
operationType: win32LobAppRegistryRuleOperationType | null;
operator: win32LobAppRuleOperator | null;
valueName: string;
}
export interface win32LobAppReturnCode  {
returnCode: number | null;
type: win32LobAppReturnCodeType | null;
}
export interface windowsAppXAppAssignmentSettings extends mobileAppAssignmentSettings {
useDeviceContext: boolean | null;
}
export interface windowsMinimumOperatingSystem  {
v10_0: boolean | null;
v8_0: boolean | null;
v8_1: boolean | null;
}
export interface windowsUniversalAppXAppAssignmentSettings extends mobileAppAssignmentSettings {
useDeviceContext: boolean | null;
}
export interface mobileApp extends entity {
createdDateTime: Date | null;
description: string;
developer: string;
displayName: string;
informationUrl: string;
isFeatured: boolean | null;
largeIcon: mimeContent;
lastModifiedDateTime: Date | null;
notes: string;
owner: string;
privacyInformationUrl: string;
publisher: string;
publishingState: mobileAppPublishingState | null;
assignments: mobileAppAssignment[];
categories: mobileAppCategory[];
}
export interface mobileLobApp extends mobileApp {
committedContentVersion: string;
fileName: string;
size: number | null;
contentVersions: mobileAppContent[];
}
export interface androidLobApp extends mobileLobApp {
minimumSupportedOperatingSystem: androidMinimumOperatingSystem;
packageId: string;
versionCode: string;
versionName: string;
}
export interface androidStoreApp extends mobileApp {
appStoreUrl: string;
minimumSupportedOperatingSystem: androidMinimumOperatingSystem;
packageId: string;
}
export interface deviceAppManagement extends entity {
isEnabledForMicrosoftStoreForBusiness: boolean | null;
microsoftStoreForBusinessLanguage: string;
microsoftStoreForBusinessLastCompletedApplicationSyncTime: Date | null;
microsoftStoreForBusinessLastSuccessfulSyncDateTime: Date | null;
managedEBooks: managedEBook[];
mobileAppCategories: mobileAppCategory[];
mobileAppConfigurations: managedDeviceMobileAppConfiguration[];
mobileApps: mobileApp[];
vppTokens: vppToken[];
androidManagedAppProtections: androidManagedAppProtection[];
defaultManagedAppProtections: defaultManagedAppProtection[];
iosManagedAppProtections: iosManagedAppProtection[];
managedAppPolicies: managedAppPolicy[];
managedAppRegistrations: managedAppRegistration[];
managedAppStatuses: managedAppStatus[];
mdmWindowsInformationProtectionPolicies: mdmWindowsInformationProtectionPolicy[];
targetedManagedAppConfigurations: targetedManagedAppConfiguration[];
windowsInformationProtectionPolicies: windowsInformationProtectionPolicy[];
}
export interface managedEBook extends entity {
createdDateTime: Date | null;
description: string;
displayName: string | null;
informationUrl: string;
largeCover: mimeContent;
lastModifiedDateTime: Date | null;
privacyInformationUrl: string;
publishedDateTime: Date | null;
publisher: string;
assignments: managedEBookAssignment[];
deviceStates: deviceInstallState[];
installSummary: eBookInstallSummary;
userStateSummary: userInstallStateSummary[];
}
export interface mobileAppCategory extends entity {
displayName: string;
lastModifiedDateTime: Date | null;
}
export interface managedDeviceMobileAppConfiguration extends entity {
createdDateTime: Date | null;
description: string;
displayName: string | null;
lastModifiedDateTime: Date | null;
targetedMobileApps: string[];
version: number | null;
assignments: managedDeviceMobileAppConfigurationAssignment[];
deviceStatuses: managedDeviceMobileAppConfigurationDeviceStatus[];
deviceStatusSummary: managedDeviceMobileAppConfigurationDeviceSummary;
userStatuses: managedDeviceMobileAppConfigurationUserStatus[];
userStatusSummary: managedDeviceMobileAppConfigurationUserSummary;
}
export interface vppToken extends entity {
appleId: string;
automaticallyUpdateApps: boolean | null;
countryOrRegion: string;
expirationDateTime: Date | null;
lastModifiedDateTime: Date | null;
lastSyncDateTime: Date | null;
lastSyncStatus: vppTokenSyncStatus | null;
organizationName: string;
state: vppTokenState | null;
token: string;
vppTokenAccountType: vppTokenAccountType | null;
}
export interface managedAppPolicy extends entity {
createdDateTime: Date | null;
description: string;
displayName: string | null;
lastModifiedDateTime: Date | null;
version: string;
}
export interface managedAppProtection extends managedAppPolicy {
allowedDataStorageLocations: managedAppDataStorageLocation[] | null;
allowedInboundDataTransferSources: managedAppDataTransferLevel | null;
allowedOutboundClipboardSharingLevel: managedAppClipboardSharingLevel | null;
allowedOutboundDataTransferDestinations: managedAppDataTransferLevel | null;
contactSyncBlocked: boolean | null;
dataBackupBlocked: boolean | null;
deviceComplianceRequired: boolean | null;
disableAppPinIfDevicePinIsSet: boolean | null;
fingerprintBlocked: boolean | null;
managedBrowser: managedBrowserType | null;
managedBrowserToOpenLinksRequired: boolean | null;
maximumPinRetries: number | null;
minimumPinLength: number | null;
minimumRequiredAppVersion: string;
minimumRequiredOsVersion: string;
minimumWarningAppVersion: string;
minimumWarningOsVersion: string;
organizationalCredentialsRequired: boolean | null;
periodBeforePinReset: number | null;
periodOfflineBeforeAccessCheck: number | null;
periodOfflineBeforeWipeIsEnforced: number | null;
periodOnlineBeforeAccessCheck: number | null;
pinCharacterSet: managedAppPinCharacterSet | null;
pinRequired: boolean | null;
printBlocked: boolean | null;
saveAsBlocked: boolean | null;
simplePinBlocked: boolean | null;
}
export interface targetedManagedAppProtection extends managedAppProtection {
isAssigned: boolean | null;
assignments: targetedManagedAppPolicyAssignment[];
}
export interface androidManagedAppProtection extends targetedManagedAppProtection {
customBrowserDisplayName: string;
customBrowserPackageId: string;
deployedAppCount: number | null;
disableAppEncryptionIfDeviceEncryptionIsEnabled: boolean | null;
encryptAppData: boolean | null;
minimumRequiredPatchVersion: string;
minimumWarningPatchVersion: string;
screenCaptureBlocked: boolean | null;
apps: managedMobileApp[];
deploymentSummary: managedAppPolicyDeploymentSummary;
}
export interface defaultManagedAppProtection extends managedAppProtection {
appDataEncryptionType: managedAppDataEncryptionType | null;
customSettings: keyValuePair[] | null;
deployedAppCount: number | null;
disableAppEncryptionIfDeviceEncryptionIsEnabled: boolean | null;
encryptAppData: boolean | null;
faceIdBlocked: boolean | null;
minimumRequiredPatchVersion: string;
minimumRequiredSdkVersion: string;
minimumWarningPatchVersion: string;
screenCaptureBlocked: boolean | null;
apps: managedMobileApp[];
deploymentSummary: managedAppPolicyDeploymentSummary;
}
export interface iosManagedAppProtection extends targetedManagedAppProtection {
appDataEncryptionType: managedAppDataEncryptionType | null;
customBrowserProtocol: string;
deployedAppCount: number | null;
faceIdBlocked: boolean | null;
minimumRequiredSdkVersion: string;
apps: managedMobileApp[];
deploymentSummary: managedAppPolicyDeploymentSummary;
}
export interface managedAppStatus extends entity {
displayName: string;
version: string;
}
export interface windowsInformationProtection extends managedAppPolicy {
azureRightsManagementServicesAllowed: boolean | null;
dataRecoveryCertificate: windowsInformationProtectionDataRecoveryCertificate;
enforcementLevel: windowsInformationProtectionEnforcementLevel | null;
enterpriseDomain: string;
enterpriseInternalProxyServers: windowsInformationProtectionResourceCollection[];
enterpriseIPRanges: windowsInformationProtectionIPRangeCollection[];
enterpriseIPRangesAreAuthoritative: boolean | null;
enterpriseNetworkDomainNames: windowsInformationProtectionResourceCollection[];
enterpriseProtectedDomainNames: windowsInformationProtectionResourceCollection[];
enterpriseProxiedDomains: windowsInformationProtectionProxiedDomainCollection[];
enterpriseProxyServers: windowsInformationProtectionResourceCollection[];
enterpriseProxyServersAreAuthoritative: boolean | null;
exemptApps: windowsInformationProtectionApp[];
iconsVisible: boolean | null;
indexingEncryptedStoresOrItemsBlocked: boolean | null;
isAssigned: boolean | null;
neutralDomainResources: windowsInformationProtectionResourceCollection[];
protectedApps: windowsInformationProtectionApp[];
protectionUnderLockConfigRequired: boolean | null;
revokeOnUnenrollDisabled: boolean | null;
rightsManagementServicesTemplateId: string;
smbAutoEncryptedFileExtensions: windowsInformationProtectionResourceCollection[];
assignments: targetedManagedAppPolicyAssignment[];
exemptAppLockerFiles: windowsInformationProtectionAppLockerFile[];
protectedAppLockerFiles: windowsInformationProtectionAppLockerFile[];
}
export interface mdmWindowsInformationProtectionPolicy extends windowsInformationProtection {
}
export interface managedAppConfiguration extends managedAppPolicy {
customSettings: keyValuePair[] | null;
}
export interface targetedManagedAppConfiguration extends managedAppConfiguration {
deployedAppCount: number | null;
isAssigned: boolean | null;
apps: managedMobileApp[];
assignments: targetedManagedAppPolicyAssignment[];
deploymentSummary: managedAppPolicyDeploymentSummary;
}
export interface windowsInformationProtectionPolicy extends windowsInformationProtection {
daysWithoutContactBeforeUnenroll: number | null;
mdmEnrollmentUrl: string;
minutesOfInactivityBeforeDeviceLock: number | null;
numberOfPastPinsRemembered: number | null;
passwordMaximumAttemptCount: number | null;
pinExpirationDays: number | null;
pinLowercaseLetters: windowsInformationProtectionPinCharacterRequirements | null;
pinMinimumLength: number | null;
pinSpecialCharacters: windowsInformationProtectionPinCharacterRequirements | null;
pinUppercaseLetters: windowsInformationProtectionPinCharacterRequirements | null;
revokeOnMdmHandoffDisabled: boolean | null;
windowsHelloForBusinessBlocked: boolean | null;
}
export interface enterpriseCodeSigningCertificate extends entity {
content: Buffer;
expirationDateTime: Date | null;
issuer: string;
issuerName: string;
status: certificateStatus | null;
subject: string;
subjectName: string;
uploadDateTime: Date | null;
}
export interface iosiPadOSWebClip extends mobileApp {
appUrl: string;
useManagedBrowser: boolean | null;
}
export interface iosLobApp extends mobileLobApp {
applicableDeviceType: iosDeviceType | null;
buildNumber: string;
bundleId: string;
expirationDateTime: Date;
minimumSupportedOperatingSystem: iosMinimumOperatingSystem;
versionNumber: string;
}
export interface iosLobAppProvisioningConfigurationAssignment extends entity {
target: deviceAndAppManagementAssignmentTarget;
}
export interface iosMobileAppConfiguration extends managedDeviceMobileAppConfiguration {
encodedSettingXml: Buffer;
settings: appConfigurationSettingItem[];
}
export interface iosStoreApp extends mobileApp {
applicableDeviceType: iosDeviceType | null;
appStoreUrl: string;
bundleId: string;
minimumSupportedOperatingSystem: iosMinimumOperatingSystem;
}
export interface iosVppApp extends mobileApp {
applicableDeviceType: iosDeviceType;
appStoreUrl: string;
bundleId: string;
licensingType: vppLicensingType;
releaseDateTime: Date;
totalLicenseCount: number | null;
usedLicenseCount: number | null;
vppTokenAccountType: vppTokenAccountType | null;
vppTokenAppleId: string;
vppTokenOrganizationName: string;
}
export interface macOSDmgApp extends mobileLobApp {
ignoreVersionDetection: boolean | null;
includedApps: macOSIncludedApp[] | null;
minimumSupportedOperatingSystem: macOSMinimumOperatingSystem;
primaryBundleId: string | null;
primaryBundleVersion: string | null;
}
export interface macOSLobApp extends mobileLobApp {
buildNumber: string;
bundleId: string;
childApps: macOSLobChildApp[];
ignoreVersionDetection: boolean | null;
installAsManaged: boolean | null;
md5Hash: string[];
md5HashChunkSize: number | null;
minimumSupportedOperatingSystem: macOSMinimumOperatingSystem;
versionNumber: string;
}
export interface macOSMicrosoftDefenderApp extends mobileApp {
}
export interface macOSMicrosoftEdgeApp extends mobileApp {
channel: microsoftEdgeChannel | null;
}
export interface macOSOfficeSuiteApp extends mobileApp {
}
export interface managedApp extends mobileApp {
appAvailability: managedAppAvailability | null;
version: string;
}
export interface managedMobileLobApp extends managedApp {
committedContentVersion: string;
fileName: string;
size: number | null;
contentVersions: mobileAppContent[];
}
export interface managedAndroidLobApp extends managedMobileLobApp {
minimumSupportedOperatingSystem: androidMinimumOperatingSystem;
packageId: string;
versionCode: string;
versionName: string;
}
export interface managedAndroidStoreApp extends managedApp {
appStoreUrl: string | null;
minimumSupportedOperatingSystem: androidMinimumOperatingSystem | null;
packageId: string;
}
export interface managedDeviceMobileAppConfigurationAssignment extends entity {
target: deviceAndAppManagementAssignmentTarget;
}
export interface managedDeviceMobileAppConfigurationDeviceStatus extends entity {
complianceGracePeriodExpirationDateTime: Date | null;
deviceDisplayName: string;
deviceModel: string;
lastReportedDateTime: Date | null;
status: complianceStatus | null;
userName: string;
userPrincipalName: string;
}
export interface managedDeviceMobileAppConfigurationDeviceSummary extends entity {
configurationVersion: number | null;
errorCount: number | null;
failedCount: number | null;
lastUpdateDateTime: Date | null;
notApplicableCount: number | null;
pendingCount: number | null;
successCount: number | null;
}
export interface managedDeviceMobileAppConfigurationUserStatus extends entity {
devicesCount: number | null;
lastReportedDateTime: Date | null;
status: complianceStatus | null;
userDisplayName: string;
userPrincipalName: string;
}
export interface managedDeviceMobileAppConfigurationUserSummary extends entity {
configurationVersion: number | null;
errorCount: number | null;
failedCount: number | null;
lastUpdateDateTime: Date | null;
notApplicableCount: number | null;
pendingCount: number | null;
successCount: number | null;
}
export interface managedIOSLobApp extends managedMobileLobApp {
applicableDeviceType: iosDeviceType | null;
buildNumber: string;
bundleId: string;
expirationDateTime: Date;
minimumSupportedOperatingSystem: iosMinimumOperatingSystem;
versionNumber: string;
}
export interface managedIOSStoreApp extends managedApp {
applicableDeviceType: iosDeviceType | null;
appStoreUrl: string | null;
bundleId: string;
minimumSupportedOperatingSystem: iosMinimumOperatingSystem | null;
}
export interface mobileAppContent extends entity {
containedApps: mobileContainedApp[];
files: mobileAppContentFile[];
}
export interface microsoftStoreForBusinessApp extends mobileApp {
licenseType: microsoftStoreForBusinessLicenseType | null;
packageIdentityName: string;
productKey: string;
totalLicenseCount: number | null;
usedLicenseCount: number | null;
}
export interface mobileAppAssignment extends entity {
intent: installIntent | null;
settings: mobileAppAssignmentSettings;
target: deviceAndAppManagementAssignmentTarget;
}
export interface mobileContainedApp extends entity {
}
export interface mobileAppContentFile extends entity {
azureStorageUri: string;
azureStorageUriExpirationDateTime: Date;
createdDateTime: Date | null;
isCommitted: boolean | null;
manifest: Buffer;
name: string;
size: number | null;
sizeEncrypted: number | null;
uploadState: mobileAppContentFileUploadState | null;
}
export interface webApp extends mobileApp {
appUrl: string;
useManagedBrowser: boolean | null;
}
export interface win32LobApp extends mobileLobApp {
applicableArchitectures: windowsArchitecture | null;
installCommandLine: string;
installExperience: win32LobAppInstallExperience;
minimumCpuSpeedInMHz: number;
minimumFreeDiskSpaceInMB: number;
minimumMemoryInMB: number;
minimumNumberOfProcessors: number;
minimumSupportedWindowsRelease: string;
msiInformation: win32LobAppMsiInformation;
returnCodes: win32LobAppReturnCode[];
rules: win32LobAppRule[];
setupFilePath: string;
uninstallCommandLine: string;
}
export interface windowsAppX extends mobileLobApp {
applicableArchitectures: windowsArchitecture | null;
identityName: string;
identityPublisherHash: string | null;
identityResourceIdentifier: string;
identityVersion: string;
isBundle: boolean | null;
minimumSupportedOperatingSystem: windowsMinimumOperatingSystem | null;
}
export interface windowsMicrosoftEdgeApp extends mobileApp {
channel: microsoftEdgeChannel | null;
displayLanguageLocale: string;
}
export interface windowsMobileMSI extends mobileLobApp {
commandLine: string;
ignoreVersionDetection: boolean | null;
productCode: string;
productVersion: string;
}
export interface windowsUniversalAppX extends mobileLobApp {
applicableArchitectures: windowsArchitecture | null;
applicableDeviceTypes: windowsDeviceType | null;
identityName: string;
identityPublisherHash: string | null;
identityResourceIdentifier: string;
identityVersion: string;
isBundle: boolean | null;
minimumSupportedOperatingSystem: windowsMinimumOperatingSystem | null;
committedContainedApps: mobileContainedApp[];
}
export interface windowsUniversalAppXContainedApp extends mobileContainedApp {
appUserModelId: string;
}
export interface windowsWebApp extends mobileApp {
appUrl: string;
}
export interface auditActor  {
applicationDisplayName: string;
applicationId: string;
auditActorType: string;
ipAddress: string;
servicePrincipalName: string;
userId: string;
userPermissions: string[];
userPrincipalName: string;
}
export interface auditProperty  {
displayName: string;
newValue: string;
oldValue: string;
}
export interface auditResource  {
auditResourceType: string;
displayName: string;
modifiedProperties: auditProperty[];
resourceId: string;
}
export interface auditEvent extends entity {
activity: string;
activityDateTime: Date | null;
activityOperationType: string;
activityResult: string;
activityType: string;
actor: auditActor;
category: string;
componentName: string;
correlationId: string | null;
displayName: string;
resources: auditResource[];
}
export interface deviceManagement extends entity {
intuneAccountId: string | null;
settings: deviceManagementSettings;
intuneBrand: intuneBrand;
deviceProtectionOverview: deviceProtectionOverview;
subscriptionState: deviceManagementSubscriptionState | null;
userExperienceAnalyticsSettings: userExperienceAnalyticsSettings;
windowsMalwareOverview: windowsMalwareOverview;
termsAndConditions: termsAndConditions[];
auditEvents: auditEvent[];
deviceCompliancePolicies: deviceCompliancePolicy[];
deviceCompliancePolicyDeviceStateSummary: deviceCompliancePolicyDeviceStateSummary;
deviceCompliancePolicySettingStateSummaries: deviceCompliancePolicySettingStateSummary[];
deviceConfigurationDeviceStateSummaries: deviceConfigurationDeviceStateSummary;
deviceConfigurations: deviceConfiguration[];
iosUpdateStatuses: iosUpdateDeviceStatus[];
softwareUpdateStatusSummary: softwareUpdateStatusSummary;
complianceManagementPartners: complianceManagementPartner[];
conditionalAccessSettings: onPremisesConditionalAccessSettings;
deviceCategories: deviceCategory[];
deviceEnrollmentConfigurations: deviceEnrollmentConfiguration[];
deviceManagementPartners: deviceManagementPartner[];
exchangeConnectors: deviceManagementExchangeConnector[];
mobileThreatDefenseConnectors: mobileThreatDefenseConnector[];
applePushNotificationCertificate: applePushNotificationCertificate;
detectedApps: detectedApp[];
managedDeviceOverview: managedDeviceOverview;
managedDevices: managedDevice[];
mobileAppTroubleshootingEvents: mobileAppTroubleshootingEvent[];
userExperienceAnalyticsAppHealthApplicationPerformance: userExperienceAnalyticsAppHealthApplicationPerformance[];
userExperienceAnalyticsAppHealthApplicationPerformanceByAppVersionDetails: userExperienceAnalyticsAppHealthAppPerformanceByAppVersionDetails[];
userExperienceAnalyticsAppHealthApplicationPerformanceByAppVersionDeviceId: userExperienceAnalyticsAppHealthAppPerformanceByAppVersionDeviceId[];
userExperienceAnalyticsAppHealthApplicationPerformanceByOSVersion: userExperienceAnalyticsAppHealthAppPerformanceByOSVersion[];
userExperienceAnalyticsAppHealthDeviceModelPerformance: userExperienceAnalyticsAppHealthDeviceModelPerformance[];
userExperienceAnalyticsAppHealthDevicePerformance: userExperienceAnalyticsAppHealthDevicePerformance[];
userExperienceAnalyticsAppHealthDevicePerformanceDetails: userExperienceAnalyticsAppHealthDevicePerformanceDetails[];
userExperienceAnalyticsAppHealthOSVersionPerformance: userExperienceAnalyticsAppHealthOSVersionPerformance[];
userExperienceAnalyticsAppHealthOverview: userExperienceAnalyticsCategory;
userExperienceAnalyticsBaselines: userExperienceAnalyticsBaseline[];
userExperienceAnalyticsCategories: userExperienceAnalyticsCategory[];
userExperienceAnalyticsDevicePerformance: userExperienceAnalyticsDevicePerformance[];
userExperienceAnalyticsDeviceScores: userExperienceAnalyticsDeviceScores[];
userExperienceAnalyticsDeviceStartupHistory: userExperienceAnalyticsDeviceStartupHistory[];
userExperienceAnalyticsDeviceStartupProcesses: userExperienceAnalyticsDeviceStartupProcess[];
userExperienceAnalyticsDeviceStartupProcessPerformance: userExperienceAnalyticsDeviceStartupProcessPerformance[];
userExperienceAnalyticsMetricHistory: userExperienceAnalyticsMetricHistory[];
userExperienceAnalyticsModelScores: userExperienceAnalyticsModelScores[];
userExperienceAnalyticsOverview: userExperienceAnalyticsOverview;
userExperienceAnalyticsScoreHistory: userExperienceAnalyticsScoreHistory[];
userExperienceAnalyticsWorkFromAnywhereHardwareReadinessMetric: userExperienceAnalyticsWorkFromAnywhereHardwareReadinessMetric;
userExperienceAnalyticsWorkFromAnywhereMetrics: userExperienceAnalyticsWorkFromAnywhereMetric[];
userExperienceAnalyticsWorkFromAnywhereModelPerformance: userExperienceAnalyticsWorkFromAnywhereModelPerformance[];
windowsMalwareInformation: windowsMalwareInformation[];
importedWindowsAutopilotDeviceIdentities: importedWindowsAutopilotDeviceIdentity[];
windowsAutopilotDeviceIdentities: windowsAutopilotDeviceIdentity[];
notificationMessageTemplates: notificationMessageTemplate[];
resourceOperations: resourceOperation[];
roleAssignments: deviceAndAppManagementRoleAssignment[];
roleDefinitions: roleDefinition[];
remoteAssistancePartners: remoteAssistancePartner[];
reports: deviceManagementReports;
telecomExpenseManagementPartners: telecomExpenseManagementPartner[];
troubleshootingEvents: deviceManagementTroubleshootingEvent[];
windowsInformationProtectionAppLearningSummaries: windowsInformationProtectionAppLearningSummary[];
windowsInformationProtectionNetworkLearningSummaries: windowsInformationProtectionNetworkLearningSummary[];
}
export interface termsAndConditions extends entity {
acceptanceStatement: string;
bodyText: string;
createdDateTime: Date | null;
description: string;
displayName: string | null;
lastModifiedDateTime: Date | null;
title: string;
version: number | null;
acceptanceStatuses: termsAndConditionsAcceptanceStatus[];
assignments: termsAndConditionsAssignment[];
}
export interface deviceManagementSettings  {
deviceComplianceCheckinThresholdDays: number | null;
isScheduledActionEnabled: boolean | null;
secureByDefault: boolean | null;
}
export interface deviceCompliancePolicy extends entity {
createdDateTime: Date | null;
description: string;
displayName: string | null;
lastModifiedDateTime: Date | null;
version: number | null;
assignments: deviceCompliancePolicyAssignment[];
deviceSettingStateSummaries: settingStateDeviceSummary[];
deviceStatuses: deviceComplianceDeviceStatus[];
deviceStatusOverview: deviceComplianceDeviceOverview;
scheduledActionsForRule: deviceComplianceScheduledActionForRule[];
userStatuses: deviceComplianceUserStatus[];
userStatusOverview: deviceComplianceUserOverview;
}
export interface deviceCompliancePolicyDeviceStateSummary extends entity {
compliantDeviceCount: number | null;
configManagerCount: number | null;
conflictDeviceCount: number | null;
errorDeviceCount: number | null;
inGracePeriodCount: number | null;
nonCompliantDeviceCount: number | null;
notApplicableDeviceCount: number | null;
remediatedDeviceCount: number | null;
unknownDeviceCount: number | null;
}
export interface deviceCompliancePolicySettingStateSummary extends entity {
compliantDeviceCount: number | null;
conflictDeviceCount: number | null;
errorDeviceCount: number | null;
nonCompliantDeviceCount: number | null;
notApplicableDeviceCount: number | null;
platformType: policyPlatformType | null;
remediatedDeviceCount: number | null;
setting: string;
settingName: string;
unknownDeviceCount: number | null;
deviceComplianceSettingStates: deviceComplianceSettingState[];
}
export interface deviceConfigurationDeviceStateSummary extends entity {
compliantDeviceCount: number | null;
conflictDeviceCount: number | null;
errorDeviceCount: number | null;
nonCompliantDeviceCount: number | null;
notApplicableDeviceCount: number | null;
remediatedDeviceCount: number | null;
unknownDeviceCount: number | null;
}
export interface deviceConfiguration extends entity {
createdDateTime: Date | null;
description: string;
displayName: string | null;
lastModifiedDateTime: Date | null;
version: number | null;
assignments: deviceConfigurationAssignment[];
deviceSettingStateSummaries: settingStateDeviceSummary[];
deviceStatuses: deviceConfigurationDeviceStatus[];
deviceStatusOverview: deviceConfigurationDeviceOverview;
userStatuses: deviceConfigurationUserStatus[];
userStatusOverview: deviceConfigurationUserOverview;
}
export interface iosUpdateDeviceStatus extends entity {
complianceGracePeriodExpirationDateTime: Date | null;
deviceDisplayName: string;
deviceId: string;
deviceModel: string;
installStatus: iosUpdatesInstallStatus | null;
lastReportedDateTime: Date | null;
osVersion: string;
status: complianceStatus | null;
userId: string;
userName: string;
userPrincipalName: string;
}
export interface softwareUpdateStatusSummary extends entity {
compliantDeviceCount: number | null;
compliantUserCount: number | null;
conflictDeviceCount: number | null;
conflictUserCount: number | null;
displayName: string;
errorDeviceCount: number | null;
errorUserCount: number | null;
nonCompliantDeviceCount: number | null;
nonCompliantUserCount: number | null;
notApplicableDeviceCount: number | null;
notApplicableUserCount: number | null;
remediatedDeviceCount: number | null;
remediatedUserCount: number | null;
unknownDeviceCount: number | null;
unknownUserCount: number | null;
}
export interface intuneBrand  {
contactITEmailAddress: string;
contactITName: string;
contactITNotes: string;
contactITPhoneNumber: string;
darkBackgroundLogo: mimeContent;
displayName: string;
lightBackgroundLogo: mimeContent;
onlineSupportSiteName: string;
onlineSupportSiteUrl: string;
privacyUrl: string;
showDisplayNameNextToLogo: boolean | null;
showLogo: boolean | null;
showNameNextToLogo: boolean | null;
themeColor: rgbColor;
}
export interface complianceManagementPartner extends entity {
androidEnrollmentAssignments: complianceManagementPartnerAssignment[];
androidOnboarded: boolean | null;
displayName: string;
iosEnrollmentAssignments: complianceManagementPartnerAssignment[];
iosOnboarded: boolean | null;
lastHeartbeatDateTime: Date | null;
macOsEnrollmentAssignments: complianceManagementPartnerAssignment[];
macOsOnboarded: boolean | null;
partnerState: deviceManagementPartnerTenantState | null;
}
export interface onPremisesConditionalAccessSettings extends entity {
enabled: boolean | null;
excludedGroups: string[] | null;
includedGroups: string[] | null;
overrideDefaultRule: boolean | null;
}
export interface deviceCategory extends entity {
description: string;
displayName: string;
}
export interface deviceEnrollmentConfiguration extends entity {
createdDateTime: Date | null;
description: string;
displayName: string;
lastModifiedDateTime: Date | null;
priority: number | null;
version: number | null;
assignments: enrollmentConfigurationAssignment[];
}
export interface deviceManagementPartner extends entity {
displayName: string;
groupsRequiringPartnerEnrollment: deviceManagementPartnerAssignment[];
isConfigured: boolean | null;
lastHeartbeatDateTime: Date | null;
partnerAppType: deviceManagementPartnerAppType | null;
partnerState: deviceManagementPartnerTenantState | null;
singleTenantAppId: string;
whenPartnerDevicesWillBeMarkedAsNonCompliantDateTime: Date;
whenPartnerDevicesWillBeRemovedDateTime: Date;
}
export interface deviceManagementExchangeConnector extends entity {
connectorServerName: string;
exchangeAlias: string;
exchangeConnectorType: deviceManagementExchangeConnectorType | null;
exchangeOrganization: string;
lastSyncDateTime: Date | null;
primarySmtpAddress: string;
serverName: string;
status: deviceManagementExchangeConnectorStatus | null;
version: string;
}
export interface mobileThreatDefenseConnector extends entity {
allowPartnerToCollectIOSApplicationMetadata: boolean | null;
allowPartnerToCollectIOSPersonalApplicationMetadata: boolean | null;
androidDeviceBlockedOnMissingPartnerData: boolean | null;
androidEnabled: boolean | null;
androidMobileApplicationManagementEnabled: boolean | null;
iosDeviceBlockedOnMissingPartnerData: boolean | null;
iosEnabled: boolean | null;
iosMobileApplicationManagementEnabled: boolean | null;
lastHeartbeatDateTime: Date | null;
microsoftDefenderForEndpointAttachEnabled: boolean | null;
partnerState: mobileThreatPartnerTenantState | null;
partnerUnresponsivenessThresholdInDays: number | null;
partnerUnsupportedOsVersionBlocked: boolean | null;
windowsDeviceBlockedOnMissingPartnerData: boolean | null;
windowsEnabled: boolean | null;
}
export interface deviceProtectionOverview  {
cleanDeviceCount: number | null;
criticalFailuresDeviceCount: number | null;
inactiveThreatAgentDeviceCount: number | null;
pendingFullScanDeviceCount: number | null;
pendingManualStepsDeviceCount: number | null;
pendingOfflineScanDeviceCount: number | null;
pendingQuickScanDeviceCount: number | null;
pendingRestartDeviceCount: number | null;
pendingSignatureUpdateDeviceCount: number | null;
totalReportedDeviceCount: number | null;
unknownStateThreatAgentDeviceCount: number | null;
}
export interface userExperienceAnalyticsSettings  {
configurationManagerDataConnectorConfigured: boolean | null;
}
export interface windowsMalwareOverview  {
malwareCategorySummary: windowsMalwareCategoryCount[];
malwareDetectedDeviceCount: number | null;
malwareExecutionStateSummary: windowsMalwareExecutionStateCount[];
malwareNameSummary: windowsMalwareNameCount[];
malwareSeveritySummary: windowsMalwareSeverityCount[];
malwareStateSummary: windowsMalwareStateCount[];
osVersionsSummary: osVersionCount[];
totalDistinctMalwareCount: number | null;
totalMalwareCount: number | null;
}
export interface applePushNotificationCertificate extends entity {
appleIdentifier: string;
certificate: string;
certificateSerialNumber: string;
certificateUploadFailureReason: string;
certificateUploadStatus: string;
expirationDateTime: Date | null;
lastModifiedDateTime: Date | null;
topicIdentifier: string;
}
export interface detectedApp extends entity {
deviceCount: number | null;
displayName: string;
platform: detectedAppPlatformType | null;
publisher: string;
sizeInByte: number | null;
version: string;
managedDevices: managedDevice[];
}
export interface managedDeviceOverview extends entity {
deviceExchangeAccessStateSummary: deviceExchangeAccessStateSummary;
deviceOperatingSystemSummary: deviceOperatingSystemSummary;
dualEnrolledDeviceCount: number | null;
enrolledDeviceCount: number | null;
mdmEnrolledCount: number | null;
}
export interface mobileAppTroubleshootingEvent extends entity {
appLogCollectionRequests: appLogCollectionRequest[];
}
export interface userExperienceAnalyticsAppHealthApplicationPerformance extends entity {
activeDeviceCount: number | null;
appCrashCount: number | null;
appDisplayName: string;
appHangCount: number | null;
appHealthScore: number | null;
appName: string;
appPublisher: string;
appUsageDuration: number | null;
meanTimeToFailureInMinutes: number | null;
}
export interface userExperienceAnalyticsAppHealthAppPerformanceByAppVersionDetails extends entity {
appCrashCount: number | null;
appDisplayName: string;
appName: string;
appPublisher: string;
appVersion: string;
deviceCountWithCrashes: number | null;
isLatestUsedVersion: boolean | null;
isMostUsedVersion: boolean | null;
}
export interface userExperienceAnalyticsAppHealthAppPerformanceByAppVersionDeviceId extends entity {
appCrashCount: number | null;
appDisplayName: string;
appName: string;
appPublisher: string;
appVersion: string;
deviceDisplayName: string;
deviceId: string;
processedDateTime: Date | null;
}
export interface userExperienceAnalyticsAppHealthAppPerformanceByOSVersion extends entity {
activeDeviceCount: number | null;
appCrashCount: number | null;
appDisplayName: string;
appName: string;
appPublisher: string;
appUsageDuration: number | null;
meanTimeToFailureInMinutes: number | null;
osBuildNumber: string;
osVersion: string;
}
export interface userExperienceAnalyticsAppHealthDeviceModelPerformance extends entity {
activeDeviceCount: number | null;
deviceManufacturer: string;
deviceModel: string;
healthStatus: userExperienceAnalyticsHealthState | null;
meanTimeToFailureInMinutes: number | null;
modelAppHealthScore: number | null;
}
export interface userExperienceAnalyticsAppHealthDevicePerformance extends entity {
appCrashCount: number | null;
appHangCount: number | null;
crashedAppCount: number | null;
deviceAppHealthScore: number | null;
deviceDisplayName: string;
deviceId: string;
deviceManufacturer: string;
deviceModel: string;
healthStatus: userExperienceAnalyticsHealthState | null;
meanTimeToFailureInMinutes: number | null;
processedDateTime: Date | null;
}
export interface userExperienceAnalyticsAppHealthDevicePerformanceDetails extends entity {
appDisplayName: string;
appPublisher: string;
appVersion: string;
deviceDisplayName: string;
deviceId: string;
eventDateTime: Date | null;
eventType: string;
}
export interface userExperienceAnalyticsAppHealthOSVersionPerformance extends entity {
activeDeviceCount: number | null;
meanTimeToFailureInMinutes: number | null;
osBuildNumber: string;
osVersion: string;
osVersionAppHealthScore: number | null;
}
export interface userExperienceAnalyticsCategory extends entity {
insights: userExperienceAnalyticsInsight[];
metricValues: userExperienceAnalyticsMetric[];
}
export interface userExperienceAnalyticsBaseline extends entity {
createdDateTime: Date | null;
displayName: string;
isBuiltIn: boolean | null;
appHealthMetrics: userExperienceAnalyticsCategory;
batteryHealthMetrics: userExperienceAnalyticsCategory;
bestPracticesMetrics: userExperienceAnalyticsCategory;
deviceBootPerformanceMetrics: userExperienceAnalyticsCategory;
rebootAnalyticsMetrics: userExperienceAnalyticsCategory;
resourcePerformanceMetrics: userExperienceAnalyticsCategory;
workFromAnywhereMetrics: userExperienceAnalyticsCategory;
}
export interface userExperienceAnalyticsDevicePerformance extends entity {
averageBlueScreens: number | null;
averageRestarts: number | null;
blueScreenCount: number | null;
bootScore: number | null;
coreBootTimeInMs: number | null;
coreLoginTimeInMs: number | null;
deviceCount: number | null;
deviceName: string;
diskType: diskType | null;
groupPolicyBootTimeInMs: number | null;
groupPolicyLoginTimeInMs: number | null;
healthStatus: userExperienceAnalyticsHealthState | null;
loginScore: number | null;
manufacturer: string;
model: string;
modelStartupPerformanceScore: number | null;
operatingSystemVersion: string;
responsiveDesktopTimeInMs: number | null;
restartCount: number | null;
startupPerformanceScore: number | null;
}
export interface userExperienceAnalyticsDeviceScores extends entity {
appReliabilityScore: number | null;
batteryHealthScore: number | null;
deviceName: string;
endpointAnalyticsScore: number | null;
healthStatus: userExperienceAnalyticsHealthState | null;
manufacturer: string;
model: string;
startupPerformanceScore: number | null;
workFromAnywhereScore: number | null;
}
export interface userExperienceAnalyticsDeviceStartupHistory extends entity {
coreBootTimeInMs: number | null;
coreLoginTimeInMs: number | null;
deviceId: string;
featureUpdateBootTimeInMs: number | null;
groupPolicyBootTimeInMs: number | null;
groupPolicyLoginTimeInMs: number | null;
isFeatureUpdate: boolean | null;
isFirstLogin: boolean | null;
operatingSystemVersion: string;
responsiveDesktopTimeInMs: number | null;
restartCategory: userExperienceAnalyticsOperatingSystemRestartCategory | null;
restartFaultBucket: string;
restartStopCode: string;
startTime: Date | null;
totalBootTimeInMs: number | null;
totalLoginTimeInMs: number | null;
}
export interface userExperienceAnalyticsDeviceStartupProcess extends entity {
managedDeviceId: string;
processName: string;
productName: string;
publisher: string;
startupImpactInMs: number | null;
}
export interface userExperienceAnalyticsDeviceStartupProcessPerformance extends entity {
deviceCount: number | null;
medianImpactInMs: number | null;
processName: string;
productName: string;
publisher: string;
totalImpactInMs: number | null;
}
export interface userExperienceAnalyticsMetricHistory extends entity {
deviceId: string;
metricDateTime: Date | null;
metricType: string;
}
export interface userExperienceAnalyticsModelScores extends entity {
appReliabilityScore: number | null;
batteryHealthScore: number | null;
endpointAnalyticsScore: number | null;
healthStatus: userExperienceAnalyticsHealthState | null;
manufacturer: string;
model: string;
modelDeviceCount: number | null;
startupPerformanceScore: number | null;
workFromAnywhereScore: number | null;
}
export interface userExperienceAnalyticsOverview extends entity {
insights: userExperienceAnalyticsInsight[];
}
export interface userExperienceAnalyticsScoreHistory extends entity {
startupDateTime: Date | null;
}
export interface userExperienceAnalyticsWorkFromAnywhereHardwareReadinessMetric extends entity {
osCheckFailedPercentage: number | null;
processor64BitCheckFailedPercentage: number | null;
processorCoreCountCheckFailedPercentage: number | null;
processorFamilyCheckFailedPercentage: number | null;
processorSpeedCheckFailedPercentage: number | null;
ramCheckFailedPercentage: number | null;
secureBootCheckFailedPercentage: number | null;
storageCheckFailedPercentage: number | null;
totalDeviceCount: number | null;
tpmCheckFailedPercentage: number | null;
upgradeEligibleDeviceCount: number | null;
}
export interface userExperienceAnalyticsWorkFromAnywhereMetric extends entity {
metricDevices: userExperienceAnalyticsWorkFromAnywhereDevice[];
}
export interface userExperienceAnalyticsWorkFromAnywhereModelPerformance extends entity {
cloudIdentityScore: number | null;
cloudManagementScore: number | null;
cloudProvisioningScore: number | null;
healthStatus: userExperienceAnalyticsHealthState | null;
manufacturer: string;
model: string;
modelDeviceCount: number | null;
windowsScore: number | null;
workFromAnywhereScore: number | null;
}
export interface windowsMalwareInformation extends entity {
additionalInformationUrl: string;
category: windowsMalwareCategory;
displayName: string;
lastDetectionDateTime: Date;
severity: windowsMalwareSeverity;
deviceMalwareStates: malwareStateForWindowsDevice[];
}
export interface importedWindowsAutopilotDeviceIdentity extends entity {
assignedUserPrincipalName: string;
groupTag: string;
hardwareIdentifier: Buffer;
importId: string;
productKey: string;
serialNumber: string;
state: importedWindowsAutopilotDeviceIdentityState;
}
export interface windowsAutopilotDeviceIdentity extends entity {
addressableUserName: string;
azureActiveDirectoryDeviceId: string;
displayName: string;
enrollmentState: enrollmentState | null;
groupTag: string;
lastContactedDateTime: Date | null;
managedDeviceId: string;
manufacturer: string;
model: string;
productKey: string;
purchaseOrderIdentifier: string;
resourceName: string;
serialNumber: string;
skuNumber: string;
systemFamily: string;
userPrincipalName: string;
}
export interface notificationMessageTemplate extends entity {
brandingOptions: notificationTemplateBrandingOptions | null;
defaultLocale: string;
displayName: string | null;
lastModifiedDateTime: Date | null;
roleScopeTagIds: string[];
localizedNotificationMessages: localizedNotificationMessage[];
}
export interface resourceOperation extends entity {
actionName: string;
description: string;
resourceName: string;
}
export interface roleAssignment extends entity {
description: string;
displayName: string;
resourceScopes: string[];
roleDefinition: roleDefinition;
}
export interface deviceAndAppManagementRoleAssignment extends roleAssignment {
members: string[];
}
export interface roleDefinition extends entity {
description: string;
displayName: string;
isBuiltIn: boolean | null;
rolePermissions: rolePermission[];
roleAssignments: roleAssignment[];
}
export interface remoteAssistancePartner extends entity {
displayName: string;
lastConnectionDateTime: Date | null;
onboardingStatus: remoteAssistanceOnboardingStatus | null;
onboardingUrl: string;
}
export interface deviceManagementReports extends entity {
exportJobs: deviceManagementExportJob[];
}
export interface telecomExpenseManagementPartner extends entity {
appAuthorized: boolean | null;
displayName: string;
enabled: boolean | null;
lastConnectionDateTime: Date | null;
url: string;
}
export interface windowsInformationProtectionAppLearningSummary extends entity {
applicationName: string;
applicationType: applicationType | null;
deviceCount: number | null;
}
export interface windowsInformationProtectionNetworkLearningSummary extends entity {
deviceCount: number | null;
url: string;
}
export interface deviceInstallState extends entity {
deviceId: string;
deviceName: string;
errorCode: string;
installState: installState | null;
lastSyncDateTime: Date | null;
osDescription: string;
osVersion: string;
userName: string;
}
export interface eBookInstallSummary extends entity {
failedDeviceCount: number | null;
failedUserCount: number | null;
installedDeviceCount: number | null;
installedUserCount: number | null;
notInstalledDeviceCount: number | null;
notInstalledUserCount: number | null;
}
export interface iosVppEBook extends managedEBook {
appleId: string;
genres: string[];
language: string;
seller: string;
totalLicenseCount: number | null;
usedLicenseCount: number | null;
vppOrganizationName: string;
vppTokenId: string | null;
}
export interface managedEBookAssignment extends entity {
installIntent: installIntent | null;
target: deviceAndAppManagementAssignmentTarget;
}
export interface iosVppEBookAssignment extends managedEBookAssignment {
}
export interface userInstallStateSummary extends entity {
failedDeviceCount: number | null;
installedDeviceCount: number | null;
notInstalledDeviceCount: number | null;
userName: string;
deviceStates: deviceInstallState[];
}
export interface termsAndConditionsAcceptanceStatus extends entity {
acceptedDateTime: Date | null;
acceptedVersion: number | null;
userDisplayName: string;
userPrincipalName: string;
termsAndConditions: termsAndConditions;
}
export interface termsAndConditionsAssignment extends entity {
target: deviceAndAppManagementAssignmentTarget;
}
export interface appListItem  {
appId: string;
appStoreUrl: string;
name: string | null;
publisher: string;
}
export interface bitLockerRemovableDrivePolicy  {
blockCrossOrganizationWriteAccess: boolean | null;
encryptionMethod: bitLockerEncryptionMethod;
requireEncryptionForWriteAccess: boolean | null;
}
export interface defenderDetectedMalwareActions  {
highSeverity: defenderThreatAction | null;
lowSeverity: defenderThreatAction | null;
moderateSeverity: defenderThreatAction | null;
severeSeverity: defenderThreatAction | null;
}
export interface deviceCompliancePolicySettingState  {
currentValue: string;
errorCode: number | null;
errorDescription: string;
instanceDisplayName: string;
setting: string;
settingName: string;
sources: settingSource[];
state: complianceStatus | null;
userEmail: string;
userId: string;
userName: string;
userPrincipalName: string;
}
export interface settingSource  {
displayName: string;
id: string;
sourceType: settingSourceType | null;
}
export interface deviceConfigurationSettingState  {
currentValue: string;
errorCode: number | null;
errorDescription: string;
instanceDisplayName: string;
setting: string;
settingName: string;
sources: settingSource[];
state: complianceStatus | null;
userEmail: string;
userId: string;
userName: string;
userPrincipalName: string;
}
export interface edgeSearchEngineBase  {
}
export interface edgeSearchEngine extends edgeSearchEngineBase {
edgeSearchEngineType: edgeSearchEngineType | null;
}
export interface edgeSearchEngineCustom extends edgeSearchEngineBase {
edgeSearchEngineOpenSearchXmlUrl: string | null;
}
export interface iosHomeScreenItem  {
displayName: string;
}
export interface iosHomeScreenApp extends iosHomeScreenItem {
bundleID: string | null;
}
export interface iosHomeScreenFolder extends iosHomeScreenItem {
pages: iosHomeScreenFolderPage[] | null;
}
export interface iosHomeScreenFolderPage  {
apps: iosHomeScreenApp[] | null;
displayName: string;
}
export interface iosHomeScreenPage  {
displayName: string;
icons: iosHomeScreenItem[] | null;
}
export interface iosNetworkUsageRule  {
cellularDataBlocked: boolean | null;
cellularDataBlockWhenRoaming: boolean | null;
managedApps: appListItem[];
}
export interface iosNotificationSettings  {
alertType: iosNotificationAlertType | null;
appName: string;
badgesEnabled: boolean;
bundleID: string | null;
enabled: boolean;
publisher: string;
showInNotificationCenter: boolean;
showOnLockScreen: boolean;
soundsEnabled: boolean;
}
export interface mediaContentRatingAustralia  {
movieRating: ratingAustraliaMoviesType | null;
tvRating: ratingAustraliaTelevisionType | null;
}
export interface mediaContentRatingCanada  {
movieRating: ratingCanadaMoviesType | null;
tvRating: ratingCanadaTelevisionType | null;
}
export interface mediaContentRatingFrance  {
movieRating: ratingFranceMoviesType | null;
tvRating: ratingFranceTelevisionType | null;
}
export interface mediaContentRatingGermany  {
movieRating: ratingGermanyMoviesType | null;
tvRating: ratingGermanyTelevisionType | null;
}
export interface mediaContentRatingIreland  {
movieRating: ratingIrelandMoviesType | null;
tvRating: ratingIrelandTelevisionType | null;
}
export interface mediaContentRatingJapan  {
movieRating: ratingJapanMoviesType | null;
tvRating: ratingJapanTelevisionType | null;
}
export interface mediaContentRatingNewZealand  {
movieRating: ratingNewZealandMoviesType | null;
tvRating: ratingNewZealandTelevisionType | null;
}
export interface mediaContentRatingUnitedKingdom  {
movieRating: ratingUnitedKingdomMoviesType | null;
tvRating: ratingUnitedKingdomTelevisionType | null;
}
export interface mediaContentRatingUnitedStates  {
movieRating: ratingUnitedStatesMoviesType | null;
tvRating: ratingUnitedStatesTelevisionType | null;
}
export interface omaSetting  {
description: string;
displayName: string | null;
omaUri: string | null;
}
export interface omaSettingBase64 extends omaSetting {
fileName: string;
value: string | null;
}
export interface omaSettingBoolean extends omaSetting {
value: boolean | null;
}
export interface omaSettingDateTime extends omaSetting {
value: Date | null;
}
export interface omaSettingFloatingPoint extends omaSetting {
value: number | null;
}
export interface omaSettingInteger extends omaSetting {
value: number | null;
}
export interface omaSettingString extends omaSetting {
value: string | null;
}
export interface omaSettingStringXml extends omaSetting {
fileName: string;
value: Buffer | null;
}
export interface report  {
content: Buffer;
}
export interface sharedPCAccountManagerPolicy  {
accountDeletionPolicy: sharedPCAccountDeletionPolicyType | null;
cacheAccountsAboveDiskFreePercentage: number;
inactiveThresholdDays: number;
removeAccountsBelowDiskFreePercentage: number;
}
export interface windows10NetworkProxyServer  {
address: string | null;
exceptions: string[];
useForLocalAddresses: boolean | null;
}
export interface windowsFirewallNetworkProfile  {
authorizedApplicationRulesFromGroupPolicyMerged: boolean | null;
connectionSecurityRulesFromGroupPolicyMerged: boolean | null;
firewallEnabled: stateManagementSetting | null;
globalPortRulesFromGroupPolicyMerged: boolean | null;
inboundConnectionsBlocked: boolean | null;
inboundNotificationsBlocked: boolean | null;
incomingTrafficBlocked: boolean | null;
outboundConnectionsBlocked: boolean | null;
policyRulesFromGroupPolicyMerged: boolean | null;
securedPacketExemptionAllowed: boolean | null;
stealthModeBlocked: boolean | null;
unicastResponsesToMulticastBroadcastsBlocked: boolean | null;
}
export interface windowsUpdateInstallScheduleType  {
}
export interface windowsUpdateActiveHoursInstall extends windowsUpdateInstallScheduleType {
activeHoursEnd: Date | null;
activeHoursStart: Date | null;
}
export interface windowsUpdateScheduledInstall extends windowsUpdateInstallScheduleType {
scheduledInstallDay: weeklySchedule | null;
scheduledInstallTime: Date | null;
}
export interface androidCompliancePolicy extends deviceCompliancePolicy {
deviceThreatProtectionEnabled: boolean | null;
deviceThreatProtectionRequiredSecurityLevel: deviceThreatProtectionLevel | null;
minAndroidSecurityPatchLevel: string;
osMaximumVersion: string;
osMinimumVersion: string;
passwordExpirationDays: number;
passwordMinimumLength: number;
passwordMinutesOfInactivityBeforeLock: number;
passwordPreviousPasswordBlockCount: number;
passwordRequired: boolean | null;
passwordRequiredType: androidRequiredPasswordType | null;
securityBlockJailbrokenDevices: boolean | null;
securityDisableUsbDebugging: boolean | null;
securityPreventInstallAppsFromUnknownSources: boolean | null;
securityRequireCompanyPortalAppIntegrity: boolean | null;
securityRequireGooglePlayServices: boolean | null;
securityRequireSafetyNetAttestationBasicIntegrity: boolean | null;
securityRequireSafetyNetAttestationCertifiedDevice: boolean | null;
securityRequireUpToDateSecurityProviders: boolean | null;
securityRequireVerifyApps: boolean | null;
storageRequireEncryption: boolean | null;
}
export interface androidCustomConfiguration extends deviceConfiguration {
omaSettings: omaSetting[];
}
export interface androidGeneralDeviceConfiguration extends deviceConfiguration {
appsBlockClipboardSharing: boolean | null;
appsBlockCopyPaste: boolean | null;
appsBlockYouTube: boolean | null;
appsHideList: appListItem[];
appsInstallAllowList: appListItem[];
appsLaunchBlockList: appListItem[];
bluetoothBlocked: boolean | null;
cameraBlocked: boolean | null;
cellularBlockDataRoaming: boolean | null;
cellularBlockMessaging: boolean | null;
cellularBlockVoiceRoaming: boolean | null;
cellularBlockWiFiTethering: boolean | null;
compliantAppListType: appListType | null;
compliantAppsList: appListItem[];
deviceSharingAllowed: boolean | null;
diagnosticDataBlockSubmission: boolean | null;
factoryResetBlocked: boolean | null;
googleAccountBlockAutoSync: boolean | null;
googlePlayStoreBlocked: boolean | null;
kioskModeApps: appListItem[];
kioskModeBlockSleepButton: boolean | null;
kioskModeBlockVolumeButtons: boolean | null;
locationServicesBlocked: boolean | null;
nfcBlocked: boolean | null;
passwordBlockFingerprintUnlock: boolean | null;
passwordBlockTrustAgents: boolean | null;
passwordExpirationDays: number;
passwordMinimumLength: number;
passwordMinutesOfInactivityBeforeScreenTimeout: number;
passwordPreviousPasswordBlockCount: number;
passwordRequired: boolean | null;
passwordRequiredType: androidRequiredPasswordType | null;
passwordSignInFailureCountBeforeFactoryReset: number;
powerOffBlocked: boolean | null;
screenCaptureBlocked: boolean | null;
securityRequireVerifyApps: boolean | null;
storageBlockGoogleBackup: boolean | null;
storageBlockRemovableStorage: boolean | null;
storageRequireDeviceEncryption: boolean | null;
storageRequireRemovableStorageEncryption: boolean | null;
voiceAssistantBlocked: boolean | null;
voiceDialingBlocked: boolean | null;
webBrowserBlockAutofill: boolean | null;
webBrowserBlocked: boolean | null;
webBrowserBlockJavaScript: boolean | null;
webBrowserBlockPopups: boolean | null;
webBrowserCookieSettings: webBrowserCookieSettings | null;
wiFiBlocked: boolean | null;
}
export interface androidWorkProfileCompliancePolicy extends deviceCompliancePolicy {
deviceThreatProtectionEnabled: boolean | null;
deviceThreatProtectionRequiredSecurityLevel: deviceThreatProtectionLevel | null;
minAndroidSecurityPatchLevel: string;
osMaximumVersion: string;
osMinimumVersion: string;
passwordExpirationDays: number;
passwordMinimumLength: number;
passwordMinutesOfInactivityBeforeLock: number;
passwordPreviousPasswordBlockCount: number;
passwordRequired: boolean | null;
passwordRequiredType: androidRequiredPasswordType | null;
securityBlockJailbrokenDevices: boolean | null;
securityDisableUsbDebugging: boolean | null;
securityPreventInstallAppsFromUnknownSources: boolean | null;
securityRequireCompanyPortalAppIntegrity: boolean | null;
securityRequireGooglePlayServices: boolean | null;
securityRequireSafetyNetAttestationBasicIntegrity: boolean | null;
securityRequireSafetyNetAttestationCertifiedDevice: boolean | null;
securityRequireUpToDateSecurityProviders: boolean | null;
securityRequireVerifyApps: boolean | null;
storageRequireEncryption: boolean | null;
}
export interface androidWorkProfileCustomConfiguration extends deviceConfiguration {
omaSettings: omaSetting[];
}
export interface androidWorkProfileGeneralDeviceConfiguration extends deviceConfiguration {
passwordBlockFingerprintUnlock: boolean | null;
passwordBlockTrustAgents: boolean | null;
passwordExpirationDays: number;
passwordMinimumLength: number;
passwordMinutesOfInactivityBeforeScreenTimeout: number;
passwordPreviousPasswordBlockCount: number;
passwordRequiredType: androidWorkProfileRequiredPasswordType | null;
passwordSignInFailureCountBeforeFactoryReset: number;
securityRequireVerifyApps: boolean | null;
workProfileBlockAddingAccounts: boolean | null;
workProfileBlockCamera: boolean | null;
workProfileBlockCrossProfileCallerId: boolean | null;
workProfileBlockCrossProfileContactsSearch: boolean | null;
workProfileBlockCrossProfileCopyPaste: boolean | null;
workProfileBlockNotificationsWhileDeviceLocked: boolean | null;
workProfileBlockScreenCapture: boolean | null;
workProfileBluetoothEnableContactSharing: boolean | null;
workProfileDataSharingType: androidWorkProfileCrossProfileDataSharingType | null;
workProfileDefaultAppPermissionPolicy: androidWorkProfileDefaultAppPermissionPolicyType | null;
workProfilePasswordBlockFingerprintUnlock: boolean | null;
workProfilePasswordBlockTrustAgents: boolean | null;
workProfilePasswordExpirationDays: number;
workProfilePasswordMinimumLength: number;
workProfilePasswordMinLetterCharacters: number;
workProfilePasswordMinLowerCaseCharacters: number;
workProfilePasswordMinNonLetterCharacters: number;
workProfilePasswordMinNumericCharacters: number;
workProfilePasswordMinSymbolCharacters: number;
workProfilePasswordMinUpperCaseCharacters: number;
workProfilePasswordMinutesOfInactivityBeforeScreenTimeout: number;
workProfilePasswordPreviousPasswordBlockCount: number;
workProfilePasswordRequiredType: androidWorkProfileRequiredPasswordType | null;
workProfilePasswordSignInFailureCountBeforeFactoryReset: number;
workProfileRequirePassword: boolean | null;
}
export interface appleDeviceFeaturesConfigurationBase extends deviceConfiguration {
}
export interface deviceComplianceActionItem extends entity {
actionType: deviceComplianceActionType | null;
gracePeriodHours: number | null;
notificationMessageCCList: string[];
notificationTemplateId: string;
}
export interface deviceComplianceDeviceOverview extends entity {
configurationVersion: number | null;
errorCount: number | null;
failedCount: number | null;
lastUpdateDateTime: Date | null;
notApplicableCount: number | null;
pendingCount: number | null;
successCount: number | null;
}
export interface deviceComplianceDeviceStatus extends entity {
complianceGracePeriodExpirationDateTime: Date | null;
deviceDisplayName: string;
deviceModel: string;
lastReportedDateTime: Date | null;
status: complianceStatus | null;
userName: string;
userPrincipalName: string;
}
export interface deviceCompliancePolicyAssignment extends entity {
target: deviceAndAppManagementAssignmentTarget;
}
export interface settingStateDeviceSummary extends entity {
compliantDeviceCount: number | null;
conflictDeviceCount: number | null;
errorDeviceCount: number | null;
instancePath: string;
nonCompliantDeviceCount: number | null;
notApplicableDeviceCount: number | null;
remediatedDeviceCount: number | null;
settingName: string;
unknownDeviceCount: number | null;
}
export interface deviceComplianceScheduledActionForRule extends entity {
ruleName: string;
scheduledActionConfigurations: deviceComplianceActionItem[];
}
export interface deviceComplianceUserStatus extends entity {
devicesCount: number | null;
lastReportedDateTime: Date | null;
status: complianceStatus | null;
userDisplayName: string;
userPrincipalName: string;
}
export interface deviceComplianceUserOverview extends entity {
configurationVersion: number | null;
errorCount: number | null;
failedCount: number | null;
lastUpdateDateTime: Date | null;
notApplicableCount: number | null;
pendingCount: number | null;
successCount: number | null;
}
export interface deviceComplianceSettingState extends entity {
complianceGracePeriodExpirationDateTime: Date | null;
deviceId: string;
deviceModel: string;
deviceName: string;
setting: string;
settingName: string;
state: complianceStatus | null;
userEmail: string;
userId: string;
userName: string;
userPrincipalName: string;
}
export interface deviceCompliancePolicyState extends entity {
displayName: string;
platformType: policyPlatformType | null;
settingCount: number | null;
settingStates: deviceCompliancePolicySettingState[];
state: complianceStatus | null;
version: number | null;
}
export interface deviceConfigurationAssignment extends entity {
target: deviceAndAppManagementAssignmentTarget;
}
export interface deviceConfigurationDeviceStatus extends entity {
complianceGracePeriodExpirationDateTime: Date | null;
deviceDisplayName: string;
deviceModel: string;
lastReportedDateTime: Date | null;
status: complianceStatus | null;
userName: string;
userPrincipalName: string;
}
export interface deviceConfigurationDeviceOverview extends entity {
configurationVersion: number | null;
errorCount: number | null;
failedCount: number | null;
lastUpdateDateTime: Date | null;
notApplicableCount: number | null;
pendingCount: number | null;
successCount: number | null;
}
export interface deviceConfigurationUserStatus extends entity {
devicesCount: number | null;
lastReportedDateTime: Date | null;
status: complianceStatus | null;
userDisplayName: string;
userPrincipalName: string;
}
export interface deviceConfigurationUserOverview extends entity {
configurationVersion: number | null;
errorCount: number | null;
failedCount: number | null;
lastUpdateDateTime: Date | null;
notApplicableCount: number | null;
pendingCount: number | null;
successCount: number | null;
}
export interface deviceConfigurationState extends entity {
displayName: string;
platformType: policyPlatformType | null;
settingCount: number | null;
settingStates: deviceConfigurationSettingState[];
state: complianceStatus | null;
version: number | null;
}
export interface editionUpgradeConfiguration extends deviceConfiguration {
license: string;
licenseType: editionUpgradeLicenseType | null;
productKey: string;
targetEdition: windows10EditionType | null;
}
export interface iosCertificateProfile extends deviceConfiguration {
}
export interface iosCompliancePolicy extends deviceCompliancePolicy {
deviceThreatProtectionEnabled: boolean | null;
deviceThreatProtectionRequiredSecurityLevel: deviceThreatProtectionLevel | null;
managedEmailProfileRequired: boolean | null;
osMaximumVersion: string;
osMinimumVersion: string;
passcodeBlockSimple: boolean | null;
passcodeExpirationDays: number;
passcodeMinimumCharacterSetCount: number;
passcodeMinimumLength: number;
passcodeMinutesOfInactivityBeforeLock: number;
passcodePreviousPasscodeBlockCount: number;
passcodeRequired: boolean | null;
passcodeRequiredType: requiredPasswordType | null;
securityBlockJailbrokenDevices: boolean | null;
}
export interface iosCustomConfiguration extends deviceConfiguration {
payload: Buffer | null;
payloadFileName: string;
payloadName: string | null;
}
export interface iosDeviceFeaturesConfiguration extends appleDeviceFeaturesConfigurationBase {
assetTagTemplate: string;
homeScreenDockIcons: iosHomeScreenItem[];
homeScreenPages: iosHomeScreenPage[];
lockScreenFootnote: string;
notificationSettings: iosNotificationSettings[];
}
export interface iosGeneralDeviceConfiguration extends deviceConfiguration {
accountBlockModification: boolean | null;
activationLockAllowWhenSupervised: boolean | null;
airDropBlocked: boolean | null;
airDropForceUnmanagedDropTarget: boolean | null;
airPlayForcePairingPasswordForOutgoingRequests: boolean | null;
appleNewsBlocked: boolean | null;
appleWatchBlockPairing: boolean | null;
appleWatchForceWristDetection: boolean | null;
appsSingleAppModeList: appListItem[];
appStoreBlockAutomaticDownloads: boolean | null;
appStoreBlocked: boolean | null;
appStoreBlockInAppPurchases: boolean | null;
appStoreBlockUIAppInstallation: boolean | null;
appStoreRequirePassword: boolean | null;
appsVisibilityList: appListItem[];
appsVisibilityListType: appListType | null;
bluetoothBlockModification: boolean | null;
cameraBlocked: boolean | null;
cellularBlockDataRoaming: boolean | null;
cellularBlockGlobalBackgroundFetchWhileRoaming: boolean | null;
cellularBlockPerAppDataModification: boolean | null;
cellularBlockPersonalHotspot: boolean | null;
cellularBlockVoiceRoaming: boolean | null;
certificatesBlockUntrustedTlsCertificates: boolean | null;
classroomAppBlockRemoteScreenObservation: boolean | null;
classroomAppForceUnpromptedScreenObservation: boolean | null;
compliantAppListType: appListType | null;
compliantAppsList: appListItem[];
configurationProfileBlockChanges: boolean | null;
definitionLookupBlocked: boolean | null;
deviceBlockEnableRestrictions: boolean | null;
deviceBlockEraseContentAndSettings: boolean | null;
deviceBlockNameModification: boolean | null;
diagnosticDataBlockSubmission: boolean | null;
diagnosticDataBlockSubmissionModification: boolean | null;
documentsBlockManagedDocumentsInUnmanagedApps: boolean | null;
documentsBlockUnmanagedDocumentsInManagedApps: boolean | null;
emailInDomainSuffixes: string[];
enterpriseAppBlockTrust: boolean | null;
enterpriseAppBlockTrustModification: boolean | null;
faceTimeBlocked: boolean | null;
findMyFriendsBlocked: boolean | null;
gameCenterBlocked: boolean | null;
gamingBlockGameCenterFriends: boolean | null;
gamingBlockMultiplayer: boolean | null;
hostPairingBlocked: boolean | null;
iBooksStoreBlocked: boolean | null;
iBooksStoreBlockErotica: boolean | null;
iCloudBlockActivityContinuation: boolean | null;
iCloudBlockBackup: boolean | null;
iCloudBlockDocumentSync: boolean | null;
iCloudBlockManagedAppsSync: boolean | null;
iCloudBlockPhotoLibrary: boolean | null;
iCloudBlockPhotoStreamSync: boolean | null;
iCloudBlockSharedPhotoStream: boolean | null;
iCloudRequireEncryptedBackup: boolean | null;
iTunesBlockExplicitContent: boolean | null;
iTunesBlockMusicService: boolean | null;
iTunesBlockRadio: boolean | null;
keyboardBlockAutoCorrect: boolean | null;
keyboardBlockDictation: boolean | null;
keyboardBlockPredictive: boolean | null;
keyboardBlockShortcuts: boolean | null;
keyboardBlockSpellCheck: boolean | null;
kioskModeAllowAssistiveSpeak: boolean | null;
kioskModeAllowAssistiveTouchSettings: boolean | null;
kioskModeAllowAutoLock: boolean | null;
kioskModeAllowColorInversionSettings: boolean | null;
kioskModeAllowRingerSwitch: boolean | null;
kioskModeAllowScreenRotation: boolean | null;
kioskModeAllowSleepButton: boolean | null;
kioskModeAllowTouchscreen: boolean | null;
kioskModeAllowVoiceOverSettings: boolean | null;
kioskModeAllowVolumeButtons: boolean | null;
kioskModeAllowZoomSettings: boolean | null;
kioskModeAppStoreUrl: string;
kioskModeBuiltInAppId: string;
kioskModeManagedAppId: string;
kioskModeRequireAssistiveTouch: boolean | null;
kioskModeRequireColorInversion: boolean | null;
kioskModeRequireMonoAudio: boolean | null;
kioskModeRequireVoiceOver: boolean | null;
kioskModeRequireZoom: boolean | null;
lockScreenBlockControlCenter: boolean | null;
lockScreenBlockNotificationView: boolean | null;
lockScreenBlockPassbook: boolean | null;
lockScreenBlockTodayView: boolean | null;
mediaContentRatingApps: ratingAppsType | null;
mediaContentRatingAustralia: mediaContentRatingAustralia;
mediaContentRatingCanada: mediaContentRatingCanada;
mediaContentRatingFrance: mediaContentRatingFrance;
mediaContentRatingGermany: mediaContentRatingGermany;
mediaContentRatingIreland: mediaContentRatingIreland;
mediaContentRatingJapan: mediaContentRatingJapan;
mediaContentRatingNewZealand: mediaContentRatingNewZealand;
mediaContentRatingUnitedKingdom: mediaContentRatingUnitedKingdom;
mediaContentRatingUnitedStates: mediaContentRatingUnitedStates;
messagesBlocked: boolean | null;
networkUsageRules: iosNetworkUsageRule[];
notificationsBlockSettingsModification: boolean | null;
passcodeBlockFingerprintModification: boolean | null;
passcodeBlockFingerprintUnlock: boolean | null;
passcodeBlockModification: boolean | null;
passcodeBlockSimple: boolean | null;
passcodeExpirationDays: number;
passcodeMinimumCharacterSetCount: number;
passcodeMinimumLength: number;
passcodeMinutesOfInactivityBeforeLock: number;
passcodeMinutesOfInactivityBeforeScreenTimeout: number;
passcodePreviousPasscodeBlockCount: number;
passcodeRequired: boolean | null;
passcodeRequiredType: requiredPasswordType | null;
passcodeSignInFailureCountBeforeWipe: number;
podcastsBlocked: boolean | null;
safariBlockAutofill: boolean | null;
safariBlocked: boolean | null;
safariBlockJavaScript: boolean | null;
safariBlockPopups: boolean | null;
safariCookieSettings: webBrowserCookieSettings | null;
safariManagedDomains: string[];
safariPasswordAutoFillDomains: string[];
safariRequireFraudWarning: boolean | null;
screenCaptureBlocked: boolean | null;
siriBlocked: boolean | null;
siriBlockedWhenLocked: boolean | null;
siriBlockUserGeneratedContent: boolean | null;
siriRequireProfanityFilter: boolean | null;
spotlightBlockInternetResults: boolean | null;
voiceDialingBlocked: boolean | null;
wallpaperBlockModification: boolean | null;
wiFiConnectOnlyToConfiguredNetworks: boolean | null;
}
export interface iosUpdateConfiguration extends deviceConfiguration {
activeHoursEnd: Date | null;
activeHoursStart: Date | null;
scheduledInstallDays: dayOfWeek[] | null;
utcTimeOffsetInMinutes: number;
}
export interface macOSCompliancePolicy extends deviceCompliancePolicy {
deviceThreatProtectionEnabled: boolean | null;
deviceThreatProtectionRequiredSecurityLevel: deviceThreatProtectionLevel | null;
firewallBlockAllIncoming: boolean | null;
firewallEnabled: boolean | null;
firewallEnableStealthMode: boolean | null;
osMaximumVersion: string;
osMinimumVersion: string;
passwordBlockSimple: boolean | null;
passwordExpirationDays: number;
passwordMinimumCharacterSetCount: number;
passwordMinimumLength: number;
passwordMinutesOfInactivityBeforeLock: number;
passwordPreviousPasswordBlockCount: number;
passwordRequired: boolean | null;
passwordRequiredType: requiredPasswordType | null;
storageRequireEncryption: boolean | null;
systemIntegrityProtectionEnabled: boolean | null;
}
export interface macOSCustomConfiguration extends deviceConfiguration {
payload: Buffer | null;
payloadFileName: string;
payloadName: string | null;
}
export interface macOSDeviceFeaturesConfiguration extends appleDeviceFeaturesConfigurationBase {
}
export interface macOSGeneralDeviceConfiguration extends deviceConfiguration {
compliantAppListType: appListType | null;
compliantAppsList: appListItem[];
emailInDomainSuffixes: string[];
passwordBlockSimple: boolean | null;
passwordExpirationDays: number;
passwordMinimumCharacterSetCount: number;
passwordMinimumLength: number;
passwordMinutesOfInactivityBeforeLock: number;
passwordMinutesOfInactivityBeforeScreenTimeout: number;
passwordPreviousPasswordBlockCount: number;
passwordRequired: boolean | null;
passwordRequiredType: requiredPasswordType | null;
}
export interface configurationManagerClientEnabledFeatures  {
compliancePolicy: boolean | null;
deviceConfiguration: boolean | null;
inventory: boolean | null;
modernApps: boolean | null;
resourceAccess: boolean | null;
windowsUpdateForBusiness: boolean | null;
}
export interface deviceActionResult  {
actionName: string;
actionState: actionState | null;
lastUpdatedDateTime: Date | null;
startDateTime: Date | null;
}
export interface deviceHealthAttestationState  {
attestationIdentityKey: string;
bitLockerStatus: string;
bootAppSecurityVersion: string;
bootDebugging: string;
bootManagerSecurityVersion: string;
bootManagerVersion: string;
bootRevisionListInfo: string;
codeIntegrity: string;
codeIntegrityCheckVersion: string;
codeIntegrityPolicy: string;
contentNamespaceUrl: string;
contentVersion: string;
dataExcutionPolicy: string;
deviceHealthAttestationStatus: string;
earlyLaunchAntiMalwareDriverProtection: string;
healthAttestationSupportedStatus: string;
healthStatusMismatchInfo: string;
issuedDateTime: Date | null;
lastUpdateDateTime: string;
operatingSystemKernelDebugging: string;
operatingSystemRevListInfo: string;
pcr0: string;
pcrHashAlgorithm: string;
resetCount: number | null;
restartCount: number | null;
safeMode: string;
secureBoot: string;
secureBootConfigurationPolicyFingerPrint: string;
testSigning: string;
tpmVersion: string;
virtualSecureMode: string;
windowsPE: string;
}
export interface deviceLogCollectionResponse extends entity {
enrolledByUser: string;
expirationDateTimeUTC: Date;
initiatedByUserPrincipalName: string;
managedDeviceId: string | null;
receivedDateTimeUTC: Date;
requestedDateTimeUTC: Date;
sizeInKB: number | null;
status: appLogUploadState | null;
}
export interface windowsProtectionState extends entity {
antiMalwareVersion: string;
deviceState: windowsDeviceHealthState;
engineVersion: string;
fullScanOverdue: boolean;
fullScanRequired: boolean;
isVirtualMachine: boolean;
lastFullScanDateTime: Date;
lastFullScanSignatureVersion: string;
lastQuickScanDateTime: Date;
lastQuickScanSignatureVersion: string;
lastReportedDateTime: Date;
malwareProtectionEnabled: boolean;
networkInspectionSystemEnabled: boolean;
productStatus: windowsDefenderProductStatus;
quickScanOverdue: boolean;
realTimeProtectionEnabled: boolean;
rebootRequired: boolean;
signatureUpdateOverdue: boolean;
signatureVersion: string;
tamperProtectionEnabled: boolean;
detectedMalwareState: windowsDeviceMalwareState[];
}
export interface sharedPCConfiguration extends deviceConfiguration {
accountManagerPolicy: sharedPCAccountManagerPolicy;
allowedAccounts: sharedPCAllowedAccountType | null;
allowLocalStorage: boolean | null;
disableAccountManager: boolean | null;
disableEduPolicies: boolean | null;
disablePowerPolicies: boolean | null;
disableSignInOnResume: boolean | null;
enabled: boolean | null;
idleTimeBeforeSleepInSeconds: number;
kioskAppDisplayName: string;
kioskAppUserModelId: string;
maintenanceStartTime: Date;
}
export interface windows10CompliancePolicy extends deviceCompliancePolicy {
bitLockerEnabled: boolean | null;
codeIntegrityEnabled: boolean | null;
earlyLaunchAntiMalwareDriverEnabled: boolean | null;
mobileOsMaximumVersion: string;
mobileOsMinimumVersion: string;
osMaximumVersion: string;
osMinimumVersion: string;
passwordBlockSimple: boolean | null;
passwordExpirationDays: number;
passwordMinimumCharacterSetCount: number;
passwordMinimumLength: number;
passwordMinutesOfInactivityBeforeLock: number;
passwordPreviousPasswordBlockCount: number;
passwordRequired: boolean | null;
passwordRequiredToUnlockFromIdle: boolean | null;
passwordRequiredType: requiredPasswordType | null;
requireHealthyDeviceReport: boolean | null;
secureBootEnabled: boolean | null;
storageRequireEncryption: boolean | null;
}
export interface windows10CustomConfiguration extends deviceConfiguration {
omaSettings: omaSetting[];
}
export interface windows10EndpointProtectionConfiguration extends deviceConfiguration {
applicationGuardAllowPersistence: boolean | null;
applicationGuardAllowPrintToLocalPrinters: boolean | null;
applicationGuardAllowPrintToNetworkPrinters: boolean | null;
applicationGuardAllowPrintToPDF: boolean | null;
applicationGuardAllowPrintToXPS: boolean | null;
applicationGuardBlockClipboardSharing: applicationGuardBlockClipboardSharingType | null;
applicationGuardBlockFileTransfer: applicationGuardBlockFileTransferType | null;
applicationGuardBlockNonEnterpriseContent: boolean | null;
applicationGuardEnabled: boolean | null;
applicationGuardForceAuditing: boolean | null;
appLockerApplicationControl: appLockerApplicationControlType | null;
bitLockerDisableWarningForOtherDiskEncryption: boolean | null;
bitLockerEnableStorageCardEncryptionOnMobile: boolean | null;
bitLockerEncryptDevice: boolean | null;
bitLockerRemovableDrivePolicy: bitLockerRemovableDrivePolicy;
defenderAdditionalGuardedFolders: string[];
defenderAttackSurfaceReductionExcludedPaths: string[];
defenderExploitProtectionXml: Buffer;
defenderExploitProtectionXmlFileName: string;
defenderGuardedFoldersAllowedAppPaths: string[];
defenderSecurityCenterBlockExploitProtectionOverride: boolean | null;
firewallBlockStatefulFTP: boolean;
firewallCertificateRevocationListCheckMethod: firewallCertificateRevocationListCheckMethodType | null;
firewallIdleTimeoutForSecurityAssociationInSeconds: number;
firewallIPSecExemptionsAllowDHCP: boolean | null;
firewallIPSecExemptionsAllowICMP: boolean | null;
firewallIPSecExemptionsAllowNeighborDiscovery: boolean | null;
firewallIPSecExemptionsAllowRouterDiscovery: boolean | null;
firewallMergeKeyingModuleSettings: boolean;
firewallPacketQueueingMethod: firewallPacketQueueingMethodType | null;
firewallPreSharedKeyEncodingMethod: firewallPreSharedKeyEncodingMethodType | null;
firewallProfileDomain: windowsFirewallNetworkProfile;
firewallProfilePrivate: windowsFirewallNetworkProfile;
firewallProfilePublic: windowsFirewallNetworkProfile;
smartScreenBlockOverrideForFiles: boolean | null;
smartScreenEnableInShell: boolean | null;
}
export interface windows10EnterpriseModernAppManagementConfiguration extends deviceConfiguration {
uninstallBuiltInApps: boolean | null;
}
export interface windows10GeneralConfiguration extends deviceConfiguration {
accountsBlockAddingNonMicrosoftAccountEmail: boolean | null;
antiTheftModeBlocked: boolean | null;
appsAllowTrustedAppsSideloading: stateManagementSetting | null;
appsBlockWindowsStoreOriginatedApps: boolean | null;
bluetoothAllowedServices: string[];
bluetoothBlockAdvertising: boolean | null;
bluetoothBlockDiscoverableMode: boolean | null;
bluetoothBlocked: boolean | null;
bluetoothBlockPrePairing: boolean | null;
cameraBlocked: boolean | null;
cellularBlockDataWhenRoaming: boolean | null;
cellularBlockVpn: boolean | null;
cellularBlockVpnWhenRoaming: boolean | null;
certificatesBlockManualRootCertificateInstallation: boolean | null;
connectedDevicesServiceBlocked: boolean | null;
copyPasteBlocked: boolean | null;
cortanaBlocked: boolean | null;
defenderBlockEndUserAccess: boolean | null;
defenderCloudBlockLevel: defenderCloudBlockLevelType | null;
defenderDaysBeforeDeletingQuarantinedMalware: number;
defenderDetectedMalwareActions: defenderDetectedMalwareActions;
defenderFileExtensionsToExclude: string[];
defenderFilesAndFoldersToExclude: string[];
defenderMonitorFileActivity: defenderMonitorFileActivity | null;
defenderProcessesToExclude: string[];
defenderPromptForSampleSubmission: defenderPromptForSampleSubmission | null;
defenderRequireBehaviorMonitoring: boolean | null;
defenderRequireCloudProtection: boolean | null;
defenderRequireNetworkInspectionSystem: boolean | null;
defenderRequireRealTimeMonitoring: boolean | null;
defenderScanArchiveFiles: boolean | null;
defenderScanDownloads: boolean | null;
defenderScanIncomingMail: boolean | null;
defenderScanMappedNetworkDrivesDuringFullScan: boolean | null;
defenderScanMaxCpu: number;
defenderScanNetworkFiles: boolean | null;
defenderScanRemovableDrivesDuringFullScan: boolean | null;
defenderScanScriptsLoadedInInternetExplorer: boolean | null;
defenderScanType: defenderScanType | null;
defenderScheduledQuickScanTime: Date;
defenderScheduledScanTime: Date;
defenderSignatureUpdateIntervalInHours: number;
defenderSystemScanSchedule: weeklySchedule | null;
developerUnlockSetting: stateManagementSetting | null;
deviceManagementBlockFactoryResetOnMobile: boolean | null;
deviceManagementBlockManualUnenroll: boolean | null;
diagnosticsDataSubmissionMode: diagnosticDataSubmissionMode | null;
edgeAllowStartPagesModification: boolean | null;
edgeBlockAccessToAboutFlags: boolean | null;
edgeBlockAddressBarDropdown: boolean | null;
edgeBlockAutofill: boolean | null;
edgeBlockCompatibilityList: boolean | null;
edgeBlockDeveloperTools: boolean | null;
edgeBlocked: boolean | null;
edgeBlockExtensions: boolean | null;
edgeBlockInPrivateBrowsing: boolean | null;
edgeBlockJavaScript: boolean | null;
edgeBlockLiveTileDataCollection: boolean | null;
edgeBlockPasswordManager: boolean | null;
edgeBlockPopups: boolean | null;
edgeBlockSearchSuggestions: boolean | null;
edgeBlockSendingDoNotTrackHeader: boolean | null;
edgeBlockSendingIntranetTrafficToInternetExplorer: boolean | null;
edgeClearBrowsingDataOnExit: boolean | null;
edgeCookiePolicy: edgeCookiePolicy | null;
edgeDisableFirstRunPage: boolean | null;
edgeEnterpriseModeSiteListLocation: string;
edgeFirstRunUrl: string;
edgeHomepageUrls: string[];
edgeRequireSmartScreen: boolean | null;
edgeSearchEngine: edgeSearchEngineBase;
edgeSendIntranetTrafficToInternetExplorer: boolean | null;
edgeSyncFavoritesWithInternetExplorer: boolean | null;
enterpriseCloudPrintDiscoveryEndPoint: string;
enterpriseCloudPrintDiscoveryMaxLimit: number;
enterpriseCloudPrintMopriaDiscoveryResourceIdentifier: string;
enterpriseCloudPrintOAuthAuthority: string;
enterpriseCloudPrintOAuthClientIdentifier: string;
enterpriseCloudPrintResourceIdentifier: string;
experienceBlockDeviceDiscovery: boolean | null;
experienceBlockErrorDialogWhenNoSIM: boolean | null;
experienceBlockTaskSwitcher: boolean | null;
gameDvrBlocked: boolean | null;
internetSharingBlocked: boolean | null;
locationServicesBlocked: boolean | null;
lockScreenAllowTimeoutConfiguration: boolean | null;
lockScreenBlockActionCenterNotifications: boolean | null;
lockScreenBlockCortana: boolean | null;
lockScreenBlockToastNotifications: boolean | null;
lockScreenTimeoutInSeconds: number;
logonBlockFastUserSwitching: boolean | null;
microsoftAccountBlocked: boolean | null;
microsoftAccountBlockSettingsSync: boolean | null;
networkProxyApplySettingsDeviceWide: boolean | null;
networkProxyAutomaticConfigurationUrl: string;
networkProxyDisableAutoDetect: boolean | null;
networkProxyServer: windows10NetworkProxyServer;
nfcBlocked: boolean | null;
oneDriveDisableFileSync: boolean | null;
passwordBlockSimple: boolean | null;
passwordExpirationDays: number;
passwordMinimumCharacterSetCount: number;
passwordMinimumLength: number;
passwordMinutesOfInactivityBeforeScreenTimeout: number;
passwordPreviousPasswordBlockCount: number;
passwordRequired: boolean | null;
passwordRequiredType: requiredPasswordType | null;
passwordRequireWhenResumeFromIdleState: boolean | null;
passwordSignInFailureCountBeforeFactoryReset: number;
personalizationDesktopImageUrl: string;
personalizationLockScreenImageUrl: string;
privacyAdvertisingId: stateManagementSetting | null;
privacyAutoAcceptPairingAndConsentPrompts: boolean | null;
privacyBlockInputPersonalization: boolean | null;
resetProtectionModeBlocked: boolean | null;
safeSearchFilter: safeSearchFilterType | null;
screenCaptureBlocked: boolean | null;
searchBlockDiacritics: boolean | null;
searchDisableAutoLanguageDetection: boolean | null;
searchDisableIndexerBackoff: boolean | null;
searchDisableIndexingEncryptedItems: boolean | null;
searchDisableIndexingRemovableDrive: boolean | null;
searchEnableAutomaticIndexSizeManangement: boolean | null;
searchEnableRemoteQueries: boolean | null;
settingsBlockAccountsPage: boolean | null;
settingsBlockAddProvisioningPackage: boolean | null;
settingsBlockAppsPage: boolean | null;
settingsBlockChangeLanguage: boolean | null;
settingsBlockChangePowerSleep: boolean | null;
settingsBlockChangeRegion: boolean | null;
settingsBlockChangeSystemTime: boolean | null;
settingsBlockDevicesPage: boolean | null;
settingsBlockEaseOfAccessPage: boolean | null;
settingsBlockEditDeviceName: boolean | null;
settingsBlockGamingPage: boolean | null;
settingsBlockNetworkInternetPage: boolean | null;
settingsBlockPersonalizationPage: boolean | null;
settingsBlockPrivacyPage: boolean | null;
settingsBlockRemoveProvisioningPackage: boolean | null;
settingsBlockSettingsApp: boolean | null;
settingsBlockSystemPage: boolean | null;
settingsBlockTimeLanguagePage: boolean | null;
settingsBlockUpdateSecurityPage: boolean | null;
sharedUserAppDataAllowed: boolean | null;
smartScreenBlockPromptOverride: boolean | null;
smartScreenBlockPromptOverrideForFiles: boolean | null;
smartScreenEnableAppInstallControl: boolean | null;
startBlockUnpinningAppsFromTaskbar: boolean | null;
startMenuAppListVisibility: windowsStartMenuAppListVisibilityType | null;
startMenuHideChangeAccountSettings: boolean | null;
startMenuHideFrequentlyUsedApps: boolean | null;
startMenuHideHibernate: boolean | null;
startMenuHideLock: boolean | null;
startMenuHidePowerButton: boolean | null;
startMenuHideRecentJumpLists: boolean | null;
startMenuHideRecentlyAddedApps: boolean | null;
startMenuHideRestartOptions: boolean | null;
startMenuHideShutDown: boolean | null;
startMenuHideSignOut: boolean | null;
startMenuHideSleep: boolean | null;
startMenuHideSwitchAccount: boolean | null;
startMenuHideUserTile: boolean | null;
startMenuLayoutEdgeAssetsXml: Buffer;
startMenuLayoutXml: Buffer;
startMenuMode: windowsStartMenuModeType | null;
startMenuPinnedFolderDocuments: visibilitySetting | null;
startMenuPinnedFolderDownloads: visibilitySetting | null;
startMenuPinnedFolderFileExplorer: visibilitySetting | null;
startMenuPinnedFolderHomeGroup: visibilitySetting | null;
startMenuPinnedFolderMusic: visibilitySetting | null;
startMenuPinnedFolderNetwork: visibilitySetting | null;
startMenuPinnedFolderPersonalFolder: visibilitySetting | null;
startMenuPinnedFolderPictures: visibilitySetting | null;
startMenuPinnedFolderSettings: visibilitySetting | null;
startMenuPinnedFolderVideos: visibilitySetting | null;
storageBlockRemovableStorage: boolean | null;
storageRequireMobileDeviceEncryption: boolean | null;
storageRestrictAppDataToSystemVolume: boolean | null;
storageRestrictAppInstallToSystemVolume: boolean | null;
tenantLockdownRequireNetworkDuringOutOfBoxExperience: boolean | null;
usbBlocked: boolean | null;
voiceRecordingBlocked: boolean | null;
webRtcBlockLocalhostIpAddress: boolean | null;
wiFiBlockAutomaticConnectHotspots: boolean | null;
wiFiBlocked: boolean | null;
wiFiBlockManualConfiguration: boolean | null;
wiFiScanInterval: number;
windowsSpotlightBlockConsumerSpecificFeatures: boolean | null;
windowsSpotlightBlocked: boolean | null;
windowsSpotlightBlockOnActionCenter: boolean | null;
windowsSpotlightBlockTailoredExperiences: boolean | null;
windowsSpotlightBlockThirdPartyNotifications: boolean | null;
windowsSpotlightBlockWelcomeExperience: boolean | null;
windowsSpotlightBlockWindowsTips: boolean | null;
windowsSpotlightConfigureOnLockScreen: windowsSpotlightEnablementSettings | null;
windowsStoreBlockAutoUpdate: boolean | null;
windowsStoreBlocked: boolean | null;
windowsStoreEnablePrivateStoreOnly: boolean | null;
wirelessDisplayBlockProjectionToThisDevice: boolean | null;
wirelessDisplayBlockUserInputFromReceiver: boolean | null;
wirelessDisplayRequirePinForPairing: boolean | null;
}
export interface windows10MobileCompliancePolicy extends deviceCompliancePolicy {
bitLockerEnabled: boolean | null;
codeIntegrityEnabled: boolean | null;
earlyLaunchAntiMalwareDriverEnabled: boolean | null;
osMaximumVersion: string;
osMinimumVersion: string;
passwordBlockSimple: boolean | null;
passwordExpirationDays: number;
passwordMinimumCharacterSetCount: number;
passwordMinimumLength: number;
passwordMinutesOfInactivityBeforeLock: number;
passwordPreviousPasswordBlockCount: number;
passwordRequired: boolean | null;
passwordRequiredType: requiredPasswordType | null;
passwordRequireToUnlockFromIdle: boolean | null;
secureBootEnabled: boolean | null;
storageRequireEncryption: boolean | null;
}
export interface windows10SecureAssessmentConfiguration extends deviceConfiguration {
allowPrinting: boolean | null;
allowScreenCapture: boolean | null;
allowTextSuggestion: boolean | null;
configurationAccount: string;
launchUri: string;
}
export interface windows10TeamGeneralConfiguration extends deviceConfiguration {
azureOperationalInsightsBlockTelemetry: boolean | null;
azureOperationalInsightsWorkspaceId: string;
azureOperationalInsightsWorkspaceKey: string;
connectAppBlockAutoLaunch: boolean | null;
maintenanceWindowBlocked: boolean | null;
maintenanceWindowDurationInHours: number;
maintenanceWindowStartTime: Date;
miracastBlocked: boolean | null;
miracastChannel: miracastChannel | null;
miracastRequirePin: boolean | null;
settingsBlockMyMeetingsAndFiles: boolean | null;
settingsBlockSessionResume: boolean | null;
settingsBlockSigninSuggestions: boolean | null;
settingsDefaultVolume: number;
settingsScreenTimeoutInMinutes: number;
settingsSessionTimeoutInMinutes: number;
settingsSleepTimeoutInMinutes: number;
welcomeScreenBackgroundImageUrl: string;
welcomeScreenBlockAutomaticWakeUp: boolean | null;
welcomeScreenMeetingInformation: welcomeScreenMeetingInformation | null;
}
export interface windows81CompliancePolicy extends deviceCompliancePolicy {
osMaximumVersion: string;
osMinimumVersion: string;
passwordBlockSimple: boolean | null;
passwordExpirationDays: number;
passwordMinimumCharacterSetCount: number;
passwordMinimumLength: number;
passwordMinutesOfInactivityBeforeLock: number;
passwordPreviousPasswordBlockCount: number;
passwordRequired: boolean | null;
passwordRequiredType: requiredPasswordType | null;
storageRequireEncryption: boolean | null;
}
export interface windows81GeneralConfiguration extends deviceConfiguration {
accountsBlockAddingNonMicrosoftAccountEmail: boolean | null;
applyOnlyToWindows81: boolean | null;
browserBlockAutofill: boolean | null;
browserBlockAutomaticDetectionOfIntranetSites: boolean | null;
browserBlockEnterpriseModeAccess: boolean | null;
browserBlockJavaScript: boolean | null;
browserBlockPlugins: boolean | null;
browserBlockPopups: boolean | null;
browserBlockSendingDoNotTrackHeader: boolean | null;
browserBlockSingleWordEntryOnIntranetSites: boolean | null;
browserEnterpriseModeSiteListLocation: string;
browserInternetSecurityLevel: internetSiteSecurityLevel | null;
browserIntranetSecurityLevel: siteSecurityLevel | null;
browserLoggingReportLocation: string;
browserRequireFirewall: boolean | null;
browserRequireFraudWarning: boolean | null;
browserRequireHighSecurityForRestrictedSites: boolean | null;
browserRequireSmartScreen: boolean | null;
browserTrustedSitesSecurityLevel: siteSecurityLevel | null;
cellularBlockDataRoaming: boolean | null;
diagnosticsBlockDataSubmission: boolean | null;
passwordBlockPicturePasswordAndPin: boolean | null;
passwordExpirationDays: number;
passwordMinimumCharacterSetCount: number;
passwordMinimumLength: number;
passwordMinutesOfInactivityBeforeScreenTimeout: number;
passwordPreviousPasswordBlockCount: number;
passwordRequiredType: requiredPasswordType | null;
passwordSignInFailureCountBeforeFactoryReset: number;
storageRequireDeviceEncryption: boolean | null;
updatesRequireAutomaticUpdates: boolean | null;
userAccountControlSettings: windowsUserAccountControlSettings | null;
workFoldersUrl: string;
}
export interface windowsDefenderAdvancedThreatProtectionConfiguration extends deviceConfiguration {
allowSampleSharing: boolean | null;
enableExpeditedTelemetryReporting: boolean | null;
}
export interface windowsPhone81CompliancePolicy extends deviceCompliancePolicy {
osMaximumVersion: string;
osMinimumVersion: string;
passwordBlockSimple: boolean | null;
passwordExpirationDays: number;
passwordMinimumCharacterSetCount: number;
passwordMinimumLength: number;
passwordMinutesOfInactivityBeforeLock: number;
passwordPreviousPasswordBlockCount: number;
passwordRequired: boolean | null;
passwordRequiredType: requiredPasswordType | null;
storageRequireEncryption: boolean | null;
}
export interface windowsPhone81CustomConfiguration extends deviceConfiguration {
omaSettings: omaSetting[];
}
export interface windowsPhone81GeneralConfiguration extends deviceConfiguration {
applyOnlyToWindowsPhone81: boolean | null;
appsBlockCopyPaste: boolean | null;
bluetoothBlocked: boolean | null;
cameraBlocked: boolean | null;
cellularBlockWifiTethering: boolean | null;
compliantAppListType: appListType | null;
compliantAppsList: appListItem[];
diagnosticDataBlockSubmission: boolean | null;
emailBlockAddingAccounts: boolean | null;
locationServicesBlocked: boolean | null;
microsoftAccountBlocked: boolean | null;
nfcBlocked: boolean | null;
passwordBlockSimple: boolean | null;
passwordExpirationDays: number;
passwordMinimumCharacterSetCount: number;
passwordMinimumLength: number;
passwordMinutesOfInactivityBeforeScreenTimeout: number;
passwordPreviousPasswordBlockCount: number;
passwordRequired: boolean | null;
passwordRequiredType: requiredPasswordType | null;
passwordSignInFailureCountBeforeFactoryReset: number;
screenCaptureBlocked: boolean | null;
storageBlockRemovableStorage: boolean | null;
storageRequireEncryption: boolean | null;
webBrowserBlocked: boolean | null;
wifiBlockAutomaticConnectHotspots: boolean | null;
wifiBlocked: boolean | null;
wifiBlockHotspotReporting: boolean | null;
windowsStoreBlocked: boolean | null;
}
export interface windowsUpdateForBusinessConfiguration extends deviceConfiguration {
allowWindows11Upgrade: boolean | null;
automaticUpdateMode: automaticUpdateMode | null;
autoRestartNotificationDismissal: autoRestartNotificationDismissalMethod | null;
businessReadyUpdatesOnly: windowsUpdateType | null;
deadlineForFeatureUpdatesInDays: number;
deadlineForQualityUpdatesInDays: number;
deadlineGracePeriodInDays: number;
deliveryOptimizationMode: windowsDeliveryOptimizationMode | null;
driversExcluded: boolean | null;
engagedRestartDeadlineInDays: number;
engagedRestartSnoozeScheduleInDays: number;
engagedRestartTransitionScheduleInDays: number;
featureUpdatesDeferralPeriodInDays: number | null;
featureUpdatesPaused: boolean | null;
featureUpdatesPauseExpiryDateTime: Date | null;
featureUpdatesPauseStartDate: Date;
featureUpdatesRollbackStartDateTime: Date | null;
featureUpdatesRollbackWindowInDays: number;
featureUpdatesWillBeRolledBack: boolean;
installationSchedule: windowsUpdateInstallScheduleType;
microsoftUpdateServiceAllowed: boolean | null;
postponeRebootUntilAfterDeadline: boolean;
prereleaseFeatures: prereleaseFeatures | null;
qualityUpdatesDeferralPeriodInDays: number | null;
qualityUpdatesPaused: boolean | null;
qualityUpdatesPauseExpiryDateTime: Date | null;
qualityUpdatesPauseStartDate: Date;
qualityUpdatesRollbackStartDateTime: Date | null;
qualityUpdatesWillBeRolledBack: boolean;
scheduleImminentRestartWarningInMinutes: number;
scheduleRestartWarningInHours: number;
skipChecksBeforeRestart: boolean | null;
updateNotificationLevel: windowsUpdateNotificationDisplayOption | null;
updateWeeks: windowsUpdateForBusinessUpdateWeeks;
userPauseAccess: enablement | null;
userWindowsUpdateScanAccess: enablement | null;
}
export interface complianceManagementPartnerAssignment  {
target: deviceAndAppManagementAssignmentTarget;
}
export interface deviceAndAppManagementData  {
content: Buffer;
}
export interface deviceEnrollmentPlatformRestriction  {
osMaximumVersion: string;
osMinimumVersion: string;
personalDeviceEnrollmentBlocked: boolean | null;
platformBlocked: boolean | null;
}
export interface deviceManagementPartnerAssignment  {
target: deviceAndAppManagementAssignmentTarget;
}
export interface rgbColor  {
b: boolean | null;
g: boolean | null;
r: boolean | null;
}
export interface enrollmentConfigurationAssignment extends entity {
target: deviceAndAppManagementAssignmentTarget;
}
export interface deviceEnrollmentLimitConfiguration extends deviceEnrollmentConfiguration {
limit: number | null;
}
export interface deviceEnrollmentPlatformRestrictionsConfiguration extends deviceEnrollmentConfiguration {
androidRestriction: deviceEnrollmentPlatformRestriction;
iosRestriction: deviceEnrollmentPlatformRestriction;
macOSRestriction: deviceEnrollmentPlatformRestriction;
windowsMobileRestriction: deviceEnrollmentPlatformRestriction;
windowsRestriction: deviceEnrollmentPlatformRestriction;
}
export interface deviceEnrollmentWindowsHelloForBusinessConfiguration extends deviceEnrollmentConfiguration {
enhancedBiometricsState: enablement | null;
pinExpirationInDays: number | null;
pinLowercaseCharactersUsage: windowsHelloForBusinessPinUsage | null;
pinMaximumLength: number | null;
pinMinimumLength: number | null;
pinPreviousBlockCount: number | null;
pinSpecialCharactersUsage: windowsHelloForBusinessPinUsage | null;
pinUppercaseCharactersUsage: windowsHelloForBusinessPinUsage | null;
remotePassportEnabled: boolean | null;
securityDeviceRequired: boolean | null;
state: enablement | null;
unlockWithBiometricsEnabled: boolean | null;
}
export interface appLogCollectionDownloadDetails  {
appLogDecryptionAlgorithm: appLogDecryptionAlgorithm | null;
decryptionKey: string;
downloadUrl: string;
}
export interface deleteUserFromSharedAppleDeviceActionResult extends deviceActionResult {
userPrincipalName: string;
}
export interface deviceExchangeAccessStateSummary  {
allowedDeviceCount: number | null;
blockedDeviceCount: number | null;
quarantinedDeviceCount: number | null;
unavailableDeviceCount: number | null;
unknownDeviceCount: number | null;
}
export interface deviceGeoLocation  {
altitude: number | null;
heading: number | null;
horizontalAccuracy: number | null;
lastCollectedDateTime: Date | null;
latitude: number | null;
longitude: number | null;
speed: number | null;
verticalAccuracy: number | null;
}
export interface deviceOperatingSystemSummary  {
androidCorporateWorkProfileCount: number | null;
androidCount: number | null;
androidDedicatedCount: number | null;
androidDeviceAdminCount: number | null;
androidFullyManagedCount: number | null;
androidWorkProfileCount: number | null;
configMgrDeviceCount: number | null;
iosCount: number | null;
macOSCount: number | null;
unknownCount: number | null;
windowsCount: number | null;
windowsMobileCount: number | null;
}
export interface userExperienceAnalyticsInsightValue  {
}
export interface insightValueDouble extends userExperienceAnalyticsInsightValue {
value: number | null;
}
export interface insightValueInt extends userExperienceAnalyticsInsightValue {
value: number | null;
}
export interface locateDeviceActionResult extends deviceActionResult {
deviceLocation: deviceGeoLocation;
}
export interface osVersionCount  {
deviceCount: number | null;
lastUpdateDateTime: Date | null;
osVersion: string;
}
export interface remoteLockActionResult extends deviceActionResult {
unlockPin: string;
}
export interface resetPasscodeActionResult extends deviceActionResult {
passcode: string;
}
export interface rotateBitLockerKeysDeviceActionResult extends deviceActionResult {
errorCode: number | null;
}
export interface updateWindowsDeviceAccountActionParameter  {
calendarSyncEnabled: boolean;
deviceAccount: windowsDeviceAccount;
deviceAccountEmail: string;
exchangeServer: string;
passwordRotationEnabled: boolean;
sessionInitiationProtocalAddress: string;
}
export interface windowsDeviceAccount  {
password: string;
}
export interface userExperienceAnalyticsAutopilotDevicesSummary  {
devicesNotAutopilotRegistered: number | null;
devicesWithoutAutopilotProfileAssigned: number | null;
totalWindows10DevicesWithoutTenantAttached: number | null;
}
export interface userExperienceAnalyticsCloudIdentityDevicesSummary  {
deviceWithoutCloudIdentityCount: number | null;
}
export interface userExperienceAnalyticsCloudManagementDevicesSummary  {
coManagedDeviceCount: number | null;
intuneDeviceCount: number | null;
tenantAttachDeviceCount: number | null;
}
export interface userExperienceAnalyticsInsight  {
insightId: string;
severity: userExperienceAnalyticsInsightSeverity | null;
userExperienceAnalyticsMetricId: string;
values: userExperienceAnalyticsInsightValue[];
}
export interface userExperienceAnalyticsWindows10DevicesSummary  {
unsupportedOSversionDeviceCount: number | null;
}
export interface userExperienceAnalyticsWorkFromAnywhereDevicesSummary  {
autopilotDevicesSummary: userExperienceAnalyticsAutopilotDevicesSummary;
cloudIdentityDevicesSummary: userExperienceAnalyticsCloudIdentityDevicesSummary;
cloudManagementDevicesSummary: userExperienceAnalyticsCloudManagementDevicesSummary;
coManagedDevices: number | null;
devicesNotAutopilotRegistered: number | null;
devicesWithoutAutopilotProfileAssigned: number | null;
devicesWithoutCloudIdentity: number | null;
intuneDevices: number | null;
tenantAttachDevices: number | null;
totalDevices: number | null;
unsupportedOSversionDevices: number | null;
windows10Devices: number | null;
windows10DevicesSummary: userExperienceAnalyticsWindows10DevicesSummary;
windows10DevicesWithoutTenantAttach: number | null;
}
export interface windowsDefenderScanActionResult extends deviceActionResult {
scanType: string;
}
export interface windowsDeviceADAccount extends windowsDeviceAccount {
domainName: string;
userName: string;
}
export interface windowsDeviceAzureADAccount extends windowsDeviceAccount {
userPrincipalName: string;
}
export interface windowsMalwareCategoryCount  {
activeMalwareDetectionCount: number | null;
category: windowsMalwareCategory | null;
deviceCount: number | null;
distinctActiveMalwareCount: number | null;
lastUpdateDateTime: Date | null;
}
export interface windowsMalwareExecutionStateCount  {
deviceCount: number | null;
executionState: windowsMalwareExecutionState | null;
lastUpdateDateTime: Date | null;
}
export interface windowsMalwareNameCount  {
deviceCount: number | null;
lastUpdateDateTime: Date | null;
malwareIdentifier: string;
name: string;
}
export interface windowsMalwareSeverityCount  {
distinctMalwareCount: number | null;
lastUpdateDateTime: Date | null;
malwareDetectionCount: number | null;
severity: windowsMalwareSeverity | null;
}
export interface windowsMalwareStateCount  {
deviceCount: number | null;
distinctMalwareCount: number | null;
lastUpdateDateTime: Date | null;
malwareDetectionCount: number | null;
state: windowsMalwareThreatState | null;
}
export interface appLogCollectionRequest extends entity {
completedDateTime: Date;
customLogFolders: string[];
errorMessage: string;
status: appLogUploadState | null;
}
export interface malwareStateForWindowsDevice extends entity {
detectionCount: number;
deviceName: string;
executionState: windowsMalwareExecutionState;
initialDetectionDateTime: Date;
lastStateChangeDateTime: Date;
threatState: windowsMalwareThreatState;
}
export interface userExperienceAnalyticsMetric extends entity {
unit: string;
value: number | null;
}
export interface userExperienceAnalyticsWorkFromAnywhereDevice extends entity {
autoPilotProfileAssigned: boolean;
autoPilotRegistered: boolean;
azureAdDeviceId: string;
azureAdJoinType: string;
azureAdRegistered: boolean;
cloudIdentityScore: number;
cloudManagementScore: number;
cloudProvisioningScore: number;
compliancePolicySetToIntune: boolean;
deviceId: string;
deviceName: string;
healthStatus: userExperienceAnalyticsHealthState | null;
isCloudManagedGatewayEnabled: boolean;
managedBy: string;
manufacturer: string;
model: string;
osCheckFailed: boolean;
osDescription: string;
osVersion: string;
otherWorkloadsSetToIntune: boolean;
ownership: string;
processor64BitCheckFailed: boolean;
processorCoreCountCheckFailed: boolean;
processorFamilyCheckFailed: boolean;
processorSpeedCheckFailed: boolean;
ramCheckFailed: boolean;
secureBootCheckFailed: boolean;
serialNumber: string;
storageCheckFailed: boolean;
tenantAttached: boolean;
tpmCheckFailed: boolean;
upgradeEligibility: operatingSystemUpgradeEligibility | null;
windowsScore: number;
workFromAnywhereScore: number;
}
export interface windowsDeviceMalwareState extends entity {
additionalInformationUrl: string;
category: windowsMalwareCategory;
detectionCount: number;
displayName: string;
executionState: windowsMalwareExecutionState;
initialDetectionDateTime: Date;
lastStateChangeDateTime: Date;
severity: windowsMalwareSeverity;
state: windowsMalwareState;
threatState: windowsMalwareThreatState;
}
export interface importedWindowsAutopilotDeviceIdentityState  {
deviceErrorCode: number | null;
deviceErrorName: string;
deviceImportStatus: importedWindowsAutopilotDeviceIdentityImportStatus | null;
deviceRegistrationId: string;
}
export interface importedWindowsAutopilotDeviceIdentityUpload extends entity {
createdDateTimeUtc: Date | null;
status: importedWindowsAutopilotDeviceIdentityUploadStatus | null;
deviceIdentities: importedWindowsAutopilotDeviceIdentity[];
}
export interface mobileAppIdentifier  {
}
export interface androidMobileAppIdentifier extends mobileAppIdentifier {
packageId: string | null;
}
export interface iosMobileAppIdentifier extends mobileAppIdentifier {
bundleId: string | null;
}
export interface iPv4Range extends ipRange {
lowerAddress: string | null;
upperAddress: string | null;
}
export interface iPv6Range extends ipRange {
lowerAddress: string | null;
upperAddress: string | null;
}
export interface managedAppDiagnosticStatus  {
mitigationInstruction: string;
state: string;
validationName: string;
}
export interface managedAppPolicyDeploymentSummaryPerApp  {
configurationAppliedUserCount: number | null;
mobileAppIdentifier: mobileAppIdentifier;
}
export interface proxiedDomain  {
ipAddressOrFQDN: string | null;
proxy: string;
}
export interface windowsInformationProtectionApp  {
denied: boolean | null;
description: string;
displayName: string | null;
productName: string;
publisherName: string;
}
export interface windowsInformationProtectionDataRecoveryCertificate  {
certificate: Buffer;
description: string;
expirationDateTime: Date | null;
subjectName: string;
}
export interface windowsInformationProtectionDesktopApp extends windowsInformationProtectionApp {
binaryName: string | null;
binaryVersionHigh: string;
binaryVersionLow: string;
}
export interface windowsInformationProtectionIPRangeCollection  {
displayName: string | null;
ranges: ipRange[] | null;
}
export interface windowsInformationProtectionProxiedDomainCollection  {
displayName: string | null;
proxiedDomains: proxiedDomain[] | null;
}
export interface windowsInformationProtectionResourceCollection  {
displayName: string | null;
resources: string[];
}
export interface windowsInformationProtectionStoreApp extends windowsInformationProtectionApp {
}
export interface managedMobileApp extends entity {
mobileAppIdentifier: mobileAppIdentifier;
version: string;
}
export interface managedAppPolicyDeploymentSummary extends entity {
configurationDeployedUserCount: number | null;
configurationDeploymentSummaryPerApp: managedAppPolicyDeploymentSummaryPerApp[];
displayName: string;
lastRefreshTime: Date | null;
version: string;
}
export interface androidManagedAppRegistration extends managedAppRegistration {
}
export interface iosManagedAppRegistration extends managedAppRegistration {
}
export interface managedAppOperation extends entity {
displayName: string;
lastModifiedDateTime: Date | null;
state: string;
version: string;
}
export interface managedAppStatusRaw extends managedAppStatus {
content: Json;
}
export interface targetedManagedAppPolicyAssignment extends entity {
target: deviceAndAppManagementAssignmentTarget;
}
export interface windowsInformationProtectionAppLockerFile extends entity {
displayName: string;
file: Buffer;
fileHash: string;
version: string;
}
export interface localizedNotificationMessage extends entity {
isDefault: boolean | null;
lastModifiedDateTime: Date | null;
locale: string | null;
messageTemplate: string | null;
subject: string | null;
}
export interface resourceAction  {
allowedResourceActions: string[];
notAllowedResourceActions: string[];
}
export interface rolePermission  {
resourceActions: resourceAction[];
}
export interface deviceAndAppManagementRoleDefinition extends roleDefinition {
}
export interface deviceManagementExportJob extends entity {
expirationDateTime: Date | null;
filter: string;
format: deviceManagementReportFileFormat | null;
localizationType: deviceManagementExportJobLocalizationType | null;
reportName: string | null;
requestDateTime: Date | null;
select: string[];
snapshotId: string;
status: deviceManagementReportStatus | null;
url: string;
}
export interface enrollmentTroubleshootingEvent extends deviceManagementTroubleshootingEvent {
deviceId: string;
enrollmentType: deviceEnrollmentType | null;
failureCategory: deviceEnrollmentFailureReason | null;
failureReason: string;
managedDeviceIdentifier: string;
operatingSystem: string;
osVersion: string;
userId: string;
}
export interface serviceHealthIssuePost  {
createdDateTime: Date | null;
description: itemBody;
postType: postType;
}
export interface serviceUpdateMessageViewpoint  {
isArchived: boolean;
isFavorited: boolean;
isRead: boolean;
}
export interface serviceHealth extends entity {
service: string | null;
status: serviceHealthStatus | null;
issues: serviceHealthIssue[];
}
export interface serviceAnnouncementBase extends entity {
details: keyValuePair[];
endDateTime: Date;
lastModifiedDateTime: Date | null;
startDateTime: Date | null;
title: string | null;
}
export interface serviceHealthIssue extends serviceAnnouncementBase {
classification: serviceHealthClassificationType | null;
feature: string;
featureGroup: string;
impactDescription: string | null;
isResolved: boolean | null;
origin: serviceHealthOrigin | null;
posts: serviceHealthIssuePost[] | null;
service: string | null;
status: serviceHealthStatus | null;
}
export interface serviceUpdateMessage extends serviceAnnouncementBase {
actionRequiredByDateTime: Date;
attachmentsArchive: Buffer;
body: itemBody | null;
category: serviceUpdateCategory | null;
hasAttachments: boolean | null;
isMajorChange: boolean;
services: string[];
severity: serviceUpdateSeverity | null;
tags: string[];
viewPoint: serviceUpdateMessageViewpoint;
attachments: serviceAnnouncementAttachment[];
}
export interface serviceAnnouncementAttachment extends entity {
content: Buffer;
contentType: string;
lastModifiedDateTime: Date;
name: string;
size: number | null;
}
export interface aggregationOption  {
bucketDefinition: bucketAggregationDefinition | null;
field: string | null;
size: number;
}
export interface bucketAggregationDefinition  {
isDescending: boolean;
minimumCount: number;
prefixFilter: string;
ranges: bucketAggregationRange[];
sortBy: bucketAggregationSortProperty | null;
}
export interface alterationResponse  {
originalQueryString: string;
queryAlteration: searchAlteration;
queryAlterationType: searchAlterationType;
}
export interface searchAlteration  {
alteredHighlightedQueryString: string;
alteredQueryString: string;
alteredQueryTokens: alteredQueryToken[];
}
export interface alteredQueryToken  {
length: number;
offset: number;
suggestion: string;
}
export interface bucketAggregationRange  {
from: string | null;
to: string | null;
}
export interface collapseProperty  {
fields: string[] | null;
limit: number | null;
}
export interface resultTemplate  {
body: Json;
displayName: string;
}
export interface Dictionary  {
}
export interface resultTemplateDictionary extends Dictionary {
}
export interface resultTemplateOption  {
enableResultTemplate: boolean;
}
export interface searchAggregation  {
buckets: searchBucket[];
field: string;
}
export interface searchBucket  {
aggregationFilterToken: string;
count: number;
key: string;
}
export interface searchAlterationOptions  {
enableModification: boolean;
enableSuggestion: boolean;
}
export interface searchHit  {
contentSource: string;
hitId: string;
isCollapsed: boolean;
rank: number;
resultTemplateId: string;
summary: string;
resource: entity;
}
export interface searchHitsContainer  {
aggregations: searchAggregation[];
hits: searchHit[];
moreResultsAvailable: boolean;
total: number;
}
export interface searchQuery  {
queryString: string | null;
queryTemplate: string;
}
export interface searchRequest  {
aggregationFilters: string[];
aggregations: aggregationOption[];
collapseProperties: collapseProperty[];
contentSources: string[];
enableTopResults: boolean;
entityTypes: entityType[];
fields: string[];
from: number | null;
query: searchQuery | null;
queryAlterationOptions: searchAlterationOptions;
region: string;
resultTemplateOptions: resultTemplateOption;
sharePointOneDriveOptions: sharePointOneDriveOptions;
size: number | null;
sortProperties: sortProperty[];
}
export interface sharePointOneDriveOptions  {
includeContent: searchContent;
}
export interface sortProperty  {
isDescending: boolean;
name: string | null;
}
export interface searchResponse  {
hitsContainers: searchHitsContainer[];
queryAlterationResponse: alterationResponse;
resultTemplates: resultTemplateDictionary;
searchTerms: string[];
}
export interface searchEntity extends entity {
}
export interface plannerAppliedCategories  {
}
export interface plannerAssignment  {
assignedBy: identitySet;
assignedDateTime: Date;
orderHint: string;
}
export interface plannerAssignments  {
}
export interface plannerCategoryDescriptions  {
category1: string;
category10: string;
category11: string;
category12: string;
category13: string;
category14: string;
category15: string;
category16: string;
category17: string;
category18: string;
category19: string;
category2: string;
category20: string;
category21: string;
category22: string;
category23: string;
category24: string;
category25: string;
category3: string;
category4: string;
category5: string;
category6: string;
category7: string;
category8: string;
category9: string;
}
export interface plannerChecklistItem  {
isChecked: boolean;
lastModifiedBy: identitySet;
lastModifiedDateTime: Date;
orderHint: string;
title: string;
}
export interface plannerChecklistItems  {
}
export interface plannerExternalReference  {
alias: string;
lastModifiedBy: identitySet;
lastModifiedDateTime: Date;
previewPriority: string;
type: string;
}
export interface plannerExternalReferences  {
}
export interface plannerOrderHintsByAssignee  {
}
export interface plannerPlanContainer  {
containerId: string;
type: plannerContainerType;
url: string;
}
export interface plannerUserIds  {
}
export interface planner extends entity {
buckets: plannerBucket[];
plans: plannerPlan[];
tasks: plannerTask[];
}
export interface plannerBucket extends entity {
name: string | null;
orderHint: string;
planId: string;
tasks: plannerTask[];
}
export interface plannerPlan extends entity {
container: plannerPlanContainer;
createdBy: identitySet;
createdDateTime: Date;
owner: string;
title: string | null;
buckets: plannerBucket[];
details: plannerPlanDetails;
tasks: plannerTask[];
}
export interface plannerTask extends entity {
activeChecklistItemCount: number;
appliedCategories: plannerAppliedCategories;
assigneePriority: string;
assignments: plannerAssignments;
bucketId: string;
checklistItemCount: number;
completedBy: identitySet;
completedDateTime: Date;
conversationThreadId: string;
createdBy: identitySet;
createdDateTime: Date;
dueDateTime: Date;
hasDescription: boolean;
orderHint: string;
percentComplete: number;
planId: string;
previewType: plannerPreviewType;
priority: number;
referenceCount: number;
startDateTime: Date;
title: string | null;
assignedToTaskBoardFormat: plannerAssignedToTaskBoardTaskFormat;
bucketTaskBoardFormat: plannerBucketTaskBoardTaskFormat;
details: plannerTaskDetails;
progressTaskBoardFormat: plannerProgressTaskBoardTaskFormat;
}
export interface plannerAssignedToTaskBoardTaskFormat extends entity {
orderHintsByAssignee: plannerOrderHintsByAssignee;
unassignedOrderHint: string;
}
export interface plannerBucketTaskBoardTaskFormat extends entity {
orderHint: string;
}
export interface plannerPlanDetails extends entity {
categoryDescriptions: plannerCategoryDescriptions;
sharedWith: plannerUserIds;
}
export interface plannerProgressTaskBoardTaskFormat extends entity {
orderHint: string;
}
export interface plannerTaskDetails extends entity {
checklist: plannerChecklistItems;
description: string;
previewType: plannerPreviewType;
references: plannerExternalReferences;
}
export interface insightIdentity  {
address: string;
displayName: string;
id: string;
}
export interface resourceReference  {
id: string;
type: string;
webUrl: string;
}
export interface resourceVisualization  {
containerDisplayName: string;
containerType: string;
containerWebUrl: string;
mediaType: string;
previewImageUrl: string;
previewText: string;
title: string;
type: string;
}
export interface sharingDetail  {
sharedBy: insightIdentity;
sharedDateTime: Date;
sharingReference: resourceReference;
sharingSubject: string;
sharingType: string;
}
export interface usageDetails  {
lastAccessedDateTime: Date;
lastModifiedDateTime: Date;
}
export interface sharedInsight extends entity {
lastShared: sharingDetail;
resourceReference: resourceReference;
resourceVisualization: resourceVisualization;
sharingHistory: sharingDetail[];
lastSharedMethod: entity;
resource: entity;
}
export interface trending extends entity {
lastModifiedDateTime: Date;
resourceReference: resourceReference;
resourceVisualization: resourceVisualization;
weight: number | null;
resource: entity;
}
export interface usedInsight extends entity {
lastUsed: usageDetails;
resourceReference: resourceReference;
resourceVisualization: resourceVisualization;
resource: entity;
}
export interface changeTrackedEntity extends entity {
createdDateTime: Date;
lastModifiedBy: identitySet;
lastModifiedDateTime: Date;
}
export interface shiftPreferences extends changeTrackedEntity {
availability: shiftAvailability[];
}
export interface CopyNotebookModel  {
createdBy: string;
createdByIdentity: identitySet;
createdTime: Date;
id: string;
isDefault: boolean;
isShared: boolean;
lastModifiedBy: string;
lastModifiedByIdentity: identitySet;
lastModifiedTime: Date;
links: notebookLinks;
name: string;
sectionGroupsUrl: string;
sectionsUrl: string;
self: string;
userRole: onenoteUserRole;
}
export interface notebookLinks  {
oneNoteClientUrl: externalLink;
oneNoteWebUrl: externalLink;
}
export interface diagnostic  {
message: string;
url: string;
}
export interface externalLink  {
href: string;
}
export interface onenoteOperationError  {
code: string;
message: string;
}
export interface onenotePagePreview  {
links: onenotePagePreviewLinks;
previewText: string;
}
export interface onenotePagePreviewLinks  {
previewImageUrl: externalLink;
}
export interface onenotePatchContentCommand  {
action: onenotePatchActionType | null;
content: string;
position: onenotePatchInsertPosition;
target: string | null;
}
export interface pageLinks  {
oneNoteClientUrl: externalLink;
oneNoteWebUrl: externalLink;
}
export interface recentNotebook  {
displayName: string;
lastAccessedTime: Date;
links: recentNotebookLinks;
sourceService: onenoteSourceService;
}
export interface recentNotebookLinks  {
oneNoteClientUrl: externalLink;
oneNoteWebUrl: externalLink;
}
export interface sectionLinks  {
oneNoteClientUrl: externalLink;
oneNoteWebUrl: externalLink;
}
export interface onenoteEntityBaseModel extends entity {
self: string;
}
export interface onenoteEntitySchemaObjectModel extends onenoteEntityBaseModel {
createdDateTime: Date;
}
export interface onenoteEntityHierarchyModel extends onenoteEntitySchemaObjectModel {
createdBy: identitySet;
displayName: string;
lastModifiedBy: identitySet;
lastModifiedDateTime: Date;
}
export interface notebook extends onenoteEntityHierarchyModel {
isDefault: boolean;
isShared: boolean;
links: notebookLinks;
sectionGroupsUrl: string;
sectionsUrl: string;
userRole: onenoteUserRole;
sectionGroups: sectionGroup[];
sections: onenoteSection[];
}
export interface sectionGroup extends onenoteEntityHierarchyModel {
sectionGroupsUrl: string;
sectionsUrl: string;
parentNotebook: notebook;
parentSectionGroup: sectionGroup;
sectionGroups: sectionGroup[];
sections: onenoteSection[];
}
export interface onenoteSection extends onenoteEntityHierarchyModel {
isDefault: boolean;
links: sectionLinks;
pagesUrl: string;
pages: onenotePage[];
parentNotebook: notebook;
parentSectionGroup: sectionGroup;
}
export interface operation extends entity {
createdDateTime: Date;
lastActionDateTime: Date;
status: operationStatus;
}
export interface onenoteOperation extends operation {
error: onenoteOperationError;
percentComplete: string;
resourceId: string;
resourceLocation: string;
}
export interface onenotePage extends onenoteEntitySchemaObjectModel {
content: Buffer;
contentUrl: string;
createdByAppId: string;
lastModifiedDateTime: Date;
level: number;
links: pageLinks;
order: number;
title: string;
userTags: string[];
parentNotebook: notebook;
parentSection: onenoteSection;
}
export interface onenoteResource extends onenoteEntityBaseModel {
content: Buffer;
contentUrl: string;
}
export interface delegatedAdminAccessContainer  {
accessContainerId: string | null;
accessContainerType: delegatedAdminAccessContainerType | null;
}
export interface delegatedAdminAccessDetails  {
unifiedRoles: unifiedRole[] | null;
}
export interface unifiedRole  {
roleDefinitionId: string | null;
}
export interface delegatedAdminRelationshipCustomerParticipant  {
displayName: string;
tenantId: string | null;
}
export interface delegatedAdminAccessAssignment extends entity {
accessContainer: delegatedAdminAccessContainer | null;
accessDetails: delegatedAdminAccessDetails | null;
createdDateTime: Date;
lastModifiedDateTime: Date;
status: delegatedAdminAccessAssignmentStatus;
}
export interface delegatedAdminServiceManagementDetail extends entity {
serviceManagementUrl: string | null;
serviceName: string | null;
}
export interface delegatedAdminRelationshipOperation extends entity {
createdDateTime: Date | null;
data: string | null;
lastModifiedDateTime: Date | null;
operationType: delegatedAdminRelationshipOperationType | null;
status: longRunningOperationStatus | null;
}
export interface delegatedAdminRelationshipRequest extends entity {
action: delegatedAdminRelationshipRequestAction | null;
createdDateTime: Date;
lastModifiedDateTime: Date;
status: delegatedAdminRelationshipRequestStatus;
}
export interface approvalSettings  {
approvalMode: string;
approvalStages: unifiedApprovalStage[];
isApprovalRequired: boolean;
isApprovalRequiredForExtension: boolean;
isRequestorJustificationRequired: boolean;
}
export interface unifiedApprovalStage  {
approvalStageTimeOutInDays: number;
escalationApprovers: subjectSet[];
escalationTimeInMinutes: number;
isApproverJustificationRequired: boolean;
isEscalationEnabled: boolean;
primaryApprovers: subjectSet[];
}
export interface requestSchedule  {
expiration: expirationPattern;
recurrence: patternedRecurrence;
startDateTime: Date;
}
export interface ticketInfo  {
ticketNumber: string;
ticketSystem: string;
}
export interface unifiedRoleManagementPolicyRuleTarget  {
caller: string;
enforcedSettings: string[];
inheritableSettings: string[];
level: string;
operations: unifiedRoleManagementPolicyRuleTargetOperations[];
targetObjects: directoryObject[];
}
export interface unifiedRoleManagementPolicyRule extends entity {
target: unifiedRoleManagementPolicyRuleTarget;
}
export interface unifiedRoleManagementPolicyApprovalRule extends unifiedRoleManagementPolicyRule {
setting: approvalSettings;
}
export interface unifiedRoleManagementPolicyAuthenticationContextRule extends unifiedRoleManagementPolicyRule {
claimValue: string;
isEnabled: boolean;
}
export interface unifiedRoleManagementPolicyEnablementRule extends unifiedRoleManagementPolicyRule {
enabledRules: string[];
}
export interface unifiedRoleManagementPolicyExpirationRule extends unifiedRoleManagementPolicyRule {
isExpirationRequired: boolean;
maximumDuration: number;
}
export interface unifiedRoleManagementPolicyNotificationRule extends unifiedRoleManagementPolicyRule {
isDefaultRecipientsEnabled: boolean;
notificationLevel: string;
notificationRecipients: string[];
notificationType: string;
recipientType: string;
}
export interface archivedPrintJob  {
acquiredByPrinter: boolean | null;
acquiredDateTime: Date;
completionDateTime: Date;
copiesPrinted: number | null;
createdBy: userIdentity;
createdDateTime: Date | null;
id: string | null;
printerId: string;
printerName: string;
processingState: printJobProcessingState | null;
}
export interface integerRange  {
end: number;
start: number;
}
export interface printCertificateSigningRequest  {
content: string | null;
transportKey: string | null;
}
export interface printDocumentUploadProperties  {
contentType: string | null;
documentName: string | null;
size: number | null;
}
export interface printerCapabilities  {
bottomMargins: number[];
collation: boolean;
colorModes: printColorMode[];
contentTypes: string[];
copiesPerJob: integerRange;
dpis: number[];
duplexModes: printDuplexMode[];
feedOrientations: printerFeedOrientation[];
finishings: printFinishing[];
inputBins: string[];
isColorPrintingSupported: boolean;
isPageRangeSupported: boolean;
leftMargins: number[];
mediaColors: string[];
mediaSizes: string[];
mediaTypes: string[];
multipageLayouts: printMultipageLayout[];
orientations: printOrientation[];
outputBins: string[];
pagesPerSheet: number[];
qualities: printQuality[];
rightMargins: number[];
scalings: printScaling[];
supportsFitPdfToPage: boolean;
topMargins: number[];
}
export interface printerDefaults  {
colorMode: printColorMode;
contentType: string;
copiesPerJob: number;
dpi: number;
duplexMode: printDuplexMode;
finishings: printFinishing[];
fitPdfToPage: boolean;
inputBin: string;
mediaColor: string;
mediaSize: string;
mediaType: string;
multipageLayout: printMultipageLayout;
orientation: printOrientation;
outputBin: string;
pagesPerSheet: number;
quality: printQuality;
scaling: printScaling;
}
export interface printerLocation  {
altitudeInMeters: number;
building: string;
city: string;
countryOrRegion: string;
floor: string;
floorDescription: string;
latitude: number;
longitude: number;
organization: string[];
postalCode: string;
roomDescription: string;
roomName: string;
site: string;
stateOrProvince: string;
streetAddress: string;
subdivision: string[];
subunit: string[];
}
export interface printerShareViewpoint  {
lastUsedDateTime: Date;
}
export interface printerStatus  {
description: string;
details: printerProcessingStateDetail[] | null;
state: printerProcessingState | null;
}
export interface printJobConfiguration  {
collate: boolean;
colorMode: printColorMode;
copies: number;
dpi: number;
duplexMode: printDuplexMode;
feedOrientation: printerFeedOrientation;
finishings: printFinishing[];
fitPdfToPage: boolean;
inputBin: string;
margin: printMargin;
mediaSize: string;
mediaType: string;
multipageLayout: printMultipageLayout;
orientation: printOrientation;
outputBin: string;
pageRanges: integerRange[];
pagesPerSheet: number;
quality: printQuality;
scaling: printScaling;
}
export interface printMargin  {
bottom: number;
left: number;
right: number;
top: number;
}
export interface printJobStatus  {
description: string | null;
details: printJobStateDetail[] | null;
isAcquiredByPrinter: boolean | null;
state: printJobProcessingState | null;
}
export interface printOperationStatus  {
description: string | null;
state: printOperationProcessingState | null;
}
export interface printSettings  {
documentConversionEnabled: boolean | null;
}
export interface printTaskStatus  {
description: string | null;
state: printTaskProcessingState | null;
}
export interface printerBase extends entity {
capabilities: printerCapabilities;
defaults: printerDefaults;
displayName: string | null;
isAcceptingJobs: boolean;
location: printerLocation;
manufacturer: string;
model: string;
status: printerStatus | null;
jobs: printJob[];
}
export interface printerShare extends printerBase {
allowAllUsers: boolean | null;
createdDateTime: Date | null;
viewPoint: printerShareViewpoint;
allowedGroups: group[];
allowedUsers: user[];
printer: printer;
}
export interface print  {
settings: printSettings;
connectors: printConnector[];
operations: printOperation[];
printers: printer[];
services: printService[];
shares: printerShare[];
taskDefinitions: printTaskDefinition[];
}
export interface printConnector extends entity {
appVersion: string | null;
displayName: string | null;
fullyQualifiedDomainName: string | null;
location: printerLocation;
operatingSystem: string | null;
registeredDateTime: Date | null;
}
export interface printOperation extends entity {
createdDateTime: Date | null;
status: printOperationStatus | null;
}
export interface printer extends printerBase {
hasPhysicalDevice: boolean | null;
isShared: boolean | null;
lastSeenDateTime: Date;
registeredDateTime: Date | null;
connectors: printConnector[];
shares: printerShare[];
taskTriggers: printTaskTrigger[];
}
export interface printService extends entity {
endpoints: printServiceEndpoint[];
}
export interface printTaskDefinition extends entity {
createdBy: appIdentity | null;
displayName: string | null;
tasks: printTask[];
}
export interface printDocument extends entity {
contentType: string;
displayName: string;
size: number | null;
}
export interface printTaskTrigger extends entity {
event: printEvent | null;
definition: printTaskDefinition | null;
}
export interface printJob extends entity {
configuration: printJobConfiguration | null;
createdBy: userIdentity;
createdDateTime: Date | null;
isFetchable: boolean | null;
redirectedFrom: string;
redirectedTo: string;
status: printJobStatus | null;
documents: printDocument[];
tasks: printTask[];
}
export interface printerCreateOperation extends printOperation {
certificate: string;
printer: printer;
}
export interface printTask extends entity {
parentUrl: string | null;
status: printTaskStatus | null;
definition: printTaskDefinition | null;
trigger: printTaskTrigger | null;
}
export interface printServiceEndpoint extends entity {
displayName: string | null;
uri: string | null;
}
export interface imageInfo  {
addImageQuery: boolean;
alternateText: string;
alternativeText: string;
iconUrl: string;
}
export interface visualInfo  {
attribution: imageInfo;
backgroundColor: string;
content: Json;
description: string;
displayText: string | null;
}
export interface activityHistoryItem extends entity {
activeDurationSeconds: number;
createdDateTime: Date;
expirationDateTime: Date;
lastActiveDateTime: Date;
lastModifiedDateTime: Date;
startedDateTime: Date | null;
status: status;
userTimezone: string;
activity: userActivity | null;
}
export interface dataPolicyOperation extends entity {
completedDateTime: Date;
progress: number | null;
status: dataPolicyOperationStatus;
storageLocation: string;
submittedDateTime: Date | null;
userId: string | null;
}
export interface assignedTrainingInfo  {
assignedUserCount: number;
completedUserCount: number;
displayName: string;
}
export interface attackSimulationRepeatOffender  {
attackSimulationUser: attackSimulationUser;
repeatOffenceCount: number;
}
export interface attackSimulationUser  {
displayName: string;
email: string;
userId: string;
}
export interface attackSimulationSimulationUserCoverage  {
attackSimulationUser: attackSimulationUser;
clickCount: number;
compromisedCount: number;
latestSimulationDateTime: Date;
simulationCount: number;
}
export interface attackSimulationTrainingUserCoverage  {
attackSimulationUser: attackSimulationUser;
userTrainings: userTrainingStatusInfo[];
}
export interface userTrainingStatusInfo  {
assignedDateTime: Date;
completionDateTime: Date;
displayName: string;
trainingStatus: trainingStatus;
}
export interface emailIdentity extends identity {
email: string;
}
export interface recommendedAction  {
actionWebUrl: string;
potentialScoreImpact: number;
title: string;
}
export interface simulationEvent  {
count: number;
eventName: string;
}
export interface simulationEventsContent  {
compromisedRate: number;
events: simulationEvent[];
}
export interface simulationReport  {
overview: simulationReportOverview;
simulationUsers: userSimulationDetails[];
}
export interface simulationReportOverview  {
recommendedActions: recommendedAction[];
resolvedTargetsCount: number;
simulationEventsContent: simulationEventsContent;
trainingEventsContent: trainingEventsContent;
}
export interface userSimulationDetails  {
assignedTrainingsCount: number;
completedTrainingsCount: number;
compromisedDateTime: Date;
inProgressTrainingsCount: number;
isCompromised: boolean;
reportedPhishDateTime: Date;
simulationEvents: userSimulationEventInfo[];
simulationUser: attackSimulationUser;
trainingEvents: userTrainingEventInfo[];
}
export interface trainingEventsContent  {
assignedTrainingsInfos: assignedTrainingInfo[];
trainingsAssignedUserCount: number;
}
export interface userSimulationEventInfo  {
browser: string;
eventDateTime: Date;
eventName: string;
ipAddress: string;
osPlatformDeviceDetails: string;
}
export interface userTrainingEventInfo  {
displayName: string;
latestTrainingStatus: trainingStatus;
trainingAssignedProperties: userTrainingContentEventInfo;
trainingCompletedProperties: userTrainingContentEventInfo;
trainingUpdatedProperties: userTrainingContentEventInfo;
}
export interface userTrainingContentEventInfo  {
browser: string;
contentDateTime: Date;
ipAddress: string;
osPlatformDeviceDetails: string;
potentialScoreImpact: number;
}
export interface simulationAutomation extends entity {
createdBy: emailIdentity;
createdDateTime: Date;
description: string;
displayName: string;
lastModifiedBy: emailIdentity;
lastModifiedDateTime: Date;
lastRunDateTime: Date;
nextRunDateTime: Date;
status: simulationAutomationStatus;
runs: simulationAutomationRun[];
}
export interface simulation extends entity {
attackTechnique: simulationAttackTechnique;
attackType: simulationAttackType;
automationId: string;
completionDateTime: Date;
createdBy: emailIdentity;
createdDateTime: Date;
description: string;
displayName: string;
isAutomated: boolean;
lastModifiedBy: emailIdentity;
lastModifiedDateTime: Date;
launchDateTime: Date;
payloadDeliveryPlatform: payloadDeliveryPlatform;
report: simulationReport;
status: simulationStatus;
}
export interface simulationAutomationRun extends entity {
endDateTime: Date;
simulationId: string;
startDateTime: Date;
status: simulationAutomationRunStatus;
}
export interface alertDetection  {
detectionType: string;
method: string;
name: string;
}
export interface alertHistoryState  {
appId: string;
assignedTo: string;
comments: string[];
feedback: alertFeedback;
status: alertStatus;
updatedDateTime: Date;
user: string;
}
export interface alertTrigger  {
name: string;
type: string;
value: string;
}
export interface averageComparativeScore  {
averageScore: number;
basis: string;
}
export interface certificationControl  {
name: string;
url: string;
}
export interface cloudAppSecurityState  {
destinationServiceIp: string;
destinationServiceName: string;
riskScore: string;
}
export interface complianceInformation  {
certificationControls: certificationControl[];
certificationName: string;
}
export interface controlScore  {
controlCategory: string;
controlName: string;
description: string;
score: number;
}
export interface fileHash  {
hashType: fileHashType;
hashValue: string;
}
export interface fileSecurityState  {
fileHash: fileHash;
name: string;
path: string;
riskScore: string;
}
export interface hostSecurityState  {
fqdn: string;
isAzureAdJoined: boolean;
isAzureAdRegistered: boolean;
isHybridAzureDomainJoined: boolean;
netBiosName: string;
os: string;
privateIpAddress: string;
publicIpAddress: string;
riskScore: string;
}
export interface investigationSecurityState  {
name: string;
status: string;
}
export interface malwareState  {
category: string;
family: string;
name: string;
severity: string;
wasRunning: boolean;
}
export interface messageSecurityState  {
connectingIP: string;
deliveryAction: string;
deliveryLocation: string;
directionality: string;
internetMessageId: string;
messageFingerprint: string;
messageReceivedDateTime: Date;
messageSubject: string;
networkMessageId: string;
}
export interface networkConnection  {
applicationName: string;
destinationAddress: string;
destinationDomain: string;
destinationLocation: string;
destinationPort: string;
destinationUrl: string;
direction: connectionDirection;
domainRegisteredDateTime: Date;
localDnsName: string;
natDestinationAddress: string;
natDestinationPort: string;
natSourceAddress: string;
natSourcePort: string;
protocol: securityNetworkProtocol;
riskScore: string;
sourceAddress: string;
sourceLocation: string;
sourcePort: string;
status: connectionStatus;
urlParameters: string;
}
export interface process  {
accountName: string;
commandLine: string;
createdDateTime: Date;
fileHash: fileHash;
integrityLevel: processIntegrityLevel;
isElevated: boolean;
name: string;
parentProcessCreatedDateTime: Date;
parentProcessId: number;
parentProcessName: string;
path: string;
processId: number;
}
export interface registryKeyState  {
hive: registryHive;
key: string;
oldKey: string;
oldValueData: string;
oldValueName: string;
operation: registryOperation;
processId: number;
valueData: string;
valueName: string;
valueType: registryValueType;
}
export interface secureScoreControlStateUpdate  {
assignedTo: string;
comment: string;
state: string;
updatedBy: string;
updatedDateTime: Date;
}
export interface securityResource  {
resource: string;
resourceType: securityResourceType;
}
export interface securityVendorInformation  {
provider: string;
providerVersion: string;
subProvider: string;
vendor: string;
}
export interface uriClickSecurityState  {
clickAction: string;
clickDateTime: Date;
id: string;
sourceId: string;
uriDomain: string;
verdict: string;
}
export interface userSecurityState  {
aadUserId: string;
accountName: string;
domainName: string;
emailRole: emailRole;
isVpn: boolean;
logonDateTime: Date;
logonId: string;
logonIp: string;
logonLocation: string;
logonType: logonType;
onPremisesSecurityIdentifier: string;
riskScore: string;
userAccountType: userAccountSecurityType;
userPrincipalName: string;
}
export interface vulnerabilityState  {
cve: string;
severity: string;
wasRunning: boolean;
}
export interface participantJoiningResponse  {
}
export interface acceptJoinResponse extends participantJoiningResponse {
}
export interface mediaConfig  {
}
export interface appHostedMediaConfig extends mediaConfig {
blob: string;
}
export interface attendanceInterval  {
durationInSeconds: number;
joinDateTime: Date;
leaveDateTime: Date;
}
export interface broadcastMeetingCaptionSettings  {
isCaptionEnabled: boolean;
spokenLanguage: string;
translationLanguages: string[];
}
export interface callMediaState  {
audio: mediaState;
}
export interface callOptions  {
hideBotAfterEscalation: boolean;
isContentSharingNotificationEnabled: boolean;
}
export interface callRoute  {
final: identitySet | null;
original: identitySet | null;
routingType: routingType | null;
}
export interface callTranscriptionInfo  {
lastModifiedDateTime: Date;
state: callTranscriptionState | null;
}
export interface commsNotification  {
changeType: changeType | null;
resourceUrl: string | null;
}
export interface commsNotifications  {
value: commsNotification[];
}
export interface incomingCallOptions extends callOptions {
}
export interface incomingContext  {
observedParticipantId: string;
onBehalfOf: identitySet;
sourceParticipantId: string;
transferor: identitySet;
}
export interface invitationParticipantInfo  {
hidden: boolean;
identity: identitySet | null;
participantId: string;
removeFromDefaultAudioRoutingGroup: boolean;
replacesCallId: string;
}
export interface inviteNewBotResponse extends participantJoiningResponse {
inviteUri: string;
}
export interface meetingInfo  {
}
export interface joinMeetingIdMeetingInfo extends meetingInfo {
joinMeetingId: string | null;
passcode: string;
}
export interface mediaInfo  {
resourceId: string;
uri: string | null;
}
export interface prompt  {
}
export interface mediaPrompt extends prompt {
mediaInfo: mediaInfo | null;
}
export interface mediaStream  {
direction: mediaDirection | null;
label: string;
mediaType: modality | null;
serverMuted: boolean | null;
sourceId: string | null;
}
export interface meetingParticipantInfo  {
identity: identitySet;
role: onlineMeetingRole;
upn: string;
}
export interface onlineMeetingRestricted  {
contentSharingDisabled: onlineMeetingContentSharingDisabledReason;
videoDisabled: onlineMeetingVideoDisabledReason;
}
export interface organizerMeetingInfo extends meetingInfo {
organizer: identitySet | null;
}
export interface outgoingCallOptions extends callOptions {
}
export interface participantInfo  {
countryCode: string;
endpointType: endpointType;
identity: identitySet | null;
languageId: string;
participantId: string;
region: string;
}
export interface presenceStatusMessage  {
expiryDateTime: dateTimeTimeZone;
message: itemBody;
publishedDateTime: Date;
}
export interface recordingInfo  {
initiator: identitySet;
recordingStatus: recordingStatus | null;
}
export interface rejectJoinResponse extends participantJoiningResponse {
reason: rejectReason | null;
}
export interface serviceHostedMediaConfig extends mediaConfig {
preFetchMedia: mediaInfo[];
}
export interface teleconferenceDeviceMediaQuality  {
averageInboundJitter: number;
averageInboundPacketLossRateInPercentage: number;
averageInboundRoundTripDelay: number;
averageOutboundJitter: number;
averageOutboundPacketLossRateInPercentage: number;
averageOutboundRoundTripDelay: number;
channelIndex: number | null;
inboundPackets: number;
localIPAddress: string;
localPort: number;
maximumInboundJitter: number;
maximumInboundPacketLossRateInPercentage: number;
maximumInboundRoundTripDelay: number;
maximumOutboundJitter: number;
maximumOutboundPacketLossRateInPercentage: number;
maximumOutboundRoundTripDelay: number;
mediaDuration: number;
networkLinkSpeedInBytes: number;
outboundPackets: number;
remoteIPAddress: string;
remotePort: number;
}
export interface teleconferenceDeviceAudioQuality extends teleconferenceDeviceMediaQuality {
}
export interface teleconferenceDeviceQuality  {
callChainId: string | null;
cloudServiceDeploymentEnvironment: string;
cloudServiceDeploymentId: string;
cloudServiceInstanceName: string;
cloudServiceName: string;
deviceDescription: string | null;
deviceName: string | null;
mediaLegId: string | null;
mediaQualityList: teleconferenceDeviceMediaQuality[] | null;
participantId: string | null;
}
export interface teleconferenceDeviceVideoQuality extends teleconferenceDeviceMediaQuality {
averageInboundBitRate: number;
averageInboundFrameRate: number;
averageOutboundBitRate: number;
averageOutboundFrameRate: number;
}
export interface teleconferenceDeviceScreenSharingQuality extends teleconferenceDeviceVideoQuality {
}
export interface tokenMeetingInfo extends meetingInfo {
token: string | null;
}
export interface toneInfo  {
sequenceId: number | null;
tone: tone | null;
}
export interface commsOperation extends entity {
clientContext: string;
resultInfo: resultInfo;
status: operationStatus | null;
}
export interface addLargeGalleryViewOperation extends commsOperation {
}
export interface attendanceRecord extends entity {
attendanceIntervals: attendanceInterval[];
emailAddress: string;
identity: identity;
role: string;
totalAttendanceInSeconds: number;
}
export interface audioRoutingGroup extends entity {
receivers: string[];
routingMode: routingMode | null;
sources: string[];
}
export interface contentSharingSession extends entity {
}
export interface participant extends entity {
info: participantInfo | null;
isInLobby: boolean | null;
isMuted: boolean | null;
mediaStreams: mediaStream[];
metadata: string;
recordingInfo: recordingInfo;
restrictedExperience: onlineMeetingRestricted;
}
export interface cancelMediaProcessingOperation extends commsOperation {
}
export interface inviteParticipantsOperation extends commsOperation {
participants: invitationParticipantInfo[] | null;
}
export interface muteParticipantOperation extends commsOperation {
}
export interface participantJoiningNotification extends entity {
call: call;
}
export interface participantLeftNotification extends entity {
participantId: string | null;
call: call;
}
export interface playPromptOperation extends commsOperation {
}
export interface recordOperation extends commsOperation {
recordingAccessToken: string;
recordingLocation: string;
}
export interface startHoldMusicOperation extends commsOperation {
}
export interface stopHoldMusicOperation extends commsOperation {
}
export interface subscribeToToneOperation extends commsOperation {
}
export interface unmuteParticipantOperation extends commsOperation {
}
export interface updateRecordingStatusOperation extends commsOperation {
}
export interface passwordResetResponse  {
newPassword: string;
}
export interface authenticationMethod extends entity {
}
export interface emailAuthenticationMethod extends authenticationMethod {
emailAddress: string;
}
export interface fido2AuthenticationMethod extends authenticationMethod {
aaGuid: string;
attestationCertificates: string[];
attestationLevel: attestationLevel;
createdDateTime: Date;
displayName: string;
model: string;
}
export interface microsoftAuthenticatorAuthenticationMethod extends authenticationMethod {
createdDateTime: Date;
deviceTag: string;
displayName: string;
phoneAppVersion: string;
device: device;
}
export interface passwordAuthenticationMethod extends authenticationMethod {
createdDateTime: Date;
password: string;
}
export interface phoneAuthenticationMethod extends authenticationMethod {
phoneNumber: string;
phoneType: authenticationPhoneType;
smsSignInState: authenticationMethodSignInState;
}
export interface softwareOathAuthenticationMethod extends authenticationMethod {
secretKey: string;
}
export interface temporaryAccessPassAuthenticationMethod extends authenticationMethod {
createdDateTime: Date;
isUsable: boolean;
isUsableOnce: boolean;
lifetimeInMinutes: number;
methodUsabilityReason: string;
startDateTime: Date;
temporaryAccessPass: string;
}
export interface windowsHelloForBusinessAuthenticationMethod extends authenticationMethod {
createdDateTime: Date;
displayName: string;
keyStrength: authenticationMethodKeyStrength;
device: device;
}
export interface changeNotification  {
changeType: changeType | null;
clientState: string;
encryptedContent: changeNotificationEncryptedContent;
id: string;
lifecycleEvent: lifecycleEventType;
resource: string | null;
resourceData: resourceData;
subscriptionExpirationDateTime: Date | null;
subscriptionId: string | null;
tenantId: string | null;
}
export interface changeNotificationEncryptedContent  {
data: string | null;
dataKey: string | null;
dataSignature: string | null;
encryptionCertificateId: string | null;
encryptionCertificateThumbprint: string | null;
}
export interface resourceData  {
}
export interface changeNotificationCollection  {
validationTokens: string[];
value: changeNotification[] | null;
}
export interface actionResultPart  {
error: publicError;
}
export interface aadUserConversationMemberResult extends actionResultPart {
userId: string;
}
export interface teamworkNotificationRecipient  {
}
export interface aadUserNotificationRecipient extends teamworkNotificationRecipient {
userId: string | null;
}
export interface eventMessageDetail  {
}
export interface callEndedEventMessageDetail extends eventMessageDetail {
callDuration: number;
callEventType: teamworkCallEventType;
callId: string;
callParticipants: callParticipantInfo[];
initiator: identitySet;
}
export interface callParticipantInfo  {
participant: identitySet;
}
export interface callRecordingEventMessageDetail extends eventMessageDetail {
callId: string;
callRecordingDisplayName: string;
callRecordingDuration: number;
callRecordingStatus: callRecordingStatus;
callRecordingUrl: string;
initiator: identitySet;
meetingOrganizer: identitySet;
}
export interface callStartedEventMessageDetail extends eventMessageDetail {
callEventType: teamworkCallEventType;
callId: string;
initiator: identitySet;
}
export interface callTranscriptEventMessageDetail extends eventMessageDetail {
callId: string;
callTranscriptICalUid: string;
meetingOrganizer: identitySet;
}
export interface channelAddedEventMessageDetail extends eventMessageDetail {
channelDisplayName: string;
channelId: string;
initiator: identitySet;
}
export interface channelDeletedEventMessageDetail extends eventMessageDetail {
channelDisplayName: string;
channelId: string;
initiator: identitySet;
}
export interface channelDescriptionUpdatedEventMessageDetail extends eventMessageDetail {
channelDescription: string;
channelId: string;
initiator: identitySet;
}
export interface channelIdentity  {
channelId: string;
teamId: string;
}
export interface channelMembersNotificationRecipient extends teamworkNotificationRecipient {
channelId: string | null;
teamId: string | null;
}
export interface channelRenamedEventMessageDetail extends eventMessageDetail {
channelDisplayName: string;
channelId: string;
initiator: identitySet;
}
export interface channelSetAsFavoriteByDefaultEventMessageDetail extends eventMessageDetail {
channelId: string;
initiator: identitySet;
}
export interface channelUnsetAsFavoriteByDefaultEventMessageDetail extends eventMessageDetail {
channelId: string;
initiator: identitySet;
}
export interface chatMembersNotificationRecipient extends teamworkNotificationRecipient {
chatId: string | null;
}
export interface chatMessageAttachment  {
content: string;
contentType: string;
contentUrl: string;
id: string;
name: string;
teamsAppId: string;
thumbnailUrl: string;
}
export interface chatMessageFromIdentitySet extends identitySet {
}
export interface chatMessageHistoryItem  {
actions: chatMessageActions | null;
modifiedDateTime: Date | null;
reaction: chatMessageReaction;
}
export interface chatMessageReaction  {
createdDateTime: Date | null;
reactionType: string | null;
user: chatMessageReactionIdentitySet | null;
}
export interface chatMessageMention  {
id: number;
mentioned: chatMessageMentionedIdentitySet;
mentionText: string;
}
export interface chatMessageMentionedIdentitySet extends identitySet {
conversation: teamworkConversationIdentity;
}
export interface teamworkConversationIdentity extends identity {
conversationIdentityType: teamworkConversationIdentityType;
}
export interface chatMessagePolicyViolation  {
dlpAction: chatMessagePolicyViolationDlpActionTypes;
justificationText: string;
policyTip: chatMessagePolicyViolationPolicyTip;
userAction: chatMessagePolicyViolationUserActionTypes;
verdictDetails: chatMessagePolicyViolationVerdictDetailsTypes;
}
export interface chatMessagePolicyViolationPolicyTip  {
complianceUrl: string;
generalText: string;
matchedConditionDescriptions: string[];
}
export interface chatMessageReactionIdentitySet extends identitySet {
}
export interface chatRenamedEventMessageDetail extends eventMessageDetail {
chatDisplayName: string;
chatId: string;
initiator: identitySet;
}
export interface chatViewpoint  {
isHidden: boolean;
lastMessageReadDateTime: Date;
}
export interface conversationMemberRoleUpdatedEventMessageDetail extends eventMessageDetail {
conversationMemberRoles: string[];
conversationMemberUser: teamworkUserIdentity;
initiator: identitySet;
}
export interface teamworkUserIdentity extends identity {
userIdentityType: teamworkUserIdentityType;
}
export interface meetingPolicyUpdatedEventMessageDetail extends eventMessageDetail {
initiator: identitySet;
meetingChatEnabled: boolean;
meetingChatId: string;
}
export interface membersAddedEventMessageDetail extends eventMessageDetail {
initiator: identitySet;
members: teamworkUserIdentity[];
visibleHistoryStartDateTime: Date;
}
export interface membersDeletedEventMessageDetail extends eventMessageDetail {
initiator: identitySet;
members: teamworkUserIdentity[];
}
export interface membersJoinedEventMessageDetail extends eventMessageDetail {
initiator: identitySet;
members: teamworkUserIdentity[];
}
export interface membersLeftEventMessageDetail extends eventMessageDetail {
initiator: identitySet;
members: teamworkUserIdentity[];
}
export interface messagePinnedEventMessageDetail extends eventMessageDetail {
eventDateTime: Date;
initiator: identitySet;
}
export interface messageUnpinnedEventMessageDetail extends eventMessageDetail {
eventDateTime: Date;
initiator: identitySet;
}
export interface operationError  {
code: string;
message: string;
}
export interface provisionChannelEmailResult  {
email: string;
}
export interface tabUpdatedEventMessageDetail extends eventMessageDetail {
initiator: identitySet;
tabId: string;
}
export interface teamArchivedEventMessageDetail extends eventMessageDetail {
initiator: identitySet;
teamId: string;
}
export interface teamClassSettings  {
notifyGuardiansAboutAssignments: boolean;
}
export interface teamCreatedEventMessageDetail extends eventMessageDetail {
initiator: identitySet;
teamDescription: string;
teamDisplayName: string;
teamId: string;
}
export interface teamDescriptionUpdatedEventMessageDetail extends eventMessageDetail {
initiator: identitySet;
teamDescription: string;
teamId: string;
}
export interface teamJoiningDisabledEventMessageDetail extends eventMessageDetail {
initiator: identitySet;
teamId: string;
}
export interface teamJoiningEnabledEventMessageDetail extends eventMessageDetail {
initiator: identitySet;
teamId: string;
}
export interface teamMembersNotificationRecipient extends teamworkNotificationRecipient {
teamId: string | null;
}
export interface teamRenamedEventMessageDetail extends eventMessageDetail {
initiator: identitySet;
teamDisplayName: string;
teamId: string;
}
export interface teamsAppAuthorization  {
requiredPermissionSet: teamsAppPermissionSet;
}
export interface teamsAppPermissionSet  {
resourceSpecificPermissions: teamsAppResourceSpecificPermission[];
}
export interface teamsAppInstalledEventMessageDetail extends eventMessageDetail {
initiator: identitySet;
teamsAppDisplayName: string;
teamsAppId: string;
}
export interface teamsAppResourceSpecificPermission  {
permissionType: teamsAppResourceSpecificPermissionType;
permissionValue: string;
}
export interface teamsAppRemovedEventMessageDetail extends eventMessageDetail {
initiator: identitySet;
teamsAppDisplayName: string;
teamsAppId: string;
}
export interface teamsAppUpgradedEventMessageDetail extends eventMessageDetail {
initiator: identitySet;
teamsAppDisplayName: string;
teamsAppId: string;
}
export interface teamsTabConfiguration  {
contentUrl: string;
entityId: string;
removeUrl: string;
websiteUrl: string;
}
export interface teamUnarchivedEventMessageDetail extends eventMessageDetail {
initiator: identitySet;
teamId: string;
}
export interface teamworkActivityTopic  {
source: teamworkActivityTopicSource;
value: string | null;
webUrl: string;
}
export interface teamworkApplicationIdentity extends identity {
applicationIdentityType: teamworkApplicationIdentityType;
}
export interface teamworkOnlineMeetingInfo  {
calendarEventId: string;
joinWebUrl: string;
organizer: teamworkUserIdentity;
}
export interface teamworkTagIdentity extends identity {
}
export interface aadUserConversationMember extends conversationMember {
email: string;
tenantId: string;
userId: string;
user: user;
}
export interface anonymousGuestConversationMember extends conversationMember {
anonymousGuestId: string;
}
export interface appCatalogs extends entity {
teamsApps: teamsApp[];
}
export interface teamsApp extends entity {
displayName: string;
distributionMethod: teamsAppDistributionMethod;
externalId: string;
appDefinitions: teamsAppDefinition[];
}
export interface teamInfo extends entity {
displayName: string;
tenantId: string;
team: team;
}
export interface associatedTeamInfo extends teamInfo {
}
export interface azureCommunicationServicesUserConversationMember extends conversationMember {
azureCommunicationServicesId: string;
}
export interface chatMessage extends entity {
attachments: chatMessageAttachment[];
body: itemBody | null;
channelIdentity: channelIdentity;
chatId: string;
createdDateTime: Date;
deletedDateTime: Date;
etag: string;
eventDetail: eventMessageDetail;
from: chatMessageFromIdentitySet;
importance: chatMessageImportance | null;
lastEditedDateTime: Date;
lastModifiedDateTime: Date;
locale: string | null;
mentions: chatMessageMention[];
messageHistory: chatMessageHistoryItem[];
messageType: chatMessageType | null;
policyViolation: chatMessagePolicyViolation;
reactions: chatMessageReaction[];
replyToId: string;
subject: string;
summary: string;
webUrl: string;
hostedContents: chatMessageHostedContent[];
replies: chatMessage[];
}
export interface sharedWithChannelTeamInfo extends teamInfo {
isHostTeam: boolean;
allowedMembers: conversationMember[];
}
export interface teamsTab extends entity {
configuration: teamsTabConfiguration;
displayName: string;
webUrl: string;
teamsApp: teamsApp;
}
export interface chatMessageInfo extends entity {
body: itemBody;
createdDateTime: Date;
eventDetail: eventMessageDetail;
from: chatMessageFromIdentitySet;
isDeleted: boolean;
messageType: chatMessageType | null;
}
export interface pinnedChatMessageInfo extends entity {
message: chatMessage;
}
export interface teamworkHostedContent extends entity {
contentBytes: Buffer;
contentType: string;
}
export interface chatMessageHostedContent extends teamworkHostedContent {
}
export interface deletedTeam extends entity {
channels: channel[];
}
export interface microsoftAccountUserConversationMember extends conversationMember {
userId: string;
}
export interface skypeForBusinessUserConversationMember extends conversationMember {
tenantId: string;
userId: string;
}
export interface skypeUserConversationMember extends conversationMember {
skypeId: string;
}
export interface teamsAppDefinition extends entity {
authorization: teamsAppAuthorization;
createdBy: identitySet;
description: string;
displayName: string;
lastModifiedDateTime: Date;
publishingState: teamsAppPublishingState;
shortDescription: string;
teamsAppId: string;
version: string;
bot: teamworkBot;
}
export interface teamworkBot extends entity {
}
export interface teamsAppSettings extends entity {
allowUserRequestsForAppAccess: boolean;
}
export interface teamwork extends entity {
workforceIntegrations: workforceIntegration[];
deletedTeams: deletedTeam[];
teamsAppSettings: teamsAppSettings;
}
export interface workforceIntegration extends changeTrackedEntity {
apiVersion: number;
displayName: string;
encryption: workforceIntegrationEncryption;
isActive: boolean;
supportedEntities: workforceIntegrationSupportedEntities;
url: string;
}
export interface teamworkTagMember extends entity {
displayName: string;
tenantId: string;
userId: string;
}
export interface userScopeTeamsAppInstallation extends teamsAppInstallation {
chat: chat;
}
export interface scheduleEntity  {
endDateTime: Date;
startDateTime: Date;
theme: scheduleEntityTheme | null;
}
export interface shiftItem extends scheduleEntity {
activities: shiftActivity[];
displayName: string;
notes: string;
}
export interface openShiftItem extends shiftItem {
openSlotCount: number | null;
}
export interface shiftActivity  {
code: string;
displayName: string;
endDateTime: Date;
isPaid: boolean;
startDateTime: Date;
theme: scheduleEntityTheme | null;
}
export interface shiftAvailability  {
recurrence: patternedRecurrence;
timeSlots: timeRange[];
timeZone: string;
}
export interface timeRange  {
endTime: Date;
startTime: Date;
}
export interface timeOffItem extends scheduleEntity {
timeOffReasonId: string;
}
export interface workforceIntegrationEncryption  {
protocol: workforceIntegrationEncryptionProtocol;
secret: string;
}
export interface scheduleChangeRequest extends changeTrackedEntity {
assignedTo: scheduleChangeRequestActor;
managerActionDateTime: Date;
managerActionMessage: string;
managerUserId: string;
senderDateTime: Date;
senderMessage: string;
senderUserId: string;
state: scheduleChangeState;
}
export interface offerShiftRequest extends scheduleChangeRequest {
recipientActionDateTime: Date;
recipientActionMessage: string;
recipientUserId: string;
senderShiftId: string;
}
export interface openShift extends changeTrackedEntity {
draftOpenShift: openShiftItem;
schedulingGroupId: string;
sharedOpenShift: openShiftItem;
}
export interface openShiftChangeRequest extends scheduleChangeRequest {
openShiftId: string;
}
export interface schedulingGroup extends changeTrackedEntity {
displayName: string;
isActive: boolean;
userIds: string[];
}
export interface shift extends changeTrackedEntity {
draftShift: shiftItem;
schedulingGroupId: string;
sharedShift: shiftItem;
userId: string;
}
export interface swapShiftsChangeRequest extends offerShiftRequest {
recipientShiftId: string;
}
export interface timeOffReason extends changeTrackedEntity {
displayName: string;
iconType: timeOffReasonIconType;
isActive: boolean;
}
export interface timeOffRequest extends scheduleChangeRequest {
endDateTime: Date;
startDateTime: Date;
timeOffReasonId: string;
}
export interface timeOff extends changeTrackedEntity {
draftTimeOff: timeOffItem;
sharedTimeOff: timeOffItem;
userId: string;
}
export interface emailFileAssessmentRequest extends threatAssessmentRequest {
contentData: string | null;
destinationRoutingReason: mailDestinationRoutingReason;
recipientEmail: string | null;
}
export interface fileAssessmentRequest extends threatAssessmentRequest {
contentData: string | null;
fileName: string | null;
}
export interface mailAssessmentRequest extends threatAssessmentRequest {
destinationRoutingReason: mailDestinationRoutingReason;
messageUri: string | null;
recipientEmail: string | null;
}
export interface threatAssessmentResult extends entity {
createdDateTime: Date;
message: string;
resultType: threatAssessmentResultType;
}
export interface urlAssessmentRequest extends threatAssessmentRequest {
url: string | null;
}
export interface attachmentInfo  {
attachmentType: attachmentType;
contentType: string;
name: string;
size: number;
}
export interface attachmentBase extends entity {
contentType: string;
lastModifiedDateTime: Date;
name: string;
size: number | null;
}
export interface attachmentSession extends entity {
content: Buffer;
expirationDateTime: Date;
nextExpectedRanges: string[];
}
export interface checklistItem extends entity {
checkedDateTime: Date;
createdDateTime: Date | null;
displayName: string;
isChecked: boolean;
}
export interface linkedResource extends entity {
applicationName: string;
displayName: string;
externalId: string;
webUrl: string;
}
export interface taskFileAttachment extends attachmentBase {
contentBytes: Buffer | null;
}
export interface todoTaskList extends entity {
displayName: string;
isOwner: boolean | null;
isShared: boolean | null;
wellknownListName: wellknownListName | null;
extensions: extension[];
tasks: todoTask[];
}
export interface todoTask extends entity {
body: itemBody;
bodyLastModifiedDateTime: Date | null;
categories: string[];
completedDateTime: dateTimeTimeZone;
createdDateTime: Date | null;
dueDateTime: dateTimeTimeZone;
hasAttachments: boolean;
importance: importance | null;
isReminderOn: boolean | null;
lastModifiedDateTime: Date | null;
recurrence: patternedRecurrence;
reminderDateTime: dateTimeTimeZone;
startDateTime: dateTimeTimeZone;
status: taskStatus | null;
title: string;
attachments: attachmentBase[];
attachmentSessions: attachmentSession[];
checklistItems: checklistItem[];
extensions: extension[];
linkedResources: linkedResource[];
}
export interface employeeExperience  {
learningCourseActivities: learningCourseActivity[];
learningProviders: learningProvider[];
}
export interface learningCourseActivity extends entity {
completedDateTime: Date;
completionPercentage: number;
externalcourseActivityId: string;
learnerUserId: string | null;
learningContentId: string | null;
learningProviderId: string;
status: courseStatus;
}
export interface learningProvider extends entity {
displayName: string | null;
isCourseActivitySyncEnabled: boolean;
loginWebUrl: string;
longLogoWebUrlForDarkTheme: string | null;
longLogoWebUrlForLightTheme: string | null;
squareLogoWebUrlForDarkTheme: string | null;
squareLogoWebUrlForLightTheme: string | null;
learningContents: learningContent[];
learningCourseActivities: learningCourseActivity[];
}
export interface learningAssignment extends learningCourseActivity {
assignedDateTime: Date;
assignerUserId: string;
assignmentType: assignmentType | null;
dueDateTime: dateTimeTimeZone;
notes: itemBody;
}
export interface learningContent extends entity {
additionalTags: string[];
contentWebUrl: string | null;
contributors: string[];
createdDateTime: Date;
description: string;
duration: number;
externalId: string | null;
format: string;
isActive: boolean;
isPremium: boolean;
isSearchable: boolean;
languageTag: string | null;
lastModifiedDateTime: Date;
numberOfPages: number;
skillTags: string[];
sourceName: string;
thumbnailWebUrl: string;
title: string | null;
}
export interface learningSelfInitiatedCourse extends learningCourseActivity {
startedDateTime: Date;
}