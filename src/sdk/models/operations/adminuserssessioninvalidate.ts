/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { AxiosResponse } from "axios";
import { Expose } from "class-transformer";

export class AdminUsersSessionInvalidateSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({
    data: "security, scheme=true;type=oauth2;name=Authorization",
  })
  slackAuth: string;
}

export class AdminUsersSessionInvalidateApplicationJSON extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "session_id" })
  sessionId: number;

  /**
   * ID of the team that the session belongs to
   */
  @SpeakeasyMetadata()
  @Expose({ name: "team_id" })
  teamId: string;
}

export class AdminUsersSessionInvalidateRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  requestBody: AdminUsersSessionInvalidateApplicationJSON;

  /**
   * Authentication token. Requires scope: `admin.users:write`
   */
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=token" })
  token: string;
}

export class AdminUsersSessionInvalidateResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  /**
   * Typical error response
   */
  @SpeakeasyMetadata()
  defaultErrorTemplate?: Record<string, Record<string, any>>;

  /**
   * Typical success response
   */
  @SpeakeasyMetadata()
  defaultSuccessTemplate?: Record<string, Record<string, any>>;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  rawResponse?: AxiosResponse;
}
