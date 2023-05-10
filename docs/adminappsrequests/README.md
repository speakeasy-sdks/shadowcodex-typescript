# adminAppsRequests

### Available Operations

* [adminAppsRequestsList](#adminappsrequestslist) - List app requests for a team/workspace.

## adminAppsRequestsList

List app requests for a team/workspace.

API method documentation
<https://api.slack.com/methods/admin.apps.requests.list>

### Example Usage

```typescript
import { SlackSpec } from "slack-spec";
import { AdminAppsRequestsListResponse } from "slack-spec/dist/sdk/models/operations";

const sdk = new SlackSpec();

sdk.adminAppsRequests.adminAppsRequestsList({
  cursor: "amet",
  limit: 643990,
  teamId: "nisi",
  token: "vel",
}, {
  slackAuth: "Bearer YOUR_ACCESS_TOKEN_HERE",
}).then((res: AdminAppsRequestsListResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```
