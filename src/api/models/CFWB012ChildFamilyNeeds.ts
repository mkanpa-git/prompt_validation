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
 * @interface CFWB012ChildFamilyNeeds
 */
export interface CFWB012ChildFamilyNeeds {
    /**
     * Indicates the reason(s) for requesting the Child Care assistance.
     * @type {Set<string>}
     * @memberof CFWB012ChildFamilyNeeds
     */
    assistanceReason: Set<CFWB012ChildFamilyNeedsAssistanceReasonEnum>;
    /**
     * Indicates whether a parent is currently active full-time in the U.S. Military.
     * @type {string}
     * @memberof CFWB012ChildFamilyNeeds
     */
    isParentCurrentlyActiveInMilitary: CFWB012ChildFamilyNeedsIsParentCurrentlyActiveInMilitaryEnum;
    /**
     * Indicates whether a parent is currently a member of a National Guard or Military Reserve Unit.
     * @type {string}
     * @memberof CFWB012ChildFamilyNeeds
     */
    isParentMemOfGuardOrMRU: CFWB012ChildFamilyNeedsIsParentMemOfGuardOrMRUEnum;
    /**
     * Indicates whether there is a non-custodial parent available to provide Child Care.
     * @type {string}
     * @memberof CFWB012ChildFamilyNeeds
     */
    isNonCustodialParentAvailable: CFWB012ChildFamilyNeedsIsNonCustodialParentAvailableEnum;
    /**
     * Indicates whether or not the Applicant is receiving and/or applying for Child Care through a different agency.
     * @type {string}
     * @memberof CFWB012ChildFamilyNeeds
     */
    duplicateApp?: CFWB012ChildFamilyNeedsDuplicateAppEnum;
}


/**
 * @export
 */
export const CFWB012ChildFamilyNeedsAssistanceReasonEnum = {
    Employment: 'Employment',
    LookingForWork: 'Looking for Work',
    VocationalTrainingEducationalActivities: 'Vocational Training/Educational Activities',
    ReceivingDomesticViolenceServices: 'Receiving Domestic Violence Services',
    Homelessness: 'Homelessness'
} as const;
export type CFWB012ChildFamilyNeedsAssistanceReasonEnum = typeof CFWB012ChildFamilyNeedsAssistanceReasonEnum[keyof typeof CFWB012ChildFamilyNeedsAssistanceReasonEnum];

/**
 * @export
 */
export const CFWB012ChildFamilyNeedsIsParentCurrentlyActiveInMilitaryEnum = {
    Yes: 'Yes',
    No: 'No'
} as const;
export type CFWB012ChildFamilyNeedsIsParentCurrentlyActiveInMilitaryEnum = typeof CFWB012ChildFamilyNeedsIsParentCurrentlyActiveInMilitaryEnum[keyof typeof CFWB012ChildFamilyNeedsIsParentCurrentlyActiveInMilitaryEnum];

/**
 * @export
 */
export const CFWB012ChildFamilyNeedsIsParentMemOfGuardOrMRUEnum = {
    Yes: 'Yes',
    No: 'No'
} as const;
export type CFWB012ChildFamilyNeedsIsParentMemOfGuardOrMRUEnum = typeof CFWB012ChildFamilyNeedsIsParentMemOfGuardOrMRUEnum[keyof typeof CFWB012ChildFamilyNeedsIsParentMemOfGuardOrMRUEnum];

/**
 * @export
 */
export const CFWB012ChildFamilyNeedsIsNonCustodialParentAvailableEnum = {
    Yes: 'Yes',
    No: 'No'
} as const;
export type CFWB012ChildFamilyNeedsIsNonCustodialParentAvailableEnum = typeof CFWB012ChildFamilyNeedsIsNonCustodialParentAvailableEnum[keyof typeof CFWB012ChildFamilyNeedsIsNonCustodialParentAvailableEnum];

/**
 * @export
 */
export const CFWB012ChildFamilyNeedsDuplicateAppEnum = {
    NotApplicable: 'Not Applicable',
    DepartmentOfEducationDoe: 'Department of Education (DOE)',
    HumanResourcesAdministrationHra: 'Human Resources Administration (HRA)',
    DepartmentOfYouthAndCommunityDevelopmentDycd: 'Department of Youth and Community Development (DYCD)',
    DepartmentOfHomelessServicesDhs: 'Department of Homeless Services (DHS)',
    ConsortiumForWorkerEducationCwe: 'Consortium for Worker Education (CWE)',
    AdministrationForChildrensServicesAcs: 'Administration for Children\'s Services (ACS)'
} as const;
export type CFWB012ChildFamilyNeedsDuplicateAppEnum = typeof CFWB012ChildFamilyNeedsDuplicateAppEnum[keyof typeof CFWB012ChildFamilyNeedsDuplicateAppEnum];


/**
 * Check if a given object implements the CFWB012ChildFamilyNeeds interface.
 */
export function instanceOfCFWB012ChildFamilyNeeds(value: object): value is CFWB012ChildFamilyNeeds {
    if (!('assistanceReason' in value) || value['assistanceReason'] === undefined) return false;
    if (!('isParentCurrentlyActiveInMilitary' in value) || value['isParentCurrentlyActiveInMilitary'] === undefined) return false;
    if (!('isParentMemOfGuardOrMRU' in value) || value['isParentMemOfGuardOrMRU'] === undefined) return false;
    if (!('isNonCustodialParentAvailable' in value) || value['isNonCustodialParentAvailable'] === undefined) return false;
    return true;
}

export function CFWB012ChildFamilyNeedsFromJSON(json: any): CFWB012ChildFamilyNeeds {
    return CFWB012ChildFamilyNeedsFromJSONTyped(json, false);
}

export function CFWB012ChildFamilyNeedsFromJSONTyped(json: any, ignoreDiscriminator: boolean): CFWB012ChildFamilyNeeds {
    if (json == null) {
        return json;
    }
    return {
        
        'assistanceReason': new Set(json['AssistanceReason']),
        'isParentCurrentlyActiveInMilitary': json['IsParentCurrentlyActiveInMilitary'],
        'isParentMemOfGuardOrMRU': json['IsParentMemOfGuardOrMRU'],
        'isNonCustodialParentAvailable': json['IsNonCustodialParentAvailable'],
        'duplicateApp': json['DuplicateApp'] == null ? undefined : json['DuplicateApp'],
    };
}

export function CFWB012ChildFamilyNeedsToJSON(json: any): CFWB012ChildFamilyNeeds {
    return CFWB012ChildFamilyNeedsToJSONTyped(json, false);
}

export function CFWB012ChildFamilyNeedsToJSONTyped(value?: CFWB012ChildFamilyNeeds | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'AssistanceReason': Array.from(value['assistanceReason'] as Set<any>),
        'IsParentCurrentlyActiveInMilitary': value['isParentCurrentlyActiveInMilitary'],
        'IsParentMemOfGuardOrMRU': value['isParentMemOfGuardOrMRU'],
        'IsNonCustodialParentAvailable': value['isNonCustodialParentAvailable'],
        'DuplicateApp': value['duplicateApp'],
    };
}

