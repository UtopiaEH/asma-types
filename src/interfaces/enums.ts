// deprecated, replaced with QueriesInitiator
export enum InitiatorTypes {
    Customer = 'customer',
    Patient = 'patient',
    SelfCompletable = 'self-completable',
}
// deprecated, replaced with TemplatesContext
export enum QnrContextTypes {
    Advoca = 'advoca',
    Portal = 'portal',
    Outlook = 'outlook',
}
export enum  DocSignicatSignStatusTypes {
    Complteted = 'completed',
    Rejected = 'rejected',
    Waiting = 'waiting'
}

export enum DocProxyStatusTypes {
    Signed = 'signed',
    WaitingForSigning = 'waiting_for_signing',
    OnlyForView = 'only_for_view',
    /* download = 'download',
    uploaded = 'uploaded' */
}
export enum QuestionTypes {
    BooleanQuestion = 'BooleanQuestion',
    CheckBoxes = 'CheckBoxes',
    CompositeQuestion = 'CompositeQuestion',
    DateField = 'DateField',
    Dropdown = 'Dropdown',
    FormatNumber = 'FormatNumber',
    LinearScale = 'LinearScale',
    Link = 'Link',
    RadioButtons = 'RadioButtons',
    TextLong = 'TextLong',
    TextShort = 'TextShort',
    Emoticons = 'Emoticons',
    DocumentUpload = 'DocumentUpload',
}

export enum ActorTypes {
    Mappable = 'mappable',
    Custom = 'custom',
    Complex = 'complex',
}

export enum ConsentsGroupTypes {
    GENERAL = 'GENERAL',
    QUERY = 'QUERY',
    COMMUNICATION = 'COMMUNICATION',
}

export enum ConsentsTypeTypes {
    MANDATORY = 'MANDATORY',
    OPTIONAL = 'OPTIONAL',
}

export enum DocumentPatientSecurityLevelTypes {
    ONE = '1',
    TWO = '2',
    THREE = '3',
    FOUR = '4',
}

export enum QueriesStatusTypes {
    INBOUND = 'INBOUND',
    IN_PROGRESS = 'IN_PROGRESS',
    AWAITING_REPLY = 'AWAITING_REPLY',
    EXPIRED = 'EXPIRED',
    COMPLETED = 'COMPLETED',
    PROCESSED = 'PROCESSED',
    REJECTED = 'REJECTED',
}

export enum QueriesInitiatorTypes {
    PATIENT = 'PATIENT',
    CUSTOMER = 'CUSTOMER',
    SELFCOMPLETABLE = 'SELFCOMPLETABLE',
}

export enum SmsTemplatesCategoryTypes {
    INFO = 'INFO',
    REJECT = 'REJECT',
}

export enum TemplatesContextTypes {
    ADVOCA = 'ADVOCA',
    PORTAL = 'PORTAL',
    OUTLOOK = 'OUTLOOK',
}

export enum TemplatesAccessibleTypes {
    PATIENT = 'PATIENT',
    CUSTOMER = 'CUSTOMER',
}