/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { AxiosResponse } from "axios";

export class UsersIdentitySecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({
    data: "security, scheme=true;type=oauth2;name=Authorization",
  })
  slackAuth: string;
}

export class UsersIdentityRequest extends SpeakeasyBase {
  /**
   * Authentication token. Requires scope: `identity.basic`
   */
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=token" })
  token?: string;
}

export class UsersIdentityResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  rawResponse?: AxiosResponse;

  /**
   * Typical error response
   */
  @SpeakeasyMetadata()
  usersIdentityErrorSchema?: Record<string, Record<string, any>>;

  /**
   * You will receive at a minimum the following information:
   */
  @SpeakeasyMetadata()
  usersIdentitySchema?: Record<string, any>;
}
