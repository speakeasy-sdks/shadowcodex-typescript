# adminAppsApproved

### Available Operations

* [adminAppsApprovedList](#adminappsapprovedlist) - List approved apps for an org or workspace.

## adminAppsApprovedList

List approved apps for an org or workspace.

API method documentation
<https://api.slack.com/methods/admin.apps.approved.list>

### Example Usage

```typescript
import { SlackSpec } from "slack-spec";
import { AdminAppsApprovedListResponse } from "slack-spec/dist/sdk/models/operations";

const sdk = new SlackSpec();

sdk.adminAppsApproved.adminAppsApprovedList({
  cursor: "nam",
  enterpriseId: "id",
  limit: 501324,
  teamId: "deleniti",
  token: "sapiente",
}, {
  slackAuth: "Bearer YOUR_ACCESS_TOKEN_HERE",
}).then((res: AdminAppsApprovedListResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```
