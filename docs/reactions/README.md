# reactions

### Available Operations

* [reactionsAdd](#reactionsadd) - Adds a reaction to an item.
* [reactionsGet](#reactionsget) - Gets reactions for an item.
* [reactionsList](#reactionslist) - Lists reactions made by a user.
* [reactionsRemove](#reactionsremove) - Removes a reaction from an item.

## reactionsAdd

Adds a reaction to an item.

API method documentation
<https://api.slack.com/methods/reactions.add>

### Example Usage

```typescript
import { SlackSpec } from "slack-spec";
import { ReactionsAddResponse } from "slack-spec/dist/sdk/models/operations";

const sdk = new SlackSpec();

sdk.reactions.reactionsAdd({
  requestBody: {
    channel: "architecto",
    name: "Francisco Powlowski",
    timestamp: "nam",
  },
  token: "tenetur",
}, {
  slackAuth: "Bearer YOUR_ACCESS_TOKEN_HERE",
}).then((res: ReactionsAddResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

## reactionsGet

Gets reactions for an item.

API method documentation
<https://api.slack.com/methods/reactions.get>

### Example Usage

```typescript
import { SlackSpec } from "slack-spec";
import { ReactionsGetResponse } from "slack-spec/dist/sdk/models/operations";

const sdk = new SlackSpec();

sdk.reactions.reactionsGet({
  channel: "laboriosam",
  file: "alias",
  fileComment: "amet",
  full: false,
  timestamp: "deserunt",
  token: "voluptate",
}, {
  slackAuth: "Bearer YOUR_ACCESS_TOKEN_HERE",
}).then((res: ReactionsGetResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

## reactionsList

Lists reactions made by a user.

API method documentation
<https://api.slack.com/methods/reactions.list>

### Example Usage

```typescript
import { SlackSpec } from "slack-spec";
import { ReactionsListResponse } from "slack-spec/dist/sdk/models/operations";

const sdk = new SlackSpec();

sdk.reactions.reactionsList({
  count: 600392,
  cursor: "reiciendis",
  full: false,
  limit: 588740,
  page: 833819,
  token: "delectus",
  user: "voluptates",
}, {
  slackAuth: "Bearer YOUR_ACCESS_TOKEN_HERE",
}).then((res: ReactionsListResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

## reactionsRemove

Removes a reaction from an item.

API method documentation
<https://api.slack.com/methods/reactions.remove>

### Example Usage

```typescript
import { SlackSpec } from "slack-spec";
import { ReactionsRemoveResponse } from "slack-spec/dist/sdk/models/operations";

const sdk = new SlackSpec();

sdk.reactions.reactionsRemove({
  requestBody: {
    channel: "perferendis",
    file: "est",
    fileComment: "quidem",
    name: "Chelsea Pfannerstill",
    timestamp: "veniam",
  },
  token: "voluptatem",
}, {
  slackAuth: "Bearer YOUR_ACCESS_TOKEN_HERE",
}).then((res: ReactionsRemoveResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```
