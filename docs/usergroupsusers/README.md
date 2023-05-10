# usergroupsUsers

### Available Operations

* [usergroupsUsersList](#usergroupsuserslist) - List all users in a User Group
* [usergroupsUsersUpdate](#usergroupsusersupdate) - Update the list of users for a User Group

## usergroupsUsersList

List all users in a User Group

API method documentation
<https://api.slack.com/methods/usergroups.users.list>

### Example Usage

```typescript
import { SlackSpec } from "slack-spec";
import { UsergroupsUsersListResponse } from "slack-spec/dist/sdk/models/operations";

const sdk = new SlackSpec();

sdk.usergroupsUsers.usergroupsUsersList({
  includeDisabled: false,
  token: "ratione",
  usergroup: "laborum",
}, {
  slackAuth: "Bearer YOUR_ACCESS_TOKEN_HERE",
}).then((res: UsergroupsUsersListResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

## usergroupsUsersUpdate

Update the list of users for a User Group

API method documentation
<https://api.slack.com/methods/usergroups.users.update>

### Example Usage

```typescript
import { SlackSpec } from "slack-spec";
import { UsergroupsUsersUpdateResponse } from "slack-spec/dist/sdk/models/operations";

const sdk = new SlackSpec();

sdk.usergroupsUsers.usergroupsUsersUpdate({
  requestBody: {
    includeCount: false,
    usergroup: "distinctio",
    users: "voluptatum",
  },
  token: "rem",
}, {
  slackAuth: "Bearer YOUR_ACCESS_TOKEN_HERE",
}).then((res: UsergroupsUsersUpdateResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```
