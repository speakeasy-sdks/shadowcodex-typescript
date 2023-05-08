# adminInviteRequestsDenied

### Available Operations

* [adminInviteRequestsDeniedList](#admininviterequestsdeniedlist) - List all denied workspace invite requests.

## adminInviteRequestsDeniedList

List all denied workspace invite requests.

API method documentation
<https://api.slack.com/methods/admin.inviteRequests.denied.list>

### Example Usage

```typescript
import { SlackSpec } from "slack-spec";
import { AdminInviteRequestsDeniedListResponse } from "slack-spec/dist/sdk/models/operations";

const sdk = new SlackSpec();

sdk.adminInviteRequestsDenied.adminInviteRequestsDeniedList({
  cursor: "adipisci",
  limit: 992397,
  teamId: "earum",
  token: "modi",
}, {
  slackAuth: "Bearer YOUR_ACCESS_TOKEN_HERE",
}).then((res: AdminInviteRequestsDeniedListResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```
