# migration

### Available Operations

* [migrationExchange](#migrationexchange) - For Enterprise Grid workspaces, map local user IDs to global user IDs

## migrationExchange

For Enterprise Grid workspaces, map local user IDs to global user IDs

API method documentation
<https://api.slack.com/methods/migration.exchange>

### Example Usage

```typescript
import { SlackSpec } from "slack-spec";
import { MigrationExchangeResponse } from "slack-spec/dist/sdk/models/operations";

const sdk = new SlackSpec();

sdk.migration.migrationExchange({
  teamId: "voluptatem",
  toOld: false,
  token: "culpa",
  users: "expedita",
}, {
  slackAuth: "Bearer YOUR_ACCESS_TOKEN_HERE",
}).then((res: MigrationExchangeResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```
