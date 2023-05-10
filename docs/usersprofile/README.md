# usersProfile

### Available Operations

* [usersProfileGet](#usersprofileget) - Retrieves a user's profile information.
* [usersProfileSet](#usersprofileset) - Set the profile information for a user.

## usersProfileGet

Retrieves a user's profile information.

API method documentation
<https://api.slack.com/methods/users.profile.get>

### Example Usage

```typescript
import { SlackSpec } from "slack-spec";
import { UsersProfileGetResponse } from "slack-spec/dist/sdk/models/operations";

const sdk = new SlackSpec();

sdk.usersProfile.usersProfileGet({
  includeLabels: false,
  token: "ullam",
  user: "quasi",
}, {
  slackAuth: "Bearer YOUR_ACCESS_TOKEN_HERE",
}).then((res: UsersProfileGetResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

## usersProfileSet

Set the profile information for a user.

API method documentation
<https://api.slack.com/methods/users.profile.set>

### Example Usage

```typescript
import { SlackSpec } from "slack-spec";
import { UsersProfileSetResponse } from "slack-spec/dist/sdk/models/operations";

const sdk = new SlackSpec();

sdk.usersProfile.usersProfileSet({
  requestBody: {
    name: "Gordon O'Hara",
    profile: "animi",
    user: "ex",
    value: "aliquid",
  },
  token: "accusantium",
}, {
  slackAuth: "Bearer YOUR_ACCESS_TOKEN_HERE",
}).then((res: UsersProfileSetResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```
