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
 * @interface ApplicationSubmissionDocumentListInner
 */
export interface ApplicationSubmissionDocumentListInner {
    /**
     * Unique identifier referencing the document.
     * @type {string}
     * @memberof ApplicationSubmissionDocumentListInner
     */
    id: string;
    /**
     * Type of the document, to classify Signed, Supplemental Forms and Supporting (Evidence/ Proof) documents. 
     * 
     * CFWB-012: Child Care Assistance Application 
     * 
     * * Residency Proof: IDNYC, UtilityBill, DriverLicense, RentReceipt, NYCHACert, CFWB027, CFWB067, Sec8AwardLetter, ResidencyOther 
     *  * Applicant/ Child Relationship Proof: BirthCert, AdoptionRec, CourtOrderGuardian,  BaptismalRec,  Passport,  CFWB058 
     *  * Applicant Employment Income Proof:  CFWB015, CFWB031, SelfEmpIncomeProof, PayStubs,  WeeklyPayStubsSame, WeeklyPayStubsVaries, BiWeeklyPayStubsSame, BiweeklyPayStubsVaries 
     *  * Child(ren) Age Proof: BirthCert,  AdoptionRec, AlienRegCard, BaptismalRec,  Passport, ChildOther 
     *  * Child(ren) Needing Care Immigration Status Proof: BirthCert,  Passport, NatCert, AlienRegCard,  FS240 
     *  * Child/Family Needs Proof: HotelReferral, ApprovedSearchPlan,  ProofUnEmpIns, Letter, DomViolenceProof, CFWB005, CFWB026 
     *  * Income Sources Proof: CorpIncomeProof, PartnerIncomeProof, SolePropIncomeProof, RentalIncomeProof,  OtherIncomeProof
     * @type {string}
     * @memberof ApplicationSubmissionDocumentListInner
     */
    type?: ApplicationSubmissionDocumentListInnerTypeEnum;
    /**
     * Name of the document.
     * @type {string}
     * @memberof ApplicationSubmissionDocumentListInner
     */
    name: string;
    /**
     * File format, describing the data contained in the file.
     * @type {string}
     * @memberof ApplicationSubmissionDocumentListInner
     */
    fileContentType: ApplicationSubmissionDocumentListInnerFileContentTypeEnum;
    /**
     * The date and time when the file was created in the system.
     * @type {string}
     * @memberof ApplicationSubmissionDocumentListInner
     */
    fileCreatedOn: string;
    /**
     * File checksum, SHA256 hash function value, to verify copy of file is identical to the original.
     * @type {string}
     * @memberof ApplicationSubmissionDocumentListInner
     */
    fileSHA256Checksum: string;
}


/**
 * @export
 */
