/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { AxiosResponse } from "axios";

export class FilesRemoteInfoSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({
    data: "security, scheme=true;type=oauth2;name=Authorization",
  })
  slackAuth: string;
}

export class FilesRemoteInfoRequest extends SpeakeasyBase {
  /**
   * Creator defined GUID for the file.
   */
  @SpeakeasyMetadata({
    data: "queryParam, style=form;explode=true;name=external_id",
  })
  externalId?: string;

  /**
   * Specify a file by providing its ID.
   */
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=file" })
  file?: string;

  /**
   * Authentication token. Requires scope: `remote_files:read`
   */
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=token" })
  token?: string;
}

export class FilesRemoteInfoResponse extends SpeakeasyBase {
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
