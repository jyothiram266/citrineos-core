// Copyright 2023 S44, LLC
// Copyright Contributors to the CitrineOS Project
//
// SPDX-License-Identifier: Apache 2.0

 
/**
 * This file was automatically generated by json-schema-to-typescript.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run json-schema-to-typescript to regenerate this file.
 */

import { ComponentCriterionEnumType } from '../enums';
import { OcppRequest } from '../../..';

export interface GetReportRequest extends OcppRequest {
  customData?: CustomDataType | null;
  /**
   * @minItems 1
   */
  componentVariable?:
    | [ComponentVariableType, ...ComponentVariableType[]]
    | null;
  /**
   * The Id of the request.
   *
   */
  requestId: number;
  /**
   * This field contains criteria for components for which a report is requested
   *
   *
   * @minItems 1
   * @maxItems 4
   */
  componentCriteria?:
    | [ComponentCriterionEnumType]
    | [ComponentCriterionEnumType, ComponentCriterionEnumType]
    | [
        ComponentCriterionEnumType,
        ComponentCriterionEnumType,
        ComponentCriterionEnumType,
      ]
    | [
        ComponentCriterionEnumType,
        ComponentCriterionEnumType,
        ComponentCriterionEnumType,
        ComponentCriterionEnumType,
      ]
    | null;
}
/**
 * This class does not get 'AdditionalProperties = false' in the schema generation, so it can be extended with arbitrary JSON properties to allow adding custom data.
 */
export interface CustomDataType {
  vendorId: string;
  [k: string]: unknown;
}
/**
 * Class to report components, variables and variable attributes and characteristics.
 *
 */
export interface ComponentVariableType {
  customData?: CustomDataType | null;
  component: ComponentType;
  variable?: VariableType | null;
}
/**
 * A physical or logical component
 *
 */
export interface ComponentType {
  customData?: CustomDataType | null;
  evse?: EVSEType | null;
  /**
   * Name of the component. Name should be taken from the list of standardized component names whenever possible. Case Insensitive. strongly advised to use Camel Case.
   *
   */
  name: string;
  /**
   * Name of instance in case the component exists as multiple instances. Case Insensitive. strongly advised to use Camel Case.
   *
   */
  instance?: string | null;
}
/**
 * EVSE
 * urn:x-oca:ocpp:uid:2:233123
 * Electric Vehicle Supply Equipment
 *
 */
export interface EVSEType {
  customData?: CustomDataType | null;
  /**
   * Identified_ Object. MRID. Numeric_ Identifier
   * urn:x-enexis:ecdm:uid:1:569198
   * EVSE Identifier. This contains a number (&gt; 0) designating an EVSE of the Charging Station.
   *
   */
  id: number;
  /**
   * An id to designate a specific connector (on an EVSE) by connector index number.
   *
   */
  connectorId?: number | null;
}
/**
 * Reference key to a component-variable.
 *
 */
export interface VariableType {
  customData?: CustomDataType | null;
  /**
   * Name of the variable. Name should be taken from the list of standardized variable names whenever possible. Case Insensitive. strongly advised to use Camel Case.
   *
   */
  name: string;
  /**
   * Name of instance in case the variable exists as multiple instances. Case Insensitive. strongly advised to use Camel Case.
   *
   */
  instance?: string | null;
}
