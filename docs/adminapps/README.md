# adminApps

### Available Operations

* [adminAppsApprove](#adminappsapprove) - Approve an app for installation on a workspace.
* [adminAppsRestrict](#adminappsrestrict) - Restrict an app for installation on a workspace.

## adminAppsApprove

Approve an app for installation on a workspace.

API method documentation
<https://api.slack.com/methods/admin.apps.approve>

### Example Usage

```typescript
import { SlackSpec } from "slack-spec";
import { AdminAppsApproveResponse } from "slack-spec/dist/sdk/models/operations";

const sdk = new SlackSpec();

sdk.adminApps.adminAppsApprove({
  requestBody: {
    appId: "accusamus",
    requestId: "non",
    teamId: "occaecati",
  },
  token: "enim",
}, {
  slackAuth: "Bearer YOUR_ACCESS_TOKEN_HERE",
}).then((res: AdminAppsApproveResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

## adminAppsRestrict

Restrict an app for installation on a workspace.

API method documentation
<https://api.slack.com/methods/admin.apps.restrict>

### Example Usage

```typescript
import { SlackSpec } from "slack-spec";
import { AdminAppsRestrictResponse } from "slack-spec/dist/sdk/models/operations";

const sdk = new SlackSpec();

sdk.adminApps.adminAppsRestrict({
  requestBody: {
    appId: "accusamus",
    requestId: "delectus",
    teamId: "quidem",
  },
  token: "provident",
}, {
  slackAuth: "Bearer YOUR_ACCESS_TOKEN_HERE",
}).then((res: AdminAppsRestrictResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```
