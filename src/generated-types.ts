export const KeyProperty = Symbol.for("key");
export type Gettable<T = {}> = {
    (init?: RequestInit): Promise<PropertiesOf<T>>;
    get(init?: RequestInit): Promise<PropertiesOf<T>>;
}
export type ColGettable<T = {}> = {
    (init?: RequestInit): Promise<T>;
    get(init?: RequestInit): Promise<T>;
}
export type Updateable<T = {}> = {
    update(props: Partial<T>): Promise<PropertiesOf<T>>;
}
export type Deleteable<T = {}> = {
    delete(): Promise<void>;
}
export type Addable<T = {}> = {
    add(props: Partial<T>): Promise<PropertiesOf<T>>;
}
export type Merge<B, P> = {
    [K in (keyof B | keyof P)]: (K extends keyof B ? B[K] : never) | (K extends keyof P ? P[K] : never)
}
export type CleanEntity<T> = Omit<T, "update" | "delete" | "add" | "get" | "(init?: RequestInit)">;
export type PropertiesOf<C> = { [K in keyof C as C[K] extends Function ? never : K]: C[K] }
export type Collection<T> = ColGettable<PropertiesOf<T>[]> & Addable<T> & {
    byId(id: string): T;
    top(top: number): Collection<T>;
    select(...fields: (keyof T)[]): Collection<T>;
    filter(filter: string): Collection<T>;
    expand(...fields: (keyof T)[]): Collection<T>;
    [Symbol.asyncIterator](): AsyncIterator<PropertiesOf<T>[]>;
}
export type Entity<base, propsType, merged = Merge<CleanEntity<base>, propsType>> = merged & Gettable<merged> & Updateable<merged> & Deleteable<merged> & {
    select(...fields: (keyof merged)[]): Entity<base, propsType>;
    expand(...fields: (keyof merged)[]): Entity<base, propsType>;
}
export type Singleton<entityType> = Gettable<entityType> & { [K in (keyof entityType)]: entityType[K] }
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
export interface entityProps {
    [KeyProperty]: "id";
    id: string | null;
}
export type entity = {
}
export interface customExtensionAuthenticationConfiguration {
}
export interface azureAdPopTokenAuthentication extends customExtensionAuthenticationConfiguration {
}
export interface customExtensionCallbackConfiguration {
    timeoutDuration: number;
}
export interface customExtensionCalloutRequest {
    data: customExtensionData;
    source: string;
    type: string;
}
export interface customExtensionData {
}
export interface customExtensionCalloutResponse {
    data: customExtensionData;
    source: string;
    type: string;
}
export interface customExtensionClientConfiguration {
    timeoutInMilliseconds: number;
}
export interface customExtensionEndpointConfiguration {
}
export interface emailSettings {
    senderDomain: string | null;
    useCompanyBranding: boolean | null;
}
export interface identity {
    displayName: string;
    id: string;
}
export interface keyValuePair {
    name: string | null;
    value: string;
}
export interface logicAppTriggerEndpointConfiguration extends customExtensionEndpointConfiguration {
    logicAppWorkflowName: string;
    resourceGroupName: string;
    subscriptionId: string;
    url: string;
}
export interface subjectSet {
}
export interface directoryObjectProps extends entityProps {
    deletedDateTime: Date;
}
export type directoryObject = Entity<entity, directoryObjectProps> & {
    checkMemberGroups(groupIds: Collection<string>): Collection<string>;
    checkMemberObjects(ids: Collection<string>): Collection<string>;
    getMemberGroups(securityEnabledOnly: boolean): Collection<string>;
    getMemberObjects(securityEnabledOnly: boolean): Collection<string>;
    restore(): directoryObject;
}
export interface applicationProps extends entityProps {
    addIns: Collection<addIn> | null;
    api: apiApplication;
    appId: string;
    applicationTemplateId: string;
    appRoles: Collection<appRole> | null;
    certification: certification;
    createdDateTime: Date;
    defaultRedirectUri: string;
    description: string;
    disabledByMicrosoftStatus: string;
    displayName: string;
    groupMembershipClaims: string;
    identifierUris: Collection<string> | null;
    info: informationalUrl;
    isDeviceOnlyAuthSupported: boolean;
    isFallbackPublicClient: boolean;
    keyCredentials: Collection<keyCredential> | null;
    logo: Buffer | null;
    notes: string;
    oauth2RequirePostResponse: boolean | null;
    optionalClaims: optionalClaims;
    parentalControlSettings: parentalControlSettings;
    passwordCredentials: Collection<passwordCredential> | null;
    publicClient: publicClientApplication;
    publisherDomain: string;
    requestSignatureVerification: requestSignatureVerification;
    requiredResourceAccess: Collection<requiredResourceAccess> | null;
    samlMetadataUrl: string;
    serviceManagementReference: string;
    servicePrincipalLockConfiguration: servicePrincipalLockConfiguration;
    signInAudience: string;
    spa: spaApplication;
    tags: Collection<string> | null;
    tokenEncryptionKeyId: string;
    verifiedPublisher: verifiedPublisher;
    web: webApplication;
    appManagementPolicies: Collection<appManagementPolicy>;
    createdOnBehalfOf: directoryObject;
    extensionProperties: Collection<extensionProperty>;
    federatedIdentityCredentials: Collection<federatedIdentityCredential>;
    homeRealmDiscoveryPolicies: Collection<homeRealmDiscoveryPolicy>;
    owners: Collection<directoryObject>;
    tokenIssuancePolicies: Collection<tokenIssuancePolicy>;
    tokenLifetimePolicies: Collection<tokenLifetimePolicy>;
    synchronization: synchronization;
}
export type application = Entity<directoryObject, applicationProps> & {
    setVerifiedPublisher(): void;
    unsetVerifiedPublisher(): void;
    addKey(keyCredential: keyCredential, passwordCredential: passwordCredential, proof: string): keyCredential;
    addPassword(passwordCredential: passwordCredential): passwordCredential;
    removeKey(): void;
    removePassword(): void;
}
export interface addIn {
    id: string;
    properties: Collection<keyValue> | null;
    type: string | null;
}
export interface apiApplication {
    acceptMappedClaims: boolean;
    knownClientApplications: Collection<string>;
    oauth2PermissionScopes: Collection<permissionScope> | null;
    preAuthorizedApplications: Collection<preAuthorizedApplication>;
    requestedAccessTokenVersion: number;
}
export interface appRole {
    allowedMemberTypes: Collection<string> | null;
    description: string;
    displayName: string;
    id: string | null;
    isEnabled: boolean | null;
    origin: string;
    value: string;
}
export interface certification {
    certificationDetailsUrl: string;
    certificationExpirationDateTime: Date;
    isCertifiedByMicrosoft: boolean;
    isPublisherAttested: boolean;
    lastCertificationDateTime: Date;
}
export interface informationalUrl {
    logoUrl: string;
    marketingUrl: string;
    privacyStatementUrl: string;
    supportUrl: string;
    termsOfServiceUrl: string;
}
export interface keyCredential {
    customKeyIdentifier: Buffer;
    displayName: string;
    endDateTime: Date;
    key: Buffer;
    keyId: string;
    startDateTime: Date;
    type: string;
    usage: string;
}
export interface optionalClaims {
    accessToken: Collection<optionalClaim>;
    idToken: Collection<optionalClaim>;
    saml2Token: Collection<optionalClaim>;
}
export interface parentalControlSettings {
    countriesBlockedForMinors: Collection<string>;
    legalAgeGroupRule: string;
}
export interface passwordCredential {
    customKeyIdentifier: Buffer;
    displayName: string;
    endDateTime: Date;
    hint: string;
    keyId: string;
    secretText: string;
    startDateTime: Date;
}
export interface publicClientApplication {
    redirectUris: Collection<string> | null;
}
export interface requestSignatureVerification {
    allowedWeakAlgorithms: weakAlgorithms;
    isSignedRequestRequired: boolean | null;
}
export interface requiredResourceAccess {
    resourceAccess: Collection<resourceAccess> | null;
    resourceAppId: string | null;
}
export interface servicePrincipalLockConfiguration {
    allProperties: boolean;
    credentialsWithUsageSign: boolean;
    credentialsWithUsageVerify: boolean;
    isEnabled: boolean | null;
    tokenEncryptionKeyId: boolean;
}
export interface spaApplication {
    redirectUris: Collection<string> | null;
}
export interface verifiedPublisher {
    addedDateTime: Date;
    displayName: string;
    verifiedPublisherId: string;
}
export interface webApplication {
    homePageUrl: string;
    implicitGrantSettings: implicitGrantSettings;
    logoutUrl: string;
    redirectUris: Collection<string> | null;
    redirectUriSettings: Collection<redirectUriSettings> | null;
}
export interface policyBaseProps extends entityProps {
    description: string;
    displayName: string;
}
export type policyBase = Entity<directoryObject, policyBaseProps> & {
}
export interface appManagementPolicyProps extends entityProps {
    isEnabled: boolean | null;
    restrictions: appManagementConfiguration;
    appliesTo: Collection<directoryObject>;
}
export type appManagementPolicy = Entity<policyBase, appManagementPolicyProps> & {
}
export interface extensionPropertyProps extends entityProps {
    appDisplayName: string;
    dataType: string | null;
    isSyncedFromOnPremises: boolean;
    name: string | null;
    targetObjects: Collection<string> | null;
}
export type extensionProperty = Entity<directoryObject, extensionPropertyProps> & {
}
export interface federatedIdentityCredentialProps extends entityProps {
    audiences: Collection<string> | null;
    description: string;
    issuer: string | null;
    name: string | null;
    subject: string | null;
}
export type federatedIdentityCredential = Entity<entity, federatedIdentityCredentialProps> & {
}
export interface stsPolicyProps extends entityProps {
    definition: Collection<string> | null;
    isOrganizationDefault: boolean;
    appliesTo: Collection<directoryObject>;
}
export type stsPolicy = Entity<policyBase, stsPolicyProps> & {
}
export interface homeRealmDiscoveryPolicyProps { }
export type homeRealmDiscoveryPolicy = Entity<stsPolicy, homeRealmDiscoveryPolicyProps> & {
}
export interface tokenIssuancePolicyProps { }
export type tokenIssuancePolicy = Entity<stsPolicy, tokenIssuancePolicyProps> & {
}
export interface tokenLifetimePolicyProps { }
export type tokenLifetimePolicy = Entity<stsPolicy, tokenLifetimePolicyProps> & {
}
export interface synchronizationProps extends entityProps {
    secrets: Collection<synchronizationSecretKeyStringValuePair>;
    jobs: Collection<synchronizationJob>;
    templates: Collection<synchronizationTemplate>;
}
export type synchronization = Entity<entity, synchronizationProps> & {
    acquireAccessToken(): void;
}
export interface customCalloutExtensionProps extends entityProps {
    authenticationConfiguration: customExtensionAuthenticationConfiguration;
    clientConfiguration: customExtensionClientConfiguration;
    description: string;
    displayName: string;
    endpointConfiguration: customExtensionEndpointConfiguration;
}
export type customCalloutExtension = Entity<entity, customCalloutExtensionProps> & {
}
export interface deletedItemContainerProps extends entityProps {
    workflows: Collection<{}>;
}
export type deletedItemContainer = Entity<entity, deletedItemContainerProps> & {
}
export interface identityGovernanceProps extends entityProps {
    lifecycleWorkflows: {};
    accessReviews: accessReviewSet;
    appConsent: appConsentApprovalRoute;
    termsOfUse: termsOfUseContainer;
    entitlementManagement: entitlementManagement;
}
export type identityGovernance = Entity<{}, identityGovernanceProps> & {
}
export interface accessReviewSetProps extends entityProps {
    definitions: Collection<accessReviewScheduleDefinition>;
    historyDefinitions: Collection<accessReviewHistoryDefinition>;
}
export type accessReviewSet = Entity<entity, accessReviewSetProps> & {
}
export interface appConsentApprovalRouteProps extends entityProps {
    appConsentRequests: Collection<appConsentRequest>;
}
export type appConsentApprovalRoute = Entity<entity, appConsentApprovalRouteProps> & {
}
export interface termsOfUseContainerProps extends entityProps {
    agreementAcceptances: Collection<agreementAcceptance>;
    agreements: Collection<agreement>;
}
export type termsOfUseContainer = Entity<entity, termsOfUseContainerProps> & {
}
export interface entitlementManagementProps extends entityProps {
    accessPackageAssignmentApprovals: Collection<approval>;
    accessPackages: Collection<accessPackage>;
    assignmentPolicies: Collection<accessPackageAssignmentPolicy>;
    assignmentRequests: Collection<accessPackageAssignmentRequest>;
    assignments: Collection<accessPackageAssignment>;
    catalogs: Collection<accessPackageCatalog>;
    connectedOrganizations: Collection<connectedOrganization>;
    resourceEnvironments: Collection<accessPackageResourceEnvironment>;
    resourceRequests: Collection<accessPackageResourceRequest>;
    resourceRoleScopes: Collection<accessPackageResourceRoleScope>;
    resources: Collection<accessPackageResource>;
    settings: entitlementManagementSettings;
}
export type entitlementManagement = Entity<entity, entitlementManagementProps> & {
}
export interface userProps extends entityProps {
    signInActivity: signInActivity;
    accountEnabled: boolean;
    ageGroup: string;
    assignedLicenses: Collection<assignedLicense> | null;
    assignedPlans: Collection<assignedPlan> | null;
    authorizationInfo: authorizationInfo;
    businessPhones: Collection<string> | null;
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
    identities: Collection<objectIdentity>;
    imAddresses: Collection<string>;
    isResourceAccount: boolean;
    jobTitle: string;
    lastPasswordChangeDateTime: Date;
    legalAgeGroupClassification: string;
    licenseAssignmentStates: Collection<licenseAssignmentState>;
    mail: string;
    mailNickname: string;
    mobilePhone: string;
    officeLocation: string;
    onPremisesDistinguishedName: string;
    onPremisesDomainName: string;
    onPremisesExtensionAttributes: onPremisesExtensionAttributes;
    onPremisesImmutableId: string;
    onPremisesLastSyncDateTime: Date;
    onPremisesProvisioningErrors: Collection<onPremisesProvisioningError>;
    onPremisesSamAccountName: string;
    onPremisesSecurityIdentifier: string;
    onPremisesSyncEnabled: boolean;
    onPremisesUserPrincipalName: string;
    otherMails: Collection<string> | null;
    passwordPolicies: string;
    passwordProfile: passwordProfile;
    postalCode: string;
    preferredDataLocation: string;
    preferredLanguage: string;
    provisionedPlans: Collection<provisionedPlan> | null;
    proxyAddresses: Collection<string> | null;
    securityIdentifier: string;
    serviceProvisioningErrors: Collection<serviceProvisioningError>;
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
    interests: Collection<string>;
    mySite: string;
    pastProjects: Collection<string>;
    preferredName: string;
    responsibilities: Collection<string>;
    schools: Collection<string>;
    skills: Collection<string>;
    appRoleAssignments: Collection<appRoleAssignment>;
    createdObjects: Collection<directoryObject>;
    directReports: Collection<directoryObject>;
    licenseDetails: Collection<licenseDetails>;
    manager: directoryObject;
    memberOf: Collection<directoryObject>;
    oauth2PermissionGrants: Collection<oAuth2PermissionGrant>;
    ownedDevices: Collection<directoryObject>;
    ownedObjects: Collection<directoryObject>;
    registeredDevices: Collection<directoryObject>;
    scopedRoleMemberOf: Collection<scopedRoleMembership>;
    transitiveMemberOf: Collection<directoryObject>;
    calendar: calendar;
    calendarGroups: Collection<calendarGroup>;
    calendars: Collection<calendar>;
    calendarView: Collection<event>;
    contactFolders: Collection<contactFolder>;
    contacts: Collection<contact>;
    events: Collection<event>;
    inferenceClassification: inferenceClassification;
    mailFolders: Collection<mailFolder>;
    messages: Collection<message>;
    outlook: outlookUser;
    people: Collection<person>;
    drive: drive;
    drives: Collection<drive>;
    followedSites: Collection<site>;
    extensions: Collection<extension>;
    agreementAcceptances: Collection<agreementAcceptance>;
    managedDevices: Collection<managedDevice>;
    managedAppRegistrations: Collection<managedAppRegistration>;
    deviceManagementTroubleshootingEvents: Collection<deviceManagementTroubleshootingEvent>;
    planner: plannerUser;
    insights: officeGraphInsights;
    settings: userSettings;
    onenote: onenote;
    photo: profilePhoto;
    photos: Collection<profilePhoto>;
    activities: Collection<userActivity>;
    onlineMeetings: Collection<onlineMeeting>;
    presence: presence;
    authentication: authentication;
    chats: Collection<chat>;
    joinedTeams: Collection<team>;
    teamwork: userTeamwork;
    todo: todo;
    employeeExperience: employeeExperienceUser;
}
export type user = Entity<directoryObject, userProps> & {
    assignLicense(addLicenses: Collection<assignedLicense>, removeLicenses: Collection<string>): user;
    changePassword(): void;
    reprocessLicenseAssignment(): user;
    retryServiceProvisioning(): void;
    revokeSignInSessions(): boolean;
    findMeetingTimes(attendees: Collection<attendeeBase>, locationConstraint: locationConstraint, timeConstraint: timeConstraint, meetingDuration: number, maxCandidates: number, isOrganizerOptional: boolean, returnSuggestionReasons: boolean, minimumAttendeePercentage: number): meetingTimeSuggestionsResult;
    getMailTips(EmailAddresses: Collection<string>, MailTipsOptions: mailTipsType): Collection<mailTips>;
    sendMail(): void;
    translateExchangeIds(InputIds: Collection<string>, TargetIdType: exchangeIdFormat, SourceIdType: exchangeIdFormat): Collection<convertIdResult>;
    reminderView(StartDateTime: string, EndDateTime: string): Collection<reminder>;
    exportDeviceAndAppManagementData(): deviceAndAppManagementData;
    exportDeviceAndAppManagementData(skip: number, top: number): deviceAndAppManagementData;
    removeAllDevicesFromManagement(): void;
    wipeManagedAppRegistrationsByDeviceTag(): void;
    getManagedAppDiagnosticStatuses(): Collection<managedAppDiagnosticStatus>;
    getManagedAppPolicies(): Collection<managedAppPolicy>;
    getManagedDevicesWithAppFailures(): Collection<string>;
    exportPersonalData(): void;
}
export interface signInActivity {
    lastNonInteractiveSignInDateTime: Date;
    lastNonInteractiveSignInRequestId: string;
    lastSignInDateTime: Date;
    lastSignInRequestId: string;
}
export interface assignedLicense {
    disabledPlans: Collection<string> | null;
    skuId: string;
}
export interface assignedPlan {
    assignedDateTime: Date;
    capabilityStatus: string;
    service: string;
    servicePlanId: string;
}
export interface authorizationInfo {
    certificateUserIds: Collection<string>;
}
export interface customSecurityAttributeValue {
}
export interface employeeOrgData {
    costCenter: string;
    division: string;
}
export interface objectIdentity {
    issuer: string;
    issuerAssignedId: string;
    signInType: string;
}
export interface licenseAssignmentState {
    assignedByGroup: string;
    disabledPlans: Collection<string>;
    error: string;
    lastUpdatedDateTime: Date;
    skuId: string;
    state: string;
}
export interface onPremisesExtensionAttributes {
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
export interface onPremisesProvisioningError {
    category: string;
    occurredDateTime: Date;
    propertyCausingError: string;
    value: string;
}
export interface passwordProfile {
    forceChangePasswordNextSignIn: boolean;
    forceChangePasswordNextSignInWithMfa: boolean;
    password: string;
}
export interface provisionedPlan {
    capabilityStatus: string;
    provisioningStatus: string;
    service: string;
}
export interface serviceProvisioningError {
    createdDateTime: Date;
    isResolved: boolean;
    serviceInstance: string;
}
export interface appRoleAssignmentProps extends entityProps {
    appRoleId: string | null;
    createdDateTime: Date;
    principalDisplayName: string;
    principalId: string;
    principalType: string;
    resourceDisplayName: string;
    resourceId: string;
}
export type appRoleAssignment = Entity<directoryObject, appRoleAssignmentProps> & {
}
export interface licenseDetailsProps extends entityProps {
    servicePlans: Collection<servicePlanInfo> | null;
    skuId: string;
    skuPartNumber: string;
}
export type licenseDetails = Entity<entity, licenseDetailsProps> & {
}
export interface oAuth2PermissionGrantProps extends entityProps {
    clientId: string | null;
    consentType: string;
    principalId: string;
    resourceId: string | null;
    scope: string;
}
export type oAuth2PermissionGrant = Entity<entity, oAuth2PermissionGrantProps> & {
}
export interface scopedRoleMembershipProps extends entityProps {
    administrativeUnitId: string | null;
    roleId: string | null;
    roleMemberInfo: identity | null;
}
export type scopedRoleMembership = Entity<entity, scopedRoleMembershipProps> & {
}
export interface mailboxSettings {
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
export interface calendarProps extends entityProps {
    allowedOnlineMeetingProviders: Collection<onlineMeetingProviderType>;
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
    calendarPermissions: Collection<calendarPermission>;
    calendarView: Collection<event>;
    events: Collection<event>;
    multiValueExtendedProperties: Collection<multiValueLegacyExtendedProperty>;
    singleValueExtendedProperties: Collection<singleValueLegacyExtendedProperty>;
}
export type calendar = Entity<entity, calendarProps> & {
    getSchedule(Schedules: Collection<string>, EndTime: dateTimeTimeZone, StartTime: dateTimeTimeZone, AvailabilityViewInterval: number): Collection<scheduleInformation>;
    allowedCalendarSharingRoles(User: string): Collection<calendarRoleType>;
}
export interface calendarGroupProps extends entityProps {
    changeKey: string;
    classId: string;
    name: string;
    calendars: Collection<calendar>;
}
export type calendarGroup = Entity<entity, calendarGroupProps> & {
}
export interface outlookItemProps extends entityProps {
    categories: Collection<string>;
    changeKey: string;
    createdDateTime: Date;
    lastModifiedDateTime: Date;
}
export type outlookItem = Entity<entity, outlookItemProps> & {
}
export interface eventProps extends entityProps {
    allowNewTimeProposals: boolean;
    attendees: Collection<attendee>;
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
    locations: Collection<location>;
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
    attachments: Collection<attachment>;
    calendar: calendar;
    extensions: Collection<extension>;
    instances: Collection<event>;
    multiValueExtendedProperties: Collection<multiValueLegacyExtendedProperty>;
    singleValueExtendedProperties: Collection<singleValueLegacyExtendedProperty>;
}
export type event = Entity<outlookItem, eventProps> & {
    cancel(): void;
    accept(): void;
    decline(): void;
    dismissReminder(): void;
    forward(): void;
    snoozeReminder(): void;
    tentativelyAccept(): void;
}
export interface contactFolderProps extends entityProps {
    displayName: string;
    parentFolderId: string;
    childFolders: Collection<contactFolder>;
    contacts: Collection<contact>;
    multiValueExtendedProperties: Collection<multiValueLegacyExtendedProperty>;
    singleValueExtendedProperties: Collection<singleValueLegacyExtendedProperty>;
}
export type contactFolder = Entity<entity, contactFolderProps> & {
}
export interface contactProps extends entityProps {
    assistantName: string;
    birthday: Date;
    businessAddress: physicalAddress;
    businessHomePage: string;
    businessPhones: Collection<string>;
    children: Collection<string>;
    companyName: string;
    department: string;
    displayName: string;
    emailAddresses: Collection<emailAddress>;
    fileAs: string;
    generation: string;
    givenName: string;
    homeAddress: physicalAddress;
    homePhones: Collection<string>;
    imAddresses: Collection<string>;
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
    extensions: Collection<extension>;
    multiValueExtendedProperties: Collection<multiValueLegacyExtendedProperty>;
    photo: profilePhoto;
    singleValueExtendedProperties: Collection<singleValueLegacyExtendedProperty>;
}
export type contact = Entity<outlookItem, contactProps> & {
}
export interface inferenceClassificationProps extends entityProps {
    overrides: Collection<inferenceClassificationOverride>;
}
export type inferenceClassification = Entity<entity, inferenceClassificationProps> & {
}
export interface mailFolderProps extends entityProps {
    childFolderCount: number;
    displayName: string;
    isHidden: boolean;
    parentFolderId: string;
    totalItemCount: number;
    unreadItemCount: number;
    childFolders: Collection<mailFolder>;
    messageRules: Collection<messageRule>;
    messages: Collection<message>;
    multiValueExtendedProperties: Collection<multiValueLegacyExtendedProperty>;
    singleValueExtendedProperties: Collection<singleValueLegacyExtendedProperty>;
}
export type mailFolder = Entity<entity, mailFolderProps> & {
    copy(DestinationId: string): mailFolder;
    move(DestinationId: string): mailFolder;
}
export interface messageProps extends entityProps {
    bccRecipients: Collection<recipient>;
    body: itemBody;
    bodyPreview: string;
    ccRecipients: Collection<recipient>;
    conversationId: string;
    conversationIndex: Buffer;
    flag: followupFlag;
    from: recipient;
    hasAttachments: boolean;
    importance: importance;
    inferenceClassification: inferenceClassificationType;
    internetMessageHeaders: Collection<internetMessageHeader>;
    internetMessageId: string;
    isDeliveryReceiptRequested: boolean;
    isDraft: boolean;
    isRead: boolean;
    isReadReceiptRequested: boolean;
    parentFolderId: string;
    receivedDateTime: Date;
    replyTo: Collection<recipient>;
    sender: recipient;
    sentDateTime: Date;
    subject: string;
    toRecipients: Collection<recipient>;
    uniqueBody: itemBody;
    webLink: string;
    attachments: Collection<attachment>;
    extensions: Collection<extension>;
    multiValueExtendedProperties: Collection<multiValueLegacyExtendedProperty>;
    singleValueExtendedProperties: Collection<singleValueLegacyExtendedProperty>;
}
export type message = Entity<outlookItem, messageProps> & {
    forward(): void;
    copy(DestinationId: string): message;
    move(DestinationId: string): message;
    createForward(ToRecipients: Collection<recipient>, Message: message, Comment: string): message;
    createReply(Message: message, Comment: string): message;
    createReplyAll(Message: message, Comment: string): message;
    reply(): void;
    replyAll(): void;
    send(): void;
}
export interface outlookUserProps extends entityProps {
    masterCategories: Collection<outlookCategory>;
}
export type outlookUser = Entity<entity, outlookUserProps> & {
    supportedLanguages(): Collection<localeInfo>;
    supportedTimeZones(): Collection<timeZoneInformation>;
    supportedTimeZones(TimeZoneStandard: timeZoneStandard): Collection<timeZoneInformation>;
}
export interface personProps extends entityProps {
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
    phones: Collection<phone>;
    postalAddresses: Collection<location>;
    profession: string;
    scoredEmailAddresses: Collection<scoredEmailAddress>;
    surname: string;
    userPrincipalName: string;
    websites: Collection<website>;
    yomiCompany: string;
}
export type person = Entity<entity, personProps> & {
}
export interface baseItemProps extends entityProps {
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
export type baseItem = Entity<entity, baseItemProps> & {
}
export interface driveProps extends entityProps {
    driveType: string;
    owner: identitySet;
    quota: quota;
    sharePointIds: sharepointIds;
    system: systemFacet;
    bundles: Collection<driveItem>;
    following: Collection<driveItem>;
    items: Collection<driveItem>;
    list: list;
    root: driveItem;
    special: Collection<driveItem>;
}
export type drive = Entity<baseItem, driveProps> & {
    search(q: string): Collection<driveItem>;
    recent(): Collection<driveItem>;
    sharedWithMe(): Collection<driveItem>;
}
export interface siteProps extends entityProps {
    displayName: string;
    error: publicError;
    isPersonalSite: boolean;
    root: root;
    sharepointIds: sharepointIds;
    siteCollection: siteCollection;
    analytics: itemAnalytics;
    columns: Collection<columnDefinition>;
    contentTypes: Collection<contentType>;
    drive: drive;
    drives: Collection<drive>;
    externalColumns: Collection<columnDefinition>;
    items: Collection<baseItem>;
    lists: Collection<list>;
    operations: Collection<richLongRunningOperation>;
    permissions: Collection<permission>;
    sites: Collection<site>;
    termStore: {};
    termStores: Collection<{}>;
    onenote: onenote;
}
export type site = Entity<baseItem, siteProps> & {
    getActivitiesByInterval(): Collection<itemActivityStat>;
    getActivitiesByInterval(startDateTime: string, endDateTime: string, interval: string): Collection<itemActivityStat>;
    getApplicableContentTypesForList(listId: string): Collection<contentType>;
    getByPath(path: string): site;
}
export interface extensionProps { }
export type extension = Entity<entity, extensionProps> & {
}
export interface agreementAcceptanceProps extends entityProps {
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
export type agreementAcceptance = Entity<entity, agreementAcceptanceProps> & {
}
export interface managedDeviceProps extends entityProps {
    activationLockBypassCode: string;
    androidSecurityPatchLevel: string;
    azureADDeviceId: string;
    azureADRegistered: boolean;
    complianceGracePeriodExpirationDateTime: Date | null;
    complianceState: complianceState | null;
    configurationManagerClientEnabledFeatures: configurationManagerClientEnabledFeatures;
    deviceActionResults: Collection<deviceActionResult>;
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
    deviceCompliancePolicyStates: Collection<deviceCompliancePolicyState>;
    deviceConfigurationStates: Collection<deviceConfigurationState>;
    deviceCategory: deviceCategory;
    logCollectionRequests: Collection<deviceLogCollectionResponse>;
    users: Collection<user>;
    windowsProtectionState: windowsProtectionState;
}
export type managedDevice = Entity<entity, managedDeviceProps> & {
    bypassActivationLock(): void;
    cleanWindowsDevice(): void;
    deleteUserFromSharedAppleDevice(): void;
    disableLostMode(): void;
    locateDevice(): void;
    logoutSharedAppleDeviceActiveUser(): void;
    rebootNow(): void;
    recoverPasscode(): void;
    remoteLock(): void;
    requestRemoteAssistance(): void;
    resetPasscode(): void;
    retire(): void;
    shutDown(): void;
    syncDevice(): void;
    updateWindowsDeviceAccount(): void;
    windowsDefenderScan(): void;
    windowsDefenderUpdateSignatures(): void;
    wipe(): void;
}
export interface managedAppRegistrationProps extends entityProps {
    appIdentifier: mobileAppIdentifier;
    applicationVersion: string;
    createdDateTime: Date | null;
    deviceName: string;
    deviceTag: string;
    deviceType: string;
    flaggedReasons: Collection<managedAppFlaggedReason> | null;
    lastSyncDateTime: Date | null;
    managementSdkVersion: string;
    platformVersion: string;
    userId: string;
    version: string;
    appliedPolicies: Collection<managedAppPolicy>;
    intendedPolicies: Collection<managedAppPolicy>;
    operations: Collection<managedAppOperation>;
}
export type managedAppRegistration = Entity<entity, managedAppRegistrationProps> & {
}
export interface deviceManagementTroubleshootingEventProps extends entityProps {
    correlationId: string;
    eventDateTime: Date | null;
}
export type deviceManagementTroubleshootingEvent = Entity<entity, deviceManagementTroubleshootingEventProps> & {
}
export interface plannerUserProps extends entityProps {
    plans: Collection<plannerPlan>;
    tasks: Collection<plannerTask>;
}
export type plannerUser = Entity<entity, plannerUserProps> & {
}
export interface officeGraphInsightsProps extends entityProps {
    shared: Collection<sharedInsight>;
    trending: Collection<trending>;
    used: Collection<usedInsight>;
}
export type officeGraphInsights = Entity<entity, officeGraphInsightsProps> & {
}
export interface userSettingsProps extends entityProps {
    contributionToContentDiscoveryAsOrganizationDisabled: boolean | null;
    contributionToContentDiscoveryDisabled: boolean | null;
    shiftPreferences: shiftPreferences;
}
export type userSettings = Entity<entity, userSettingsProps> & {
}
export interface onenoteProps extends entityProps {
    notebooks: Collection<notebook>;
    operations: Collection<onenoteOperation>;
    pages: Collection<onenotePage>;
    resources: Collection<onenoteResource>;
    sectionGroups: Collection<sectionGroup>;
    sections: Collection<onenoteSection>;
}
export type onenote = Entity<entity, onenoteProps> & {
}
export interface profilePhotoProps extends entityProps {
    height: number;
    width: number;
}
export type profilePhoto = Entity<entity, profilePhotoProps> & {
}
export interface userPrint {
    recentPrinterShares: Collection<printerShare>;
}
export interface userActivityProps extends entityProps {
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
    historyItems: Collection<activityHistoryItem>;
}
export type userActivity = Entity<entity, userActivityProps> & {
}
export interface onlineMeetingProps extends entityProps {
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
    attendanceReports: Collection<meetingAttendanceReport>;
}
export type onlineMeeting = Entity<entity, onlineMeetingProps> & {
    getVirtualAppointmentJoinWebUrl(): string;
}
export interface presenceProps extends entityProps {
    activity: string;
    availability: string;
    statusMessage: presenceStatusMessage;
}
export type presence = Entity<entity, presenceProps> & {
    clearPresence(): void;
    clearUserPreferredPresence(): void;
    setPresence(): void;
    setStatusMessage(): void;
    setUserPreferredPresence(): void;
}
export interface authenticationProps extends entityProps {
    emailMethods: Collection<emailAuthenticationMethod>;
    fido2Methods: Collection<fido2AuthenticationMethod>;
    methods: Collection<authenticationMethod>;
    microsoftAuthenticatorMethods: Collection<microsoftAuthenticatorAuthenticationMethod>;
    operations: Collection<longRunningOperation>;
    passwordMethods: Collection<passwordAuthenticationMethod>;
    phoneMethods: Collection<phoneAuthenticationMethod>;
    softwareOathMethods: Collection<softwareOathAuthenticationMethod>;
    temporaryAccessPassMethods: Collection<temporaryAccessPassAuthenticationMethod>;
    windowsHelloForBusinessMethods: Collection<windowsHelloForBusinessAuthenticationMethod>;
}
export type authentication = Entity<entity, authenticationProps> & {
}
export interface chatProps extends entityProps {
    chatType: chatType | null;
    createdDateTime: Date;
    lastUpdatedDateTime: Date;
    onlineMeetingInfo: teamworkOnlineMeetingInfo;
    tenantId: string;
    topic: string;
    viewpoint: chatViewpoint;
    webUrl: string;
    installedApps: Collection<teamsAppInstallation>;
    lastMessagePreview: chatMessageInfo;
    members: Collection<conversationMember>;
    messages: Collection<chatMessage>;
    permissionGrants: Collection<resourceSpecificPermissionGrant>;
    pinnedMessages: Collection<pinnedChatMessageInfo>;
    tabs: Collection<teamsTab>;
}
export type chat = Entity<entity, chatProps> & {
    sendActivityNotification(): void;
    hideForUser(): void;
    markChatReadForUser(): void;
    markChatUnreadForUser(): void;
    unhideForUser(): void;
}
export interface teamProps extends entityProps {
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
    allChannels: Collection<channel>;
    channels: Collection<channel>;
    group: group;
    incomingChannels: Collection<channel>;
    installedApps: Collection<teamsAppInstallation>;
    members: Collection<conversationMember>;
    operations: Collection<teamsAsyncOperation>;
    permissionGrants: Collection<resourceSpecificPermissionGrant>;
    photo: profilePhoto;
    primaryChannel: channel;
    tags: Collection<teamworkTag>;
    template: teamsTemplate;
    schedule: schedule;
}
export type team = Entity<entity, teamProps> & {
    archive(): void;
    unarchive(): void;
    clone(): void;
    completeMigration(): void;
    sendActivityNotification(): void;
}
export interface userTeamworkProps extends entityProps {
    associatedTeams: Collection<associatedTeamInfo>;
    installedApps: Collection<userScopeTeamsAppInstallation>;
}
export type userTeamwork = Entity<entity, userTeamworkProps> & {
    sendActivityNotification(): void;
}
export interface todoProps extends entityProps {
    lists: Collection<todoTaskList>;
}
export type todo = Entity<entity, todoProps> & {
}
export interface employeeExperienceUserProps extends entityProps {
    learningCourseActivities: Collection<learningCourseActivity>;
}
export type employeeExperienceUser = Entity<entity, employeeExperienceUserProps> & {
}
export interface appIdentity {
    appId: string;
    displayName: string;
    servicePrincipalId: string;
    servicePrincipalName: string;
}
export interface appliedConditionalAccessPolicy {
    displayName: string;
    enforcedGrantControls: Collection<string>;
    enforcedSessionControls: Collection<string>;
    id: string;
    result: appliedConditionalAccessPolicyResult;
}
export interface auditActivityInitiator {
    app: appIdentity;
    user: userIdentity;
}
export interface userIdentity extends identity {
    ipAddress: string;
    userPrincipalName: string;
}
export interface detailsInfo {
}
export interface deviceDetail {
    browser: string;
    deviceId: string;
    displayName: string;
    isCompliant: boolean;
    isManaged: boolean;
    operatingSystem: string;
    trustType: string;
}
export interface geoCoordinates {
    altitude: number;
    latitude: number;
    longitude: number;
}
export interface initiator extends identity {
    initiatorType: initiatorType;
}
export interface keyValue {
    key: string;
    value: string;
}
export interface modifiedProperty {
    displayName: string;
    newValue: string;
    oldValue: string;
}
export interface provisionedIdentity extends identity {
    details: detailsInfo;
    identityType: string;
}
export interface provisioningErrorInfo {
    additionalDetails: string;
    errorCategory: provisioningStatusErrorCategory;
    errorCode: string;
    reason: string;
    recommendedAction: string;
}
export interface provisioningServicePrincipal extends identity {
}
export interface provisioningStatusInfo {
    errorInformation: provisioningErrorInfo;
    status: provisioningResult;
}
export interface provisioningStep {
    description: string;
    details: detailsInfo;
    name: string;
    provisioningStepType: provisioningStepType;
    status: provisioningResult;
}
export interface provisioningSystem extends identity {
    details: detailsInfo;
}
export interface signInLocation {
    city: string;
    countryOrRegion: string;
    geoCoordinates: geoCoordinates;
    state: string;
}
export interface signInStatus {
    additionalDetails: string;
    errorCode: number;
    failureReason: string;
}
export interface targetResource {
    displayName: string;
    groupType: groupType;
    id: string;
    modifiedProperties: Collection<modifiedProperty>;
    type: string;
    userPrincipalName: string;
}
export interface userRegistrationFeatureCount {
    feature: authenticationMethodFeature | null;
    userCount: number | null;
}
export interface userRegistrationFeatureSummary {
    totalUserCount: number | null;
    userRegistrationFeatureCounts: Collection<userRegistrationFeatureCount> | null;
    userRoles: includedUserRoles;
    userTypes: includedUserTypes;
}
export interface userRegistrationMethodCount {
    authenticationMethod: string | null;
    userCount: number | null;
}
export interface userRegistrationMethodSummary {
    totalUserCount: number | null;
    userRegistrationMethodCounts: Collection<userRegistrationMethodCount> | null;
    userRoles: includedUserRoles;
    userTypes: includedUserTypes;
}
export interface auditLogRootProps extends entityProps {
    directoryAudits: Collection<directoryAudit>;
    provisioning: Collection<provisioningObjectSummary>;
    signIns: Collection<signIn>;
}
export type auditLogRoot = Entity<entity, auditLogRootProps> & {
}
export interface directoryAuditProps extends entityProps {
    activityDateTime: Date | null;
    activityDisplayName: string | null;
    additionalDetails: Collection<keyValue>;
    category: string | null;
    correlationId: string;
    initiatedBy: auditActivityInitiator | null;
    loggedByService: string;
    operationType: string;
    result: operationResult;
    resultReason: string;
    targetResources: Collection<targetResource>;
}
export type directoryAudit = Entity<entity, directoryAuditProps> & {
}
export interface provisioningObjectSummaryProps extends entityProps {
    activityDateTime: Date | null;
    changeId: string;
    cycleId: string;
    durationInMilliseconds: number;
    initiatedBy: initiator;
    jobId: string;
    modifiedProperties: Collection<modifiedProperty>;
    provisioningAction: provisioningAction;
    provisioningStatusInfo: provisioningStatusInfo;
    provisioningSteps: Collection<provisioningStep>;
    servicePrincipal: provisioningServicePrincipal;
    sourceIdentity: provisionedIdentity;
    sourceSystem: provisioningSystem;
    targetIdentity: provisionedIdentity;
    targetSystem: provisioningSystem;
    tenantId: string;
}
export type provisioningObjectSummary = Entity<entity, provisioningObjectSummaryProps> & {
}
export interface signInProps extends entityProps {
    appDisplayName: string;
    appId: string;
    appliedConditionalAccessPolicies: Collection<appliedConditionalAccessPolicy>;
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
    riskEventTypes: Collection<riskEventType>;
    riskEventTypes_v2: Collection<string>;
    riskLevelAggregated: riskLevel;
    riskLevelDuringSignIn: riskLevel;
    riskState: riskState;
    status: signInStatus;
    userDisplayName: string;
    userId: string | null;
    userPrincipalName: string;
}
export type signIn = Entity<entity, signInProps> & {
}
export interface authenticationMethodsRootProps extends entityProps {
    userRegistrationDetails: Collection<userRegistrationDetails>;
}
export type authenticationMethodsRoot = Entity<entity, authenticationMethodsRootProps> & {
    usersRegisteredByFeature(): userRegistrationFeatureSummary;
    usersRegisteredByFeature(includedUserTypes: includedUserTypes, includedUserRoles: includedUserRoles): userRegistrationFeatureSummary;
    usersRegisteredByMethod(): userRegistrationMethodSummary;
    usersRegisteredByMethod(includedUserTypes: includedUserTypes, includedUserRoles: includedUserRoles): userRegistrationMethodSummary;
}
export interface userRegistrationDetailsProps extends entityProps {
    isAdmin: boolean;
    isMfaCapable: boolean | null;
    isMfaRegistered: boolean | null;
    isPasswordlessCapable: boolean | null;
    isSsprCapable: boolean | null;
    isSsprEnabled: boolean | null;
    isSsprRegistered: boolean | null;
    isSystemPreferredAuthenticationMethodEnabled: boolean;
    lastUpdatedDateTime: Date | null;
    methodsRegistered: Collection<string>;
    systemPreferredAuthenticationMethods: Collection<string>;
    userDisplayName: string | null;
    userPreferredMethodForSecondaryAuthentication: userDefaultAuthenticationMethod;
    userPrincipalName: string | null;
    userType: signInUserType;
}
export type userRegistrationDetails = Entity<entity, userRegistrationDetailsProps> & {
}
export interface governanceInsightProps extends entityProps {
    insightCreatedDateTime: Date;
}
export type governanceInsight = Entity<entity, governanceInsightProps> & {
}
export interface membershipOutlierInsightProps extends entityProps {
    containerId: string | null;
    memberId: string | null;
    outlierContainerType: outlierContainerType | null;
    outlierMemberType: outlierMemberType | null;
    container: directoryObject;
    lastModifiedBy: user;
    member: directoryObject;
}
export type membershipOutlierInsight = Entity<governanceInsight, membershipOutlierInsightProps> & {
}
export interface reportRootProps extends entityProps {
    authenticationMethods: authenticationMethodsRoot;
    dailyPrintUsageByPrinter: Collection<printUsageByPrinter>;
    dailyPrintUsageByUser: Collection<printUsageByUser>;
    monthlyPrintUsageByPrinter: Collection<printUsageByPrinter>;
    monthlyPrintUsageByUser: Collection<printUsageByUser>;
    security: securityReportsRoot;
}
export type reportRoot = Entity<{}, reportRootProps> & {
    deviceConfigurationDeviceActivity(): report;
    deviceConfigurationUserActivity(): report;
    managedDeviceEnrollmentFailureDetails(): report;
    managedDeviceEnrollmentFailureDetails(skip: number, top: number, filter: string, skipToken: string): report;
    managedDeviceEnrollmentTopFailures(): report;
    managedDeviceEnrollmentTopFailures(period: string): report;
    getOffice365ActivationCounts(): report;
    getOffice365ActivationsUserCounts(): report;
    getOffice365ActivationsUserDetail(): report;
    getOffice365ActiveUserCounts(period: string): report;
    getOffice365ActiveUserDetail(date: Date): report;
    getOffice365ActiveUserDetail(period: string): report;
    getOffice365GroupsActivityCounts(period: string): report;
    getOffice365GroupsActivityDetail(date: Date): report;
    getOffice365GroupsActivityDetail(period: string): report;
    getOffice365GroupsActivityFileCounts(period: string): report;
    getOffice365GroupsActivityGroupCounts(period: string): report;
    getOffice365GroupsActivityStorage(period: string): report;
    getOffice365ServicesUserCounts(period: string): report;
    getOneDriveActivityFileCounts(period: string): report;
    getOneDriveActivityUserCounts(period: string): report;
    getOneDriveActivityUserDetail(date: Date): report;
    getOneDriveActivityUserDetail(period: string): report;
    getOneDriveUsageAccountCounts(period: string): report;
    getOneDriveUsageAccountDetail(date: Date): report;
    getOneDriveUsageAccountDetail(period: string): report;
    getOneDriveUsageFileCounts(period: string): report;
    getOneDriveUsageStorage(period: string): report;
    getSharePointActivityFileCounts(period: string): report;
    getSharePointActivityPages(period: string): report;
    getSharePointActivityUserCounts(period: string): report;
    getSharePointActivityUserDetail(date: Date): report;
    getSharePointActivityUserDetail(period: string): report;
    getSharePointSiteUsageDetail(date: Date): report;
    getSharePointSiteUsageDetail(period: string): report;
    getSharePointSiteUsageFileCounts(period: string): report;
    getSharePointSiteUsagePages(period: string): report;
    getSharePointSiteUsageSiteCounts(period: string): report;
    getSharePointSiteUsageStorage(period: string): report;
    getSkypeForBusinessActivityCounts(period: string): report;
    getSkypeForBusinessActivityUserCounts(period: string): report;
    getSkypeForBusinessActivityUserDetail(date: Date): report;
    getSkypeForBusinessActivityUserDetail(period: string): report;
    getSkypeForBusinessDeviceUsageDistributionUserCounts(period: string): report;
    getSkypeForBusinessDeviceUsageUserCounts(period: string): report;
    getSkypeForBusinessDeviceUsageUserDetail(date: Date): report;
    getSkypeForBusinessDeviceUsageUserDetail(period: string): report;
    getSkypeForBusinessOrganizerActivityCounts(period: string): report;
    getSkypeForBusinessOrganizerActivityMinuteCounts(period: string): report;
    getSkypeForBusinessOrganizerActivityUserCounts(period: string): report;
    getSkypeForBusinessParticipantActivityCounts(period: string): report;
    getSkypeForBusinessParticipantActivityMinuteCounts(period: string): report;
    getSkypeForBusinessParticipantActivityUserCounts(period: string): report;
    getSkypeForBusinessPeerToPeerActivityCounts(period: string): report;
    getSkypeForBusinessPeerToPeerActivityMinuteCounts(period: string): report;
    getSkypeForBusinessPeerToPeerActivityUserCounts(period: string): report;
    getYammerActivityCounts(period: string): report;
    getYammerActivityUserCounts(period: string): report;
    getYammerActivityUserDetail(date: Date): report;
    getYammerActivityUserDetail(period: string): report;
    getYammerDeviceUsageDistributionUserCounts(period: string): report;
    getYammerDeviceUsageUserCounts(period: string): report;
    getYammerDeviceUsageUserDetail(date: Date): report;
    getYammerDeviceUsageUserDetail(period: string): report;
    getYammerGroupsActivityCounts(period: string): report;
    getYammerGroupsActivityDetail(date: Date): report;
    getYammerGroupsActivityDetail(period: string): report;
    getYammerGroupsActivityGroupCounts(period: string): report;
    getGroupArchivedPrintJobs(groupId: string, startDateTime: Date, endDateTime: Date): Collection<archivedPrintJob>;
    getPrinterArchivedPrintJobs(printerId: string, startDateTime: Date, endDateTime: Date): Collection<archivedPrintJob>;
    getUserArchivedPrintJobs(userId: string, startDateTime: Date, endDateTime: Date): Collection<archivedPrintJob>;
}
export interface printUsageProps extends entityProps {
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
export type printUsage = Entity<entity, printUsageProps> & {
}
export interface printUsageByPrinterProps extends entityProps {
    printerId: string | null;
    printerName: string;
}
export type printUsageByPrinter = Entity<printUsage, printUsageByPrinterProps> & {
}
export interface printUsageByUserProps extends entityProps {
    userPrincipalName: string | null;
}
export type printUsageByUser = Entity<printUsage, printUsageByUserProps> & {
}
export interface securityReportsRootProps { }
export type securityReportsRoot = Entity<entity, securityReportsRootProps> & {
    getAttackSimulationRepeatOffenders(): Collection<attackSimulationRepeatOffender>;
    getAttackSimulationSimulationUserCoverage(): Collection<attackSimulationSimulationUserCoverage>;
    getAttackSimulationTrainingUserCoverage(): Collection<attackSimulationTrainingUserCoverage>;
}
export interface emailAddress {
    address: string;
    name: string;
}
export interface invitedUserMessageInfo {
    ccRecipients: Collection<recipient>;
    customizedMessageBody: string;
    messageLanguage: string;
}
export interface recipient {
    emailAddress: emailAddress;
}
export interface invitationProps extends entityProps {
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
export type invitation = Entity<entity, invitationProps> & {
}
export interface applicationServicePrincipal {
    application: application;
    servicePrincipal: servicePrincipal;
}
export interface servicePrincipalProps extends entityProps {
    accountEnabled: boolean;
    addIns: Collection<addIn> | null;
    alternativeNames: Collection<string> | null;
    appDescription: string;
    appDisplayName: string;
    appId: string;
    applicationTemplateId: string;
    appOwnerOrganizationId: string;
    appRoleAssignmentRequired: boolean | null;
    appRoles: Collection<appRole> | null;
    customSecurityAttributes: customSecurityAttributeValue;
    description: string;
    disabledByMicrosoftStatus: string;
    displayName: string;
    homepage: string;
    info: informationalUrl;
    keyCredentials: Collection<keyCredential> | null;
    loginUrl: string;
    logoutUrl: string;
    notes: string;
    notificationEmailAddresses: Collection<string> | null;
    oauth2PermissionScopes: Collection<permissionScope> | null;
    passwordCredentials: Collection<passwordCredential> | null;
    preferredSingleSignOnMode: string;
    preferredTokenSigningKeyThumbprint: string;
    replyUrls: Collection<string> | null;
    resourceSpecificApplicationPermissions: Collection<resourceSpecificPermission> | null;
    samlSingleSignOnSettings: samlSingleSignOnSettings;
    servicePrincipalNames: Collection<string> | null;
    servicePrincipalType: string;
    signInAudience: string;
    tags: Collection<string> | null;
    tokenEncryptionKeyId: string;
    verifiedPublisher: verifiedPublisher;
    appManagementPolicies: Collection<appManagementPolicy>;
    appRoleAssignedTo: Collection<appRoleAssignment>;
    appRoleAssignments: Collection<appRoleAssignment>;
    claimsMappingPolicies: Collection<claimsMappingPolicy>;
    createdObjects: Collection<directoryObject>;
    delegatedPermissionClassifications: Collection<delegatedPermissionClassification>;
    endpoints: Collection<endpoint>;
    federatedIdentityCredentials: Collection<federatedIdentityCredential>;
    homeRealmDiscoveryPolicies: Collection<homeRealmDiscoveryPolicy>;
    memberOf: Collection<directoryObject>;
    oauth2PermissionGrants: Collection<oAuth2PermissionGrant>;
    ownedObjects: Collection<directoryObject>;
    owners: Collection<directoryObject>;
    tokenIssuancePolicies: Collection<tokenIssuancePolicy>;
    tokenLifetimePolicies: Collection<tokenLifetimePolicy>;
    transitiveMemberOf: Collection<directoryObject>;
    synchronization: synchronization;
}
export type servicePrincipal = Entity<directoryObject, servicePrincipalProps> & {
    addKey(keyCredential: keyCredential, passwordCredential: passwordCredential, proof: string): keyCredential;
    addPassword(passwordCredential: passwordCredential): passwordCredential;
    removeKey(): void;
    removePassword(): void;
    addTokenSigningCertificate(displayName: string, endDateTime: Date): selfSignedCertificate;
}
export interface applicationTemplateProps extends entityProps {
    categories: Collection<string>;
    description: string;
    displayName: string;
    homePageUrl: string;
    logoUrl: string;
    publisher: string;
    supportedProvisioningTypes: Collection<string>;
    supportedSingleSignOnModes: Collection<string>;
}
export type applicationTemplate = Entity<entity, applicationTemplateProps> & {
    instantiate(displayName: string): applicationServicePrincipal;
}
export interface permissionScope {
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
export interface resourceSpecificPermission {
    description: string;
    displayName: string;
    id: string | null;
    isEnabled: boolean | null;
    value: string;
}
export interface samlSingleSignOnSettings {
    relayState: string;
}
export interface claimsMappingPolicyProps { }
export type claimsMappingPolicy = Entity<stsPolicy, claimsMappingPolicyProps> & {
}
export interface delegatedPermissionClassificationProps extends entityProps {
    classification: permissionClassificationType;
    permissionId: string;
    permissionName: string;
}
export type delegatedPermissionClassification = Entity<entity, delegatedPermissionClassificationProps> & {
}
export interface endpointProps extends entityProps {
    capability: string | null;
    providerId: string;
    providerName: string;
    providerResourceId: string;
    uri: string | null;
}
export type endpoint = Entity<directoryObject, endpointProps> & {
}
export interface authenticationMethodFeatureConfiguration {
    excludeTarget: featureTarget;
    includeTarget: featureTarget;
    state: advancedConfigState;
}
export interface featureTarget {
    id: string;
    targetType: featureTargetType;
}
export interface authenticationMethodsRegistrationCampaign {
    excludeTargets: Collection<excludeTarget> | null;
    includeTargets: Collection<authenticationMethodsRegistrationCampaignIncludeTarget> | null;
    snoozeDurationInDays: number | null;
    state: advancedConfigState | null;
}
export interface excludeTarget {
    id: string | null;
    targetType: authenticationMethodTargetType | null;
}
export interface authenticationMethodsRegistrationCampaignIncludeTarget {
    id: string | null;
    targetedAuthenticationMethod: string;
    targetType: authenticationMethodTargetType | null;
}
export interface fido2KeyRestrictions {
    aaGuids: Collection<string>;
    enforcementType: fido2RestrictionEnforcementType;
    isEnforced: boolean;
}
export interface microsoftAuthenticatorFeatureSettings {
    displayAppInformationRequiredState: authenticationMethodFeatureConfiguration;
    displayLocationInformationRequiredState: authenticationMethodFeatureConfiguration;
}
export interface registrationEnforcement {
    authenticationMethodsRegistrationCampaign: authenticationMethodsRegistrationCampaign;
}
export interface updateAllowedCombinationsResult {
    additionalInformation: string;
    conditionalAccessReferences: Collection<string>;
    currentCombinations: Collection<authenticationMethodModes> | null;
    previousCombinations: Collection<authenticationMethodModes> | null;
}
export interface x509CertificateAuthenticationModeConfiguration {
    rules: Collection<x509CertificateRule>;
    x509CertificateAuthenticationDefaultMode: x509CertificateAuthenticationMode;
}
export interface x509CertificateRule {
    identifier: string;
    x509CertificateAuthenticationMode: x509CertificateAuthenticationMode;
    x509CertificateRuleType: x509CertificateRuleType;
}
export interface x509CertificateUserBinding {
    priority: number | null;
    userProperty: string;
    x509CertificateField: string;
}
export interface authenticationCombinationConfigurationProps extends entityProps {
    appliesToCombinations: Collection<authenticationMethodModes> | null;
}
export type authenticationCombinationConfiguration = Entity<entity, authenticationCombinationConfigurationProps> & {
}
export interface authenticationMethodConfigurationProps extends entityProps {
    excludeTargets: Collection<excludeTarget>;
    state: authenticationMethodState;
}
export type authenticationMethodConfiguration = Entity<entity, authenticationMethodConfigurationProps> & {
}
export interface authenticationMethodModeDetailProps extends entityProps {
    authenticationMethod: baseAuthenticationMethod | null;
    displayName: string | null;
}
export type authenticationMethodModeDetail = Entity<entity, authenticationMethodModeDetailProps> & {
}
export interface authenticationMethodsPolicyProps extends entityProps {
    description: string;
    displayName: string;
    lastModifiedDateTime: Date;
    policyMigrationState: authenticationMethodsPolicyMigrationState;
    policyVersion: string;
    reconfirmationInDays: number;
    registrationEnforcement: registrationEnforcement;
    authenticationMethodConfigurations: Collection<authenticationMethodConfiguration>;
}
export type authenticationMethodsPolicy = Entity<entity, authenticationMethodsPolicyProps> & {
}
export interface authenticationMethodTargetProps extends entityProps {
    isRegistrationRequired: boolean | null;
    targetType: authenticationMethodTargetType | null;
}
export type authenticationMethodTarget = Entity<entity, authenticationMethodTargetProps> & {
}
export interface authenticationStrengthPolicyProps extends entityProps {
    allowedCombinations: Collection<authenticationMethodModes> | null;
    createdDateTime: Date | null;
    description: string;
    displayName: string | null;
    modifiedDateTime: Date | null;
    policyType: authenticationStrengthPolicyType | null;
    requirementsSatisfied: authenticationStrengthRequirements | null;
    combinationConfigurations: Collection<authenticationCombinationConfiguration>;
}
export type authenticationStrengthPolicy = Entity<entity, authenticationStrengthPolicyProps> & {
    updateAllowedCombinations(allowedCombinations: Collection<authenticationMethodModes>): updateAllowedCombinationsResult;
    usage(): authenticationStrengthUsage;
}
export interface authenticationStrengthRootProps extends entityProps {
    combinations: Collection<authenticationMethodModes> | null;
    authenticationMethodModes: Collection<authenticationMethodModeDetail>;
    policies: Collection<authenticationStrengthPolicy>;
}
export type authenticationStrengthRoot = Entity<entity, authenticationStrengthRootProps> & {
}
export interface conditionalAccessRootProps extends entityProps {
    authenticationStrength: authenticationStrengthRoot;
    authenticationContextClassReferences: Collection<authenticationContextClassReference>;
    namedLocations: Collection<namedLocation>;
    policies: Collection<conditionalAccessPolicy>;
    templates: Collection<conditionalAccessTemplate>;
}
export type conditionalAccessRoot = Entity<entity, conditionalAccessRootProps> & {
}
export interface authenticationContextClassReferenceProps extends entityProps {
    description: string;
    displayName: string;
    isAvailable: boolean;
}
export type authenticationContextClassReference = Entity<entity, authenticationContextClassReferenceProps> & {
}
export interface namedLocationProps extends entityProps {
    createdDateTime: Date;
    displayName: string | null;
    modifiedDateTime: Date;
}
export type namedLocation = Entity<entity, namedLocationProps> & {
}
export interface conditionalAccessPolicyProps extends entityProps {
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
export type conditionalAccessPolicy = Entity<entity, conditionalAccessPolicyProps> & {
}
export interface conditionalAccessTemplateProps extends entityProps {
    description: string | null;
    details: conditionalAccessPolicyDetail | null;
    name: string | null;
    scenarios: templateScenarios | null;
}
export type conditionalAccessTemplate = Entity<entity, conditionalAccessTemplateProps> & {
}
export interface emailAuthenticationMethodConfigurationProps extends entityProps {
    allowExternalIdToUseEmailOtp: externalEmailOtpState;
    includeTargets: Collection<authenticationMethodTarget>;
}
export type emailAuthenticationMethodConfiguration = Entity<authenticationMethodConfiguration, emailAuthenticationMethodConfigurationProps> & {
}
export interface fido2AuthenticationMethodConfigurationProps extends entityProps {
    isAttestationEnforced: boolean;
    isSelfServiceRegistrationAllowed: boolean;
    keyRestrictions: fido2KeyRestrictions;
    includeTargets: Collection<authenticationMethodTarget>;
}
export type fido2AuthenticationMethodConfiguration = Entity<authenticationMethodConfiguration, fido2AuthenticationMethodConfigurationProps> & {
}
export interface fido2CombinationConfigurationProps extends entityProps {
    allowedAAGUIDs: Collection<string> | null;
}
export type fido2CombinationConfiguration = Entity<authenticationCombinationConfiguration, fido2CombinationConfigurationProps> & {
}
export interface microsoftAuthenticatorAuthenticationMethodConfigurationProps extends entityProps {
    featureSettings: microsoftAuthenticatorFeatureSettings;
    isSoftwareOathEnabled: boolean;
    includeTargets: Collection<microsoftAuthenticatorAuthenticationMethodTarget>;
}
export type microsoftAuthenticatorAuthenticationMethodConfiguration = Entity<authenticationMethodConfiguration, microsoftAuthenticatorAuthenticationMethodConfigurationProps> & {
}
export interface microsoftAuthenticatorAuthenticationMethodTargetProps extends entityProps {
    authenticationMode: microsoftAuthenticatorAuthenticationMode | null;
}
export type microsoftAuthenticatorAuthenticationMethodTarget = Entity<authenticationMethodTarget, microsoftAuthenticatorAuthenticationMethodTargetProps> & {
}
export interface policyRootProps extends entityProps {
    authenticationMethodsPolicy: authenticationMethodsPolicy;
    authenticationStrengthPolicies: Collection<authenticationStrengthPolicy>;
    authenticationFlowsPolicy: authenticationFlowsPolicy;
    activityBasedTimeoutPolicies: Collection<activityBasedTimeoutPolicy>;
    appManagementPolicies: Collection<appManagementPolicy>;
    authorizationPolicy: authorizationPolicy;
    claimsMappingPolicies: Collection<claimsMappingPolicy>;
    crossTenantAccessPolicy: crossTenantAccessPolicy;
    defaultAppManagementPolicy: tenantAppManagementPolicy;
    homeRealmDiscoveryPolicies: Collection<homeRealmDiscoveryPolicy>;
    permissionGrantPolicies: Collection<permissionGrantPolicy>;
    tokenIssuancePolicies: Collection<tokenIssuancePolicy>;
    tokenLifetimePolicies: Collection<tokenLifetimePolicy>;
    featureRolloutPolicies: Collection<featureRolloutPolicy>;
    adminConsentRequestPolicy: adminConsentRequestPolicy;
    conditionalAccessPolicies: Collection<conditionalAccessPolicy>;
    identitySecurityDefaultsEnforcementPolicy: identitySecurityDefaultsEnforcementPolicy;
    roleManagementPolicies: Collection<unifiedRoleManagementPolicy>;
    roleManagementPolicyAssignments: Collection<unifiedRoleManagementPolicyAssignment>;
}
export type policyRoot = Entity<entity, policyRootProps> & {
}
export interface authenticationFlowsPolicyProps extends entityProps {
    description: string;
    displayName: string;
    selfServiceSignUp: selfServiceSignUpAuthenticationFlowConfiguration;
}
export type authenticationFlowsPolicy = Entity<entity, authenticationFlowsPolicyProps> & {
}
export interface activityBasedTimeoutPolicyProps { }
export type activityBasedTimeoutPolicy = Entity<stsPolicy, activityBasedTimeoutPolicyProps> & {
}
export interface authorizationPolicyProps extends entityProps {
    allowedToSignUpEmailBasedSubscriptions: boolean | null;
    allowedToUseSSPR: boolean | null;
    allowEmailVerifiedUsersToJoinOrganization: boolean | null;
    allowInvitesFrom: allowInvitesFrom;
    allowUserConsentForRiskyApps: boolean;
    blockMsolPowerShell: boolean;
    defaultUserRolePermissions: defaultUserRolePermissions | null;
    guestUserRoleId: string;
}
export type authorizationPolicy = Entity<policyBase, authorizationPolicyProps> & {
}
export interface crossTenantAccessPolicyProps extends entityProps {
    allowedCloudEndpoints: Collection<string> | null;
    default: crossTenantAccessPolicyConfigurationDefault;
    partners: Collection<crossTenantAccessPolicyConfigurationPartner>;
}
export type crossTenantAccessPolicy = Entity<policyBase, crossTenantAccessPolicyProps> & {
}
export interface tenantAppManagementPolicyProps extends entityProps {
    applicationRestrictions: appManagementConfiguration;
    isEnabled: boolean | null;
    servicePrincipalRestrictions: appManagementConfiguration;
}
export type tenantAppManagementPolicy = Entity<policyBase, tenantAppManagementPolicyProps> & {
}
export interface permissionGrantPolicyProps extends entityProps {
    excludes: Collection<permissionGrantConditionSet>;
    includes: Collection<permissionGrantConditionSet>;
}
export type permissionGrantPolicy = Entity<policyBase, permissionGrantPolicyProps> & {
}
export interface featureRolloutPolicyProps extends entityProps {
    description: string;
    displayName: string | null;
    feature: stagedFeatureName | null;
    isAppliedToOrganization: boolean | null;
    isEnabled: boolean | null;
    appliesTo: Collection<directoryObject>;
}
export type featureRolloutPolicy = Entity<entity, featureRolloutPolicyProps> & {
}
export interface adminConsentRequestPolicyProps extends entityProps {
    isEnabled: boolean | null;
    notifyReviewers: boolean | null;
    remindersEnabled: boolean | null;
    requestDurationInDays: number | null;
    reviewers: Collection<accessReviewReviewerScope>;
    version: number | null;
}
export type adminConsentRequestPolicy = Entity<entity, adminConsentRequestPolicyProps> & {
}
export interface identitySecurityDefaultsEnforcementPolicyProps extends entityProps {
    isEnabled: boolean | null;
}
export type identitySecurityDefaultsEnforcementPolicy = Entity<policyBase, identitySecurityDefaultsEnforcementPolicyProps> & {
}
export interface unifiedRoleManagementPolicyProps extends entityProps {
    description: string | null;
    displayName: string | null;
    isOrganizationDefault: boolean;
    lastModifiedBy: identity;
    lastModifiedDateTime: Date;
    scopeId: string | null;
    scopeType: string | null;
    effectiveRules: Collection<unifiedRoleManagementPolicyRule>;
    rules: Collection<unifiedRoleManagementPolicyRule>;
}
export type unifiedRoleManagementPolicy = Entity<entity, unifiedRoleManagementPolicyProps> & {
}
export interface unifiedRoleManagementPolicyAssignmentProps extends entityProps {
    policyId: string | null;
    roleDefinitionId: string;
    scopeId: string | null;
    scopeType: string | null;
    policy: unifiedRoleManagementPolicy;
}
export type unifiedRoleManagementPolicyAssignment = Entity<entity, unifiedRoleManagementPolicyAssignmentProps> & {
}
export interface smsAuthenticationMethodConfigurationProps extends entityProps {
    includeTargets: Collection<smsAuthenticationMethodTarget>;
}
export type smsAuthenticationMethodConfiguration = Entity<authenticationMethodConfiguration, smsAuthenticationMethodConfigurationProps> & {
}
export interface smsAuthenticationMethodTargetProps extends entityProps {
    isUsableForSignIn: boolean | null;
}
export type smsAuthenticationMethodTarget = Entity<authenticationMethodTarget, smsAuthenticationMethodTargetProps> & {
}
export interface softwareOathAuthenticationMethodConfigurationProps extends entityProps {
    includeTargets: Collection<authenticationMethodTarget>;
}
export type softwareOathAuthenticationMethodConfiguration = Entity<authenticationMethodConfiguration, softwareOathAuthenticationMethodConfigurationProps> & {
}
export interface temporaryAccessPassAuthenticationMethodConfigurationProps extends entityProps {
    defaultLength: number;
    defaultLifetimeInMinutes: number;
    isUsableOnce: boolean;
    maximumLifetimeInMinutes: number;
    minimumLifetimeInMinutes: number;
    includeTargets: Collection<authenticationMethodTarget>;
}
export type temporaryAccessPassAuthenticationMethodConfiguration = Entity<authenticationMethodConfiguration, temporaryAccessPassAuthenticationMethodConfigurationProps> & {
}
export interface voiceAuthenticationMethodConfigurationProps extends entityProps {
    isOfficePhoneAllowed: boolean;
    includeTargets: Collection<authenticationMethodTarget>;
}
export type voiceAuthenticationMethodConfiguration = Entity<authenticationMethodConfiguration, voiceAuthenticationMethodConfigurationProps> & {
}
export interface x509CertificateAuthenticationMethodConfigurationProps extends entityProps {
    authenticationModeConfiguration: x509CertificateAuthenticationModeConfiguration;
    certificateUserBindings: Collection<x509CertificateUserBinding>;
    includeTargets: Collection<authenticationMethodTarget>;
}
export type x509CertificateAuthenticationMethodConfiguration = Entity<authenticationMethodConfiguration, x509CertificateAuthenticationMethodConfigurationProps> & {
}
export interface bitlockerProps extends entityProps {
    recoveryKeys: Collection<bitlockerRecoveryKey>;
}
export type bitlocker = Entity<entity, bitlockerProps> & {
}
export interface bitlockerRecoveryKeyProps extends entityProps {
    createdDateTime: Date | null;
    deviceId: string;
    key: string | null;
    volumeType: volumeType;
}
export type bitlockerRecoveryKey = Entity<entity, bitlockerRecoveryKeyProps> & {
}
export interface informationProtectionProps extends entityProps {
    bitlocker: bitlocker;
    threatAssessmentRequests: Collection<threatAssessmentRequest>;
}
export type informationProtection = Entity<{}, informationProtectionProps> & {
}
export interface threatAssessmentRequestProps extends entityProps {
    category: threatCategory | null;
    contentType: threatAssessmentContentType;
    createdBy: identitySet;
    createdDateTime: Date;
    expectedAssessment: threatExpectedAssessment | null;
    requestSource: threatAssessmentRequestSource;
    status: threatAssessmentStatus;
    results: Collection<threatAssessmentResult>;
}
export type threatAssessmentRequest = Entity<entity, threatAssessmentRequestProps> & {
}
export interface availabilityItem {
    endDateTime: dateTimeTimeZone | null;
    serviceId: string;
    startDateTime: dateTimeTimeZone | null;
    status: bookingsAvailabilityStatus;
}
export interface dateTimeTimeZone {
    dateTime: string | null;
    timeZone: string;
}
export interface bookingCustomerInformationBase {
}
export interface bookingCustomerInformation extends bookingCustomerInformationBase {
    customerId: string;
    customQuestionAnswers: Collection<bookingQuestionAnswer>;
    emailAddress: string;
    location: location;
    name: string;
    notes: string;
    phone: string;
    timeZone: string;
}
export interface bookingQuestionAnswer {
    answer: string;
    answerInputType: answerInputType;
    answerOptions: Collection<string>;
    isRequired: boolean;
    question: string;
    questionId: string;
    selectedOptions: Collection<string>;
}
export interface location {
    address: physicalAddress;
    coordinates: outlookGeoCoordinates;
    displayName: string;
    locationEmailAddress: string;
    locationType: locationType;
    locationUri: string;
    uniqueId: string;
    uniqueIdType: locationUniqueIdType;
}
export interface bookingQuestionAssignment {
    isRequired: boolean | null;
    questionId: string | null;
}
export interface bookingReminder {
    message: string | null;
    offset: number | null;
    recipients: bookingReminderRecipients | null;
}
export interface bookingSchedulingPolicy {
    allowStaffSelection: boolean | null;
    maximumAdvance: number | null;
    minimumLeadTime: number | null;
    sendConfirmationsToOwner: boolean | null;
    timeSlotInterval: number | null;
}
export interface bookingWorkHours {
    day: dayOfWeek | null;
    timeSlots: Collection<bookingWorkTimeSlot>;
}
export interface bookingWorkTimeSlot {
    endTime: Date | null;
    startTime: Date | null;
}
export interface physicalAddress {
    city: string;
    countryOrRegion: string;
    postalCode: string;
    state: string;
    street: string;
}
export interface outlookGeoCoordinates {
    accuracy: number;
    altitude: number;
    altitudeAccuracy: number;
    latitude: number;
    longitude: number;
}
export interface phone {
    language: string;
    number: string;
    region: string;
    type: phoneType;
}
export interface staffAvailabilityItem {
    availabilityItems: Collection<availabilityItem>;
    staffId: string;
}
export interface timeSlot {
    end: dateTimeTimeZone | null;
    start: dateTimeTimeZone | null;
}
export interface bookingAppointmentProps extends entityProps {
    additionalInformation: string;
    anonymousJoinWebUrl: string;
    customers: Collection<bookingCustomerInformationBase> | null;
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
    reminders: Collection<bookingReminder>;
    selfServiceAppointmentId: string;
    serviceId: string;
    serviceLocation: location;
    serviceName: string | null;
    serviceNotes: string;
    smsNotificationsEnabled: boolean | null;
    staffMemberIds: Collection<string>;
    startDateTime: dateTimeTimeZone | null;
}
export type bookingAppointment = Entity<entity, bookingAppointmentProps> & {
}
export interface bookingBusinessProps extends entityProps {
    address: physicalAddress;
    businessHours: Collection<bookingWorkHours>;
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
    appointments: Collection<bookingAppointment>;
    calendarView: Collection<bookingAppointment>;
    customers: Collection<bookingCustomerBase>;
    customQuestions: Collection<bookingCustomQuestion>;
    services: Collection<bookingService>;
    staffMembers: Collection<bookingStaffMemberBase>;
}
export type bookingBusiness = Entity<entity, bookingBusinessProps> & {
}
export interface bookingCustomerBaseProps { }
export type bookingCustomerBase = Entity<entity, bookingCustomerBaseProps> & {
}
export interface bookingCustomQuestionProps extends entityProps {
    answerInputType: answerInputType;
    answerOptions: Collection<string>;
    displayName: string | null;
}
export type bookingCustomQuestion = Entity<entity, bookingCustomQuestionProps> & {
}
export interface bookingServiceProps extends entityProps {
    additionalInformation: string;
    customQuestions: Collection<bookingQuestionAssignment>;
    defaultDuration: number | null;
    defaultLocation: location;
    defaultPrice: number | null;
    defaultPriceType: bookingPriceType | null;
    defaultReminders: Collection<bookingReminder>;
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
    staffMemberIds: Collection<string>;
    webUrl: string;
}
export type bookingService = Entity<entity, bookingServiceProps> & {
}
export interface bookingStaffMemberBaseProps { }
export type bookingStaffMemberBase = Entity<entity, bookingStaffMemberBaseProps> & {
}
export interface bookingCurrencyProps extends entityProps {
    symbol: string | null;
}
export type bookingCurrency = Entity<entity, bookingCurrencyProps> & {
}
export interface bookingCustomerProps extends entityProps {
    addresses: Collection<physicalAddress>;
    displayName: string | null;
    emailAddress: string;
    phones: Collection<phone>;
}
export type bookingCustomer = Entity<bookingCustomerBase, bookingCustomerProps> & {
}
export interface bookingStaffMemberProps extends entityProps {
    availabilityIsAffectedByPersonalCalendar: boolean | null;
    displayName: string | null;
    emailAddress: string;
    isEmailNotificationEnabled: boolean | null;
    role: bookingStaffRole | null;
    timeZone: string;
    useBusinessHours: boolean | null;
    workingHours: Collection<bookingWorkHours>;
}
export type bookingStaffMember = Entity<bookingStaffMemberBase, bookingStaffMemberProps> & {
}
export interface solutionsRootProps extends entityProps {
    bookingBusinesses: Collection<bookingBusiness>;
    bookingCurrencies: Collection<bookingCurrency>;
}
export type solutionsRoot = Entity<{}, solutionsRootProps> & {
}
export interface dataSubject {
    email: string;
    firstName: string;
    lastName: string;
    residency: string;
}
export interface identitySet {
    application: identity;
    device: identity;
    user: identity;
}
export interface itemBody {
    content: string;
    contentType: bodyType;
}
export interface publicError {
    code: string;
    details: Collection<publicErrorDetail>;
    innerError: publicInnerError;
    message: string;
    target: string;
}
export interface publicErrorDetail {
    code: string;
    message: string;
    target: string;
}
export interface publicInnerError {
    code: string;
    details: Collection<publicErrorDetail>;
    message: string;
    target: string;
}
export interface subjectRightsRequestMailboxLocation {
}
export interface subjectRightsRequestAllMailboxLocation extends subjectRightsRequestMailboxLocation {
}
export interface subjectRightsRequestSiteLocation {
}
export interface subjectRightsRequestAllSiteLocation extends subjectRightsRequestSiteLocation {
}
export interface subjectRightsRequestDetail {
    excludedItemCount: number;
    insightCounts: Collection<keyValuePair>;
    itemCount: number;
    itemNeedReview: number;
    productItemCounts: Collection<keyValuePair>;
    signedOffItemCount: number;
    totalItemSize: number;
}
export interface subjectRightsRequestEnumeratedMailboxLocation extends subjectRightsRequestMailboxLocation {
    userPrincipalNames: Collection<string>;
}
export interface subjectRightsRequestEnumeratedSiteLocation extends subjectRightsRequestSiteLocation {
    urls: Collection<string>;
}
export interface subjectRightsRequestHistory {
    changedBy: identitySet;
    eventDateTime: Date;
    stage: subjectRightsRequestStage;
    stageStatus: subjectRightsRequestStageStatus;
    type: string;
}
export interface subjectRightsRequestStageDetail {
    error: publicError;
    stage: subjectRightsRequestStage;
    status: subjectRightsRequestStageStatus;
}
export interface authoredNoteProps extends entityProps {
    author: identity;
    content: itemBody;
    createdDateTime: Date;
}
export type authoredNote = Entity<entity, authoredNoteProps> & {
}
export interface privacyProps extends entityProps {
    subjectRightsRequests: Collection<subjectRightsRequest>;
}
export type privacy = Entity<{}, privacyProps> & {
}
export interface subjectRightsRequestProps extends entityProps {
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
    history: Collection<subjectRightsRequestHistory>;
    includeAllVersions: boolean;
    includeAuthoredContent: boolean;
    insight: subjectRightsRequestDetail;
    internalDueDateTime: Date;
    lastModifiedBy: identitySet;
    lastModifiedDateTime: Date;
    mailboxlocations: subjectRightsRequestMailboxLocation;
    pauseAfterEstimate: boolean;
    regulations: Collection<string>;
    sitelocations: subjectRightsRequestSiteLocation;
    stages: Collection<subjectRightsRequestStageDetail>;
    status: subjectRightsRequestStatus;
    type: subjectRightsRequestType;
    approvers: Collection<user>;
    collaborators: Collection<user>;
    notes: Collection<authoredNote>;
    team: team;
}
export type subjectRightsRequest = Entity<entity, subjectRightsRequestProps> & {
    getFinalAttachment(): Buffer;
    getFinalReport(): Buffer;
}
export interface securityProps extends entityProps {
    subjectRightsRequests: Collection<subjectRightsRequest>;
    cases: {};
    alerts_v2: Collection<{}>;
    incidents: Collection<{}>;
    attackSimulation: attackSimulationRoot;
    triggers: {};
    triggerTypes: {};
    alerts: Collection<alert>;
    secureScoreControlProfiles: Collection<secureScoreControlProfile>;
    secureScores: Collection<secureScore>;
    threatIntelligence: {};
}
export type security = Entity<entity, securityProps> & {
}
export interface attackSimulationRootProps extends entityProps {
    simulationAutomations: Collection<simulationAutomation>;
    simulations: Collection<simulation>;
}
export type attackSimulationRoot = Entity<entity, attackSimulationRootProps> & {
}
export interface alertProps extends entityProps {
    activityGroupName: string;
    alertDetections: Collection<alertDetection>;
    assignedTo: string;
    azureSubscriptionId: string;
    azureTenantId: string | null;
    category: string;
    closedDateTime: Date;
    cloudAppStates: Collection<cloudAppSecurityState>;
    comments: Collection<string>;
    confidence: number;
    createdDateTime: Date;
    description: string;
    detectionIds: Collection<string>;
    eventDateTime: Date;
    feedback: alertFeedback;
    fileStates: Collection<fileSecurityState>;
    historyStates: Collection<alertHistoryState>;
    hostStates: Collection<hostSecurityState>;
    incidentIds: Collection<string>;
    investigationSecurityStates: Collection<investigationSecurityState>;
    lastEventDateTime: Date;
    lastModifiedDateTime: Date;
    malwareStates: Collection<malwareState>;
    messageSecurityStates: Collection<messageSecurityState>;
    networkConnections: Collection<networkConnection>;
    processes: Collection<process>;
    recommendedActions: Collection<string>;
    registryKeyStates: Collection<registryKeyState>;
    securityResources: Collection<securityResource>;
    severity: alertSeverity | null;
    sourceMaterials: Collection<string>;
    status: alertStatus | null;
    tags: Collection<string>;
    title: string;
    triggers: Collection<alertTrigger>;
    uriClickSecurityStates: Collection<uriClickSecurityState>;
    userStates: Collection<userSecurityState>;
    vendorInformation: securityVendorInformation;
    vulnerabilityStates: Collection<vulnerabilityState>;
}
export type alert = Entity<entity, alertProps> & {
}
export interface secureScoreControlProfileProps extends entityProps {
    actionType: string;
    actionUrl: string;
    azureTenantId: string | null;
    complianceInformation: Collection<complianceInformation>;
    controlCategory: string;
    controlStateUpdates: Collection<secureScoreControlStateUpdate>;
    deprecated: boolean;
    implementationCost: string;
    lastModifiedDateTime: Date;
    maxScore: number;
    rank: number;
    remediation: string;
    remediationImpact: string;
    service: string;
    threats: Collection<string>;
    tier: string;
    title: string;
    userImpact: string;
    vendorInformation: securityVendorInformation;
}
export type secureScoreControlProfile = Entity<entity, secureScoreControlProfileProps> & {
}
export interface secureScoreProps extends entityProps {
    activeUserCount: number;
    averageComparativeScores: Collection<averageComparativeScore>;
    azureTenantId: string | null;
    controlScores: Collection<controlScore>;
    createdDateTime: Date;
    currentScore: number;
    enabledServices: Collection<string>;
    licensedUserCount: number;
    maxScore: number;
    vendorInformation: securityVendorInformation;
}
export type secureScore = Entity<entity, secureScoreProps> & {
}
export interface teamFunSettings {
    allowCustomMemes: boolean;
    allowGiphy: boolean;
    allowStickersAndMemes: boolean;
    giphyContentRating: giphyRatingType;
}
export interface teamGuestSettings {
    allowCreateUpdateChannels: boolean;
    allowDeleteChannels: boolean;
}
export interface teamMemberSettings {
    allowAddRemoveApps: boolean;
    allowCreatePrivateChannels: boolean;
    allowCreateUpdateChannels: boolean;
    allowCreateUpdateRemoveConnectors: boolean;
    allowCreateUpdateRemoveTabs: boolean;
    allowDeleteChannels: boolean;
}
export interface teamMessagingSettings {
    allowChannelMentions: boolean;
    allowOwnerDeleteMessages: boolean;
    allowTeamMentions: boolean;
    allowUserDeleteMessages: boolean;
    allowUserEditMessages: boolean;
}
export interface teamSummary {
    guestsCount: number;
    membersCount: number;
    ownersCount: number;
}
export interface channelProps extends entityProps {
    createdDateTime: Date;
    description: string;
    displayName: string | null;
    email: string;
    isFavoriteByDefault: boolean;
    membershipType: channelMembershipType;
    tenantId: string;
    webUrl: string;
    filesFolder: driveItem;
    members: Collection<conversationMember>;
    messages: Collection<chatMessage>;
    sharedWithTeams: Collection<sharedWithChannelTeamInfo>;
    tabs: Collection<teamsTab>;
}
export type channel = Entity<entity, channelProps> & {
    completeMigration(): void;
    provisionEmail(): provisionChannelEmailResult;
    removeEmail(): void;
    doesUserHaveAccess(userId: string, tenantId: string, userPrincipalName: string): boolean;
}
export interface groupProps extends entityProps {
    assignedLabels: Collection<assignedLabel>;
    assignedLicenses: Collection<assignedLicense>;
    classification: string;
    createdDateTime: Date;
    description: string;
    displayName: string;
    expirationDateTime: Date;
    groupTypes: Collection<string> | null;
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
    onPremisesProvisioningErrors: Collection<onPremisesProvisioningError>;
    onPremisesSamAccountName: string;
    onPremisesSecurityIdentifier: string;
    onPremisesSyncEnabled: boolean;
    preferredDataLocation: string;
    preferredLanguage: string;
    proxyAddresses: Collection<string> | null;
    renewedDateTime: Date;
    securityEnabled: boolean;
    securityIdentifier: string;
    serviceProvisioningErrors: Collection<serviceProvisioningError>;
    theme: string;
    visibility: string;
    allowExternalSenders: boolean;
    autoSubscribeNewMembers: boolean;
    hideFromAddressLists: boolean;
    hideFromOutlookClients: boolean;
    isSubscribedByMail: boolean;
    unseenCount: number;
    isArchived: boolean;
    appRoleAssignments: Collection<appRoleAssignment>;
    createdOnBehalfOf: directoryObject;
    memberOf: Collection<directoryObject>;
    members: Collection<directoryObject>;
    membersWithLicenseErrors: Collection<directoryObject>;
    owners: Collection<directoryObject>;
    permissionGrants: Collection<resourceSpecificPermissionGrant>;
    settings: Collection<groupSetting>;
    transitiveMemberOf: Collection<directoryObject>;
    transitiveMembers: Collection<directoryObject>;
    acceptedSenders: Collection<directoryObject>;
    calendar: calendar;
    calendarView: Collection<event>;
    conversations: Collection<conversation>;
    events: Collection<event>;
    rejectedSenders: Collection<directoryObject>;
    threads: Collection<conversationThread>;
    drive: drive;
    drives: Collection<drive>;
    sites: Collection<site>;
    extensions: Collection<extension>;
    groupLifecyclePolicies: Collection<groupLifecyclePolicy>;
    planner: plannerGroup;
    onenote: onenote;
    photo: profilePhoto;
    photos: Collection<profilePhoto>;
    team: team;
}
export type group = Entity<directoryObject, groupProps> & {
    assignLicense(addLicenses: Collection<assignedLicense>, removeLicenses: Collection<string>): group;
    retryServiceProvisioning(): void;
    checkGrantedPermissionsForApp(): Collection<resourceSpecificPermissionGrant>;
    validateProperties(): void;
    addFavorite(): void;
    removeFavorite(): void;
    resetUnseenCount(): void;
    subscribeByMail(): void;
    unsubscribeByMail(): void;
    renew(): void;
}
export interface teamsAppInstallationProps extends entityProps {
    consentedPermissionSet: teamsAppPermissionSet;
    teamsApp: teamsApp;
    teamsAppDefinition: teamsAppDefinition;
}
export type teamsAppInstallation = Entity<entity, teamsAppInstallationProps> & {
    upgrade(): void;
}
export interface conversationMemberProps extends entityProps {
    displayName: string;
    roles: Collection<string>;
    visibleHistoryStartDateTime: Date;
}
export type conversationMember = Entity<entity, conversationMemberProps> & {
}
export interface teamsAsyncOperationProps extends entityProps {
    attemptsCount: number | null;
    createdDateTime: Date | null;
    error: operationError;
    lastActionDateTime: Date | null;
    operationType: teamsAsyncOperationType | null;
    status: teamsAsyncOperationStatus | null;
    targetResourceId: string;
    targetResourceLocation: string;
}
export type teamsAsyncOperation = Entity<entity, teamsAsyncOperationProps> & {
}
export interface resourceSpecificPermissionGrantProps extends entityProps {
    clientAppId: string;
    clientId: string;
    permission: string;
    permissionType: string;
    resourceAppId: string;
}
export type resourceSpecificPermissionGrant = Entity<directoryObject, resourceSpecificPermissionGrantProps> & {
}
export interface teamworkTagProps extends entityProps {
    description: string;
    displayName: string;
    memberCount: number;
    tagType: teamworkTagType;
    teamId: string;
    members: Collection<teamworkTagMember>;
}
export type teamworkTag = Entity<entity, teamworkTagProps> & {
}
export interface teamsTemplateProps { }
export type teamsTemplate = Entity<entity, teamsTemplateProps> & {
}
export interface scheduleProps extends entityProps {
    enabled: boolean;
    offerShiftRequestsEnabled: boolean;
    openShiftsEnabled: boolean;
    provisionStatus: operationStatus;
    provisionStatusCode: string;
    swapShiftsRequestsEnabled: boolean;
    timeClockEnabled: boolean;
    timeOffRequestsEnabled: boolean;
    timeZone: string;
    workforceIntegrationIds: Collection<string>;
    offerShiftRequests: Collection<offerShiftRequest>;
    openShiftChangeRequests: Collection<openShiftChangeRequest>;
    openShifts: Collection<openShift>;
    schedulingGroups: Collection<schedulingGroup>;
    shifts: Collection<shift>;
    swapShiftsChangeRequests: Collection<swapShiftsChangeRequest>;
    timeOffReasons: Collection<timeOffReason>;
    timeOffRequests: Collection<timeOffRequest>;
    timesOff: Collection<timeOff>;
}
export type schedule = Entity<entity, scheduleProps> & {
    share(): void;
}
export interface resultInfo {
    code: number | null;
    message: string;
    subcode: number | null;
}
export interface complianceProps { }
export type compliance = Entity<{}, complianceProps> & {
}
export interface assignedLabel {
    displayName: string;
    labelId: string;
}
export interface licenseProcessingState {
    state: string;
}
export interface groupSettingProps extends entityProps {
    displayName: string;
    templateId: string;
    values: Collection<settingValue> | null;
}
export type groupSetting = Entity<entity, groupSettingProps> & {
}
export interface conversationProps extends entityProps {
    hasAttachments: boolean | null;
    lastDeliveredDateTime: Date | null;
    preview: string | null;
    topic: string | null;
    uniqueSenders: Collection<string> | null;
    threads: Collection<conversationThread>;
}
export type conversation = Entity<entity, conversationProps> & {
}
export interface conversationThreadProps extends entityProps {
    ccRecipients: Collection<recipient> | null;
    hasAttachments: boolean | null;
    isLocked: boolean | null;
    lastDeliveredDateTime: Date | null;
    preview: string | null;
    topic: string | null;
    toRecipients: Collection<recipient> | null;
    uniqueSenders: Collection<string> | null;
    posts: Collection<post>;
}
export type conversationThread = Entity<entity, conversationThreadProps> & {
    reply(): void;
}
export interface groupLifecyclePolicyProps extends entityProps {
    alternateNotificationEmails: string;
    groupLifetimeInDays: number;
    managedGroupTypes: string;
}
export type groupLifecyclePolicy = Entity<entity, groupLifecyclePolicyProps> & {
    addGroup(groupId: string): boolean;
    removeGroup(groupId: string): boolean;
}
export interface plannerGroupProps extends entityProps {
    plans: Collection<plannerPlan>;
}
export type plannerGroup = Entity<entity, plannerGroupProps> & {
}
export interface root {
}
export interface sharepointIds {
    listId: string;
    listItemId: string;
    listItemUniqueId: string;
    siteId: string;
    siteUrl: string;
    tenantId: string;
    webId: string;
}
export interface siteCollection {
    dataLocationCode: string;
    hostname: string;
    root: root;
}
export interface itemAnalyticsProps extends entityProps {
    allTime: itemActivityStat;
    itemActivityStats: Collection<itemActivityStat>;
    lastSevenDays: itemActivityStat;
}
export type itemAnalytics = Entity<entity, itemAnalyticsProps> & {
}
export interface columnDefinitionProps extends entityProps {
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
export type columnDefinition = Entity<entity, columnDefinitionProps> & {
}
export interface contentTypeProps extends entityProps {
    associatedHubsUrls: Collection<string>;
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
    baseTypes: Collection<contentType>;
    columnLinks: Collection<columnLink>;
    columnPositions: Collection<columnDefinition>;
    columns: Collection<columnDefinition>;
}
export type contentType = Entity<entity, contentTypeProps> & {
    publish(): void;
    unpublish(): void;
    associateWithHubSites(): void;
    copyToDefaultContentLocation(): void;
    isPublished(): boolean;
}
export interface listProps extends entityProps {
    displayName: string;
    list: listInfo;
    sharepointIds: sharepointIds;
    system: systemFacet;
    columns: Collection<columnDefinition>;
    contentTypes: Collection<contentType>;
    drive: drive;
    items: Collection<listItem>;
    operations: Collection<richLongRunningOperation>;
    subscriptions: Collection<subscription>;
}
export type list = Entity<baseItem, listProps> & {
}
export interface longRunningOperationProps extends entityProps {
    createdDateTime: Date;
    lastActionDateTime: Date;
    resourceLocation: string;
    status: longRunningOperationStatus;
    statusDetail: string;
}
export type longRunningOperation = Entity<entity, longRunningOperationProps> & {
}
export interface richLongRunningOperationProps extends entityProps {
    error: publicError;
    percentageComplete: number;
    resourceId: string;
    type: string;
}
export type richLongRunningOperation = Entity<longRunningOperation, richLongRunningOperationProps> & {
}
export interface permissionProps extends entityProps {
    expirationDateTime: Date;
    grantedTo: identitySet;
    grantedToIdentities: Collection<identitySet>;
    grantedToIdentitiesV2: Collection<sharePointIdentitySet>;
    grantedToV2: sharePointIdentitySet;
    hasPassword: boolean;
    inheritedFrom: itemReference;
    invitation: sharingInvitation;
    link: sharingLink;
    roles: Collection<string>;
    shareId: string;
}
export type permission = Entity<entity, permissionProps> & {
    grant(roles: Collection<string>, recipients: Collection<driveRecipient>): Collection<permission>;
}
export interface apiAuthenticationConfigurationBase {
}
export interface assignmentOrder {
    order: Collection<string>;
}
export interface basicAuthentication extends apiAuthenticationConfigurationBase {
    password: string;
    username: string;
}
export interface clientCertificateAuthentication extends apiAuthenticationConfigurationBase {
    certificateList: Collection<pkcs12CertificateInformation>;
}
export interface pkcs12CertificateInformation {
    isActive: boolean | null;
    notAfter: number | null;
    notBefore: number | null;
    thumbprint: string;
}
export interface pkcs12Certificate extends apiAuthenticationConfigurationBase {
    password: string;
    pkcs12Value: string;
}
export interface selfServiceSignUpAuthenticationFlowConfiguration {
    isEnabled: boolean | null;
}
export interface userAttributeValuesItem {
    isDefault: boolean | null;
    name: string;
    value: string;
}
export interface userFlowApiConnectorConfiguration {
    postAttributeCollection: identityApiConnector;
    postFederationSignup: identityApiConnector;
}
export interface identityApiConnectorProps extends entityProps {
    authenticationConfiguration: apiAuthenticationConfigurationBase;
    displayName: string;
    targetUrl: string;
}
export type identityApiConnector = Entity<entity, identityApiConnectorProps> & {
    uploadClientCertificate(pkcs12Value: string, password: string): identityApiConnector;
}
export interface identityProviderBaseProps extends entityProps {
    displayName: string;
}
export type identityProviderBase = Entity<entity, identityProviderBaseProps> & {
}
export interface appleManagedIdentityProviderProps extends entityProps {
    certificateData: string;
    developerId: string;
    keyId: string;
    serviceId: string;
}
export type appleManagedIdentityProvider = Entity<identityProviderBase, appleManagedIdentityProviderProps> & {
}
export interface identityUserFlowProps extends entityProps {
    userFlowType: userFlowType | null;
    userFlowTypeVersion: number | null;
}
export type identityUserFlow = Entity<entity, identityUserFlowProps> & {
}
export interface b2xIdentityUserFlowProps extends entityProps {
    apiConnectorConfiguration: userFlowApiConnectorConfiguration;
    identityProviders: Collection<identityProvider>;
    languages: Collection<userFlowLanguageConfiguration>;
    userAttributeAssignments: Collection<identityUserFlowAttributeAssignment>;
    userFlowIdentityProviders: Collection<identityProviderBase>;
}
export type b2xIdentityUserFlow = Entity<identityUserFlow, b2xIdentityUserFlowProps> & {
}
export interface identityProviderProps extends entityProps {
    clientId: string;
    clientSecret: string;
    name: string;
    type: string;
}
export type identityProvider = Entity<entity, identityProviderProps> & {
}
export interface userFlowLanguageConfigurationProps extends entityProps {
    displayName: string;
    isEnabled: boolean | null;
    defaultPages: Collection<userFlowLanguagePage>;
    overridesPages: Collection<userFlowLanguagePage>;
}
export type userFlowLanguageConfiguration = Entity<entity, userFlowLanguageConfigurationProps> & {
}
export interface identityUserFlowAttributeAssignmentProps extends entityProps {
    displayName: string;
    isOptional: boolean | null;
    requiresVerification: boolean | null;
    userAttributeValues: Collection<userAttributeValuesItem>;
    userInputType: identityUserFlowAttributeInputType | null;
    userAttribute: identityUserFlowAttribute;
}
export type identityUserFlowAttributeAssignment = Entity<entity, identityUserFlowAttributeAssignmentProps> & {
}
export interface builtInIdentityProviderProps extends entityProps {
    identityProviderType: string;
}
export type builtInIdentityProvider = Entity<identityProviderBase, builtInIdentityProviderProps> & {
}
export interface identityUserFlowAttributeProps extends entityProps {
    dataType: identityUserFlowAttributeDataType | null;
    description: string;
    displayName: string;
    userFlowAttributeType: identityUserFlowAttributeType | null;
}
export type identityUserFlowAttribute = Entity<entity, identityUserFlowAttributeProps> & {
}
export interface identityBuiltInUserFlowAttributeProps { }
export type identityBuiltInUserFlowAttribute = Entity<identityUserFlowAttribute, identityBuiltInUserFlowAttributeProps> & {
}
export interface identityContainerProps extends entityProps {
    apiConnectors: Collection<identityApiConnector>;
    b2xUserFlows: Collection<b2xIdentityUserFlow>;
    identityProviders: Collection<identityProviderBase>;
    userFlowAttributes: Collection<identityUserFlowAttribute>;
    conditionalAccess: conditionalAccessRoot;
}
export type identityContainer = Entity<entity, identityContainerProps> & {
}
export interface identityCustomUserFlowAttributeProps { }
export type identityCustomUserFlowAttribute = Entity<identityUserFlowAttribute, identityCustomUserFlowAttributeProps> & {
}
export interface socialIdentityProviderProps extends entityProps {
    clientId: string;
    clientSecret: string;
    identityProviderType: string;
}
export type socialIdentityProvider = Entity<identityProviderBase, socialIdentityProviderProps> & {
}
export interface userFlowLanguagePageProps { }
export type userFlowLanguagePage = Entity<entity, userFlowLanguagePageProps> & {
}
export interface lobbyBypassSettings {
    isDialInBypassEnabled: boolean;
    scope: lobbyBypassScope;
}
export interface watermarkProtectionValues {
    isEnabledForContentSharing: boolean;
    isEnabledForVideo: boolean;
}
export interface alternativeSecurityId {
    identityProvider: string;
    key: Buffer;
    type: number;
}
export interface preAuthorizedApplication {
    appId: string;
    delegatedPermissionIds: Collection<string> | null;
}
export interface appManagementConfiguration {
    keyCredentials: Collection<keyCredentialConfiguration>;
    passwordCredentials: Collection<passwordCredentialConfiguration>;
}
export interface keyCredentialConfiguration {
    maxLifetime: number;
    restrictForAppsCreatedAfterDateTime: Date;
    restrictionType: appKeyCredentialRestrictionType;
}
export interface passwordCredentialConfiguration {
    maxLifetime: number;
    restrictForAppsCreatedAfterDateTime: Date;
    restrictionType: appCredentialRestrictionType;
}
export interface certificateAuthority {
    certificate: Buffer | null;
    certificateRevocationListUrl: string;
    deltaCertificateRevocationListUrl: string;
    isRootAuthority: boolean | null;
    issuer: string | null;
    issuerSki: string | null;
}
export interface ComplexExtensionValue {
}
export interface crossTenantAccessPolicyB2BSetting {
    applications: crossTenantAccessPolicyTargetConfiguration;
    usersAndGroups: crossTenantAccessPolicyTargetConfiguration;
}
export interface crossTenantAccessPolicyTargetConfiguration {
    accessType: crossTenantAccessPolicyTargetConfigurationAccessType;
    targets: Collection<crossTenantAccessPolicyTarget>;
}
export interface crossTenantAccessPolicyInboundTrust {
    isCompliantDeviceAccepted: boolean;
    isHybridAzureADJoinedDeviceAccepted: boolean;
    isMfaAccepted: boolean;
}
export interface crossTenantAccessPolicyTarget {
    target: string;
    targetType: crossTenantAccessPolicyTargetType;
}
export interface crossTenantUserSyncInbound {
    isSyncAllowed: boolean;
}
export interface defaultUserRolePermissions {
    allowedToCreateApps: boolean | null;
    allowedToCreateSecurityGroups: boolean | null;
    allowedToCreateTenants: boolean;
    allowedToReadBitlockerKeysForOwnedDevice: boolean;
    allowedToReadOtherUsers: boolean | null;
    permissionGrantPoliciesAssigned: Collection<string>;
}
export interface domainState {
    lastActionDateTime: Date;
    operation: string;
    status: string;
}
export interface implicitGrantSettings {
    enableAccessTokenIssuance: boolean;
    enableIdTokenIssuance: boolean;
}
export interface inboundOutboundPolicyConfiguration {
    inboundAllowed: boolean;
    outboundAllowed: boolean;
}
export interface instanceResourceAccess {
    permissions: Collection<resourcePermission> | null;
    resourceAppId: string | null;
}
export interface resourcePermission {
    type: string | null;
    value: string | null;
}
export interface licenseUnitsDetail {
    enabled: number;
    lockedOut: number;
    suspended: number;
    warning: number;
}
export interface loginPageLayoutConfiguration {
    isFooterShown: boolean;
    isHeaderShown: boolean;
    layoutTemplateType: layoutTemplateType;
}
export interface loginPageTextVisibilitySettings {
    hideAccountResetCredentials: boolean;
    hideCannotAccessYourAccount: boolean;
    hideForgotMyPassword: boolean;
    hidePrivacyAndCookies: boolean;
    hideResetItNow: boolean;
    hideTermsOfUse: boolean;
}
export interface onPremisesAccidentalDeletionPrevention {
    alertThreshold: number;
    synchronizationPreventionType: onPremisesDirectorySynchronizationDeletionPreventionType;
}
export interface onPremisesDirectorySynchronizationConfiguration {
    accidentalDeletionPrevention: onPremisesAccidentalDeletionPrevention;
}
export interface onPremisesDirectorySynchronizationFeature {
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
export interface optionalClaim {
    additionalProperties: Collection<string>;
    essential: boolean | null;
    name: string | null;
    source: string;
}
export interface physicalOfficeAddress {
    city: string;
    countryOrRegion: string;
    officeLocation: string;
    postalCode: string;
    state: string;
    street: string;
}
export interface privacyProfile {
    contactEmail: string;
    statementUrl: string;
}
export interface redirectUriSettings {
    index: number;
    uri: string;
}
export interface resourceAccess {
    id: string | null;
    type: string;
}
export interface selfSignedCertificate {
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
export interface servicePlanInfo {
    appliesTo: string;
    provisioningStatus: string;
    servicePlanId: string;
    servicePlanName: string;
}
export interface serviceProvisioningXmlError extends serviceProvisioningError {
    errorDetail: string;
}
export interface settingTemplateValue {
    defaultValue: string;
    description: string;
    name: string;
    type: string;
}
export interface settingValue {
    name: string;
    value: string;
}
export interface signingCertificateUpdateStatus {
    certificateUpdateResult: string;
    lastRunDateTime: Date;
}
export interface tenantInformation {
    defaultDomainName: string;
    displayName: string;
    federationBrandName: string;
    tenantId: string | null;
}
export interface unifiedRolePermission {
    allowedResourceActions: Collection<string> | null;
    condition: string;
    excludedResourceActions: Collection<string>;
}
export interface verifiedDomain {
    capabilities: string;
    isDefault: boolean;
    isInitial: boolean;
    name: string;
    type: string;
}
export interface administrativeUnitProps extends entityProps {
    description: string;
    displayName: string;
    visibility: string;
    members: Collection<directoryObject>;
    scopedRoleMembers: Collection<scopedRoleMembership>;
    extensions: Collection<extension>;
}
export type administrativeUnit = Entity<directoryObject, administrativeUnitProps> & {
}
export interface allowedValueProps extends entityProps {
    isActive: boolean;
}
export type allowedValue = Entity<entity, allowedValueProps> & {
}
export interface appScopeProps extends entityProps {
    displayName: string;
    type: string;
}
export type appScope = Entity<entity, appScopeProps> & {
}
export interface attributeSetProps extends entityProps {
    description: string;
    maxAttributesPerSet: number;
}
export type attributeSet = Entity<entity, attributeSetProps> & {
}
export interface certificateBasedAuthConfigurationProps extends entityProps {
    certificateAuthorities: Collection<certificateAuthority> | null;
}
export type certificateBasedAuthConfiguration = Entity<entity, certificateBasedAuthConfigurationProps> & {
}
export interface contractProps extends entityProps {
    contractType: string;
    customerId: string;
    defaultDomainName: string;
    displayName: string;
}
export type contract = Entity<directoryObject, contractProps> & {
}
export interface crossTenantAccessPolicyConfigurationDefaultProps extends entityProps {
    automaticUserConsentSettings: inboundOutboundPolicyConfiguration;
    b2bCollaborationInbound: crossTenantAccessPolicyB2BSetting;
    b2bCollaborationOutbound: crossTenantAccessPolicyB2BSetting;
    b2bDirectConnectInbound: crossTenantAccessPolicyB2BSetting;
    b2bDirectConnectOutbound: crossTenantAccessPolicyB2BSetting;
    inboundTrust: crossTenantAccessPolicyInboundTrust;
    isServiceDefault: boolean;
}
export type crossTenantAccessPolicyConfigurationDefault = Entity<entity, crossTenantAccessPolicyConfigurationDefaultProps> & {
    resetToSystemDefault(): void;
}
export interface crossTenantAccessPolicyConfigurationPartnerProps extends Omit<entityProps, typeof KeyProperty> {
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
export type crossTenantAccessPolicyConfigurationPartner = Entity<{}, crossTenantAccessPolicyConfigurationPartnerProps> & {
}
export interface crossTenantIdentitySyncPolicyPartnerProps extends Omit<entityProps, typeof KeyProperty> {
    [KeyProperty]: "tenantId";
    displayName: string;
    tenantId: string | null;
    userSyncInbound: crossTenantUserSyncInbound;
}
export type crossTenantIdentitySyncPolicyPartner = Entity<{}, crossTenantIdentitySyncPolicyPartnerProps> & {
}
export interface customSecurityAttributeDefinitionProps extends entityProps {
    attributeSet: string | null;
    description: string;
    isCollection: boolean | null;
    isSearchable: boolean;
    name: string | null;
    status: string | null;
    type: string | null;
    usePreDefinedValuesOnly: boolean;
    allowedValues: Collection<allowedValue>;
}
export type customSecurityAttributeDefinition = Entity<entity, customSecurityAttributeDefinitionProps> & {
}
export interface deviceProps extends entityProps {
    accountEnabled: boolean;
    alternativeSecurityIds: Collection<alternativeSecurityId> | null;
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
    physicalIds: Collection<string> | null;
    profileType: string;
    registrationDateTime: Date;
    systemLabels: Collection<string> | null;
    trustType: string;
    memberOf: Collection<directoryObject>;
    registeredOwners: Collection<directoryObject>;
    registeredUsers: Collection<directoryObject>;
    transitiveMemberOf: Collection<directoryObject>;
    extensions: Collection<extension>;
}
export type device = Entity<directoryObject, deviceProps> & {
}
export interface directoryProps extends entityProps {
    administrativeUnits: Collection<administrativeUnit>;
    attributeSets: Collection<attributeSet>;
    customSecurityAttributeDefinitions: Collection<customSecurityAttributeDefinition>;
    deletedItems: Collection<directoryObject>;
    federationConfigurations: Collection<identityProviderBase>;
    onPremisesSynchronization: Collection<onPremisesDirectorySynchronization>;
}
export type directory = Entity<entity, directoryProps> & {
}
export interface onPremisesDirectorySynchronizationProps extends entityProps {
    configuration: onPremisesDirectorySynchronizationConfiguration;
    features: onPremisesDirectorySynchronizationFeature | null;
}
export type onPremisesDirectorySynchronization = Entity<entity, onPremisesDirectorySynchronizationProps> & {
}
export interface directoryObjectPartnerReferenceProps extends entityProps {
    description: string;
    displayName: string;
    externalPartnerTenantId: string;
    objectType: string;
}
export type directoryObjectPartnerReference = Entity<directoryObject, directoryObjectPartnerReferenceProps> & {
}
export interface directoryRoleProps extends entityProps {
    description: string;
    displayName: string;
    roleTemplateId: string;
    members: Collection<directoryObject>;
    scopedMembers: Collection<scopedRoleMembership>;
}
export type directoryRole = Entity<directoryObject, directoryRoleProps> & {
}
export interface directoryRoleTemplateProps extends entityProps {
    description: string;
    displayName: string;
}
export type directoryRoleTemplate = Entity<directoryObject, directoryRoleTemplateProps> & {
}
export interface domainProps extends entityProps {
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
    supportedServices: Collection<string> | null;
    domainNameReferences: Collection<directoryObject>;
    federationConfiguration: Collection<internalDomainFederation>;
    serviceConfigurationRecords: Collection<domainDnsRecord>;
    verificationDnsRecords: Collection<domainDnsRecord>;
}
export type domain = Entity<entity, domainProps> & {
    forceDelete(): void;
    promote(): boolean;
    verify(): domain;
}
export interface samlOrWsFedProviderProps extends entityProps {
    issuerUri: string;
    metadataExchangeUri: string;
    passiveSignInUri: string;
    preferredAuthenticationProtocol: authenticationProtocol;
    signingCertificate: string;
}
export type samlOrWsFedProvider = Entity<identityProviderBase, samlOrWsFedProviderProps> & {
}
export interface internalDomainFederationProps extends entityProps {
    activeSignInUri: string;
    federatedIdpMfaBehavior: federatedIdpMfaBehavior;
    isSignedAuthenticationRequestRequired: boolean;
    nextSigningCertificate: string;
    promptLoginBehavior: promptLoginBehavior;
    signingCertificateUpdateStatus: signingCertificateUpdateStatus;
    signOutUri: string;
}
export type internalDomainFederation = Entity<samlOrWsFedProvider, internalDomainFederationProps> & {
}
export interface domainDnsRecordProps extends entityProps {
    isOptional: boolean | null;
    label: string | null;
    recordType: string;
    supportedService: string | null;
    ttl: number | null;
}
export type domainDnsRecord = Entity<entity, domainDnsRecordProps> & {
}
export interface domainDnsCnameRecordProps extends entityProps {
    canonicalName: string;
}
export type domainDnsCnameRecord = Entity<domainDnsRecord, domainDnsCnameRecordProps> & {
}
export interface domainDnsMxRecordProps extends entityProps {
    mailExchange: string | null;
    preference: number;
}
export type domainDnsMxRecord = Entity<domainDnsRecord, domainDnsMxRecordProps> & {
}
export interface domainDnsSrvRecordProps extends entityProps {
    nameTarget: string;
    port: number;
    priority: number;
    protocol: string;
    service: string;
    weight: number;
}
export type domainDnsSrvRecord = Entity<domainDnsRecord, domainDnsSrvRecordProps> & {
}
export interface domainDnsTxtRecordProps extends entityProps {
    text: string | null;
}
export type domainDnsTxtRecord = Entity<domainDnsRecord, domainDnsTxtRecordProps> & {
}
export interface domainDnsUnavailableRecordProps extends entityProps {
    description: string;
}
export type domainDnsUnavailableRecord = Entity<domainDnsRecord, domainDnsUnavailableRecordProps> & {
}
export interface externalDomainNameProps { }
export type externalDomainName = Entity<entity, externalDomainNameProps> & {
}
export interface groupSettingTemplateProps extends entityProps {
    description: string;
    displayName: string;
    values: Collection<settingTemplateValue> | null;
}
export type groupSettingTemplate = Entity<directoryObject, groupSettingTemplateProps> & {
}
export interface organizationProps extends entityProps {
    assignedPlans: Collection<assignedPlan> | null;
    businessPhones: Collection<string> | null;
    city: string;
    country: string;
    countryLetterCode: string;
    createdDateTime: Date;
    defaultUsageLocation: string;
    displayName: string;
    marketingNotificationEmails: Collection<string> | null;
    onPremisesLastSyncDateTime: Date;
    onPremisesSyncEnabled: boolean;
    partnerTenantType: partnerTenantType;
    postalCode: string;
    preferredLanguage: string;
    privacyProfile: privacyProfile;
    provisionedPlans: Collection<provisionedPlan> | null;
    securityComplianceNotificationMails: Collection<string> | null;
    securityComplianceNotificationPhones: Collection<string> | null;
    state: string;
    street: string;
    technicalNotificationMails: Collection<string> | null;
    tenantType: string;
    verifiedDomains: Collection<verifiedDomain> | null;
    mobileDeviceManagementAuthority: mdmAuthority | null;
    branding: organizationalBranding;
    certificateBasedAuthConfiguration: Collection<certificateBasedAuthConfiguration>;
    extensions: Collection<extension>;
}
export type organization = Entity<directoryObject, organizationProps> & {
    setMobileDeviceManagementAuthority(): number;
}
export interface organizationalBrandingPropertiesProps extends entityProps {
    backgroundColor: string;
    backgroundImage: Buffer;
    backgroundImageRelativeUrl: string;
    bannerLogo: Buffer;
    bannerLogoRelativeUrl: string;
    cdnList: Collection<string>;
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
export type organizationalBrandingProperties = Entity<entity, organizationalBrandingPropertiesProps> & {
}
export interface organizationalBrandingProps extends entityProps {
    localizations: Collection<organizationalBrandingLocalization>;
}
export type organizationalBranding = Entity<organizationalBrandingProperties, organizationalBrandingProps> & {
}
export interface organizationalBrandingLocalizationProps { }
export type organizationalBrandingLocalization = Entity<organizationalBrandingProperties, organizationalBrandingLocalizationProps> & {
}
export interface orgContactProps extends entityProps {
    addresses: Collection<physicalOfficeAddress>;
    companyName: string;
    department: string;
    displayName: string;
    givenName: string;
    jobTitle: string;
    mail: string;
    mailNickname: string;
    onPremisesLastSyncDateTime: Date;
    onPremisesProvisioningErrors: Collection<onPremisesProvisioningError>;
    onPremisesSyncEnabled: boolean;
    phones: Collection<phone>;
    proxyAddresses: Collection<string> | null;
    serviceProvisioningErrors: Collection<serviceProvisioningError>;
    surname: string;
    directReports: Collection<directoryObject>;
    manager: directoryObject;
    memberOf: Collection<directoryObject>;
    transitiveMemberOf: Collection<directoryObject>;
}
export type orgContact = Entity<directoryObject, orgContactProps> & {
    retryServiceProvisioning(): void;
}
export interface permissionGrantConditionSetProps extends entityProps {
    clientApplicationIds: Collection<string>;
    clientApplicationPublisherIds: Collection<string>;
    clientApplicationsFromVerifiedPublisherOnly: boolean;
    clientApplicationTenantIds: Collection<string>;
    permissionClassification: string;
    permissions: Collection<string>;
    permissionType: permissionType;
    resourceApplication: string;
}
export type permissionGrantConditionSet = Entity<entity, permissionGrantConditionSetProps> & {
}
export interface rbacApplicationProps extends entityProps {
    resourceNamespaces: Collection<unifiedRbacResourceNamespace>;
    roleAssignments: Collection<unifiedRoleAssignment>;
    roleDefinitions: Collection<unifiedRoleDefinition>;
    roleAssignmentScheduleInstances: Collection<unifiedRoleAssignmentScheduleInstance>;
    roleAssignmentScheduleRequests: Collection<unifiedRoleAssignmentScheduleRequest>;
    roleAssignmentSchedules: Collection<unifiedRoleAssignmentSchedule>;
    roleEligibilityScheduleInstances: Collection<unifiedRoleEligibilityScheduleInstance>;
    roleEligibilityScheduleRequests: Collection<unifiedRoleEligibilityScheduleRequest>;
    roleEligibilitySchedules: Collection<unifiedRoleEligibilitySchedule>;
}
export type rbacApplication = Entity<entity, rbacApplicationProps> & {
}
export interface unifiedRbacResourceNamespaceProps extends entityProps {
    name: string | null;
    resourceActions: Collection<unifiedRbacResourceAction>;
}
export type unifiedRbacResourceNamespace = Entity<entity, unifiedRbacResourceNamespaceProps> & {
}
export interface unifiedRoleAssignmentProps extends entityProps {
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
export type unifiedRoleAssignment = Entity<entity, unifiedRoleAssignmentProps> & {
}
export interface unifiedRoleDefinitionProps extends entityProps {
    description: string;
    displayName: string;
    isBuiltIn: boolean;
    isEnabled: boolean;
    resourceScopes: Collection<string> | null;
    rolePermissions: Collection<unifiedRolePermission> | null;
    templateId: string;
    version: string;
    inheritsPermissionsFrom: Collection<unifiedRoleDefinition>;
}
export type unifiedRoleDefinition = Entity<entity, unifiedRoleDefinitionProps> & {
}
export interface unifiedRoleScheduleInstanceBaseProps extends entityProps {
    appScopeId: string;
    directoryScopeId: string;
    principalId: string;
    roleDefinitionId: string;
    appScope: appScope;
    directoryScope: directoryObject;
    principal: directoryObject;
    roleDefinition: unifiedRoleDefinition;
}
export type unifiedRoleScheduleInstanceBase = Entity<entity, unifiedRoleScheduleInstanceBaseProps> & {
}
export interface unifiedRoleAssignmentScheduleInstanceProps extends entityProps {
    assignmentType: string;
    endDateTime: Date;
    memberType: string;
    roleAssignmentOriginId: string;
    roleAssignmentScheduleId: string;
    startDateTime: Date;
    activatedUsing: unifiedRoleEligibilityScheduleInstance;
}
export type unifiedRoleAssignmentScheduleInstance = Entity<unifiedRoleScheduleInstanceBase, unifiedRoleAssignmentScheduleInstanceProps> & {
}
export interface requestProps extends entityProps {
    approvalId: string;
    completedDateTime: Date;
    createdBy: identitySet;
    createdDateTime: Date;
    customData: string;
    status: string | null;
}
export type request = Entity<entity, requestProps> & {
}
export interface unifiedRoleAssignmentScheduleRequestProps extends entityProps {
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
export type unifiedRoleAssignmentScheduleRequest = Entity<request, unifiedRoleAssignmentScheduleRequestProps> & {
    cancel(): void;
}
export interface unifiedRoleScheduleBaseProps extends entityProps {
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
export type unifiedRoleScheduleBase = Entity<entity, unifiedRoleScheduleBaseProps> & {
}
export interface unifiedRoleAssignmentScheduleProps extends entityProps {
    assignmentType: string;
    memberType: string;
    scheduleInfo: requestSchedule;
    activatedUsing: unifiedRoleEligibilitySchedule;
}
export type unifiedRoleAssignmentSchedule = Entity<unifiedRoleScheduleBase, unifiedRoleAssignmentScheduleProps> & {
}
export interface unifiedRoleEligibilityScheduleInstanceProps extends entityProps {
    endDateTime: Date;
    memberType: string;
    roleEligibilityScheduleId: string;
    startDateTime: Date;
}
export type unifiedRoleEligibilityScheduleInstance = Entity<unifiedRoleScheduleInstanceBase, unifiedRoleEligibilityScheduleInstanceProps> & {
}
export interface unifiedRoleEligibilityScheduleRequestProps extends entityProps {
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
export type unifiedRoleEligibilityScheduleRequest = Entity<request, unifiedRoleEligibilityScheduleRequestProps> & {
    cancel(): void;
}
export interface unifiedRoleEligibilityScheduleProps extends entityProps {
    memberType: string;
    scheduleInfo: requestSchedule;
}
export type unifiedRoleEligibilitySchedule = Entity<unifiedRoleScheduleBase, unifiedRoleEligibilityScheduleProps> & {
}
export interface roleManagementProps extends entityProps {
    directory: rbacApplication;
    entitlementManagement: rbacApplication;
}
export type roleManagement = Entity<{}, roleManagementProps> & {
}
export interface samlOrWsFedExternalDomainFederationProps extends entityProps {
    domains: Collection<externalDomainName>;
}
export type samlOrWsFedExternalDomainFederation = Entity<samlOrWsFedProvider, samlOrWsFedExternalDomainFederationProps> & {
}
export interface subscribedSkuProps extends entityProps {
    accountId: string;
    accountName: string;
    appliesTo: string;
    capabilityStatus: string;
    consumedUnits: number;
    prepaidUnits: licenseUnitsDetail;
    servicePlans: Collection<servicePlanInfo> | null;
    skuId: string;
    skuPartNumber: string;
    subscriptionIds: Collection<string>;
}
export type subscribedSku = Entity<entity, subscribedSkuProps> & {
}
export interface tenantRelationshipProps extends entityProps {
    delegatedAdminCustomers: Collection<delegatedAdminCustomer>;
    delegatedAdminRelationships: Collection<delegatedAdminRelationship>;
}
export type tenantRelationship = Entity<{}, tenantRelationshipProps> & {
    findTenantInformationByDomainName(domainName: string): tenantInformation;
    findTenantInformationByTenantId(tenantId: string): tenantInformation;
}
export interface delegatedAdminCustomerProps extends entityProps {
    displayName: string;
    tenantId: string | null;
    serviceManagementDetails: Collection<delegatedAdminServiceManagementDetail>;
}
export type delegatedAdminCustomer = Entity<entity, delegatedAdminCustomerProps> & {
}
export interface delegatedAdminRelationshipProps extends entityProps {
    accessDetails: delegatedAdminAccessDetails | null;
    activatedDateTime: Date;
    createdDateTime: Date;
    customer: delegatedAdminRelationshipCustomerParticipant;
    displayName: string | null;
    duration: number | null;
    endDateTime: Date;
    lastModifiedDateTime: Date;
    status: delegatedAdminRelationshipStatus;
    accessAssignments: Collection<delegatedAdminAccessAssignment>;
    operations: Collection<delegatedAdminRelationshipOperation>;
    requests: Collection<delegatedAdminRelationshipRequest>;
}
export type delegatedAdminRelationship = Entity<entity, delegatedAdminRelationshipProps> & {
}
export interface unifiedRbacResourceActionProps extends entityProps {
    actionVerb: string;
    authenticationContextId: string;
    description: string;
    isAuthenticationContextSettable: boolean;
    name: string | null;
    resourceScopeId: string;
}
export type unifiedRbacResourceAction = Entity<entity, unifiedRbacResourceActionProps> & {
}
export interface browserSharedCookieHistory {
    comment: string;
    displayName: string | null;
    hostOnly: boolean | null;
    hostOrDomain: string;
    lastModifiedBy: identitySet | null;
    path: string;
    publishedDateTime: Date | null;
    sourceEnvironment: browserSharedCookieSourceEnvironment;
}
export interface browserSiteHistory {
    allowRedirect: boolean;
    comment: string | null;
    compatibilityMode: browserSiteCompatibilityMode;
    lastModifiedBy: identitySet;
    mergeType: browserSiteMergeType;
    publishedDateTime: Date | null;
    targetEnvironment: browserSiteTargetEnvironment;
}
export interface adminProps extends entityProps {
    edge: edge;
    sharepoint: sharepoint;
    serviceAnnouncement: serviceAnnouncement;
}
export type admin = Entity<{}, adminProps> & {
}
export interface edgeProps extends entityProps {
    internetExplorerMode: internetExplorerMode;
}
export type edge = Entity<entity, edgeProps> & {
}
export interface sharepointProps extends entityProps {
    settings: sharepointSettings;
}
export type sharepoint = Entity<entity, sharepointProps> & {
}
export interface serviceAnnouncementProps extends entityProps {
    healthOverviews: Collection<serviceHealth>;
    issues: Collection<serviceHealthIssue>;
    messages: Collection<serviceUpdateMessage>;
}
export type serviceAnnouncement = Entity<entity, serviceAnnouncementProps> & {
}
export interface browserSharedCookieProps extends entityProps {
    comment: string | null;
    createdDateTime: Date | null;
    deletedDateTime: Date;
    displayName: string | null;
    history: Collection<browserSharedCookieHistory> | null;
    hostOnly: boolean | null;
    hostOrDomain: string | null;
    lastModifiedBy: identitySet;
    lastModifiedDateTime: Date | null;
    path: string | null;
    sourceEnvironment: browserSharedCookieSourceEnvironment | null;
    status: browserSharedCookieStatus | null;
}
export type browserSharedCookie = Entity<entity, browserSharedCookieProps> & {
}
export interface browserSiteProps extends entityProps {
    allowRedirect: boolean | null;
    comment: string | null;
    compatibilityMode: browserSiteCompatibilityMode | null;
    createdDateTime: Date | null;
    deletedDateTime: Date;
    history: Collection<browserSiteHistory> | null;
    lastModifiedBy: identitySet;
    lastModifiedDateTime: Date | null;
    mergeType: browserSiteMergeType | null;
    status: browserSiteStatus | null;
    targetEnvironment: browserSiteTargetEnvironment | null;
    webUrl: string | null;
}
export type browserSite = Entity<entity, browserSiteProps> & {
}
export interface browserSiteListProps extends entityProps {
    description: string | null;
    displayName: string | null;
    lastModifiedBy: identitySet;
    lastModifiedDateTime: Date | null;
    publishedBy: identitySet;
    publishedDateTime: Date;
    revision: string | null;
    status: browserSiteListStatus | null;
    sharedCookies: Collection<browserSharedCookie>;
    sites: Collection<browserSite>;
}
export type browserSiteList = Entity<entity, browserSiteListProps> & {
    publish(revision: string, sites: Collection<browserSite>, sharedCookies: Collection<browserSharedCookie>): browserSiteList;
}
export interface internetExplorerModeProps extends entityProps {
    siteLists: Collection<browserSiteList>;
}
export type internetExplorerMode = Entity<entity, internetExplorerModeProps> & {
}
export interface educationAssignmentRecipient {
}
export interface educationAssignmentClassRecipient extends educationAssignmentRecipient {
}
export interface educationAssignmentGrade {
    gradedBy: identitySet;
    gradedDateTime: Date;
}
export interface educationAssignmentGradeType {
}
export interface educationAssignmentGroupRecipient extends educationAssignmentRecipient {
}
export interface educationAssignmentIndividualRecipient extends educationAssignmentRecipient {
    recipients: Collection<string>;
}
export interface educationAssignmentPointsGrade extends educationAssignmentGrade {
    points: number;
}
export interface educationAssignmentPointsGradeType extends educationAssignmentGradeType {
    maxPoints: number;
}
export interface educationResource {
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
export interface educationFeedback {
    feedbackBy: identitySet;
    feedbackDateTime: Date;
    text: educationItemBody;
}
export interface educationItemBody {
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
export interface educationSubmissionRecipient {
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
export interface rubricCriterion {
    description: educationItemBody;
}
export interface rubricLevel {
    description: educationItemBody;
    displayName: string;
    grading: educationAssignmentGradeType;
    levelId: string;
}
export interface rubricQuality {
    criteria: Collection<rubricCriterion>;
    description: educationItemBody;
    displayName: string;
    qualityId: string;
    weight: number;
}
export interface rubricQualityFeedbackModel {
    feedback: educationItemBody;
    qualityId: string;
}
export interface rubricQualitySelectedColumnModel {
    columnId: string;
    qualityId: string;
}
export interface educationAssignmentProps extends entityProps {
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
    categories: Collection<educationCategory>;
    resources: Collection<educationAssignmentResource>;
    rubric: educationRubric;
    submissions: Collection<educationSubmission>;
}
export type educationAssignment = Entity<entity, educationAssignmentProps> & {
    publish(): educationAssignment;
    setUpFeedbackResourcesFolder(): educationAssignment;
    setUpResourcesFolder(): educationAssignment;
}
export interface educationCategoryProps extends entityProps {
    displayName: string;
}
export type educationCategory = Entity<entity, educationCategoryProps> & {
}
export interface educationAssignmentResourceProps extends entityProps {
    distributeForStudentWork: boolean;
    resource: educationResource;
}
export type educationAssignmentResource = Entity<entity, educationAssignmentResourceProps> & {
}
export interface educationRubricProps extends entityProps {
    createdBy: identitySet;
    createdDateTime: Date;
    description: educationItemBody;
    displayName: string;
    grading: educationAssignmentGradeType;
    lastModifiedBy: identitySet;
    lastModifiedDateTime: Date;
    levels: Collection<rubricLevel>;
    qualities: Collection<rubricQuality>;
}
export type educationRubric = Entity<entity, educationRubricProps> & {
}
export interface educationSubmissionProps extends entityProps {
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
    outcomes: Collection<educationOutcome>;
    resources: Collection<educationSubmissionResource>;
    submittedResources: Collection<educationSubmissionResource>;
}
export type educationSubmission = Entity<entity, educationSubmissionProps> & {
    setUpResourcesFolder(): educationSubmission;
    reassign(): educationSubmission;
    return(): educationSubmission;
    submit(): educationSubmission;
    unsubmit(): educationSubmission;
}
export interface educationAssignmentDefaultsProps extends entityProps {
    addedStudentAction: educationAddedStudentAction;
    addToCalendarAction: educationAddToCalendarOptions;
    dueTime: Date;
    notificationChannelUrl: string;
}
export type educationAssignmentDefaults = Entity<entity, educationAssignmentDefaultsProps> & {
}
export interface educationAssignmentSettingsProps extends entityProps {
    submissionAnimationDisabled: boolean;
}
export type educationAssignmentSettings = Entity<entity, educationAssignmentSettingsProps> & {
}
export interface educationClassProps extends entityProps {
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
    assignmentCategories: Collection<educationCategory>;
    assignmentDefaults: educationAssignmentDefaults;
    assignments: Collection<educationAssignment>;
    assignmentSettings: educationAssignmentSettings;
    group: group;
    members: Collection<educationUser>;
    schools: Collection<educationSchool>;
    teachers: Collection<educationUser>;
}
export type educationClass = Entity<entity, educationClassProps> & {
}
export interface educationCourse {
    courseNumber: string;
    description: string;
    displayName: string;
    externalId: string;
    subject: string;
}
export interface educationTerm {
    displayName: string;
    endDate: Date;
    externalId: string;
    startDate: Date;
}
export interface educationUserProps extends entityProps {
    relatedContacts: Collection<relatedContact>;
    accountEnabled: boolean;
    assignedLicenses: Collection<assignedLicense> | null;
    assignedPlans: Collection<assignedPlan> | null;
    businessPhones: Collection<string> | null;
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
    provisionedPlans: Collection<provisionedPlan> | null;
    refreshTokensValidFromDateTime: Date;
    residenceAddress: physicalAddress;
    showInAddressList: boolean;
    student: educationStudent;
    surname: string;
    teacher: educationTeacher;
    usageLocation: string;
    userPrincipalName: string;
    userType: string;
    assignments: Collection<educationAssignment>;
    rubrics: Collection<educationRubric>;
    classes: Collection<educationClass>;
    schools: Collection<educationSchool>;
    taughtClasses: Collection<educationClass>;
    user: user;
}
export type educationUser = Entity<entity, educationUserProps> & {
}
export interface educationOrganizationProps extends entityProps {
    description: string;
    displayName: string | null;
    externalSource: educationExternalSource;
    externalSourceDetail: string;
}
export type educationOrganization = Entity<entity, educationOrganizationProps> & {
}
export interface educationSchoolProps extends entityProps {
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
    classes: Collection<educationClass>;
    users: Collection<educationUser>;
}
export type educationSchool = Entity<educationOrganization, educationSchoolProps> & {
}
export interface educationOutcomeProps extends entityProps {
    lastModifiedBy: identitySet;
    lastModifiedDateTime: Date;
}
export type educationOutcome = Entity<entity, educationOutcomeProps> & {
}
export interface educationFeedbackOutcomeProps extends entityProps {
    feedback: educationFeedback;
    publishedFeedback: educationFeedback;
}
export type educationFeedbackOutcome = Entity<educationOutcome, educationFeedbackOutcomeProps> & {
}
export interface educationFeedbackResourceOutcomeProps extends entityProps {
    feedbackResource: educationResource;
    resourceStatus: educationFeedbackResourceOutcomeStatus;
}
export type educationFeedbackResourceOutcome = Entity<educationOutcome, educationFeedbackResourceOutcomeProps> & {
}
export interface educationPointsOutcomeProps extends entityProps {
    points: educationAssignmentPointsGrade;
    publishedPoints: educationAssignmentPointsGrade;
}
export type educationPointsOutcome = Entity<educationOutcome, educationPointsOutcomeProps> & {
}
export interface educationRootProps extends entityProps {
    classes: Collection<educationClass>;
    me: educationUser;
    schools: Collection<educationSchool>;
    users: Collection<educationUser>;
}
export type educationRoot = Entity<{}, educationRootProps> & {
}
export interface educationRubricOutcomeProps extends entityProps {
    publishedRubricQualityFeedback: Collection<rubricQualityFeedbackModel>;
    publishedRubricQualitySelectedLevels: Collection<rubricQualitySelectedColumnModel>;
    rubricQualityFeedback: Collection<rubricQualityFeedbackModel>;
    rubricQualitySelectedLevels: Collection<rubricQualitySelectedColumnModel>;
}
export type educationRubricOutcome = Entity<educationOutcome, educationRubricOutcomeProps> & {
}
export interface educationSubmissionResourceProps extends entityProps {
    assignmentResourceUrl: string;
    resource: educationResource;
}
export type educationSubmissionResource = Entity<entity, educationSubmissionResourceProps> & {
}
export interface relatedContact {
    accessConsent: boolean;
    displayName: string | null;
    emailAddress: string | null;
    mobilePhone: string;
    relationship: contactRelationship | null;
}
export interface educationOnPremisesInfo {
    immutableId: string;
}
export interface educationStudent {
    birthDate: Date;
    externalId: string;
    gender: educationGender;
    grade: string;
    graduationYear: string;
    studentNumber: string;
}
export interface educationTeacher {
    externalId: string;
    teacherNumber: string;
}
export interface Json {
}
export interface workbookFilterCriteria {
    color: string;
    criterion1: string;
    criterion2: string;
    dynamicCriteria: string | null;
    filterOn: string | null;
    icon: workbookIcon;
    operator: string | null;
    values: Json;
}
export interface workbookIcon {
    index: number | null;
    set: string | null;
}
export interface workbookFilterDatetime {
    date: string;
    specificity: string | null;
}
export interface workbookOperationError {
    code: string;
    innerError: workbookOperationError;
    message: string;
}
export interface workbookRangeReference {
    address: string;
}
export interface workbookSessionInfo {
    id: string;
    persistChanges: boolean;
}
export interface workbookSortField {
    ascending: boolean | null;
    color: string;
    dataOption: string | null;
    icon: workbookIcon;
    key: number | null;
    sortOn: string | null;
}
export interface workbookWorksheetProtectionOptions {
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
export interface quota {
    deleted: number;
    remaining: number;
    state: string;
    storagePlanInformation: storagePlanInformation;
    total: number;
    used: number;
}
export interface systemFacet {
}
export interface driveItemProps extends entityProps {
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
    children: Collection<driveItem>;
    listItem: listItem;
    permissions: Collection<permission>;
    subscriptions: Collection<subscription>;
    thumbnails: Collection<thumbnailSet>;
    versions: Collection<driveItemVersion>;
}
export type driveItem = Entity<baseItem, driveItemProps> & {
    restore(parentReference: itemReference, name: string): driveItem;
    delta(): Collection<driveItem>;
    delta(token: string): Collection<driveItem>;
    copy(name: string, parentReference: itemReference): driveItem;
    createUploadSession(item: driveItemUploadableProperties, deferCommit: boolean): uploadSession;
    assignSensitivityLabel(): void;
    checkin(): void;
    checkout(): void;
    createLink(type: string, scope: string, expirationDateTime: Date, password: string, message: string, retainInheritedPermissions: boolean): permission;
    extractSensitivityLabels(): extractSensitivityLabelsResult;
    follow(): driveItem;
    invite(requireSignIn: boolean, roles: Collection<string>, sendInvitation: boolean, message: string, recipients: Collection<driveRecipient>, retainInheritedPermissions: boolean, expirationDateTime: string, password: string): Collection<permission>;
    permanentDelete(): void;
    preview(page: string, zoom: number): itemPreviewInfo;
    unfollow(): void;
    validatePermission(): void;
    getActivitiesByInterval(): Collection<itemActivityStat>;
    getActivitiesByInterval(startDateTime: string, endDateTime: string, interval: string): Collection<itemActivityStat>;
    search(q: string): Collection<driveItem>;
}
export interface workbookProps extends entityProps {
    application: workbookApplication;
    comments: Collection<workbookComment>;
    functions: workbookFunctions;
    names: Collection<workbookNamedItem>;
    operations: Collection<workbookOperation>;
    tables: Collection<workbookTable>;
    worksheets: Collection<workbookWorksheet>;
}
export type workbook = Entity<entity, workbookProps> & {
    sessionInfoResource(key: string): workbookSessionInfo;
    tableRowOperationResult(key: string): workbookTableRow;
}
export interface audio {
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
export interface bundle {
    album: album;
    childCount: number;
}
export interface deleted {
    state: string;
}
export interface file {
    hashes: hashes;
    mimeType: string;
    processingMetadata: boolean;
}
export interface fileSystemInfo {
    createdDateTime: Date;
    lastAccessedDateTime: Date;
    lastModifiedDateTime: Date;
}
export interface folder {
    childCount: number;
    view: folderView;
}
export interface image {
    height: number;
    width: number;
}
export interface malware {
    description: string;
}
export interface packageType {
    type: string;
}
export interface pendingOperations {
    pendingContentUpdate: pendingContentUpdate;
}
export interface photo {
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
export interface publicationFacet {
    checkedOutBy: identitySet;
    level: string;
    versionId: string;
}
export interface remoteItem {
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
export interface searchResult {
    onClickTelemetryUrl: string;
}
export interface shared {
    owner: identitySet;
    scope: string;
    sharedBy: identitySet;
    sharedDateTime: Date;
}
export interface specialFolder {
    name: string;
}
export interface video {
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
export interface listItemProps extends entityProps {
    contentType: contentTypeInfo;
    sharepointIds: sharepointIds;
    analytics: itemAnalytics;
    documentSetVersions: Collection<documentSetVersion>;
    driveItem: driveItem;
    fields: fieldValueSet;
    versions: Collection<listItemVersion>;
}
export type listItem = Entity<baseItem, listItemProps> & {
    getActivitiesByInterval(): Collection<itemActivityStat>;
    getActivitiesByInterval(startDateTime: string, endDateTime: string, interval: string): Collection<itemActivityStat>;
}
export interface subscriptionProps extends entityProps {
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
export type subscription = Entity<entity, subscriptionProps> & {
    reauthorize(): void;
}
export interface thumbnailSetProps extends entityProps {
    large: thumbnail;
    medium: thumbnail;
    small: thumbnail;
    source: thumbnail;
}
export type thumbnailSet = Entity<entity, thumbnailSetProps> & {
}
export interface baseItemVersionProps extends entityProps {
    lastModifiedBy: identitySet;
    lastModifiedDateTime: Date;
    publication: publicationFacet;
}
export type baseItemVersion = Entity<entity, baseItemVersionProps> & {
}
export interface driveItemVersionProps extends entityProps {
    content: Buffer;
    size: number;
}
export type driveItemVersion = Entity<baseItemVersion, driveItemVersionProps> & {
    restoreVersion(): void;
}
export interface listInfo {
    contentTypesEnabled: boolean;
    hidden: boolean;
    template: string;
}
export interface workbookApplicationProps extends entityProps {
    calculationMode: string | null;
}
export type workbookApplication = Entity<entity, workbookApplicationProps> & {
    calculate(): void;
}
export interface workbookCommentProps extends entityProps {
    content: string;
    contentType: string | null;
    replies: Collection<workbookCommentReply>;
}
export type workbookComment = Entity<entity, workbookCommentProps> & {
}
export interface workbookFunctionsProps { }
export type workbookFunctions = Entity<entity, workbookFunctionsProps> & {
    delta(number1: Json, number2: Json): workbookFunctionResult;
    abs(number: Json): workbookFunctionResult;
    accrInt(issue: Json, firstInterest: Json, settlement: Json, rate: Json, par: Json, frequency: Json, basis: Json, calcMethod: Json): workbookFunctionResult;
    accrIntM(issue: Json, settlement: Json, rate: Json, par: Json, basis: Json): workbookFunctionResult;
    acos(number: Json): workbookFunctionResult;
    acosh(number: Json): workbookFunctionResult;
    acot(number: Json): workbookFunctionResult;
    acoth(number: Json): workbookFunctionResult;
    amorDegrc(cost: Json, datePurchased: Json, firstPeriod: Json, salvage: Json, period: Json, rate: Json, basis: Json): workbookFunctionResult;
    amorLinc(cost: Json, datePurchased: Json, firstPeriod: Json, salvage: Json, period: Json, rate: Json, basis: Json): workbookFunctionResult;
    and(values: Json): workbookFunctionResult;
    arabic(text: Json): workbookFunctionResult;
    areas(reference: Json): workbookFunctionResult;
    asc(text: Json): workbookFunctionResult;
    asin(number: Json): workbookFunctionResult;
    asinh(number: Json): workbookFunctionResult;
    atan(number: Json): workbookFunctionResult;
    atan2(xNum: Json, yNum: Json): workbookFunctionResult;
    atanh(number: Json): workbookFunctionResult;
    aveDev(values: Json): workbookFunctionResult;
    average(values: Json): workbookFunctionResult;
    averageA(values: Json): workbookFunctionResult;
    averageIf(range: Json, criteria: Json, averageRange: Json): workbookFunctionResult;
    averageIfs(averageRange: Json, values: Json): workbookFunctionResult;
    bahtText(number: Json): workbookFunctionResult;
    base(number: Json, radix: Json, minLength: Json): workbookFunctionResult;
    besselI(x: Json, n: Json): workbookFunctionResult;
    besselJ(x: Json, n: Json): workbookFunctionResult;
    besselK(x: Json, n: Json): workbookFunctionResult;
    besselY(x: Json, n: Json): workbookFunctionResult;
    beta_Dist(x: Json, alpha: Json, beta: Json, cumulative: Json, A: Json, B: Json): workbookFunctionResult;
    beta_Inv(probability: Json, alpha: Json, beta: Json, A: Json, B: Json): workbookFunctionResult;
    bin2Dec(number: Json): workbookFunctionResult;
    bin2Hex(number: Json, places: Json): workbookFunctionResult;
    bin2Oct(number: Json, places: Json): workbookFunctionResult;
    binom_Dist(numberS: Json, trials: Json, probabilityS: Json, cumulative: Json): workbookFunctionResult;
    binom_Dist_Range(trials: Json, probabilityS: Json, numberS: Json, numberS2: Json): workbookFunctionResult;
    binom_Inv(trials: Json, probabilityS: Json, alpha: Json): workbookFunctionResult;
    bitand(number1: Json, number2: Json): workbookFunctionResult;
    bitlshift(number: Json, shiftAmount: Json): workbookFunctionResult;
    bitor(number1: Json, number2: Json): workbookFunctionResult;
    bitrshift(number: Json, shiftAmount: Json): workbookFunctionResult;
    bitxor(number1: Json, number2: Json): workbookFunctionResult;
    ceiling_Math(number: Json, significance: Json, mode: Json): workbookFunctionResult;
    ceiling_Precise(number: Json, significance: Json): workbookFunctionResult;
    char(number: Json): workbookFunctionResult;
    chiSq_Dist(x: Json, degFreedom: Json, cumulative: Json): workbookFunctionResult;
    chiSq_Dist_RT(x: Json, degFreedom: Json): workbookFunctionResult;
    chiSq_Inv(probability: Json, degFreedom: Json): workbookFunctionResult;
    chiSq_Inv_RT(probability: Json, degFreedom: Json): workbookFunctionResult;
    choose(indexNum: Json, values: Json): workbookFunctionResult;
    clean(text: Json): workbookFunctionResult;
    code(text: Json): workbookFunctionResult;
    columns(array: Json): workbookFunctionResult;
    combin(number: Json, numberChosen: Json): workbookFunctionResult;
    combina(number: Json, numberChosen: Json): workbookFunctionResult;
    complex(realNum: Json, iNum: Json, suffix: Json): workbookFunctionResult;
    concatenate(values: Json): workbookFunctionResult;
    confidence_Norm(alpha: Json, standardDev: Json, size: Json): workbookFunctionResult;
    confidence_T(alpha: Json, standardDev: Json, size: Json): workbookFunctionResult;
    convert(number: Json, fromUnit: Json, toUnit: Json): workbookFunctionResult;
    cos(number: Json): workbookFunctionResult;
    cosh(number: Json): workbookFunctionResult;
    cot(number: Json): workbookFunctionResult;
    coth(number: Json): workbookFunctionResult;
    count(values: Json): workbookFunctionResult;
    countA(values: Json): workbookFunctionResult;
    countBlank(range: Json): workbookFunctionResult;
    countIf(range: Json, criteria: Json): workbookFunctionResult;
    countIfs(values: Json): workbookFunctionResult;
    coupDayBs(settlement: Json, maturity: Json, frequency: Json, basis: Json): workbookFunctionResult;
    coupDays(settlement: Json, maturity: Json, frequency: Json, basis: Json): workbookFunctionResult;
    coupDaysNc(settlement: Json, maturity: Json, frequency: Json, basis: Json): workbookFunctionResult;
    coupNcd(settlement: Json, maturity: Json, frequency: Json, basis: Json): workbookFunctionResult;
    coupNum(settlement: Json, maturity: Json, frequency: Json, basis: Json): workbookFunctionResult;
    coupPcd(settlement: Json, maturity: Json, frequency: Json, basis: Json): workbookFunctionResult;
    csc(number: Json): workbookFunctionResult;
    csch(number: Json): workbookFunctionResult;
    cumIPmt(rate: Json, nper: Json, pv: Json, startPeriod: Json, endPeriod: Json, type: Json): workbookFunctionResult;
    cumPrinc(rate: Json, nper: Json, pv: Json, startPeriod: Json, endPeriod: Json, type: Json): workbookFunctionResult;
    date(year: Json, month: Json, day: Json): workbookFunctionResult;
    datevalue(dateText: Json): workbookFunctionResult;
    daverage(database: Json, field: Json, criteria: Json): workbookFunctionResult;
    day(serialNumber: Json): workbookFunctionResult;
    days(endDate: Json, startDate: Json): workbookFunctionResult;
    days360(startDate: Json, endDate: Json, method: Json): workbookFunctionResult;
    db(cost: Json, salvage: Json, life: Json, period: Json, month: Json): workbookFunctionResult;
    dbcs(text: Json): workbookFunctionResult;
    dcount(database: Json, field: Json, criteria: Json): workbookFunctionResult;
    dcountA(database: Json, field: Json, criteria: Json): workbookFunctionResult;
    ddb(cost: Json, salvage: Json, life: Json, period: Json, factor: Json): workbookFunctionResult;
    dec2Bin(number: Json, places: Json): workbookFunctionResult;
    dec2Hex(number: Json, places: Json): workbookFunctionResult;
    dec2Oct(number: Json, places: Json): workbookFunctionResult;
    decimal(number: Json, radix: Json): workbookFunctionResult;
    degrees(angle: Json): workbookFunctionResult;
    devSq(values: Json): workbookFunctionResult;
    dget(database: Json, field: Json, criteria: Json): workbookFunctionResult;
    disc(settlement: Json, maturity: Json, pr: Json, redemption: Json, basis: Json): workbookFunctionResult;
    dmax(database: Json, field: Json, criteria: Json): workbookFunctionResult;
    dmin(database: Json, field: Json, criteria: Json): workbookFunctionResult;
    dollar(number: Json, decimals: Json): workbookFunctionResult;
    dollarDe(fractionalDollar: Json, fraction: Json): workbookFunctionResult;
    dollarFr(decimalDollar: Json, fraction: Json): workbookFunctionResult;
    dproduct(database: Json, field: Json, criteria: Json): workbookFunctionResult;
    dstDev(database: Json, field: Json, criteria: Json): workbookFunctionResult;
    dstDevP(database: Json, field: Json, criteria: Json): workbookFunctionResult;
    dsum(database: Json, field: Json, criteria: Json): workbookFunctionResult;
    duration(settlement: Json, maturity: Json, coupon: Json, yld: Json, frequency: Json, basis: Json): workbookFunctionResult;
    dvar(database: Json, field: Json, criteria: Json): workbookFunctionResult;
    dvarP(database: Json, field: Json, criteria: Json): workbookFunctionResult;
    ecma_Ceiling(number: Json, significance: Json): workbookFunctionResult;
    edate(startDate: Json, months: Json): workbookFunctionResult;
    effect(nominalRate: Json, npery: Json): workbookFunctionResult;
    eoMonth(startDate: Json, months: Json): workbookFunctionResult;
    erf(lowerLimit: Json, upperLimit: Json): workbookFunctionResult;
    erfC(x: Json): workbookFunctionResult;
    erfC_Precise(X: Json): workbookFunctionResult;
    erf_Precise(X: Json): workbookFunctionResult;
    error_Type(errorVal: Json): workbookFunctionResult;
    even(number: Json): workbookFunctionResult;
    exact(text1: Json, text2: Json): workbookFunctionResult;
    exp(number: Json): workbookFunctionResult;
    expon_Dist(x: Json, lambda: Json, cumulative: Json): workbookFunctionResult;
    fact(number: Json): workbookFunctionResult;
    factDouble(number: Json): workbookFunctionResult;
    false(): workbookFunctionResult;
    find(findText: Json, withinText: Json, startNum: Json): workbookFunctionResult;
    findB(findText: Json, withinText: Json, startNum: Json): workbookFunctionResult;
    fisher(x: Json): workbookFunctionResult;
    fisherInv(y: Json): workbookFunctionResult;
    fixed(number: Json, decimals: Json, noCommas: Json): workbookFunctionResult;
    floor_Math(number: Json, significance: Json, mode: Json): workbookFunctionResult;
    floor_Precise(number: Json, significance: Json): workbookFunctionResult;
    fv(rate: Json, nper: Json, pmt: Json, pv: Json, type: Json): workbookFunctionResult;
    fvschedule(principal: Json, schedule: Json): workbookFunctionResult;
    f_Dist(x: Json, degFreedom1: Json, degFreedom2: Json, cumulative: Json): workbookFunctionResult;
    f_Dist_RT(x: Json, degFreedom1: Json, degFreedom2: Json): workbookFunctionResult;
    f_Inv(probability: Json, degFreedom1: Json, degFreedom2: Json): workbookFunctionResult;
    f_Inv_RT(probability: Json, degFreedom1: Json, degFreedom2: Json): workbookFunctionResult;
    gamma(x: Json): workbookFunctionResult;
    gammaLn(x: Json): workbookFunctionResult;
    gammaLn_Precise(x: Json): workbookFunctionResult;
    gamma_Dist(x: Json, alpha: Json, beta: Json, cumulative: Json): workbookFunctionResult;
    gamma_Inv(probability: Json, alpha: Json, beta: Json): workbookFunctionResult;
    gauss(x: Json): workbookFunctionResult;
    gcd(values: Json): workbookFunctionResult;
    geoMean(values: Json): workbookFunctionResult;
    geStep(number: Json, step: Json): workbookFunctionResult;
    harMean(values: Json): workbookFunctionResult;
    hex2Bin(number: Json, places: Json): workbookFunctionResult;
    hex2Dec(number: Json): workbookFunctionResult;
    hex2Oct(number: Json, places: Json): workbookFunctionResult;
    hlookup(lookupValue: Json, tableArray: Json, rowIndexNum: Json, rangeLookup: Json): workbookFunctionResult;
    hour(serialNumber: Json): workbookFunctionResult;
    hyperlink(linkLocation: Json, friendlyName: Json): workbookFunctionResult;
    hypGeom_Dist(sampleS: Json, numberSample: Json, populationS: Json, numberPop: Json, cumulative: Json): workbookFunctionResult;
    if(logicalTest: Json, valueIfTrue: Json, valueIfFalse: Json): workbookFunctionResult;
    imAbs(inumber: Json): workbookFunctionResult;
    imaginary(inumber: Json): workbookFunctionResult;
    imArgument(inumber: Json): workbookFunctionResult;
    imConjugate(inumber: Json): workbookFunctionResult;
    imCos(inumber: Json): workbookFunctionResult;
    imCosh(inumber: Json): workbookFunctionResult;
    imCot(inumber: Json): workbookFunctionResult;
    imCsc(inumber: Json): workbookFunctionResult;
    imCsch(inumber: Json): workbookFunctionResult;
    imDiv(inumber1: Json, inumber2: Json): workbookFunctionResult;
    imExp(inumber: Json): workbookFunctionResult;
    imLn(inumber: Json): workbookFunctionResult;
    imLog10(inumber: Json): workbookFunctionResult;
    imLog2(inumber: Json): workbookFunctionResult;
    imPower(inumber: Json, number: Json): workbookFunctionResult;
    imProduct(values: Json): workbookFunctionResult;
    imReal(inumber: Json): workbookFunctionResult;
    imSec(inumber: Json): workbookFunctionResult;
    imSech(inumber: Json): workbookFunctionResult;
    imSin(inumber: Json): workbookFunctionResult;
    imSinh(inumber: Json): workbookFunctionResult;
    imSqrt(inumber: Json): workbookFunctionResult;
    imSub(inumber1: Json, inumber2: Json): workbookFunctionResult;
    imSum(values: Json): workbookFunctionResult;
    imTan(inumber: Json): workbookFunctionResult;
    int(number: Json): workbookFunctionResult;
    intRate(settlement: Json, maturity: Json, investment: Json, redemption: Json, basis: Json): workbookFunctionResult;
    ipmt(rate: Json, per: Json, nper: Json, pv: Json, fv: Json, type: Json): workbookFunctionResult;
    irr(values: Json, guess: Json): workbookFunctionResult;
    isErr(value: Json): workbookFunctionResult;
    isError(value: Json): workbookFunctionResult;
    isEven(number: Json): workbookFunctionResult;
    isFormula(reference: Json): workbookFunctionResult;
    isLogical(value: Json): workbookFunctionResult;
    isNA(value: Json): workbookFunctionResult;
    isNonText(value: Json): workbookFunctionResult;
    isNumber(value: Json): workbookFunctionResult;
    isOdd(number: Json): workbookFunctionResult;
    isoWeekNum(date: Json): workbookFunctionResult;
    iso_Ceiling(number: Json, significance: Json): workbookFunctionResult;
    ispmt(rate: Json, per: Json, nper: Json, pv: Json): workbookFunctionResult;
    isref(value: Json): workbookFunctionResult;
    isText(value: Json): workbookFunctionResult;
    kurt(values: Json): workbookFunctionResult;
    large(array: Json, k: Json): workbookFunctionResult;
    lcm(values: Json): workbookFunctionResult;
    left(text: Json, numChars: Json): workbookFunctionResult;
    leftb(text: Json, numBytes: Json): workbookFunctionResult;
    len(text: Json): workbookFunctionResult;
    lenb(text: Json): workbookFunctionResult;
    ln(number: Json): workbookFunctionResult;
    log(number: Json, base: Json): workbookFunctionResult;
    log10(number: Json): workbookFunctionResult;
    logNorm_Dist(x: Json, mean: Json, standardDev: Json, cumulative: Json): workbookFunctionResult;
    logNorm_Inv(probability: Json, mean: Json, standardDev: Json): workbookFunctionResult;
    lookup(lookupValue: Json, lookupVector: Json, resultVector: Json): workbookFunctionResult;
    lower(text: Json): workbookFunctionResult;
    match(lookupValue: Json, lookupArray: Json, matchType: Json): workbookFunctionResult;
    max(values: Json): workbookFunctionResult;
    maxA(values: Json): workbookFunctionResult;
    mduration(settlement: Json, maturity: Json, coupon: Json, yld: Json, frequency: Json, basis: Json): workbookFunctionResult;
    median(values: Json): workbookFunctionResult;
    mid(text: Json, startNum: Json, numChars: Json): workbookFunctionResult;
    midb(text: Json, startNum: Json, numBytes: Json): workbookFunctionResult;
    min(values: Json): workbookFunctionResult;
    minA(values: Json): workbookFunctionResult;
    minute(serialNumber: Json): workbookFunctionResult;
    mirr(values: Json, financeRate: Json, reinvestRate: Json): workbookFunctionResult;
    mod(number: Json, divisor: Json): workbookFunctionResult;
    month(serialNumber: Json): workbookFunctionResult;
    mround(number: Json, multiple: Json): workbookFunctionResult;
    multiNomial(values: Json): workbookFunctionResult;
    n(value: Json): workbookFunctionResult;
    na(): workbookFunctionResult;
    negBinom_Dist(numberF: Json, numberS: Json, probabilityS: Json, cumulative: Json): workbookFunctionResult;
    networkDays(startDate: Json, endDate: Json, holidays: Json): workbookFunctionResult;
    networkDays_Intl(startDate: Json, endDate: Json, weekend: Json, holidays: Json): workbookFunctionResult;
    nominal(effectRate: Json, npery: Json): workbookFunctionResult;
    norm_Dist(x: Json, mean: Json, standardDev: Json, cumulative: Json): workbookFunctionResult;
    norm_Inv(probability: Json, mean: Json, standardDev: Json): workbookFunctionResult;
    norm_S_Dist(z: Json, cumulative: Json): workbookFunctionResult;
    norm_S_Inv(probability: Json): workbookFunctionResult;
    not(logical: Json): workbookFunctionResult;
    now(): workbookFunctionResult;
    nper(rate: Json, pmt: Json, pv: Json, fv: Json, type: Json): workbookFunctionResult;
    npv(rate: Json, values: Json): workbookFunctionResult;
    numberValue(text: Json, decimalSeparator: Json, groupSeparator: Json): workbookFunctionResult;
    oct2Bin(number: Json, places: Json): workbookFunctionResult;
    oct2Dec(number: Json): workbookFunctionResult;
    oct2Hex(number: Json, places: Json): workbookFunctionResult;
    odd(number: Json): workbookFunctionResult;
    oddFPrice(settlement: Json, maturity: Json, issue: Json, firstCoupon: Json, rate: Json, yld: Json, redemption: Json, frequency: Json, basis: Json): workbookFunctionResult;
    oddFYield(settlement: Json, maturity: Json, issue: Json, firstCoupon: Json, rate: Json, pr: Json, redemption: Json, frequency: Json, basis: Json): workbookFunctionResult;
    oddLPrice(settlement: Json, maturity: Json, lastInterest: Json, rate: Json, yld: Json, redemption: Json, frequency: Json, basis: Json): workbookFunctionResult;
    oddLYield(settlement: Json, maturity: Json, lastInterest: Json, rate: Json, pr: Json, redemption: Json, frequency: Json, basis: Json): workbookFunctionResult;
    or(values: Json): workbookFunctionResult;
    pduration(rate: Json, pv: Json, fv: Json): workbookFunctionResult;
    percentile_Exc(array: Json, k: Json): workbookFunctionResult;
    percentile_Inc(array: Json, k: Json): workbookFunctionResult;
    percentRank_Exc(array: Json, x: Json, significance: Json): workbookFunctionResult;
    percentRank_Inc(array: Json, x: Json, significance: Json): workbookFunctionResult;
    permut(number: Json, numberChosen: Json): workbookFunctionResult;
    permutationa(number: Json, numberChosen: Json): workbookFunctionResult;
    phi(x: Json): workbookFunctionResult;
    pi(): workbookFunctionResult;
    pmt(rate: Json, nper: Json, pv: Json, fv: Json, type: Json): workbookFunctionResult;
    poisson_Dist(x: Json, mean: Json, cumulative: Json): workbookFunctionResult;
    power(number: Json, power: Json): workbookFunctionResult;
    ppmt(rate: Json, per: Json, nper: Json, pv: Json, fv: Json, type: Json): workbookFunctionResult;
    price(settlement: Json, maturity: Json, rate: Json, yld: Json, redemption: Json, frequency: Json, basis: Json): workbookFunctionResult;
    priceDisc(settlement: Json, maturity: Json, discount: Json, redemption: Json, basis: Json): workbookFunctionResult;
    priceMat(settlement: Json, maturity: Json, issue: Json, rate: Json, yld: Json, basis: Json): workbookFunctionResult;
    product(values: Json): workbookFunctionResult;
    proper(text: Json): workbookFunctionResult;
    pv(rate: Json, nper: Json, pmt: Json, fv: Json, type: Json): workbookFunctionResult;
    quartile_Exc(array: Json, quart: Json): workbookFunctionResult;
    quartile_Inc(array: Json, quart: Json): workbookFunctionResult;
    quotient(numerator: Json, denominator: Json): workbookFunctionResult;
    radians(angle: Json): workbookFunctionResult;
    rand(): workbookFunctionResult;
    randBetween(bottom: Json, top: Json): workbookFunctionResult;
    rank_Avg(number: Json, ref: Json, order: Json): workbookFunctionResult;
    rank_Eq(number: Json, ref: Json, order: Json): workbookFunctionResult;
    rate(nper: Json, pmt: Json, pv: Json, fv: Json, type: Json, guess: Json): workbookFunctionResult;
    received(settlement: Json, maturity: Json, investment: Json, discount: Json, basis: Json): workbookFunctionResult;
    replace(oldText: Json, startNum: Json, numChars: Json, newText: Json): workbookFunctionResult;
    replaceB(oldText: Json, startNum: Json, numBytes: Json, newText: Json): workbookFunctionResult;
    rept(text: Json, numberTimes: Json): workbookFunctionResult;
    right(text: Json, numChars: Json): workbookFunctionResult;
    rightb(text: Json, numBytes: Json): workbookFunctionResult;
    roman(number: Json, form: Json): workbookFunctionResult;
    round(number: Json, numDigits: Json): workbookFunctionResult;
    roundDown(number: Json, numDigits: Json): workbookFunctionResult;
    roundUp(number: Json, numDigits: Json): workbookFunctionResult;
    rows(array: Json): workbookFunctionResult;
    rri(nper: Json, pv: Json, fv: Json): workbookFunctionResult;
    sec(number: Json): workbookFunctionResult;
    sech(number: Json): workbookFunctionResult;
    second(serialNumber: Json): workbookFunctionResult;
    seriesSum(x: Json, n: Json, m: Json, coefficients: Json): workbookFunctionResult;
    sheet(value: Json): workbookFunctionResult;
    sheets(reference: Json): workbookFunctionResult;
    sign(number: Json): workbookFunctionResult;
    sin(number: Json): workbookFunctionResult;
    sinh(number: Json): workbookFunctionResult;
    skew(values: Json): workbookFunctionResult;
    skew_p(values: Json): workbookFunctionResult;
    sln(cost: Json, salvage: Json, life: Json): workbookFunctionResult;
    small(array: Json, k: Json): workbookFunctionResult;
    sqrt(number: Json): workbookFunctionResult;
    sqrtPi(number: Json): workbookFunctionResult;
    standardize(x: Json, mean: Json, standardDev: Json): workbookFunctionResult;
    stDevA(values: Json): workbookFunctionResult;
    stDevPA(values: Json): workbookFunctionResult;
    stDev_P(values: Json): workbookFunctionResult;
    stDev_S(values: Json): workbookFunctionResult;
    substitute(text: Json, oldText: Json, newText: Json, instanceNum: Json): workbookFunctionResult;
    subtotal(functionNum: Json, values: Json): workbookFunctionResult;
    sum(values: Json): workbookFunctionResult;
    sumIf(range: Json, criteria: Json, sumRange: Json): workbookFunctionResult;
    sumIfs(sumRange: Json, values: Json): workbookFunctionResult;
    sumSq(values: Json): workbookFunctionResult;
    syd(cost: Json, salvage: Json, life: Json, per: Json): workbookFunctionResult;
    t(value: Json): workbookFunctionResult;
    tan(number: Json): workbookFunctionResult;
    tanh(number: Json): workbookFunctionResult;
    tbillEq(settlement: Json, maturity: Json, discount: Json): workbookFunctionResult;
    tbillPrice(settlement: Json, maturity: Json, discount: Json): workbookFunctionResult;
    tbillYield(settlement: Json, maturity: Json, pr: Json): workbookFunctionResult;
    text(value: Json, formatText: Json): workbookFunctionResult;
    time(hour: Json, minute: Json, second: Json): workbookFunctionResult;
    timevalue(timeText: Json): workbookFunctionResult;
    today(): workbookFunctionResult;
    trim(text: Json): workbookFunctionResult;
    trimMean(array: Json, percent: Json): workbookFunctionResult;
    true(): workbookFunctionResult;
    trunc(number: Json, numDigits: Json): workbookFunctionResult;
    type(value: Json): workbookFunctionResult;
    t_Dist(x: Json, degFreedom: Json, cumulative: Json): workbookFunctionResult;
    t_Dist_2T(x: Json, degFreedom: Json): workbookFunctionResult;
    t_Dist_RT(x: Json, degFreedom: Json): workbookFunctionResult;
    t_Inv(probability: Json, degFreedom: Json): workbookFunctionResult;
    t_Inv_2T(probability: Json, degFreedom: Json): workbookFunctionResult;
    unichar(number: Json): workbookFunctionResult;
    unicode(text: Json): workbookFunctionResult;
    upper(text: Json): workbookFunctionResult;
    usdollar(number: Json, decimals: Json): workbookFunctionResult;
    value(text: Json): workbookFunctionResult;
    varA(values: Json): workbookFunctionResult;
    varPA(values: Json): workbookFunctionResult;
    var_P(values: Json): workbookFunctionResult;
    var_S(values: Json): workbookFunctionResult;
    vdb(cost: Json, salvage: Json, life: Json, startPeriod: Json, endPeriod: Json, factor: Json, noSwitch: Json): workbookFunctionResult;
    vlookup(lookupValue: Json, tableArray: Json, colIndexNum: Json, rangeLookup: Json): workbookFunctionResult;
    weekday(serialNumber: Json, returnType: Json): workbookFunctionResult;
    weekNum(serialNumber: Json, returnType: Json): workbookFunctionResult;
    weibull_Dist(x: Json, alpha: Json, beta: Json, cumulative: Json): workbookFunctionResult;
    workDay(startDate: Json, days: Json, holidays: Json): workbookFunctionResult;
    workDay_Intl(startDate: Json, days: Json, weekend: Json, holidays: Json): workbookFunctionResult;
    xirr(values: Json, dates: Json, guess: Json): workbookFunctionResult;
    xnpv(rate: Json, values: Json, dates: Json): workbookFunctionResult;
    xor(values: Json): workbookFunctionResult;
    year(serialNumber: Json): workbookFunctionResult;
    yearFrac(startDate: Json, endDate: Json, basis: Json): workbookFunctionResult;
    yield(settlement: Json, maturity: Json, rate: Json, pr: Json, redemption: Json, frequency: Json, basis: Json): workbookFunctionResult;
    yieldDisc(settlement: Json, maturity: Json, pr: Json, redemption: Json, basis: Json): workbookFunctionResult;
    yieldMat(settlement: Json, maturity: Json, issue: Json, rate: Json, pr: Json, basis: Json): workbookFunctionResult;
    z_Test(array: Json, x: Json, sigma: Json): workbookFunctionResult;
}
export interface workbookNamedItemProps extends entityProps {
    comment: string;
    name: string;
    scope: string | null;
    type: string;
    value: Json;
    visible: boolean | null;
    worksheet: workbookWorksheet;
}
export type workbookNamedItem = Entity<entity, workbookNamedItemProps> & {
    range(): workbookRange;
}
export interface workbookOperationProps extends entityProps {
    error: workbookOperationError;
    resourceLocation: string;
    status: workbookOperationStatus | null;
}
export type workbookOperation = Entity<entity, workbookOperationProps> & {
}
export interface workbookTableProps extends entityProps {
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
    columns: Collection<workbookTableColumn>;
    rows: Collection<workbookTableRow>;
    sort: workbookTableSort;
    worksheet: workbookWorksheet;
}
export type workbookTable = Entity<entity, workbookTableProps> & {
    clearFilters(): void;
    convertToRange(): workbookRange;
    reapplyFilters(): void;
    dataBodyRange(): workbookRange;
    headerRowRange(): workbookRange;
    range(): workbookRange;
    totalRowRange(): workbookRange;
}
export interface workbookWorksheetProps extends entityProps {
    name: string;
    position: number | null;
    visibility: string | null;
    charts: Collection<workbookChart>;
    names: Collection<workbookNamedItem>;
    pivotTables: Collection<workbookPivotTable>;
    protection: workbookWorksheetProtection;
    tables: Collection<workbookTable>;
}
export type workbookWorksheet = Entity<entity, workbookWorksheetProps> & {
    cell(row: number, column: number): workbookRange;
    usedRange(): workbookRange;
    usedRange(valuesOnly: boolean): workbookRange;
    range(): workbookRange;
    range(address: string): workbookRange;
}
export interface workbookChartProps extends entityProps {
    height: number | null;
    left: number | null;
    name: string;
    top: number | null;
    width: number | null;
    axes: workbookChartAxes;
    dataLabels: workbookChartDataLabels;
    format: workbookChartAreaFormat;
    legend: workbookChartLegend;
    series: Collection<workbookChartSeries>;
    title: workbookChartTitle;
    worksheet: workbookWorksheet;
}
export type workbookChart = Entity<entity, workbookChartProps> & {
    setData(): void;
    setPosition(): void;
    image(): string;
    image(width: number): string;
    image(width: number, height: number): string;
    image(width: number, height: number, fittingMode: string): string;
}
export interface workbookChartAxesProps extends entityProps {
    categoryAxis: workbookChartAxis;
    seriesAxis: workbookChartAxis;
    valueAxis: workbookChartAxis;
}
export type workbookChartAxes = Entity<entity, workbookChartAxesProps> & {
}
export interface workbookChartDataLabelsProps extends entityProps {
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
export type workbookChartDataLabels = Entity<entity, workbookChartDataLabelsProps> & {
}
export interface workbookChartAreaFormatProps extends entityProps {
    fill: workbookChartFill;
    font: workbookChartFont;
}
export type workbookChartAreaFormat = Entity<entity, workbookChartAreaFormatProps> & {
}
export interface workbookChartLegendProps extends entityProps {
    overlay: boolean;
    position: string;
    visible: boolean | null;
    format: workbookChartLegendFormat;
}
export type workbookChartLegend = Entity<entity, workbookChartLegendProps> & {
}
export interface workbookChartSeriesProps extends entityProps {
    name: string;
    format: workbookChartSeriesFormat;
    points: Collection<workbookChartPoint>;
}
export type workbookChartSeries = Entity<entity, workbookChartSeriesProps> & {
}
export interface workbookChartTitleProps extends entityProps {
    overlay: boolean;
    text: string;
    visible: boolean | null;
    format: workbookChartTitleFormat;
}
export type workbookChartTitle = Entity<entity, workbookChartTitleProps> & {
}
export interface workbookChartFillProps { }
export type workbookChartFill = Entity<entity, workbookChartFillProps> & {
    clear(): void;
    setSolidColor(): void;
}
export interface workbookChartFontProps extends entityProps {
    bold: boolean;
    color: string;
    italic: boolean;
    name: string;
    size: number;
    underline: string;
}
export type workbookChartFont = Entity<entity, workbookChartFontProps> & {
}
export interface workbookChartAxisProps extends entityProps {
    majorUnit: Json;
    maximum: Json;
    minimum: Json;
    minorUnit: Json;
    format: workbookChartAxisFormat;
    majorGridlines: workbookChartGridlines;
    minorGridlines: workbookChartGridlines;
    title: workbookChartAxisTitle;
}
export type workbookChartAxis = Entity<entity, workbookChartAxisProps> & {
}
export interface workbookChartAxisFormatProps extends entityProps {
    font: workbookChartFont;
    line: workbookChartLineFormat;
}
export type workbookChartAxisFormat = Entity<entity, workbookChartAxisFormatProps> & {
}
export interface workbookChartGridlinesProps extends entityProps {
    visible: boolean | null;
    format: workbookChartGridlinesFormat;
}
export type workbookChartGridlines = Entity<entity, workbookChartGridlinesProps> & {
}
export interface workbookChartAxisTitleProps extends entityProps {
    text: string;
    visible: boolean | null;
    format: workbookChartAxisTitleFormat;
}
export type workbookChartAxisTitle = Entity<entity, workbookChartAxisTitleProps> & {
}
export interface workbookChartLineFormatProps extends entityProps {
    color: string;
}
export type workbookChartLineFormat = Entity<entity, workbookChartLineFormatProps> & {
    clear(): void;
}
export interface workbookChartAxisTitleFormatProps extends entityProps {
    font: workbookChartFont;
}
export type workbookChartAxisTitleFormat = Entity<entity, workbookChartAxisTitleFormatProps> & {
}
export interface workbookChartDataLabelFormatProps extends entityProps {
    fill: workbookChartFill;
    font: workbookChartFont;
}
export type workbookChartDataLabelFormat = Entity<entity, workbookChartDataLabelFormatProps> & {
}
export interface workbookChartGridlinesFormatProps extends entityProps {
    line: workbookChartLineFormat;
}
export type workbookChartGridlinesFormat = Entity<entity, workbookChartGridlinesFormatProps> & {
}
export interface workbookChartLegendFormatProps extends entityProps {
    fill: workbookChartFill;
    font: workbookChartFont;
}
export type workbookChartLegendFormat = Entity<entity, workbookChartLegendFormatProps> & {
}
export interface workbookChartPointProps extends entityProps {
    value: Json;
    format: workbookChartPointFormat;
}
export type workbookChartPoint = Entity<entity, workbookChartPointProps> & {
}
export interface workbookChartPointFormatProps extends entityProps {
    fill: workbookChartFill;
}
export type workbookChartPointFormat = Entity<entity, workbookChartPointFormatProps> & {
}
export interface workbookChartSeriesFormatProps extends entityProps {
    fill: workbookChartFill;
    line: workbookChartLineFormat;
}
export type workbookChartSeriesFormat = Entity<entity, workbookChartSeriesFormatProps> & {
}
export interface workbookChartTitleFormatProps extends entityProps {
    fill: workbookChartFill;
    font: workbookChartFont;
}
export type workbookChartTitleFormat = Entity<entity, workbookChartTitleFormatProps> & {
}
export interface workbookCommentReplyProps extends entityProps {
    content: string;
    contentType: string | null;
}
export type workbookCommentReply = Entity<entity, workbookCommentReplyProps> & {
}
export interface workbookFilterProps extends entityProps {
    criteria: workbookFilterCriteria;
}
export type workbookFilter = Entity<entity, workbookFilterProps> & {
    apply(): void;
    applyBottomItemsFilter(): void;
    applyBottomPercentFilter(): void;
    applyCellColorFilter(): void;
    applyCustomFilter(): void;
    applyDynamicFilter(): void;
    applyFontColorFilter(): void;
    applyIconFilter(): void;
    applyTopItemsFilter(): void;
    applyTopPercentFilter(): void;
    applyValuesFilter(): void;
    clear(): void;
}
export interface workbookFormatProtectionProps extends entityProps {
    formulaHidden: boolean;
    locked: boolean;
}
export type workbookFormatProtection = Entity<entity, workbookFormatProtectionProps> & {
}
export interface workbookFunctionResultProps extends entityProps {
    error: string;
    value: Json;
}
export type workbookFunctionResult = Entity<entity, workbookFunctionResultProps> & {
}
export interface workbookPivotTableProps extends entityProps {
    name: string;
    worksheet: workbookWorksheet;
}
export type workbookPivotTable = Entity<entity, workbookPivotTableProps> & {
    refresh(): void;
}
export interface workbookRangeProps extends entityProps {
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
export type workbookRange = Entity<entity, workbookRangeProps> & {
    clear(): void;
    delete(): void;
    insert(shift: string): workbookRange;
    merge(): void;
    unmerge(): void;
    boundingRect(anotherRange: string): workbookRange;
    cell(row: number, column: number): workbookRange;
    column(column: number): workbookRange;
    columnsAfter(): workbookRange;
    columnsAfter(count: number): workbookRange;
    columnsBefore(): workbookRange;
    columnsBefore(count: number): workbookRange;
    entireColumn(): workbookRange;
    entireRow(): workbookRange;
    intersection(anotherRange: string): workbookRange;
    lastCell(): workbookRange;
    lastColumn(): workbookRange;
    lastRow(): workbookRange;
    offsetRange(rowOffset: number, columnOffset: number): workbookRange;
    resizedRange(deltaRows: number, deltaColumns: number): workbookRange;
    row(row: number): workbookRange;
    rowsAbove(): workbookRange;
    rowsAbove(count: number): workbookRange;
    rowsBelow(): workbookRange;
    rowsBelow(count: number): workbookRange;
    usedRange(): workbookRange;
    usedRange(valuesOnly: boolean): workbookRange;
    visibleView(): workbookRangeView;
}
export interface workbookRangeFormatProps extends entityProps {
    columnWidth: number;
    horizontalAlignment: string;
    rowHeight: number;
    verticalAlignment: string;
    wrapText: boolean;
    borders: Collection<workbookRangeBorder>;
    fill: workbookRangeFill;
    font: workbookRangeFont;
    protection: workbookFormatProtection;
}
export type workbookRangeFormat = Entity<entity, workbookRangeFormatProps> & {
    autofitColumns(): void;
    autofitRows(): void;
}
export interface workbookRangeSortProps { }
export type workbookRangeSort = Entity<entity, workbookRangeSortProps> & {
    apply(): void;
}
export interface workbookRangeBorderProps extends entityProps {
    color: string;
    sideIndex: string;
    style: string;
    weight: string;
}
export type workbookRangeBorder = Entity<entity, workbookRangeBorderProps> & {
}
export interface workbookRangeFillProps extends entityProps {
    color: string;
}
export type workbookRangeFill = Entity<entity, workbookRangeFillProps> & {
    clear(): void;
}
export interface workbookRangeFontProps extends entityProps {
    bold: boolean;
    color: string;
    italic: boolean;
    name: string;
    size: number;
    underline: string;
}
export type workbookRangeFont = Entity<entity, workbookRangeFontProps> & {
}
export interface workbookRangeViewProps extends entityProps {
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
    rows: Collection<workbookRangeView>;
}
export type workbookRangeView = Entity<entity, workbookRangeViewProps> & {
    range(): workbookRange;
}
export interface workbookTableColumnProps extends entityProps {
    index: number | null;
    name: string;
    values: Json;
    filter: workbookFilter;
}
export type workbookTableColumn = Entity<entity, workbookTableColumnProps> & {
    dataBodyRange(): workbookRange;
    headerRowRange(): workbookRange;
    range(): workbookRange;
    totalRowRange(): workbookRange;
}
export interface workbookTableRowProps extends entityProps {
    index: number | null;
    values: Json;
}
export type workbookTableRow = Entity<entity, workbookTableRowProps> & {
    range(): workbookRange;
}
export interface workbookTableSortProps extends entityProps {
    fields: Collection<workbookSortField>;
    matchCase: boolean | null;
    method: string | null;
}
export type workbookTableSort = Entity<entity, workbookTableSortProps> & {
    apply(): void;
    clear(): void;
    reapply(): void;
}
export interface workbookWorksheetProtectionProps extends entityProps {
    options: workbookWorksheetProtectionOptions;
    protected: boolean | null;
}
export type workbookWorksheetProtection = Entity<entity, workbookWorksheetProtectionProps> & {
    protect(): void;
    unprotect(): void;
}
export interface attendeeAvailability {
    attendee: attendeeBase;
    availability: freeBusyStatus;
}
export interface attendeeBase extends recipient {
    type: attendeeType;
}
export interface locationConstraint {
    isRequired: boolean;
    locations: Collection<locationConstraintItem>;
    suggestLocation: boolean;
}
export interface locationConstraintItem extends location {
    resolveAvailability: boolean;
}
export interface meetingTimeSuggestion {
    attendeeAvailability: Collection<attendeeAvailability>;
    confidence: number;
    locations: Collection<location>;
    meetingTimeSlot: timeSlot;
    order: number;
    organizerAvailability: freeBusyStatus;
    suggestionReason: string;
}
export interface meetingTimeSuggestionsResult {
    emptySuggestionsReason: string;
    meetingTimeSuggestions: Collection<meetingTimeSuggestion>;
}
export interface timeConstraint {
    activityDomain: activityDomain;
    timeSlots: Collection<timeSlot>;
}
export interface placeProps extends entityProps {
    address: physicalAddress;
    displayName: string | null;
    geoCoordinates: outlookGeoCoordinates;
    phone: string;
}
export type place = Entity<entity, placeProps> & {
}
export interface roomProps extends entityProps {
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
    tags: Collection<string>;
    videoDeviceName: string;
}
export type room = Entity<place, roomProps> & {
}
export interface roomListProps extends entityProps {
    emailAddress: string;
    rooms: Collection<room>;
}
export type roomList = Entity<place, roomListProps> & {
}
export interface attachmentItem {
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
export interface responseStatus {
    response: responseType;
    time: Date;
}
export interface automaticRepliesMailTips {
    message: string;
    messageLanguage: localeInfo;
    scheduledEndTime: dateTimeTimeZone;
    scheduledStartTime: dateTimeTimeZone;
}
export interface localeInfo {
    displayName: string;
    locale: string;
}
export interface automaticRepliesSetting {
    externalAudience: externalAudienceScope;
    externalReplyMessage: string;
    internalReplyMessage: string;
    scheduledEndDateTime: dateTimeTimeZone;
    scheduledStartDateTime: dateTimeTimeZone;
    status: automaticRepliesStatus;
}
export interface calendarSharingMessageAction {
    action: calendarSharingAction;
    actionType: calendarSharingActionType;
    importance: calendarSharingActionImportance;
}
export interface convertIdResult {
    errorDetails: genericError;
    sourceId: string;
    targetId: string;
}
export interface genericError {
    code: string;
    message: string;
}
export interface timeZoneBase {
    name: string;
}
export interface customTimeZone extends timeZoneBase {
    bias: number;
    daylightOffset: daylightTimeZoneOffset;
    standardOffset: standardTimeZoneOffset;
}
export interface standardTimeZoneOffset {
    dayOccurrence: number;
    dayOfWeek: dayOfWeek;
    month: number;
    time: Date;
    year: number;
}
export interface daylightTimeZoneOffset extends standardTimeZoneOffset {
    daylightBias: number;
}
export interface followupFlag {
    completedDateTime: dateTimeTimeZone;
    dueDateTime: dateTimeTimeZone;
    flagStatus: followupFlagStatus;
    startDateTime: dateTimeTimeZone;
}
export interface freeBusyError {
    message: string;
    responseCode: string;
}
export interface internetMessageHeader {
    name: string;
    value: string;
}
export interface workingHours {
    daysOfWeek: Collection<dayOfWeek>;
    endTime: Date;
    startTime: Date;
    timeZone: timeZoneBase;
}
export interface mailTips {
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
    recipientSuggestions: Collection<recipient>;
    totalMemberCount: number;
}
export interface mailTipsError {
    code: string;
    message: string;
}
export interface messageRuleActions {
    assignCategories: Collection<string>;
    copyToFolder: string;
    delete: boolean;
    forwardAsAttachmentTo: Collection<recipient>;
    forwardTo: Collection<recipient>;
    markAsRead: boolean;
    markImportance: importance;
    moveToFolder: string;
    permanentDelete: boolean;
    redirectTo: Collection<recipient>;
    stopProcessingRules: boolean;
}
export interface messageRulePredicates {
    bodyContains: Collection<string>;
    bodyOrSubjectContains: Collection<string>;
    categories: Collection<string>;
    fromAddresses: Collection<recipient>;
    hasAttachments: boolean;
    headerContains: Collection<string>;
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
    recipientContains: Collection<string>;
    senderContains: Collection<string>;
    sensitivity: sensitivity;
    sentCcMe: boolean;
    sentOnlyToMe: boolean;
    sentToAddresses: Collection<recipient>;
    sentToMe: boolean;
    sentToOrCcMe: boolean;
    subjectContains: Collection<string>;
    withinSizeRange: sizeRange;
}
export interface sizeRange {
    maximumSize: number;
    minimumSize: number;
}
export interface onlineMeetingInfo {
    conferenceId: string;
    joinUrl: string;
    phones: Collection<phone>;
    quickDial: string;
    tollFreeNumbers: Collection<string>;
    tollNumber: string;
}
export interface patternedRecurrence {
    pattern: recurrencePattern;
    range: recurrenceRange;
}
export interface recurrencePattern {
    dayOfMonth: number | null;
    daysOfWeek: Collection<dayOfWeek>;
    firstDayOfWeek: dayOfWeek;
    index: weekIndex;
    interval: number | null;
    month: number | null;
    type: recurrencePatternType;
}
export interface recurrenceRange {
    endDate: Date;
    numberOfOccurrences: number | null;
    recurrenceTimeZone: string;
    startDate: Date;
    type: recurrenceRangeType;
}
export interface personType {
    class: string;
    subclass: string;
}
export interface reminder {
    changeKey: string;
    eventEndTime: dateTimeTimeZone;
    eventId: string;
    eventLocation: location;
    eventStartTime: dateTimeTimeZone;
    eventSubject: string;
    eventWebLink: string;
    reminderFireTime: dateTimeTimeZone;
}
export interface scheduleInformation {
    availabilityView: string;
    error: freeBusyError;
    scheduleId: string;
    scheduleItems: Collection<scheduleItem>;
    workingHours: workingHours;
}
export interface scheduleItem {
    end: dateTimeTimeZone;
    isPrivate: boolean;
    location: string;
    start: dateTimeTimeZone;
    status: freeBusyStatus;
    subject: string;
}
export interface scoredEmailAddress {
    address: string;
    itemId: string;
    relevanceScore: number;
    selectionLikelihood: selectionLikelihoodInfo;
}
export interface timeZoneInformation {
    alias: string;
    displayName: string;
}
export interface uploadSession {
    expirationDateTime: Date;
    nextExpectedRanges: Collection<string>;
    uploadUrl: string;
}
export interface website {
    address: string;
    displayName: string;
    type: websiteType;
}
export interface attachmentProps extends entityProps {
    contentType: string;
    isInline: boolean | null;
    lastModifiedDateTime: Date;
    name: string;
    size: number | null;
}
export type attachment = Entity<entity, attachmentProps> & {
}
export interface calendarPermissionProps extends entityProps {
    allowedRoles: Collection<calendarRoleType>;
    emailAddress: emailAddress;
    isInsideOrganization: boolean;
    isRemovable: boolean;
    role: calendarRoleType;
}
export type calendarPermission = Entity<entity, calendarPermissionProps> & {
}
export interface multiValueLegacyExtendedPropertyProps extends entityProps {
    value: Collection<string>;
}
export type multiValueLegacyExtendedProperty = Entity<entity, multiValueLegacyExtendedPropertyProps> & {
}
export interface singleValueLegacyExtendedPropertyProps extends entityProps {
    value: string;
}
export type singleValueLegacyExtendedProperty = Entity<entity, singleValueLegacyExtendedPropertyProps> & {
}
export interface calendarSharingMessageProps extends entityProps {
    canAccept: boolean;
    sharingMessageAction: calendarSharingMessageAction;
    sharingMessageActions: Collection<calendarSharingMessageAction>;
    suggestedCalendarName: string;
}
export type calendarSharingMessage = Entity<message, calendarSharingMessageProps> & {
    accept(): calendar;
}
export interface postProps extends entityProps {
    body: itemBody;
    conversationId: string;
    conversationThreadId: string;
    from: recipient | null;
    hasAttachments: boolean | null;
    newParticipants: Collection<recipient> | null;
    receivedDateTime: Date | null;
    sender: recipient;
    attachments: Collection<attachment>;
    extensions: Collection<extension>;
    inReplyTo: post;
    multiValueExtendedProperties: Collection<multiValueLegacyExtendedProperty>;
    singleValueExtendedProperties: Collection<singleValueLegacyExtendedProperty>;
}
export type post = Entity<outlookItem, postProps> & {
    forward(): void;
    reply(): void;
}
export interface eventMessageProps extends entityProps {
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
export type eventMessage = Entity<message, eventMessageProps> & {
}
export interface eventMessageRequestProps extends entityProps {
    allowNewTimeProposals: boolean;
    meetingRequestType: meetingRequestType;
    previousEndDateTime: dateTimeTimeZone;
    previousLocation: location;
    previousStartDateTime: dateTimeTimeZone;
    responseRequested: boolean;
}
export type eventMessageRequest = Entity<eventMessage, eventMessageRequestProps> & {
}
export interface eventMessageResponseProps extends entityProps {
    proposedNewTime: timeSlot;
    responseType: responseType;
}
export type eventMessageResponse = Entity<eventMessage, eventMessageResponseProps> & {
}
export interface fileAttachmentProps extends entityProps {
    contentBytes: Buffer;
    contentId: string;
    contentLocation: string;
}
export type fileAttachment = Entity<attachment, fileAttachmentProps> & {
}
export interface inferenceClassificationOverrideProps extends entityProps {
    classifyAs: inferenceClassificationType;
    senderEmailAddress: emailAddress;
}
export type inferenceClassificationOverride = Entity<entity, inferenceClassificationOverrideProps> & {
}
export interface itemAttachmentProps extends entityProps {
    item: outlookItem;
}
export type itemAttachment = Entity<attachment, itemAttachmentProps> & {
}
export interface messageRuleProps extends entityProps {
    actions: messageRuleActions;
    conditions: messageRulePredicates;
    displayName: string;
    exceptions: messageRulePredicates;
    hasError: boolean;
    isEnabled: boolean;
    isReadOnly: boolean;
    sequence: number;
}
export type messageRule = Entity<entity, messageRuleProps> & {
}
export interface mailSearchFolderProps extends entityProps {
    filterQuery: string;
    includeNestedFolders: boolean;
    isSupported: boolean;
    sourceFolderIds: Collection<string>;
}
export type mailSearchFolder = Entity<mailFolder, mailSearchFolderProps> & {
}
export interface openTypeExtensionProps extends entityProps {
    extensionName: string | null;
}
export type openTypeExtension = Entity<extension, openTypeExtensionProps> & {
}
export interface outlookCategoryProps extends entityProps {
    color: categoryColor;
    displayName: string;
}
export type outlookCategory = Entity<entity, outlookCategoryProps> & {
}
export interface referenceAttachmentProps { }
export type referenceAttachment = Entity<attachment, referenceAttachmentProps> & {
}
export interface idleSessionSignOut {
    isEnabled: boolean;
    signOutAfterInSeconds: number;
    warnAfterInSeconds: number;
}
export interface sharepointSettingsProps extends entityProps {
    allowedDomainGuidsForSyncApp: Collection<string>;
    availableManagedPathsForSiteCreation: Collection<string> | null;
    deletedUserPersonalSiteRetentionPeriodInDays: number;
    excludedFileExtensionsForSyncApp: Collection<string>;
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
    sharingAllowedDomainList: Collection<string>;
    sharingBlockedDomainList: Collection<string>;
    sharingCapability: sharingCapabilities;
    sharingDomainRestrictionMode: sharingDomainRestrictionMode;
    siteCreationDefaultManagedPath: string | null;
    siteCreationDefaultStorageLimitInMB: number;
    tenantDefaultTimezone: string;
}
export type sharepointSettings = Entity<entity, sharepointSettingsProps> & {
}
export interface accessAction {
}
export interface album {
    coverImageItemId: string;
}
export interface booleanColumn {
}
export interface calculatedColumn {
    format: string;
    formula: string;
    outputType: string;
}
export interface choiceColumn {
    allowTextEntry: boolean;
    choices: Collection<string>;
    displayAs: string;
}
export interface columnValidation {
    defaultLanguage: string;
    descriptions: Collection<displayNameLocalization>;
    formula: string;
}
export interface displayNameLocalization {
    displayName: string;
    languageTag: string;
}
export interface commentAction {
    isReply: boolean;
    parentAuthor: identitySet;
    participants: Collection<identitySet>;
}
export interface contentApprovalStatusColumn {
}
export interface contentTypeInfo {
    id: string;
    name: string;
}
export interface contentTypeOrder {
    default: boolean;
    position: number;
}
export interface createAction {
}
export interface currencyColumn {
    locale: string;
}
export interface dateTimeColumn {
    displayAs: string;
    format: string;
}
export interface defaultColumnValue {
    formula: string;
    value: string;
}
export interface deleteAction {
    name: string;
    objectType: string;
}
export interface documentSet {
    allowedContentTypes: Collection<contentTypeInfo>;
    defaultContents: Collection<documentSetContent>;
    propagateWelcomePageChanges: boolean;
    shouldPrefixNameToFile: boolean;
    welcomePageUrl: string;
    sharedColumns: Collection<columnDefinition>;
    welcomePageColumns: Collection<columnDefinition>;
}
export interface documentSetContent {
    contentType: contentTypeInfo;
    fileName: string;
    folderName: string;
}
export interface documentSetVersionItem {
    itemId: string;
    title: string;
    versionId: string;
}
export interface driveItemUploadableProperties {
    description: string;
    fileSize: number;
    fileSystemInfo: fileSystemInfo;
    name: string;
}
export interface driveRecipient {
    alias: string;
    email: string;
    objectId: string;
}
export interface editAction {
}
export interface extractSensitivityLabelsResult {
    labels: Collection<sensitivityLabelAssignment>;
}
export interface sensitivityLabelAssignment {
    assignmentMethod: sensitivityLabelAssignmentMethod | null;
    sensitivityLabelId: string | null;
    tenantId: string | null;
}
export interface hashes {
    crc32Hash: string;
    quickXorHash: string;
    sha1Hash: string;
    sha256Hash: string;
}
export interface folderView {
    sortBy: string;
    sortOrder: string;
    viewType: string;
}
export interface geolocationColumn {
}
export interface hyperlinkOrPictureColumn {
    isPicture: boolean;
}
export interface incompleteData {
    missingDataBeforeDateTime: Date;
    wasThrottled: boolean;
}
export interface itemActionStat {
    actionCount: number;
    actorCount: number;
}
export interface itemPreviewInfo {
    getUrl: string;
    postParameters: string;
    postUrl: string;
}
export interface itemReference {
    driveId: string;
    driveType: string;
    id: string;
    name: string;
    path: string;
    shareId: string;
    sharepointIds: sharepointIds;
    siteId: string;
}
export interface lookupColumn {
    allowMultipleValues: boolean;
    allowUnlimitedLength: boolean;
    columnName: string;
    listId: string;
    primaryLookupColumnId: string;
}
export interface mentionAction {
    mentionees: Collection<identitySet>;
}
export interface moveAction {
    from: string;
    to: string;
}
export interface numberColumn {
    decimalPlaces: string;
    displayAs: string;
    maximum: number;
    minimum: number;
}
export interface pendingContentUpdate {
    queuedDateTime: Date;
}
export interface personOrGroupColumn {
    allowMultipleSelection: boolean;
    chooseFromType: string;
    displayAs: string;
}
export interface storagePlanInformation {
    upgradeAvailable: boolean;
}
export interface renameAction {
    newName: string;
    oldName: string;
}
export interface restoreAction {
}
export interface shareAction {
    recipients: Collection<identitySet>;
}
export interface sharePointIdentity extends identity {
    loginName: string;
}
export interface sharePointIdentitySet extends identitySet {
    group: identity;
    siteGroup: sharePointIdentity;
    siteUser: sharePointIdentity;
}
export interface sharingInvitation {
    email: string;
    invitedBy: identitySet;
    redeemedBy: string;
    signInRequired: boolean;
}
export interface sharingLink {
    application: identity;
    preventsDownload: boolean;
    scope: string;
    type: string;
    webHtml: string;
    webUrl: string;
}
export interface termColumn {
    allowMultipleValues: boolean;
    showFullyQualifiedName: boolean;
    parentTerm: {};
    termSet: {};
}
export interface textColumn {
    allowMultipleLines: boolean;
    appendChangesToExistingText: boolean;
    linesForEditing: number;
    maxLength: number;
    textType: string;
}
export interface thumbnail {
    content: Buffer;
    height: number;
    sourceItemId: string;
    url: string;
    width: number;
}
export interface thumbnailColumn {
}
export interface versionAction {
    newVersion: string;
}
export interface columnLinkProps extends entityProps {
    name: string;
}
export type columnLink = Entity<entity, columnLinkProps> & {
}
export interface listItemVersionProps extends entityProps {
    fields: fieldValueSet;
}
export type listItemVersion = Entity<baseItemVersion, listItemVersionProps> & {
    restoreVersion(): void;
}
export interface documentSetVersionProps extends entityProps {
    comment: string;
    createdBy: identitySet;
    createdDateTime: Date;
    items: Collection<documentSetVersionItem>;
    shouldCaptureMinorVersion: boolean;
}
export type documentSetVersion = Entity<listItemVersion, documentSetVersionProps> & {
    restore(): void;
}
export interface fieldValueSetProps { }
export type fieldValueSet = Entity<entity, fieldValueSetProps> & {
}
export interface itemActivityProps extends entityProps {
    access: accessAction;
    activityDateTime: Date;
    actor: identitySet;
    driveItem: driveItem;
}
export type itemActivity = Entity<entity, itemActivityProps> & {
}
export interface itemActivityStatProps extends entityProps {
    access: itemActionStat;
    create: itemActionStat;
    delete: itemActionStat;
    edit: itemActionStat;
    endDateTime: Date;
    incompleteData: incompleteData;
    isTrending: boolean;
    move: itemActionStat;
    startDateTime: Date;
    activities: Collection<itemActivity>;
}
export type itemActivityStat = Entity<entity, itemActivityStatProps> & {
}
export interface sharedDriveItemProps extends entityProps {
    owner: identitySet;
    driveItem: driveItem;
    items: Collection<driveItem>;
    list: list;
    listItem: listItem;
    permission: permission;
    root: driveItem;
    site: site;
}
export type sharedDriveItem = Entity<baseItem, sharedDriveItemProps> & {
}
export interface audioConferencing {
    conferenceId: string;
    dialinUrl: string;
    tollFreeNumber: string;
    tollFreeNumbers: Collection<string>;
    tollNumber: string;
    tollNumbers: Collection<string>;
}
export interface broadcastMeetingSettings {
    allowedAudience: broadcastMeetingAudience;
    captions: broadcastMeetingCaptionSettings;
    isAttendeeReportEnabled: boolean;
    isQuestionAndAnswerEnabled: boolean;
    isRecordingEnabled: boolean;
    isVideoOnDemandEnabled: boolean;
}
export interface chatInfo {
    messageId: string;
    replyChainMessageId: string;
    threadId: string;
}
export interface joinMeetingIdSettings {
    isPasscodeRequired: boolean;
    joinMeetingId: string;
    passcode: string;
}
export interface meetingParticipants {
    attendees: Collection<meetingParticipantInfo>;
    organizer: meetingParticipantInfo;
}
export interface meetingAttendanceReportProps extends entityProps {
    meetingEndDateTime: Date;
    meetingStartDateTime: Date;
    totalParticipantCount: number;
    attendanceRecords: Collection<attendanceRecord>;
}
export type meetingAttendanceReport = Entity<entity, meetingAttendanceReportProps> & {
}
export interface extensionSchemaProperty {
    name: string;
    type: string;
}
export interface schemaExtensionProps extends entityProps {
    description: string;
    owner: string | null;
    properties: Collection<extensionSchemaProperty> | null;
    status: string | null;
    targetTypes: Collection<string> | null;
}
export type schemaExtension = Entity<entity, schemaExtensionProps> & {
}
export interface attributeDefinition {
    anchor: boolean | null;
    apiExpressions: Collection<stringKeyStringValuePair>;
    caseExact: boolean | null;
    defaultValue: string;
    flowNullValues: boolean | null;
    metadata: Collection<attributeDefinitionMetadataEntry>;
    multivalued: boolean | null;
    mutability: mutability | null;
    name: string;
    referencedObjects: Collection<referencedObject>;
    required: boolean | null;
    type: attributeType | null;
}
export interface stringKeyStringValuePair {
    key: string;
    value: string;
}
export interface attributeDefinitionMetadataEntry {
    key: attributeDefinitionMetadata;
    value: string;
}
export interface referencedObject {
    referencedObjectName: string;
    referencedProperty: string;
}
export interface attributeMapping {
    defaultValue: string;
    exportMissingReferences: boolean | null;
    flowBehavior: attributeFlowBehavior | null;
    flowType: attributeFlowType | null;
    matchingPriority: number | null;
    source: attributeMappingSource;
    targetAttributeName: string;
}
export interface attributeMappingSource {
    expression: string;
    name: string;
    parameters: Collection<stringKeyAttributeMappingSourceValuePair>;
    type: attributeMappingSourceType | null;
}
export interface attributeMappingParameterSchema {
    allowMultipleOccurrences: boolean | null;
    name: string;
    required: boolean | null;
    type: attributeType | null;
}
export interface stringKeyAttributeMappingSourceValuePair {
    key: string;
    value: attributeMappingSource;
}
export interface containerFilter {
    includedContainers: Collection<string>;
}
export interface expressionInputObject {
    definition: objectDefinition;
    properties: Collection<stringKeyObjectValuePair>;
}
export interface objectDefinition {
    attributes: Collection<attributeDefinition>;
    metadata: Collection<objectDefinitionMetadataEntry>;
    name: string;
    supportedApis: Collection<string>;
}
export interface stringKeyObjectValuePair {
    key: string;
}
export interface filter {
    categoryFilterGroups: Collection<filterGroup>;
    groups: Collection<filterGroup>;
    inputFilterGroups: Collection<filterGroup>;
}
export interface filterGroup {
    clauses: Collection<filterClause>;
    name: string;
}
export interface filterClause {
    operatorName: string;
    sourceOperandName: string;
    targetOperand: filterOperand;
}
export interface filterOperand {
    values: Collection<string>;
}
export interface groupFilter {
    includedGroups: Collection<string>;
}
export interface objectDefinitionMetadataEntry {
    key: objectDefinitionMetadata;
    value: string;
}
export interface objectMapping {
    attributeMappings: Collection<attributeMapping>;
    enabled: boolean | null;
    flowTypes: objectFlowTypes | null;
    metadata: Collection<objectMappingMetadataEntry>;
    name: string;
    scope: filter;
    sourceObjectName: string;
    targetObjectName: string;
}
export interface objectMappingMetadataEntry {
    key: objectMappingMetadata;
    value: string;
}
export interface parseExpressionResponse {
    error: publicError;
    evaluationResult: Collection<string>;
    evaluationSucceeded: boolean | null;
    parsedExpression: attributeMappingSource;
    parsingSucceeded: boolean | null;
}
export interface publicErrorResponse {
    error: publicError;
}
export interface stringKeyLongValuePair {
    key: string;
    value: number | null;
}
export interface synchronizationError {
    code: string;
    message: string;
    tenantActionable: boolean | null;
}
export interface synchronizationJobApplicationParameters {
    ruleId: string;
    subjects: Collection<synchronizationJobSubject>;
}
export interface synchronizationJobSubject {
    links: synchronizationLinkedObjects;
    objectId: string;
    objectTypeName: string;
}
export interface synchronizationJobRestartCriteria {
    resetScope: synchronizationJobRestartScope;
}
export interface synchronizationLinkedObjects {
    manager: synchronizationJobSubject;
    members: Collection<synchronizationJobSubject>;
    owners: Collection<synchronizationJobSubject>;
}
export interface synchronizationMetadataEntry {
    key: synchronizationMetadata;
    value: string;
}
export interface synchronizationProgress {
    completedUnits: number | null;
    progressObservationDateTime: Date | null;
    totalUnits: number | null;
    units: string;
}
export interface synchronizationQuarantine {
    currentBegan: Date | null;
    error: synchronizationError;
    nextAttempt: Date | null;
    reason: quarantineReason | null;
    seriesBegan: Date | null;
    seriesCount: number | null;
}
export interface synchronizationRule {
    containerFilter: containerFilter;
    editable: boolean | null;
    groupFilter: groupFilter;
    id: string;
    metadata: Collection<stringKeyStringValuePair>;
    name: string;
    objectMappings: Collection<objectMapping>;
    priority: number | null;
    sourceDirectoryName: string;
    targetDirectoryName: string;
}
export interface synchronizationSchedule {
    expiration: Date;
    interval: number | null;
    state: synchronizationScheduleState | null;
}
export interface synchronizationSecretKeyStringValuePair {
    key: synchronizationSecret | null;
    value: string;
}
export interface synchronizationStatus {
    code: synchronizationStatusCode | null;
    countSuccessiveCompleteFailures: number | null;
    escrowsPruned: boolean | null;
    lastExecution: synchronizationTaskExecution;
    lastSuccessfulExecution: synchronizationTaskExecution;
    lastSuccessfulExecutionWithExports: synchronizationTaskExecution;
    progress: Collection<synchronizationProgress>;
    quarantine: synchronizationQuarantine;
    steadyStateFirstAchievedTime: Date | null;
    steadyStateLastAchievedTime: Date | null;
    synchronizedEntryCountByType: Collection<stringKeyLongValuePair>;
    troubleshootingUrl: string;
}
export interface synchronizationTaskExecution {
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
export interface attributeMappingFunctionSchemaProps extends entityProps {
    parameters: Collection<attributeMappingParameterSchema>;
}
export type attributeMappingFunctionSchema = Entity<entity, attributeMappingFunctionSchemaProps> & {
}
export interface directoryDefinitionProps extends entityProps {
    discoverabilities: directoryDefinitionDiscoverabilities | null;
    discoveryDateTime: Date;
    name: string;
    objects: Collection<objectDefinition>;
    readOnly: boolean | null;
    version: string;
}
export type directoryDefinition = Entity<entity, directoryDefinitionProps> & {
    discover(): directoryDefinition;
}
export interface filterOperatorSchemaProps extends entityProps {
    arity: scopeOperatorType | null;
    multivaluedComparisonType: scopeOperatorMultiValuedComparisonType | null;
    supportedAttributeTypes: Collection<attributeType> | null;
}
export type filterOperatorSchema = Entity<entity, filterOperatorSchemaProps> & {
}
export interface synchronizationJobProps extends entityProps {
    schedule: synchronizationSchedule;
    status: synchronizationStatus;
    synchronizationJobSettings: Collection<keyValuePair>;
    templateId: string;
    schema: synchronizationSchema;
}
export type synchronizationJob = Entity<entity, synchronizationJobProps> & {
    pause(): void;
    provisionOnDemand(parameters: Collection<synchronizationJobApplicationParameters>): stringKeyStringValuePair;
    restart(): void;
    start(): void;
    validateCredentials(): void;
}
export interface synchronizationTemplateProps extends entityProps {
    applicationId: string | null;
    default: boolean | null;
    description: string;
    discoverable: boolean | null;
    factoryTag: string;
    metadata: Collection<synchronizationMetadataEntry>;
    schema: synchronizationSchema;
}
export type synchronizationTemplate = Entity<entity, synchronizationTemplateProps> & {
}
export interface synchronizationSchemaProps extends entityProps {
    synchronizationRules: Collection<synchronizationRule>;
    version: string;
    directories: Collection<directoryDefinition>;
}
export type synchronizationSchema = Entity<entity, synchronizationSchemaProps> & {
    parseExpression(expression: string, testInputObject: expressionInputObject, targetAttributeDefinition: attributeDefinition): parseExpressionResponse;
    filterOperators(): Collection<filterOperatorSchema>;
    functions(): Collection<attributeMappingFunctionSchema>;
}
export interface cloudCommunicationsProps extends entityProps {
    callRecords: Collection<{}>;
    calls: Collection<call>;
    onlineMeetings: Collection<onlineMeeting>;
    presences: Collection<presence>;
}
export type cloudCommunications = Entity<{}, cloudCommunicationsProps> & {
    getPresencesByUserId(ids: Collection<string>): Collection<presence>;
}
export interface callProps extends entityProps {
    callbackUri: string | null;
    callChainId: string;
    callOptions: callOptions;
    callRoutes: Collection<callRoute>;
    chatInfo: chatInfo;
    direction: callDirection;
    incomingContext: incomingContext;
    mediaConfig: mediaConfig;
    mediaState: callMediaState;
    meetingInfo: meetingInfo;
    myParticipantId: string;
    requestedModalities: Collection<modality>;
    resultInfo: resultInfo;
    source: participantInfo;
    state: callState;
    subject: string;
    targets: Collection<invitationParticipantInfo>;
    tenantId: string;
    toneInfo: toneInfo;
    transcription: callTranscriptionInfo;
    audioRoutingGroups: Collection<audioRoutingGroup>;
    contentSharingSessions: Collection<contentSharingSession>;
    operations: Collection<commsOperation>;
    participants: Collection<participant>;
}
export type call = Entity<entity, callProps> & {
    redirect(): void;
    addLargeGalleryView(clientContext: string): addLargeGalleryViewOperation;
    answer(): void;
    cancelMediaProcessing(clientContext: string): cancelMediaProcessingOperation;
    changeScreenSharingRole(): void;
    keepAlive(): void;
    mute(clientContext: string): muteParticipantOperation;
    playPrompt(prompts: Collection<prompt>, clientContext: string): playPromptOperation;
    recordResponse(prompts: Collection<prompt>, bargeInAllowed: boolean, initialSilenceTimeoutInSeconds: number, maxSilenceTimeoutInSeconds: number, maxRecordDurationInSeconds: number, playBeep: boolean, stopTones: Collection<string>, clientContext: string): recordOperation;
    reject(): void;
    subscribeToTone(clientContext: string): subscribeToToneOperation;
    transfer(): void;
    unmute(clientContext: string): unmuteParticipantOperation;
    updateRecordingStatus(status: recordingStatus, clientContext: string): updateRecordingStatusOperation;
}
export interface accessReviewApplyAction {
}
export interface accessReviewHistoryScheduleSettings {
    recurrence: patternedRecurrence | null;
    reportRange: string | null;
}
export interface accessReviewScope {
}
export interface accessReviewQueryScope extends accessReviewScope {
    query: string;
    queryRoot: string;
    queryType: string;
}
export interface accessReviewInactiveUsersQueryScope extends accessReviewQueryScope {
    inactiveDuration: number;
}
export interface accessReviewInstanceDecisionItemResource {
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
export interface accessReviewNotificationRecipientItem {
    notificationRecipientScope: accessReviewNotificationRecipientScope;
    notificationTemplateType: string;
}
export interface accessReviewNotificationRecipientScope {
}
export interface accessReviewNotificationRecipientQueryScope extends accessReviewNotificationRecipientScope {
    query: string;
    queryRoot: string;
    queryType: string;
}
export interface accessReviewRecommendationInsightSetting {
}
export interface accessReviewReviewerScope {
    query: string;
    queryRoot: string;
    queryType: string;
}
export interface accessReviewScheduleSettings {
    applyActions: Collection<accessReviewApplyAction>;
    autoApplyDecisionsEnabled: boolean | null;
    decisionHistoriesForReviewersEnabled: boolean;
    defaultDecision: string;
    defaultDecisionEnabled: boolean | null;
    instanceDurationInDays: number | null;
    justificationRequiredOnApproval: boolean | null;
    mailNotificationsEnabled: boolean | null;
    recommendationInsightSettings: Collection<accessReviewRecommendationInsightSetting>;
    recommendationLookBackDuration: number;
    recommendationsEnabled: boolean | null;
    recurrence: patternedRecurrence;
    reminderNotificationsEnabled: boolean | null;
}
export interface accessReviewStageSettings {
    decisionsThatWillMoveToNextStage: Collection<string>;
    dependsOn: Collection<string> | null;
    durationInDays: number | null;
    fallbackReviewers: Collection<accessReviewReviewerScope>;
    recommendationInsightSettings: Collection<accessReviewRecommendationInsightSetting>;
    recommendationsEnabled: boolean | null;
    reviewers: Collection<accessReviewReviewerScope>;
    stageId: string | null;
}
export interface appConsentRequestScope {
    displayName: string;
}
export interface disableAndDeleteUserApplyAction extends accessReviewApplyAction {
}
export interface groupPeerOutlierRecommendationInsightSettings extends accessReviewRecommendationInsightSetting {
}
export interface principalResourceMembershipsScope extends accessReviewScope {
    principalScopes: Collection<accessReviewScope>;
    resourceScopes: Collection<accessReviewScope>;
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
export interface accessReviewHistoryDefinitionProps extends entityProps {
    createdBy: userIdentity | null;
    createdDateTime: Date | null;
    decisions: Collection<accessReviewHistoryDecisionFilter>;
    displayName: string | null;
    reviewHistoryPeriodEndDateTime: Date | null;
    reviewHistoryPeriodStartDateTime: Date | null;
    scheduleSettings: accessReviewHistoryScheduleSettings;
    scopes: Collection<accessReviewScope> | null;
    status: accessReviewHistoryStatus;
    instances: Collection<accessReviewHistoryInstance>;
}
export type accessReviewHistoryDefinition = Entity<entity, accessReviewHistoryDefinitionProps> & {
}
export interface accessReviewHistoryInstanceProps extends entityProps {
    downloadUri: string;
    expirationDateTime: Date | null;
    fulfilledDateTime: Date;
    reviewHistoryPeriodEndDateTime: Date;
    reviewHistoryPeriodStartDateTime: Date;
    runDateTime: Date | null;
    status: accessReviewHistoryStatus;
}
export type accessReviewHistoryInstance = Entity<entity, accessReviewHistoryInstanceProps> & {
    generateDownloadUri(): accessReviewHistoryInstance;
}
export interface accessReviewInstanceProps extends entityProps {
    endDateTime: Date;
    fallbackReviewers: Collection<accessReviewReviewerScope>;
    reviewers: Collection<accessReviewReviewerScope>;
    scope: accessReviewScope;
    startDateTime: Date;
    status: string;
    contactedReviewers: Collection<accessReviewReviewer>;
    decisions: Collection<accessReviewInstanceDecisionItem>;
    stages: Collection<accessReviewStage>;
}
export type accessReviewInstance = Entity<entity, accessReviewInstanceProps> & {
    acceptRecommendations(): void;
    applyDecisions(): void;
    batchRecordDecisions(): void;
    resetDecisions(): void;
    sendReminder(): void;
    stop(): void;
}
export interface accessReviewReviewerProps extends entityProps {
    createdDateTime: Date;
    displayName: string;
    userPrincipalName: string;
}
export type accessReviewReviewer = Entity<entity, accessReviewReviewerProps> & {
}
export interface accessReviewInstanceDecisionItemProps extends entityProps {
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
    insights: Collection<governanceInsight>;
}
export type accessReviewInstanceDecisionItem = Entity<entity, accessReviewInstanceDecisionItemProps> & {
}
export interface accessReviewStageProps extends entityProps {
    endDateTime: Date;
    fallbackReviewers: Collection<accessReviewReviewerScope>;
    reviewers: Collection<accessReviewReviewerScope>;
    startDateTime: Date;
    status: string;
    decisions: Collection<accessReviewInstanceDecisionItem>;
}
export type accessReviewStage = Entity<entity, accessReviewStageProps> & {
    stop(): void;
}
export interface accessReviewScheduleDefinitionProps extends entityProps {
    additionalNotificationRecipients: Collection<accessReviewNotificationRecipientItem>;
    createdBy: userIdentity;
    createdDateTime: Date;
    descriptionForAdmins: string;
    descriptionForReviewers: string;
    displayName: string;
    fallbackReviewers: Collection<accessReviewReviewerScope>;
    instanceEnumerationScope: accessReviewScope;
    lastModifiedDateTime: Date;
    reviewers: Collection<accessReviewReviewerScope>;
    scope: accessReviewScope;
    settings: accessReviewScheduleSettings;
    stageSettings: Collection<accessReviewStageSettings>;
    status: string;
    instances: Collection<accessReviewInstance>;
}
export type accessReviewScheduleDefinition = Entity<entity, accessReviewScheduleDefinitionProps> & {
    stop(): void;
}
export interface appConsentRequestProps extends entityProps {
    appDisplayName: string;
    appId: string | null;
    pendingScopes: Collection<appConsentRequestScope>;
    userConsentRequests: Collection<userConsentRequest>;
}
export type appConsentRequest = Entity<entity, appConsentRequestProps> & {
}
export interface userConsentRequestProps extends entityProps {
    reason: string;
    approval: approval;
}
export type userConsentRequest = Entity<request, userConsentRequestProps> & {
}
export interface approvalProps extends entityProps {
    stages: Collection<approvalStage>;
}
export type approval = Entity<entity, approvalProps> & {
}
export interface approvalStageProps extends entityProps {
    assignedToMe: boolean;
    displayName: string;
    justification: string;
    reviewedBy: identity;
    reviewedDateTime: Date;
    reviewResult: string;
    status: string;
}
export type approvalStage = Entity<entity, approvalStageProps> & {
}
export interface accessPackageProps extends entityProps {
    createdDateTime: Date;
    description: string;
    displayName: string;
    isHidden: boolean;
    modifiedDateTime: Date;
    accessPackagesIncompatibleWith: Collection<accessPackage>;
    assignmentPolicies: Collection<accessPackageAssignmentPolicy>;
    catalog: accessPackageCatalog;
    incompatibleAccessPackages: Collection<accessPackage>;
    incompatibleGroups: Collection<group>;
    resourceRoleScopes: Collection<accessPackageResourceRoleScope>;
}
export type accessPackage = Entity<entity, accessPackageProps> & {
    getApplicablePolicyRequirements(): Collection<accessPackageAssignmentRequestRequirements>;
}
export interface accessPackageAssignmentPolicyProps extends entityProps {
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
    specificAllowedTargets: Collection<subjectSet>;
    accessPackage: accessPackage;
    catalog: accessPackageCatalog;
    customExtensionStageSettings: Collection<customExtensionStageSetting>;
    questions: Collection<accessPackageQuestion>;
}
export type accessPackageAssignmentPolicy = Entity<entity, accessPackageAssignmentPolicyProps> & {
}
export interface accessPackageAssignmentRequestProps extends entityProps {
    answers: Collection<accessPackageAnswer>;
    completedDateTime: Date;
    createdDateTime: Date;
    customExtensionCalloutInstances: Collection<customExtensionCalloutInstance>;
    requestType: accessPackageRequestType;
    schedule: entitlementManagementSchedule;
    state: accessPackageRequestState;
    status: string;
    accessPackage: accessPackage;
    assignment: accessPackageAssignment;
    requestor: accessPackageSubject;
}
export type accessPackageAssignmentRequest = Entity<entity, accessPackageAssignmentRequestProps> & {
    cancel(): void;
    reprocess(): void;
    resume(): void;
}
export interface accessPackageAssignmentProps extends entityProps {
    customExtensionCalloutInstances: Collection<customExtensionCalloutInstance>;
    expiredDateTime: Date;
    schedule: entitlementManagementSchedule;
    state: accessPackageAssignmentState;
    status: string;
    accessPackage: accessPackage;
    assignmentPolicy: accessPackageAssignmentPolicy;
    target: accessPackageSubject;
}
export type accessPackageAssignment = Entity<entity, accessPackageAssignmentProps> & {
    reprocess(): void;
}
export interface accessPackageCatalogProps extends entityProps {
    catalogType: accessPackageCatalogType;
    createdDateTime: Date;
    description: string;
    displayName: string;
    isExternallyVisible: boolean;
    modifiedDateTime: Date;
    state: accessPackageCatalogState;
    accessPackages: Collection<accessPackage>;
    customWorkflowExtensions: Collection<customCalloutExtension>;
    resourceRoles: Collection<accessPackageResourceRole>;
    resources: Collection<accessPackageResource>;
    resourceScopes: Collection<accessPackageResourceScope>;
}
export type accessPackageCatalog = Entity<entity, accessPackageCatalogProps> & {
}
export interface connectedOrganizationProps extends entityProps {
    createdDateTime: Date;
    description: string;
    displayName: string;
    identitySources: Collection<identitySource>;
    modifiedDateTime: Date;
    state: connectedOrganizationState;
    externalSponsors: Collection<directoryObject>;
    internalSponsors: Collection<directoryObject>;
}
export type connectedOrganization = Entity<entity, connectedOrganizationProps> & {
}
export interface accessPackageResourceEnvironmentProps extends entityProps {
    createdDateTime: Date;
    description: string;
    displayName: string;
    isDefaultEnvironment: boolean;
    modifiedDateTime: Date;
    originId: string;
    originSystem: string;
    resources: Collection<accessPackageResource>;
}
export type accessPackageResourceEnvironment = Entity<entity, accessPackageResourceEnvironmentProps> & {
}
export interface accessPackageResourceRequestProps extends entityProps {
    createdDateTime: Date;
    requestType: accessPackageRequestType;
    state: accessPackageRequestState;
    catalog: accessPackageCatalog;
    resource: accessPackageResource;
}
export type accessPackageResourceRequest = Entity<entity, accessPackageResourceRequestProps> & {
}
export interface accessPackageResourceRoleScopeProps extends entityProps {
    createdDateTime: Date;
    role: accessPackageResourceRole;
    scope: accessPackageResourceScope;
}
export type accessPackageResourceRoleScope = Entity<entity, accessPackageResourceRoleScopeProps> & {
}
export interface accessPackageResourceProps extends entityProps {
    createdDateTime: Date;
    description: string;
    displayName: string;
    modifiedDateTime: Date;
    originId: string;
    originSystem: string;
    environment: accessPackageResourceEnvironment;
    roles: Collection<accessPackageResourceRole>;
    scopes: Collection<accessPackageResourceScope>;
}
export type accessPackageResource = Entity<entity, accessPackageResourceProps> & {
}
export interface entitlementManagementSettingsProps extends entityProps {
    durationUntilExternalUserDeletedAfterBlocked: number;
    externalUserLifecycleAction: accessPackageExternalUserLifecycleAction;
}
export type entitlementManagementSettings = Entity<entity, entitlementManagementSettingsProps> & {
}
export interface userSignInInsightProps extends entityProps {
    lastSignInDateTime: Date;
}
export type userSignInInsight = Entity<governanceInsight, userSignInInsightProps> & {
}
export interface agreementFileData {
    data: Buffer;
}
export interface termsExpiration {
    frequency: number;
    startDateTime: Date;
}
export interface agreementProps extends entityProps {
    displayName: string;
    isPerDeviceAcceptanceRequired: boolean;
    isViewingBeforeAcceptanceRequired: boolean;
    termsExpiration: termsExpiration;
    userReacceptRequiredFrequency: number;
    acceptances: Collection<agreementAcceptance>;
    file: agreementFile;
    files: Collection<agreementFileLocalization>;
}
export type agreement = Entity<entity, agreementProps> & {
}
export interface agreementFilePropertiesProps extends entityProps {
    createdDateTime: Date;
    displayName: string;
    fileData: agreementFileData;
    fileName: string;
    isDefault: boolean;
    isMajorVersion: boolean;
    language: string;
}
export type agreementFileProperties = Entity<entity, agreementFilePropertiesProps> & {
}
export interface agreementFileProps extends entityProps {
    localizations: Collection<agreementFileLocalization>;
}
export type agreementFile = Entity<agreementFileProperties, agreementFileProps> & {
}
export interface agreementFileLocalizationProps extends entityProps {
    versions: Collection<agreementFileVersion>;
}
export type agreementFileLocalization = Entity<agreementFileProperties, agreementFileLocalizationProps> & {
}
export interface agreementFileVersionProps { }
export type agreementFileVersion = Entity<agreementFileProperties, agreementFileVersionProps> & {
}
export interface conditionalAccessSessionControl {
    isEnabled: boolean;
}
export interface applicationEnforcedRestrictionsSessionControl extends conditionalAccessSessionControl {
}
export interface authenticationStrengthUsage {
    mfa: Collection<conditionalAccessPolicy>;
    none: Collection<conditionalAccessPolicy>;
}
export interface cloudAppSecuritySessionControl extends conditionalAccessSessionControl {
    cloudAppSecurityType: cloudAppSecuritySessionControlType;
}
export interface conditionalAccessExternalTenants {
    membershipKind: conditionalAccessExternalTenantsMembershipKind;
}
export interface conditionalAccessAllExternalTenants extends conditionalAccessExternalTenants {
}
export interface conditionalAccessApplications {
    applicationFilter: conditionalAccessFilter;
    excludeApplications: Collection<string> | null;
    includeApplications: Collection<string> | null;
    includeAuthenticationContextClassReferences: Collection<string> | null;
    includeUserActions: Collection<string> | null;
}
export interface conditionalAccessFilter {
    mode: filterMode | null;
    rule: string | null;
}
export interface conditionalAccessClientApplications {
    excludeServicePrincipals: Collection<string> | null;
    includeServicePrincipals: Collection<string> | null;
    servicePrincipalFilter: conditionalAccessFilter;
}
export interface conditionalAccessConditionSet {
    applications: conditionalAccessApplications;
    clientApplications: conditionalAccessClientApplications;
    clientAppTypes: Collection<conditionalAccessClientApp> | null;
    devices: conditionalAccessDevices;
    locations: conditionalAccessLocations;
    platforms: conditionalAccessPlatforms;
    servicePrincipalRiskLevels: Collection<riskLevel> | null;
    signInRiskLevels: Collection<riskLevel> | null;
    userRiskLevels: Collection<riskLevel> | null;
    users: conditionalAccessUsers;
}
export interface conditionalAccessDevices {
    deviceFilter: conditionalAccessFilter;
}
export interface conditionalAccessLocations {
    excludeLocations: Collection<string> | null;
    includeLocations: Collection<string> | null;
}
export interface conditionalAccessPlatforms {
    excludePlatforms: Collection<conditionalAccessDevicePlatform> | null;
    includePlatforms: Collection<conditionalAccessDevicePlatform> | null;
}
export interface conditionalAccessUsers {
    excludeGroups: Collection<string> | null;
    excludeGuestsOrExternalUsers: conditionalAccessGuestsOrExternalUsers;
    excludeRoles: Collection<string> | null;
    excludeUsers: Collection<string> | null;
    includeGroups: Collection<string> | null;
    includeGuestsOrExternalUsers: conditionalAccessGuestsOrExternalUsers;
    includeRoles: Collection<string> | null;
    includeUsers: Collection<string> | null;
}
export interface conditionalAccessEnumeratedExternalTenants extends conditionalAccessExternalTenants {
    members: Collection<string> | null;
}
export interface conditionalAccessGrantControls {
    builtInControls: Collection<conditionalAccessGrantControl> | null;
    customAuthenticationFactors: Collection<string> | null;
    operator: string;
    termsOfUse: Collection<string> | null;
    authenticationStrength: authenticationStrengthPolicy;
}
export interface conditionalAccessGuestsOrExternalUsers {
    externalTenants: conditionalAccessExternalTenants;
    guestOrExternalUserTypes: conditionalAccessGuestOrExternalUserTypes | null;
}
export interface conditionalAccessPolicyDetail {
    conditions: conditionalAccessConditionSet | null;
    grantControls: conditionalAccessGrantControls;
    sessionControls: conditionalAccessSessionControls;
}
export interface conditionalAccessSessionControls {
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
export interface ipRange {
}
export interface iPv4CidrRange extends ipRange {
    cidrAddress: string | null;
}
export interface iPv6CidrRange extends ipRange {
    cidrAddress: string | null;
}
export interface riskServicePrincipalActivity {
    detail: riskDetail;
    riskEventTypes: Collection<string>;
}
export interface riskUserActivity {
    detail: riskDetail;
    riskEventTypes: Collection<string>;
}
export interface countryNamedLocationProps extends entityProps {
    countriesAndRegions: Collection<string> | null;
    countryLookupMethod: countryLookupMethodType;
    includeUnknownCountriesAndRegions: boolean | null;
}
export type countryNamedLocation = Entity<namedLocation, countryNamedLocationProps> & {
}
export interface identityProtectionRootProps extends entityProps {
    riskDetections: Collection<riskDetection>;
    riskyServicePrincipals: Collection<riskyServicePrincipal>;
    riskyUsers: Collection<riskyUser>;
    servicePrincipalRiskDetections: Collection<servicePrincipalRiskDetection>;
}
export type identityProtectionRoot = Entity<{}, identityProtectionRootProps> & {
}
export interface riskDetectionProps extends entityProps {
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
export type riskDetection = Entity<entity, riskDetectionProps> & {
}
export interface riskyServicePrincipalProps extends entityProps {
    appId: string;
    displayName: string;
    isEnabled: boolean;
    isProcessing: boolean;
    riskDetail: riskDetail;
    riskLastUpdatedDateTime: Date;
    riskLevel: riskLevel;
    riskState: riskState;
    servicePrincipalType: string;
    history: Collection<riskyServicePrincipalHistoryItem>;
}
export type riskyServicePrincipal = Entity<entity, riskyServicePrincipalProps> & {
}
export interface riskyUserProps extends entityProps {
    isDeleted: boolean;
    isProcessing: boolean;
    riskDetail: riskDetail;
    riskLastUpdatedDateTime: Date;
    riskLevel: riskLevel;
    riskState: riskState;
    userDisplayName: string;
    userPrincipalName: string;
    history: Collection<riskyUserHistoryItem>;
}
export type riskyUser = Entity<entity, riskyUserProps> & {
}
export interface servicePrincipalRiskDetectionProps extends entityProps {
    activity: activityType;
    activityDateTime: Date;
    additionalInfo: string;
    appId: string;
    correlationId: string;
    detectedDateTime: Date;
    detectionTimingType: riskDetectionTimingType;
    ipAddress: string;
    keyIds: Collection<string>;
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
export type servicePrincipalRiskDetection = Entity<entity, servicePrincipalRiskDetectionProps> & {
}
export interface ipNamedLocationProps extends entityProps {
    ipRanges: Collection<ipRange> | null;
    isTrusted: boolean | null;
}
export type ipNamedLocation = Entity<namedLocation, ipNamedLocationProps> & {
}
export interface riskyServicePrincipalHistoryItemProps extends entityProps {
    activity: riskServicePrincipalActivity;
    initiatedBy: string;
}
export type riskyServicePrincipalHistoryItem = Entity<riskyServicePrincipal, riskyServicePrincipalHistoryItemProps> & {
}
export interface riskyUserHistoryItemProps extends entityProps {
    activity: riskUserActivity;
    initiatedBy: string;
    userId: string;
}
export type riskyUserHistoryItem = Entity<riskyUser, riskyUserHistoryItemProps> & {
}
export interface accessPackageAnswer {
    displayValue: string;
    answeredQuestion: accessPackageQuestion;
}
export interface accessPackageQuestionProps extends entityProps {
    isAnswerEditable: boolean;
    isRequired: boolean;
    localizations: Collection<accessPackageLocalizedText>;
    sequence: number;
    text: string;
}
export type accessPackageQuestion = Entity<entity, accessPackageQuestionProps> & {
}
export interface accessPackageAnswerChoice {
    actualValue: string;
    localizations: Collection<accessPackageLocalizedText>;
    text: string;
}
export interface accessPackageLocalizedText {
    languageCode: string | null;
    text: string;
}
export interface accessPackageAnswerString extends accessPackageAnswer {
    value: string;
}
export interface accessPackageApprovalStage {
    durationBeforeAutomaticDenial: number;
    durationBeforeEscalation: number;
    escalationApprovers: Collection<subjectSet>;
    fallbackEscalationApprovers: Collection<subjectSet>;
    fallbackPrimaryApprovers: Collection<subjectSet>;
    isApproverJustificationRequired: boolean;
    isEscalationEnabled: boolean;
    primaryApprovers: Collection<subjectSet>;
}
export interface accessPackageAssignmentApprovalSettings {
    isApprovalRequiredForAdd: boolean;
    isApprovalRequiredForUpdate: boolean;
    stages: Collection<accessPackageApprovalStage>;
}
export interface accessPackageAssignmentRequestCallbackData extends customExtensionData {
    customExtensionStageInstanceDetail: string;
    customExtensionStageInstanceId: string;
    stage: accessPackageCustomExtensionStage;
    state: string;
}
export interface accessPackageAssignmentRequestorSettings {
    allowCustomAssignmentSchedule: boolean;
    enableOnBehalfRequestorsToAddAccess: boolean;
    enableOnBehalfRequestorsToRemoveAccess: boolean;
    enableOnBehalfRequestorsToUpdateAccess: boolean;
    enableTargetsToSelfAddAccess: boolean;
    enableTargetsToSelfRemoveAccess: boolean;
    enableTargetsToSelfUpdateAccess: boolean;
    onBehalfRequestors: Collection<subjectSet>;
}
export interface accessPackageAssignmentRequestRequirements {
    allowCustomAssignmentSchedule: boolean;
    isApprovalRequiredForAdd: boolean;
    isApprovalRequiredForUpdate: boolean;
    policyDescription: string;
    policyDisplayName: string;
    policyId: string;
    schedule: entitlementManagementSchedule;
    questions: Collection<accessPackageQuestion>;
}
export interface entitlementManagementSchedule {
    expiration: expirationPattern;
    recurrence: patternedRecurrence;
    startDateTime: Date;
}
export interface accessPackageAssignmentReviewSettings {
    expirationBehavior: accessReviewExpirationBehavior;
    fallbackReviewers: Collection<subjectSet>;
    isEnabled: boolean;
    isRecommendationEnabled: boolean;
    isReviewerJustificationRequired: boolean;
    isSelfReview: boolean;
    primaryReviewers: Collection<subjectSet>;
    schedule: entitlementManagementSchedule;
}
export interface accessPackageAutomaticRequestSettings {
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
export interface connectionInfo {
    url: string;
}
export interface customExtensionCalloutInstance {
    customExtensionId: string;
    detail: string;
    externalCorrelationId: string;
    id: string;
    status: customExtensionCalloutInstanceStatus;
}
export interface expirationPattern {
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
export interface accessPackageSubjectProps extends entityProps {
    displayName: string;
    email: string;
    objectId: string;
    onPremisesSecurityIdentifier: string;
    principalName: string;
    subjectType: accessPackageSubjectType;
    connectedOrganization: connectedOrganization;
}
export type accessPackageSubject = Entity<entity, accessPackageSubjectProps> & {
}
export interface customExtensionStageSettingProps extends entityProps {
    stage: accessPackageCustomExtensionStage | null;
    customExtension: customCalloutExtension;
}
export type customExtensionStageSetting = Entity<entity, customExtensionStageSettingProps> & {
}
export interface accessPackageAssignmentRequestWorkflowExtensionProps extends entityProps {
    callbackConfiguration: customExtensionCallbackConfiguration;
    createdBy: string;
    createdDateTime: Date;
    lastModifiedBy: string;
    lastModifiedDateTime: Date;
}
export type accessPackageAssignmentRequestWorkflowExtension = Entity<customCalloutExtension, accessPackageAssignmentRequestWorkflowExtensionProps> & {
}
export interface accessPackageAssignmentWorkflowExtensionProps extends entityProps {
    callbackConfiguration: customExtensionCallbackConfiguration;
    createdBy: string;
    createdDateTime: Date;
    lastModifiedBy: string;
    lastModifiedDateTime: Date;
}
export type accessPackageAssignmentWorkflowExtension = Entity<customCalloutExtension, accessPackageAssignmentWorkflowExtensionProps> & {
}
export interface accessPackageResourceRoleProps extends entityProps {
    description: string;
    displayName: string;
    originId: string;
    originSystem: string;
    resource: accessPackageResource;
}
export type accessPackageResourceRole = Entity<entity, accessPackageResourceRoleProps> & {
}
export interface accessPackageResourceScopeProps extends entityProps {
    description: string;
    displayName: string;
    isRootScope: boolean;
    originId: string;
    originSystem: string;
    resource: accessPackageResource;
}
export type accessPackageResourceScope = Entity<entity, accessPackageResourceScopeProps> & {
}
export interface accessPackageMultipleChoiceQuestionProps extends entityProps {
    choices: Collection<accessPackageAnswerChoice>;
    isMultipleSelectionAllowed: boolean;
}
export type accessPackageMultipleChoiceQuestion = Entity<accessPackageQuestion, accessPackageMultipleChoiceQuestionProps> & {
}
export interface accessPackageTextInputQuestionProps extends entityProps {
    isSingleLineQuestion: boolean;
    regexPattern: string;
}
export type accessPackageTextInputQuestion = Entity<accessPackageQuestion, accessPackageTextInputQuestionProps> & {
}
export interface identitySource {
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
export interface deviceAndAppManagementAssignmentTarget {
}
export interface allDevicesAssignmentTarget extends deviceAndAppManagementAssignmentTarget {
}
export interface allLicensedUsersAssignmentTarget extends deviceAndAppManagementAssignmentTarget {
}
export interface androidMinimumOperatingSystem {
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
export interface appConfigurationSettingItem {
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
export interface fileEncryptionInfo {
    encryptionKey: Buffer;
    fileDigest: Buffer;
    fileDigestAlgorithm: string;
    initializationVector: Buffer;
    mac: Buffer;
    macKey: Buffer;
    profileIdentifier: string;
}
export interface iosDeviceType {
    iPad: boolean | null;
    iPhoneAndIPod: boolean | null;
}
export interface mobileAppAssignmentSettings {
}
export interface iosLobAppAssignmentSettings extends mobileAppAssignmentSettings {
    isRemovable: boolean;
    uninstallOnDeviceRemoval: boolean;
    vpnConfigurationId: string;
}
export interface iosMinimumOperatingSystem {
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
export interface macOSIncludedApp {
    bundleId: string | null;
    bundleVersion: string | null;
}
export interface macOsLobAppAssignmentSettings extends mobileAppAssignmentSettings {
    uninstallOnDeviceRemoval: boolean;
}
export interface macOSLobChildApp {
    buildNumber: string;
    bundleId: string;
    versionNumber: string;
}
export interface macOSMinimumOperatingSystem {
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
export interface mimeContent {
    type: string;
    value: Buffer;
}
export interface mobileAppInstallTimeSettings {
    deadlineDateTime: Date;
    startDateTime: Date;
    useLocalTime: boolean | null;
}
export interface vppLicensingType {
    supportsDeviceLicensing: boolean | null;
    supportsUserLicensing: boolean | null;
}
export interface win32LobAppAssignmentSettings extends mobileAppAssignmentSettings {
    deliveryOptimizationPriority: win32LobAppDeliveryOptimizationPriority | null;
    installTimeSettings: mobileAppInstallTimeSettings;
    notifications: win32LobAppNotification | null;
    restartSettings: win32LobAppRestartSettings;
}
export interface win32LobAppRestartSettings {
    countdownDisplayBeforeRestartInMinutes: number | null;
    gracePeriodInMinutes: number | null;
    restartNotificationSnoozeDurationInMinutes: number;
}
export interface win32LobAppRule {
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
export interface win32LobAppInstallExperience {
    deviceRestartBehavior: win32LobAppRestartBehavior | null;
    runAsAccount: runAsAccountType | null;
}
export interface win32LobAppMsiInformation {
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
export interface win32LobAppReturnCode {
    returnCode: number | null;
    type: win32LobAppReturnCodeType | null;
}
export interface windowsAppXAppAssignmentSettings extends mobileAppAssignmentSettings {
    useDeviceContext: boolean | null;
}
export interface windowsMinimumOperatingSystem {
    v10_0: boolean | null;
    v8_0: boolean | null;
    v8_1: boolean | null;
}
export interface windowsUniversalAppXAppAssignmentSettings extends mobileAppAssignmentSettings {
    useDeviceContext: boolean | null;
}
export interface mobileAppProps extends entityProps {
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
    assignments: Collection<mobileAppAssignment>;
    categories: Collection<mobileAppCategory>;
}
export type mobileApp = Entity<entity, mobileAppProps> & {
    assign(): void;
}
export interface mobileLobAppProps extends entityProps {
    committedContentVersion: string;
    fileName: string;
    size: number | null;
    contentVersions: Collection<mobileAppContent>;
}
export type mobileLobApp = Entity<mobileApp, mobileLobAppProps> & {
}
export interface androidLobAppProps extends entityProps {
    minimumSupportedOperatingSystem: androidMinimumOperatingSystem;
    packageId: string;
    versionCode: string;
    versionName: string;
}
export type androidLobApp = Entity<mobileLobApp, androidLobAppProps> & {
}
export interface androidStoreAppProps extends entityProps {
    appStoreUrl: string;
    minimumSupportedOperatingSystem: androidMinimumOperatingSystem;
    packageId: string;
}
export type androidStoreApp = Entity<mobileApp, androidStoreAppProps> & {
}
export interface deviceAppManagementProps extends entityProps {
    isEnabledForMicrosoftStoreForBusiness: boolean | null;
    microsoftStoreForBusinessLanguage: string;
    microsoftStoreForBusinessLastCompletedApplicationSyncTime: Date | null;
    microsoftStoreForBusinessLastSuccessfulSyncDateTime: Date | null;
    managedEBooks: Collection<managedEBook>;
    mobileAppCategories: Collection<mobileAppCategory>;
    mobileAppConfigurations: Collection<managedDeviceMobileAppConfiguration>;
    mobileApps: Collection<mobileApp>;
    vppTokens: Collection<vppToken>;
    androidManagedAppProtections: Collection<androidManagedAppProtection>;
    defaultManagedAppProtections: Collection<defaultManagedAppProtection>;
    iosManagedAppProtections: Collection<iosManagedAppProtection>;
    managedAppPolicies: Collection<managedAppPolicy>;
    managedAppRegistrations: Collection<managedAppRegistration>;
    managedAppStatuses: Collection<managedAppStatus>;
    mdmWindowsInformationProtectionPolicies: Collection<mdmWindowsInformationProtectionPolicy>;
    targetedManagedAppConfigurations: Collection<targetedManagedAppConfiguration>;
    windowsInformationProtectionPolicies: Collection<windowsInformationProtectionPolicy>;
}
export type deviceAppManagement = Entity<entity, deviceAppManagementProps> & {
    syncMicrosoftStoreForBusinessApps(): void;
}
export interface managedEBookProps extends entityProps {
    createdDateTime: Date | null;
    description: string;
    displayName: string | null;
    informationUrl: string;
    largeCover: mimeContent;
    lastModifiedDateTime: Date | null;
    privacyInformationUrl: string;
    publishedDateTime: Date | null;
    publisher: string;
    assignments: Collection<managedEBookAssignment>;
    deviceStates: Collection<deviceInstallState>;
    installSummary: eBookInstallSummary;
    userStateSummary: Collection<userInstallStateSummary>;
}
export type managedEBook = Entity<entity, managedEBookProps> & {
    assign(): void;
}
export interface mobileAppCategoryProps extends entityProps {
    displayName: string;
    lastModifiedDateTime: Date | null;
}
export type mobileAppCategory = Entity<entity, mobileAppCategoryProps> & {
}
export interface managedDeviceMobileAppConfigurationProps extends entityProps {
    createdDateTime: Date | null;
    description: string;
    displayName: string | null;
    lastModifiedDateTime: Date | null;
    targetedMobileApps: Collection<string>;
    version: number | null;
    assignments: Collection<managedDeviceMobileAppConfigurationAssignment>;
    deviceStatuses: Collection<managedDeviceMobileAppConfigurationDeviceStatus>;
    deviceStatusSummary: managedDeviceMobileAppConfigurationDeviceSummary;
    userStatuses: Collection<managedDeviceMobileAppConfigurationUserStatus>;
    userStatusSummary: managedDeviceMobileAppConfigurationUserSummary;
}
export type managedDeviceMobileAppConfiguration = Entity<entity, managedDeviceMobileAppConfigurationProps> & {
    assign(): void;
}
export interface vppTokenProps extends entityProps {
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
export type vppToken = Entity<entity, vppTokenProps> & {
    syncLicenses(): vppToken;
}
export interface managedAppPolicyProps extends entityProps {
    createdDateTime: Date | null;
    description: string;
    displayName: string | null;
    lastModifiedDateTime: Date | null;
    version: string;
}
export type managedAppPolicy = Entity<entity, managedAppPolicyProps> & {
    targetApps(): void;
}
export interface managedAppProtectionProps extends entityProps {
    allowedDataStorageLocations: Collection<managedAppDataStorageLocation> | null;
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
export type managedAppProtection = Entity<managedAppPolicy, managedAppProtectionProps> & {
    targetApps(): void;
}
export interface targetedManagedAppProtectionProps extends entityProps {
    isAssigned: boolean | null;
    assignments: Collection<targetedManagedAppPolicyAssignment>;
}
export type targetedManagedAppProtection = Entity<managedAppProtection, targetedManagedAppProtectionProps> & {
    assign(): void;
    targetApps(): void;
}
export interface androidManagedAppProtectionProps extends entityProps {
    customBrowserDisplayName: string;
    customBrowserPackageId: string;
    deployedAppCount: number | null;
    disableAppEncryptionIfDeviceEncryptionIsEnabled: boolean | null;
    encryptAppData: boolean | null;
    minimumRequiredPatchVersion: string;
    minimumWarningPatchVersion: string;
    screenCaptureBlocked: boolean | null;
    apps: Collection<managedMobileApp>;
    deploymentSummary: managedAppPolicyDeploymentSummary;
}
export type androidManagedAppProtection = Entity<targetedManagedAppProtection, androidManagedAppProtectionProps> & {
}
export interface defaultManagedAppProtectionProps extends entityProps {
    appDataEncryptionType: managedAppDataEncryptionType | null;
    customSettings: Collection<keyValuePair> | null;
    deployedAppCount: number | null;
    disableAppEncryptionIfDeviceEncryptionIsEnabled: boolean | null;
    encryptAppData: boolean | null;
    faceIdBlocked: boolean | null;
    minimumRequiredPatchVersion: string;
    minimumRequiredSdkVersion: string;
    minimumWarningPatchVersion: string;
    screenCaptureBlocked: boolean | null;
    apps: Collection<managedMobileApp>;
    deploymentSummary: managedAppPolicyDeploymentSummary;
}
export type defaultManagedAppProtection = Entity<managedAppProtection, defaultManagedAppProtectionProps> & {
}
export interface iosManagedAppProtectionProps extends entityProps {
    appDataEncryptionType: managedAppDataEncryptionType | null;
    customBrowserProtocol: string;
    deployedAppCount: number | null;
    faceIdBlocked: boolean | null;
    minimumRequiredSdkVersion: string;
    apps: Collection<managedMobileApp>;
    deploymentSummary: managedAppPolicyDeploymentSummary;
}
export type iosManagedAppProtection = Entity<targetedManagedAppProtection, iosManagedAppProtectionProps> & {
}
export interface managedAppStatusProps extends entityProps {
    displayName: string;
    version: string;
}
export type managedAppStatus = Entity<entity, managedAppStatusProps> & {
}
export interface windowsInformationProtectionProps extends entityProps {
    azureRightsManagementServicesAllowed: boolean | null;
    dataRecoveryCertificate: windowsInformationProtectionDataRecoveryCertificate;
    enforcementLevel: windowsInformationProtectionEnforcementLevel | null;
    enterpriseDomain: string;
    enterpriseInternalProxyServers: Collection<windowsInformationProtectionResourceCollection>;
    enterpriseIPRanges: Collection<windowsInformationProtectionIPRangeCollection>;
    enterpriseIPRangesAreAuthoritative: boolean | null;
    enterpriseNetworkDomainNames: Collection<windowsInformationProtectionResourceCollection>;
    enterpriseProtectedDomainNames: Collection<windowsInformationProtectionResourceCollection>;
    enterpriseProxiedDomains: Collection<windowsInformationProtectionProxiedDomainCollection>;
    enterpriseProxyServers: Collection<windowsInformationProtectionResourceCollection>;
    enterpriseProxyServersAreAuthoritative: boolean | null;
    exemptApps: Collection<windowsInformationProtectionApp>;
    iconsVisible: boolean | null;
    indexingEncryptedStoresOrItemsBlocked: boolean | null;
    isAssigned: boolean | null;
    neutralDomainResources: Collection<windowsInformationProtectionResourceCollection>;
    protectedApps: Collection<windowsInformationProtectionApp>;
    protectionUnderLockConfigRequired: boolean | null;
    revokeOnUnenrollDisabled: boolean | null;
    rightsManagementServicesTemplateId: string;
    smbAutoEncryptedFileExtensions: Collection<windowsInformationProtectionResourceCollection>;
    assignments: Collection<targetedManagedAppPolicyAssignment>;
    exemptAppLockerFiles: Collection<windowsInformationProtectionAppLockerFile>;
    protectedAppLockerFiles: Collection<windowsInformationProtectionAppLockerFile>;
}
export type windowsInformationProtection = Entity<managedAppPolicy, windowsInformationProtectionProps> & {
    assign(): void;
}
export interface mdmWindowsInformationProtectionPolicyProps { }
export type mdmWindowsInformationProtectionPolicy = Entity<windowsInformationProtection, mdmWindowsInformationProtectionPolicyProps> & {
}
export interface managedAppConfigurationProps extends entityProps {
    customSettings: Collection<keyValuePair> | null;
}
export type managedAppConfiguration = Entity<managedAppPolicy, managedAppConfigurationProps> & {
}
export interface targetedManagedAppConfigurationProps extends entityProps {
    deployedAppCount: number | null;
    isAssigned: boolean | null;
    apps: Collection<managedMobileApp>;
    assignments: Collection<targetedManagedAppPolicyAssignment>;
    deploymentSummary: managedAppPolicyDeploymentSummary;
}
export type targetedManagedAppConfiguration = Entity<managedAppConfiguration, targetedManagedAppConfigurationProps> & {
    assign(): void;
    targetApps(): void;
}
export interface windowsInformationProtectionPolicyProps extends entityProps {
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
export type windowsInformationProtectionPolicy = Entity<windowsInformationProtection, windowsInformationProtectionPolicyProps> & {
}
export interface enterpriseCodeSigningCertificateProps extends entityProps {
    content: Buffer;
    expirationDateTime: Date | null;
    issuer: string;
    issuerName: string;
    status: certificateStatus | null;
    subject: string;
    subjectName: string;
    uploadDateTime: Date | null;
}
export type enterpriseCodeSigningCertificate = Entity<entity, enterpriseCodeSigningCertificateProps> & {
}
export interface iosiPadOSWebClipProps extends entityProps {
    appUrl: string;
    useManagedBrowser: boolean | null;
}
export type iosiPadOSWebClip = Entity<mobileApp, iosiPadOSWebClipProps> & {
}
export interface iosLobAppProps extends entityProps {
    applicableDeviceType: iosDeviceType | null;
    buildNumber: string;
    bundleId: string;
    expirationDateTime: Date;
    minimumSupportedOperatingSystem: iosMinimumOperatingSystem;
    versionNumber: string;
}
export type iosLobApp = Entity<mobileLobApp, iosLobAppProps> & {
}
export interface iosLobAppProvisioningConfigurationAssignmentProps extends entityProps {
    target: deviceAndAppManagementAssignmentTarget;
}
export type iosLobAppProvisioningConfigurationAssignment = Entity<entity, iosLobAppProvisioningConfigurationAssignmentProps> & {
}
export interface iosMobileAppConfigurationProps extends entityProps {
    encodedSettingXml: Buffer;
    settings: Collection<appConfigurationSettingItem>;
}
export type iosMobileAppConfiguration = Entity<managedDeviceMobileAppConfiguration, iosMobileAppConfigurationProps> & {
}
export interface iosStoreAppProps extends entityProps {
    applicableDeviceType: iosDeviceType | null;
    appStoreUrl: string;
    bundleId: string;
    minimumSupportedOperatingSystem: iosMinimumOperatingSystem;
}
export type iosStoreApp = Entity<mobileApp, iosStoreAppProps> & {
}
export interface iosVppAppProps extends entityProps {
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
export type iosVppApp = Entity<mobileApp, iosVppAppProps> & {
}
export interface macOSDmgAppProps extends entityProps {
    ignoreVersionDetection: boolean | null;
    includedApps: Collection<macOSIncludedApp> | null;
    minimumSupportedOperatingSystem: macOSMinimumOperatingSystem;
    primaryBundleId: string | null;
    primaryBundleVersion: string | null;
}
export type macOSDmgApp = Entity<mobileLobApp, macOSDmgAppProps> & {
}
export interface macOSLobAppProps extends entityProps {
    buildNumber: string;
    bundleId: string;
    childApps: Collection<macOSLobChildApp>;
    ignoreVersionDetection: boolean | null;
    installAsManaged: boolean | null;
    md5Hash: Collection<string>;
    md5HashChunkSize: number | null;
    minimumSupportedOperatingSystem: macOSMinimumOperatingSystem;
    versionNumber: string;
}
export type macOSLobApp = Entity<mobileLobApp, macOSLobAppProps> & {
}
export interface macOSMicrosoftDefenderAppProps { }
export type macOSMicrosoftDefenderApp = Entity<mobileApp, macOSMicrosoftDefenderAppProps> & {
}
export interface macOSMicrosoftEdgeAppProps extends entityProps {
    channel: microsoftEdgeChannel | null;
}
export type macOSMicrosoftEdgeApp = Entity<mobileApp, macOSMicrosoftEdgeAppProps> & {
}
export interface macOSOfficeSuiteAppProps { }
export type macOSOfficeSuiteApp = Entity<mobileApp, macOSOfficeSuiteAppProps> & {
}
export interface managedAppProps extends entityProps {
    appAvailability: managedAppAvailability | null;
    version: string;
}
export type managedApp = Entity<mobileApp, managedAppProps> & {
}
export interface managedMobileLobAppProps extends entityProps {
    committedContentVersion: string;
    fileName: string;
    size: number | null;
    contentVersions: Collection<mobileAppContent>;
}
export type managedMobileLobApp = Entity<managedApp, managedMobileLobAppProps> & {
}
export interface managedAndroidLobAppProps extends entityProps {
    minimumSupportedOperatingSystem: androidMinimumOperatingSystem;
    packageId: string;
    versionCode: string;
    versionName: string;
}
export type managedAndroidLobApp = Entity<managedMobileLobApp, managedAndroidLobAppProps> & {
}
export interface managedAndroidStoreAppProps extends entityProps {
    appStoreUrl: string | null;
    minimumSupportedOperatingSystem: androidMinimumOperatingSystem | null;
    packageId: string;
}
export type managedAndroidStoreApp = Entity<managedApp, managedAndroidStoreAppProps> & {
}
export interface managedDeviceMobileAppConfigurationAssignmentProps extends entityProps {
    target: deviceAndAppManagementAssignmentTarget;
}
export type managedDeviceMobileAppConfigurationAssignment = Entity<entity, managedDeviceMobileAppConfigurationAssignmentProps> & {
}
export interface managedDeviceMobileAppConfigurationDeviceStatusProps extends entityProps {
    complianceGracePeriodExpirationDateTime: Date | null;
    deviceDisplayName: string;
    deviceModel: string;
    lastReportedDateTime: Date | null;
    status: complianceStatus | null;
    userName: string;
    userPrincipalName: string;
}
export type managedDeviceMobileAppConfigurationDeviceStatus = Entity<entity, managedDeviceMobileAppConfigurationDeviceStatusProps> & {
}
export interface managedDeviceMobileAppConfigurationDeviceSummaryProps extends entityProps {
    configurationVersion: number | null;
    errorCount: number | null;
    failedCount: number | null;
    lastUpdateDateTime: Date | null;
    notApplicableCount: number | null;
    pendingCount: number | null;
    successCount: number | null;
}
export type managedDeviceMobileAppConfigurationDeviceSummary = Entity<entity, managedDeviceMobileAppConfigurationDeviceSummaryProps> & {
}
export interface managedDeviceMobileAppConfigurationUserStatusProps extends entityProps {
    devicesCount: number | null;
    lastReportedDateTime: Date | null;
    status: complianceStatus | null;
    userDisplayName: string;
    userPrincipalName: string;
}
export type managedDeviceMobileAppConfigurationUserStatus = Entity<entity, managedDeviceMobileAppConfigurationUserStatusProps> & {
}
export interface managedDeviceMobileAppConfigurationUserSummaryProps extends entityProps {
    configurationVersion: number | null;
    errorCount: number | null;
    failedCount: number | null;
    lastUpdateDateTime: Date | null;
    notApplicableCount: number | null;
    pendingCount: number | null;
    successCount: number | null;
}
export type managedDeviceMobileAppConfigurationUserSummary = Entity<entity, managedDeviceMobileAppConfigurationUserSummaryProps> & {
}
export interface managedIOSLobAppProps extends entityProps {
    applicableDeviceType: iosDeviceType | null;
    buildNumber: string;
    bundleId: string;
    expirationDateTime: Date;
    minimumSupportedOperatingSystem: iosMinimumOperatingSystem;
    versionNumber: string;
}
export type managedIOSLobApp = Entity<managedMobileLobApp, managedIOSLobAppProps> & {
}
export interface managedIOSStoreAppProps extends entityProps {
    applicableDeviceType: iosDeviceType | null;
    appStoreUrl: string | null;
    bundleId: string;
    minimumSupportedOperatingSystem: iosMinimumOperatingSystem | null;
}
export type managedIOSStoreApp = Entity<managedApp, managedIOSStoreAppProps> & {
}
export interface mobileAppContentProps extends entityProps {
    containedApps: Collection<mobileContainedApp>;
    files: Collection<mobileAppContentFile>;
}
export type mobileAppContent = Entity<entity, mobileAppContentProps> & {
}
export interface microsoftStoreForBusinessAppProps extends entityProps {
    licenseType: microsoftStoreForBusinessLicenseType | null;
    packageIdentityName: string;
    productKey: string;
    totalLicenseCount: number | null;
    usedLicenseCount: number | null;
}
export type microsoftStoreForBusinessApp = Entity<mobileApp, microsoftStoreForBusinessAppProps> & {
}
export interface mobileAppAssignmentProps extends entityProps {
    intent: installIntent | null;
    settings: mobileAppAssignmentSettings;
    target: deviceAndAppManagementAssignmentTarget;
}
export type mobileAppAssignment = Entity<entity, mobileAppAssignmentProps> & {
}
export interface mobileContainedAppProps { }
export type mobileContainedApp = Entity<entity, mobileContainedAppProps> & {
}
export interface mobileAppContentFileProps extends entityProps {
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
export type mobileAppContentFile = Entity<entity, mobileAppContentFileProps> & {
    commit(): void;
    renewUpload(): void;
}
export interface webAppProps extends entityProps {
    appUrl: string;
    useManagedBrowser: boolean | null;
}
export type webApp = Entity<mobileApp, webAppProps> & {
}
export interface win32LobAppProps extends entityProps {
    applicableArchitectures: windowsArchitecture | null;
    installCommandLine: string;
    installExperience: win32LobAppInstallExperience;
    minimumCpuSpeedInMHz: number;
    minimumFreeDiskSpaceInMB: number;
    minimumMemoryInMB: number;
    minimumNumberOfProcessors: number;
    minimumSupportedWindowsRelease: string;
    msiInformation: win32LobAppMsiInformation;
    returnCodes: Collection<win32LobAppReturnCode>;
    rules: Collection<win32LobAppRule>;
    setupFilePath: string;
    uninstallCommandLine: string;
}
export type win32LobApp = Entity<mobileLobApp, win32LobAppProps> & {
}
export interface windowsAppXProps extends entityProps {
    applicableArchitectures: windowsArchitecture | null;
    identityName: string;
    identityPublisherHash: string | null;
    identityResourceIdentifier: string;
    identityVersion: string;
    isBundle: boolean | null;
    minimumSupportedOperatingSystem: windowsMinimumOperatingSystem | null;
}
export type windowsAppX = Entity<mobileLobApp, windowsAppXProps> & {
}
export interface windowsMicrosoftEdgeAppProps extends entityProps {
    channel: microsoftEdgeChannel | null;
    displayLanguageLocale: string;
}
export type windowsMicrosoftEdgeApp = Entity<mobileApp, windowsMicrosoftEdgeAppProps> & {
}
export interface windowsMobileMSIProps extends entityProps {
    commandLine: string;
    ignoreVersionDetection: boolean | null;
    productCode: string;
    productVersion: string;
}
export type windowsMobileMSI = Entity<mobileLobApp, windowsMobileMSIProps> & {
}
export interface windowsUniversalAppXProps extends entityProps {
    applicableArchitectures: windowsArchitecture | null;
    applicableDeviceTypes: windowsDeviceType | null;
    identityName: string;
    identityPublisherHash: string | null;
    identityResourceIdentifier: string;
    identityVersion: string;
    isBundle: boolean | null;
    minimumSupportedOperatingSystem: windowsMinimumOperatingSystem | null;
    committedContainedApps: Collection<mobileContainedApp>;
}
export type windowsUniversalAppX = Entity<mobileLobApp, windowsUniversalAppXProps> & {
}
export interface windowsUniversalAppXContainedAppProps extends entityProps {
    appUserModelId: string;
}
export type windowsUniversalAppXContainedApp = Entity<mobileContainedApp, windowsUniversalAppXContainedAppProps> & {
}
export interface windowsWebAppProps extends entityProps {
    appUrl: string;
}
export type windowsWebApp = Entity<mobileApp, windowsWebAppProps> & {
}
export interface auditActor {
    applicationDisplayName: string;
    applicationId: string;
    auditActorType: string;
    ipAddress: string;
    servicePrincipalName: string;
    userId: string;
    userPermissions: Collection<string>;
    userPrincipalName: string;
}
export interface auditProperty {
    displayName: string;
    newValue: string;
    oldValue: string;
}
export interface auditResource {
    auditResourceType: string;
    displayName: string;
    modifiedProperties: Collection<auditProperty>;
    resourceId: string;
}
export interface auditEventProps extends entityProps {
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
    resources: Collection<auditResource>;
}
export type auditEvent = Entity<entity, auditEventProps> & {
}
export interface deviceManagementProps extends entityProps {
    intuneAccountId: string | null;
    settings: deviceManagementSettings;
    intuneBrand: intuneBrand;
    deviceProtectionOverview: deviceProtectionOverview;
    subscriptionState: deviceManagementSubscriptionState | null;
    userExperienceAnalyticsSettings: userExperienceAnalyticsSettings;
    windowsMalwareOverview: windowsMalwareOverview;
    termsAndConditions: Collection<termsAndConditions>;
    auditEvents: Collection<auditEvent>;
    deviceCompliancePolicies: Collection<deviceCompliancePolicy>;
    deviceCompliancePolicyDeviceStateSummary: deviceCompliancePolicyDeviceStateSummary;
    deviceCompliancePolicySettingStateSummaries: Collection<deviceCompliancePolicySettingStateSummary>;
    deviceConfigurationDeviceStateSummaries: deviceConfigurationDeviceStateSummary;
    deviceConfigurations: Collection<deviceConfiguration>;
    iosUpdateStatuses: Collection<iosUpdateDeviceStatus>;
    softwareUpdateStatusSummary: softwareUpdateStatusSummary;
    complianceManagementPartners: Collection<complianceManagementPartner>;
    conditionalAccessSettings: onPremisesConditionalAccessSettings;
    deviceCategories: Collection<deviceCategory>;
    deviceEnrollmentConfigurations: Collection<deviceEnrollmentConfiguration>;
    deviceManagementPartners: Collection<deviceManagementPartner>;
    exchangeConnectors: Collection<deviceManagementExchangeConnector>;
    mobileThreatDefenseConnectors: Collection<mobileThreatDefenseConnector>;
    applePushNotificationCertificate: applePushNotificationCertificate;
    detectedApps: Collection<detectedApp>;
    managedDeviceOverview: managedDeviceOverview;
    managedDevices: Collection<managedDevice>;
    mobileAppTroubleshootingEvents: Collection<mobileAppTroubleshootingEvent>;
    userExperienceAnalyticsAppHealthApplicationPerformance: Collection<userExperienceAnalyticsAppHealthApplicationPerformance>;
    userExperienceAnalyticsAppHealthApplicationPerformanceByAppVersionDetails: Collection<userExperienceAnalyticsAppHealthAppPerformanceByAppVersionDetails>;
    userExperienceAnalyticsAppHealthApplicationPerformanceByAppVersionDeviceId: Collection<userExperienceAnalyticsAppHealthAppPerformanceByAppVersionDeviceId>;
    userExperienceAnalyticsAppHealthApplicationPerformanceByOSVersion: Collection<userExperienceAnalyticsAppHealthAppPerformanceByOSVersion>;
    userExperienceAnalyticsAppHealthDeviceModelPerformance: Collection<userExperienceAnalyticsAppHealthDeviceModelPerformance>;
    userExperienceAnalyticsAppHealthDevicePerformance: Collection<userExperienceAnalyticsAppHealthDevicePerformance>;
    userExperienceAnalyticsAppHealthDevicePerformanceDetails: Collection<userExperienceAnalyticsAppHealthDevicePerformanceDetails>;
    userExperienceAnalyticsAppHealthOSVersionPerformance: Collection<userExperienceAnalyticsAppHealthOSVersionPerformance>;
    userExperienceAnalyticsAppHealthOverview: userExperienceAnalyticsCategory;
    userExperienceAnalyticsBaselines: Collection<userExperienceAnalyticsBaseline>;
    userExperienceAnalyticsCategories: Collection<userExperienceAnalyticsCategory>;
    userExperienceAnalyticsDevicePerformance: Collection<userExperienceAnalyticsDevicePerformance>;
    userExperienceAnalyticsDeviceScores: Collection<userExperienceAnalyticsDeviceScores>;
    userExperienceAnalyticsDeviceStartupHistory: Collection<userExperienceAnalyticsDeviceStartupHistory>;
    userExperienceAnalyticsDeviceStartupProcesses: Collection<userExperienceAnalyticsDeviceStartupProcess>;
    userExperienceAnalyticsDeviceStartupProcessPerformance: Collection<userExperienceAnalyticsDeviceStartupProcessPerformance>;
    userExperienceAnalyticsMetricHistory: Collection<userExperienceAnalyticsMetricHistory>;
    userExperienceAnalyticsModelScores: Collection<userExperienceAnalyticsModelScores>;
    userExperienceAnalyticsOverview: userExperienceAnalyticsOverview;
    userExperienceAnalyticsScoreHistory: Collection<userExperienceAnalyticsScoreHistory>;
    userExperienceAnalyticsWorkFromAnywhereHardwareReadinessMetric: userExperienceAnalyticsWorkFromAnywhereHardwareReadinessMetric;
    userExperienceAnalyticsWorkFromAnywhereMetrics: Collection<userExperienceAnalyticsWorkFromAnywhereMetric>;
    userExperienceAnalyticsWorkFromAnywhereModelPerformance: Collection<userExperienceAnalyticsWorkFromAnywhereModelPerformance>;
    windowsMalwareInformation: Collection<windowsMalwareInformation>;
    importedWindowsAutopilotDeviceIdentities: Collection<importedWindowsAutopilotDeviceIdentity>;
    windowsAutopilotDeviceIdentities: Collection<windowsAutopilotDeviceIdentity>;
    notificationMessageTemplates: Collection<notificationMessageTemplate>;
    resourceOperations: Collection<resourceOperation>;
    roleAssignments: Collection<deviceAndAppManagementRoleAssignment>;
    roleDefinitions: Collection<roleDefinition>;
    remoteAssistancePartners: Collection<remoteAssistancePartner>;
    reports: deviceManagementReports;
    telecomExpenseManagementPartners: Collection<telecomExpenseManagementPartner>;
    troubleshootingEvents: Collection<deviceManagementTroubleshootingEvent>;
    windowsInformationProtectionAppLearningSummaries: Collection<windowsInformationProtectionAppLearningSummary>;
    windowsInformationProtectionNetworkLearningSummaries: Collection<windowsInformationProtectionNetworkLearningSummary>;
}
export type deviceManagement = Entity<entity, deviceManagementProps> & {
    verifyWindowsEnrollmentAutoDiscovery(domainName: string): boolean;
    userExperienceAnalyticsSummarizeWorkFromAnywhereDevices(): userExperienceAnalyticsWorkFromAnywhereDevicesSummary;
    getEffectivePermissions(scope: string): Collection<rolePermission>;
}
export interface termsAndConditionsProps extends entityProps {
    acceptanceStatement: string;
    bodyText: string;
    createdDateTime: Date | null;
    description: string;
    displayName: string | null;
    lastModifiedDateTime: Date | null;
    title: string;
    version: number | null;
    acceptanceStatuses: Collection<termsAndConditionsAcceptanceStatus>;
    assignments: Collection<termsAndConditionsAssignment>;
}
export type termsAndConditions = Entity<entity, termsAndConditionsProps> & {
}
export interface deviceManagementSettings {
    deviceComplianceCheckinThresholdDays: number | null;
    isScheduledActionEnabled: boolean | null;
    secureByDefault: boolean | null;
}
export interface deviceCompliancePolicyProps extends entityProps {
    createdDateTime: Date | null;
    description: string;
    displayName: string | null;
    lastModifiedDateTime: Date | null;
    version: number | null;
    assignments: Collection<deviceCompliancePolicyAssignment>;
    deviceSettingStateSummaries: Collection<settingStateDeviceSummary>;
    deviceStatuses: Collection<deviceComplianceDeviceStatus>;
    deviceStatusOverview: deviceComplianceDeviceOverview;
    scheduledActionsForRule: Collection<deviceComplianceScheduledActionForRule>;
    userStatuses: Collection<deviceComplianceUserStatus>;
    userStatusOverview: deviceComplianceUserOverview;
}
export type deviceCompliancePolicy = Entity<entity, deviceCompliancePolicyProps> & {
    assign(assignments: Collection<deviceCompliancePolicyAssignment>): Collection<deviceCompliancePolicyAssignment>;
    scheduleActionsForRules(): void;
}
export interface deviceCompliancePolicyDeviceStateSummaryProps extends entityProps {
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
export type deviceCompliancePolicyDeviceStateSummary = Entity<entity, deviceCompliancePolicyDeviceStateSummaryProps> & {
}
export interface deviceCompliancePolicySettingStateSummaryProps extends entityProps {
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
    deviceComplianceSettingStates: Collection<deviceComplianceSettingState>;
}
export type deviceCompliancePolicySettingStateSummary = Entity<entity, deviceCompliancePolicySettingStateSummaryProps> & {
}
export interface deviceConfigurationDeviceStateSummaryProps extends entityProps {
    compliantDeviceCount: number | null;
    conflictDeviceCount: number | null;
    errorDeviceCount: number | null;
    nonCompliantDeviceCount: number | null;
    notApplicableDeviceCount: number | null;
    remediatedDeviceCount: number | null;
    unknownDeviceCount: number | null;
}
export type deviceConfigurationDeviceStateSummary = Entity<entity, deviceConfigurationDeviceStateSummaryProps> & {
}
export interface deviceConfigurationProps extends entityProps {
    createdDateTime: Date | null;
    description: string;
    displayName: string | null;
    lastModifiedDateTime: Date | null;
    version: number | null;
    assignments: Collection<deviceConfigurationAssignment>;
    deviceSettingStateSummaries: Collection<settingStateDeviceSummary>;
    deviceStatuses: Collection<deviceConfigurationDeviceStatus>;
    deviceStatusOverview: deviceConfigurationDeviceOverview;
    userStatuses: Collection<deviceConfigurationUserStatus>;
    userStatusOverview: deviceConfigurationUserOverview;
}
export type deviceConfiguration = Entity<entity, deviceConfigurationProps> & {
    assign(assignments: Collection<deviceConfigurationAssignment>): Collection<deviceConfigurationAssignment>;
    getOmaSettingPlainTextValue(secretReferenceValueId: string): string;
}
export interface iosUpdateDeviceStatusProps extends entityProps {
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
export type iosUpdateDeviceStatus = Entity<entity, iosUpdateDeviceStatusProps> & {
}
export interface softwareUpdateStatusSummaryProps extends entityProps {
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
export type softwareUpdateStatusSummary = Entity<entity, softwareUpdateStatusSummaryProps> & {
}
export interface intuneBrand {
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
export interface complianceManagementPartnerProps extends entityProps {
    androidEnrollmentAssignments: Collection<complianceManagementPartnerAssignment>;
    androidOnboarded: boolean | null;
    displayName: string;
    iosEnrollmentAssignments: Collection<complianceManagementPartnerAssignment>;
    iosOnboarded: boolean | null;
    lastHeartbeatDateTime: Date | null;
    macOsEnrollmentAssignments: Collection<complianceManagementPartnerAssignment>;
    macOsOnboarded: boolean | null;
    partnerState: deviceManagementPartnerTenantState | null;
}
export type complianceManagementPartner = Entity<entity, complianceManagementPartnerProps> & {
}
export interface onPremisesConditionalAccessSettingsProps extends entityProps {
    enabled: boolean | null;
    excludedGroups: Collection<string> | null;
    includedGroups: Collection<string> | null;
    overrideDefaultRule: boolean | null;
}
export type onPremisesConditionalAccessSettings = Entity<entity, onPremisesConditionalAccessSettingsProps> & {
}
export interface deviceCategoryProps extends entityProps {
    description: string;
    displayName: string;
}
export type deviceCategory = Entity<entity, deviceCategoryProps> & {
}
export interface deviceEnrollmentConfigurationProps extends entityProps {
    createdDateTime: Date | null;
    description: string;
    displayName: string;
    lastModifiedDateTime: Date | null;
    priority: number | null;
    version: number | null;
    assignments: Collection<enrollmentConfigurationAssignment>;
}
export type deviceEnrollmentConfiguration = Entity<entity, deviceEnrollmentConfigurationProps> & {
    assign(): void;
    setPriority(): void;
}
export interface deviceManagementPartnerProps extends entityProps {
    displayName: string;
    groupsRequiringPartnerEnrollment: Collection<deviceManagementPartnerAssignment>;
    isConfigured: boolean | null;
    lastHeartbeatDateTime: Date | null;
    partnerAppType: deviceManagementPartnerAppType | null;
    partnerState: deviceManagementPartnerTenantState | null;
    singleTenantAppId: string;
    whenPartnerDevicesWillBeMarkedAsNonCompliantDateTime: Date;
    whenPartnerDevicesWillBeRemovedDateTime: Date;
}
export type deviceManagementPartner = Entity<entity, deviceManagementPartnerProps> & {
    terminate(): void;
}
export interface deviceManagementExchangeConnectorProps extends entityProps {
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
export type deviceManagementExchangeConnector = Entity<entity, deviceManagementExchangeConnectorProps> & {
    sync(): void;
}
export interface mobileThreatDefenseConnectorProps extends entityProps {
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
export type mobileThreatDefenseConnector = Entity<entity, mobileThreatDefenseConnectorProps> & {
}
export interface deviceProtectionOverview {
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
export interface userExperienceAnalyticsSettings {
    configurationManagerDataConnectorConfigured: boolean | null;
}
export interface windowsMalwareOverview {
    malwareCategorySummary: Collection<windowsMalwareCategoryCount>;
    malwareDetectedDeviceCount: number | null;
    malwareExecutionStateSummary: Collection<windowsMalwareExecutionStateCount>;
    malwareNameSummary: Collection<windowsMalwareNameCount>;
    malwareSeveritySummary: Collection<windowsMalwareSeverityCount>;
    malwareStateSummary: Collection<windowsMalwareStateCount>;
    osVersionsSummary: Collection<osVersionCount>;
    totalDistinctMalwareCount: number | null;
    totalMalwareCount: number | null;
}
export interface applePushNotificationCertificateProps extends entityProps {
    appleIdentifier: string;
    certificate: string;
    certificateSerialNumber: string;
    certificateUploadFailureReason: string;
    certificateUploadStatus: string;
    expirationDateTime: Date | null;
    lastModifiedDateTime: Date | null;
    topicIdentifier: string;
}
export type applePushNotificationCertificate = Entity<entity, applePushNotificationCertificateProps> & {
    downloadApplePushNotificationCertificateSigningRequest(): string;
}
export interface detectedAppProps extends entityProps {
    deviceCount: number | null;
    displayName: string;
    platform: detectedAppPlatformType | null;
    publisher: string;
    sizeInByte: number | null;
    version: string;
    managedDevices: Collection<managedDevice>;
}
export type detectedApp = Entity<entity, detectedAppProps> & {
}
export interface managedDeviceOverviewProps extends entityProps {
    deviceExchangeAccessStateSummary: deviceExchangeAccessStateSummary;
    deviceOperatingSystemSummary: deviceOperatingSystemSummary;
    dualEnrolledDeviceCount: number | null;
    enrolledDeviceCount: number | null;
    mdmEnrolledCount: number | null;
}
export type managedDeviceOverview = Entity<entity, managedDeviceOverviewProps> & {
}
export interface mobileAppTroubleshootingEventProps extends entityProps {
    appLogCollectionRequests: Collection<appLogCollectionRequest>;
}
export type mobileAppTroubleshootingEvent = Entity<entity, mobileAppTroubleshootingEventProps> & {
}
export interface userExperienceAnalyticsAppHealthApplicationPerformanceProps extends entityProps {
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
export type userExperienceAnalyticsAppHealthApplicationPerformance = Entity<entity, userExperienceAnalyticsAppHealthApplicationPerformanceProps> & {
}
export interface userExperienceAnalyticsAppHealthAppPerformanceByAppVersionDetailsProps extends entityProps {
    appCrashCount: number | null;
    appDisplayName: string;
    appName: string;
    appPublisher: string;
    appVersion: string;
    deviceCountWithCrashes: number | null;
    isLatestUsedVersion: boolean | null;
    isMostUsedVersion: boolean | null;
}
export type userExperienceAnalyticsAppHealthAppPerformanceByAppVersionDetails = Entity<entity, userExperienceAnalyticsAppHealthAppPerformanceByAppVersionDetailsProps> & {
}
export interface userExperienceAnalyticsAppHealthAppPerformanceByAppVersionDeviceIdProps extends entityProps {
    appCrashCount: number | null;
    appDisplayName: string;
    appName: string;
    appPublisher: string;
    appVersion: string;
    deviceDisplayName: string;
    deviceId: string;
    processedDateTime: Date | null;
}
export type userExperienceAnalyticsAppHealthAppPerformanceByAppVersionDeviceId = Entity<entity, userExperienceAnalyticsAppHealthAppPerformanceByAppVersionDeviceIdProps> & {
}
export interface userExperienceAnalyticsAppHealthAppPerformanceByOSVersionProps extends entityProps {
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
export type userExperienceAnalyticsAppHealthAppPerformanceByOSVersion = Entity<entity, userExperienceAnalyticsAppHealthAppPerformanceByOSVersionProps> & {
}
export interface userExperienceAnalyticsAppHealthDeviceModelPerformanceProps extends entityProps {
    activeDeviceCount: number | null;
    deviceManufacturer: string;
    deviceModel: string;
    healthStatus: userExperienceAnalyticsHealthState | null;
    meanTimeToFailureInMinutes: number | null;
    modelAppHealthScore: number | null;
}
export type userExperienceAnalyticsAppHealthDeviceModelPerformance = Entity<entity, userExperienceAnalyticsAppHealthDeviceModelPerformanceProps> & {
}
export interface userExperienceAnalyticsAppHealthDevicePerformanceProps extends entityProps {
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
export type userExperienceAnalyticsAppHealthDevicePerformance = Entity<entity, userExperienceAnalyticsAppHealthDevicePerformanceProps> & {
}
export interface userExperienceAnalyticsAppHealthDevicePerformanceDetailsProps extends entityProps {
    appDisplayName: string;
    appPublisher: string;
    appVersion: string;
    deviceDisplayName: string;
    deviceId: string;
    eventDateTime: Date | null;
    eventType: string;
}
export type userExperienceAnalyticsAppHealthDevicePerformanceDetails = Entity<entity, userExperienceAnalyticsAppHealthDevicePerformanceDetailsProps> & {
}
export interface userExperienceAnalyticsAppHealthOSVersionPerformanceProps extends entityProps {
    activeDeviceCount: number | null;
    meanTimeToFailureInMinutes: number | null;
    osBuildNumber: string;
    osVersion: string;
    osVersionAppHealthScore: number | null;
}
export type userExperienceAnalyticsAppHealthOSVersionPerformance = Entity<entity, userExperienceAnalyticsAppHealthOSVersionPerformanceProps> & {
}
export interface userExperienceAnalyticsCategoryProps extends entityProps {
    insights: Collection<userExperienceAnalyticsInsight>;
    metricValues: Collection<userExperienceAnalyticsMetric>;
}
export type userExperienceAnalyticsCategory = Entity<entity, userExperienceAnalyticsCategoryProps> & {
}
export interface userExperienceAnalyticsBaselineProps extends entityProps {
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
export type userExperienceAnalyticsBaseline = Entity<entity, userExperienceAnalyticsBaselineProps> & {
}
export interface userExperienceAnalyticsDevicePerformanceProps extends entityProps {
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
export type userExperienceAnalyticsDevicePerformance = Entity<entity, userExperienceAnalyticsDevicePerformanceProps> & {
}
export interface userExperienceAnalyticsDeviceScoresProps extends entityProps {
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
export type userExperienceAnalyticsDeviceScores = Entity<entity, userExperienceAnalyticsDeviceScoresProps> & {
}
export interface userExperienceAnalyticsDeviceStartupHistoryProps extends entityProps {
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
export type userExperienceAnalyticsDeviceStartupHistory = Entity<entity, userExperienceAnalyticsDeviceStartupHistoryProps> & {
}
export interface userExperienceAnalyticsDeviceStartupProcessProps extends entityProps {
    managedDeviceId: string;
    processName: string;
    productName: string;
    publisher: string;
    startupImpactInMs: number | null;
}
export type userExperienceAnalyticsDeviceStartupProcess = Entity<entity, userExperienceAnalyticsDeviceStartupProcessProps> & {
}
export interface userExperienceAnalyticsDeviceStartupProcessPerformanceProps extends entityProps {
    deviceCount: number | null;
    medianImpactInMs: number | null;
    processName: string;
    productName: string;
    publisher: string;
    totalImpactInMs: number | null;
}
export type userExperienceAnalyticsDeviceStartupProcessPerformance = Entity<entity, userExperienceAnalyticsDeviceStartupProcessPerformanceProps> & {
}
export interface userExperienceAnalyticsMetricHistoryProps extends entityProps {
    deviceId: string;
    metricDateTime: Date | null;
    metricType: string;
}
export type userExperienceAnalyticsMetricHistory = Entity<entity, userExperienceAnalyticsMetricHistoryProps> & {
}
export interface userExperienceAnalyticsModelScoresProps extends entityProps {
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
export type userExperienceAnalyticsModelScores = Entity<entity, userExperienceAnalyticsModelScoresProps> & {
}
export interface userExperienceAnalyticsOverviewProps extends entityProps {
    insights: Collection<userExperienceAnalyticsInsight>;
}
export type userExperienceAnalyticsOverview = Entity<entity, userExperienceAnalyticsOverviewProps> & {
}
export interface userExperienceAnalyticsScoreHistoryProps extends entityProps {
    startupDateTime: Date | null;
}
export type userExperienceAnalyticsScoreHistory = Entity<entity, userExperienceAnalyticsScoreHistoryProps> & {
}
export interface userExperienceAnalyticsWorkFromAnywhereHardwareReadinessMetricProps extends entityProps {
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
export type userExperienceAnalyticsWorkFromAnywhereHardwareReadinessMetric = Entity<entity, userExperienceAnalyticsWorkFromAnywhereHardwareReadinessMetricProps> & {
}
export interface userExperienceAnalyticsWorkFromAnywhereMetricProps extends entityProps {
    metricDevices: Collection<userExperienceAnalyticsWorkFromAnywhereDevice>;
}
export type userExperienceAnalyticsWorkFromAnywhereMetric = Entity<entity, userExperienceAnalyticsWorkFromAnywhereMetricProps> & {
}
export interface userExperienceAnalyticsWorkFromAnywhereModelPerformanceProps extends entityProps {
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
export type userExperienceAnalyticsWorkFromAnywhereModelPerformance = Entity<entity, userExperienceAnalyticsWorkFromAnywhereModelPerformanceProps> & {
}
export interface windowsMalwareInformationProps extends entityProps {
    additionalInformationUrl: string;
    category: windowsMalwareCategory;
    displayName: string;
    lastDetectionDateTime: Date;
    severity: windowsMalwareSeverity;
    deviceMalwareStates: Collection<malwareStateForWindowsDevice>;
}
export type windowsMalwareInformation = Entity<entity, windowsMalwareInformationProps> & {
}
export interface importedWindowsAutopilotDeviceIdentityProps extends entityProps {
    assignedUserPrincipalName: string;
    groupTag: string;
    hardwareIdentifier: Buffer;
    importId: string;
    productKey: string;
    serialNumber: string;
    state: importedWindowsAutopilotDeviceIdentityState;
}
export type importedWindowsAutopilotDeviceIdentity = Entity<entity, importedWindowsAutopilotDeviceIdentityProps> & {
}
export interface windowsAutopilotDeviceIdentityProps extends entityProps {
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
export type windowsAutopilotDeviceIdentity = Entity<entity, windowsAutopilotDeviceIdentityProps> & {
    assignUserToDevice(): void;
    unassignUserFromDevice(): void;
    updateDeviceProperties(): void;
}
export interface notificationMessageTemplateProps extends entityProps {
    brandingOptions: notificationTemplateBrandingOptions | null;
    defaultLocale: string;
    displayName: string | null;
    lastModifiedDateTime: Date | null;
    roleScopeTagIds: Collection<string>;
    localizedNotificationMessages: Collection<localizedNotificationMessage>;
}
export type notificationMessageTemplate = Entity<entity, notificationMessageTemplateProps> & {
    sendTestMessage(): void;
}
export interface resourceOperationProps extends entityProps {
    actionName: string;
    description: string;
    resourceName: string;
}
export type resourceOperation = Entity<entity, resourceOperationProps> & {
}
export interface roleAssignmentProps extends entityProps {
    description: string;
    displayName: string;
    resourceScopes: Collection<string>;
    roleDefinition: roleDefinition;
}
export type roleAssignment = Entity<entity, roleAssignmentProps> & {
}
export interface deviceAndAppManagementRoleAssignmentProps extends entityProps {
    members: Collection<string>;
}
export type deviceAndAppManagementRoleAssignment = Entity<roleAssignment, deviceAndAppManagementRoleAssignmentProps> & {
}
export interface roleDefinitionProps extends entityProps {
    description: string;
    displayName: string;
    isBuiltIn: boolean | null;
    rolePermissions: Collection<rolePermission>;
    roleAssignments: Collection<roleAssignment>;
}
export type roleDefinition = Entity<entity, roleDefinitionProps> & {
}
export interface remoteAssistancePartnerProps extends entityProps {
    displayName: string;
    lastConnectionDateTime: Date | null;
    onboardingStatus: remoteAssistanceOnboardingStatus | null;
    onboardingUrl: string;
}
export type remoteAssistancePartner = Entity<entity, remoteAssistancePartnerProps> & {
    beginOnboarding(): void;
    disconnect(): void;
}
export interface deviceManagementReportsProps extends entityProps {
    exportJobs: Collection<deviceManagementExportJob>;
}
export type deviceManagementReports = Entity<entity, deviceManagementReportsProps> & {
    getCachedReport(id: string, select: Collection<string>, search: string, groupBy: Collection<string>, orderBy: Collection<string>, skip: number, top: number): Buffer;
    getCompliancePolicyNonComplianceReport(name: string, select: Collection<string>, search: string, groupBy: Collection<string>, orderBy: Collection<string>, skip: number, top: number, sessionId: string, filter: string): Buffer;
    getCompliancePolicyNonComplianceSummaryReport(name: string, select: Collection<string>, search: string, groupBy: Collection<string>, orderBy: Collection<string>, skip: number, top: number, sessionId: string, filter: string): Buffer;
    getComplianceSettingNonComplianceReport(name: string, select: Collection<string>, search: string, groupBy: Collection<string>, orderBy: Collection<string>, skip: number, top: number, sessionId: string, filter: string): Buffer;
    getConfigurationPolicyNonComplianceReport(name: string, select: Collection<string>, search: string, groupBy: Collection<string>, orderBy: Collection<string>, skip: number, top: number, sessionId: string, filter: string): Buffer;
    getConfigurationPolicyNonComplianceSummaryReport(name: string, select: Collection<string>, search: string, groupBy: Collection<string>, orderBy: Collection<string>, skip: number, top: number, sessionId: string, filter: string): Buffer;
    getConfigurationSettingNonComplianceReport(name: string, select: Collection<string>, search: string, groupBy: Collection<string>, orderBy: Collection<string>, skip: number, top: number, sessionId: string, filter: string): Buffer;
    getDeviceManagementIntentPerSettingContributingProfiles(name: string, select: Collection<string>, search: string, groupBy: Collection<string>, orderBy: Collection<string>, skip: number, top: number, sessionId: string, filter: string): Buffer;
    getDeviceManagementIntentSettingsReport(name: string, select: Collection<string>, search: string, groupBy: Collection<string>, orderBy: Collection<string>, skip: number, top: number, sessionId: string, filter: string): Buffer;
    getDeviceNonComplianceReport(name: string, select: Collection<string>, search: string, groupBy: Collection<string>, orderBy: Collection<string>, skip: number, top: number, sessionId: string, filter: string): Buffer;
    getDevicesWithoutCompliancePolicyReport(name: string, select: Collection<string>, search: string, groupBy: Collection<string>, orderBy: Collection<string>, skip: number, top: number, sessionId: string, filter: string): Buffer;
    getHistoricalReport(name: string, select: Collection<string>, search: string, groupBy: Collection<string>, orderBy: Collection<string>, skip: number, top: number, filter: string): Buffer;
    getNoncompliantDevicesAndSettingsReport(name: string, select: Collection<string>, search: string, groupBy: Collection<string>, orderBy: Collection<string>, skip: number, top: number, sessionId: string, filter: string): Buffer;
    getPolicyNonComplianceMetadata(name: string, select: Collection<string>, search: string, groupBy: Collection<string>, orderBy: Collection<string>, skip: number, top: number, sessionId: string, filter: string): Buffer;
    getPolicyNonComplianceReport(name: string, select: Collection<string>, search: string, groupBy: Collection<string>, orderBy: Collection<string>, skip: number, top: number, sessionId: string, filter: string): Buffer;
    getPolicyNonComplianceSummaryReport(name: string, select: Collection<string>, search: string, groupBy: Collection<string>, orderBy: Collection<string>, skip: number, top: number, sessionId: string, filter: string): Buffer;
    getReportFilters(name: string, select: Collection<string>, search: string, groupBy: Collection<string>, orderBy: Collection<string>, skip: number, top: number, sessionId: string, filter: string): Buffer;
    getSettingNonComplianceReport(name: string, select: Collection<string>, search: string, groupBy: Collection<string>, orderBy: Collection<string>, skip: number, top: number, sessionId: string, filter: string): Buffer;
}
export interface telecomExpenseManagementPartnerProps extends entityProps {
    appAuthorized: boolean | null;
    displayName: string;
    enabled: boolean | null;
    lastConnectionDateTime: Date | null;
    url: string;
}
export type telecomExpenseManagementPartner = Entity<entity, telecomExpenseManagementPartnerProps> & {
}
export interface windowsInformationProtectionAppLearningSummaryProps extends entityProps {
    applicationName: string;
    applicationType: applicationType | null;
    deviceCount: number | null;
}
export type windowsInformationProtectionAppLearningSummary = Entity<entity, windowsInformationProtectionAppLearningSummaryProps> & {
}
export interface windowsInformationProtectionNetworkLearningSummaryProps extends entityProps {
    deviceCount: number | null;
    url: string;
}
export type windowsInformationProtectionNetworkLearningSummary = Entity<entity, windowsInformationProtectionNetworkLearningSummaryProps> & {
}
export interface deviceInstallStateProps extends entityProps {
    deviceId: string;
    deviceName: string;
    errorCode: string;
    installState: installState | null;
    lastSyncDateTime: Date | null;
    osDescription: string;
    osVersion: string;
    userName: string;
}
export type deviceInstallState = Entity<entity, deviceInstallStateProps> & {
}
export interface eBookInstallSummaryProps extends entityProps {
    failedDeviceCount: number | null;
    failedUserCount: number | null;
    installedDeviceCount: number | null;
    installedUserCount: number | null;
    notInstalledDeviceCount: number | null;
    notInstalledUserCount: number | null;
}
export type eBookInstallSummary = Entity<entity, eBookInstallSummaryProps> & {
}
export interface iosVppEBookProps extends entityProps {
    appleId: string;
    genres: Collection<string>;
    language: string;
    seller: string;
    totalLicenseCount: number | null;
    usedLicenseCount: number | null;
    vppOrganizationName: string;
    vppTokenId: string | null;
}
export type iosVppEBook = Entity<managedEBook, iosVppEBookProps> & {
}
export interface managedEBookAssignmentProps extends entityProps {
    installIntent: installIntent | null;
    target: deviceAndAppManagementAssignmentTarget;
}
export type managedEBookAssignment = Entity<entity, managedEBookAssignmentProps> & {
}
export interface iosVppEBookAssignmentProps { }
export type iosVppEBookAssignment = Entity<managedEBookAssignment, iosVppEBookAssignmentProps> & {
}
export interface userInstallStateSummaryProps extends entityProps {
    failedDeviceCount: number | null;
    installedDeviceCount: number | null;
    notInstalledDeviceCount: number | null;
    userName: string;
    deviceStates: Collection<deviceInstallState>;
}
export type userInstallStateSummary = Entity<entity, userInstallStateSummaryProps> & {
}
export interface termsAndConditionsAcceptanceStatusProps extends entityProps {
    acceptedDateTime: Date | null;
    acceptedVersion: number | null;
    userDisplayName: string;
    userPrincipalName: string;
    termsAndConditions: termsAndConditions;
}
export type termsAndConditionsAcceptanceStatus = Entity<entity, termsAndConditionsAcceptanceStatusProps> & {
}
export interface termsAndConditionsAssignmentProps extends entityProps {
    target: deviceAndAppManagementAssignmentTarget;
}
export type termsAndConditionsAssignment = Entity<entity, termsAndConditionsAssignmentProps> & {
}
export interface appListItem {
    appId: string;
    appStoreUrl: string;
    name: string | null;
    publisher: string;
}
export interface bitLockerRemovableDrivePolicy {
    blockCrossOrganizationWriteAccess: boolean | null;
    encryptionMethod: bitLockerEncryptionMethod;
    requireEncryptionForWriteAccess: boolean | null;
}
export interface defenderDetectedMalwareActions {
    highSeverity: defenderThreatAction | null;
    lowSeverity: defenderThreatAction | null;
    moderateSeverity: defenderThreatAction | null;
    severeSeverity: defenderThreatAction | null;
}
export interface deviceCompliancePolicySettingState {
    currentValue: string;
    errorCode: number | null;
    errorDescription: string;
    instanceDisplayName: string;
    setting: string;
    settingName: string;
    sources: Collection<settingSource>;
    state: complianceStatus | null;
    userEmail: string;
    userId: string;
    userName: string;
    userPrincipalName: string;
}
export interface settingSource {
    displayName: string;
    id: string;
    sourceType: settingSourceType | null;
}
export interface deviceConfigurationSettingState {
    currentValue: string;
    errorCode: number | null;
    errorDescription: string;
    instanceDisplayName: string;
    setting: string;
    settingName: string;
    sources: Collection<settingSource>;
    state: complianceStatus | null;
    userEmail: string;
    userId: string;
    userName: string;
    userPrincipalName: string;
}
export interface edgeSearchEngineBase {
}
export interface edgeSearchEngine extends edgeSearchEngineBase {
    edgeSearchEngineType: edgeSearchEngineType | null;
}
export interface edgeSearchEngineCustom extends edgeSearchEngineBase {
    edgeSearchEngineOpenSearchXmlUrl: string | null;
}
export interface iosHomeScreenItem {
    displayName: string;
}
export interface iosHomeScreenApp extends iosHomeScreenItem {
    bundleID: string | null;
}
export interface iosHomeScreenFolder extends iosHomeScreenItem {
    pages: Collection<iosHomeScreenFolderPage> | null;
}
export interface iosHomeScreenFolderPage {
    apps: Collection<iosHomeScreenApp> | null;
    displayName: string;
}
export interface iosHomeScreenPage {
    displayName: string;
    icons: Collection<iosHomeScreenItem> | null;
}
export interface iosNetworkUsageRule {
    cellularDataBlocked: boolean | null;
    cellularDataBlockWhenRoaming: boolean | null;
    managedApps: Collection<appListItem>;
}
export interface iosNotificationSettings {
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
export interface mediaContentRatingAustralia {
    movieRating: ratingAustraliaMoviesType | null;
    tvRating: ratingAustraliaTelevisionType | null;
}
export interface mediaContentRatingCanada {
    movieRating: ratingCanadaMoviesType | null;
    tvRating: ratingCanadaTelevisionType | null;
}
export interface mediaContentRatingFrance {
    movieRating: ratingFranceMoviesType | null;
    tvRating: ratingFranceTelevisionType | null;
}
export interface mediaContentRatingGermany {
    movieRating: ratingGermanyMoviesType | null;
    tvRating: ratingGermanyTelevisionType | null;
}
export interface mediaContentRatingIreland {
    movieRating: ratingIrelandMoviesType | null;
    tvRating: ratingIrelandTelevisionType | null;
}
export interface mediaContentRatingJapan {
    movieRating: ratingJapanMoviesType | null;
    tvRating: ratingJapanTelevisionType | null;
}
export interface mediaContentRatingNewZealand {
    movieRating: ratingNewZealandMoviesType | null;
    tvRating: ratingNewZealandTelevisionType | null;
}
export interface mediaContentRatingUnitedKingdom {
    movieRating: ratingUnitedKingdomMoviesType | null;
    tvRating: ratingUnitedKingdomTelevisionType | null;
}
export interface mediaContentRatingUnitedStates {
    movieRating: ratingUnitedStatesMoviesType | null;
    tvRating: ratingUnitedStatesTelevisionType | null;
}
export interface omaSetting {
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
export interface report {
    content: Buffer;
}
export interface sharedPCAccountManagerPolicy {
    accountDeletionPolicy: sharedPCAccountDeletionPolicyType | null;
    cacheAccountsAboveDiskFreePercentage: number;
    inactiveThresholdDays: number;
    removeAccountsBelowDiskFreePercentage: number;
}
export interface windows10NetworkProxyServer {
    address: string | null;
    exceptions: Collection<string>;
    useForLocalAddresses: boolean | null;
}
export interface windowsFirewallNetworkProfile {
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
export interface windowsUpdateInstallScheduleType {
}
export interface windowsUpdateActiveHoursInstall extends windowsUpdateInstallScheduleType {
    activeHoursEnd: Date | null;
    activeHoursStart: Date | null;
}
export interface windowsUpdateScheduledInstall extends windowsUpdateInstallScheduleType {
    scheduledInstallDay: weeklySchedule | null;
    scheduledInstallTime: Date | null;
}
export interface androidCompliancePolicyProps extends entityProps {
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
export type androidCompliancePolicy = Entity<deviceCompliancePolicy, androidCompliancePolicyProps> & {
}
export interface androidCustomConfigurationProps extends entityProps {
    omaSettings: Collection<omaSetting>;
}
export type androidCustomConfiguration = Entity<deviceConfiguration, androidCustomConfigurationProps> & {
}
export interface androidGeneralDeviceConfigurationProps extends entityProps {
    appsBlockClipboardSharing: boolean | null;
    appsBlockCopyPaste: boolean | null;
    appsBlockYouTube: boolean | null;
    appsHideList: Collection<appListItem>;
    appsInstallAllowList: Collection<appListItem>;
    appsLaunchBlockList: Collection<appListItem>;
    bluetoothBlocked: boolean | null;
    cameraBlocked: boolean | null;
    cellularBlockDataRoaming: boolean | null;
    cellularBlockMessaging: boolean | null;
    cellularBlockVoiceRoaming: boolean | null;
    cellularBlockWiFiTethering: boolean | null;
    compliantAppListType: appListType | null;
    compliantAppsList: Collection<appListItem>;
    deviceSharingAllowed: boolean | null;
    diagnosticDataBlockSubmission: boolean | null;
    factoryResetBlocked: boolean | null;
    googleAccountBlockAutoSync: boolean | null;
    googlePlayStoreBlocked: boolean | null;
    kioskModeApps: Collection<appListItem>;
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
export type androidGeneralDeviceConfiguration = Entity<deviceConfiguration, androidGeneralDeviceConfigurationProps> & {
}
export interface androidWorkProfileCompliancePolicyProps extends entityProps {
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
export type androidWorkProfileCompliancePolicy = Entity<deviceCompliancePolicy, androidWorkProfileCompliancePolicyProps> & {
}
export interface androidWorkProfileCustomConfigurationProps extends entityProps {
    omaSettings: Collection<omaSetting>;
}
export type androidWorkProfileCustomConfiguration = Entity<deviceConfiguration, androidWorkProfileCustomConfigurationProps> & {
}
export interface androidWorkProfileGeneralDeviceConfigurationProps extends entityProps {
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
export type androidWorkProfileGeneralDeviceConfiguration = Entity<deviceConfiguration, androidWorkProfileGeneralDeviceConfigurationProps> & {
}
export interface appleDeviceFeaturesConfigurationBaseProps { }
export type appleDeviceFeaturesConfigurationBase = Entity<deviceConfiguration, appleDeviceFeaturesConfigurationBaseProps> & {
}
export interface deviceComplianceActionItemProps extends entityProps {
    actionType: deviceComplianceActionType | null;
    gracePeriodHours: number | null;
    notificationMessageCCList: Collection<string>;
    notificationTemplateId: string;
}
export type deviceComplianceActionItem = Entity<entity, deviceComplianceActionItemProps> & {
}
export interface deviceComplianceDeviceOverviewProps extends entityProps {
    configurationVersion: number | null;
    errorCount: number | null;
    failedCount: number | null;
    lastUpdateDateTime: Date | null;
    notApplicableCount: number | null;
    pendingCount: number | null;
    successCount: number | null;
}
export type deviceComplianceDeviceOverview = Entity<entity, deviceComplianceDeviceOverviewProps> & {
}
export interface deviceComplianceDeviceStatusProps extends entityProps {
    complianceGracePeriodExpirationDateTime: Date | null;
    deviceDisplayName: string;
    deviceModel: string;
    lastReportedDateTime: Date | null;
    status: complianceStatus | null;
    userName: string;
    userPrincipalName: string;
}
export type deviceComplianceDeviceStatus = Entity<entity, deviceComplianceDeviceStatusProps> & {
}
export interface deviceCompliancePolicyAssignmentProps extends entityProps {
    target: deviceAndAppManagementAssignmentTarget;
}
export type deviceCompliancePolicyAssignment = Entity<entity, deviceCompliancePolicyAssignmentProps> & {
}
export interface settingStateDeviceSummaryProps extends entityProps {
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
export type settingStateDeviceSummary = Entity<entity, settingStateDeviceSummaryProps> & {
}
export interface deviceComplianceScheduledActionForRuleProps extends entityProps {
    ruleName: string;
    scheduledActionConfigurations: Collection<deviceComplianceActionItem>;
}
export type deviceComplianceScheduledActionForRule = Entity<entity, deviceComplianceScheduledActionForRuleProps> & {
}
export interface deviceComplianceUserStatusProps extends entityProps {
    devicesCount: number | null;
    lastReportedDateTime: Date | null;
    status: complianceStatus | null;
    userDisplayName: string;
    userPrincipalName: string;
}
export type deviceComplianceUserStatus = Entity<entity, deviceComplianceUserStatusProps> & {
}
export interface deviceComplianceUserOverviewProps extends entityProps {
    configurationVersion: number | null;
    errorCount: number | null;
    failedCount: number | null;
    lastUpdateDateTime: Date | null;
    notApplicableCount: number | null;
    pendingCount: number | null;
    successCount: number | null;
}
export type deviceComplianceUserOverview = Entity<entity, deviceComplianceUserOverviewProps> & {
}
export interface deviceComplianceSettingStateProps extends entityProps {
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
export type deviceComplianceSettingState = Entity<entity, deviceComplianceSettingStateProps> & {
}
export interface deviceCompliancePolicyStateProps extends entityProps {
    displayName: string;
    platformType: policyPlatformType | null;
    settingCount: number | null;
    settingStates: Collection<deviceCompliancePolicySettingState>;
    state: complianceStatus | null;
    version: number | null;
}
export type deviceCompliancePolicyState = Entity<entity, deviceCompliancePolicyStateProps> & {
}
export interface deviceConfigurationAssignmentProps extends entityProps {
    target: deviceAndAppManagementAssignmentTarget;
}
export type deviceConfigurationAssignment = Entity<entity, deviceConfigurationAssignmentProps> & {
}
export interface deviceConfigurationDeviceStatusProps extends entityProps {
    complianceGracePeriodExpirationDateTime: Date | null;
    deviceDisplayName: string;
    deviceModel: string;
    lastReportedDateTime: Date | null;
    status: complianceStatus | null;
    userName: string;
    userPrincipalName: string;
}
export type deviceConfigurationDeviceStatus = Entity<entity, deviceConfigurationDeviceStatusProps> & {
}
export interface deviceConfigurationDeviceOverviewProps extends entityProps {
    configurationVersion: number | null;
    errorCount: number | null;
    failedCount: number | null;
    lastUpdateDateTime: Date | null;
    notApplicableCount: number | null;
    pendingCount: number | null;
    successCount: number | null;
}
export type deviceConfigurationDeviceOverview = Entity<entity, deviceConfigurationDeviceOverviewProps> & {
}
export interface deviceConfigurationUserStatusProps extends entityProps {
    devicesCount: number | null;
    lastReportedDateTime: Date | null;
    status: complianceStatus | null;
    userDisplayName: string;
    userPrincipalName: string;
}
export type deviceConfigurationUserStatus = Entity<entity, deviceConfigurationUserStatusProps> & {
}
export interface deviceConfigurationUserOverviewProps extends entityProps {
    configurationVersion: number | null;
    errorCount: number | null;
    failedCount: number | null;
    lastUpdateDateTime: Date | null;
    notApplicableCount: number | null;
    pendingCount: number | null;
    successCount: number | null;
}
export type deviceConfigurationUserOverview = Entity<entity, deviceConfigurationUserOverviewProps> & {
}
export interface deviceConfigurationStateProps extends entityProps {
    displayName: string;
    platformType: policyPlatformType | null;
    settingCount: number | null;
    settingStates: Collection<deviceConfigurationSettingState>;
    state: complianceStatus | null;
    version: number | null;
}
export type deviceConfigurationState = Entity<entity, deviceConfigurationStateProps> & {
}
export interface editionUpgradeConfigurationProps extends entityProps {
    license: string;
    licenseType: editionUpgradeLicenseType | null;
    productKey: string;
    targetEdition: windows10EditionType | null;
}
export type editionUpgradeConfiguration = Entity<deviceConfiguration, editionUpgradeConfigurationProps> & {
}
export interface iosCertificateProfileProps { }
export type iosCertificateProfile = Entity<deviceConfiguration, iosCertificateProfileProps> & {
}
export interface iosCompliancePolicyProps extends entityProps {
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
export type iosCompliancePolicy = Entity<deviceCompliancePolicy, iosCompliancePolicyProps> & {
}
export interface iosCustomConfigurationProps extends entityProps {
    payload: Buffer | null;
    payloadFileName: string;
    payloadName: string | null;
}
export type iosCustomConfiguration = Entity<deviceConfiguration, iosCustomConfigurationProps> & {
}
export interface iosDeviceFeaturesConfigurationProps extends entityProps {
    assetTagTemplate: string;
    homeScreenDockIcons: Collection<iosHomeScreenItem>;
    homeScreenPages: Collection<iosHomeScreenPage>;
    lockScreenFootnote: string;
    notificationSettings: Collection<iosNotificationSettings>;
}
export type iosDeviceFeaturesConfiguration = Entity<appleDeviceFeaturesConfigurationBase, iosDeviceFeaturesConfigurationProps> & {
}
export interface iosGeneralDeviceConfigurationProps extends entityProps {
    accountBlockModification: boolean | null;
    activationLockAllowWhenSupervised: boolean | null;
    airDropBlocked: boolean | null;
    airDropForceUnmanagedDropTarget: boolean | null;
    airPlayForcePairingPasswordForOutgoingRequests: boolean | null;
    appleNewsBlocked: boolean | null;
    appleWatchBlockPairing: boolean | null;
    appleWatchForceWristDetection: boolean | null;
    appsSingleAppModeList: Collection<appListItem>;
    appStoreBlockAutomaticDownloads: boolean | null;
    appStoreBlocked: boolean | null;
    appStoreBlockInAppPurchases: boolean | null;
    appStoreBlockUIAppInstallation: boolean | null;
    appStoreRequirePassword: boolean | null;
    appsVisibilityList: Collection<appListItem>;
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
    compliantAppsList: Collection<appListItem>;
    configurationProfileBlockChanges: boolean | null;
    definitionLookupBlocked: boolean | null;
    deviceBlockEnableRestrictions: boolean | null;
    deviceBlockEraseContentAndSettings: boolean | null;
    deviceBlockNameModification: boolean | null;
    diagnosticDataBlockSubmission: boolean | null;
    diagnosticDataBlockSubmissionModification: boolean | null;
    documentsBlockManagedDocumentsInUnmanagedApps: boolean | null;
    documentsBlockUnmanagedDocumentsInManagedApps: boolean | null;
    emailInDomainSuffixes: Collection<string>;
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
    networkUsageRules: Collection<iosNetworkUsageRule>;
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
    safariManagedDomains: Collection<string>;
    safariPasswordAutoFillDomains: Collection<string>;
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
export type iosGeneralDeviceConfiguration = Entity<deviceConfiguration, iosGeneralDeviceConfigurationProps> & {
}
export interface iosUpdateConfigurationProps extends entityProps {
    activeHoursEnd: Date | null;
    activeHoursStart: Date | null;
    scheduledInstallDays: Collection<dayOfWeek> | null;
    utcTimeOffsetInMinutes: number;
}
export type iosUpdateConfiguration = Entity<deviceConfiguration, iosUpdateConfigurationProps> & {
}
export interface macOSCompliancePolicyProps extends entityProps {
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
export type macOSCompliancePolicy = Entity<deviceCompliancePolicy, macOSCompliancePolicyProps> & {
}
export interface macOSCustomConfigurationProps extends entityProps {
    payload: Buffer | null;
    payloadFileName: string;
    payloadName: string | null;
}
export type macOSCustomConfiguration = Entity<deviceConfiguration, macOSCustomConfigurationProps> & {
}
export interface macOSDeviceFeaturesConfigurationProps { }
export type macOSDeviceFeaturesConfiguration = Entity<appleDeviceFeaturesConfigurationBase, macOSDeviceFeaturesConfigurationProps> & {
}
export interface macOSGeneralDeviceConfigurationProps extends entityProps {
    compliantAppListType: appListType | null;
    compliantAppsList: Collection<appListItem>;
    emailInDomainSuffixes: Collection<string>;
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
export type macOSGeneralDeviceConfiguration = Entity<deviceConfiguration, macOSGeneralDeviceConfigurationProps> & {
}
export interface configurationManagerClientEnabledFeatures {
    compliancePolicy: boolean | null;
    deviceConfiguration: boolean | null;
    inventory: boolean | null;
    modernApps: boolean | null;
    resourceAccess: boolean | null;
    windowsUpdateForBusiness: boolean | null;
}
export interface deviceActionResult {
    actionName: string;
    actionState: actionState | null;
    lastUpdatedDateTime: Date | null;
    startDateTime: Date | null;
}
export interface deviceHealthAttestationState {
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
export interface deviceLogCollectionResponseProps extends entityProps {
    enrolledByUser: string;
    expirationDateTimeUTC: Date;
    initiatedByUserPrincipalName: string;
    managedDeviceId: string | null;
    receivedDateTimeUTC: Date;
    requestedDateTimeUTC: Date;
    sizeInKB: number | null;
    status: appLogUploadState | null;
}
export type deviceLogCollectionResponse = Entity<entity, deviceLogCollectionResponseProps> & {
    createDownloadUrl(): string;
}
export interface windowsProtectionStateProps extends entityProps {
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
    detectedMalwareState: Collection<windowsDeviceMalwareState>;
}
export type windowsProtectionState = Entity<entity, windowsProtectionStateProps> & {
}
export interface sharedPCConfigurationProps extends entityProps {
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
export type sharedPCConfiguration = Entity<deviceConfiguration, sharedPCConfigurationProps> & {
}
export interface windows10CompliancePolicyProps extends entityProps {
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
export type windows10CompliancePolicy = Entity<deviceCompliancePolicy, windows10CompliancePolicyProps> & {
}
export interface windows10CustomConfigurationProps extends entityProps {
    omaSettings: Collection<omaSetting>;
}
export type windows10CustomConfiguration = Entity<deviceConfiguration, windows10CustomConfigurationProps> & {
}
export interface windows10EndpointProtectionConfigurationProps extends entityProps {
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
    defenderAdditionalGuardedFolders: Collection<string>;
    defenderAttackSurfaceReductionExcludedPaths: Collection<string>;
    defenderExploitProtectionXml: Buffer;
    defenderExploitProtectionXmlFileName: string;
    defenderGuardedFoldersAllowedAppPaths: Collection<string>;
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
export type windows10EndpointProtectionConfiguration = Entity<deviceConfiguration, windows10EndpointProtectionConfigurationProps> & {
}
export interface windows10EnterpriseModernAppManagementConfigurationProps extends entityProps {
    uninstallBuiltInApps: boolean | null;
}
export type windows10EnterpriseModernAppManagementConfiguration = Entity<deviceConfiguration, windows10EnterpriseModernAppManagementConfigurationProps> & {
}
export interface windows10GeneralConfigurationProps extends entityProps {
    accountsBlockAddingNonMicrosoftAccountEmail: boolean | null;
    antiTheftModeBlocked: boolean | null;
    appsAllowTrustedAppsSideloading: stateManagementSetting | null;
    appsBlockWindowsStoreOriginatedApps: boolean | null;
    bluetoothAllowedServices: Collection<string>;
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
    defenderFileExtensionsToExclude: Collection<string>;
    defenderFilesAndFoldersToExclude: Collection<string>;
    defenderMonitorFileActivity: defenderMonitorFileActivity | null;
    defenderProcessesToExclude: Collection<string>;
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
    edgeHomepageUrls: Collection<string>;
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
export type windows10GeneralConfiguration = Entity<deviceConfiguration, windows10GeneralConfigurationProps> & {
}
export interface windows10MobileCompliancePolicyProps extends entityProps {
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
export type windows10MobileCompliancePolicy = Entity<deviceCompliancePolicy, windows10MobileCompliancePolicyProps> & {
}
export interface windows10SecureAssessmentConfigurationProps extends entityProps {
    allowPrinting: boolean | null;
    allowScreenCapture: boolean | null;
    allowTextSuggestion: boolean | null;
    configurationAccount: string;
    launchUri: string;
}
export type windows10SecureAssessmentConfiguration = Entity<deviceConfiguration, windows10SecureAssessmentConfigurationProps> & {
}
export interface windows10TeamGeneralConfigurationProps extends entityProps {
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
export type windows10TeamGeneralConfiguration = Entity<deviceConfiguration, windows10TeamGeneralConfigurationProps> & {
}
export interface windows81CompliancePolicyProps extends entityProps {
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
export type windows81CompliancePolicy = Entity<deviceCompliancePolicy, windows81CompliancePolicyProps> & {
}
export interface windows81GeneralConfigurationProps extends entityProps {
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
export type windows81GeneralConfiguration = Entity<deviceConfiguration, windows81GeneralConfigurationProps> & {
}
export interface windowsDefenderAdvancedThreatProtectionConfigurationProps extends entityProps {
    allowSampleSharing: boolean | null;
    enableExpeditedTelemetryReporting: boolean | null;
}
export type windowsDefenderAdvancedThreatProtectionConfiguration = Entity<deviceConfiguration, windowsDefenderAdvancedThreatProtectionConfigurationProps> & {
}
export interface windowsPhone81CompliancePolicyProps extends entityProps {
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
export type windowsPhone81CompliancePolicy = Entity<deviceCompliancePolicy, windowsPhone81CompliancePolicyProps> & {
}
export interface windowsPhone81CustomConfigurationProps extends entityProps {
    omaSettings: Collection<omaSetting>;
}
export type windowsPhone81CustomConfiguration = Entity<deviceConfiguration, windowsPhone81CustomConfigurationProps> & {
}
export interface windowsPhone81GeneralConfigurationProps extends entityProps {
    applyOnlyToWindowsPhone81: boolean | null;
    appsBlockCopyPaste: boolean | null;
    bluetoothBlocked: boolean | null;
    cameraBlocked: boolean | null;
    cellularBlockWifiTethering: boolean | null;
    compliantAppListType: appListType | null;
    compliantAppsList: Collection<appListItem>;
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
export type windowsPhone81GeneralConfiguration = Entity<deviceConfiguration, windowsPhone81GeneralConfigurationProps> & {
}
export interface windowsUpdateForBusinessConfigurationProps extends entityProps {
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
export type windowsUpdateForBusinessConfiguration = Entity<deviceConfiguration, windowsUpdateForBusinessConfigurationProps> & {
}
export interface complianceManagementPartnerAssignment {
    target: deviceAndAppManagementAssignmentTarget;
}
export interface deviceAndAppManagementData {
    content: Buffer;
}
export interface deviceEnrollmentPlatformRestriction {
    osMaximumVersion: string;
    osMinimumVersion: string;
    personalDeviceEnrollmentBlocked: boolean | null;
    platformBlocked: boolean | null;
}
export interface deviceManagementPartnerAssignment {
    target: deviceAndAppManagementAssignmentTarget;
}
export interface rgbColor {
    b: boolean | null;
    g: boolean | null;
    r: boolean | null;
}
export interface enrollmentConfigurationAssignmentProps extends entityProps {
    target: deviceAndAppManagementAssignmentTarget;
}
export type enrollmentConfigurationAssignment = Entity<entity, enrollmentConfigurationAssignmentProps> & {
}
export interface deviceEnrollmentLimitConfigurationProps extends entityProps {
    limit: number | null;
}
export type deviceEnrollmentLimitConfiguration = Entity<deviceEnrollmentConfiguration, deviceEnrollmentLimitConfigurationProps> & {
}
export interface deviceEnrollmentPlatformRestrictionsConfigurationProps extends entityProps {
    androidRestriction: deviceEnrollmentPlatformRestriction;
    iosRestriction: deviceEnrollmentPlatformRestriction;
    macOSRestriction: deviceEnrollmentPlatformRestriction;
    windowsMobileRestriction: deviceEnrollmentPlatformRestriction;
    windowsRestriction: deviceEnrollmentPlatformRestriction;
}
export type deviceEnrollmentPlatformRestrictionsConfiguration = Entity<deviceEnrollmentConfiguration, deviceEnrollmentPlatformRestrictionsConfigurationProps> & {
}
export interface deviceEnrollmentWindowsHelloForBusinessConfigurationProps extends entityProps {
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
export type deviceEnrollmentWindowsHelloForBusinessConfiguration = Entity<deviceEnrollmentConfiguration, deviceEnrollmentWindowsHelloForBusinessConfigurationProps> & {
}
export interface appLogCollectionDownloadDetails {
    appLogDecryptionAlgorithm: appLogDecryptionAlgorithm | null;
    decryptionKey: string;
    downloadUrl: string;
}
export interface deleteUserFromSharedAppleDeviceActionResult extends deviceActionResult {
    userPrincipalName: string;
}
export interface deviceExchangeAccessStateSummary {
    allowedDeviceCount: number | null;
    blockedDeviceCount: number | null;
    quarantinedDeviceCount: number | null;
    unavailableDeviceCount: number | null;
    unknownDeviceCount: number | null;
}
export interface deviceGeoLocation {
    altitude: number | null;
    heading: number | null;
    horizontalAccuracy: number | null;
    lastCollectedDateTime: Date | null;
    latitude: number | null;
    longitude: number | null;
    speed: number | null;
    verticalAccuracy: number | null;
}
export interface deviceOperatingSystemSummary {
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
export interface userExperienceAnalyticsInsightValue {
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
export interface osVersionCount {
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
export interface updateWindowsDeviceAccountActionParameter {
    calendarSyncEnabled: boolean;
    deviceAccount: windowsDeviceAccount;
    deviceAccountEmail: string;
    exchangeServer: string;
    passwordRotationEnabled: boolean;
    sessionInitiationProtocalAddress: string;
}
export interface windowsDeviceAccount {
    password: string;
}
export interface userExperienceAnalyticsAutopilotDevicesSummary {
    devicesNotAutopilotRegistered: number | null;
    devicesWithoutAutopilotProfileAssigned: number | null;
    totalWindows10DevicesWithoutTenantAttached: number | null;
}
export interface userExperienceAnalyticsCloudIdentityDevicesSummary {
    deviceWithoutCloudIdentityCount: number | null;
}
export interface userExperienceAnalyticsCloudManagementDevicesSummary {
    coManagedDeviceCount: number | null;
    intuneDeviceCount: number | null;
    tenantAttachDeviceCount: number | null;
}
export interface userExperienceAnalyticsInsight {
    insightId: string;
    severity: userExperienceAnalyticsInsightSeverity | null;
    userExperienceAnalyticsMetricId: string;
    values: Collection<userExperienceAnalyticsInsightValue>;
}
export interface userExperienceAnalyticsWindows10DevicesSummary {
    unsupportedOSversionDeviceCount: number | null;
}
export interface userExperienceAnalyticsWorkFromAnywhereDevicesSummary {
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
export interface windowsMalwareCategoryCount {
    activeMalwareDetectionCount: number | null;
    category: windowsMalwareCategory | null;
    deviceCount: number | null;
    distinctActiveMalwareCount: number | null;
    lastUpdateDateTime: Date | null;
}
export interface windowsMalwareExecutionStateCount {
    deviceCount: number | null;
    executionState: windowsMalwareExecutionState | null;
    lastUpdateDateTime: Date | null;
}
export interface windowsMalwareNameCount {
    deviceCount: number | null;
    lastUpdateDateTime: Date | null;
    malwareIdentifier: string;
    name: string;
}
export interface windowsMalwareSeverityCount {
    distinctMalwareCount: number | null;
    lastUpdateDateTime: Date | null;
    malwareDetectionCount: number | null;
    severity: windowsMalwareSeverity | null;
}
export interface windowsMalwareStateCount {
    deviceCount: number | null;
    distinctMalwareCount: number | null;
    lastUpdateDateTime: Date | null;
    malwareDetectionCount: number | null;
    state: windowsMalwareThreatState | null;
}
export interface appLogCollectionRequestProps extends entityProps {
    completedDateTime: Date;
    customLogFolders: Collection<string>;
    errorMessage: string;
    status: appLogUploadState | null;
}
export type appLogCollectionRequest = Entity<entity, appLogCollectionRequestProps> & {
    createDownloadUrl(): appLogCollectionDownloadDetails;
}
export interface malwareStateForWindowsDeviceProps extends entityProps {
    detectionCount: number;
    deviceName: string;
    executionState: windowsMalwareExecutionState;
    initialDetectionDateTime: Date;
    lastStateChangeDateTime: Date;
    threatState: windowsMalwareThreatState;
}
export type malwareStateForWindowsDevice = Entity<entity, malwareStateForWindowsDeviceProps> & {
}
export interface userExperienceAnalyticsMetricProps extends entityProps {
    unit: string;
    value: number | null;
}
export type userExperienceAnalyticsMetric = Entity<entity, userExperienceAnalyticsMetricProps> & {
}
export interface userExperienceAnalyticsWorkFromAnywhereDeviceProps extends entityProps {
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
export type userExperienceAnalyticsWorkFromAnywhereDevice = Entity<entity, userExperienceAnalyticsWorkFromAnywhereDeviceProps> & {
}
export interface windowsDeviceMalwareStateProps extends entityProps {
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
export type windowsDeviceMalwareState = Entity<entity, windowsDeviceMalwareStateProps> & {
}
export interface importedWindowsAutopilotDeviceIdentityState {
    deviceErrorCode: number | null;
    deviceErrorName: string;
    deviceImportStatus: importedWindowsAutopilotDeviceIdentityImportStatus | null;
    deviceRegistrationId: string;
}
export interface importedWindowsAutopilotDeviceIdentityUploadProps extends entityProps {
    createdDateTimeUtc: Date | null;
    status: importedWindowsAutopilotDeviceIdentityUploadStatus | null;
    deviceIdentities: Collection<importedWindowsAutopilotDeviceIdentity>;
}
export type importedWindowsAutopilotDeviceIdentityUpload = Entity<entity, importedWindowsAutopilotDeviceIdentityUploadProps> & {
}
export interface mobileAppIdentifier {
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
export interface managedAppDiagnosticStatus {
    mitigationInstruction: string;
    state: string;
    validationName: string;
}
export interface managedAppPolicyDeploymentSummaryPerApp {
    configurationAppliedUserCount: number | null;
    mobileAppIdentifier: mobileAppIdentifier;
}
export interface proxiedDomain {
    ipAddressOrFQDN: string | null;
    proxy: string;
}
export interface windowsInformationProtectionApp {
    denied: boolean | null;
    description: string;
    displayName: string | null;
    productName: string;
    publisherName: string;
}
export interface windowsInformationProtectionDataRecoveryCertificate {
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
export interface windowsInformationProtectionIPRangeCollection {
    displayName: string | null;
    ranges: Collection<ipRange> | null;
}
export interface windowsInformationProtectionProxiedDomainCollection {
    displayName: string | null;
    proxiedDomains: Collection<proxiedDomain> | null;
}
export interface windowsInformationProtectionResourceCollection {
    displayName: string | null;
    resources: Collection<string>;
}
export interface windowsInformationProtectionStoreApp extends windowsInformationProtectionApp {
}
export interface managedMobileAppProps extends entityProps {
    mobileAppIdentifier: mobileAppIdentifier;
    version: string;
}
export type managedMobileApp = Entity<entity, managedMobileAppProps> & {
}
export interface managedAppPolicyDeploymentSummaryProps extends entityProps {
    configurationDeployedUserCount: number | null;
    configurationDeploymentSummaryPerApp: Collection<managedAppPolicyDeploymentSummaryPerApp>;
    displayName: string;
    lastRefreshTime: Date | null;
    version: string;
}
export type managedAppPolicyDeploymentSummary = Entity<entity, managedAppPolicyDeploymentSummaryProps> & {
}
export interface androidManagedAppRegistrationProps { }
export type androidManagedAppRegistration = Entity<managedAppRegistration, androidManagedAppRegistrationProps> & {
}
export interface iosManagedAppRegistrationProps { }
export type iosManagedAppRegistration = Entity<managedAppRegistration, iosManagedAppRegistrationProps> & {
}
export interface managedAppOperationProps extends entityProps {
    displayName: string;
    lastModifiedDateTime: Date | null;
    state: string;
    version: string;
}
export type managedAppOperation = Entity<entity, managedAppOperationProps> & {
}
export interface managedAppStatusRawProps extends entityProps {
    content: Json;
}
export type managedAppStatusRaw = Entity<managedAppStatus, managedAppStatusRawProps> & {
}
export interface targetedManagedAppPolicyAssignmentProps extends entityProps {
    target: deviceAndAppManagementAssignmentTarget;
}
export type targetedManagedAppPolicyAssignment = Entity<entity, targetedManagedAppPolicyAssignmentProps> & {
}
export interface windowsInformationProtectionAppLockerFileProps extends entityProps {
    displayName: string;
    file: Buffer;
    fileHash: string;
    version: string;
}
export type windowsInformationProtectionAppLockerFile = Entity<entity, windowsInformationProtectionAppLockerFileProps> & {
}
export interface localizedNotificationMessageProps extends entityProps {
    isDefault: boolean | null;
    lastModifiedDateTime: Date | null;
    locale: string | null;
    messageTemplate: string | null;
    subject: string | null;
}
export type localizedNotificationMessage = Entity<entity, localizedNotificationMessageProps> & {
}
export interface resourceAction {
    allowedResourceActions: Collection<string>;
    notAllowedResourceActions: Collection<string>;
}
export interface rolePermission {
    resourceActions: Collection<resourceAction>;
}
export interface deviceAndAppManagementRoleDefinitionProps { }
export type deviceAndAppManagementRoleDefinition = Entity<roleDefinition, deviceAndAppManagementRoleDefinitionProps> & {
}
export interface deviceManagementExportJobProps extends entityProps {
    expirationDateTime: Date | null;
    filter: string;
    format: deviceManagementReportFileFormat | null;
    localizationType: deviceManagementExportJobLocalizationType | null;
    reportName: string | null;
    requestDateTime: Date | null;
    select: Collection<string>;
    snapshotId: string;
    status: deviceManagementReportStatus | null;
    url: string;
}
export type deviceManagementExportJob = Entity<entity, deviceManagementExportJobProps> & {
}
export interface enrollmentTroubleshootingEventProps extends entityProps {
    deviceId: string;
    enrollmentType: deviceEnrollmentType | null;
    failureCategory: deviceEnrollmentFailureReason | null;
    failureReason: string;
    managedDeviceIdentifier: string;
    operatingSystem: string;
    osVersion: string;
    userId: string;
}
export type enrollmentTroubleshootingEvent = Entity<deviceManagementTroubleshootingEvent, enrollmentTroubleshootingEventProps> & {
}
export interface serviceHealthIssuePost {
    createdDateTime: Date | null;
    description: itemBody;
    postType: postType;
}
export interface serviceUpdateMessageViewpoint {
    isArchived: boolean;
    isFavorited: boolean;
    isRead: boolean;
}
export interface serviceHealthProps extends entityProps {
    service: string | null;
    status: serviceHealthStatus | null;
    issues: Collection<serviceHealthIssue>;
}
export type serviceHealth = Entity<entity, serviceHealthProps> & {
}
export interface serviceAnnouncementBaseProps extends entityProps {
    details: Collection<keyValuePair>;
    endDateTime: Date;
    lastModifiedDateTime: Date | null;
    startDateTime: Date | null;
    title: string | null;
}
export type serviceAnnouncementBase = Entity<entity, serviceAnnouncementBaseProps> & {
}
export interface serviceHealthIssueProps extends entityProps {
    classification: serviceHealthClassificationType | null;
    feature: string;
    featureGroup: string;
    impactDescription: string | null;
    isResolved: boolean | null;
    origin: serviceHealthOrigin | null;
    posts: Collection<serviceHealthIssuePost> | null;
    service: string | null;
    status: serviceHealthStatus | null;
}
export type serviceHealthIssue = Entity<serviceAnnouncementBase, serviceHealthIssueProps> & {
    incidentReport(): Buffer;
}
export interface serviceUpdateMessageProps extends entityProps {
    actionRequiredByDateTime: Date;
    attachmentsArchive: Buffer;
    body: itemBody | null;
    category: serviceUpdateCategory | null;
    hasAttachments: boolean | null;
    isMajorChange: boolean;
    services: Collection<string>;
    severity: serviceUpdateSeverity | null;
    tags: Collection<string>;
    viewPoint: serviceUpdateMessageViewpoint;
    attachments: Collection<serviceAnnouncementAttachment>;
}
export type serviceUpdateMessage = Entity<serviceAnnouncementBase, serviceUpdateMessageProps> & {
}
export interface serviceAnnouncementAttachmentProps extends entityProps {
    content: Buffer;
    contentType: string;
    lastModifiedDateTime: Date;
    name: string;
    size: number | null;
}
export type serviceAnnouncementAttachment = Entity<entity, serviceAnnouncementAttachmentProps> & {
}
export interface aggregationOption {
    bucketDefinition: bucketAggregationDefinition | null;
    field: string | null;
    size: number;
}
export interface bucketAggregationDefinition {
    isDescending: boolean;
    minimumCount: number;
    prefixFilter: string;
    ranges: Collection<bucketAggregationRange>;
    sortBy: bucketAggregationSortProperty | null;
}
export interface alterationResponse {
    originalQueryString: string;
    queryAlteration: searchAlteration;
    queryAlterationType: searchAlterationType;
}
export interface searchAlteration {
    alteredHighlightedQueryString: string;
    alteredQueryString: string;
    alteredQueryTokens: Collection<alteredQueryToken>;
}
export interface alteredQueryToken {
    length: number;
    offset: number;
    suggestion: string;
}
export interface bucketAggregationRange {
    from: string | null;
    to: string | null;
}
export interface collapseProperty {
    fields: Collection<string> | null;
    limit: number | null;
}
export interface resultTemplate {
    body: Json;
    displayName: string;
}
export interface Dictionary {
}
export interface resultTemplateDictionary extends Dictionary {
}
export interface resultTemplateOption {
    enableResultTemplate: boolean;
}
export interface searchAggregation {
    buckets: Collection<searchBucket>;
    field: string;
}
export interface searchBucket {
    aggregationFilterToken: string;
    count: number;
    key: string;
}
export interface searchAlterationOptions {
    enableModification: boolean;
    enableSuggestion: boolean;
}
export interface searchHit {
    contentSource: string;
    hitId: string;
    isCollapsed: boolean;
    rank: number;
    resultTemplateId: string;
    summary: string;
    resource: entity;
}
export interface searchHitsContainer {
    aggregations: Collection<searchAggregation>;
    hits: Collection<searchHit>;
    moreResultsAvailable: boolean;
    total: number;
}
export interface searchQuery {
    queryString: string | null;
    queryTemplate: string;
}
export interface searchRequest {
    aggregationFilters: Collection<string>;
    aggregations: Collection<aggregationOption>;
    collapseProperties: Collection<collapseProperty>;
    contentSources: Collection<string>;
    enableTopResults: boolean;
    entityTypes: Collection<entityType>;
    fields: Collection<string>;
    from: number | null;
    query: searchQuery | null;
    queryAlterationOptions: searchAlterationOptions;
    region: string;
    resultTemplateOptions: resultTemplateOption;
    sharePointOneDriveOptions: sharePointOneDriveOptions;
    size: number | null;
    sortProperties: Collection<sortProperty>;
}
export interface sharePointOneDriveOptions {
    includeContent: searchContent;
}
export interface sortProperty {
    isDescending: boolean;
    name: string | null;
}
export interface searchResponse {
    hitsContainers: Collection<searchHitsContainer>;
    queryAlterationResponse: alterationResponse;
    resultTemplates: resultTemplateDictionary;
    searchTerms: Collection<string>;
}
export interface searchEntityProps { }
export type searchEntity = Entity<entity, searchEntityProps> & {
    query(requests: Collection<searchRequest>): Collection<searchResponse>;
}
export interface plannerAppliedCategories {
}
export interface plannerAssignment {
    assignedBy: identitySet;
    assignedDateTime: Date;
    orderHint: string;
}
export interface plannerAssignments {
}
export interface plannerCategoryDescriptions {
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
export interface plannerChecklistItem {
    isChecked: boolean;
    lastModifiedBy: identitySet;
    lastModifiedDateTime: Date;
    orderHint: string;
    title: string;
}
export interface plannerChecklistItems {
}
export interface plannerExternalReference {
    alias: string;
    lastModifiedBy: identitySet;
    lastModifiedDateTime: Date;
    previewPriority: string;
    type: string;
}
export interface plannerExternalReferences {
}
export interface plannerOrderHintsByAssignee {
}
export interface plannerPlanContainer {
    containerId: string;
    type: plannerContainerType;
    url: string;
}
export interface plannerUserIds {
}
export interface plannerProps extends entityProps {
    buckets: Collection<plannerBucket>;
    plans: Collection<plannerPlan>;
    tasks: Collection<plannerTask>;
}
export type planner = Entity<entity, plannerProps> & {
}
export interface plannerBucketProps extends entityProps {
    name: string | null;
    orderHint: string;
    planId: string;
    tasks: Collection<plannerTask>;
}
export type plannerBucket = Entity<entity, plannerBucketProps> & {
}
export interface plannerPlanProps extends entityProps {
    container: plannerPlanContainer;
    createdBy: identitySet;
    createdDateTime: Date;
    owner: string;
    title: string | null;
    buckets: Collection<plannerBucket>;
    details: plannerPlanDetails;
    tasks: Collection<plannerTask>;
}
export type plannerPlan = Entity<entity, plannerPlanProps> & {
}
export interface plannerTaskProps extends entityProps {
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
export type plannerTask = Entity<entity, plannerTaskProps> & {
}
export interface plannerAssignedToTaskBoardTaskFormatProps extends entityProps {
    orderHintsByAssignee: plannerOrderHintsByAssignee;
    unassignedOrderHint: string;
}
export type plannerAssignedToTaskBoardTaskFormat = Entity<entity, plannerAssignedToTaskBoardTaskFormatProps> & {
}
export interface plannerBucketTaskBoardTaskFormatProps extends entityProps {
    orderHint: string;
}
export type plannerBucketTaskBoardTaskFormat = Entity<entity, plannerBucketTaskBoardTaskFormatProps> & {
}
export interface plannerPlanDetailsProps extends entityProps {
    categoryDescriptions: plannerCategoryDescriptions;
    sharedWith: plannerUserIds;
}
export type plannerPlanDetails = Entity<entity, plannerPlanDetailsProps> & {
}
export interface plannerProgressTaskBoardTaskFormatProps extends entityProps {
    orderHint: string;
}
export type plannerProgressTaskBoardTaskFormat = Entity<entity, plannerProgressTaskBoardTaskFormatProps> & {
}
export interface plannerTaskDetailsProps extends entityProps {
    checklist: plannerChecklistItems;
    description: string;
    previewType: plannerPreviewType;
    references: plannerExternalReferences;
}
export type plannerTaskDetails = Entity<entity, plannerTaskDetailsProps> & {
}
export interface insightIdentity {
    address: string;
    displayName: string;
    id: string;
}
export interface resourceReference {
    id: string;
    type: string;
    webUrl: string;
}
export interface resourceVisualization {
    containerDisplayName: string;
    containerType: string;
    containerWebUrl: string;
    mediaType: string;
    previewImageUrl: string;
    previewText: string;
    title: string;
    type: string;
}
export interface sharingDetail {
    sharedBy: insightIdentity;
    sharedDateTime: Date;
    sharingReference: resourceReference;
    sharingSubject: string;
    sharingType: string;
}
export interface usageDetails {
    lastAccessedDateTime: Date;
    lastModifiedDateTime: Date;
}
export interface sharedInsightProps extends entityProps {
    lastShared: sharingDetail;
    resourceReference: resourceReference;
    resourceVisualization: resourceVisualization;
    sharingHistory: Collection<sharingDetail>;
    lastSharedMethod: entity;
    resource: entity;
}
export type sharedInsight = Entity<entity, sharedInsightProps> & {
}
export interface trendingProps extends entityProps {
    lastModifiedDateTime: Date;
    resourceReference: resourceReference;
    resourceVisualization: resourceVisualization;
    weight: number | null;
    resource: entity;
}
export type trending = Entity<entity, trendingProps> & {
}
export interface usedInsightProps extends entityProps {
    lastUsed: usageDetails;
    resourceReference: resourceReference;
    resourceVisualization: resourceVisualization;
    resource: entity;
}
export type usedInsight = Entity<entity, usedInsightProps> & {
}
export interface changeTrackedEntityProps extends entityProps {
    createdDateTime: Date;
    lastModifiedBy: identitySet;
    lastModifiedDateTime: Date;
}
export type changeTrackedEntity = Entity<entity, changeTrackedEntityProps> & {
}
export interface shiftPreferencesProps extends entityProps {
    availability: Collection<shiftAvailability>;
}
export type shiftPreferences = Entity<changeTrackedEntity, shiftPreferencesProps> & {
}
export interface CopyNotebookModel {
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
export interface notebookLinks {
    oneNoteClientUrl: externalLink;
    oneNoteWebUrl: externalLink;
}
export interface diagnostic {
    message: string;
    url: string;
}
export interface externalLink {
    href: string;
}
export interface onenoteOperationError {
    code: string;
    message: string;
}
export interface onenotePagePreview {
    links: onenotePagePreviewLinks;
    previewText: string;
}
export interface onenotePagePreviewLinks {
    previewImageUrl: externalLink;
}
export interface onenotePatchContentCommand {
    action: onenotePatchActionType | null;
    content: string;
    position: onenotePatchInsertPosition;
    target: string | null;
}
export interface pageLinks {
    oneNoteClientUrl: externalLink;
    oneNoteWebUrl: externalLink;
}
export interface recentNotebook {
    displayName: string;
    lastAccessedTime: Date;
    links: recentNotebookLinks;
    sourceService: onenoteSourceService;
}
export interface recentNotebookLinks {
    oneNoteClientUrl: externalLink;
    oneNoteWebUrl: externalLink;
}
export interface sectionLinks {
    oneNoteClientUrl: externalLink;
    oneNoteWebUrl: externalLink;
}
export interface onenoteEntityBaseModelProps extends entityProps {
    self: string;
}
export type onenoteEntityBaseModel = Entity<entity, onenoteEntityBaseModelProps> & {
}
export interface onenoteEntitySchemaObjectModelProps extends entityProps {
    createdDateTime: Date;
}
export type onenoteEntitySchemaObjectModel = Entity<onenoteEntityBaseModel, onenoteEntitySchemaObjectModelProps> & {
}
export interface onenoteEntityHierarchyModelProps extends entityProps {
    createdBy: identitySet;
    displayName: string;
    lastModifiedBy: identitySet;
    lastModifiedDateTime: Date;
}
export type onenoteEntityHierarchyModel = Entity<onenoteEntitySchemaObjectModel, onenoteEntityHierarchyModelProps> & {
}
export interface notebookProps extends entityProps {
    isDefault: boolean;
    isShared: boolean;
    links: notebookLinks;
    sectionGroupsUrl: string;
    sectionsUrl: string;
    userRole: onenoteUserRole;
    sectionGroups: Collection<sectionGroup>;
    sections: Collection<onenoteSection>;
}
export type notebook = Entity<onenoteEntityHierarchyModel, notebookProps> & {
    copyNotebook(groupId: string, renameAs: string, notebookFolder: string, siteCollectionId: string, siteId: string): onenoteOperation;
}
export interface sectionGroupProps extends entityProps {
    sectionGroupsUrl: string;
    sectionsUrl: string;
    parentNotebook: notebook;
    parentSectionGroup: sectionGroup;
    sectionGroups: Collection<sectionGroup>;
    sections: Collection<onenoteSection>;
}
export type sectionGroup = Entity<onenoteEntityHierarchyModel, sectionGroupProps> & {
}
export interface onenoteSectionProps extends entityProps {
    isDefault: boolean;
    links: sectionLinks;
    pagesUrl: string;
    pages: Collection<onenotePage>;
    parentNotebook: notebook;
    parentSectionGroup: sectionGroup;
}
export type onenoteSection = Entity<onenoteEntityHierarchyModel, onenoteSectionProps> & {
    copyToNotebook(id: string, groupId: string, renameAs: string, siteCollectionId: string, siteId: string): onenoteOperation;
    copyToSectionGroup(id: string, groupId: string, renameAs: string, siteCollectionId: string, siteId: string): onenoteOperation;
}
export interface operationProps extends entityProps {
    createdDateTime: Date;
    lastActionDateTime: Date;
    status: operationStatus;
}
export type operation = Entity<entity, operationProps> & {
}
export interface onenoteOperationProps extends entityProps {
    error: onenoteOperationError;
    percentComplete: string;
    resourceId: string;
    resourceLocation: string;
}
export type onenoteOperation = Entity<operation, onenoteOperationProps> & {
}
export interface onenotePageProps extends entityProps {
    content: Buffer;
    contentUrl: string;
    createdByAppId: string;
    lastModifiedDateTime: Date;
    level: number;
    links: pageLinks;
    order: number;
    title: string;
    userTags: Collection<string>;
    parentNotebook: notebook;
    parentSection: onenoteSection;
}
export type onenotePage = Entity<onenoteEntitySchemaObjectModel, onenotePageProps> & {
    preview(): onenotePagePreview;
    copyToSection(id: string, groupId: string, siteCollectionId: string, siteId: string): onenoteOperation;
    onenotePatchContent(): void;
}
export interface onenoteResourceProps extends entityProps {
    content: Buffer;
    contentUrl: string;
}
export type onenoteResource = Entity<onenoteEntityBaseModel, onenoteResourceProps> & {
}
export interface delegatedAdminAccessContainer {
    accessContainerId: string | null;
    accessContainerType: delegatedAdminAccessContainerType | null;
}
export interface delegatedAdminAccessDetails {
    unifiedRoles: Collection<unifiedRole> | null;
}
export interface unifiedRole {
    roleDefinitionId: string | null;
}
export interface delegatedAdminRelationshipCustomerParticipant {
    displayName: string;
    tenantId: string | null;
}
export interface delegatedAdminAccessAssignmentProps extends entityProps {
    accessContainer: delegatedAdminAccessContainer | null;
    accessDetails: delegatedAdminAccessDetails | null;
    createdDateTime: Date;
    lastModifiedDateTime: Date;
    status: delegatedAdminAccessAssignmentStatus;
}
export type delegatedAdminAccessAssignment = Entity<entity, delegatedAdminAccessAssignmentProps> & {
}
export interface delegatedAdminServiceManagementDetailProps extends entityProps {
    serviceManagementUrl: string | null;
    serviceName: string | null;
}
export type delegatedAdminServiceManagementDetail = Entity<entity, delegatedAdminServiceManagementDetailProps> & {
}
export interface delegatedAdminRelationshipOperationProps extends entityProps {
    createdDateTime: Date | null;
    data: string | null;
    lastModifiedDateTime: Date | null;
    operationType: delegatedAdminRelationshipOperationType | null;
    status: longRunningOperationStatus | null;
}
export type delegatedAdminRelationshipOperation = Entity<entity, delegatedAdminRelationshipOperationProps> & {
}
export interface delegatedAdminRelationshipRequestProps extends entityProps {
    action: delegatedAdminRelationshipRequestAction | null;
    createdDateTime: Date;
    lastModifiedDateTime: Date;
    status: delegatedAdminRelationshipRequestStatus;
}
export type delegatedAdminRelationshipRequest = Entity<entity, delegatedAdminRelationshipRequestProps> & {
}
export interface approvalSettings {
    approvalMode: string;
    approvalStages: Collection<unifiedApprovalStage>;
    isApprovalRequired: boolean;
    isApprovalRequiredForExtension: boolean;
    isRequestorJustificationRequired: boolean;
}
export interface unifiedApprovalStage {
    approvalStageTimeOutInDays: number;
    escalationApprovers: Collection<subjectSet>;
    escalationTimeInMinutes: number;
    isApproverJustificationRequired: boolean;
    isEscalationEnabled: boolean;
    primaryApprovers: Collection<subjectSet>;
}
export interface requestSchedule {
    expiration: expirationPattern;
    recurrence: patternedRecurrence;
    startDateTime: Date;
}
export interface ticketInfo {
    ticketNumber: string;
    ticketSystem: string;
}
export interface unifiedRoleManagementPolicyRuleTarget {
    caller: string;
    enforcedSettings: Collection<string>;
    inheritableSettings: Collection<string>;
    level: string;
    operations: Collection<unifiedRoleManagementPolicyRuleTargetOperations>;
    targetObjects: Collection<directoryObject>;
}
export interface unifiedRoleManagementPolicyRuleProps extends entityProps {
    target: unifiedRoleManagementPolicyRuleTarget;
}
export type unifiedRoleManagementPolicyRule = Entity<entity, unifiedRoleManagementPolicyRuleProps> & {
}
export interface unifiedRoleManagementPolicyApprovalRuleProps extends entityProps {
    setting: approvalSettings;
}
export type unifiedRoleManagementPolicyApprovalRule = Entity<unifiedRoleManagementPolicyRule, unifiedRoleManagementPolicyApprovalRuleProps> & {
}
export interface unifiedRoleManagementPolicyAuthenticationContextRuleProps extends entityProps {
    claimValue: string;
    isEnabled: boolean;
}
export type unifiedRoleManagementPolicyAuthenticationContextRule = Entity<unifiedRoleManagementPolicyRule, unifiedRoleManagementPolicyAuthenticationContextRuleProps> & {
}
export interface unifiedRoleManagementPolicyEnablementRuleProps extends entityProps {
    enabledRules: Collection<string>;
}
export type unifiedRoleManagementPolicyEnablementRule = Entity<unifiedRoleManagementPolicyRule, unifiedRoleManagementPolicyEnablementRuleProps> & {
}
export interface unifiedRoleManagementPolicyExpirationRuleProps extends entityProps {
    isExpirationRequired: boolean;
    maximumDuration: number;
}
export type unifiedRoleManagementPolicyExpirationRule = Entity<unifiedRoleManagementPolicyRule, unifiedRoleManagementPolicyExpirationRuleProps> & {
}
export interface unifiedRoleManagementPolicyNotificationRuleProps extends entityProps {
    isDefaultRecipientsEnabled: boolean;
    notificationLevel: string;
    notificationRecipients: Collection<string>;
    notificationType: string;
    recipientType: string;
}
export type unifiedRoleManagementPolicyNotificationRule = Entity<unifiedRoleManagementPolicyRule, unifiedRoleManagementPolicyNotificationRuleProps> & {
}
export interface archivedPrintJob {
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
export interface integerRange {
    end: number;
    start: number;
}
export interface printCertificateSigningRequest {
    content: string | null;
    transportKey: string | null;
}
export interface printDocumentUploadProperties {
    contentType: string | null;
    documentName: string | null;
    size: number | null;
}
export interface printerCapabilities {
    bottomMargins: Collection<number>;
    collation: boolean;
    colorModes: Collection<printColorMode>;
    contentTypes: Collection<string>;
    copiesPerJob: integerRange;
    dpis: Collection<number>;
    duplexModes: Collection<printDuplexMode>;
    feedOrientations: Collection<printerFeedOrientation>;
    finishings: Collection<printFinishing>;
    inputBins: Collection<string>;
    isColorPrintingSupported: boolean;
    isPageRangeSupported: boolean;
    leftMargins: Collection<number>;
    mediaColors: Collection<string>;
    mediaSizes: Collection<string>;
    mediaTypes: Collection<string>;
    multipageLayouts: Collection<printMultipageLayout>;
    orientations: Collection<printOrientation>;
    outputBins: Collection<string>;
    pagesPerSheet: Collection<number>;
    qualities: Collection<printQuality>;
    rightMargins: Collection<number>;
    scalings: Collection<printScaling>;
    supportsFitPdfToPage: boolean;
    topMargins: Collection<number>;
}
export interface printerDefaults {
    colorMode: printColorMode;
    contentType: string;
    copiesPerJob: number;
    dpi: number;
    duplexMode: printDuplexMode;
    finishings: Collection<printFinishing>;
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
export interface printerLocation {
    altitudeInMeters: number;
    building: string;
    city: string;
    countryOrRegion: string;
    floor: string;
    floorDescription: string;
    latitude: number;
    longitude: number;
    organization: Collection<string>;
    postalCode: string;
    roomDescription: string;
    roomName: string;
    site: string;
    stateOrProvince: string;
    streetAddress: string;
    subdivision: Collection<string>;
    subunit: Collection<string>;
}
export interface printerShareViewpoint {
    lastUsedDateTime: Date;
}
export interface printerStatus {
    description: string;
    details: Collection<printerProcessingStateDetail> | null;
    state: printerProcessingState | null;
}
export interface printJobConfiguration {
    collate: boolean;
    colorMode: printColorMode;
    copies: number;
    dpi: number;
    duplexMode: printDuplexMode;
    feedOrientation: printerFeedOrientation;
    finishings: Collection<printFinishing>;
    fitPdfToPage: boolean;
    inputBin: string;
    margin: printMargin;
    mediaSize: string;
    mediaType: string;
    multipageLayout: printMultipageLayout;
    orientation: printOrientation;
    outputBin: string;
    pageRanges: Collection<integerRange>;
    pagesPerSheet: number;
    quality: printQuality;
    scaling: printScaling;
}
export interface printMargin {
    bottom: number;
    left: number;
    right: number;
    top: number;
}
export interface printJobStatus {
    description: string | null;
    details: Collection<printJobStateDetail> | null;
    isAcquiredByPrinter: boolean | null;
    state: printJobProcessingState | null;
}
export interface printOperationStatus {
    description: string | null;
    state: printOperationProcessingState | null;
}
export interface printSettings {
    documentConversionEnabled: boolean | null;
}
export interface printTaskStatus {
    description: string | null;
    state: printTaskProcessingState | null;
}
export interface printerBaseProps extends entityProps {
    capabilities: printerCapabilities;
    defaults: printerDefaults;
    displayName: string | null;
    isAcceptingJobs: boolean;
    location: printerLocation;
    manufacturer: string;
    model: string;
    status: printerStatus | null;
    jobs: Collection<printJob>;
}
export type printerBase = Entity<entity, printerBaseProps> & {
}
export interface printerShareProps extends entityProps {
    allowAllUsers: boolean | null;
    createdDateTime: Date | null;
    viewPoint: printerShareViewpoint;
    allowedGroups: Collection<group>;
    allowedUsers: Collection<user>;
    printer: printer;
}
export type printerShare = Entity<printerBase, printerShareProps> & {
}
export interface printProps extends entityProps {
    settings: printSettings;
    connectors: Collection<printConnector>;
    operations: Collection<printOperation>;
    printers: Collection<printer>;
    services: Collection<printService>;
    shares: Collection<printerShare>;
    taskDefinitions: Collection<printTaskDefinition>;
}
export type print = Entity<{}, printProps> & {
}
export interface printConnectorProps extends entityProps {
    appVersion: string | null;
    displayName: string | null;
    fullyQualifiedDomainName: string | null;
    location: printerLocation;
    operatingSystem: string | null;
    registeredDateTime: Date | null;
}
export type printConnector = Entity<entity, printConnectorProps> & {
}
export interface printOperationProps extends entityProps {
    createdDateTime: Date | null;
    status: printOperationStatus | null;
}
export type printOperation = Entity<entity, printOperationProps> & {
}
export interface printerProps extends entityProps {
    hasPhysicalDevice: boolean | null;
    isShared: boolean | null;
    lastSeenDateTime: Date;
    registeredDateTime: Date | null;
    connectors: Collection<printConnector>;
    shares: Collection<printerShare>;
    taskTriggers: Collection<printTaskTrigger>;
}
export type printer = Entity<printerBase, printerProps> & {
    restoreFactoryDefaults(): void;
}
export interface printServiceProps extends entityProps {
    endpoints: Collection<printServiceEndpoint>;
}
export type printService = Entity<entity, printServiceProps> & {
}
export interface printTaskDefinitionProps extends entityProps {
    createdBy: appIdentity | null;
    displayName: string | null;
    tasks: Collection<printTask>;
}
export type printTaskDefinition = Entity<entity, printTaskDefinitionProps> & {
}
export interface printDocumentProps extends entityProps {
    contentType: string;
    displayName: string;
    size: number | null;
}
export type printDocument = Entity<entity, printDocumentProps> & {
    createUploadSession(properties: printDocumentUploadProperties): uploadSession;
}
export interface printTaskTriggerProps extends entityProps {
    event: printEvent | null;
    definition: printTaskDefinition | null;
}
export type printTaskTrigger = Entity<entity, printTaskTriggerProps> & {
}
export interface printJobProps extends entityProps {
    configuration: printJobConfiguration | null;
    createdBy: userIdentity;
    createdDateTime: Date | null;
    isFetchable: boolean | null;
    redirectedFrom: string;
    redirectedTo: string;
    status: printJobStatus | null;
    documents: Collection<printDocument>;
    tasks: Collection<printTask>;
}
export type printJob = Entity<entity, printJobProps> & {
    cancel(): void;
    start(): printJobStatus;
    abort(): void;
    redirect(destinationPrinterId: string, configuration: printJobConfiguration): printJob;
}
export interface printerCreateOperationProps extends entityProps {
    certificate: string;
    printer: printer;
}
export type printerCreateOperation = Entity<printOperation, printerCreateOperationProps> & {
}
export interface printTaskProps extends entityProps {
    parentUrl: string | null;
    status: printTaskStatus | null;
    definition: printTaskDefinition | null;
    trigger: printTaskTrigger | null;
}
export type printTask = Entity<entity, printTaskProps> & {
}
export interface printServiceEndpointProps extends entityProps {
    displayName: string | null;
    uri: string | null;
}
export type printServiceEndpoint = Entity<entity, printServiceEndpointProps> & {
}
export interface imageInfo {
    addImageQuery: boolean;
    alternateText: string;
    alternativeText: string;
    iconUrl: string;
}
export interface visualInfo {
    attribution: imageInfo;
    backgroundColor: string;
    content: Json;
    description: string;
    displayText: string | null;
}
export interface activityHistoryItemProps extends entityProps {
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
export type activityHistoryItem = Entity<entity, activityHistoryItemProps> & {
}
export interface dataPolicyOperationProps extends entityProps {
    completedDateTime: Date;
    progress: number | null;
    status: dataPolicyOperationStatus;
    storageLocation: string;
    submittedDateTime: Date | null;
    userId: string | null;
}
export type dataPolicyOperation = Entity<entity, dataPolicyOperationProps> & {
}
export interface assignedTrainingInfo {
    assignedUserCount: number;
    completedUserCount: number;
    displayName: string;
}
export interface attackSimulationRepeatOffender {
    attackSimulationUser: attackSimulationUser;
    repeatOffenceCount: number;
}
export interface attackSimulationUser {
    displayName: string;
    email: string;
    userId: string;
}
export interface attackSimulationSimulationUserCoverage {
    attackSimulationUser: attackSimulationUser;
    clickCount: number;
    compromisedCount: number;
    latestSimulationDateTime: Date;
    simulationCount: number;
}
export interface attackSimulationTrainingUserCoverage {
    attackSimulationUser: attackSimulationUser;
    userTrainings: Collection<userTrainingStatusInfo>;
}
export interface userTrainingStatusInfo {
    assignedDateTime: Date;
    completionDateTime: Date;
    displayName: string;
    trainingStatus: trainingStatus;
}
export interface emailIdentity extends identity {
    email: string;
}
export interface recommendedAction {
    actionWebUrl: string;
    potentialScoreImpact: number;
    title: string;
}
export interface simulationEvent {
    count: number;
    eventName: string;
}
export interface simulationEventsContent {
    compromisedRate: number;
    events: Collection<simulationEvent>;
}
export interface simulationReport {
    overview: simulationReportOverview;
    simulationUsers: Collection<userSimulationDetails>;
}
export interface simulationReportOverview {
    recommendedActions: Collection<recommendedAction>;
    resolvedTargetsCount: number;
    simulationEventsContent: simulationEventsContent;
    trainingEventsContent: trainingEventsContent;
}
export interface userSimulationDetails {
    assignedTrainingsCount: number;
    completedTrainingsCount: number;
    compromisedDateTime: Date;
    inProgressTrainingsCount: number;
    isCompromised: boolean;
    reportedPhishDateTime: Date;
    simulationEvents: Collection<userSimulationEventInfo>;
    simulationUser: attackSimulationUser;
    trainingEvents: Collection<userTrainingEventInfo>;
}
export interface trainingEventsContent {
    assignedTrainingsInfos: Collection<assignedTrainingInfo>;
    trainingsAssignedUserCount: number;
}
export interface userSimulationEventInfo {
    browser: string;
    eventDateTime: Date;
    eventName: string;
    ipAddress: string;
    osPlatformDeviceDetails: string;
}
export interface userTrainingEventInfo {
    displayName: string;
    latestTrainingStatus: trainingStatus;
    trainingAssignedProperties: userTrainingContentEventInfo;
    trainingCompletedProperties: userTrainingContentEventInfo;
    trainingUpdatedProperties: userTrainingContentEventInfo;
}
export interface userTrainingContentEventInfo {
    browser: string;
    contentDateTime: Date;
    ipAddress: string;
    osPlatformDeviceDetails: string;
    potentialScoreImpact: number;
}
export interface simulationAutomationProps extends entityProps {
    createdBy: emailIdentity;
    createdDateTime: Date;
    description: string;
    displayName: string;
    lastModifiedBy: emailIdentity;
    lastModifiedDateTime: Date;
    lastRunDateTime: Date;
    nextRunDateTime: Date;
    status: simulationAutomationStatus;
    runs: Collection<simulationAutomationRun>;
}
export type simulationAutomation = Entity<entity, simulationAutomationProps> & {
}
export interface simulationProps extends entityProps {
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
export type simulation = Entity<entity, simulationProps> & {
}
export interface simulationAutomationRunProps extends entityProps {
    endDateTime: Date;
    simulationId: string;
    startDateTime: Date;
    status: simulationAutomationRunStatus;
}
export type simulationAutomationRun = Entity<entity, simulationAutomationRunProps> & {
}
export interface alertDetection {
    detectionType: string;
    method: string;
    name: string;
}
export interface alertHistoryState {
    appId: string;
    assignedTo: string;
    comments: Collection<string>;
    feedback: alertFeedback;
    status: alertStatus;
    updatedDateTime: Date;
    user: string;
}
export interface alertTrigger {
    name: string;
    type: string;
    value: string;
}
export interface averageComparativeScore {
    averageScore: number;
    basis: string;
}
export interface certificationControl {
    name: string;
    url: string;
}
export interface cloudAppSecurityState {
    destinationServiceIp: string;
    destinationServiceName: string;
    riskScore: string;
}
export interface complianceInformation {
    certificationControls: Collection<certificationControl>;
    certificationName: string;
}
export interface controlScore {
    controlCategory: string;
    controlName: string;
    description: string;
    score: number;
}
export interface fileHash {
    hashType: fileHashType;
    hashValue: string;
}
export interface fileSecurityState {
    fileHash: fileHash;
    name: string;
    path: string;
    riskScore: string;
}
export interface hostSecurityState {
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
export interface investigationSecurityState {
    name: string;
    status: string;
}
export interface malwareState {
    category: string;
    family: string;
    name: string;
    severity: string;
    wasRunning: boolean;
}
export interface messageSecurityState {
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
export interface networkConnection {
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
export interface process {
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
export interface registryKeyState {
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
export interface secureScoreControlStateUpdate {
    assignedTo: string;
    comment: string;
    state: string;
    updatedBy: string;
    updatedDateTime: Date;
}
export interface securityResource {
    resource: string;
    resourceType: securityResourceType;
}
export interface securityVendorInformation {
    provider: string;
    providerVersion: string;
    subProvider: string;
    vendor: string;
}
export interface uriClickSecurityState {
    clickAction: string;
    clickDateTime: Date;
    id: string;
    sourceId: string;
    uriDomain: string;
    verdict: string;
}
export interface userSecurityState {
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
export interface vulnerabilityState {
    cve: string;
    severity: string;
    wasRunning: boolean;
}
export interface participantJoiningResponse {
}
export interface acceptJoinResponse extends participantJoiningResponse {
}
export interface mediaConfig {
}
export interface appHostedMediaConfig extends mediaConfig {
    blob: string;
}
export interface attendanceInterval {
    durationInSeconds: number;
    joinDateTime: Date;
    leaveDateTime: Date;
}
export interface broadcastMeetingCaptionSettings {
    isCaptionEnabled: boolean;
    spokenLanguage: string;
    translationLanguages: Collection<string>;
}
export interface callMediaState {
    audio: mediaState;
}
export interface callOptions {
    hideBotAfterEscalation: boolean;
    isContentSharingNotificationEnabled: boolean;
}
export interface callRoute {
    final: identitySet | null;
    original: identitySet | null;
    routingType: routingType | null;
}
export interface callTranscriptionInfo {
    lastModifiedDateTime: Date;
    state: callTranscriptionState | null;
}
export interface commsNotification {
    changeType: changeType | null;
    resourceUrl: string | null;
}
export interface commsNotifications {
    value: Collection<commsNotification>;
}
export interface incomingCallOptions extends callOptions {
}
export interface incomingContext {
    observedParticipantId: string;
    onBehalfOf: identitySet;
    sourceParticipantId: string;
    transferor: identitySet;
}
export interface invitationParticipantInfo {
    hidden: boolean;
    identity: identitySet | null;
    participantId: string;
    removeFromDefaultAudioRoutingGroup: boolean;
    replacesCallId: string;
}
export interface inviteNewBotResponse extends participantJoiningResponse {
    inviteUri: string;
}
export interface meetingInfo {
}
export interface joinMeetingIdMeetingInfo extends meetingInfo {
    joinMeetingId: string | null;
    passcode: string;
}
export interface mediaInfo {
    resourceId: string;
    uri: string | null;
}
export interface prompt {
}
export interface mediaPrompt extends prompt {
    mediaInfo: mediaInfo | null;
}
export interface mediaStream {
    direction: mediaDirection | null;
    label: string;
    mediaType: modality | null;
    serverMuted: boolean | null;
    sourceId: string | null;
}
export interface meetingParticipantInfo {
    identity: identitySet;
    role: onlineMeetingRole;
    upn: string;
}
export interface onlineMeetingRestricted {
    contentSharingDisabled: onlineMeetingContentSharingDisabledReason;
    videoDisabled: onlineMeetingVideoDisabledReason;
}
export interface organizerMeetingInfo extends meetingInfo {
    organizer: identitySet | null;
}
export interface outgoingCallOptions extends callOptions {
}
export interface participantInfo {
    countryCode: string;
    endpointType: endpointType;
    identity: identitySet | null;
    languageId: string;
    participantId: string;
    region: string;
}
export interface presenceStatusMessage {
    expiryDateTime: dateTimeTimeZone;
    message: itemBody;
    publishedDateTime: Date;
}
export interface recordingInfo {
    initiator: identitySet;
    recordingStatus: recordingStatus | null;
}
export interface rejectJoinResponse extends participantJoiningResponse {
    reason: rejectReason | null;
}
export interface serviceHostedMediaConfig extends mediaConfig {
    preFetchMedia: Collection<mediaInfo>;
}
export interface teleconferenceDeviceMediaQuality {
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
export interface teleconferenceDeviceQuality {
    callChainId: string | null;
    cloudServiceDeploymentEnvironment: string;
    cloudServiceDeploymentId: string;
    cloudServiceInstanceName: string;
    cloudServiceName: string;
    deviceDescription: string | null;
    deviceName: string | null;
    mediaLegId: string | null;
    mediaQualityList: Collection<teleconferenceDeviceMediaQuality> | null;
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
export interface toneInfo {
    sequenceId: number | null;
    tone: tone | null;
}
export interface commsOperationProps extends entityProps {
    clientContext: string;
    resultInfo: resultInfo;
    status: operationStatus | null;
}
export type commsOperation = Entity<entity, commsOperationProps> & {
}
export interface addLargeGalleryViewOperationProps { }
export type addLargeGalleryViewOperation = Entity<commsOperation, addLargeGalleryViewOperationProps> & {
}
export interface attendanceRecordProps extends entityProps {
    attendanceIntervals: Collection<attendanceInterval>;
    emailAddress: string;
    identity: identity;
    role: string;
    totalAttendanceInSeconds: number;
}
export type attendanceRecord = Entity<entity, attendanceRecordProps> & {
}
export interface audioRoutingGroupProps extends entityProps {
    receivers: Collection<string>;
    routingMode: routingMode | null;
    sources: Collection<string>;
}
export type audioRoutingGroup = Entity<entity, audioRoutingGroupProps> & {
}
export interface contentSharingSessionProps { }
export type contentSharingSession = Entity<entity, contentSharingSessionProps> & {
}
export interface participantProps extends entityProps {
    info: participantInfo | null;
    isInLobby: boolean | null;
    isMuted: boolean | null;
    mediaStreams: Collection<mediaStream>;
    metadata: string;
    recordingInfo: recordingInfo;
    restrictedExperience: onlineMeetingRestricted;
}
export type participant = Entity<entity, participantProps> & {
    mute(clientContext: string): muteParticipantOperation;
    startHoldMusic(customPrompt: prompt, clientContext: string): startHoldMusicOperation;
    stopHoldMusic(clientContext: string): stopHoldMusicOperation;
}
export interface cancelMediaProcessingOperationProps { }
export type cancelMediaProcessingOperation = Entity<commsOperation, cancelMediaProcessingOperationProps> & {
}
export interface inviteParticipantsOperationProps extends entityProps {
    participants: Collection<invitationParticipantInfo> | null;
}
export type inviteParticipantsOperation = Entity<commsOperation, inviteParticipantsOperationProps> & {
}
export interface muteParticipantOperationProps { }
export type muteParticipantOperation = Entity<commsOperation, muteParticipantOperationProps> & {
}
export interface participantJoiningNotificationProps extends entityProps {
    call: call;
}
export type participantJoiningNotification = Entity<entity, participantJoiningNotificationProps> & {
}
export interface participantLeftNotificationProps extends entityProps {
    participantId: string | null;
    call: call;
}
export type participantLeftNotification = Entity<entity, participantLeftNotificationProps> & {
}
export interface playPromptOperationProps { }
export type playPromptOperation = Entity<commsOperation, playPromptOperationProps> & {
}
export interface recordOperationProps extends entityProps {
    recordingAccessToken: string;
    recordingLocation: string;
}
export type recordOperation = Entity<commsOperation, recordOperationProps> & {
}
export interface startHoldMusicOperationProps { }
export type startHoldMusicOperation = Entity<commsOperation, startHoldMusicOperationProps> & {
}
export interface stopHoldMusicOperationProps { }
export type stopHoldMusicOperation = Entity<commsOperation, stopHoldMusicOperationProps> & {
}
export interface subscribeToToneOperationProps { }
export type subscribeToToneOperation = Entity<commsOperation, subscribeToToneOperationProps> & {
}
export interface unmuteParticipantOperationProps { }
export type unmuteParticipantOperation = Entity<commsOperation, unmuteParticipantOperationProps> & {
}
export interface updateRecordingStatusOperationProps { }
export type updateRecordingStatusOperation = Entity<commsOperation, updateRecordingStatusOperationProps> & {
}
export interface passwordResetResponse {
    newPassword: string;
}
export interface authenticationMethodProps { }
export type authenticationMethod = Entity<entity, authenticationMethodProps> & {
    resetPassword(newPassword: string): passwordResetResponse;
}
export interface emailAuthenticationMethodProps extends entityProps {
    emailAddress: string;
}
export type emailAuthenticationMethod = Entity<authenticationMethod, emailAuthenticationMethodProps> & {
}
export interface fido2AuthenticationMethodProps extends entityProps {
    aaGuid: string;
    attestationCertificates: Collection<string>;
    attestationLevel: attestationLevel;
    createdDateTime: Date;
    displayName: string;
    model: string;
}
export type fido2AuthenticationMethod = Entity<authenticationMethod, fido2AuthenticationMethodProps> & {
}
export interface microsoftAuthenticatorAuthenticationMethodProps extends entityProps {
    createdDateTime: Date;
    deviceTag: string;
    displayName: string;
    phoneAppVersion: string;
    device: device;
}
export type microsoftAuthenticatorAuthenticationMethod = Entity<authenticationMethod, microsoftAuthenticatorAuthenticationMethodProps> & {
}
export interface passwordAuthenticationMethodProps extends entityProps {
    createdDateTime: Date;
    password: string;
}
export type passwordAuthenticationMethod = Entity<authenticationMethod, passwordAuthenticationMethodProps> & {
}
export interface phoneAuthenticationMethodProps extends entityProps {
    phoneNumber: string;
    phoneType: authenticationPhoneType;
    smsSignInState: authenticationMethodSignInState;
}
export type phoneAuthenticationMethod = Entity<authenticationMethod, phoneAuthenticationMethodProps> & {
    disableSmsSignIn(): void;
    enableSmsSignIn(): void;
}
export interface softwareOathAuthenticationMethodProps extends entityProps {
    secretKey: string;
}
export type softwareOathAuthenticationMethod = Entity<authenticationMethod, softwareOathAuthenticationMethodProps> & {
}
export interface temporaryAccessPassAuthenticationMethodProps extends entityProps {
    createdDateTime: Date;
    isUsable: boolean;
    isUsableOnce: boolean;
    lifetimeInMinutes: number;
    methodUsabilityReason: string;
    startDateTime: Date;
    temporaryAccessPass: string;
}
export type temporaryAccessPassAuthenticationMethod = Entity<authenticationMethod, temporaryAccessPassAuthenticationMethodProps> & {
}
export interface windowsHelloForBusinessAuthenticationMethodProps extends entityProps {
    createdDateTime: Date;
    displayName: string;
    keyStrength: authenticationMethodKeyStrength;
    device: device;
}
export type windowsHelloForBusinessAuthenticationMethod = Entity<authenticationMethod, windowsHelloForBusinessAuthenticationMethodProps> & {
}
export interface changeNotification {
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
export interface changeNotificationEncryptedContent {
    data: string | null;
    dataKey: string | null;
    dataSignature: string | null;
    encryptionCertificateId: string | null;
    encryptionCertificateThumbprint: string | null;
}
export interface resourceData {
}
export interface changeNotificationCollection {
    validationTokens: Collection<string>;
    value: Collection<changeNotification> | null;
}
export interface actionResultPart {
    error: publicError;
}
export interface aadUserConversationMemberResult extends actionResultPart {
    userId: string;
}
export interface teamworkNotificationRecipient {
}
export interface aadUserNotificationRecipient extends teamworkNotificationRecipient {
    userId: string | null;
}
export interface eventMessageDetail {
}
export interface callEndedEventMessageDetail extends eventMessageDetail {
    callDuration: number;
    callEventType: teamworkCallEventType;
    callId: string;
    callParticipants: Collection<callParticipantInfo>;
    initiator: identitySet;
}
export interface callParticipantInfo {
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
export interface channelIdentity {
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
export interface chatMessageAttachment {
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
export interface chatMessageHistoryItem {
    actions: chatMessageActions | null;
    modifiedDateTime: Date | null;
    reaction: chatMessageReaction;
}
export interface chatMessageReaction {
    createdDateTime: Date | null;
    reactionType: string | null;
    user: chatMessageReactionIdentitySet | null;
}
export interface chatMessageMention {
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
export interface chatMessagePolicyViolation {
    dlpAction: chatMessagePolicyViolationDlpActionTypes;
    justificationText: string;
    policyTip: chatMessagePolicyViolationPolicyTip;
    userAction: chatMessagePolicyViolationUserActionTypes;
    verdictDetails: chatMessagePolicyViolationVerdictDetailsTypes;
}
export interface chatMessagePolicyViolationPolicyTip {
    complianceUrl: string;
    generalText: string;
    matchedConditionDescriptions: Collection<string>;
}
export interface chatMessageReactionIdentitySet extends identitySet {
}
export interface chatRenamedEventMessageDetail extends eventMessageDetail {
    chatDisplayName: string;
    chatId: string;
    initiator: identitySet;
}
export interface chatViewpoint {
    isHidden: boolean;
    lastMessageReadDateTime: Date;
}
export interface conversationMemberRoleUpdatedEventMessageDetail extends eventMessageDetail {
    conversationMemberRoles: Collection<string>;
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
    members: Collection<teamworkUserIdentity>;
    visibleHistoryStartDateTime: Date;
}
export interface membersDeletedEventMessageDetail extends eventMessageDetail {
    initiator: identitySet;
    members: Collection<teamworkUserIdentity>;
}
export interface membersJoinedEventMessageDetail extends eventMessageDetail {
    initiator: identitySet;
    members: Collection<teamworkUserIdentity>;
}
export interface membersLeftEventMessageDetail extends eventMessageDetail {
    initiator: identitySet;
    members: Collection<teamworkUserIdentity>;
}
export interface messagePinnedEventMessageDetail extends eventMessageDetail {
    eventDateTime: Date;
    initiator: identitySet;
}
export interface messageUnpinnedEventMessageDetail extends eventMessageDetail {
    eventDateTime: Date;
    initiator: identitySet;
}
export interface operationError {
    code: string;
    message: string;
}
export interface provisionChannelEmailResult {
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
export interface teamClassSettings {
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
export interface teamsAppAuthorization {
    requiredPermissionSet: teamsAppPermissionSet;
}
export interface teamsAppPermissionSet {
    resourceSpecificPermissions: Collection<teamsAppResourceSpecificPermission>;
}
export interface teamsAppInstalledEventMessageDetail extends eventMessageDetail {
    initiator: identitySet;
    teamsAppDisplayName: string;
    teamsAppId: string;
}
export interface teamsAppResourceSpecificPermission {
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
export interface teamsTabConfiguration {
    contentUrl: string;
    entityId: string;
    removeUrl: string;
    websiteUrl: string;
}
export interface teamUnarchivedEventMessageDetail extends eventMessageDetail {
    initiator: identitySet;
    teamId: string;
}
export interface teamworkActivityTopic {
    source: teamworkActivityTopicSource;
    value: string | null;
    webUrl: string;
}
export interface teamworkApplicationIdentity extends identity {
    applicationIdentityType: teamworkApplicationIdentityType;
}
export interface teamworkOnlineMeetingInfo {
    calendarEventId: string;
    joinWebUrl: string;
    organizer: teamworkUserIdentity;
}
export interface teamworkTagIdentity extends identity {
}
export interface aadUserConversationMemberProps extends entityProps {
    email: string;
    tenantId: string;
    userId: string;
    user: user;
}
export type aadUserConversationMember = Entity<conversationMember, aadUserConversationMemberProps> & {
}
export interface anonymousGuestConversationMemberProps extends entityProps {
    anonymousGuestId: string;
}
export type anonymousGuestConversationMember = Entity<conversationMember, anonymousGuestConversationMemberProps> & {
}
export interface appCatalogsProps extends entityProps {
    teamsApps: Collection<teamsApp>;
}
export type appCatalogs = Entity<entity, appCatalogsProps> & {
}
export interface teamsAppProps extends entityProps {
    displayName: string;
    distributionMethod: teamsAppDistributionMethod;
    externalId: string;
    appDefinitions: Collection<teamsAppDefinition>;
}
export type teamsApp = Entity<entity, teamsAppProps> & {
}
export interface teamInfoProps extends entityProps {
    displayName: string;
    tenantId: string;
    team: team;
}
export type teamInfo = Entity<entity, teamInfoProps> & {
}
export interface associatedTeamInfoProps { }
export type associatedTeamInfo = Entity<teamInfo, associatedTeamInfoProps> & {
}
export interface azureCommunicationServicesUserConversationMemberProps extends entityProps {
    azureCommunicationServicesId: string;
}
export type azureCommunicationServicesUserConversationMember = Entity<conversationMember, azureCommunicationServicesUserConversationMemberProps> & {
}
export interface chatMessageProps extends entityProps {
    attachments: Collection<chatMessageAttachment>;
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
    mentions: Collection<chatMessageMention>;
    messageHistory: Collection<chatMessageHistoryItem>;
    messageType: chatMessageType | null;
    policyViolation: chatMessagePolicyViolation;
    reactions: Collection<chatMessageReaction>;
    replyToId: string;
    subject: string;
    summary: string;
    webUrl: string;
    hostedContents: Collection<chatMessageHostedContent>;
    replies: Collection<chatMessage>;
}
export type chatMessage = Entity<entity, chatMessageProps> & {
    setReaction(): void;
    softDelete(): void;
    undoSoftDelete(): void;
    unsetReaction(): void;
}
export interface sharedWithChannelTeamInfoProps extends entityProps {
    isHostTeam: boolean;
    allowedMembers: Collection<conversationMember>;
}
export type sharedWithChannelTeamInfo = Entity<teamInfo, sharedWithChannelTeamInfoProps> & {
}
export interface teamsTabProps extends entityProps {
    configuration: teamsTabConfiguration;
    displayName: string;
    webUrl: string;
    teamsApp: teamsApp;
}
export type teamsTab = Entity<entity, teamsTabProps> & {
}
export interface chatMessageInfoProps extends entityProps {
    body: itemBody;
    createdDateTime: Date;
    eventDetail: eventMessageDetail;
    from: chatMessageFromIdentitySet;
    isDeleted: boolean;
    messageType: chatMessageType | null;
}
export type chatMessageInfo = Entity<entity, chatMessageInfoProps> & {
}
export interface pinnedChatMessageInfoProps extends entityProps {
    message: chatMessage;
}
export type pinnedChatMessageInfo = Entity<entity, pinnedChatMessageInfoProps> & {
}
export interface teamworkHostedContentProps extends entityProps {
    contentBytes: Buffer;
    contentType: string;
}
export type teamworkHostedContent = Entity<entity, teamworkHostedContentProps> & {
}
export interface chatMessageHostedContentProps { }
export type chatMessageHostedContent = Entity<teamworkHostedContent, chatMessageHostedContentProps> & {
}
export interface deletedTeamProps extends entityProps {
    channels: Collection<channel>;
}
export type deletedTeam = Entity<entity, deletedTeamProps> & {
}
export interface microsoftAccountUserConversationMemberProps extends entityProps {
    userId: string;
}
export type microsoftAccountUserConversationMember = Entity<conversationMember, microsoftAccountUserConversationMemberProps> & {
}
export interface skypeForBusinessUserConversationMemberProps extends entityProps {
    tenantId: string;
    userId: string;
}
export type skypeForBusinessUserConversationMember = Entity<conversationMember, skypeForBusinessUserConversationMemberProps> & {
}
export interface skypeUserConversationMemberProps extends entityProps {
    skypeId: string;
}
export type skypeUserConversationMember = Entity<conversationMember, skypeUserConversationMemberProps> & {
}
export interface teamsAppDefinitionProps extends entityProps {
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
export type teamsAppDefinition = Entity<entity, teamsAppDefinitionProps> & {
}
export interface teamworkBotProps { }
export type teamworkBot = Entity<entity, teamworkBotProps> & {
}
export interface teamsAppSettingsProps extends entityProps {
    allowUserRequestsForAppAccess: boolean;
}
export type teamsAppSettings = Entity<entity, teamsAppSettingsProps> & {
}
export interface teamworkProps extends entityProps {
    workforceIntegrations: Collection<workforceIntegration>;
    deletedTeams: Collection<deletedTeam>;
    teamsAppSettings: teamsAppSettings;
}
export type teamwork = Entity<entity, teamworkProps> & {
    sendActivityNotificationToRecipients(): void;
}
export interface workforceIntegrationProps extends entityProps {
    apiVersion: number;
    displayName: string;
    encryption: workforceIntegrationEncryption;
    isActive: boolean;
    supportedEntities: workforceIntegrationSupportedEntities;
    url: string;
}
export type workforceIntegration = Entity<changeTrackedEntity, workforceIntegrationProps> & {
}
export interface teamworkTagMemberProps extends entityProps {
    displayName: string;
    tenantId: string;
    userId: string;
}
export type teamworkTagMember = Entity<entity, teamworkTagMemberProps> & {
}
export interface userScopeTeamsAppInstallationProps extends entityProps {
    chat: chat;
}
export type userScopeTeamsAppInstallation = Entity<teamsAppInstallation, userScopeTeamsAppInstallationProps> & {
}
export interface scheduleEntity {
    endDateTime: Date;
    startDateTime: Date;
    theme: scheduleEntityTheme | null;
}
export interface shiftItem extends scheduleEntity {
    activities: Collection<shiftActivity>;
    displayName: string;
    notes: string;
}
export interface openShiftItem extends shiftItem {
    openSlotCount: number | null;
}
export interface shiftActivity {
    code: string;
    displayName: string;
    endDateTime: Date;
    isPaid: boolean;
    startDateTime: Date;
    theme: scheduleEntityTheme | null;
}
export interface shiftAvailability {
    recurrence: patternedRecurrence;
    timeSlots: Collection<timeRange>;
    timeZone: string;
}
export interface timeRange {
    endTime: Date;
    startTime: Date;
}
export interface timeOffItem extends scheduleEntity {
    timeOffReasonId: string;
}
export interface workforceIntegrationEncryption {
    protocol: workforceIntegrationEncryptionProtocol;
    secret: string;
}
export interface scheduleChangeRequestProps extends entityProps {
    assignedTo: scheduleChangeRequestActor;
    managerActionDateTime: Date;
    managerActionMessage: string;
    managerUserId: string;
    senderDateTime: Date;
    senderMessage: string;
    senderUserId: string;
    state: scheduleChangeState;
}
export type scheduleChangeRequest = Entity<changeTrackedEntity, scheduleChangeRequestProps> & {
    decline(): void;
    approve(): void;
}
export interface offerShiftRequestProps extends entityProps {
    recipientActionDateTime: Date;
    recipientActionMessage: string;
    recipientUserId: string;
    senderShiftId: string;
}
export type offerShiftRequest = Entity<scheduleChangeRequest, offerShiftRequestProps> & {
}
export interface openShiftProps extends entityProps {
    draftOpenShift: openShiftItem;
    schedulingGroupId: string;
    sharedOpenShift: openShiftItem;
}
export type openShift = Entity<changeTrackedEntity, openShiftProps> & {
}
export interface openShiftChangeRequestProps extends entityProps {
    openShiftId: string;
}
export type openShiftChangeRequest = Entity<scheduleChangeRequest, openShiftChangeRequestProps> & {
}
export interface schedulingGroupProps extends entityProps {
    displayName: string;
    isActive: boolean;
    userIds: Collection<string>;
}
export type schedulingGroup = Entity<changeTrackedEntity, schedulingGroupProps> & {
}
export interface shiftProps extends entityProps {
    draftShift: shiftItem;
    schedulingGroupId: string;
    sharedShift: shiftItem;
    userId: string;
}
export type shift = Entity<changeTrackedEntity, shiftProps> & {
}
export interface swapShiftsChangeRequestProps extends entityProps {
    recipientShiftId: string;
}
export type swapShiftsChangeRequest = Entity<offerShiftRequest, swapShiftsChangeRequestProps> & {
}
export interface timeOffReasonProps extends entityProps {
    displayName: string;
    iconType: timeOffReasonIconType;
    isActive: boolean;
}
export type timeOffReason = Entity<changeTrackedEntity, timeOffReasonProps> & {
}
export interface timeOffRequestProps extends entityProps {
    endDateTime: Date;
    startDateTime: Date;
    timeOffReasonId: string;
}
export type timeOffRequest = Entity<scheduleChangeRequest, timeOffRequestProps> & {
}
export interface timeOffProps extends entityProps {
    draftTimeOff: timeOffItem;
    sharedTimeOff: timeOffItem;
    userId: string;
}
export type timeOff = Entity<changeTrackedEntity, timeOffProps> & {
}
export interface emailFileAssessmentRequestProps extends entityProps {
    contentData: string | null;
    destinationRoutingReason: mailDestinationRoutingReason;
    recipientEmail: string | null;
}
export type emailFileAssessmentRequest = Entity<threatAssessmentRequest, emailFileAssessmentRequestProps> & {
}
export interface fileAssessmentRequestProps extends entityProps {
    contentData: string | null;
    fileName: string | null;
}
export type fileAssessmentRequest = Entity<threatAssessmentRequest, fileAssessmentRequestProps> & {
}
export interface mailAssessmentRequestProps extends entityProps {
    destinationRoutingReason: mailDestinationRoutingReason;
    messageUri: string | null;
    recipientEmail: string | null;
}
export type mailAssessmentRequest = Entity<threatAssessmentRequest, mailAssessmentRequestProps> & {
}
export interface threatAssessmentResultProps extends entityProps {
    createdDateTime: Date;
    message: string;
    resultType: threatAssessmentResultType;
}
export type threatAssessmentResult = Entity<entity, threatAssessmentResultProps> & {
}
export interface urlAssessmentRequestProps extends entityProps {
    url: string | null;
}
export type urlAssessmentRequest = Entity<threatAssessmentRequest, urlAssessmentRequestProps> & {
}
export interface attachmentInfo {
    attachmentType: attachmentType;
    contentType: string;
    name: string;
    size: number;
}
export interface attachmentBaseProps extends entityProps {
    contentType: string;
    lastModifiedDateTime: Date;
    name: string;
    size: number | null;
}
export type attachmentBase = Entity<entity, attachmentBaseProps> & {
}
export interface attachmentSessionProps extends entityProps {
    content: Buffer;
    expirationDateTime: Date;
    nextExpectedRanges: Collection<string>;
}
export type attachmentSession = Entity<entity, attachmentSessionProps> & {
}
export interface checklistItemProps extends entityProps {
    checkedDateTime: Date;
    createdDateTime: Date | null;
    displayName: string;
    isChecked: boolean;
}
export type checklistItem = Entity<entity, checklistItemProps> & {
}
export interface linkedResourceProps extends entityProps {
    applicationName: string;
    displayName: string;
    externalId: string;
    webUrl: string;
}
export type linkedResource = Entity<entity, linkedResourceProps> & {
}
export interface taskFileAttachmentProps extends entityProps {
    contentBytes: Buffer | null;
}
export type taskFileAttachment = Entity<attachmentBase, taskFileAttachmentProps> & {
}
export interface todoTaskListProps extends entityProps {
    displayName: string;
    isOwner: boolean | null;
    isShared: boolean | null;
    wellknownListName: wellknownListName | null;
    extensions: Collection<extension>;
    tasks: Collection<todoTask>;
}
export type todoTaskList = Entity<entity, todoTaskListProps> & {
}
export interface todoTaskProps extends entityProps {
    body: itemBody;
    bodyLastModifiedDateTime: Date | null;
    categories: Collection<string>;
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
    attachments: Collection<attachmentBase>;
    attachmentSessions: Collection<attachmentSession>;
    checklistItems: Collection<checklistItem>;
    extensions: Collection<extension>;
    linkedResources: Collection<linkedResource>;
}
export type todoTask = Entity<entity, todoTaskProps> & {
}
export interface employeeExperienceProps extends entityProps {
    learningCourseActivities: Collection<learningCourseActivity>;
    learningProviders: Collection<learningProvider>;
}
export type employeeExperience = Entity<{}, employeeExperienceProps> & {
}
export interface learningCourseActivityProps extends entityProps {
    completedDateTime: Date;
    completionPercentage: number;
    externalcourseActivityId: string;
    learnerUserId: string | null;
    learningContentId: string | null;
    learningProviderId: string;
    status: courseStatus;
}
export type learningCourseActivity = Entity<entity, learningCourseActivityProps> & {
}
export interface learningProviderProps extends entityProps {
    displayName: string | null;
    isCourseActivitySyncEnabled: boolean;
    loginWebUrl: string;
    longLogoWebUrlForDarkTheme: string | null;
    longLogoWebUrlForLightTheme: string | null;
    squareLogoWebUrlForDarkTheme: string | null;
    squareLogoWebUrlForLightTheme: string | null;
    learningContents: Collection<learningContent>;
    learningCourseActivities: Collection<learningCourseActivity>;
}
export type learningProvider = Entity<entity, learningProviderProps> & {
}
export interface learningAssignmentProps extends entityProps {
    assignedDateTime: Date;
    assignerUserId: string;
    assignmentType: assignmentType | null;
    dueDateTime: dateTimeTimeZone;
    notes: itemBody;
}
export type learningAssignment = Entity<learningCourseActivity, learningAssignmentProps> & {
}
export interface learningContentProps extends entityProps {
    additionalTags: Collection<string>;
    contentWebUrl: string | null;
    contributors: Collection<string>;
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
    skillTags: Collection<string>;
    sourceName: string;
    thumbnailWebUrl: string;
    title: string | null;
}
export type learningContent = Entity<entity, learningContentProps> & {
}
export interface learningSelfInitiatedCourseProps extends entityProps {
    startedDateTime: Date;
}
export type learningSelfInitiatedCourse = Entity<learningCourseActivity, learningSelfInitiatedCourseProps> & {
}
export interface GraphService {
    invitations: Collection<invitation> & {
        invitedUser: Collection<user>;
    }
    users: Collection<user> & {
        createdObjects: Collection<directoryObject>;
        directReports: Collection<directoryObject>;
        manager: Collection<directoryObject>;
        memberOf: Collection<directoryObject>;
        ownedDevices: Collection<directoryObject>;
        ownedObjects: Collection<directoryObject>;
        registeredDevices: Collection<directoryObject>;
        transitiveMemberOf: Collection<directoryObject>;
    }
    applicationTemplates: Collection<applicationTemplate>;
    authenticationMethodConfigurations: Collection<authenticationMethodConfiguration>;
    identityProviders: Collection<identityProvider>;
    applications: Collection<application> & {
        createdOnBehalfOf: Collection<directoryObject>;
        owners: Collection<directoryObject>;
    }
    certificateBasedAuthConfiguration: Collection<certificateBasedAuthConfiguration>;
    contacts: Collection<orgContact> & {
        directReports: Collection<directoryObject>;
        manager: Collection<directoryObject>;
        memberOf: Collection<directoryObject>;
        transitiveMemberOf: Collection<directoryObject>;
    }
    contracts: Collection<contract>;
    devices: Collection<device> & {
        registeredOwners: Collection<directoryObject>;
        registeredUsers: Collection<directoryObject>;
        transitiveMemberOf: Collection<directoryObject>;
    }
    directoryObjects: Collection<directoryObject>;
    directoryRoles: Collection<directoryRole> & {
        members: Collection<directoryObject>;
    }
    directoryRoleTemplates: Collection<directoryRoleTemplate>;
    domainDnsRecords: Collection<domainDnsRecord>;
    domains: Collection<domain> & {
        domainNameReferences: Collection<directoryObject>;
    }
    groups: Collection<group> & {
        createdOnBehalfOf: Collection<directoryObject>;
        memberOf: Collection<directoryObject>;
        members: Collection<directoryObject>;
        owners: Collection<directoryObject>;
        transitiveMemberOf: Collection<directoryObject>;
        transitiveMembers: Collection<directoryObject>;
    }
    groupSettings: Collection<groupSetting>;
    groupSettingTemplates: Collection<groupSettingTemplate>;
    oauth2PermissionGrants: Collection<oAuth2PermissionGrant>;
    organization: Collection<organization> & {
        certificateBasedAuthConfiguration: certificateBasedAuthConfiguration;
    }
    permissionGrants: Collection<resourceSpecificPermissionGrant>;
    scopedRoleMemberships: Collection<scopedRoleMembership>;
    servicePrincipals: Collection<servicePrincipal> & {
        createdObjects: Collection<directoryObject>;
        memberOf: Collection<directoryObject>;
        oauth2PermissionGrants: Collection<oAuth2PermissionGrant>;
        ownedObjects: Collection<directoryObject>;
        owners: Collection<directoryObject>;
        transitiveMemberOf: Collection<directoryObject>;
    }
    subscribedSkus: Collection<subscribedSku>;
    places: Collection<place>;
    drives: Collection<drive>;
    shares: Collection<sharedDriveItem>;
    sites: Collection<site>;
    schemaExtensions: Collection<schemaExtension>;
    groupLifecyclePolicies: Collection<groupLifecyclePolicy>;
    filterOperators: Collection<filterOperatorSchema>;
    functions: Collection<attributeMappingFunctionSchema>;
    agreementAcceptances: Collection<agreementAcceptance>;
    agreements: Collection<agreement>;
    dataPolicyOperations: Collection<dataPolicyOperation>;
    subscriptions: Collection<subscription>;
    connections: Collection<{}>;
    chats: Collection<chat>;
    teams: Collection<team> & {
        group: Collection<group>;
        template: Collection<teamsTemplate>;
    }
    teamsTemplates: Collection<teamsTemplate>;
    identityGovernance: Singleton<identityGovernance>;
    auditLogs: Singleton<auditLogRoot>;
    reports: Singleton<reportRoot>;
    authenticationMethodsPolicy: Singleton<authenticationMethodsPolicy>;
    solutions: Singleton<solutionsRoot>;
    privacy: Singleton<privacy>;
    security: Singleton<security>;
    compliance: Singleton<compliance>;
    identity: Singleton<identityContainer>;
    directory: Singleton<directory>;
    me: Singleton<user>;
    policies: Singleton<policyRoot>;
    tenantRelationships: Singleton<tenantRelationship>;
    admin: Singleton<admin>;
    education: Singleton<educationRoot>;
    roleManagement: Singleton<roleManagement>;
    drive: Singleton<drive>;
    communications: Singleton<cloudCommunications>;
    identityProtection: Singleton<identityProtectionRoot>;
    deviceAppManagement: Singleton<deviceAppManagement>;
    deviceManagement: Singleton<deviceManagement>;
    search: Singleton<searchEntity>;
    planner: Singleton<planner>;
    print: Singleton<print>;
    external: Singleton<{}>;
    appCatalogs: Singleton<appCatalogs>;
    teamwork: Singleton<teamwork>;
    informationProtection: Singleton<informationProtection>;
    employeeExperience: Singleton<employeeExperience>;
}