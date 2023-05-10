# adminConversationsRestrictAccess

### Available Operations

* [adminConversationsRestrictAccessAddGroup](#adminconversationsrestrictaccessaddgroup) - Add an allowlist of IDP groups for accessing a channel
* [adminConversationsRestrictAccessListGroups](#adminconversationsrestrictaccesslistgroups) - List all IDP Groups linked to a channel
* [adminConversationsRestrictAccessRemoveGroup](#adminconversationsrestrictaccessremovegroup) - Remove a linked IDP group linked from a private channel

## adminConversationsRestrictAccessAddGroup

Add an allowlist of IDP groups for accessing a channel

API method documentation
<https://api.slack.com/methods/admin.conversations.restrictAccess.addGroup>

### Example Usage

```typescript
import { SlackSpec } from "slack-spec";
import { AdminConversationsRestrictAccessAddGroupResponse } from "slack-spec/dist/sdk/models/operations";

const sdk = new SlackSpec();

sdk.adminConversationsRestrictAccess.adminConversationsRestrictAccessAddGroup({
  channelId: "quo",
  groupId: "illum",
  teamId: "pariatur",
  token: "maxime",
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

sdk.adminConversationsRestrictAccess.adminConversationsRestrictAccessListGroups({
  channelId: "ea",
  teamId: "excepturi",
  token: "odit",
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

sdk.adminConversationsRestrictAccess.adminConversationsRestrictAccessRemoveGroup({
  channelId: "ea",
  groupId: "accusantium",
  teamId: "ab",
  token: "maiores",
}, {
  slackAuth: "Bearer YOUR_ACCESS_TOKEN_HERE",
}).then((res: AdminConversationsRestrictAccessRemoveGroupResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```
