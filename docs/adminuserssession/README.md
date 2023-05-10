# adminUsersSession

### Available Operations

* [adminUsersSessionInvalidate](#adminuserssessioninvalidate) - Invalidate a single session for a user by session_id
* [adminUsersSessionReset](#adminuserssessionreset) - Wipes all valid sessions on all devices for a given user

## adminUsersSessionInvalidate

Invalidate a single session for a user by session_id

API method documentation
<https://api.slack.com/methods/admin.users.session.invalidate>

### Example Usage

```typescript
import { SlackSpec } from "slack-spec";
import { AdminUsersSessionInvalidateResponse } from "slack-spec/dist/sdk/models/operations";

const sdk = new SlackSpec();

sdk.adminUsersSession.adminUsersSessionInvalidate({
  requestBody: {
    sessionId: 788740,
    teamId: "tenetur",
  },
  token: "amet",
}, {
  slackAuth: "Bearer YOUR_ACCESS_TOKEN_HERE",
}).then((res: AdminUsersSessionInvalidateResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

## adminUsersSessionReset

Wipes all valid sessions on all devices for a given user

API method documentation
<https://api.slack.com/methods/admin.users.session.reset>

### Example Usage

```typescript
import { SlackSpec } from "slack-spec";
import { AdminUsersSessionResetResponse } from "slack-spec/dist/sdk/models/operations";

const sdk = new SlackSpec();

sdk.adminUsersSession.adminUsersSessionReset({
  requestBody: {
    mobileOnly: false,
    userId: "tempore",
    webOnly: false,
  },
  token: "accusamus",
}, {
  slackAuth: "Bearer YOUR_ACCESS_TOKEN_HERE",
}).then((res: AdminUsersSessionResetResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```
