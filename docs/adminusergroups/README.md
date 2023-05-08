# adminUsergroups

### Available Operations

* [adminUsergroupsAddChannels](#adminusergroupsaddchannels) - Add one or more default channels to an IDP group.
* [adminUsergroupsAddTeams](#adminusergroupsaddteams) - Associate one or more default workspaces with an organization-wide IDP group.
* [adminUsergroupsListChannels](#adminusergroupslistchannels) - List the channels linked to an org-level IDP group (user group).
* [adminUsergroupsRemoveChannels](#adminusergroupsremovechannels) - Remove one or more default channels from an org-level IDP group (user group).

## adminUsergroupsAddChannels

Add one or more default channels to an IDP group.

API method documentation
<https://api.slack.com/methods/admin.usergroups.addChannels>

### Example Usage

```typescript
import { SlackSpec } from "slack-spec";
import { AdminUsergroupsAddChannelsResponse } from "slack-spec/dist/sdk/models/operations";

const sdk = new SlackSpec();

sdk.adminUsergroups.adminUsergroupsAddChannels({
  requestBody: {
    channelIds: "atque",
    teamId: "sit",
    usergroupId: "fugiat",
  },
  token: "ab",
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

sdk.adminUsergroups.adminUsergroupsAddTeams({
  requestBody: {
    autoProvision: false,
    teamIds: "soluta",
    usergroupId: "dolorum",
  },
  token: "iusto",
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

sdk.adminUsergroups.adminUsergroupsListChannels({
  includeNumMembers: false,
  teamId: "voluptate",
  token: "dolorum",
  usergroupId: "deleniti",
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

sdk.adminUsergroups.adminUsergroupsRemoveChannels({
  requestBody: {
    channelIds: "omnis",
    usergroupId: "necessitatibus",
  },
  token: "distinctio",
}, {
  slackAuth: "Bearer YOUR_ACCESS_TOKEN_HERE",
}).then((res: AdminUsergroupsRemoveChannelsResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```
