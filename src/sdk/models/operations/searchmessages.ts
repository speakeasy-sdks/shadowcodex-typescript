/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { AxiosResponse } from "axios";

export class SearchMessagesSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({
    data: "security, scheme=true;type=oauth2;name=Authorization",
  })
  slackAuth: string;
}

export class SearchMessagesRequest extends SpeakeasyBase {
  /**
   * Pass the number of results you want per "page". Maximum of `100`.
   */
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=count" })
  count?: number;

  /**
   * Pass a value of `true` to enable query highlight markers (see below).
   */
  @SpeakeasyMetadata({
    data: "queryParam, style=form;explode=true;name=highlight",
  })
  highlight?: boolean;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=page" })
  page?: number;

  /**
   * Search query.
   */
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=query" })
  query: string;

  /**
   * Return matches sorted by either `score` or `timestamp`.
   */
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=sort" })
  sort?: string;

  /**
   * Change sort direction to ascending (`asc`) or descending (`desc`).
   */
  @SpeakeasyMetadata({
    data: "queryParam, style=form;explode=true;name=sort_dir",
  })
  sortDir?: string;

  /**
   * Authentication token. Requires scope: `search:read`
   */
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=token" })
  token: string;
}

export class SearchMessagesResponse extends SpeakeasyBase {
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
