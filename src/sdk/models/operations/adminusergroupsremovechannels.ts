/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { AxiosResponse } from "axios";
import { Expose } from "class-transformer";

export class AdminUsergroupsRemoveChannelsSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({
    data: "security, scheme=true;type=oauth2;name=Authorization",
  })
  slackAuth: string;
}

export class AdminUsergroupsRemoveChannelsApplicationJSON extends SpeakeasyBase {
  /**
   * Comma-separated string of channel IDs
   */
  @SpeakeasyMetadata()
  @Expose({ name: "channel_ids" })
  channelIds: string;

  /**
   * ID of the IDP Group
   */
  @SpeakeasyMetadata()
  @Expose({ name: "usergroup_id" })
  usergroupId: string;
}

export class AdminUsergroupsRemoveChannelsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  requestBody: AdminUsergroupsRemoveChannelsApplicationJSON;

  /**
   * Authentication token. Requires scope: `admin.usergroups:write`
   */
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=token" })
  token: string;
}

export class AdminUsergroupsRemoveChannelsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  /**
   * Typical error response if the token provided is not associated with an Org Admin or Owner
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
