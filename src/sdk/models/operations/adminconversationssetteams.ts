/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { AxiosResponse } from "axios";
import { Expose } from "class-transformer";

export class AdminConversationsSetTeamsSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({
    data: "security, scheme=true;type=oauth2;name=Authorization",
  })
  slackAuth: string;
}

export class AdminConversationsSetTeamsApplicationJSON extends SpeakeasyBase {
  /**
   * The encoded `channel_id` to add or remove to workspaces.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "channel_id" })
  channelId: string;

  /**
   * True if channel has to be converted to an org channel
   */
  @SpeakeasyMetadata()
  @Expose({ name: "org_channel" })
  orgChannel?: boolean;

  /**
   * A comma-separated list of workspaces to which the channel should be shared. Not required if the channel is being shared org-wide.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "target_team_ids" })
  targetTeamIds?: string;

  /**
   * The workspace to which the channel belongs. Omit this argument if the channel is a cross-workspace shared channel.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "team_id" })
  teamId?: string;
}

export class AdminConversationsSetTeamsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  requestBody: AdminConversationsSetTeamsApplicationJSON;

  /**
   * Authentication token. Requires scope: `admin.conversations:write`
   */
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=token" })
  token: string;
}

export class AdminConversationsSetTeamsResponse extends SpeakeasyBase {
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
