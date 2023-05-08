# search

### Available Operations

* [searchMessages](#searchmessages) - Searches for messages matching a query.

## searchMessages

Searches for messages matching a query.

API method documentation
<https://api.slack.com/methods/search.messages>

### Example Usage

```typescript
import { SlackSpec } from "slack-spec";
import { SearchMessagesResponse } from "slack-spec/dist/sdk/models/operations";

const sdk = new SlackSpec();

sdk.search.searchMessages({
  count: 227759,
  highlight: false,
  page: 826825,
  query: "ea",
  sort: "atque",
  sortDir: "error",
  token: "officiis",
}, {
  slackAuth: "Bearer YOUR_ACCESS_TOKEN_HERE",
}).then((res: SearchMessagesResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```
