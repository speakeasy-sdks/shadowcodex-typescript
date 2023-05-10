<!-- Start SDK Example Usage -->
```typescript
import { SlackSpec } from "slack-spec";
import { AdminAppsApproveResponse } from "slack-spec/dist/sdk/models/operations";

const sdk = new SlackSpec();

sdk.admin.adminAppsApprove({
  requestBody: {
    appId: "corrupti",
    requestId: "provident",
    teamId: "distinctio",
  },
  token: "quibusdam",
}, {
  slackAuth: "Bearer YOUR_ACCESS_TOKEN_HERE",
}).then((res: AdminAppsApproveResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```
<!-- End SDK Example Usage -->