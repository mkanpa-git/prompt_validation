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
 * @interface CFWB012Applicant
 */
export interface CFWB012Applicant {
    /**
     * Last Name of the Applicant requesting care. (Please include any aliases or maiden names in parentheses)
     * @type {string}
     * @memberof CFWB012Applicant
     */
    lastName: string;
    /**
     * First name of the Applicant requesting care. NOTE: The applicant is the adult parent or caretaker requesting care.
     * @type {string}
     * @memberof CFWB012Applicant
     */
    firstName: string;
    /**
     * Middle Initial of the Applicant requesting care.
     * @type {string}
     * @memberof CFWB012Applicant
     */
    mI?: string | null;
    /**
     * Indicates the marital or relationship status of the Applicant.
     * @type {string}
     * @memberof CFWB012Applicant
     */
    maritalStatus: CFWB012ApplicantMaritalStatusEnum;
    /**
     * Street address of the Applicant requesting care.
     * @type {string}
     * @memberof CFWB012Applicant
     */
    street: string;
    /**
     * Apartment number of the Applicant's address.
     * @type {string}
     * @memberof CFWB012Applicant
     */
    apt?: string | null;
    /**
     * City of the Applicant's address
     * @type {string}
     * @memberof CFWB012Applicant
     */
    city: string;
    /**
     * Borough of the Applicant's address
     * @type {string}
     * @memberof CFWB012Applicant
     */
    borough: string;
    /**
     * State of the Applicant's address
     * @type {string}
     * @memberof CFWB012Applicant
     */
    state: string;
    /**
     * Zip Code of the Applicant's address
     * @type {string}
     * @memberof CFWB012Applicant
     */
    zipCode: string;
    /**
     * A geographical coordinate
     * @type {number}
     * @memberof CFWB012Applicant
     */
    latitude?: number | null;
    /**
     * A geographical coordinate
     * @type {number}
     * @memberof CFWB012Applicant
     */
    longitude?: number | null;
    /**
     * Indicates whether the address of the Applicant requesting care is temporary.
     * @type {string}
     * @memberof CFWB012Applicant
     */
    isTemporaryAddress: CFWB012ApplicantIsTemporaryAddressEnum;
    /**
     * Indicates a list of possible values to select where the family is currently living in.
     * @type {string}
     * @memberof CFWB012Applicant
     */
    currentlyLivingIn?: CFWB012ApplicantCurrentlyLivingInEnum | null;
    /**
     * The home telephone number,  including the area code used by the Applicant.
     * @type {string}
     * @memberof CFWB012Applicant
     */
    telephoneHome?: string | null;
    /**
     * The work telephone number, including the area code used by the Applicant.
     * @type {string}
     * @memberof CFWB012Applicant
     */
    telephoneWork?: string | null;
    /**
     * The cell or other telephone number,  including the area code used by the Applicant.
     * @type {string}
     * @memberof CFWB012Applicant
     */
    telephoneMobileOrOther?: string | null;
    /**
     * A field that indicates the email address of the Applicant.
     * @type {string}
     * @memberof CFWB012Applicant
     */
    email: string;
    /**
     * 
     * @type {string}
     * @memberof CFWB012Applicant
     */
    hasCashAssistance?: CFWB012ApplicantHasCashAssistanceEnum;
    /**
     * The unique Cash Assistance number has to be entered if the applicant has a CA case that has been inactive over a year.
     * @type {string}
     * @memberof CFWB012Applicant
     */
    cANumber?: string | null;
    /**
     * Indicates the language primarily spoken by the applicant.
     * @type {string}
     * @memberof CFWB012Applicant
     */
    primaryLanguage: CFWB012ApplicantPrimaryLanguageEnum;
    /**
     * Indicates the language the Applicant prefer to communicate in.
     * @type {string}
     * @memberof CFWB012Applicant
     */
    preferredLanguage: CFWB012ApplicantPreferredLanguageEnum;
    /**
     * Free form text to indicate the applicant's primary language.
     * @type {string}
     * @memberof CFWB012Applicant
     */
    otherPrimaryLanguage?: string | null;
    /**
     * Free form text to indicate the applicant's preferred language.
     * @type {string}
     * @memberof CFWB012Applicant
     */
    otherPreferredLanguage?: string | null;
    /**
     * Indicates the Applicant's Date of Birth.
     * @type {string}
     * @memberof CFWB012Applicant
     */
    dateOfBirth: string;
    /**
     * Indicates the Applicant's gender.
     * @type {string}
     * @memberof CFWB012Applicant
     */
    sex: CFWB012ApplicantSexEnum;
    /**
     * Indicates the Applicant's Ethnicity.
     * @type {string}
     * @memberof CFWB012Applicant
     */
    ethnicity?: CFWB012ApplicantEthnicityEnum;
    /**
     * Indicates the Applicant's Race.  AI - Native American or Alaskan Native; AS - Asian; BL - Black or African American; HP - Native Hawaiian or Pacific Islander; WH - White
     * @type {Set<string>}
     * @memberof CFWB012Applicant
     */
    race?: Set<CFWB012ApplicantRaceEnum> | null;
    /**
     * Indicates the Applicant's Social Security Number.
     * @type {string}
     * @memberof CFWB012Applicant
     */
    sSN?: string | null;
}


