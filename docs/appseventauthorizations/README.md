# appsEventAuthorizations

### Available Operations

* [appsEventAuthorizationsList](#appseventauthorizationslist) - Get a list of authorizations for the given event context. Each authorization represents an app installation that the event is visible to.

## appsEventAuthorizationsList

Get a list of authorizations for the given event context. Each authorization represents an app installation that the event is visible to.

API method documentation
<https://api.slack.com/methods/apps.event.authorizations.list>

### Example Usage

```typescript
import { SlackSpec } from "slack-spec";
import { AppsEventAuthorizationsListResponse } from "slack-spec/dist/sdk/models/operations";

const sdk = new SlackSpec();

sdk.appsEventAuthorizations.appsEventAuthorizationsList({
  cursor: "qui",
  eventContext: "cupiditate",
  limit: 807581,
  token: "pariatur",
}, {
  slackAuth: "Bearer YOUR_ACCESS_TOKEN_HERE",
}).then((res: AppsEventAuthorizationsListResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```
