# oauth

### Available Operations

* [oauthAccess](#oauthaccess) - Exchanges a temporary OAuth verifier code for an access token.
* [oauthToken](#oauthtoken) - Exchanges a temporary OAuth verifier code for a workspace token.
* [oauthV2Access](#oauthv2access) - Exchanges a temporary OAuth verifier code for an access token.

## oauthAccess

Exchanges a temporary OAuth verifier code for an access token.

API method documentation
<https://api.slack.com/methods/oauth.access>

### Example Usage

```typescript
import { SlackSpec } from "slack-spec";
import { OauthAccessResponse } from "slack-spec/dist/sdk/models/operations";

const sdk = new SlackSpec();

sdk.oauth.oauthAccess({
  clientId: "magnam",
  clientSecret: "consequatur",
  code: "esse",
  redirectUri: "ipsam",
  singleChannel: false,
}, {
  slackAuth: "Bearer YOUR_ACCESS_TOKEN_HERE",
}).then((res: OauthAccessResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

## oauthToken

Exchanges a temporary OAuth verifier code for a workspace token.

API method documentation
<https://api.slack.com/methods/oauth.token>

### Example Usage

```typescript
import { SlackSpec } from "slack-spec";
import { OauthTokenResponse } from "slack-spec/dist/sdk/models/operations";

const sdk = new SlackSpec();

sdk.oauth.oauthToken({
  clientId: "sit",
  clientSecret: "voluptatum",
  code: "quas",
  redirectUri: "repudiandae",
  singleChannel: false,
}, {
  slackAuth: "Bearer YOUR_ACCESS_TOKEN_HERE",
}).then((res: OauthTokenResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

## oauthV2Access

Exchanges a temporary OAuth verifier code for an access token.

API method documentation
<https://api.slack.com/methods/oauth.v2.access>

### Example Usage

```typescript
import { SlackSpec } from "slack-spec";
import { OauthV2AccessResponse } from "slack-spec/dist/sdk/models/operations";

const sdk = new SlackSpec();

sdk.oauth.oauthV2Access({
  clientId: "corporis",
  clientSecret: "et",
  code: "blanditiis",
  redirectUri: "ex",
}, {
  slackAuth: "Bearer YOUR_ACCESS_TOKEN_HERE",
}).then((res: OauthV2AccessResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```
