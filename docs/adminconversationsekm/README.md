# adminConversationsEkm

### Available Operations

* [adminConversationsEkmListOriginalConnectedChannelInfo](#adminconversationsekmlistoriginalconnectedchannelinfo) - List all disconnected channels—i.e., channels that were once connected to other workspaces and then disconnected—and the corresponding original channel IDs for key revocation with EKM.

## adminConversationsEkmListOriginalConnectedChannelInfo

List all disconnected channels—i.e., channels that were once connected to other workspaces and then disconnected—and the corresponding original channel IDs for key revocation with EKM.

API method documentation
<https://api.slack.com/methods/admin.conversations.ekm.listOriginalConnectedChannelInfo>

### Example Usage

```typescript
import { SlackSpec } from "slack-spec";
import { AdminConversationsEkmListOriginalConnectedChannelInfoResponse } from "slack-spec/dist/sdk/models/operations";

const sdk = new SlackSpec();

sdk.adminConversationsEkm.adminConversationsEkmListOriginalConnectedChannelInfo({
  channelIds: "consequuntur",
  cursor: "praesentium",
  limit: 615560,
  teamIds: "magni",
  token: "sunt",
}, {
  slackAuth: "Bearer YOUR_ACCESS_TOKEN_HERE",
}).then((res: AdminConversationsEkmListOriginalConnectedChannelInfoResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```
