# adminTeamsOwners

### Available Operations

* [adminTeamsOwnersList](#adminteamsownerslist) - List all of the owners on a given workspace.

## adminTeamsOwnersList

List all of the owners on a given workspace.

API method documentation
<https://api.slack.com/methods/admin.teams.owners.list>

### Example Usage

```typescript
import { SlackSpec } from "slack-spec";
import { AdminTeamsOwnersListResponse } from "slack-spec/dist/sdk/models/operations";

const sdk = new SlackSpec();

sdk.adminTeamsOwners.adminTeamsOwnersList({
  cursor: "dolorem",
  limit: 222443,
  teamId: "qui",
  token: "ipsum",
}, {
  slackAuth: "Bearer YOUR_ACCESS_TOKEN_HERE",
}).then((res: AdminTeamsOwnersListResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```
