# adminUsers

### Available Operations

* [adminUsersAssign](#adminusersassign) - Add an Enterprise user to a workspace.
* [adminUsersInvite](#adminusersinvite) - Invite a user to a workspace.
* [adminUsersList](#adminuserslist) - List users on a workspace
* [adminUsersRemove](#adminusersremove) - Remove a user from a workspace.
* [adminUsersSetAdmin](#adminuserssetadmin) - Set an existing guest, regular user, or owner to be an admin user.
* [adminUsersSetExpiration](#adminuserssetexpiration) - Set an expiration for a guest user
* [adminUsersSetOwner](#adminuserssetowner) - Set an existing guest, regular user, or admin user to be a workspace owner.
* [adminUsersSetRegular](#adminuserssetregular) - Set an existing guest user, admin user, or owner to be a regular user.

## adminUsersAssign

Add an Enterprise user to a workspace.

API method documentation
<https://api.slack.com/methods/admin.users.assign>

### Example Usage

```typescript
import { SlackSpec } from "slack-spec";
import { AdminUsersAssignResponse } from "slack-spec/dist/sdk/models/operations";

const sdk = new SlackSpec();

sdk.adminUsers.adminUsersAssign({
  requestBody: {
    channelIds: "asperiores",
    isRestricted: false,
    isUltraRestricted: false,
    teamId: "nihil",
    userId: "ipsum",
  },
  token: "voluptate",
}, {
  slackAuth: "Bearer YOUR_ACCESS_TOKEN_HERE",
}).then((res: AdminUsersAssignResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

## adminUsersInvite

Invite a user to a workspace.

API method documentation
<https://api.slack.com/methods/admin.users.invite>

### Example Usage

```typescript
import { SlackSpec } from "slack-spec";
import { AdminUsersInviteResponse } from "slack-spec/dist/sdk/models/operations";

const sdk = new SlackSpec();

sdk.adminUsers.adminUsersInvite({
  requestBody: {
    channelIds: "id",
    customMessage: "saepe",
    email: "Brigitte75@gmail.com",
    guestExpirationTs: "accusamus",
    isRestricted: false,
    isUltraRestricted: false,
    realName: "ad",
    resend: false,
    teamId: "saepe",
  },
  token: "suscipit",
}, {
  slackAuth: "Bearer YOUR_ACCESS_TOKEN_HERE",
}).then((res: AdminUsersInviteResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

## adminUsersList

List users on a workspace

API method documentation
<https://api.slack.com/methods/admin.users.list>

### Example Usage

```typescript
import { SlackSpec } from "slack-spec";
import { AdminUsersListResponse } from "slack-spec/dist/sdk/models/operations";

const sdk = new SlackSpec();

sdk.adminUsers.adminUsersList({
  cursor: "deserunt",
  limit: 588317,
  teamId: "minima",
  token: "repellendus",
}, {
  slackAuth: "Bearer YOUR_ACCESS_TOKEN_HERE",
}).then((res: AdminUsersListResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

## adminUsersRemove

Remove a user from a workspace.

API method documentation
<https://api.slack.com/methods/admin.users.remove>

### Example Usage

```typescript
import { SlackSpec } from "slack-spec";
import { AdminUsersRemoveResponse } from "slack-spec/dist/sdk/models/operations";

const sdk = new SlackSpec();

sdk.adminUsers.adminUsersRemove({
  requestBody: {
    teamId: "totam",
    userId: "similique",
  },
  token: "alias",
}, {
  slackAuth: "Bearer YOUR_ACCESS_TOKEN_HERE",
}).then((res: AdminUsersRemoveResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

## adminUsersSetAdmin

Set an existing guest, regular user, or owner to be an admin user.

API method documentation
<https://api.slack.com/methods/admin.users.setAdmin>

### Example Usage

```typescript
import { SlackSpec } from "slack-spec";
import { AdminUsersSetAdminResponse } from "slack-spec/dist/sdk/models/operations";

const sdk = new SlackSpec();

sdk.adminUsers.adminUsersSetAdmin({
  requestBody: {
    teamId: "at",
    userId: "quaerat",
  },
  token: "tempora",
}, {
  slackAuth: "Bearer YOUR_ACCESS_TOKEN_HERE",
}).then((res: AdminUsersSetAdminResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

## adminUsersSetExpiration

Set an expiration for a guest user

API method documentation
<https://api.slack.com/methods/admin.users.setExpiration>

### Example Usage

```typescript
import { SlackSpec } from "slack-spec";
import { AdminUsersSetExpirationResponse } from "slack-spec/dist/sdk/models/operations";

const sdk = new SlackSpec();

sdk.adminUsers.adminUsersSetExpiration({
  requestBody: {
    expirationTs: 425451,
    teamId: "quod",
    userId: "officiis",
  },
  token: "qui",
}, {
  slackAuth: "Bearer YOUR_ACCESS_TOKEN_HERE",
}).then((res: AdminUsersSetExpirationResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

## adminUsersSetOwner

Set an existing guest, regular user, or admin user to be a workspace owner.

API method documentation
<https://api.slack.com/methods/admin.users.setOwner>

### Example Usage

```typescript
import { SlackSpec } from "slack-spec";
import { AdminUsersSetOwnerResponse } from "slack-spec/dist/sdk/models/operations";

const sdk = new SlackSpec();

sdk.adminUsers.adminUsersSetOwner({
  requestBody: {
    teamId: "dolorum",
    userId: "a",
  },
  token: "esse",
}, {
  slackAuth: "Bearer YOUR_ACCESS_TOKEN_HERE",
}).then((res: AdminUsersSetOwnerResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

## adminUsersSetRegular

Set an existing guest user, admin user, or owner to be a regular user.

API method documentation
<https://api.slack.com/methods/admin.users.setRegular>

### Example Usage

```typescript
import { SlackSpec } from "slack-spec";
import { AdminUsersSetRegularResponse } from "slack-spec/dist/sdk/models/operations";

const sdk = new SlackSpec();

sdk.adminUsers.adminUsersSetRegular({
  requestBody: {
    teamId: "harum",
    userId: "iusto",
  },
  token: "ipsum",
}, {
  slackAuth: "Bearer YOUR_ACCESS_TOKEN_HERE",
}).then((res: AdminUsersSetRegularResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```
