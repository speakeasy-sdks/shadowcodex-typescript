# appsPermissionsScopes

### Available Operations

* [appsPermissionsScopesList](#appspermissionsscopeslist) - Returns list of scopes this app has on a team.

## appsPermissionsScopesList

Returns list of scopes this app has on a team.

API method documentation
<https://api.slack.com/methods/apps.permissions.scopes.list>

### Example Usage

```typescript
import { SlackSpec } from "slack-spec";
import { AppsPermissionsScopesListResponse } from "slack-spec/dist/sdk/models/operations";

const sdk = new SlackSpec();

sdk.appsPermissionsScopes.appsPermissionsScopesList({
  token: "distinctio",
}, {
  slackAuth: "Bearer YOUR_ACCESS_TOKEN_HERE",
}).then((res: AppsPermissionsScopesListResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```
