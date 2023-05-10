# admin

### Available Operations

* [adminAppsApprove](#adminappsapprove) - Approve an app for installation on a workspace.
* [adminAppsApprovedList](#adminappsapprovedlist) - List approved apps for an org or workspace.
* [adminAppsRequestsList](#adminappsrequestslist) - List app requests for a team/workspace.
* [adminAppsRestrict](#adminappsrestrict) - Restrict an app for installation on a workspace.
* [adminAppsRestrictedList](#adminappsrestrictedlist) - List restricted apps for an org or workspace.
* [adminConversationsArchive](#adminconversationsarchive) - Archive a public or private channel.
* [adminConversationsConvertToPrivate](#adminconversationsconverttoprivate) - Convert a public channel to a private channel.
* [adminConversationsCreate](#adminconversationscreate) - Create a public or private channel-based conversation.
* [adminConversationsDelete](#adminconversationsdelete) - Delete a public or private channel.
* [adminConversationsDisconnectShared](#adminconversationsdisconnectshared) - Disconnect a connected channel from one or more workspaces.
* [adminConversationsEkmListOriginalConnectedChannelInfo](#adminconversationsekmlistoriginalconnectedchannelinfo) - List all disconnected channels—i.e., channels that were once connected to other workspaces and then disconnected—and the corresponding original channel IDs for key revocation with EKM.
* [adminConversationsGetConversationPrefs](#adminconversationsgetconversationprefs) - Get conversation preferences for a public or private channel.
* [adminConversationsGetTeams](#adminconversationsgetteams) - Get all the workspaces a given public or private channel is connected to within this Enterprise org.
* [adminConversationsInvite](#adminconversationsinvite) - Invite a user to a public or private channel.
* [adminConversationsRename](#adminconversationsrename) - Rename a public or private channel.
* [adminConversationsRestrictAccessAddGroup](#adminconversationsrestrictaccessaddgroup) - Add an allowlist of IDP groups for accessing a channel
* [adminConversationsRestrictAccessListGroups](#adminconversationsrestrictaccesslistgroups) - List all IDP Groups linked to a channel
* [adminConversationsRestrictAccessRemoveGroup](#adminconversationsrestrictaccessremovegroup) - Remove a linked IDP group linked from a private channel
* [adminConversationsSearch](#adminconversationssearch) - Search for public or private channels in an Enterprise organization.
* [adminConversationsSetConversationPrefs](#adminconversationssetconversationprefs) - Set the posting permissions for a public or private channel.
* [adminConversationsSetTeams](#adminconversationssetteams) - Set the workspaces in an Enterprise grid org that connect to a public or private channel.
* [adminConversationsUnarchive](#adminconversationsunarchive) - Unarchive a public or private channel.
* [adminEmojiAdd](#adminemojiadd) - Add an emoji.
* [adminEmojiAddAlias](#adminemojiaddalias) - Add an emoji alias.
* [adminEmojiList](#adminemojilist) - List emoji for an Enterprise Grid organization.
* [adminEmojiRemove](#adminemojiremove) - Remove an emoji across an Enterprise Grid organization
* [adminEmojiRename](#adminemojirename) - Rename an emoji.
* [adminInviteRequestsApprove](#admininviterequestsapprove) - Approve a workspace invite request.
* [adminInviteRequestsApprovedList](#admininviterequestsapprovedlist) - List all approved workspace invite requests.
* [adminInviteRequestsDeniedList](#admininviterequestsdeniedlist) - List all denied workspace invite requests.
* [adminInviteRequestsDeny](#admininviterequestsdeny) - Deny a workspace invite request.
* [adminInviteRequestsList](#admininviterequestslist) - List all pending workspace invite requests.
* [adminTeamsAdminsList](#adminteamsadminslist) - List all of the admins on a given workspace.
* [adminTeamsCreate](#adminteamscreate) - Create an Enterprise team.
* [adminTeamsList](#adminteamslist) - List all teams on an Enterprise organization
* [adminTeamsOwnersList](#adminteamsownerslist) - List all of the owners on a given workspace.
* [adminTeamsSettingsInfo](#adminteamssettingsinfo) - Fetch information about settings in a workspace
* [adminTeamsSettingsSetDefaultChannels](#adminteamssettingssetdefaultchannels) - Set the default channels of a workspace.
* [adminTeamsSettingsSetDescription](#adminteamssettingssetdescription) - Set the description of a given workspace.
* [adminTeamsSettingsSetDiscoverability](#adminteamssettingssetdiscoverability) - An API method that allows admins to set the discoverability of a given workspace
* [adminTeamsSettingsSetIcon](#adminteamssettingsseticon) - Sets the icon of a workspace.
* [adminTeamsSettingsSetName](#adminteamssettingssetname) - Set the name of a given workspace.
* [adminUsergroupsAddChannels](#adminusergroupsaddchannels) - Add one or more default channels to an IDP group.
* [adminUsergroupsAddTeams](#adminusergroupsaddteams) - Associate one or more default workspaces with an organization-wide IDP group.
* [adminUsergroupsListChannels](#adminusergroupslistchannels) - List the channels linked to an org-level IDP group (user group).
* [adminUsergroupsRemoveChannels](#adminusergroupsremovechannels) - Remove one or more default channels from an org-level IDP group (user group).
* [adminUsersAssign](#adminusersassign) - Add an Enterprise user to a workspace.
* [adminUsersInvite](#adminusersinvite) - Invite a user to a workspace.
* [adminUsersList](#adminuserslist) - List users on a workspace
* [adminUsersRemove](#adminusersremove) - Remove a user from a workspace.
* [adminUsersSessionInvalidate](#adminuserssessioninvalidate) - Invalidate a single session for a user by session_id
* [adminUsersSessionReset](#adminuserssessionreset) - Wipes all valid sessions on all devices for a given user
* [adminUsersSetAdmin](#adminuserssetadmin) - Set an existing guest, regular user, or owner to be an admin user.
* [adminUsersSetExpiration](#adminuserssetexpiration) - Set an expiration for a guest user
* [adminUsersSetOwner](#adminuserssetowner) - Set an existing guest, regular user, or admin user to be a workspace owner.
* [adminUsersSetRegular](#adminuserssetregular) - Set an existing guest user, admin user, or owner to be a regular user.

## adminAppsApprove

Approve an app for installation on a workspace.

API method documentation
<https://api.slack.com/methods/admin.apps.approve>

### Example Usage

```typescript
import { SlackSpec } from "slack-spec";
import { AdminAppsApproveResponse } from "slack-spec/dist/sdk/models/operations";

const sdk = new SlackSpec();

sdk.admin.adminAppsApprove({
  requestBody: {
    appId: "unde",
    requestId: "nulla",
    teamId: "corrupti",
  },
  token: "illum",
}, {
  slackAuth: "Bearer YOUR_ACCESS_TOKEN_HERE",
}).then((res: AdminAppsApproveResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

## adminAppsApprovedList

List approved apps for an org or workspace.

API method documentation
<https://api.slack.com/methods/admin.apps.approved.list>

### Example Usage

```typescript
import { SlackSpec } from "slack-spec";
import { AdminAppsApprovedListResponse } from "slack-spec/dist/sdk/models/operations";

const sdk = new SlackSpec();

sdk.admin.adminAppsApprovedList({
  cursor: "vel",
  enterpriseId: "error",
  limit: 645894,
  teamId: "suscipit",
  token: "iure",
}, {
  slackAuth: "Bearer YOUR_ACCESS_TOKEN_HERE",
}).then((res: AdminAppsApprovedListResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

## adminAppsRequestsList

List app requests for a team/workspace.

API method documentation
<https://api.slack.com/methods/admin.apps.requests.list>

### Example Usage

```typescript
import { SlackSpec } from "slack-spec";
import { AdminAppsRequestsListResponse } from "slack-spec/dist/sdk/models/operations";

const sdk = new SlackSpec();

sdk.admin.adminAppsRequestsList({
  cursor: "magnam",
  limit: 891773,
  teamId: "ipsa",
  token: "delectus",
}, {
  slackAuth: "Bearer YOUR_ACCESS_TOKEN_HERE",
}).then((res: AdminAppsRequestsListResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

## adminAppsRestrict

Restrict an app for installation on a workspace.

API method documentation
<https://api.slack.com/methods/admin.apps.restrict>

### Example Usage

```typescript
import { SlackSpec } from "slack-spec";
import { AdminAppsRestrictResponse } from "slack-spec/dist/sdk/models/operations";

const sdk = new SlackSpec();

sdk.admin.adminAppsRestrict({
  requestBody: {
    appId: "tempora",
    requestId: "suscipit",
    teamId: "molestiae",
  },
  token: "minus",
}, {
  slackAuth: "Bearer YOUR_ACCESS_TOKEN_HERE",
}).then((res: AdminAppsRestrictResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

## adminAppsRestrictedList

List restricted apps for an org or workspace.

API method documentation
<https://api.slack.com/methods/admin.apps.restricted.list>

### Example Usage

```typescript
import { SlackSpec } from "slack-spec";
import { AdminAppsRestrictedListResponse } from "slack-spec/dist/sdk/models/operations";

const sdk = new SlackSpec();

sdk.admin.adminAppsRestrictedList({
  cursor: "placeat",
  enterpriseId: "voluptatum",
  limit: 479977,
  teamId: "excepturi",
  token: "nisi",
}, {
  slackAuth: "Bearer YOUR_ACCESS_TOKEN_HERE",
}).then((res: AdminAppsRestrictedListResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

## adminConversationsArchive

Archive a public or private channel.

API method documentation
<https://api.slack.com/methods/admin.conversations.archive>

### Example Usage

```typescript
import { SlackSpec } from "slack-spec";
import { AdminConversationsArchiveResponse } from "slack-spec/dist/sdk/models/operations";

const sdk = new SlackSpec();

sdk.admin.adminConversationsArchive({
  requestBody: {
    channelId: "recusandae",
  },
  token: "temporibus",
}, {
  slackAuth: "Bearer YOUR_ACCESS_TOKEN_HERE",
}).then((res: AdminConversationsArchiveResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

## adminConversationsConvertToPrivate

Convert a public channel to a private channel.

API method documentation
<https://api.slack.com/methods/admin.conversations.convertToPrivate>

### Example Usage

```typescript
import { SlackSpec } from "slack-spec";
import { AdminConversationsConvertToPrivateResponse } from "slack-spec/dist/sdk/models/operations";

const sdk = new SlackSpec();

sdk.admin.adminConversationsConvertToPrivate({
  requestBody: {
    channelId: "ab",
  },
  token: "quis",
}, {
  slackAuth: "Bearer YOUR_ACCESS_TOKEN_HERE",
}).then((res: AdminConversationsConvertToPrivateResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

## adminConversationsCreate

Create a public or private channel-based conversation.

API method documentation
<https://api.slack.com/methods/admin.conversations.create>

### Example Usage

```typescript
import { SlackSpec } from "slack-spec";
import { AdminConversationsCreateResponse } from "slack-spec/dist/sdk/models/operations";

const sdk = new SlackSpec();

sdk.admin.adminConversationsCreate({
  requestBody: {
    description: "veritatis",
    isPrivate: false,
    name: "Christopher Hills",
    orgWide: false,
    teamId: "quo",
  },
  token: "odit",
}, {
  slackAuth: "Bearer YOUR_ACCESS_TOKEN_HERE",
}).then((res: AdminConversationsCreateResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

## adminConversationsDelete

Delete a public or private channel.

API method documentation
<https://api.slack.com/methods/admin.conversations.delete>

### Example Usage

```typescript
import { SlackSpec } from "slack-spec";
import { AdminConversationsDeleteResponse } from "slack-spec/dist/sdk/models/operations";

const sdk = new SlackSpec();

sdk.admin.adminConversationsDelete({
  requestBody: {
    channelId: "at",
  },
  token: "at",
}, {
  slackAuth: "Bearer YOUR_ACCESS_TOKEN_HERE",
}).then((res: AdminConversationsDeleteResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

## adminConversationsDisconnectShared

Disconnect a connected channel from one or more workspaces.

API method documentation
<https://api.slack.com/methods/admin.conversations.disconnectShared>

### Example Usage

```typescript
import { SlackSpec } from "slack-spec";
import { AdminConversationsDisconnectSharedResponse } from "slack-spec/dist/sdk/models/operations";

const sdk = new SlackSpec();

sdk.admin.adminConversationsDisconnectShared({
  requestBody: {
    channelId: "maiores",
    leavingTeamIds: "molestiae",
  },
  token: "quod",
}, {
  slackAuth: "Bearer YOUR_ACCESS_TOKEN_HERE",
}).then((res: AdminConversationsDisconnectSharedResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

## adminConversationsEkmListOriginalConnectedChannelInfo

List all disconnected channels—i.e., channels that were once connected to other workspaces and then disconnected—and the corresponding original channel IDs for key revocation with EKM.

API method documentation
<https://api.slack.com/methods/admin.conversations.ekm.listOriginalConnectedChannelInfo>

### Example Usage

```typescript
import { SlackSpec } from "slack-spec";
import { AdminConversationsEkmListOriginalConnectedChannelInfoResponse } from "slack-spec/dist/sdk/models/operations";

const sdk = new SlackSpec();

sdk.admin.adminConversationsEkmListOriginalConnectedChannelInfo({
  channelIds: "quod",
  cursor: "esse",
  limit: 520478,
  teamIds: "porro",
  token: "dolorum",
}, {
  slackAuth: "Bearer YOUR_ACCESS_TOKEN_HERE",
}).then((res: AdminConversationsEkmListOriginalConnectedChannelInfoResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

## adminConversationsGetConversationPrefs

Get conversation preferences for a public or private channel.

API method documentation
<https://api.slack.com/methods/admin.conversations.getConversationPrefs>

### Example Usage

```typescript
import { SlackSpec } from "slack-spec";
import { AdminConversationsGetConversationPrefsResponse } from "slack-spec/dist/sdk/models/operations";

const sdk = new SlackSpec();

sdk.admin.adminConversationsGetConversationPrefs({
  channelId: "dicta",
  token: "nam",
}, {
  slackAuth: "Bearer YOUR_ACCESS_TOKEN_HERE",
}).then((res: AdminConversationsGetConversationPrefsResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

## adminConversationsGetTeams

Get all the workspaces a given public or private channel is connected to within this Enterprise org.

API method documentation
<https://api.slack.com/methods/admin.conversations.getTeams>

### Example Usage

```typescript
import { SlackSpec } from "slack-spec";
import { AdminConversationsGetTeamsResponse } from "slack-spec/dist/sdk/models/operations";

const sdk = new SlackSpec();

sdk.admin.adminConversationsGetTeams({
  channelId: "officia",
  cursor: "occaecati",
  limit: 143353,
  token: "deleniti",
}, {
  slackAuth: "Bearer YOUR_ACCESS_TOKEN_HERE",
}).then((res: AdminConversationsGetTeamsResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

## adminConversationsInvite

Invite a user to a public or private channel.

API method documentation
<https://api.slack.com/methods/admin.conversations.invite>

### Example Usage

```typescript
import { SlackSpec } from "slack-spec";
import { AdminConversationsInviteResponse } from "slack-spec/dist/sdk/models/operations";

const sdk = new SlackSpec();

sdk.admin.adminConversationsInvite({
  requestBody: {
    channelId: "hic",
    userIds: "optio",
  },
  token: "totam",
}, {
  slackAuth: "Bearer YOUR_ACCESS_TOKEN_HERE",
}).then((res: AdminConversationsInviteResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

## adminConversationsRename

Rename a public or private channel.

API method documentation
<https://api.slack.com/methods/admin.conversations.rename>

### Example Usage

```typescript
import { SlackSpec } from "slack-spec";
import { AdminConversationsRenameResponse } from "slack-spec/dist/sdk/models/operations";

const sdk = new SlackSpec();

sdk.admin.adminConversationsRename({
  requestBody: {
    channelId: "beatae",
    name: "Tanya Gleason",
  },
  token: "cum",
}, {
  slackAuth: "Bearer YOUR_ACCESS_TOKEN_HERE",
}).then((res: AdminConversationsRenameResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

## adminConversationsRestrictAccessAddGroup

Add an allowlist of IDP groups for accessing a channel

API method documentation
<https://api.slack.com/methods/admin.conversations.restrictAccess.addGroup>

### Example Usage

```typescript
import { SlackSpec } from "slack-spec";
import { AdminConversationsRestrictAccessAddGroupResponse } from "slack-spec/dist/sdk/models/operations";

const sdk = new SlackSpec();

sdk.admin.adminConversationsRestrictAccessAddGroup({
  channelId: "esse",
  groupId: "ipsum",
  teamId: "excepturi",
  token: "aspernatur",
}, {
  slackAuth: "Bearer YOUR_ACCESS_TOKEN_HERE",
}).then((res: AdminConversationsRestrictAccessAddGroupResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

## adminConversationsRestrictAccessListGroups

List all IDP Groups linked to a channel

API method documentation
<https://api.slack.com/methods/admin.conversations.restrictAccess.listGroups>

### Example Usage

```typescript
import { SlackSpec } from "slack-spec";
import { AdminConversationsRestrictAccessListGroupsResponse } from "slack-spec/dist/sdk/models/operations";

const sdk = new SlackSpec();

sdk.admin.adminConversationsRestrictAccessListGroups({
  channelId: "perferendis",
  teamId: "ad",
  token: "natus",
}, {
  slackAuth: "Bearer YOUR_ACCESS_TOKEN_HERE",
}).then((res: AdminConversationsRestrictAccessListGroupsResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

## adminConversationsRestrictAccessRemoveGroup

Remove a linked IDP group linked from a private channel

API method documentation
<https://api.slack.com/methods/admin.conversations.restrictAccess.removeGroup>

### Example Usage

```typescript
import { SlackSpec } from "slack-spec";
import { AdminConversationsRestrictAccessRemoveGroupResponse } from "slack-spec/dist/sdk/models/operations";

const sdk = new SlackSpec();

sdk.admin.adminConversationsRestrictAccessRemoveGroup({
  channelId: "sed",
  groupId: "iste",
  teamId: "dolor",
  token: "natus",
}, {
  slackAuth: "Bearer YOUR_ACCESS_TOKEN_HERE",
}).then((res: AdminConversationsRestrictAccessRemoveGroupResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

## adminConversationsSearch

Search for public or private channels in an Enterprise organization.

API method documentation
<https://api.slack.com/methods/admin.conversations.search>

### Example Usage

```typescript
import { SlackSpec } from "slack-spec";
import { AdminConversationsSearchResponse } from "slack-spec/dist/sdk/models/operations";

const sdk = new SlackSpec();

sdk.admin.adminConversationsSearch({
  cursor: "laboriosam",
  limit: 943749,
  query: "saepe",
  searchChannelTypes: "fuga",
  sort: "in",
  sortDir: "corporis",
  teamIds: "iste",
  token: "iure",
}, {
  slackAuth: "Bearer YOUR_ACCESS_TOKEN_HERE",
}).then((res: AdminConversationsSearchResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

## adminConversationsSetConversationPrefs

Set the posting permissions for a public or private channel.

API method documentation
<https://api.slack.com/methods/admin.conversations.setConversationPrefs>

### Example Usage

```typescript
import { SlackSpec } from "slack-spec";
import { AdminConversationsSetConversationPrefsResponse } from "slack-spec/dist/sdk/models/operations";

const sdk = new SlackSpec();

sdk.admin.adminConversationsSetConversationPrefs({
  requestBody: {
    channelId: "saepe",
    prefs: "quidem",
  },
  token: "architecto",
}, {
  slackAuth: "Bearer YOUR_ACCESS_TOKEN_HERE",
}).then((res: AdminConversationsSetConversationPrefsResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

## adminConversationsSetTeams

Set the workspaces in an Enterprise grid org that connect to a public or private channel.

API method documentation
<https://api.slack.com/methods/admin.conversations.setTeams>

### Example Usage

```typescript
import { SlackSpec } from "slack-spec";
import { AdminConversationsSetTeamsResponse } from "slack-spec/dist/sdk/models/operations";

const sdk = new SlackSpec();

sdk.admin.adminConversationsSetTeams({
  requestBody: {
    channelId: "ipsa",
    orgChannel: false,
    targetTeamIds: "reiciendis",
    teamId: "est",
  },
  token: "mollitia",
}, {
  slackAuth: "Bearer YOUR_ACCESS_TOKEN_HERE",
}).then((res: AdminConversationsSetTeamsResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

## adminConversationsUnarchive

Unarchive a public or private channel.

API method documentation
<https://api.slack.com/methods/admin.conversations.unarchive>

### Example Usage

```typescript
import { SlackSpec } from "slack-spec";
import { AdminConversationsUnarchiveResponse } from "slack-spec/dist/sdk/models/operations";

const sdk = new SlackSpec();

sdk.admin.adminConversationsUnarchive({
  requestBody: {
    channelId: "laborum",
  },
  token: "dolores",
}, {
  slackAuth: "Bearer YOUR_ACCESS_TOKEN_HERE",
}).then((res: AdminConversationsUnarchiveResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

## adminEmojiAdd

Add an emoji.

API method documentation
<https://api.slack.com/methods/admin.emoji.add>

### Example Usage

```typescript
import { SlackSpec } from "slack-spec";
import { AdminEmojiAddResponse } from "slack-spec/dist/sdk/models/operations";

const sdk = new SlackSpec();

sdk.admin.adminEmojiAdd({
  name: "Stacy Champlin",
  token: "omnis",
  url: "nemo",
}, {
  slackAuth: "Bearer YOUR_ACCESS_TOKEN_HERE",
}).then((res: AdminEmojiAddResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

## adminEmojiAddAlias

Add an emoji alias.

API method documentation
<https://api.slack.com/methods/admin.emoji.addAlias>

### Example Usage

```typescript
import { SlackSpec } from "slack-spec";
import { AdminEmojiAddAliasResponse } from "slack-spec/dist/sdk/models/operations";

const sdk = new SlackSpec();

sdk.admin.adminEmojiAddAlias({
  aliasFor: "minima",
  name: "Brian Kessler",
  token: "sapiente",
}, {
  slackAuth: "Bearer YOUR_ACCESS_TOKEN_HERE",
}).then((res: AdminEmojiAddAliasResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

## adminEmojiList

List emoji for an Enterprise Grid organization.

API method documentation
<https://api.slack.com/methods/admin.emoji.list>

### Example Usage

```typescript
import { SlackSpec } from "slack-spec";
import { AdminEmojiListResponse } from "slack-spec/dist/sdk/models/operations";

const sdk = new SlackSpec();

sdk.admin.adminEmojiList({
  cursor: "architecto",
  limit: 652790,
  token: "dolorem",
}, {
  slackAuth: "Bearer YOUR_ACCESS_TOKEN_HERE",
}).then((res: AdminEmojiListResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

## adminEmojiRemove

Remove an emoji across an Enterprise Grid organization

API method documentation
<https://api.slack.com/methods/admin.emoji.remove>

### Example Usage

```typescript
import { SlackSpec } from "slack-spec";
import { AdminEmojiRemoveResponse } from "slack-spec/dist/sdk/models/operations";

const sdk = new SlackSpec();

sdk.admin.adminEmojiRemove({
  name: "Carlos Ziemann",
  token: "numquam",
}, {
  slackAuth: "Bearer YOUR_ACCESS_TOKEN_HERE",
}).then((res: AdminEmojiRemoveResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

## adminEmojiRename

Rename an emoji.

API method documentation
<https://api.slack.com/methods/admin.emoji.rename>

### Example Usage

```typescript
import { SlackSpec } from "slack-spec";
import { AdminEmojiRenameResponse } from "slack-spec/dist/sdk/models/operations";

const sdk = new SlackSpec();

sdk.admin.adminEmojiRename({
  name: "Claudia Krajcik",
  newName: "quia",
  token: "quis",
}, {
  slackAuth: "Bearer YOUR_ACCESS_TOKEN_HERE",
}).then((res: AdminEmojiRenameResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

## adminInviteRequestsApprove

Approve a workspace invite request.

API method documentation
<https://api.slack.com/methods/admin.inviteRequests.approve>

### Example Usage

```typescript
import { SlackSpec } from "slack-spec";
import { AdminInviteRequestsApproveResponse } from "slack-spec/dist/sdk/models/operations";

const sdk = new SlackSpec();

sdk.admin.adminInviteRequestsApprove({
  requestBody: {
    inviteRequestId: "vitae",
    teamId: "laborum",
  },
  token: "animi",
}, {
  slackAuth: "Bearer YOUR_ACCESS_TOKEN_HERE",
}).then((res: AdminInviteRequestsApproveResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

## adminInviteRequestsApprovedList

List all approved workspace invite requests.

API method documentation
<https://api.slack.com/methods/admin.inviteRequests.approved.list>

### Example Usage

```typescript
import { SlackSpec } from "slack-spec";
import { AdminInviteRequestsApprovedListResponse } from "slack-spec/dist/sdk/models/operations";

const sdk = new SlackSpec();

sdk.admin.adminInviteRequestsApprovedList({
  cursor: "enim",
  limit: 138183,
  teamId: "quo",
  token: "sequi",
}, {
  slackAuth: "Bearer YOUR_ACCESS_TOKEN_HERE",
}).then((res: AdminInviteRequestsApprovedListResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

## adminInviteRequestsDeniedList

List all denied workspace invite requests.

API method documentation
<https://api.slack.com/methods/admin.inviteRequests.denied.list>

### Example Usage

```typescript
import { SlackSpec } from "slack-spec";
import { AdminInviteRequestsDeniedListResponse } from "slack-spec/dist/sdk/models/operations";

const sdk = new SlackSpec();

sdk.admin.adminInviteRequestsDeniedList({
  cursor: "tenetur",
  limit: 368725,
  teamId: "id",
  token: "possimus",
}, {
  slackAuth: "Bearer YOUR_ACCESS_TOKEN_HERE",
}).then((res: AdminInviteRequestsDeniedListResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

## adminInviteRequestsDeny

Deny a workspace invite request.

API method documentation
<https://api.slack.com/methods/admin.inviteRequests.deny>

### Example Usage

```typescript
import { SlackSpec } from "slack-spec";
import { AdminInviteRequestsDenyResponse } from "slack-spec/dist/sdk/models/operations";

const sdk = new SlackSpec();

sdk.admin.adminInviteRequestsDeny({
  requestBody: {
    inviteRequestId: "aut",
    teamId: "quasi",
  },
  token: "error",
}, {
  slackAuth: "Bearer YOUR_ACCESS_TOKEN_HERE",
}).then((res: AdminInviteRequestsDenyResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

## adminInviteRequestsList

List all pending workspace invite requests.

API method documentation
<https://api.slack.com/methods/admin.inviteRequests.list>

### Example Usage

```typescript
import { SlackSpec } from "slack-spec";
import { AdminInviteRequestsListResponse } from "slack-spec/dist/sdk/models/operations";

const sdk = new SlackSpec();

sdk.admin.adminInviteRequestsList({
  cursor: "temporibus",
  limit: 673660,
  teamId: "quasi",
  token: "reiciendis",
}, {
  slackAuth: "Bearer YOUR_ACCESS_TOKEN_HERE",
}).then((res: AdminInviteRequestsListResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

## adminTeamsAdminsList

List all of the admins on a given workspace.

API method documentation
<https://api.slack.com/methods/admin.teams.admins.list>

### Example Usage

```typescript
import { SlackSpec } from "slack-spec";
import { AdminTeamsAdminsListResponse } from "slack-spec/dist/sdk/models/operations";

const sdk = new SlackSpec();

sdk.admin.adminTeamsAdminsList({
  cursor: "voluptatibus",
  limit: 878194,
  teamId: "nihil",
  token: "praesentium",
}, {
  slackAuth: "Bearer YOUR_ACCESS_TOKEN_HERE",
}).then((res: AdminTeamsAdminsListResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

## adminTeamsCreate

Create an Enterprise team.

API method documentation
<https://api.slack.com/methods/admin.teams.create>

### Example Usage

```typescript
import { SlackSpec } from "slack-spec";
import { AdminTeamsCreateResponse } from "slack-spec/dist/sdk/models/operations";

const sdk = new SlackSpec();

sdk.admin.adminTeamsCreate({
  requestBody: {
    teamDescription: "voluptatibus",
    teamDiscoverability: "ipsa",
    teamDomain: "omnis",
    teamName: "voluptate",
  },
  token: "cum",
}, {
  slackAuth: "Bearer YOUR_ACCESS_TOKEN_HERE",
}).then((res: AdminTeamsCreateResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

## adminTeamsList

List all teams on an Enterprise organization

API method documentation
<https://api.slack.com/methods/admin.teams.list>

### Example Usage

```typescript
import { SlackSpec } from "slack-spec";
import { AdminTeamsListResponse } from "slack-spec/dist/sdk/models/operations";

const sdk = new SlackSpec();

sdk.admin.adminTeamsList({
  cursor: "perferendis",
  limit: 39187,
  token: "reprehenderit",
}, {
  slackAuth: "Bearer YOUR_ACCESS_TOKEN_HERE",
}).then((res: AdminTeamsListResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

## adminTeamsOwnersList

List all of the owners on a given workspace.

API method documentation
<https://api.slack.com/methods/admin.teams.owners.list>

### Example Usage

```typescript
import { SlackSpec } from "slack-spec";
import { AdminTeamsOwnersListResponse } from "slack-spec/dist/sdk/models/operations";

const sdk = new SlackSpec();

sdk.admin.adminTeamsOwnersList({
  cursor: "ut",
  limit: 979587,
  teamId: "dicta",
  token: "corporis",
}, {
  slackAuth: "Bearer YOUR_ACCESS_TOKEN_HERE",
}).then((res: AdminTeamsOwnersListResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

## adminTeamsSettingsInfo

Fetch information about settings in a workspace

API method documentation
<https://api.slack.com/methods/admin.teams.settings.info>

### Example Usage

```typescript
import { SlackSpec } from "slack-spec";
import { AdminTeamsSettingsInfoResponse } from "slack-spec/dist/sdk/models/operations";

const sdk = new SlackSpec();

sdk.admin.adminTeamsSettingsInfo({
  teamId: "dolore",
  token: "iusto",
}, {
  slackAuth: "Bearer YOUR_ACCESS_TOKEN_HERE",
}).then((res: AdminTeamsSettingsInfoResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

## adminTeamsSettingsSetDefaultChannels

Set the default channels of a workspace.

API method documentation
<https://api.slack.com/methods/admin.teams.settings.setDefaultChannels>

### Example Usage

```typescript
import { SlackSpec } from "slack-spec";
import { AdminTeamsSettingsSetDefaultChannelsResponse } from "slack-spec/dist/sdk/models/operations";

const sdk = new SlackSpec();

sdk.admin.adminTeamsSettingsSetDefaultChannels({
  channelIds: "dicta",
  teamId: "harum",
  token: "enim",
}, {
  slackAuth: "Bearer YOUR_ACCESS_TOKEN_HERE",
}).then((res: AdminTeamsSettingsSetDefaultChannelsResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

## adminTeamsSettingsSetDescription

Set the description of a given workspace.

API method documentation
<https://api.slack.com/methods/admin.teams.settings.setDescription>

### Example Usage

```typescript
import { SlackSpec } from "slack-spec";
import { AdminTeamsSettingsSetDescriptionResponse } from "slack-spec/dist/sdk/models/operations";

const sdk = new SlackSpec();

sdk.admin.adminTeamsSettingsSetDescription({
  requestBody: {
    description: "accusamus",
    teamId: "commodi",
  },
  token: "repudiandae",
}, {
  slackAuth: "Bearer YOUR_ACCESS_TOKEN_HERE",
}).then((res: AdminTeamsSettingsSetDescriptionResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

## adminTeamsSettingsSetDiscoverability

An API method that allows admins to set the discoverability of a given workspace

API method documentation
<https://api.slack.com/methods/admin.teams.settings.setDiscoverability>

### Example Usage

```typescript
import { SlackSpec } from "slack-spec";
import { AdminTeamsSettingsSetDiscoverabilityResponse } from "slack-spec/dist/sdk/models/operations";

const sdk = new SlackSpec();

sdk.admin.adminTeamsSettingsSetDiscoverability({
  requestBody: {
    discoverability: "quae",
    teamId: "ipsum",
  },
  token: "quidem",
}, {
  slackAuth: "Bearer YOUR_ACCESS_TOKEN_HERE",
}).then((res: AdminTeamsSettingsSetDiscoverabilityResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

## adminTeamsSettingsSetIcon

Sets the icon of a workspace.

API method documentation
<https://api.slack.com/methods/admin.teams.settings.setIcon>

### Example Usage

```typescript
import { SlackSpec } from "slack-spec";
import { AdminTeamsSettingsSetIconResponse } from "slack-spec/dist/sdk/models/operations";

const sdk = new SlackSpec();

sdk.admin.adminTeamsSettingsSetIcon({
  imageUrl: "molestias",
  teamId: "excepturi",
  token: "pariatur",
}, {
  slackAuth: "Bearer YOUR_ACCESS_TOKEN_HERE",
}).then((res: AdminTeamsSettingsSetIconResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

## adminTeamsSettingsSetName

Set the name of a given workspace.

API method documentation
<https://api.slack.com/methods/admin.teams.settings.setName>

### Example Usage

```typescript
import { SlackSpec } from "slack-spec";
import { AdminTeamsSettingsSetNameResponse } from "slack-spec/dist/sdk/models/operations";

const sdk = new SlackSpec();

sdk.admin.adminTeamsSettingsSetName({
  requestBody: {
    name: "Irma Ledner DVM",
    teamId: "sint",
  },
  token: "veritatis",
}, {
  slackAuth: "Bearer YOUR_ACCESS_TOKEN_HERE",
}).then((res: AdminTeamsSettingsSetNameResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

## adminUsergroupsAddChannels

Add one or more default channels to an IDP group.

API method documentation
<https://api.slack.com/methods/admin.usergroups.addChannels>

### Example Usage

```typescript
import { SlackSpec } from "slack-spec";
import { AdminUsergroupsAddChannelsResponse } from "slack-spec/dist/sdk/models/operations";

const sdk = new SlackSpec();

sdk.admin.adminUsergroupsAddChannels({
  requestBody: {
    channelIds: "itaque",
    teamId: "incidunt",
    usergroupId: "enim",
  },
  token: "consequatur",
}, {
  slackAuth: "Bearer YOUR_ACCESS_TOKEN_HERE",
}).then((res: AdminUsergroupsAddChannelsResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

## adminUsergroupsAddTeams

Associate one or more default workspaces with an organization-wide IDP group.

API method documentation
<https://api.slack.com/methods/admin.usergroups.addTeams>

### Example Usage

```typescript
import { SlackSpec } from "slack-spec";
import { AdminUsergroupsAddTeamsResponse } from "slack-spec/dist/sdk/models/operations";

const sdk = new SlackSpec();

sdk.admin.adminUsergroupsAddTeams({
  requestBody: {
    autoProvision: false,
    teamIds: "est",
    usergroupId: "quibusdam",
  },
  token: "explicabo",
}, {
  slackAuth: "Bearer YOUR_ACCESS_TOKEN_HERE",
}).then((res: AdminUsergroupsAddTeamsResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

## adminUsergroupsListChannels

List the channels linked to an org-level IDP group (user group).

API method documentation
<https://api.slack.com/methods/admin.usergroups.listChannels>

### Example Usage

```typescript
import { SlackSpec } from "slack-spec";
import { AdminUsergroupsListChannelsResponse } from "slack-spec/dist/sdk/models/operations";

const sdk = new SlackSpec();

sdk.admin.adminUsergroupsListChannels({
  includeNumMembers: false,
  teamId: "deserunt",
  token: "distinctio",
  usergroupId: "quibusdam",
}, {
  slackAuth: "Bearer YOUR_ACCESS_TOKEN_HERE",
}).then((res: AdminUsergroupsListChannelsResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

## adminUsergroupsRemoveChannels

Remove one or more default channels from an org-level IDP group (user group).

API method documentation
<https://api.slack.com/methods/admin.usergroups.removeChannels>

### Example Usage

```typescript
import { SlackSpec } from "slack-spec";
import { AdminUsergroupsRemoveChannelsResponse } from "slack-spec/dist/sdk/models/operations";

const sdk = new SlackSpec();

sdk.admin.adminUsergroupsRemoveChannels({
  requestBody: {
    channelIds: "labore",
    usergroupId: "modi",
  },
  token: "qui",
}, {
  slackAuth: "Bearer YOUR_ACCESS_TOKEN_HERE",
}).then((res: AdminUsergroupsRemoveChannelsResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

## adminUsersAssign

Add an Enterprise user to a workspace.

API method documentation
<https://api.slack.com/methods/admin.users.assign>

### Example Usage

```typescript
import { SlackSpec } from "slack-spec";
import { AdminUsersAssignResponse } from "slack-spec/dist/sdk/models/operations";

const sdk = new SlackSpec();

sdk.admin.adminUsersAssign({
  requestBody: {
    channelIds: "aliquid",
    isRestricted: false,
    isUltraRestricted: false,
    teamId: "cupiditate",
    userId: "quos",
  },
  token: "perferendis",
}, {
  slackAuth: "Bearer YOUR_ACCESS_TOKEN_HERE",
}).then((res: AdminUsersAssignResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

## adminUsersInvite

Invite a user to a workspace.

API method documentation
<https://api.slack.com/methods/admin.users.invite>

### Example Usage

```typescript
import { SlackSpec } from "slack-spec";
import { AdminUsersInviteResponse } from "slack-spec/dist/sdk/models/operations";

const sdk = new SlackSpec();

sdk.admin.adminUsersInvite({
  requestBody: {
    channelIds: "magni",
    customMessage: "assumenda",
    email: "Abigale_Corkery27@yahoo.com",
    guestExpirationTs: "facilis",
    isRestricted: false,
    isUltraRestricted: false,
    realName: "tempore",
    resend: false,
    teamId: "labore",
  },
  token: "delectus",
}, {
  slackAuth: "Bearer YOUR_ACCESS_TOKEN_HERE",
}).then((res: AdminUsersInviteResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

## adminUsersList

List users on a workspace

API method documentation
<https://api.slack.com/methods/admin.users.list>

### Example Usage

```typescript
import { SlackSpec } from "slack-spec";
import { AdminUsersListResponse } from "slack-spec/dist/sdk/models/operations";

const sdk = new SlackSpec();

sdk.admin.adminUsersList({
  cursor: "eum",
  limit: 248753,
  teamId: "eligendi",
  token: "sint",
}, {
  slackAuth: "Bearer YOUR_ACCESS_TOKEN_HERE",
}).then((res: AdminUsersListResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

## adminUsersRemove

Remove a user from a workspace.

API method documentation
<https://api.slack.com/methods/admin.users.remove>

### Example Usage

```typescript
import { SlackSpec } from "slack-spec";
import { AdminUsersRemoveResponse } from "slack-spec/dist/sdk/models/operations";

const sdk = new SlackSpec();

sdk.admin.adminUsersRemove({
  requestBody: {
    teamId: "aliquid",
    userId: "provident",
  },
  token: "necessitatibus",
}, {
  slackAuth: "Bearer YOUR_ACCESS_TOKEN_HERE",
}).then((res: AdminUsersRemoveResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

## adminUsersSessionInvalidate

Invalidate a single session for a user by session_id

API method documentation
<https://api.slack.com/methods/admin.users.session.invalidate>

### Example Usage

```typescript
import { SlackSpec } from "slack-spec";
import { AdminUsersSessionInvalidateResponse } from "slack-spec/dist/sdk/models/operations";

const sdk = new SlackSpec();

sdk.admin.adminUsersSessionInvalidate({
  requestBody: {
    sessionId: 572252,
    teamId: "officia",
  },
  token: "dolor",
}, {
  slackAuth: "Bearer YOUR_ACCESS_TOKEN_HERE",
}).then((res: AdminUsersSessionInvalidateResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

## adminUsersSessionReset

Wipes all valid sessions on all devices for a given user

API method documentation
<https://api.slack.com/methods/admin.users.session.reset>

### Example Usage

```typescript
import { SlackSpec } from "slack-spec";
import { AdminUsersSessionResetResponse } from "slack-spec/dist/sdk/models/operations";

const sdk = new SlackSpec();

sdk.admin.adminUsersSessionReset({
  requestBody: {
    mobileOnly: false,
    userId: "debitis",
    webOnly: false,
  },
  token: "a",
}, {
  slackAuth: "Bearer YOUR_ACCESS_TOKEN_HERE",
}).then((res: AdminUsersSessionResetResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

## adminUsersSetAdmin

Set an existing guest, regular user, or owner to be an admin user.

API method documentation
<https://api.slack.com/methods/admin.users.setAdmin>

### Example Usage

```typescript
import { SlackSpec } from "slack-spec";
import { AdminUsersSetAdminResponse } from "slack-spec/dist/sdk/models/operations";

const sdk = new SlackSpec();

sdk.admin.adminUsersSetAdmin({
  requestBody: {
    teamId: "dolorum",
    userId: "in",
  },
  token: "in",
}, {
  slackAuth: "Bearer YOUR_ACCESS_TOKEN_HERE",
}).then((res: AdminUsersSetAdminResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

## adminUsersSetExpiration

Set an expiration for a guest user

API method documentation
<https://api.slack.com/methods/admin.users.setExpiration>

### Example Usage

```typescript
import { SlackSpec } from "slack-spec";
import { AdminUsersSetExpirationResponse } from "slack-spec/dist/sdk/models/operations";

const sdk = new SlackSpec();

sdk.admin.adminUsersSetExpiration({
  requestBody: {
    expirationTs: 846409,
    teamId: "maiores",
    userId: "rerum",
  },
  token: "dicta",
}, {
  slackAuth: "Bearer YOUR_ACCESS_TOKEN_HERE",
}).then((res: AdminUsersSetExpirationResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

## adminUsersSetOwner

Set an existing guest, regular user, or admin user to be a workspace owner.

API method documentation
<https://api.slack.com/methods/admin.users.setOwner>

### Example Usage

```typescript
import { SlackSpec } from "slack-spec";
import { AdminUsersSetOwnerResponse } from "slack-spec/dist/sdk/models/operations";

const sdk = new SlackSpec();

sdk.admin.adminUsersSetOwner({
  requestBody: {
    teamId: "magnam",
    userId: "cumque",
  },
  token: "facere",
}, {
  slackAuth: "Bearer YOUR_ACCESS_TOKEN_HERE",
}).then((res: AdminUsersSetOwnerResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

## adminUsersSetRegular

Set an existing guest user, admin user, or owner to be a regular user.

API method documentation
<https://api.slack.com/methods/admin.users.setRegular>

### Example Usage

```typescript
import { SlackSpec } from "slack-spec";
import { AdminUsersSetRegularResponse } from "slack-spec/dist/sdk/models/operations";

const sdk = new SlackSpec();

sdk.admin.adminUsersSetRegular({
  requestBody: {
    teamId: "ea",
    userId: "aliquid",
  },
  token: "laborum",
}, {
  slackAuth: "Bearer YOUR_ACCESS_TOKEN_HERE",
}).then((res: AdminUsersSetRegularResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```
