/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { AxiosResponse } from "axios";
import { Expose } from "class-transformer";

export class ConversationsKickSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({
    data: "security, scheme=true;type=oauth2;name=Authorization",
  })
  slackAuth: string;
}

export class ConversationsKickApplicationJSON extends SpeakeasyBase {
  /**
   * ID of conversation to remove user from.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "channel" })
  channel?: string;

  /**
   * User ID to be removed.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "user" })
  user?: string;
}

export class ConversationsKickRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  requestBody?: ConversationsKickApplicationJSON;

  /**
   * Authentication token. Requires scope: `conversations:write`
   */
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=token" })
  token?: string;
}

export class ConversationsKickResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  rawResponse?: AxiosResponse;

  /**
   * Typical error response when you attempt to kick yourself from a channel
   */
  @SpeakeasyMetadata()
  conversationsKickErrorSchema?: Record<string, Record<string, any>>;

  /**
   * Typical success response
   */
  @SpeakeasyMetadata()
  conversationsKickSuccessSchema?: Record<string, Record<string, any>>;
}
