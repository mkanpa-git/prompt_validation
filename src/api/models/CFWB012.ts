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
import type { CFWB012Applicant } from './CFWB012Applicant';
import {
    CFWB012ApplicantFromJSON,
    CFWB012ApplicantFromJSONTyped,
    CFWB012ApplicantToJSON,
    CFWB012ApplicantToJSONTyped,
} from './CFWB012Applicant';
import type { CFWB012ChildFamilyNeeds } from './CFWB012ChildFamilyNeeds';
import {
    CFWB012ChildFamilyNeedsFromJSON,
    CFWB012ChildFamilyNeedsFromJSONTyped,
    CFWB012ChildFamilyNeedsToJSON,
    CFWB012ChildFamilyNeedsToJSONTyped,
} from './CFWB012ChildFamilyNeeds';
import type { CFWB012Employment } from './CFWB012Employment';
import {
    CFWB012EmploymentFromJSON,
    CFWB012EmploymentFromJSONTyped,
    CFWB012EmploymentToJSON,
    CFWB012EmploymentToJSONTyped,
} from './CFWB012Employment';
import type { CFWB012ChildrenNeedingCareInner } from './CFWB012ChildrenNeedingCareInner';
import {
    CFWB012ChildrenNeedingCareInnerFromJSON,
    CFWB012ChildrenNeedingCareInnerFromJSONTyped,
    CFWB012ChildrenNeedingCareInnerToJSON,
    CFWB012ChildrenNeedingCareInnerToJSONTyped,
} from './CFWB012ChildrenNeedingCareInner';
import type { CFWB012ProviderChoicesInner } from './CFWB012ProviderChoicesInner';
import {
    CFWB012ProviderChoicesInnerFromJSON,
    CFWB012ProviderChoicesInnerFromJSONTyped,
    CFWB012ProviderChoicesInnerToJSON,
    CFWB012ProviderChoicesInnerToJSONTyped,
} from './CFWB012ProviderChoicesInner';
import type { CFWB012FamilyMembersInner } from './CFWB012FamilyMembersInner';
import {
    CFWB012FamilyMembersInnerFromJSON,
    CFWB012FamilyMembersInnerFromJSONTyped,
    CFWB012FamilyMembersInnerToJSON,
    CFWB012FamilyMembersInnerToJSONTyped,
} from './CFWB012FamilyMembersInner';
import type { CFWB012WorkActivityTravelTimeSchedule } from './CFWB012WorkActivityTravelTimeSchedule';
import {
    CFWB012WorkActivityTravelTimeScheduleFromJSON,
    CFWB012WorkActivityTravelTimeScheduleFromJSONTyped,
    CFWB012WorkActivityTravelTimeScheduleToJSON,
    CFWB012WorkActivityTravelTimeScheduleToJSONTyped,
} from './CFWB012WorkActivityTravelTimeSchedule';
import type { CFWB012IncomeInformation } from './CFWB012IncomeInformation';
import {
    CFWB012IncomeInformationFromJSON,
    CFWB012IncomeInformationFromJSONTyped,
    CFWB012IncomeInformationToJSON,
    CFWB012IncomeInformationToJSONTyped,
} from './CFWB012IncomeInformation';

/**
 * 
 * @export
 * @interface CFWB012
 */
