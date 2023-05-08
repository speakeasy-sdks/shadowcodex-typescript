# filesComments

### Available Operations

* [filesCommentsDelete](#filescommentsdelete) - Deletes an existing comment on a file.

## filesCommentsDelete

Deletes an existing comment on a file.

API method documentation
<https://api.slack.com/methods/files.comments.delete>

### Example Usage

```typescript
import { SlackSpec } from "slack-spec";
import { FilesCommentsDeleteResponse } from "slack-spec/dist/sdk/models/operations";

const sdk = new SlackSpec();

sdk.filesComments.filesCommentsDelete({
  requestBody: {
    file: "incidunt",
    id: "294e3698-f447-4f60-be8b-445e80ca55ef",
  },
  token: "nulla",
}, {
  slackAuth: "Bearer YOUR_ACCESS_TOKEN_HERE",
}).then((res: FilesCommentsDeleteResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```
