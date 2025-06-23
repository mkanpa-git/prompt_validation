/* tslint:disable */
/* eslint-disable */
/**
 * MyCity Applications Service API
 * Application Details JSON Response. The generic structure is represented by the schema  `ApplicationSubmission` and the data element *Forms.FormInputDocument* references the Childcare service specific schema `CFWB012`. <br/><br/> Notes:<br/>   1. Unlike the CFWB-012 PDF, in the JSON response, the FamilyMembers collection do not include record for Applicant/ Self.  Family Size should be calculated by summing up Applicant + ChildrenNeedingCare + FamilyMembers.  Revision History:<br/><br/>   **09/04/24** <br/>       1. Added data element `ExpectedDocumentCount` under node: $.ApplicationSubmission.Info. This is to support reconciliation/ cross-checking by downstream system.      **08/22/24** <br/>       1. Added data element `UserConsentForRecommendations` under node: $.ApplicationSubmission.Info. This is to support Benefits Recommendation Engine capability.      **12/14/23** <br/>       1. Added data elements `ServiceDeliverySystem` and `ServiceDeliverySystemCaseId` under node: $.ApplicationSubmission.Info. This is to support setting System-of-Record Case reference identifier for existing Clients (as opposed to new Applicants).      **12/20/22** <br/>       1. Updated documentation and enum list for `Type` under node: $.ApplicationSubmission.DocumentList     **12/16/22** <br/>   1. Added data element `Borough` (separate from City) under node: $.Forms.FormInputDocument.Applicant. Reason: ACS Agency requires this data, as discussed in Daily Standup - 12/16/22. <br/>   2. Also, added  data elements `Latitude` and `Longitude`, as optional data elements under node: $.Forms.FormInputDocument.Applicant.     **12/09/22** <br/>   1. Defined enum values *[\"ApplicantWages\", \"SecondParentWages\", \"SelfEmployment\", \"ChildSupport\", \"Alimony\", \"Unemployment\", \"SocialSecurity\", \"Disability\", \"Rental\", \"Dividends\", \"Retirement\", \"CashAssistance\",  \"Other\"]* to the data element `NameRef` under node: $.Forms.FormInputDocument.IncomeInformation.Sources. <br/>   2. Updated type of data element `GrossAmount` from string to number, under node: $.Forms.FormInputDocument.IncomeInformation.Sources and as well as `TotalIncome`. <br/>   3. Corrected 3 enum values to \'15 min\', \'30 min\', \'45 min\', for data elements `DropOffTravelTime`, `PickupTravelTime`, under node: $.Forms.FormInputDocument.WorkActivityTravelTimeSchedule.TravelTimeSchedule.FirstParentTravelTime and SecondParentTravelTime. And also, configured them to be nullable.   4. Corrected enum value from Biweekly to Bi-weekly for data element `HowOften` under node: $.Forms.FormInputDocument.IncomeInformation.Sources <br/>     **12/05/22** <br/>   1. Updated type of data element `AssistanceReason` from string to array of string, under node: $.Forms.FormInputDocument.ChildFamilyNeeds. Also, added constraint for the array size to be either 1 or 2. Reason: Daily Standup - 12/05/22. <br/>   2. Changed name for data element from \"ImmigrationStatus\" to `IsImmigrationStatusSatisfactory`, under node: $.Forms.FormInputDocument.ChildrenNeedingCare. Reason: Unlike CFWB-012 PDF, as implemented, the valid values are: Yes, No.    3. Changed names for data elements from 2ndParent1stJob and 2ndParent2ndJob to `SecondParent1stJob` and `SecondParent2ndJob`, under node : $.Forms.FormInputDocument.Employment. Reason: A variable name cannot start with a number.<br/>           4. Added new enum value *Prefer not to answer* to data element `Ethnicity`. Reason: Change based on the values returned in UAT environment. <br/>   5. Added new enum value *Not Applicable* to data element `DuplicateApp` under node: $.Forms.FormInputDocument.ChildFamilyNeeds. Reason: Change based on the values returned in UAT environment.<br/>   6. Added new enum value *Separated* to data element `MaritalStatus` under node: $.Forms.FormInputDocument.Applicant. Reason: Change based on the values returned in UAT environment.<br/>   7. Added new enum value *X* to data element `Sex` under node: $.Forms.FormInputDocument.ChildrenNeedingCare.  Reason: Change based on the values returned in UAT environment.<br/>   8. Added enum values *[\"Child\", \"Grandchild\", \"Foster Child\", \"Other\"]* to data element `RelationshipToApplicant` under node: $.Forms.FormInputDocument.ChildrenNeedingCare. Reason: Change based on the values returned in UAT environment.<br/>   9. Added enum values *[\"Spouse\", \"Partner\", \"Foster Parent\", \"Child\", \"Other\"]* to data element `RelationshipToApplicant` under node: $.Forms.FormInputDocument.FamilyMembers. Reason: Change based on the values returned in UAT environment.<br/>         **12/02/22** - Added data elements `LanguageCode` and `Language`, under node: $.Info.  Default value is specified as en_US, English respectively.<br/>  **11/30/22** - Updated type of `Race` from string to array of string and enum list to be abbreviations [AI, AS, BL, HP, WH]. Reason: Change based on the values returned in UAT environment.<br/><br/>
 *
 * The version of the OpenAPI document: 1.0.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { mapValues } from '../runtime';
/**
 * 
 * @export
 * @interface ApplicationSubmissionInfo
 */
