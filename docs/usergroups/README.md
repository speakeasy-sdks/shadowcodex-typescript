# usergroups

### Available Operations

* [usergroupsCreate](#usergroupscreate) - Create a User Group
* [usergroupsDisable](#usergroupsdisable) - Disable an existing User Group
* [usergroupsEnable](#usergroupsenable) - Enable a User Group
* [usergroupsList](#usergroupslist) - List all User Groups for a team
* [usergroupsUpdate](#usergroupsupdate) - Update an existing User Group
* [usergroupsUsersList](#usergroupsuserslist) - List all users in a User Group
* [usergroupsUsersUpdate](#usergroupsusersupdate) - Update the list of users for a User Group

## usergroupsCreate

Create a User Group

API method documentation
<https://api.slack.com/methods/usergroups.create>

### Example Usage

```typescript
import { SlackSpec } from "slack-spec";
import { UsergroupsCreateResponse } from "slack-spec/dist/sdk/models/operations";

const sdk = new SlackSpec();

sdk.usergroups.usergroupsCreate({
  requestBody: {
    channels: "consequuntur",
    description: "occaecati",
    handle: "officiis",
    includeCount: false,
    name: "Arnold Ferry",
  },
  token: "consequuntur",
}, {
  slackAuth: "Bearer YOUR_ACCESS_TOKEN_HERE",
}).then((res: UsergroupsCreateResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

## usergroupsDisable

Disable an existing User Group

API method documentation
<https://api.slack.com/methods/usergroups.disable>

### Example Usage

```typescript
import { SlackSpec } from "slack-spec";
import { UsergroupsDisableResponse } from "slack-spec/dist/sdk/models/operations";

const sdk = new SlackSpec();

sdk.usergroups.usergroupsDisable({
  requestBody: {
    includeCount: false,
    usergroup: "fugit",
  },
  token: "id",
}, {
  slackAuth: "Bearer YOUR_ACCESS_TOKEN_HERE",
}).then((res: UsergroupsDisableResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

## usergroupsEnable

Enable a User Group

API method documentation
<https://api.slack.com/methods/usergroups.enable>

### Example Usage

```typescript
import { SlackSpec } from "slack-spec";
import { UsergroupsEnableResponse } from "slack-spec/dist/sdk/models/operations";

const sdk = new SlackSpec();

sdk.usergroups.usergroupsEnable({
  requestBody: {
    includeCount: false,
    usergroup: "quis",
  },
  token: "reprehenderit",
}, {
  slackAuth: "Bearer YOUR_ACCESS_TOKEN_HERE",
}).then((res: UsergroupsEnableResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

## usergroupsList

List all User Groups for a team

API method documentation
<https://api.slack.com/methods/usergroups.list>

### Example Usage

```typescript
import { SlackSpec } from "slack-spec";
import { UsergroupsListResponse } from "slack-spec/dist/sdk/models/operations";

const sdk = new SlackSpec();

sdk.usergroups.usergroupsList({
  includeCount: false,
  includeDisabled: false,
  includeUsers: false,
  token: "error",
}, {
  slackAuth: "Bearer YOUR_ACCESS_TOKEN_HERE",
}).then((res: UsergroupsListResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

## usergroupsUpdate

Update an existing User Group

API method documentation
<https://api.slack.com/methods/usergroups.update>

### Example Usage

```typescript
import { SlackSpec } from "slack-spec";
import { UsergroupsUpdateResponse } from "slack-spec/dist/sdk/models/operations";

const sdk = new SlackSpec();

sdk.usergroups.usergroupsUpdate({
  requestBody: {
    channels: "illo",
    description: "corporis",
    handle: "quidem",
    includeCount: false,
    name: "Ms. Melvin Thiel IV",
    usergroup: "quae",
  },
  token: "molestiae",
}, {
  slackAuth: "Bearer YOUR_ACCESS_TOKEN_HERE",
}).then((res: UsergroupsUpdateResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

## usergroupsUsersList

List all users in a User Group

API method documentation
<https://api.slack.com/methods/usergroups.users.list>

### Example Usage

```typescript
import { SlackSpec } from "slack-spec";
import { UsergroupsUsersListResponse } from "slack-spec/dist/sdk/models/operations";

const sdk = new SlackSpec();

sdk.usergroups.usergroupsUsersList({
  includeDisabled: false,
  token: "eveniet",
  usergroup: "qui",
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

sdk.usergroups.usergroupsUsersUpdate({
  requestBody: {
    includeCount: false,
    usergroup: "cum",
    users: "iure",
  },
  token: "necessitatibus",
}, {
  slackAuth: "Bearer YOUR_ACCESS_TOKEN_HERE",
}).then((res: UsergroupsUsersUpdateResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```