/**
 * @export
 */
export const CFWB012ApplicantMaritalStatusEnum = {
    Single: 'Single',
    Married: 'Married',
    Divorced: 'Divorced',
    Widowed: 'Widowed',
    Separated: 'Separated'
} as const;
export type CFWB012ApplicantMaritalStatusEnum = typeof CFWB012ApplicantMaritalStatusEnum[keyof typeof CFWB012ApplicantMaritalStatusEnum];

/**
 * @export
 */
export const CFWB012ApplicantIsTemporaryAddressEnum = {
    Yes: 'Yes',
    No: 'No'
} as const;
export type CFWB012ApplicantIsTemporaryAddressEnum = typeof CFWB012ApplicantIsTemporaryAddressEnum[keyof typeof CFWB012ApplicantIsTemporaryAddressEnum];

/**
 * @export
 */
export const CFWB012ApplicantCurrentlyLivingInEnum = {
    HomelessShelter: 'Homeless Shelter',
    DoubledUpWithAnotherFamily: 'Doubled-up with another Family',
    HotelMotel: 'Hotel/Motel',
    CarBusTrain: 'Car, Bus, Train',
    Park: 'Park',
    Campsite: 'Campsite',
    Other: 'Other'
} as const;
export type CFWB012ApplicantCurrentlyLivingInEnum = typeof CFWB012ApplicantCurrentlyLivingInEnum[keyof typeof CFWB012ApplicantCurrentlyLivingInEnum];

/**
 * @export
 */
export const CFWB012ApplicantHasCashAssistanceEnum = {
    Yes: 'Yes',
    No: 'No'
} as const;
export type CFWB012ApplicantHasCashAssistanceEnum = typeof CFWB012ApplicantHasCashAssistanceEnum[keyof typeof CFWB012ApplicantHasCashAssistanceEnum];

/**
 * @export
 */
export const CFWB012ApplicantPrimaryLanguageEnum = {
    English: 'English',
    Spanish: 'Spanish',
    Other: 'Other'
} as const;
export type CFWB012ApplicantPrimaryLanguageEnum = typeof CFWB012ApplicantPrimaryLanguageEnum[keyof typeof CFWB012ApplicantPrimaryLanguageEnum];

/**
 * @export
 */
export const CFWB012ApplicantPreferredLanguageEnum = {
    English: 'English',
    Spanish: 'Spanish',
    Other: 'Other'
} as const;
export type CFWB012ApplicantPreferredLanguageEnum = typeof CFWB012ApplicantPreferredLanguageEnum[keyof typeof CFWB012ApplicantPreferredLanguageEnum];

/**
 * @export
 */
export const CFWB012ApplicantSexEnum = {
    Male: 'Male',
    Female: 'Female'
} as const;
export type CFWB012ApplicantSexEnum = typeof CFWB012ApplicantSexEnum[keyof typeof CFWB012ApplicantSexEnum];

/**
 * @export
 */
export const CFWB012ApplicantEthnicityEnum = {
    Hispanic: 'Hispanic',
    Latino: 'Latino',
    No: 'No',
    PreferNotToAnswer: 'Prefer not to answer'
} as const;
export type CFWB012ApplicantEthnicityEnum = typeof CFWB012ApplicantEthnicityEnum[keyof typeof CFWB012ApplicantEthnicityEnum];

/**
 * @export
 */
export const CFWB012ApplicantRaceEnum = {
    Ai: 'AI',
    As: 'AS',
    Bl: 'BL',
    Hp: 'HP',
    Wh: 'WH'
} as const;
export type CFWB012ApplicantRaceEnum = typeof CFWB012ApplicantRaceEnum[keyof typeof CFWB012ApplicantRaceEnum];


/**
 * Check if a given object implements the CFWB012Applicant interface.
 */
