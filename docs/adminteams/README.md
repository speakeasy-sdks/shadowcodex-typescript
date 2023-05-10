# adminTeams

### Available Operations

* [adminTeamsCreate](#adminteamscreate) - Create an Enterprise team.
* [adminTeamsList](#adminteamslist) - List all teams on an Enterprise organization

## adminTeamsCreate

Create an Enterprise team.

API method documentation
<https://api.slack.com/methods/admin.teams.create>

### Example Usage

```typescript
import { SlackSpec } from "slack-spec";
import { AdminTeamsCreateResponse } from "slack-spec/dist/sdk/models/operations";

const sdk = new SlackSpec();

sdk.adminTeams.adminTeamsCreate({
  requestBody: {
    teamDescription: "iste",
    teamDiscoverability: "dolorum",
    teamDomain: "deleniti",
    teamName: "pariatur",
  },
  token: "provident",
}, {
  slackAuth: "Bearer YOUR_ACCESS_TOKEN_HERE",
}).then((res: AdminTeamsCreateResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

## adminTeamsList

List all teams on an Enterprise organization

API method documentation
<https://api.slack.com/methods/admin.teams.list>

### Example Usage

```typescript
import { SlackSpec } from "slack-spec";
import { AdminTeamsListResponse } from "slack-spec/dist/sdk/models/operations";

const sdk = new SlackSpec();

sdk.adminTeams.adminTeamsList({
  cursor: "nobis",
  limit: 730122,
  token: "delectus",
}, {
  slackAuth: "Bearer YOUR_ACCESS_TOKEN_HERE",
}).then((res: AdminTeamsListResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```
