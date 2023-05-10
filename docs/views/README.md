# views

### Available Operations

* [viewsOpen](#viewsopen) - Open a view for a user.
* [viewsPublish](#viewspublish) - Publish a static view for a User.
* [viewsPush](#viewspush) - Push a view onto the stack of a root view.
* [viewsUpdate](#viewsupdate) - Update an existing view.

## viewsOpen

Open a view for a user.

API method documentation
<https://api.slack.com/methods/views.open>

### Example Usage

```typescript
import { SlackSpec } from "slack-spec";
import { ViewsOpenResponse } from "slack-spec/dist/sdk/models/operations";

const sdk = new SlackSpec();

sdk.views.viewsOpen({
  token: "repellat",
  triggerId: "doloribus",
  view: "ullam",
}, {
  slackAuth: "Bearer YOUR_ACCESS_TOKEN_HERE",
}).then((res: ViewsOpenResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

## viewsPublish

Publish a static view for a User.

API method documentation
<https://api.slack.com/methods/views.publish>

### Example Usage

```typescript
import { SlackSpec } from "slack-spec";
import { ViewsPublishResponse } from "slack-spec/dist/sdk/models/operations";

const sdk = new SlackSpec();

sdk.views.viewsPublish({
  hash: "in",
  token: "nam",
  userId: "earum",
  view: "officia",
}, {
  slackAuth: "Bearer YOUR_ACCESS_TOKEN_HERE",
}).then((res: ViewsPublishResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

## viewsPush

Push a view onto the stack of a root view.

API method documentation
<https://api.slack.com/methods/views.push>

### Example Usage

```typescript
import { SlackSpec } from "slack-spec";
import { ViewsPushResponse } from "slack-spec/dist/sdk/models/operations";

const sdk = new SlackSpec();

sdk.views.viewsPush({
  token: "laborum",
  triggerId: "placeat",
  view: "modi",
}, {
  slackAuth: "Bearer YOUR_ACCESS_TOKEN_HERE",
}).then((res: ViewsPushResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

## viewsUpdate

Update an existing view.

API method documentation
<https://api.slack.com/methods/views.update>

### Example Usage

```typescript
import { SlackSpec } from "slack-spec";
import { ViewsUpdateResponse } from "slack-spec/dist/sdk/models/operations";

const sdk = new SlackSpec();

sdk.views.viewsUpdate({
  externalId: "voluptatibus",
  hash: "molestias",
  token: "officiis",
  view: "sapiente",
  viewId: "cumque",
}, {
  slackAuth: "Bearer YOUR_ACCESS_TOKEN_HERE",
}).then((res: ViewsUpdateResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```
