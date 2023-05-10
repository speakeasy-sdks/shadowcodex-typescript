# chat

### Available Operations

* [chatDelete](#chatdelete) - Deletes a message.
* [chatDeleteScheduledMessage](#chatdeletescheduledmessage) - Deletes a pending scheduled message from the queue.
* [chatGetPermalink](#chatgetpermalink) - Retrieve a permalink URL for a specific extant message
* [chatMeMessage](#chatmemessage) - Share a me message into a channel.
* [chatPostEphemeral](#chatpostephemeral) - Sends an ephemeral message to a user in a channel.
* [chatPostMessage](#chatpostmessage) - Sends a message to a channel.
* [chatScheduleMessage](#chatschedulemessage) - Schedules a message to be sent to a channel.
* [chatScheduledMessagesList](#chatscheduledmessageslist) - Returns a list of scheduled messages.
* [chatUnfurl](#chatunfurl) - Provide custom unfurl behavior for user-posted URLs
* [chatUpdate](#chatupdate) - Updates a message.

## chatDelete

Deletes a message.

API method documentation
<https://api.slack.com/methods/chat.delete>

### Example Usage

```typescript
import { SlackSpec } from "slack-spec";
import { ChatDeleteResponse } from "slack-spec/dist/sdk/models/operations";

const sdk = new SlackSpec();

sdk.chat.chatDelete({
  requestBody: {
    asUser: false,
    channel: "aliquid",
    ts: 934.59,
  },
  token: "saepe",
}, {
  slackAuth: "Bearer YOUR_ACCESS_TOKEN_HERE",
}).then((res: ChatDeleteResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

## chatDeleteScheduledMessage

Deletes a pending scheduled message from the queue.

API method documentation
<https://api.slack.com/methods/chat.deleteScheduledMessage>

### Example Usage

```typescript
import { SlackSpec } from "slack-spec";
import { ChatDeleteScheduledMessageResponse } from "slack-spec/dist/sdk/models/operations";

const sdk = new SlackSpec();

sdk.chat.chatDeleteScheduledMessage({
  requestBody: {
    asUser: false,
    channel: "vel",
    scheduledMessageId: "harum",
  },
  token: "molestiae",
}, {
  slackAuth: "Bearer YOUR_ACCESS_TOKEN_HERE",
}).then((res: ChatDeleteScheduledMessageResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

## chatGetPermalink

Retrieve a permalink URL for a specific extant message

API method documentation
<https://api.slack.com/methods/chat.getPermalink>

### Example Usage

```typescript
import { SlackSpec } from "slack-spec";
import { ChatGetPermalinkResponse } from "slack-spec/dist/sdk/models/operations";

const sdk = new SlackSpec();

sdk.chat.chatGetPermalink({
  channel: "rerum",
  messageTs: "occaecati",
  token: "minima",
}, {
  slackAuth: "Bearer YOUR_ACCESS_TOKEN_HERE",
}).then((res: ChatGetPermalinkResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

## chatMeMessage

Share a me message into a channel.

API method documentation
<https://api.slack.com/methods/chat.meMessage>

### Example Usage

```typescript
import { SlackSpec } from "slack-spec";
import { ChatMeMessageResponse } from "slack-spec/dist/sdk/models/operations";

const sdk = new SlackSpec();

sdk.chat.chatMeMessage({
  requestBody: {
    channel: "distinctio",
    text: "eligendi",
  },
  token: "sit",
}, {
  slackAuth: "Bearer YOUR_ACCESS_TOKEN_HERE",
}).then((res: ChatMeMessageResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

## chatPostEphemeral

Sends an ephemeral message to a user in a channel.

API method documentation
<https://api.slack.com/methods/chat.postEphemeral>

### Example Usage

```typescript
import { SlackSpec } from "slack-spec";
import { ChatPostEphemeralResponse } from "slack-spec/dist/sdk/models/operations";

const sdk = new SlackSpec();

sdk.chat.chatPostEphemeral({
  requestBody: {
    asUser: false,
    attachments: "culpa",
    blocks: "tempore",
    channel: "adipisci",
    iconEmoji: "cumque",
    iconUrl: "consequuntur",
    linkNames: false,
    parse: "consequatur",
    text: "minus",
    threadTs: "quaerat",
    user: "sapiente",
    username: "Darlene_Koch",
  },
  token: "a",
}, {
  slackAuth: "Bearer YOUR_ACCESS_TOKEN_HERE",
}).then((res: ChatPostEphemeralResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

## chatPostMessage

Sends a message to a channel.

API method documentation
<https://api.slack.com/methods/chat.postMessage>

### Example Usage

```typescript
import { SlackSpec } from "slack-spec";
import { ChatPostMessageResponse } from "slack-spec/dist/sdk/models/operations";

const sdk = new SlackSpec();

sdk.chat.chatPostMessage({
  requestBody: {
    asUser: "nulla",
    attachments: "quas",
    blocks: "esse",
    channel: "quasi",
    iconEmoji: "a",
    iconUrl: "error",
    linkNames: false,
    mrkdwn: false,
    parse: "sint",
    replyBroadcast: false,
    text: "pariatur",
    threadTs: "possimus",
    unfurlLinks: false,
    unfurlMedia: false,
    username: "Carlotta_Upton8",
  },
  token: "consequuntur",
}, {
  slackAuth: "Bearer YOUR_ACCESS_TOKEN_HERE",
}).then((res: ChatPostMessageResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

## chatScheduleMessage

Schedules a message to be sent to a channel.

API method documentation
<https://api.slack.com/methods/chat.scheduleMessage>

### Example Usage

```typescript
import { SlackSpec } from "slack-spec";
import { ChatScheduleMessageResponse } from "slack-spec/dist/sdk/models/operations";

const sdk = new SlackSpec();

sdk.chat.chatScheduleMessage({
  requestBody: {
    asUser: false,
    attachments: "quasi",
    blocks: "similique",
    channel: "culpa",
    linkNames: false,
    parse: "aliquid",
    postAt: "tenetur",
    replyBroadcast: false,
    text: "quae",
    threadTs: 9367.47,
    unfurlLinks: false,
    unfurlMedia: false,
  },
  token: "vel",
}, {
  slackAuth: "Bearer YOUR_ACCESS_TOKEN_HERE",
}).then((res: ChatScheduleMessageResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

## chatScheduledMessagesList

Returns a list of scheduled messages.

API method documentation
<https://api.slack.com/methods/chat.scheduledMessages.list>

### Example Usage

```typescript
import { SlackSpec } from "slack-spec";
import { ChatScheduledMessagesListResponse } from "slack-spec/dist/sdk/models/operations";

const sdk = new SlackSpec();

sdk.chat.chatScheduledMessagesList({
  channel: "in",
  cursor: "eius",
  latest: 7276.97,
  limit: 849039,
  oldest: 7422.38,
  token: "accusantium",
}, {
  slackAuth: "Bearer YOUR_ACCESS_TOKEN_HERE",
}).then((res: ChatScheduledMessagesListResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

## chatUnfurl

Provide custom unfurl behavior for user-posted URLs

API method documentation
<https://api.slack.com/methods/chat.unfurl>

### Example Usage

```typescript
import { SlackSpec } from "slack-spec";
import { ChatUnfurlResponse } from "slack-spec/dist/sdk/models/operations";

const sdk = new SlackSpec();

sdk.chat.chatUnfurl({
  requestBody: {
    channel: "aliquam",
    ts: "sapiente",
    unfurls: "dicta",
    userAuthMessage: "ullam",
    userAuthRequired: false,
    userAuthUrl: "reprehenderit",
  },
  token: "ullam",
}, {
  slackAuth: "Bearer YOUR_ACCESS_TOKEN_HERE",
}).then((res: ChatUnfurlResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

## chatUpdate

Updates a message.

API method documentation
<https://api.slack.com/methods/chat.update>

### Example Usage

```typescript
import { SlackSpec } from "slack-spec";
import { ChatUpdateResponse } from "slack-spec/dist/sdk/models/operations";

const sdk = new SlackSpec();

sdk.chat.chatUpdate({
  requestBody: {
    asUser: "nisi",
    attachments: "aut",
    blocks: "voluptatum",
    channel: "qui",
    linkNames: "quibusdam",
    parse: "ex",
    text: "deleniti",
    ts: "itaque",
  },
  token: "dolorum",
}, {
  slackAuth: "Bearer YOUR_ACCESS_TOKEN_HERE",
}).then((res: ChatUpdateResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```
