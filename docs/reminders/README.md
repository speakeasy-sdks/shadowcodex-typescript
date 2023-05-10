# reminders

### Available Operations

* [remindersAdd](#remindersadd) - Creates a reminder.
* [remindersComplete](#reminderscomplete) - Marks a reminder as complete.
* [remindersDelete](#remindersdelete) - Deletes a reminder.
* [remindersInfo](#remindersinfo) - Gets information about a reminder.
* [remindersList](#reminderslist) - Lists all reminders created by or for a given user.

## remindersAdd

Creates a reminder.

API method documentation
<https://api.slack.com/methods/reminders.add>

### Example Usage

```typescript
import { SlackSpec } from "slack-spec";
import { RemindersAddResponse } from "slack-spec/dist/sdk/models/operations";

const sdk = new SlackSpec();

sdk.reminders.remindersAdd({
  requestBody: {
    text: "quisquam",
    time: "repudiandae",
    user: "quasi",
  },
  token: "atque",
}, {
  slackAuth: "Bearer YOUR_ACCESS_TOKEN_HERE",
}).then((res: RemindersAddResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

## remindersComplete

Marks a reminder as complete.

API method documentation
<https://api.slack.com/methods/reminders.complete>

### Example Usage

```typescript
import { SlackSpec } from "slack-spec";
import { RemindersCompleteResponse } from "slack-spec/dist/sdk/models/operations";

const sdk = new SlackSpec();

sdk.reminders.remindersComplete({
  requestBody: {
    reminder: "reprehenderit",
  },
  token: "asperiores",
}, {
  slackAuth: "Bearer YOUR_ACCESS_TOKEN_HERE",
}).then((res: RemindersCompleteResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

## remindersDelete

Deletes a reminder.

API method documentation
<https://api.slack.com/methods/reminders.delete>

### Example Usage

```typescript
import { SlackSpec } from "slack-spec";
import { RemindersDeleteResponse } from "slack-spec/dist/sdk/models/operations";

const sdk = new SlackSpec();

sdk.reminders.remindersDelete({
  requestBody: {
    reminder: "totam",
  },
  token: "suscipit",
}, {
  slackAuth: "Bearer YOUR_ACCESS_TOKEN_HERE",
}).then((res: RemindersDeleteResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

## remindersInfo

Gets information about a reminder.

API method documentation
<https://api.slack.com/methods/reminders.info>

### Example Usage

```typescript
import { SlackSpec } from "slack-spec";
import { RemindersInfoResponse } from "slack-spec/dist/sdk/models/operations";

const sdk = new SlackSpec();

sdk.reminders.remindersInfo({
  reminder: "quidem",
  token: "maxime",
}, {
  slackAuth: "Bearer YOUR_ACCESS_TOKEN_HERE",
}).then((res: RemindersInfoResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

## remindersList

Lists all reminders created by or for a given user.

API method documentation
<https://api.slack.com/methods/reminders.list>

### Example Usage

```typescript
import { SlackSpec } from "slack-spec";
import { RemindersListResponse } from "slack-spec/dist/sdk/models/operations";

const sdk = new SlackSpec();

sdk.reminders.remindersList({
  token: "et",
}, {
  slackAuth: "Bearer YOUR_ACCESS_TOKEN_HERE",
}).then((res: RemindersListResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```
