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
 * @interface ParentTravelTime
 */
export interface ParentTravelTime {
    /**
     * Indicates the time it takes for the Applicant to travel to work/activity from provider.
     * @type {string}
     * @memberof ParentTravelTime
     */
    dropOffTravelTime: ParentTravelTimeDropOffTravelTimeEnum | null;
    /**
     * Indicates the time it takes for the Applicant to travel from work/activity to provider.
     * @type {string}
     * @memberof ParentTravelTime
     */
    pickupTravelTime: ParentTravelTimePickupTravelTimeEnum | null;
    /**
     * Indicates the Drop-off time if it is greater than 1 hr. Format: HH:MM
     * @type {string}
     * @memberof ParentTravelTime
     */
    dropOffTravelTimeTextIfGT1Hr?: string | null;
    /**
     * Indicates the Pick-up time if it is greater than 1 hr.  Format: HH:MM
     * @type {string}
     * @memberof ParentTravelTime
     */
    pickupTravelTimeTextIfGT1Hr?: string | null;
    /**
     * Indicates if the Applicant uses public means of transport to travel to work/activity from provider. (for DropOff)
     * @type {string}
     * @memberof ParentTravelTime
     */
    isUsingPublicTransportationForDropoff: ParentTravelTimeIsUsingPublicTransportationForDropoffEnum | null;
    /**
     * Indicates if the Applicant uses public means of transport to travel from work/activity to provider.(for Pickup)
     * @type {string}
     * @memberof ParentTravelTime
     */
    isUsingPublicTransportationForPickup: ParentTravelTimeIsUsingPublicTransportationForPickupEnum | null;
}


/**
 * @export
 */
export const ParentTravelTimeDropOffTravelTimeEnum = {
    _15Min: '15 min',
    _30Min: '30 min',
    _45Min: '45 min',
    _1Hour: '1 hour',
    MoreThan1Hour: 'More than 1 hour'
} as const;
export type ParentTravelTimeDropOffTravelTimeEnum = typeof ParentTravelTimeDropOffTravelTimeEnum[keyof typeof ParentTravelTimeDropOffTravelTimeEnum];

/**
 * @export
 */
export const ParentTravelTimePickupTravelTimeEnum = {
    _15Min: '15 min',
    _30Min: '30 min',
    _45Min: '45 min',
    _1Hour: '1 hour',
    MoreThan1Hour: 'More than 1 hour'
} as const;
export type ParentTravelTimePickupTravelTimeEnum = typeof ParentTravelTimePickupTravelTimeEnum[keyof typeof ParentTravelTimePickupTravelTimeEnum];

/**
 * @export
 */
export const ParentTravelTimeIsUsingPublicTransportationForDropoffEnum = {
    Yes: 'Yes',
    No: 'No'
} as const;
export type ParentTravelTimeIsUsingPublicTransportationForDropoffEnum = typeof ParentTravelTimeIsUsingPublicTransportationForDropoffEnum[keyof typeof ParentTravelTimeIsUsingPublicTransportationForDropoffEnum];

/**
 * @export
 */
export const ParentTravelTimeIsUsingPublicTransportationForPickupEnum = {
    Yes: 'Yes',
    No: 'No'
} as const;
export type ParentTravelTimeIsUsingPublicTransportationForPickupEnum = typeof ParentTravelTimeIsUsingPublicTransportationForPickupEnum[keyof typeof ParentTravelTimeIsUsingPublicTransportationForPickupEnum];


/**
 * Check if a given object implements the ParentTravelTime interface.
 */
export function instanceOfParentTravelTime(value: object): value is ParentTravelTime {
    if (!('dropOffTravelTime' in value) || value['dropOffTravelTime'] === undefined) return false;
    if (!('pickupTravelTime' in value) || value['pickupTravelTime'] === undefined) return false;
    if (!('isUsingPublicTransportationForDropoff' in value) || value['isUsingPublicTransportationForDropoff'] === undefined) return false;
    if (!('isUsingPublicTransportationForPickup' in value) || value['isUsingPublicTransportationForPickup'] === undefined) return false;
    return true;
}

export function ParentTravelTimeFromJSON(json: any): ParentTravelTime {
    return ParentTravelTimeFromJSONTyped(json, false);
}

export function ParentTravelTimeFromJSONTyped(json: any, ignoreDiscriminator: boolean): ParentTravelTime {
    if (json == null) {
        return json;
    }
    return {
        
        'dropOffTravelTime': json['DropOffTravelTime'],
        'pickupTravelTime': json['PickupTravelTime'],
        'dropOffTravelTimeTextIfGT1Hr': json['DropOffTravelTimeTextIfGT1Hr'] == null ? undefined : json['DropOffTravelTimeTextIfGT1Hr'],
        'pickupTravelTimeTextIfGT1Hr': json['PickupTravelTimeTextIfGT1Hr'] == null ? undefined : json['PickupTravelTimeTextIfGT1Hr'],
        'isUsingPublicTransportationForDropoff': json['IsUsingPublicTransportationForDropoff'],
        'isUsingPublicTransportationForPickup': json['IsUsingPublicTransportationForPickup'],
    };
}

export function ParentTravelTimeToJSON(json: any): ParentTravelTime {
    return ParentTravelTimeToJSONTyped(json, false);
}

export function ParentTravelTimeToJSONTyped(value?: ParentTravelTime | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'DropOffTravelTime': value['dropOffTravelTime'],
        'PickupTravelTime': value['pickupTravelTime'],
        'DropOffTravelTimeTextIfGT1Hr': value['dropOffTravelTimeTextIfGT1Hr'],
        'PickupTravelTimeTextIfGT1Hr': value['pickupTravelTimeTextIfGT1Hr'],
        'IsUsingPublicTransportationForDropoff': value['isUsingPublicTransportationForDropoff'],
        'IsUsingPublicTransportationForPickup': value['isUsingPublicTransportationForPickup'],
    };
}