export interface CFWB012 {
    /**
     * 
     * @type {CFWB012Applicant}
     * @memberof CFWB012
     */
    applicant?: CFWB012Applicant;
    /**
     * 
     * @type {Array<CFWB012ChildrenNeedingCareInner>}
     * @memberof CFWB012
     */
    childrenNeedingCare?: Array<CFWB012ChildrenNeedingCareInner>;
    /**
     * 
     * @type {Array<CFWB012FamilyMembersInner>}
     * @memberof CFWB012
     */
    familyMembers?: Array<CFWB012FamilyMembersInner>;
    /**
     * 
     * @type {CFWB012ChildFamilyNeeds}
     * @memberof CFWB012
     */
    childFamilyNeeds?: CFWB012ChildFamilyNeeds;
    /**
     * 
     * @type {CFWB012Employment}
     * @memberof CFWB012
     */
    employment?: CFWB012Employment;
    /**
     * 
     * @type {CFWB012IncomeInformation}
     * @memberof CFWB012
     */
    incomeInformation?: CFWB012IncomeInformation;
    /**
     * 
     * @type {CFWB012WorkActivityTravelTimeSchedule}
     * @memberof CFWB012
     */
    workActivityTravelTimeSchedule?: CFWB012WorkActivityTravelTimeSchedule;
    /**
     * 
     * @type {Array<CFWB012ProviderChoicesInner>}
     * @memberof CFWB012
     */
    providerChoices?: Array<CFWB012ProviderChoicesInner>;
}

/**
 * Check if a given object implements the CFWB012 interface.
 */
export function instanceOfCFWB012(value: object): value is CFWB012 {
    return true;
}

export function CFWB012FromJSON(json: any): CFWB012 {
    return CFWB012FromJSONTyped(json, false);
}

export function CFWB012FromJSONTyped(json: any, ignoreDiscriminator: boolean): CFWB012 {
    if (json == null) {
        return json;
    }
    return {
        
        'applicant': json['Applicant'] == null ? undefined : CFWB012ApplicantFromJSON(json['Applicant']),
        'childrenNeedingCare': json['ChildrenNeedingCare'] == null ? undefined : ((json['ChildrenNeedingCare'] as Array<any>).map(CFWB012ChildrenNeedingCareInnerFromJSON)),
        'familyMembers': json['FamilyMembers'] == null ? undefined : ((json['FamilyMembers'] as Array<any>).map(CFWB012FamilyMembersInnerFromJSON)),
        'childFamilyNeeds': json['ChildFamilyNeeds'] == null ? undefined : CFWB012ChildFamilyNeedsFromJSON(json['ChildFamilyNeeds']),
        'employment': json['Employment'] == null ? undefined : CFWB012EmploymentFromJSON(json['Employment']),
        'incomeInformation': json['IncomeInformation'] == null ? undefined : CFWB012IncomeInformationFromJSON(json['IncomeInformation']),
        'workActivityTravelTimeSchedule': json['WorkActivityTravelTimeSchedule'] == null ? undefined : CFWB012WorkActivityTravelTimeScheduleFromJSON(json['WorkActivityTravelTimeSchedule']),
        'providerChoices': json['ProviderChoices'] == null ? undefined : ((json['ProviderChoices'] as Array<any>).map(CFWB012ProviderChoicesInnerFromJSON)),
    };
}

export function CFWB012ToJSON(json: any): CFWB012 {
    return CFWB012ToJSONTyped(json, false);
}

export function CFWB012ToJSONTyped(value?: CFWB012 | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'Applicant': CFWB012ApplicantToJSON(value['applicant']),
        'ChildrenNeedingCare': value['childrenNeedingCare'] == null ? undefined : ((value['childrenNeedingCare'] as Array<any>).map(CFWB012ChildrenNeedingCareInnerToJSON)),
        'FamilyMembers': value['familyMembers'] == null ? undefined : ((value['familyMembers'] as Array<any>).map(CFWB012FamilyMembersInnerToJSON)),
        'ChildFamilyNeeds': CFWB012ChildFamilyNeedsToJSON(value['childFamilyNeeds']),
        'Employment': CFWB012EmploymentToJSON(value['employment']),
        'IncomeInformation': CFWB012IncomeInformationToJSON(value['incomeInformation']),
        'WorkActivityTravelTimeSchedule': CFWB012WorkActivityTravelTimeScheduleToJSON(value['workActivityTravelTimeSchedule']),
        'ProviderChoices': value['providerChoices'] == null ? undefined : ((value['providerChoices'] as Array<any>).map(CFWB012ProviderChoicesInnerToJSON)),
    };
}

