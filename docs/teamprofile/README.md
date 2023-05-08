# teamProfile

### Available Operations

* [teamProfileGet](#teamprofileget) - Retrieve a team's profile.

## teamProfileGet

Retrieve a team's profile.

API method documentation
<https://api.slack.com/methods/team.profile.get>

### Example Usage

```typescript
import { SlackSpec } from "slack-spec";
import { TeamProfileGetResponse } from "slack-spec/dist/sdk/models/operations";

const sdk = new SlackSpec();

sdk.teamProfile.teamProfileGet({
  token: "magnam",
  visibility: "saepe",
}, {
  slackAuth: "Bearer YOUR_ACCESS_TOKEN_HERE",
}).then((res: TeamProfileGetResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```
