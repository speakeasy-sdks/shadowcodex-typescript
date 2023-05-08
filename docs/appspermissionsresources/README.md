# appsPermissionsResources

### Available Operations

* [appsPermissionsResourcesList](#appspermissionsresourceslist) - Returns list of resource grants this app has on a team.

## appsPermissionsResourcesList

Returns list of resource grants this app has on a team.

API method documentation
<https://api.slack.com/methods/apps.permissions.resources.list>

### Example Usage

```typescript
import { SlackSpec } from "slack-spec";
import { AppsPermissionsResourcesListResponse } from "slack-spec/dist/sdk/models/operations";

const sdk = new SlackSpec();

sdk.appsPermissionsResources.appsPermissionsResourcesList({
  cursor: "incidunt",
  limit: 132068,
  token: "dolores",
}, {
  slackAuth: "Bearer YOUR_ACCESS_TOKEN_HERE",
}).then((res: AppsPermissionsResourcesListResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```
