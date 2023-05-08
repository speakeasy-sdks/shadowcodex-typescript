# chatScheduledMessages

### Available Operations

* [chatScheduledMessagesList](#chatscheduledmessageslist) - Returns a list of scheduled messages.

## chatScheduledMessagesList

Returns a list of scheduled messages.

API method documentation
<https://api.slack.com/methods/chat.scheduledMessages.list>

### Example Usage

```typescript
import { SlackSpec } from "slack-spec";
import { ChatScheduledMessagesListResponse } from "slack-spec/dist/sdk/models/operations";

const sdk = new SlackSpec();

sdk.chatScheduledMessages.chatScheduledMessagesList({
  channel: "architecto",
  cursor: "omnis",
  latest: 9453.02,
  limit: 98478,
  oldest: 8694.89,
  token: "et",
}, {
  slackAuth: "Bearer YOUR_ACCESS_TOKEN_HERE",
}).then((res: ChatScheduledMessagesListResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```
