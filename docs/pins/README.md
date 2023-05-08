# pins

### Available Operations

* [pinsAdd](#pinsadd) - Pins an item to a channel.
* [pinsList](#pinslist) - Lists items pinned to a channel.
* [pinsRemove](#pinsremove) - Un-pins an item from a channel.

## pinsAdd

Pins an item to a channel.

API method documentation
<https://api.slack.com/methods/pins.add>

### Example Usage

```typescript
import { SlackSpec } from "slack-spec";
import { PinsAddResponse } from "slack-spec/dist/sdk/models/operations";

const sdk = new SlackSpec();

sdk.pins.pinsAdd({
  requestBody: {
    channel: "saepe",
    timestamp: "error",
  },
  token: "consequatur",
}, {
  slackAuth: "Bearer YOUR_ACCESS_TOKEN_HERE",
}).then((res: PinsAddResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

## pinsList

Lists items pinned to a channel.

API method documentation
<https://api.slack.com/methods/pins.list>

### Example Usage

```typescript
import { SlackSpec } from "slack-spec";
import { PinsListResponse } from "slack-spec/dist/sdk/models/operations";

const sdk = new SlackSpec();

sdk.pins.pinsList({
  channel: "incidunt",
  token: "reiciendis",
}, {
  slackAuth: "Bearer YOUR_ACCESS_TOKEN_HERE",
}).then((res: PinsListResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

## pinsRemove

Un-pins an item from a channel.

API method documentation
<https://api.slack.com/methods/pins.remove>

### Example Usage

```typescript
import { SlackSpec } from "slack-spec";
import { PinsRemoveResponse } from "slack-spec/dist/sdk/models/operations";

const sdk = new SlackSpec();

sdk.pins.pinsRemove({
  requestBody: {
    channel: "dolorem",
    timestamp: "harum",
  },
  token: "dicta",
}, {
  slackAuth: "Bearer YOUR_ACCESS_TOKEN_HERE",
}).then((res: PinsRemoveResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```
