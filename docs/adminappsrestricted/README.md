# adminAppsRestricted

### Available Operations

* [adminAppsRestrictedList](#adminappsrestrictedlist) - List restricted apps for an org or workspace.

## adminAppsRestrictedList

List restricted apps for an org or workspace.

API method documentation
<https://api.slack.com/methods/admin.apps.restricted.list>

### Example Usage

```typescript
import { SlackSpec } from "slack-spec";
import { AdminAppsRestrictedListResponse } from "slack-spec/dist/sdk/models/operations";

const sdk = new SlackSpec();

sdk.adminAppsRestricted.adminAppsRestrictedList({
  cursor: "natus",
  enterpriseId: "omnis",
  limit: 474867,
  teamId: "perferendis",
  token: "nihil",
}, {
  slackAuth: "Bearer YOUR_ACCESS_TOKEN_HERE",
}).then((res: AdminAppsRestrictedListResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```
