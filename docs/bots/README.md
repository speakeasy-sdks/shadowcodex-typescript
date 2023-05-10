# bots

### Available Operations

* [botsInfo](#botsinfo) - Gets information about a bot user.

## botsInfo

Gets information about a bot user.

API method documentation
<https://api.slack.com/methods/bots.info>

### Example Usage

```typescript
import { SlackSpec } from "slack-spec";
import { BotsInfoResponse } from "slack-spec/dist/sdk/models/operations";

const sdk = new SlackSpec();

sdk.bots.botsInfo({
  bot: "quam",
  token: "molestias",
}, {
  slackAuth: "Bearer YOUR_ACCESS_TOKEN_HERE",
}).then((res: BotsInfoResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```
