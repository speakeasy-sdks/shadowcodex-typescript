# stars

### Available Operations

* [starsAdd](#starsadd) - Adds a star to an item.
* [starsList](#starslist) - Lists stars for a user.
* [starsRemove](#starsremove) - Removes a star from an item.

## starsAdd

Adds a star to an item.

API method documentation
<https://api.slack.com/methods/stars.add>

### Example Usage

```typescript
import { SlackSpec } from "slack-spec";
import { StarsAddResponse } from "slack-spec/dist/sdk/models/operations";

const sdk = new SlackSpec();

sdk.stars.starsAdd({
  requestBody: {
    channel: "officiis",
    file: "accusamus",
    fileComment: "natus",
    timestamp: "minima",
  },
  token: "aspernatur",
}, {
  slackAuth: "Bearer YOUR_ACCESS_TOKEN_HERE",
}).then((res: StarsAddResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

## starsList

Lists stars for a user.

API method documentation
<https://api.slack.com/methods/stars.list>

### Example Usage

```typescript
import { SlackSpec } from "slack-spec";
import { StarsListResponse } from "slack-spec/dist/sdk/models/operations";

const sdk = new SlackSpec();

sdk.stars.starsList({
  count: "ex",
  cursor: "maiores",
  limit: 544647,
  page: "at",
  token: "error",
}, {
  slackAuth: "Bearer YOUR_ACCESS_TOKEN_HERE",
}).then((res: StarsListResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

## starsRemove

Removes a star from an item.

API method documentation
<https://api.slack.com/methods/stars.remove>

### Example Usage

```typescript
import { SlackSpec } from "slack-spec";
import { StarsRemoveResponse } from "slack-spec/dist/sdk/models/operations";

const sdk = new SlackSpec();

sdk.stars.starsRemove({
  requestBody: {
    channel: "blanditiis",
    file: "suscipit",
    fileComment: "repudiandae",
    timestamp: "atque",
  },
  token: "atque",
}, {
  slackAuth: "Bearer YOUR_ACCESS_TOKEN_HERE",
}).then((res: StarsRemoveResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```
