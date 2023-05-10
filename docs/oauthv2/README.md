# oauthV2

### Available Operations

* [oauthV2Access](#oauthv2access) - Exchanges a temporary OAuth verifier code for an access token.

## oauthV2Access

Exchanges a temporary OAuth verifier code for an access token.

API method documentation
<https://api.slack.com/methods/oauth.v2.access>

### Example Usage

```typescript
import { SlackSpec } from "slack-spec";
import { OauthV2AccessResponse } from "slack-spec/dist/sdk/models/operations";

const sdk = new SlackSpec();

sdk.oauthV2.oauthV2Access({
  clientId: "sed",
  clientSecret: "sit",
  code: "vel",
  redirectUri: "nostrum",
}, {
  slackAuth: "Bearer YOUR_ACCESS_TOKEN_HERE",
}).then((res: OauthV2AccessResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```
