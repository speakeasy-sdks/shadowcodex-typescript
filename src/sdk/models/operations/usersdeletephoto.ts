/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { AxiosResponse } from "axios";

export class UsersDeletePhotoSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({
    data: "security, scheme=true;type=oauth2;name=Authorization",
  })
  slackAuth: string;
}

export class UsersDeletePhotoRequestBody extends SpeakeasyBase {
  /**
   * Authentication token. Requires scope: `users.profile:write`
   */
  @SpeakeasyMetadata({ data: "form, name=token" })
  token: string;
}

export class UsersDeletePhotoResponse extends SpeakeasyBase {
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
  usersDeletePhotoErrorSchema?: Record<string, Record<string, any>>;

  /**
   * Typical success response
   */
  @SpeakeasyMetadata()
  usersDeletePhotoSchema?: Record<string, Record<string, any>>;
}
