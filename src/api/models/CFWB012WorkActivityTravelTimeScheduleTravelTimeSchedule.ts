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
import type { ParentTravelTime } from './ParentTravelTime';
import {
    ParentTravelTimeFromJSON,
    ParentTravelTimeFromJSONTyped,
    ParentTravelTimeToJSON,
    ParentTravelTimeToJSONTyped,
} from './ParentTravelTime';

/**
 * 
 * @export
 * @interface CFWB012WorkActivityTravelTimeScheduleTravelTimeSchedule
 */
export interface CFWB012WorkActivityTravelTimeScheduleTravelTimeSchedule {
    /**
     * 
     * @type {ParentTravelTime}
     * @memberof CFWB012WorkActivityTravelTimeScheduleTravelTimeSchedule
     */
    firstParentTravelTime?: ParentTravelTime;
    /**
     * 
     * @type {ParentTravelTime}
     * @memberof CFWB012WorkActivityTravelTimeScheduleTravelTimeSchedule
     */
    secondParentTravelTime?: ParentTravelTime;
}

/**
 * Check if a given object implements the CFWB012WorkActivityTravelTimeScheduleTravelTimeSchedule interface.
 */
export function instanceOfCFWB012WorkActivityTravelTimeScheduleTravelTimeSchedule(value: object): value is CFWB012WorkActivityTravelTimeScheduleTravelTimeSchedule {
    return true;
}

export function CFWB012WorkActivityTravelTimeScheduleTravelTimeScheduleFromJSON(json: any): CFWB012WorkActivityTravelTimeScheduleTravelTimeSchedule {
    return CFWB012WorkActivityTravelTimeScheduleTravelTimeScheduleFromJSONTyped(json, false);
}

export function CFWB012WorkActivityTravelTimeScheduleTravelTimeScheduleFromJSONTyped(json: any, ignoreDiscriminator: boolean): CFWB012WorkActivityTravelTimeScheduleTravelTimeSchedule {
    if (json == null) {
        return json;
    }
    return {
        
        'firstParentTravelTime': json['FirstParentTravelTime'] == null ? undefined : ParentTravelTimeFromJSON(json['FirstParentTravelTime']),
        'secondParentTravelTime': json['SecondParentTravelTime'] == null ? undefined : ParentTravelTimeFromJSON(json['SecondParentTravelTime']),
    };
}

export function CFWB012WorkActivityTravelTimeScheduleTravelTimeScheduleToJSON(json: any): CFWB012WorkActivityTravelTimeScheduleTravelTimeSchedule {
    return CFWB012WorkActivityTravelTimeScheduleTravelTimeScheduleToJSONTyped(json, false);
}

export function CFWB012WorkActivityTravelTimeScheduleTravelTimeScheduleToJSONTyped(value?: CFWB012WorkActivityTravelTimeScheduleTravelTimeSchedule | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'FirstParentTravelTime': ParentTravelTimeToJSON(value['firstParentTravelTime']),
        'SecondParentTravelTime': ParentTravelTimeToJSON(value['secondParentTravelTime']),
    };
}

