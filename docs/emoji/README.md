# emoji

### Available Operations

* [emojiList](#emojilist) - Lists custom emoji for a team.

## emojiList

Lists custom emoji for a team.

API method documentation
<https://api.slack.com/methods/emoji.list>

### Example Usage

```typescript
import { SlackSpec } from "slack-spec";
import { EmojiListResponse } from "slack-spec/dist/sdk/models/operations";

const sdk = new SlackSpec();

sdk.emoji.emojiList({
  token: "aperiam",
}, {
  slackAuth: "Bearer YOUR_ACCESS_TOKEN_HERE",
}).then((res: EmojiListResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```