export interface ApplicationSubmissionInfo {
    /**
     * Identifier referencing provision of specific outputs, that satisfy the needs of clients and contribute to the achievement of public goals.
     * @type {string}
     * @memberof ApplicationSubmissionInfo
     */
    serviceReferenceId?: ApplicationSubmissionInfoServiceReferenceIdEnum;
    /**
     * Identifier referencing a mandate, to achieve goals expressed as outcomes and impacts, to address needs of a target group.
     * @type {string}
     * @memberof ApplicationSubmissionInfo
     */
    programReferenceId?: ApplicationSubmissionInfoProgramReferenceIdEnum | null;
    /**
     * The agency responsible for providing service outputs to clients through the operation of a service.
     * @type {string}
     * @memberof ApplicationSubmissionInfo
     */
    serviceOwnerAgencyCode: ApplicationSubmissionInfoServiceOwnerAgencyCodeEnum;
    /**
     * The name of the system responsible for managing the client and delivery of service
     * @type {string}
     * @memberof ApplicationSubmissionInfo
     */
    serviceDeliverySystem?: ApplicationSubmissionInfoServiceDeliverySystemEnum;
    /**
     * The Case reference number assigned to the Client, by System-of-Record , for delivering the service client has enrolled in.  Required, if ApplicationType is NOT New
     * @type {string}
     * @memberof ApplicationSubmissionInfo
     */
    serviceDeliverySystemCaseId?: string;
    /**
     * A unique identifier of the application.
     * @type {string}
     * @memberof ApplicationSubmissionInfo
     */
    applicationNumber: string;
    /**
     * Classifier signifying if the application is pertinent to a new or an existing service output, or client need.
     * @type {string}
     * @memberof ApplicationSubmissionInfo
     */
    applicationType?: ApplicationSubmissionInfoApplicationTypeEnum;
    /**
     * A unique profile identifier of the Applicant.
     * @type {string}
     * @memberof ApplicationSubmissionInfo
     */
    nYCIDAssignedIdentifier?: string;
    /**
     * The email address of the Applicant.
     * @type {string}
     * @memberof ApplicationSubmissionInfo
     */
    nYCIDEmail: string;
    /**
     * The date and time when the application was submitted by the Applicant.
     * @type {string}
     * @memberof ApplicationSubmissionInfo
     */
    applicationSubmissionDate: string;
    /**
     * Service access, or delivery process, status.
     * @type {string}
     * @memberof ApplicationSubmissionInfo
     */
    applicationStatus: ApplicationSubmissionInfoApplicationStatusEnum;
    /**
     * The expected number of documents attached to the application,  for reconciliation/ cross-checking purposes by downstream system
     * @type {number}
     * @memberof ApplicationSubmissionInfo
     */
    expectedDocumentCount?: number;
    /**
     * User Consent indicator, indicating either consent or denial for application data and existing agency records to be checked to determine what other benefits the user may qualify for and to be contacted with a personalized list of benefits that the user can apply for separately
     * @type {string}
     * @memberof ApplicationSubmissionInfo
     */
    userConsentForRecommendations?: ApplicationSubmissionInfoUserConsentForRecommendationsEnum | null;
    /**
     * The Language Code. TBD: List to be reviewed/ corrected.
     * @type {string}
     * @memberof ApplicationSubmissionInfo
     */
    languageCode?: ApplicationSubmissionInfoLanguageCodeEnum;
    /**
     * The Language Name
     * @type {string}
     * @memberof ApplicationSubmissionInfo
     */
    language?: ApplicationSubmissionInfoLanguageEnum;
}


