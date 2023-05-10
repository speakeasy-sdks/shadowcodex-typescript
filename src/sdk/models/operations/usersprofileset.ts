/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { AxiosResponse } from "axios";
import { Expose } from "class-transformer";

export class UsersProfileSetSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({
    data: "security, scheme=true;type=oauth2;name=Authorization",
  })
  slackAuth: string;
}

export class UsersProfileSetApplicationJSON extends SpeakeasyBase {
  /**
   * Name of a single key to set. Usable only if `profile` is not passed.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "name" })
  name?: string;

  /**
   * Collection of key:value pairs presented as a URL-encoded JSON hash. At most 50 fields may be set. Each field name is limited to 255 characters.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "profile" })
  profile?: string;

  /**
   * ID of user to change. This argument may only be specified by team admins on paid teams.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "user" })
  user?: string;

  /**
   * Value to set a single key to. Usable only if `profile` is not passed.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "value" })
  value?: string;
}

export class UsersProfileSetRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  requestBody?: UsersProfileSetApplicationJSON;

  /**
   * Authentication token. Requires scope: `users.profile:write`
   */
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=token" })
  token: string;
}

export class UsersProfileSetResponse extends SpeakeasyBase {
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
  usersProfileSetErrorSchema?: Record<string, Record<string, any>>;

  /**
   * Typical success response
   */
  @SpeakeasyMetadata()
  usersProfileSetSchema?: Record<string, Record<string, any>>;
}
