# rtm

### Available Operations

* [rtmConnect](#rtmconnect) - Starts a Real Time Messaging session.

## rtmConnect

Starts a Real Time Messaging session.

API method documentation
<https://api.slack.com/methods/rtm.connect>

### Example Usage

```typescript
import { SlackSpec } from "slack-spec";
import { RtmConnectResponse } from "slack-spec/dist/sdk/models/operations";

const sdk = new SlackSpec();

sdk.rtm.rtmConnect({
  batchPresenceAware: false,
  presenceSub: false,
  token: "esse",
}, {
  slackAuth: "Bearer YOUR_ACCESS_TOKEN_HERE",
}).then((res: RtmConnectResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```
