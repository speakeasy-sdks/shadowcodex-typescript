/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { AxiosResponse } from "axios";

export class AdminEmojiRemoveSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({
    data: "security, scheme=true;type=oauth2;name=Authorization",
  })
  slackAuth: string;
}

export class AdminEmojiRemoveRequestBody extends SpeakeasyBase {
  /**
   * The name of the emoji to be removed. Colons (`:myemoji:`) around the value are not required, although they may be included.
   */
  @SpeakeasyMetadata({ data: "form, name=name" })
  name: string;

  /**
   * Authentication token. Requires scope: `admin.teams:write`
   */
  @SpeakeasyMetadata({ data: "form, name=token" })
  token: string;
}

export class AdminEmojiRemoveResponse extends SpeakeasyBase {
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
