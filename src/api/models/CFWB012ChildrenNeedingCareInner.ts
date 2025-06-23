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
 * @interface CFWB012ChildrenNeedingCareInner
 */
export interface CFWB012ChildrenNeedingCareInner {
    /**
     * Last Name of the Child(ren) in the household for whom Applicant is requesting Child Care assistance.
     * @type {string}
     * @memberof CFWB012ChildrenNeedingCareInner
     */
    lastName: string;
    /**
     * First name of the Child(ren) in the household for whom Applicant is requesting Child Care assistance.
     * @type {string}
     * @memberof CFWB012ChildrenNeedingCareInner
     */
    firstName: string;
    /**
     * Middle Initial of the Child(ren) in the household for whom Applicant is requesting Child Care assistance.
     * @type {string}
     * @memberof CFWB012ChildrenNeedingCareInner
     */
    mI?: string | null;
    /**
     * Indicates the relationship of Child(ren) to the Applicant.
     * @type {string}
     * @memberof CFWB012ChildrenNeedingCareInner
     */
    relationshipToApplicant: CFWB012ChildrenNeedingCareInnerRelationshipToApplicantEnum;
    /**
     * Indicates the date of birth of Child(ren) in the household for whom Applicant is requesting Child Care assistance.
     * @type {string}
     * @memberof CFWB012ChildrenNeedingCareInner
     */
    dateOfBirth: string;
    /**
     * Indicates the gender of Child(ren) in the household for whom Applicant is requesting Child Care assistance.
     * @type {string}
     * @memberof CFWB012ChildrenNeedingCareInner
     */
    sex: CFWB012ChildrenNeedingCareInnerSexEnum;
    /**
     * Indicates whether the Child(ren) applying for care is Hispanic or Latino or not. Providing ethnicity information is voluntary and will not affect the eligibility for Child Care Assistance or the amount of assistance that will be given by the agency.
     * @type {string}
     * @memberof CFWB012ChildrenNeedingCareInner
     */
    ethnicity?: CFWB012ChildrenNeedingCareInnerEthnicityEnum | null;
    /**
     * Indicates the Race of Child(ren) Needing Care. Providing race information is voluntary and will not affect the eligibility for Child Care Assistance or the amount of assistance that will be given by the agency. AI - Native American or Alaskan Native; AS - Asian; BL - Black or African American;HP - Native Hawaiian or Pacific Islander; WH - White
     * @type {Set<string>}
     * @memberof CFWB012ChildrenNeedingCareInner
     */
    race?: Set<CFWB012ChildrenNeedingCareInnerRaceEnum> | null;
    /**
     * Indicates the Social Security Number of the Child(ren) Needing Care. The SSN may be used by federal, state, and local agencies to prevent duplication of services and fraud, and for Federal Reporting.
     * @type {string}
     * @memberof CFWB012ChildrenNeedingCareInner
     */
    sSN?: string | null;
    /**
     * Indicates whether both of the child(ren) parents live in the home.
     * @type {string}
     * @memberof CFWB012ChildrenNeedingCareInner
     */
    doBothParentsResideInHome: CFWB012ChildrenNeedingCareInnerDoBothParentsResideInHomeEnum;
    /**
     * Indicate whether the child needing Child Care has a disability.
     * @type {string}
     * @memberof CFWB012ChildrenNeedingCareInner
     */
    hasDisability: CFWB012ChildrenNeedingCareInnerHasDisabilityEnum;
    /**
     * Indicates whether the child needing Child Care is a U.S. citizen, U.S. national or person with satisfactory immigration status.
     * @type {string}
     * @memberof CFWB012ChildrenNeedingCareInner
     */
    isImmigrationStatusSatisfactory?: CFWB012ChildrenNeedingCareInnerIsImmigrationStatusSatisfactoryEnum;
}


/**
 * @export
 */
export const CFWB012ChildrenNeedingCareInnerRelationshipToApplicantEnum = {
    Child: 'Child',
    Grandchild: 'Grandchild',
    FosterChild: 'Foster Child',
    Other: 'Other'
} as const;
export type CFWB012ChildrenNeedingCareInnerRelationshipToApplicantEnum = typeof CFWB012ChildrenNeedingCareInnerRelationshipToApplicantEnum[keyof typeof CFWB012ChildrenNeedingCareInnerRelationshipToApplicantEnum];

/**
 * @export
 */
export const CFWB012ChildrenNeedingCareInnerSexEnum = {
    Male: 'Male',
    Female: 'Female',
    X: 'X'
} as const;
export type CFWB012ChildrenNeedingCareInnerSexEnum = typeof CFWB012ChildrenNeedingCareInnerSexEnum[keyof typeof CFWB012ChildrenNeedingCareInnerSexEnum];

/**
 * @export
 */
export const CFWB012ChildrenNeedingCareInnerEthnicityEnum = {
    Hispanic: 'Hispanic',
    Latino: 'Latino',
    No: 'No',
    PreferNotToAnswer: 'Prefer not to answer'
} as const;
export type CFWB012ChildrenNeedingCareInnerEthnicityEnum = typeof CFWB012ChildrenNeedingCareInnerEthnicityEnum[keyof typeof CFWB012ChildrenNeedingCareInnerEthnicityEnum];