export function instanceOfCFWB012Applicant(value: object): value is CFWB012Applicant {
    if (!('lastName' in value) || value['lastName'] === undefined) return false;
    if (!('firstName' in value) || value['firstName'] === undefined) return false;
    if (!('maritalStatus' in value) || value['maritalStatus'] === undefined) return false;
    if (!('street' in value) || value['street'] === undefined) return false;
    if (!('city' in value) || value['city'] === undefined) return false;
    if (!('borough' in value) || value['borough'] === undefined) return false;
    if (!('state' in value) || value['state'] === undefined) return false;
    if (!('zipCode' in value) || value['zipCode'] === undefined) return false;
    if (!('isTemporaryAddress' in value) || value['isTemporaryAddress'] === undefined) return false;
    if (!('email' in value) || value['email'] === undefined) return false;
    if (!('primaryLanguage' in value) || value['primaryLanguage'] === undefined) return false;
    if (!('preferredLanguage' in value) || value['preferredLanguage'] === undefined) return false;
    if (!('dateOfBirth' in value) || value['dateOfBirth'] === undefined) return false;
    if (!('sex' in value) || value['sex'] === undefined) return false;
    return true;
}

export function CFWB012ApplicantFromJSON(json: any): CFWB012Applicant {
    return CFWB012ApplicantFromJSONTyped(json, false);
}

export function CFWB012ApplicantFromJSONTyped(json: any, ignoreDiscriminator: boolean): CFWB012Applicant {
    if (json == null) {
        return json;
    }
    return {
        
        'lastName': json['LastName'],
        'firstName': json['FirstName'],
        'mI': json['MI'] == null ? undefined : json['MI'],
        'maritalStatus': json['MaritalStatus'],
        'street': json['Street'],
        'apt': json['Apt'] == null ? undefined : json['Apt'],
        'city': json['City'],
        'borough': json['Borough'],
        'state': json['State'],
        'zipCode': json['ZipCode'],
        'latitude': json['Latitude'] == null ? undefined : json['Latitude'],
        'longitude': json['Longitude'] == null ? undefined : json['Longitude'],
        'isTemporaryAddress': json['IsTemporaryAddress'],
        'currentlyLivingIn': json['CurrentlyLivingIn'] == null ? undefined : json['CurrentlyLivingIn'],
        'telephoneHome': json['TelephoneHome'] == null ? undefined : json['TelephoneHome'],
        'telephoneWork': json['TelephoneWork'] == null ? undefined : json['TelephoneWork'],
        'telephoneMobileOrOther': json['TelephoneMobileOrOther'] == null ? undefined : json['TelephoneMobileOrOther'],
        'email': json['Email'],
        'hasCashAssistance': json['HasCashAssistance'] == null ? undefined : json['HasCashAssistance'],
        'cANumber': json['CANumber'] == null ? undefined : json['CANumber'],
        'primaryLanguage': json['PrimaryLanguage'],
        'preferredLanguage': json['PreferredLanguage'],
        'otherPrimaryLanguage': json['OtherPrimaryLanguage'] == null ? undefined : json['OtherPrimaryLanguage'],
        'otherPreferredLanguage': json['OtherPreferredLanguage'] == null ? undefined : json['OtherPreferredLanguage'],
        'dateOfBirth': json['DateOfBirth'],
        'sex': json['Sex'],
        'ethnicity': json['Ethnicity'] == null ? undefined : json['Ethnicity'],
        'race': json['Race'] == null ? undefined : new Set(json['Race']),
        'sSN': json['SSN'] == null ? undefined : json['SSN'],
    };
}

export function CFWB012ApplicantToJSON(json: any): CFWB012Applicant {
    return CFWB012ApplicantToJSONTyped(json, false);
}

export function CFWB012ApplicantToJSONTyped(value?: CFWB012Applicant | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'LastName': value['lastName'],
        'FirstName': value['firstName'],
        'MI': value['mI'],
        'MaritalStatus': value['maritalStatus'],
        'Street': value['street'],
        'Apt': value['apt'],
        'City': value['city'],
        'Borough': value['borough'],
        'State': value['state'],
        'ZipCode': value['zipCode'],
        'Latitude': value['latitude'],
        'Longitude': value['longitude'],
        'IsTemporaryAddress': value['isTemporaryAddress'],
        'CurrentlyLivingIn': value['currentlyLivingIn'],
        'TelephoneHome': value['telephoneHome'],
        'TelephoneWork': value['telephoneWork'],
        'TelephoneMobileOrOther': value['telephoneMobileOrOther'],
        'Email': value['email'],
        'HasCashAssistance': value['hasCashAssistance'],
        'CANumber': value['cANumber'],
        'PrimaryLanguage': value['primaryLanguage'],
        'PreferredLanguage': value['preferredLanguage'],
        'OtherPrimaryLanguage': value['otherPrimaryLanguage'],
        'OtherPreferredLanguage': value['otherPreferredLanguage'],
        'DateOfBirth': value['dateOfBirth'],
        'Sex': value['sex'],
        'Ethnicity': value['ethnicity'],
        'Race': value['race'] == null ? undefined : Array.from(value['race'] as Set<any>),
        'SSN': value['sSN'],
    };
}

