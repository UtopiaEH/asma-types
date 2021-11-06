// deprecated, replaced with QueriesInitiator
export var InitiatorTypes;
(function (InitiatorTypes) {
    InitiatorTypes["Customer"] = "customer";
    InitiatorTypes["Patient"] = "patient";
    InitiatorTypes["SelfCompletable"] = "self-completable";
})(InitiatorTypes || (InitiatorTypes = {}));
// deprecated, replaced with TemplatesContext
export var QnrContextTypes;
(function (QnrContextTypes) {
    QnrContextTypes["Advoca"] = "advoca";
    QnrContextTypes["Portal"] = "portal";
    QnrContextTypes["Outlook"] = "outlook";
})(QnrContextTypes || (QnrContextTypes = {}));
export var DocSignicatSignStatusTypes;
(function (DocSignicatSignStatusTypes) {
    DocSignicatSignStatusTypes["Complteted"] = "completed";
    DocSignicatSignStatusTypes["Rejected"] = "rejected";
    DocSignicatSignStatusTypes["Waiting"] = "waiting";
})(DocSignicatSignStatusTypes || (DocSignicatSignStatusTypes = {}));
export var DocProxyStatusTypes;
(function (DocProxyStatusTypes) {
    DocProxyStatusTypes["Signed"] = "signed";
    DocProxyStatusTypes["WaitingForSigning"] = "waiting_for_signing";
    DocProxyStatusTypes["OnlyForView"] = "only_for_view";
    /* download = 'download',
    uploaded = 'uploaded' */
})(DocProxyStatusTypes || (DocProxyStatusTypes = {}));
export var QuestionTypes;
(function (QuestionTypes) {
    QuestionTypes["BooleanQuestion"] = "BooleanQuestion";
    QuestionTypes["CheckBoxes"] = "CheckBoxes";
    QuestionTypes["CompositeQuestion"] = "CompositeQuestion";
    QuestionTypes["DateField"] = "DateField";
    QuestionTypes["Dropdown"] = "Dropdown";
    QuestionTypes["FormatNumber"] = "FormatNumber";
    QuestionTypes["LinearScale"] = "LinearScale";
    QuestionTypes["Link"] = "Link";
    QuestionTypes["RadioButtons"] = "RadioButtons";
    QuestionTypes["TextLong"] = "TextLong";
    QuestionTypes["TextShort"] = "TextShort";
    QuestionTypes["Emoticons"] = "Emoticons";
    QuestionTypes["DocumentUpload"] = "DocumentUpload";
})(QuestionTypes || (QuestionTypes = {}));
export var ActorTypes;
(function (ActorTypes) {
    ActorTypes["Mappable"] = "mappable";
    ActorTypes["Custom"] = "custom";
    ActorTypes["Complex"] = "complex";
})(ActorTypes || (ActorTypes = {}));
export var ConsentsGroupTypes;
(function (ConsentsGroupTypes) {
    ConsentsGroupTypes["GENERAL"] = "GENERAL";
    ConsentsGroupTypes["QUERY"] = "QUERY";
    ConsentsGroupTypes["COMMUNICATION"] = "COMMUNICATION";
})(ConsentsGroupTypes || (ConsentsGroupTypes = {}));
export var ConsentsTypeTypes;
(function (ConsentsTypeTypes) {
    ConsentsTypeTypes["MANDATORY"] = "MANDATORY";
    ConsentsTypeTypes["OPTIONAL"] = "OPTIONAL";
})(ConsentsTypeTypes || (ConsentsTypeTypes = {}));
export var DocumentPatientSecurityLevelTypes;
(function (DocumentPatientSecurityLevelTypes) {
    DocumentPatientSecurityLevelTypes["ONE"] = "1";
    DocumentPatientSecurityLevelTypes["TWO"] = "2";
    DocumentPatientSecurityLevelTypes["THREE"] = "3";
    DocumentPatientSecurityLevelTypes["FOUR"] = "4";
})(DocumentPatientSecurityLevelTypes || (DocumentPatientSecurityLevelTypes = {}));
export var QueriesStatusTypes;
(function (QueriesStatusTypes) {
    QueriesStatusTypes["INBOUND"] = "INBOUND";
    QueriesStatusTypes["IN_PROGRESS"] = "IN_PROGRESS";
    QueriesStatusTypes["AWAITING_REPLY"] = "AWAITING_REPLY";
    QueriesStatusTypes["EXPIRED"] = "EXPIRED";
    QueriesStatusTypes["COMPLETED"] = "COMPLETED";
    QueriesStatusTypes["PROCESSED"] = "PROCESSED";
    QueriesStatusTypes["REJECTED"] = "REJECTED";
})(QueriesStatusTypes || (QueriesStatusTypes = {}));
export var QueriesInitiatorTypes;
(function (QueriesInitiatorTypes) {
    QueriesInitiatorTypes["PATIENT"] = "PATIENT";
    QueriesInitiatorTypes["CUSTOMER"] = "CUSTOMER";
    QueriesInitiatorTypes["SELFCOMPLETABLE"] = "SELFCOMPLETABLE";
})(QueriesInitiatorTypes || (QueriesInitiatorTypes = {}));
export var SmsTemplatesCategoryTypes;
(function (SmsTemplatesCategoryTypes) {
    SmsTemplatesCategoryTypes["INFO"] = "INFO";
    SmsTemplatesCategoryTypes["REJECT"] = "REJECT";
})(SmsTemplatesCategoryTypes || (SmsTemplatesCategoryTypes = {}));
export var TemplatesContextTypes;
(function (TemplatesContextTypes) {
    TemplatesContextTypes["ADVOCA"] = "ADVOCA";
    TemplatesContextTypes["PORTAL"] = "PORTAL";
    TemplatesContextTypes["OUTLOOK"] = "OUTLOOK";
})(TemplatesContextTypes || (TemplatesContextTypes = {}));
export var TemplatesAccessibleTypes;
(function (TemplatesAccessibleTypes) {
    TemplatesAccessibleTypes["PATIENT"] = "PATIENT";
    TemplatesAccessibleTypes["CUSTOMER"] = "CUSTOMER";
})(TemplatesAccessibleTypes || (TemplatesAccessibleTypes = {}));
//# sourceMappingURL=enums.js.map