/**
 * @export
 */
export const ApplicationSubmissionInfoServiceReferenceIdEnum = {
    Childcare: 'Childcare'
} as const;
export type ApplicationSubmissionInfoServiceReferenceIdEnum = typeof ApplicationSubmissionInfoServiceReferenceIdEnum[keyof typeof ApplicationSubmissionInfoServiceReferenceIdEnum];

/**
 * @export
 */
export const ApplicationSubmissionInfoProgramReferenceIdEnum = {
    ContractedCare: 'Contracted Care',
    ChildcareVoucher: 'Childcare Voucher',
    CashAssistance: 'Cash Assistance'
} as const;
export type ApplicationSubmissionInfoProgramReferenceIdEnum = typeof ApplicationSubmissionInfoProgramReferenceIdEnum[keyof typeof ApplicationSubmissionInfoProgramReferenceIdEnum];

/**
 * @export
 */
export const ApplicationSubmissionInfoServiceOwnerAgencyCodeEnum = {
    Doe: 'DOE',
    Acs: 'ACS'
} as const;
export type ApplicationSubmissionInfoServiceOwnerAgencyCodeEnum = typeof ApplicationSubmissionInfoServiceOwnerAgencyCodeEnum[keyof typeof ApplicationSubmissionInfoServiceOwnerAgencyCodeEnum];

/**
 * @export
 */
export const ApplicationSubmissionInfoServiceDeliverySystemEnum = {
    Accis: 'ACCIS'
} as const;
export type ApplicationSubmissionInfoServiceDeliverySystemEnum = typeof ApplicationSubmissionInfoServiceDeliverySystemEnum[keyof typeof ApplicationSubmissionInfoServiceDeliverySystemEnum];

/**
 * @export
 */
export const ApplicationSubmissionInfoApplicationTypeEnum = {
    New: 'New',
    Reopen: 'Reopen',
    Recertification: 'Recertification',
    Change: 'Change'
} as const;
export type ApplicationSubmissionInfoApplicationTypeEnum = typeof ApplicationSubmissionInfoApplicationTypeEnum[keyof typeof ApplicationSubmissionInfoApplicationTypeEnum];

/**
 * @export
 */
export const ApplicationSubmissionInfoApplicationStatusEnum = {
    InProcess: 'In process',
    AdditionalInformationRequired: 'Additional Information Required',
    Eligible: 'Eligible',
    Ineligible: 'Ineligible',
    Deactivated: 'Deactivated',
    Noid: 'NOID'
} as const;
export type ApplicationSubmissionInfoApplicationStatusEnum = typeof ApplicationSubmissionInfoApplicationStatusEnum[keyof typeof ApplicationSubmissionInfoApplicationStatusEnum];

/**
 * @export
 */
export const ApplicationSubmissionInfoUserConsentForRecommendationsEnum = {
    True: 'true',
    False: 'false'
} as const;
export type ApplicationSubmissionInfoUserConsentForRecommendationsEnum = typeof ApplicationSubmissionInfoUserConsentForRecommendationsEnum[keyof typeof ApplicationSubmissionInfoUserConsentForRecommendationsEnum];

/**
 * @export
 */
export const ApplicationSubmissionInfoLanguageCodeEnum = {
    Ar: 'ar',
    Bn: 'bn',
    ZhCn: 'zh_CN',
    EnUs: 'en_US',
    Fr: 'fr',
    De: 'de',
    Hi: 'hi',
    It: 'it',
    Ru: 'ru',
    Es: 'es'
} as const;
export type ApplicationSubmissionInfoLanguageCodeEnum = typeof ApplicationSubmissionInfoLanguageCodeEnum[keyof typeof ApplicationSubmissionInfoLanguageCodeEnum];

/**
 * @export
 */
