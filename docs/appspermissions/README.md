# appsPermissions

### Available Operations

* [appsPermissionsInfo](#appspermissionsinfo) - Returns list of permissions this app has on a team.
* [appsPermissionsRequest](#appspermissionsrequest) - Allows an app to request additional scopes

## appsPermissionsInfo

Returns list of permissions this app has on a team.

API method documentation
<https://api.slack.com/methods/apps.permissions.info>

### Example Usage

```typescript
import { SlackSpec } from "slack-spec";
import { AppsPermissionsInfoResponse } from "slack-spec/dist/sdk/models/operations";

const sdk = new SlackSpec();

sdk.appsPermissions.appsPermissionsInfo({
  token: "soluta",
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

sdk.appsPermissions.appsPermissionsRequest({
  scopes: "dicta",
  token: "laborum",
  triggerId: "totam",
}, {
  slackAuth: "Bearer YOUR_ACCESS_TOKEN_HERE",
}).then((res: AppsPermissionsRequestResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```
