# conversations

### Available Operations

* [conversationsArchive](#conversationsarchive) - Archives a conversation.
* [conversationsClose](#conversationsclose) - Closes a direct message or multi-person direct message.
* [conversationsCreate](#conversationscreate) - Initiates a public or private channel-based conversation
* [conversationsHistory](#conversationshistory) - Fetches a conversation's history of messages and events.
* [conversationsInfo](#conversationsinfo) - Retrieve information about a conversation.
* [conversationsInvite](#conversationsinvite) - Invites users to a channel.
* [conversationsJoin](#conversationsjoin) - Joins an existing conversation.
* [conversationsKick](#conversationskick) - Removes a user from a conversation.
* [conversationsLeave](#conversationsleave) - Leaves a conversation.
* [conversationsList](#conversationslist) - Lists all channels in a Slack team.
* [conversationsMark](#conversationsmark) - Sets the read cursor in a channel.
* [conversationsMembers](#conversationsmembers) - Retrieve members of a conversation.
* [conversationsOpen](#conversationsopen) - Opens or resumes a direct message or multi-person direct message.
* [conversationsRename](#conversationsrename) - Renames a conversation.
* [conversationsReplies](#conversationsreplies) - Retrieve a thread of messages posted to a conversation
* [conversationsSetPurpose](#conversationssetpurpose) - Sets the purpose for a conversation.
* [conversationsSetTopic](#conversationssettopic) - Sets the topic for a conversation.
* [conversationsUnarchive](#conversationsunarchive) - Reverses conversation archival.

## conversationsArchive

Archives a conversation.

API method documentation
<https://api.slack.com/methods/conversations.archive>

### Example Usage

```typescript
import { SlackSpec } from "slack-spec";
import { ConversationsArchiveResponse } from "slack-spec/dist/sdk/models/operations";

const sdk = new SlackSpec();

sdk.conversations.conversationsArchive({
  requestBody: {
    channel: "voluptate",
  },
  token: "ipsa",
}, {
  slackAuth: "Bearer YOUR_ACCESS_TOKEN_HERE",
}).then((res: ConversationsArchiveResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

## conversationsClose

Closes a direct message or multi-person direct message.

API method documentation
<https://api.slack.com/methods/conversations.close>

### Example Usage

```typescript
import { SlackSpec } from "slack-spec";
import { ConversationsCloseResponse } from "slack-spec/dist/sdk/models/operations";

const sdk = new SlackSpec();

sdk.conversations.conversationsClose({
  requestBody: {
    channel: "minima",
  },
  token: "veritatis",
}, {
  slackAuth: "Bearer YOUR_ACCESS_TOKEN_HERE",
}).then((res: ConversationsCloseResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

## conversationsCreate

Initiates a public or private channel-based conversation

API method documentation
<https://api.slack.com/methods/conversations.create>

### Example Usage

```typescript
import { SlackSpec } from "slack-spec";
import { ConversationsCreateResponse } from "slack-spec/dist/sdk/models/operations";

const sdk = new SlackSpec();

sdk.conversations.conversationsCreate({
  requestBody: {
    isPrivate: false,
    name: "Sherry Morar IV",
  },
  token: "aut",
}, {
  slackAuth: "Bearer YOUR_ACCESS_TOKEN_HERE",
}).then((res: ConversationsCreateResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

## conversationsHistory

Fetches a conversation's history of messages and events.

API method documentation
<https://api.slack.com/methods/conversations.history>

### Example Usage

```typescript
import { SlackSpec } from "slack-spec";
import { ConversationsHistoryResponse } from "slack-spec/dist/sdk/models/operations";

const sdk = new SlackSpec();

sdk.conversations.conversationsHistory({
  channel: "laudantium",
  cursor: "eum",
  inclusive: false,
  latest: 6498.32,
  limit: 68074,
  oldest: 5445.91,
  token: "non",
}, {
  slackAuth: "Bearer YOUR_ACCESS_TOKEN_HERE",
}).then((res: ConversationsHistoryResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

## conversationsInfo

Retrieve information about a conversation.

API method documentation
<https://api.slack.com/methods/conversations.info>

### Example Usage

```typescript
import { SlackSpec } from "slack-spec";
import { ConversationsInfoResponse } from "slack-spec/dist/sdk/models/operations";

const sdk = new SlackSpec();

sdk.conversations.conversationsInfo({
  channel: "voluptatem",
  includeLocale: false,
  includeNumMembers: false,
  token: "dolor",
}, {
  slackAuth: "Bearer YOUR_ACCESS_TOKEN_HERE",
}).then((res: ConversationsInfoResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

## conversationsInvite

Invites users to a channel.

API method documentation
<https://api.slack.com/methods/conversations.invite>

### Example Usage

```typescript
import { SlackSpec } from "slack-spec";
import { ConversationsInviteResponse } from "slack-spec/dist/sdk/models/operations";

const sdk = new SlackSpec();

sdk.conversations.conversationsInvite({
  requestBody: {
    channel: "occaecati",
    users: "numquam",
  },
  token: "impedit",
}, {
  slackAuth: "Bearer YOUR_ACCESS_TOKEN_HERE",
}).then((res: ConversationsInviteResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

## conversationsJoin

Joins an existing conversation.

API method documentation
<https://api.slack.com/methods/conversations.join>

### Example Usage

```typescript
import { SlackSpec } from "slack-spec";
import { ConversationsJoinResponse } from "slack-spec/dist/sdk/models/operations";

const sdk = new SlackSpec();

sdk.conversations.conversationsJoin({
  requestBody: {
    channel: "explicabo",
  },
  token: "voluptas",
}, {
  slackAuth: "Bearer YOUR_ACCESS_TOKEN_HERE",
}).then((res: ConversationsJoinResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

## conversationsKick

Removes a user from a conversation.

API method documentation
<https://api.slack.com/methods/conversations.kick>

### Example Usage

```typescript
import { SlackSpec } from "slack-spec";
import { ConversationsKickResponse } from "slack-spec/dist/sdk/models/operations";

const sdk = new SlackSpec();

sdk.conversations.conversationsKick({
  requestBody: {
    channel: "aut",
    user: "dignissimos",
  },
  token: "dicta",
}, {
  slackAuth: "Bearer YOUR_ACCESS_TOKEN_HERE",
}).then((res: ConversationsKickResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

## conversationsLeave

Leaves a conversation.

API method documentation
<https://api.slack.com/methods/conversations.leave>

### Example Usage

```typescript
import { SlackSpec } from "slack-spec";
import { ConversationsLeaveResponse } from "slack-spec/dist/sdk/models/operations";

const sdk = new SlackSpec();

sdk.conversations.conversationsLeave({
  requestBody: {
    channel: "maiores",
  },
  token: "natus",
}, {
  slackAuth: "Bearer YOUR_ACCESS_TOKEN_HERE",
}).then((res: ConversationsLeaveResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

## conversationsList

Lists all channels in a Slack team.

API method documentation
<https://api.slack.com/methods/conversations.list>

### Example Usage

```typescript
import { SlackSpec } from "slack-spec";
import { ConversationsListResponse } from "slack-spec/dist/sdk/models/operations";

const sdk = new SlackSpec();

sdk.conversations.conversationsList({
  cursor: "velit",
  excludeArchived: false,
  limit: 974257,
  token: "voluptas",
  types: "asperiores",
}, {
  slackAuth: "Bearer YOUR_ACCESS_TOKEN_HERE",
}).then((res: ConversationsListResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

## conversationsMark

Sets the read cursor in a channel.

API method documentation
<https://api.slack.com/methods/conversations.mark>

### Example Usage

```typescript
import { SlackSpec } from "slack-spec";
import { ConversationsMarkResponse } from "slack-spec/dist/sdk/models/operations";

const sdk = new SlackSpec();

sdk.conversations.conversationsMark({
  requestBody: {
    channel: "aperiam",
    ts: 4090.54,
  },
  token: "quaerat",
}, {
  slackAuth: "Bearer YOUR_ACCESS_TOKEN_HERE",
}).then((res: ConversationsMarkResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

## conversationsMembers

Retrieve members of a conversation.

API method documentation
<https://api.slack.com/methods/conversations.members>

### Example Usage

```typescript
import { SlackSpec } from "slack-spec";
import { ConversationsMembersResponse } from "slack-spec/dist/sdk/models/operations";

const sdk = new SlackSpec();

sdk.conversations.conversationsMembers({
  channel: "consequuntur",
  cursor: "repellendus",
  limit: 638762,
  token: "maxime",
}, {
  slackAuth: "Bearer YOUR_ACCESS_TOKEN_HERE",
}).then((res: ConversationsMembersResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

## conversationsOpen

Opens or resumes a direct message or multi-person direct message.

API method documentation
<https://api.slack.com/methods/conversations.open>

### Example Usage

```typescript
import { SlackSpec } from "slack-spec";
import { ConversationsOpenResponse } from "slack-spec/dist/sdk/models/operations";

const sdk = new SlackSpec();

sdk.conversations.conversationsOpen({
  requestBody: {
    channel: "dignissimos",
    returnIm: false,
    users: "officia",
  },
  token: "asperiores",
}, {
  slackAuth: "Bearer YOUR_ACCESS_TOKEN_HERE",
}).then((res: ConversationsOpenResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

## conversationsRename

Renames a conversation.

API method documentation
<https://api.slack.com/methods/conversations.rename>

### Example Usage

```typescript
import { SlackSpec } from "slack-spec";
import { ConversationsRenameResponse } from "slack-spec/dist/sdk/models/operations";

const sdk = new SlackSpec();

sdk.conversations.conversationsRename({
  requestBody: {
    channel: "nemo",
    name: "Darlene Sawayn",
  },
  token: "ab",
}, {
  slackAuth: "Bearer YOUR_ACCESS_TOKEN_HERE",
}).then((res: ConversationsRenameResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

## conversationsReplies

Retrieve a thread of messages posted to a conversation

API method documentation
<https://api.slack.com/methods/conversations.replies>

### Example Usage

```typescript
import { SlackSpec } from "slack-spec";
import { ConversationsRepliesResponse } from "slack-spec/dist/sdk/models/operations";

const sdk = new SlackSpec();

sdk.conversations.conversationsReplies({
  channel: "adipisci",
  cursor: "fuga",
  inclusive: false,
  latest: 6625.05,
  limit: 380729,
  oldest: 2460.63,
  token: "culpa",
  ts: 6658.59,
}, {
  slackAuth: "Bearer YOUR_ACCESS_TOKEN_HERE",
}).then((res: ConversationsRepliesResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

## conversationsSetPurpose

Sets the purpose for a conversation.

API method documentation
<https://api.slack.com/methods/conversations.setPurpose>

### Example Usage

```typescript
import { SlackSpec } from "slack-spec";
import { ConversationsSetPurposeResponse } from "slack-spec/dist/sdk/models/operations";

const sdk = new SlackSpec();

sdk.conversations.conversationsSetPurpose({
  requestBody: {
    channel: "recusandae",
    purpose: "totam",
  },
  token: "fugiat",
}, {
  slackAuth: "Bearer YOUR_ACCESS_TOKEN_HERE",
}).then((res: ConversationsSetPurposeResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

## conversationsSetTopic

Sets the topic for a conversation.

API method documentation
<https://api.slack.com/methods/conversations.setTopic>

### Example Usage

```typescript
import { SlackSpec } from "slack-spec";
import { ConversationsSetTopicResponse } from "slack-spec/dist/sdk/models/operations";

const sdk = new SlackSpec();

sdk.conversations.conversationsSetTopic({
  requestBody: {
    channel: "vel",
    topic: "ducimus",
  },
  token: "quos",
}, {
  slackAuth: "Bearer YOUR_ACCESS_TOKEN_HERE",
}).then((res: ConversationsSetTopicResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

## conversationsUnarchive

Reverses conversation archival.

API method documentation
<https://api.slack.com/methods/conversations.unarchive>

### Example Usage

```typescript
import { SlackSpec } from "slack-spec";
import { ConversationsUnarchiveResponse } from "slack-spec/dist/sdk/models/operations";

const sdk = new SlackSpec();

sdk.conversations.conversationsUnarchive({
  requestBody: {
    channel: "vel",
  },
  token: "labore",
}, {
  slackAuth: "Bearer YOUR_ACCESS_TOKEN_HERE",
}).then((res: ConversationsUnarchiveResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```
