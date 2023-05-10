# api

### Available Operations

* [apiTest](#apitest) - Checks API calling code.

## apiTest

Checks API calling code.

API method documentation
<https://api.slack.com/methods/api.test>

### Example Usage

```typescript
import { SlackSpec } from "slack-spec";
import { ApiTestResponse } from "slack-spec/dist/sdk/models/operations";

const sdk = new SlackSpec();

sdk.api.apiTest({
  error: "numquam",
  foo: "enim",
}, {
  slackAuth: "Bearer YOUR_ACCESS_TOKEN_HERE",
}).then((res: ApiTestResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```
