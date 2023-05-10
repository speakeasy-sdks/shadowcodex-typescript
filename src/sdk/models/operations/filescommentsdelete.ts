/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { AxiosResponse } from "axios";
import { Expose } from "class-transformer";

export class FilesCommentsDeleteSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({
    data: "security, scheme=true;type=oauth2;name=Authorization",
  })
  slackAuth: string;
}

export class FilesCommentsDeleteApplicationJSON extends SpeakeasyBase {
  /**
   * File to delete a comment from.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "file" })
  file?: string;

  /**
   * The comment to delete.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "id" })
  id?: string;
}

export class FilesCommentsDeleteRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  requestBody?: FilesCommentsDeleteApplicationJSON;

  /**
   * Authentication token. Requires scope: `files:write:user`
   */
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=token" })
  token?: string;
}

export class FilesCommentsDeleteResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  rawResponse?: AxiosResponse;

  /**
   * Standard failure response when used with an invalid token
   */
  @SpeakeasyMetadata()
  filesCommentsDeleteErrorSchema?: Record<string, Record<string, any>>;

  /**
   * Standard success response is very simple
   */
  @SpeakeasyMetadata()
  filesCommentsDeleteSchema?: Record<string, Record<string, any>>;
}