export const ApplicationSubmissionDocumentListInnerTypeEnum = {
    AdoptionRec: 'AdoptionRec',
    AlienRegCard: 'AlienRegCard',
    ApprovedSearchPlan: 'ApprovedSearchPlan',
    Audit: 'Audit',
    BaptismalRec: 'BaptismalRec',
    BirthCert: 'BirthCert',
    BiWeeklyPayStubsSame: 'BiWeeklyPayStubsSame',
    BiweeklyPayStubsVaries: 'BiweeklyPayStubsVaries',
    Cfwb005: 'CFWB005',
    Cfwb015: 'CFWB015',
    Cfwb026: 'CFWB026',
    Cfwb027: 'CFWB027',
    Cfwb031: 'CFWB031',
    Cfwb058: 'CFWB058',
    Cfwb067: 'CFWB067',
    ChildOther: 'ChildOther',
    CourtOrderGuardian: 'CourtOrderGuardian',
    CorpIncomeProof: 'CorpIncomeProof',
    DomViolenceProof: 'DomViolenceProof',
    DriverLicense: 'DriverLicense',
    Fs240: 'FS240',
    HotelReferral: 'HotelReferral',
    Idnyc: 'IDNYC',
    Letter: 'Letter',
    NatCert: 'NatCert',
    NychaCert: 'NYCHACert',
    OtherIncomeProof: 'OtherIncomeProof',
    Package: 'Package',
    PartnerIncomeProof: 'PartnerIncomeProof',
    Passport: 'Passport',
    PayStubs: 'PayStubs',
    ProofUnEmpIns: 'ProofUnEmpIns',
    RentalIncomeProof: 'RentalIncomeProof',
    RentReceipt: 'RentReceipt',
    ResidencyOther: 'ResidencyOther',
    Sec8AwardLetter: 'Sec8AwardLetter',
    SelfEmpIncomeProof: 'SelfEmpIncomeProof',
    Signed: 'Signed',
    SolePropIncomeProof: 'SolePropIncomeProof',
    Supplemental: 'Supplemental',
    Supporting: 'Supporting',
    UtilityBill: 'UtilityBill',
    WeeklyPayStubsSame: 'WeeklyPayStubsSame',
    WeeklyPayStubsVaries: 'WeeklyPayStubsVaries'
} as const;
export type ApplicationSubmissionDocumentListInnerTypeEnum = typeof ApplicationSubmissionDocumentListInnerTypeEnum[keyof typeof ApplicationSubmissionDocumentListInnerTypeEnum];

/**
 * @export
 */
export const ApplicationSubmissionDocumentListInnerFileContentTypeEnum = {
    Pdf: 'PDF',
    Jpeg: 'JPEG',
    Jpg: 'JPG',
    Png: 'PNG',
    Gif: 'GIF',
    Tiff: 'TIFF',
    Bmp: 'BMP',
    Jfif: 'JFIF',
    Json: 'JSON'
} as const;
export type ApplicationSubmissionDocumentListInnerFileContentTypeEnum = typeof ApplicationSubmissionDocumentListInnerFileContentTypeEnum[keyof typeof ApplicationSubmissionDocumentListInnerFileContentTypeEnum];


/**
 * Check if a given object implements the ApplicationSubmissionDocumentListInner interface.
 */
export function instanceOfApplicationSubmissionDocumentListInner(value: object): value is ApplicationSubmissionDocumentListInner {
    if (!('id' in value) || value['id'] === undefined) return false;
    if (!('name' in value) || value['name'] === undefined) return false;
    if (!('fileContentType' in value) || value['fileContentType'] === undefined) return false;
    if (!('fileCreatedOn' in value) || value['fileCreatedOn'] === undefined) return false;
    if (!('fileSHA256Checksum' in value) || value['fileSHA256Checksum'] === undefined) return false;
    return true;
}

export function ApplicationSubmissionDocumentListInnerFromJSON(json: any): ApplicationSubmissionDocumentListInner {
    return ApplicationSubmissionDocumentListInnerFromJSONTyped(json, false);
}

export function ApplicationSubmissionDocumentListInnerFromJSONTyped(json: any, ignoreDiscriminator: boolean): ApplicationSubmissionDocumentListInner {
    if (json == null) {
        return json;
    }
    return {
        
        'id': json['Id'],
        'type': json['Type'] == null ? undefined : json['Type'],
        'name': json['Name'],
        'fileContentType': json['FileContentType'],
        'fileCreatedOn': json['FileCreatedOn'],
        'fileSHA256Checksum': json['FileSHA256Checksum'],
    };
}

export function ApplicationSubmissionDocumentListInnerToJSON(json: any): ApplicationSubmissionDocumentListInner {
    return ApplicationSubmissionDocumentListInnerToJSONTyped(json, false);
}

export function ApplicationSubmissionDocumentListInnerToJSONTyped(value?: ApplicationSubmissionDocumentListInner | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'Id': value['id'],
        'Type': value['type'],
        'Name': value['name'],
        'FileContentType': value['fileContentType'],
        'FileCreatedOn': value['fileCreatedOn'],
        'FileSHA256Checksum': value['fileSHA256Checksum'],
    };
}

