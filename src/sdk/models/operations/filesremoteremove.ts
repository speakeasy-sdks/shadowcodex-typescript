/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { AxiosResponse } from "axios";

export class FilesRemoteRemoveSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({
    data: "security, scheme=true;type=oauth2;name=Authorization",
  })
  slackAuth: string;
}

export class FilesRemoteRemoveRequestBody extends SpeakeasyBase {
  /**
   * Creator defined GUID for the file.
   */
  @SpeakeasyMetadata({ data: "form, name=external_id" })
  externalId?: string;

  /**
   * Specify a file by providing its ID.
   */
  @SpeakeasyMetadata({ data: "form, name=file" })
  file?: string;

  /**
   * Authentication token. Requires scope: `remote_files:write`
   */
  @SpeakeasyMetadata({ data: "form, name=token" })
  token?: string;
}

export class FilesRemoteRemoveResponse extends SpeakeasyBase {
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
