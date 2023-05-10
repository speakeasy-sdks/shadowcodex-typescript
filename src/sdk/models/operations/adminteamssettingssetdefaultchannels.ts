/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { AxiosResponse } from "axios";

export class AdminTeamsSettingsSetDefaultChannelsSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({
    data: "security, scheme=true;type=oauth2;name=Authorization",
  })
  slackAuth: string;
}

export class AdminTeamsSettingsSetDefaultChannelsRequestBody extends SpeakeasyBase {
  /**
   * An array of channel IDs.
   */
  @SpeakeasyMetadata({ data: "form, name=channel_ids" })
  channelIds: string;

  /**
   * ID for the workspace to set the default channel for.
   */
  @SpeakeasyMetadata({ data: "form, name=team_id" })
  teamId: string;

  /**
   * Authentication token. Requires scope: `admin.teams:write`
   */
  @SpeakeasyMetadata({ data: "form, name=token" })
  token: string;
}

export class AdminTeamsSettingsSetDefaultChannelsResponse extends SpeakeasyBase {
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
