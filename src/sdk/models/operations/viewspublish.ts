/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { AxiosResponse } from "axios";

export class ViewsPublishSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({
    data: "security, scheme=true;type=oauth2;name=Authorization",
  })
  slackAuth: string;
}

export class ViewsPublishRequest extends SpeakeasyBase {
  /**
   * A string that represents view state to protect against possible race conditions.
   */
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=hash" })
  hash?: string;

  /**
   * Authentication token. Requires scope: `none`
   */
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=token" })
  token: string;

  /**
   * `id` of the user you want publish a view to.
   */
  @SpeakeasyMetadata({
    data: "queryParam, style=form;explode=true;name=user_id",
  })
  userId: string;

  /**
   * A [view payload](/reference/surfaces/views). This must be a JSON-encoded string.
   */
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=view" })
  view: string;
}

export class ViewsPublishResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  /**
   * Typical error response, before getting to any possible validation errors.
   */
  @SpeakeasyMetadata()
  defaultErrorTemplate?: Record<string, Record<string, any>>;

  /**
   * Typical success response includes the published view payload.
   */
  @SpeakeasyMetadata()
  defaultSuccessTemplate?: Record<string, Record<string, any>>;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  rawResponse?: AxiosResponse;
}
