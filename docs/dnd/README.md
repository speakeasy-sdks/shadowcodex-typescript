# dnd

### Available Operations

* [dndEndDnd](#dndenddnd) - Ends the current user's Do Not Disturb session immediately.
* [dndEndSnooze](#dndendsnooze) - Ends the current user's snooze mode immediately.
* [dndInfo](#dndinfo) - Retrieves a user's current Do Not Disturb status.
* [dndSetSnooze](#dndsetsnooze) - Turns on Do Not Disturb mode for the current user, or changes its duration.
* [dndTeamInfo](#dndteaminfo) - Retrieves the Do Not Disturb status for up to 50 users on a team.

## dndEndDnd

Ends the current user's Do Not Disturb session immediately.

API method documentation
<https://api.slack.com/methods/dnd.endDnd>

### Example Usage

```typescript
import { SlackSpec } from "slack-spec";
import { DndEndDndResponse } from "slack-spec/dist/sdk/models/operations";

const sdk = new SlackSpec();

sdk.dnd.dndEndDnd({
  token: "commodi",
}, {
  slackAuth: "Bearer YOUR_ACCESS_TOKEN_HERE",
}).then((res: DndEndDndResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

## dndEndSnooze

Ends the current user's snooze mode immediately.

API method documentation
<https://api.slack.com/methods/dnd.endSnooze>

### Example Usage

```typescript
import { SlackSpec } from "slack-spec";
import { DndEndSnoozeResponse } from "slack-spec/dist/sdk/models/operations";

const sdk = new SlackSpec();

sdk.dnd.dndEndSnooze({
  token: "in",
}, {
  slackAuth: "Bearer YOUR_ACCESS_TOKEN_HERE",
}).then((res: DndEndSnoozeResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

## dndInfo

Retrieves a user's current Do Not Disturb status.

API method documentation
<https://api.slack.com/methods/dnd.info>

### Example Usage

```typescript
import { SlackSpec } from "slack-spec";
import { DndInfoResponse } from "slack-spec/dist/sdk/models/operations";

const sdk = new SlackSpec();

sdk.dnd.dndInfo({
  token: "corporis",
  user: "reiciendis",
}, {
  slackAuth: "Bearer YOUR_ACCESS_TOKEN_HERE",
}).then((res: DndInfoResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

## dndSetSnooze

Turns on Do Not Disturb mode for the current user, or changes its duration.

API method documentation
<https://api.slack.com/methods/dnd.setSnooze>

### Example Usage

```typescript
import { SlackSpec } from "slack-spec";
import { DndSetSnoozeResponse } from "slack-spec/dist/sdk/models/operations";

const sdk = new SlackSpec();

sdk.dnd.dndSetSnooze({
  numMinutes: "assumenda",
  token: "nemo",
}, {
  slackAuth: "Bearer YOUR_ACCESS_TOKEN_HERE",
}).then((res: DndSetSnoozeResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

## dndTeamInfo

Retrieves the Do Not Disturb status for up to 50 users on a team.

API method documentation
<https://api.slack.com/methods/dnd.teamInfo>

### Example Usage

```typescript
import { SlackSpec } from "slack-spec";
import { DndTeamInfoResponse } from "slack-spec/dist/sdk/models/operations";

const sdk = new SlackSpec();

sdk.dnd.dndTeamInfo({
  token: "recusandae",
  users: "aliquid",
}, {
  slackAuth: "Bearer YOUR_ACCESS_TOKEN_HERE",
}).then((res: DndTeamInfoResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```
