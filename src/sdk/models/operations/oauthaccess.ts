/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { AxiosResponse } from "axios";

export class OauthAccessSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({
    data: "security, scheme=true;type=oauth2;name=Authorization",
  })
  slackAuth: string;
}

export class OauthAccessRequest extends SpeakeasyBase {
  /**
   * Issued when you created your application.
   */
  @SpeakeasyMetadata({
    data: "queryParam, style=form;explode=true;name=client_id",
  })
  clientId?: string;

  /**
   * Issued when you created your application.
   */
  @SpeakeasyMetadata({
    data: "queryParam, style=form;explode=true;name=client_secret",
  })
  clientSecret?: string;

  /**
   * The `code` param returned via the OAuth callback.
   */
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=code" })
  code?: string;

  /**
   * This must match the originally submitted URI (if one was sent).
   */
  @SpeakeasyMetadata({
    data: "queryParam, style=form;explode=true;name=redirect_uri",
  })
  redirectUri?: string;

  /**
   * Request the user to add your app only to a single channel. Only valid with a [legacy workspace app](https://api.slack.com/legacy-workspace-apps).
   */
  @SpeakeasyMetadata({
    data: "queryParam, style=form;explode=true;name=single_channel",
  })
  singleChannel?: boolean;
}

export class OauthAccessResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  /**
   * Typical error response
   */
  @SpeakeasyMetadata()
  defaultErrorTemplate?: Record<string, Record<string, any>>;

  /**
   * Successful user token negotiation for a single scope
   */
  @SpeakeasyMetadata()
  defaultSuccessTemplate?: Record<string, Record<string, any>>;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  rawResponse?: AxiosResponse;
}
