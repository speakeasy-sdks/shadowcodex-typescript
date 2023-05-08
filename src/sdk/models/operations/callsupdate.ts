/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { AxiosResponse } from "axios";
import { Expose } from "class-transformer";

export class CallsUpdateSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({
    data: "security, scheme=true;type=oauth2;name=Authorization",
  })
  slackAuth: string;
}

export class CallsUpdateApplicationJSON extends SpeakeasyBase {
  /**
   * When supplied, available Slack clients will attempt to directly launch the 3rd-party Call with this URL.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "desktop_app_join_url" })
  desktopAppJoinUrl?: string;

  /**
   * `id` returned by the [`calls.add`](/methods/calls.add) method.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "id" })
  id: string;

  /**
   * The URL required for a client to join the Call.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "join_url" })
  joinUrl?: string;

  /**
   * The name of the Call.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "title" })
  title?: string;
}

export class CallsUpdateRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  requestBody: CallsUpdateApplicationJSON;

  /**
   * Authentication token. Requires scope: `calls:write`
   */
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=token" })
  token: string;
}

export class CallsUpdateResponse extends SpeakeasyBase {
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
