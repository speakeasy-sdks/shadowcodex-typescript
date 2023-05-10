# auth

### Available Operations

* [authRevoke](#authrevoke) - Revokes a token.
* [authTest](#authtest) - Checks authentication & identity.

## authRevoke

Revokes a token.

API method documentation
<https://api.slack.com/methods/auth.revoke>

### Example Usage

```typescript
import { SlackSpec } from "slack-spec";
import { AuthRevokeResponse } from "slack-spec/dist/sdk/models/operations";

const sdk = new SlackSpec();

sdk.auth.authRevoke({
  test: false,
  token: "facilis",
}, {
  slackAuth: "Bearer YOUR_ACCESS_TOKEN_HERE",
}).then((res: AuthRevokeResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

## authTest

Checks authentication & identity.

API method documentation
<https://api.slack.com/methods/auth.test>

### Example Usage

```typescript
import { SlackSpec } from "slack-spec";
import { AuthTestResponse } from "slack-spec/dist/sdk/models/operations";

const sdk = new SlackSpec();

sdk.auth.authTest({
  token: "aliquid",
}, {
  slackAuth: "Bearer YOUR_ACCESS_TOKEN_HERE",
}).then((res: AuthTestResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```
