# apps

### Available Operations

* [appsEventAuthorizationsList](#appseventauthorizationslist) - Get a list of authorizations for the given event context. Each authorization represents an app installation that the event is visible to.
* [appsPermissionsInfo](#appspermissionsinfo) - Returns list of permissions this app has on a team.
* [appsPermissionsRequest](#appspermissionsrequest) - Allows an app to request additional scopes
* [appsPermissionsResourcesList](#appspermissionsresourceslist) - Returns list of resource grants this app has on a team.
* [appsPermissionsScopesList](#appspermissionsscopeslist) - Returns list of scopes this app has on a team.
* [appsUninstall](#appsuninstall) - Uninstalls your app from a workspace.

## appsEventAuthorizationsList

Get a list of authorizations for the given event context. Each authorization represents an app installation that the event is visible to.

API method documentation
<https://api.slack.com/methods/apps.event.authorizations.list>

### Example Usage

```typescript
import { SlackSpec } from "slack-spec";
import { AppsEventAuthorizationsListResponse } from "slack-spec/dist/sdk/models/operations";

const sdk = new SlackSpec();

sdk.apps.appsEventAuthorizationsList({
  cursor: "dolorem",
  eventContext: "sapiente",
  limit: 518201,
  token: "nihil",
}, {
  slackAuth: "Bearer YOUR_ACCESS_TOKEN_HERE",
}).then((res: AppsEventAuthorizationsListResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

## appsPermissionsInfo

Returns list of permissions this app has on a team.

API method documentation
<https://api.slack.com/methods/apps.permissions.info>

### Example Usage

```typescript
import { SlackSpec } from "slack-spec";
import { AppsPermissionsInfoResponse } from "slack-spec/dist/sdk/models/operations";

const sdk = new SlackSpec();

sdk.apps.appsPermissionsInfo({
  token: "sit",
}, {
  slackAuth: "Bearer YOUR_ACCESS_TOKEN_HERE",
}).then((res: AppsPermissionsInfoResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

## appsPermissionsRequest

Allows an app to request additional scopes

API method documentation
<https://api.slack.com/methods/apps.permissions.request>

### Example Usage

```typescript
import { SlackSpec } from "slack-spec";
import { AppsPermissionsRequestResponse } from "slack-spec/dist/sdk/models/operations";

const sdk = new SlackSpec();

sdk.apps.appsPermissionsRequest({
  scopes: "expedita",
  token: "neque",
  triggerId: "sed",
}, {
  slackAuth: "Bearer YOUR_ACCESS_TOKEN_HERE",
}).then((res: AppsPermissionsRequestResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

## appsPermissionsResourcesList

Returns list of resource grants this app has on a team.

API method documentation
<https://api.slack.com/methods/apps.permissions.resources.list>

### Example Usage

```typescript
import { SlackSpec } from "slack-spec";
import { AppsPermissionsResourcesListResponse } from "slack-spec/dist/sdk/models/operations";

const sdk = new SlackSpec();

sdk.apps.appsPermissionsResourcesList({
  cursor: "vel",
  limit: 730442,
  token: "voluptas",
}, {
  slackAuth: "Bearer YOUR_ACCESS_TOKEN_HERE",
}).then((res: AppsPermissionsResourcesListResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

## appsPermissionsScopesList

Returns list of scopes this app has on a team.

API method documentation
<https://api.slack.com/methods/apps.permissions.scopes.list>

### Example Usage

```typescript
import { SlackSpec } from "slack-spec";
import { AppsPermissionsScopesListResponse } from "slack-spec/dist/sdk/models/operations";

const sdk = new SlackSpec();

sdk.apps.appsPermissionsScopesList({
  token: "deserunt",
}, {
  slackAuth: "Bearer YOUR_ACCESS_TOKEN_HERE",
}).then((res: AppsPermissionsScopesListResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

## appsUninstall

Uninstalls your app from a workspace.

API method documentation
<https://api.slack.com/methods/apps.uninstall>

### Example Usage

```typescript
import { SlackSpec } from "slack-spec";
import { AppsUninstallResponse } from "slack-spec/dist/sdk/models/operations";

const sdk = new SlackSpec();

sdk.apps.appsUninstall({
  clientId: "quam",
  clientSecret: "ipsum",
  token: "incidunt",
}, {
  slackAuth: "Bearer YOUR_ACCESS_TOKEN_HERE",
}).then((res: AppsUninstallResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```