/**
 * @export
 */
export const CFWB012ChildrenNeedingCareInnerRaceEnum = {
    Ai: 'AI',
    As: 'AS',
    Bl: 'BL',
    Hp: 'HP',
    Wh: 'WH'
} as const;
export type CFWB012ChildrenNeedingCareInnerRaceEnum = typeof CFWB012ChildrenNeedingCareInnerRaceEnum[keyof typeof CFWB012ChildrenNeedingCareInnerRaceEnum];

/**
 * @export
 */
export const CFWB012ChildrenNeedingCareInnerDoBothParentsResideInHomeEnum = {
    Yes: 'Yes',
    No: 'No'
} as const;
export type CFWB012ChildrenNeedingCareInnerDoBothParentsResideInHomeEnum = typeof CFWB012ChildrenNeedingCareInnerDoBothParentsResideInHomeEnum[keyof typeof CFWB012ChildrenNeedingCareInnerDoBothParentsResideInHomeEnum];

/**
 * @export
 */
export const CFWB012ChildrenNeedingCareInnerHasDisabilityEnum = {
    Yes: 'Yes',
    No: 'No'
} as const;
export type CFWB012ChildrenNeedingCareInnerHasDisabilityEnum = typeof CFWB012ChildrenNeedingCareInnerHasDisabilityEnum[keyof typeof CFWB012ChildrenNeedingCareInnerHasDisabilityEnum];

/**
 * @export
 */
export const CFWB012ChildrenNeedingCareInnerIsImmigrationStatusSatisfactoryEnum = {
    Yes: 'Yes',
    No: 'No'
} as const;
export type CFWB012ChildrenNeedingCareInnerIsImmigrationStatusSatisfactoryEnum = typeof CFWB012ChildrenNeedingCareInnerIsImmigrationStatusSatisfactoryEnum[keyof typeof CFWB012ChildrenNeedingCareInnerIsImmigrationStatusSatisfactoryEnum];


/**
 * Check if a given object implements the CFWB012ChildrenNeedingCareInner interface.
 */
export function instanceOfCFWB012ChildrenNeedingCareInner(value: object): value is CFWB012ChildrenNeedingCareInner {
    if (!('lastName' in value) || value['lastName'] === undefined) return false;
    if (!('firstName' in value) || value['firstName'] === undefined) return false;
    if (!('relationshipToApplicant' in value) || value['relationshipToApplicant'] === undefined) return false;
    if (!('dateOfBirth' in value) || value['dateOfBirth'] === undefined) return false;
    if (!('sex' in value) || value['sex'] === undefined) return false;
    if (!('doBothParentsResideInHome' in value) || value['doBothParentsResideInHome'] === undefined) return false;
    if (!('hasDisability' in value) || value['hasDisability'] === undefined) return false;
    return true;
}

export function CFWB012ChildrenNeedingCareInnerFromJSON(json: any): CFWB012ChildrenNeedingCareInner {
    return CFWB012ChildrenNeedingCareInnerFromJSONTyped(json, false);
}

export function CFWB012ChildrenNeedingCareInnerFromJSONTyped(json: any, ignoreDiscriminator: boolean): CFWB012ChildrenNeedingCareInner {
    if (json == null) {
        return json;
    }
    return {
        
        'lastName': json['LastName'],
        'firstName': json['FirstName'],
        'mI': json['MI'] == null ? undefined : json['MI'],
        'relationshipToApplicant': json['RelationshipToApplicant'],
        'dateOfBirth': json['DateOfBirth'],
        'sex': json['Sex'],
        'ethnicity': json['Ethnicity'] == null ? undefined : json['Ethnicity'],
        'race': json['Race'] == null ? undefined : new Set(json['Race']),
        'sSN': json['SSN'] == null ? undefined : json['SSN'],
        'doBothParentsResideInHome': json['DoBothParentsResideInHome'],
        'hasDisability': json['HasDisability'],
        'isImmigrationStatusSatisfactory': json['IsImmigrationStatusSatisfactory'] == null ? undefined : json['IsImmigrationStatusSatisfactory'],
    };
}

export function CFWB012ChildrenNeedingCareInnerToJSON(json: any): CFWB012ChildrenNeedingCareInner {
    return CFWB012ChildrenNeedingCareInnerToJSONTyped(json, false);
}

export function CFWB012ChildrenNeedingCareInnerToJSONTyped(value?: CFWB012ChildrenNeedingCareInner | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'LastName': value['lastName'],
        'FirstName': value['firstName'],
        'MI': value['mI'],
        'RelationshipToApplicant': value['relationshipToApplicant'],
        'DateOfBirth': value['dateOfBirth'],
        'Sex': value['sex'],
        'Ethnicity': value['ethnicity'],
        'Race': value['race'] == null ? undefined : Array.from(value['race'] as Set<any>),
        'SSN': value['sSN'],
        'DoBothParentsResideInHome': value['doBothParentsResideInHome'],
        'HasDisability': value['hasDisability'],
        'IsImmigrationStatusSatisfactory': value['isImmigrationStatusSatisfactory'],
    };
}

