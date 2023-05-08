# adminConversations

### Available Operations

* [adminConversationsArchive](#adminconversationsarchive) - Archive a public or private channel.
* [adminConversationsConvertToPrivate](#adminconversationsconverttoprivate) - Convert a public channel to a private channel.
* [adminConversationsCreate](#adminconversationscreate) - Create a public or private channel-based conversation.
* [adminConversationsDelete](#adminconversationsdelete) - Delete a public or private channel.
* [adminConversationsDisconnectShared](#adminconversationsdisconnectshared) - Disconnect a connected channel from one or more workspaces.
* [adminConversationsGetConversationPrefs](#adminconversationsgetconversationprefs) - Get conversation preferences for a public or private channel.
* [adminConversationsGetTeams](#adminconversationsgetteams) - Get all the workspaces a given public or private channel is connected to within this Enterprise org.
* [adminConversationsInvite](#adminconversationsinvite) - Invite a user to a public or private channel.
* [adminConversationsRename](#adminconversationsrename) - Rename a public or private channel.
* [adminConversationsSearch](#adminconversationssearch) - Search for public or private channels in an Enterprise organization.
* [adminConversationsSetConversationPrefs](#adminconversationssetconversationprefs) - Set the posting permissions for a public or private channel.
* [adminConversationsSetTeams](#adminconversationssetteams) - Set the workspaces in an Enterprise grid org that connect to a public or private channel.
* [adminConversationsUnarchive](#adminconversationsunarchive) - Unarchive a public or private channel.

## adminConversationsArchive

Archive a public or private channel.

API method documentation
<https://api.slack.com/methods/admin.conversations.archive>

### Example Usage

```typescript
import { SlackSpec } from "slack-spec";
import { AdminConversationsArchiveResponse } from "slack-spec/dist/sdk/models/operations";

const sdk = new SlackSpec();

sdk.adminConversations.adminConversationsArchive({
  requestBody: {
    channelId: "magnam",
  },
  token: "distinctio",
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

sdk.adminConversations.adminConversationsConvertToPrivate({
  requestBody: {
    channelId: "id",
  },
  token: "labore",
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

sdk.adminConversations.adminConversationsCreate({
  requestBody: {
    description: "labore",
    isPrivate: false,
    name: "Ada Rohan",
    orgWide: false,
    teamId: "aspernatur",
  },
  token: "architecto",
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

sdk.adminConversations.adminConversationsDelete({
  requestBody: {
    channelId: "magnam",
  },
  token: "et",
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

sdk.adminConversations.adminConversationsDisconnectShared({
  requestBody: {
    channelId: "excepturi",
    leavingTeamIds: "ullam",
  },
  token: "provident",
}, {
  slackAuth: "Bearer YOUR_ACCESS_TOKEN_HERE",
}).then((res: AdminConversationsDisconnectSharedResponse) => {
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

sdk.adminConversations.adminConversationsGetConversationPrefs({
  channelId: "quos",
  token: "sint",
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

sdk.adminConversations.adminConversationsGetTeams({
  channelId: "accusantium",
  cursor: "mollitia",
  limit: 968962,
  token: "mollitia",
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

sdk.adminConversations.adminConversationsInvite({
  requestBody: {
    channelId: "ad",
    userIds: "eum",
  },
  token: "dolor",
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

sdk.adminConversations.adminConversationsRename({
  requestBody: {
    channelId: "necessitatibus",
    name: "Vivian Boyle",
  },
  token: "debitis",
}, {
  slackAuth: "Bearer YOUR_ACCESS_TOKEN_HERE",
}).then((res: AdminConversationsRenameResponse) => {
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

sdk.adminConversations.adminConversationsSearch({
  cursor: "eius",
  limit: 806194,
  query: "deleniti",
  searchChannelTypes: "facilis",
  sort: "in",
  sortDir: "architecto",
  teamIds: "architecto",
  token: "repudiandae",
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

sdk.adminConversations.adminConversationsSetConversationPrefs({
  requestBody: {
    channelId: "ullam",
    prefs: "expedita",
  },
  token: "nihil",
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

sdk.adminConversations.adminConversationsSetTeams({
  requestBody: {
    channelId: "repellat",
    orgChannel: false,
    targetTeamIds: "quibusdam",
    teamId: "sed",
  },
  token: "saepe",
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

sdk.adminConversations.adminConversationsUnarchive({
  requestBody: {
    channelId: "pariatur",
  },
  token: "accusantium",
}, {
  slackAuth: "Bearer YOUR_ACCESS_TOKEN_HERE",
}).then((res: AdminConversationsUnarchiveResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```
