# dialog

### Available Operations

* [dialogOpen](#dialogopen) - Open a dialog with a user

## dialogOpen

Open a dialog with a user

API method documentation
<https://api.slack.com/methods/dialog.open>

### Example Usage

```typescript
import { SlackSpec } from "slack-spec";
import { DialogOpenResponse } from "slack-spec/dist/sdk/models/operations";

const sdk = new SlackSpec();

sdk.dialog.dialogOpen({
  dialog: "possimus",
  token: "facilis",
  triggerId: "cum",
}, {
  slackAuth: "Bearer YOUR_ACCESS_TOKEN_HERE",
}).then((res: DialogOpenResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```
