# adminTeamsAdmins

### Available Operations

* [adminTeamsAdminsList](#adminteamsadminslist) - List all of the admins on a given workspace.

## adminTeamsAdminsList

List all of the admins on a given workspace.

API method documentation
<https://api.slack.com/methods/admin.teams.admins.list>

### Example Usage

```typescript
import { SlackSpec } from "slack-spec";
import { AdminTeamsAdminsListResponse } from "slack-spec/dist/sdk/models/operations";

const sdk = new SlackSpec();

sdk.adminTeamsAdmins.adminTeamsAdminsList({
  cursor: "quaerat",
  limit: 554242,
  teamId: "aliquid",
  token: "dolorem",
}, {
  slackAuth: "Bearer YOUR_ACCESS_TOKEN_HERE",
}).then((res: AdminTeamsAdminsListResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```
