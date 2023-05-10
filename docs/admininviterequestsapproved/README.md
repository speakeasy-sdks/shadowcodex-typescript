# adminInviteRequestsApproved

### Available Operations

* [adminInviteRequestsApprovedList](#admininviterequestsapprovedlist) - List all approved workspace invite requests.

## adminInviteRequestsApprovedList

List all approved workspace invite requests.

API method documentation
<https://api.slack.com/methods/admin.inviteRequests.approved.list>

### Example Usage

```typescript
import { SlackSpec } from "slack-spec";
import { AdminInviteRequestsApprovedListResponse } from "slack-spec/dist/sdk/models/operations";

const sdk = new SlackSpec();

sdk.adminInviteRequestsApproved.adminInviteRequestsApprovedList({
  cursor: "error",
  limit: 50370,
  teamId: "occaecati",
  token: "rerum",
}, {
  slackAuth: "Bearer YOUR_ACCESS_TOKEN_HERE",
}).then((res: AdminInviteRequestsApprovedListResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```