export const ApplicationSubmissionInfoLanguageEnum = {
    Arabic: 'Arabic',
    Bengali: 'Bengali',
    Chinese: 'Chinese',
    English: 'English',
    French: 'French',
    German: 'German',
    Hindi: 'Hindi',
    Italian: 'Italian',
    Russian: 'Russian',
    Spanish: 'Spanish'
} as const;
export type ApplicationSubmissionInfoLanguageEnum = typeof ApplicationSubmissionInfoLanguageEnum[keyof typeof ApplicationSubmissionInfoLanguageEnum];


/**
 * Check if a given object implements the ApplicationSubmissionInfo interface.
 */
export function instanceOfApplicationSubmissionInfo(value: object): value is ApplicationSubmissionInfo {
    if (!('serviceOwnerAgencyCode' in value) || value['serviceOwnerAgencyCode'] === undefined) return false;
    if (!('applicationNumber' in value) || value['applicationNumber'] === undefined) return false;
    if (!('nYCIDEmail' in value) || value['nYCIDEmail'] === undefined) return false;
    if (!('applicationSubmissionDate' in value) || value['applicationSubmissionDate'] === undefined) return false;
    if (!('applicationStatus' in value) || value['applicationStatus'] === undefined) return false;
    return true;
}

export function ApplicationSubmissionInfoFromJSON(json: any): ApplicationSubmissionInfo {
    return ApplicationSubmissionInfoFromJSONTyped(json, false);
}

export function ApplicationSubmissionInfoFromJSONTyped(json: any, ignoreDiscriminator: boolean): ApplicationSubmissionInfo {
    if (json == null) {
        return json;
    }
    return {
        
        'serviceReferenceId': json['ServiceReferenceId'] == null ? undefined : json['ServiceReferenceId'],
        'programReferenceId': json['ProgramReferenceId'] == null ? undefined : json['ProgramReferenceId'],
        'serviceOwnerAgencyCode': json['ServiceOwnerAgencyCode'],
        'serviceDeliverySystem': json['ServiceDeliverySystem'] == null ? undefined : json['ServiceDeliverySystem'],
        'serviceDeliverySystemCaseId': json['ServiceDeliverySystemCaseId'] == null ? undefined : json['ServiceDeliverySystemCaseId'],
        'applicationNumber': json['ApplicationNumber'],
        'applicationType': json['ApplicationType'] == null ? undefined : json['ApplicationType'],
        'nYCIDAssignedIdentifier': json['NYCIDAssignedIdentifier'] == null ? undefined : json['NYCIDAssignedIdentifier'],
        'nYCIDEmail': json['NYCIDEmail'],
        'applicationSubmissionDate': json['ApplicationSubmissionDate'],
        'applicationStatus': json['ApplicationStatus'],
        'expectedDocumentCount': json['ExpectedDocumentCount'] == null ? undefined : json['ExpectedDocumentCount'],
        'userConsentForRecommendations': json['UserConsentForRecommendations'] == null ? undefined : json['UserConsentForRecommendations'],
        'languageCode': json['LanguageCode'] == null ? undefined : json['LanguageCode'],
        'language': json['Language'] == null ? undefined : json['Language'],
    };
}

export function ApplicationSubmissionInfoToJSON(json: any): ApplicationSubmissionInfo {
    return ApplicationSubmissionInfoToJSONTyped(json, false);
}

export function ApplicationSubmissionInfoToJSONTyped(value?: ApplicationSubmissionInfo | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'ServiceReferenceId': value['serviceReferenceId'],
        'ProgramReferenceId': value['programReferenceId'],
        'ServiceOwnerAgencyCode': value['serviceOwnerAgencyCode'],
        'ServiceDeliverySystem': value['serviceDeliverySystem'],
        'ServiceDeliverySystemCaseId': value['serviceDeliverySystemCaseId'],
        'ApplicationNumber': value['applicationNumber'],
        'ApplicationType': value['applicationType'],
        'NYCIDAssignedIdentifier': value['nYCIDAssignedIdentifier'],
        'NYCIDEmail': value['nYCIDEmail'],
        'ApplicationSubmissionDate': value['applicationSubmissionDate'],
        'ApplicationStatus': value['applicationStatus'],
        'ExpectedDocumentCount': value['expectedDocumentCount'],
        'UserConsentForRecommendations': value['userConsentForRecommendations'],
        'LanguageCode': value['languageCode'],
        'Language': value['language'],
    };
}

