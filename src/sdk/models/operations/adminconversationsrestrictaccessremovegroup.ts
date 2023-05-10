/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { AxiosResponse } from "axios";

export class AdminConversationsRestrictAccessRemoveGroupSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({
    data: "security, scheme=true;type=oauth2;name=Authorization",
  })
  slackAuth: string;
}

export class AdminConversationsRestrictAccessRemoveGroupRequestBody extends SpeakeasyBase {
  /**
   * The channel to remove the linked group from.
   */
  @SpeakeasyMetadata({ data: "form, name=channel_id" })
  channelId: string;

  /**
   * The [IDP Group](https://slack.com/help/articles/115001435788-Connect-identity-provider-groups-to-your-Enterprise-Grid-org) ID to remove from the private channel.
   */
  @SpeakeasyMetadata({ data: "form, name=group_id" })
  groupId: string;

  /**
   * The workspace where the channel exists. This argument is required for channels only tied to one workspace, and optional for channels that are shared across an organization.
   */
  @SpeakeasyMetadata({ data: "form, name=team_id" })
  teamId: string;

  /**
   * Authentication token. Requires scope: `admin.conversations:write`
   */
  @SpeakeasyMetadata({ data: "form, name=token" })
  token: string;
}

export class AdminConversationsRestrictAccessRemoveGroupResponse extends SpeakeasyBase {
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
