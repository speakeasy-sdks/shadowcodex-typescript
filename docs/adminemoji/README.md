# adminEmoji

### Available Operations

* [adminEmojiAdd](#adminemojiadd) - Add an emoji.
* [adminEmojiAddAlias](#adminemojiaddalias) - Add an emoji alias.
* [adminEmojiList](#adminemojilist) - List emoji for an Enterprise Grid organization.
* [adminEmojiRemove](#adminemojiremove) - Remove an emoji across an Enterprise Grid organization
* [adminEmojiRename](#adminemojirename) - Rename an emoji.

## adminEmojiAdd

Add an emoji.

API method documentation
<https://api.slack.com/methods/admin.emoji.add>

### Example Usage

```typescript
import { SlackSpec } from "slack-spec";
import { AdminEmojiAddResponse } from "slack-spec/dist/sdk/models/operations";

const sdk = new SlackSpec();

sdk.adminEmoji.adminEmojiAdd({
  name: "Clyde Kling",
  token: "eaque",
  url: "pariatur",
}, {
  slackAuth: "Bearer YOUR_ACCESS_TOKEN_HERE",
}).then((res: AdminEmojiAddResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

## adminEmojiAddAlias

Add an emoji alias.

API method documentation
<https://api.slack.com/methods/admin.emoji.addAlias>

### Example Usage

```typescript
import { SlackSpec } from "slack-spec";
import { AdminEmojiAddAliasResponse } from "slack-spec/dist/sdk/models/operations";

const sdk = new SlackSpec();

sdk.adminEmoji.adminEmojiAddAlias({
  aliasFor: "nemo",
  name: "Joseph Steuber DDS",
  token: "corporis",
}, {
  slackAuth: "Bearer YOUR_ACCESS_TOKEN_HERE",
}).then((res: AdminEmojiAddAliasResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

## adminEmojiList

List emoji for an Enterprise Grid organization.

API method documentation
<https://api.slack.com/methods/admin.emoji.list>

### Example Usage

```typescript
import { SlackSpec } from "slack-spec";
import { AdminEmojiListResponse } from "slack-spec/dist/sdk/models/operations";

const sdk = new SlackSpec();

sdk.adminEmoji.adminEmojiList({
  cursor: "hic",
  limit: 729991,
  token: "nobis",
}, {
  slackAuth: "Bearer YOUR_ACCESS_TOKEN_HERE",
}).then((res: AdminEmojiListResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

## adminEmojiRemove

Remove an emoji across an Enterprise Grid organization

API method documentation
<https://api.slack.com/methods/admin.emoji.remove>

### Example Usage

```typescript
import { SlackSpec } from "slack-spec";
import { AdminEmojiRemoveResponse } from "slack-spec/dist/sdk/models/operations";

const sdk = new SlackSpec();

sdk.adminEmoji.adminEmojiRemove({
  name: "Beatrice Lebsack II",
  token: "nesciunt",
}, {
  slackAuth: "Bearer YOUR_ACCESS_TOKEN_HERE",
}).then((res: AdminEmojiRemoveResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

## adminEmojiRename

Rename an emoji.

API method documentation
<https://api.slack.com/methods/admin.emoji.rename>

### Example Usage

```typescript
import { SlackSpec } from "slack-spec";
import { AdminEmojiRenameResponse } from "slack-spec/dist/sdk/models/operations";

const sdk = new SlackSpec();

sdk.adminEmoji.adminEmojiRename({
  name: "Dorothy Dach",
  newName: "dolor",
  token: "vero",
}, {
  slackAuth: "Bearer YOUR_ACCESS_TOKEN_HERE",
}).then((res: AdminEmojiRenameResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```
