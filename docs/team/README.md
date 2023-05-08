# team

### Available Operations

* [teamAccessLogs](#teamaccesslogs) - Gets the access logs for the current team.
* [teamBillableInfo](#teambillableinfo) - Gets billable users information for the current team.
* [teamInfo](#teaminfo) - Gets information about the current team.
* [teamIntegrationLogs](#teamintegrationlogs) - Gets the integration logs for the current team.
* [teamProfileGet](#teamprofileget) - Retrieve a team's profile.

## teamAccessLogs

Gets the access logs for the current team.

API method documentation
<https://api.slack.com/methods/team.accessLogs>

### Example Usage

```typescript
import { SlackSpec } from "slack-spec";
import { TeamAccessLogsResponse } from "slack-spec/dist/sdk/models/operations";

const sdk = new SlackSpec();

sdk.team.teamAccessLogs({
  before: "sunt",
  count: "recusandae",
  page: "dolorum",
  token: "repellendus",
}, {
  slackAuth: "Bearer YOUR_ACCESS_TOKEN_HERE",
}).then((res: TeamAccessLogsResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

## teamBillableInfo

Gets billable users information for the current team.

API method documentation
<https://api.slack.com/methods/team.billableInfo>

### Example Usage

```typescript
import { SlackSpec } from "slack-spec";
import { TeamBillableInfoResponse } from "slack-spec/dist/sdk/models/operations";

const sdk = new SlackSpec();

sdk.team.teamBillableInfo({
  token: "labore",
  user: "reiciendis",
}, {
  slackAuth: "Bearer YOUR_ACCESS_TOKEN_HERE",
}).then((res: TeamBillableInfoResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

## teamInfo

Gets information about the current team.

API method documentation
<https://api.slack.com/methods/team.info>

### Example Usage

```typescript
import { SlackSpec } from "slack-spec";
import { TeamInfoResponse } from "slack-spec/dist/sdk/models/operations";

const sdk = new SlackSpec();

sdk.team.teamInfo({
  team: "doloremque",
  token: "repudiandae",
}, {
  slackAuth: "Bearer YOUR_ACCESS_TOKEN_HERE",
}).then((res: TeamInfoResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

## teamIntegrationLogs

Gets the integration logs for the current team.

API method documentation
<https://api.slack.com/methods/team.integrationLogs>

### Example Usage

```typescript
import { SlackSpec } from "slack-spec";
import { TeamIntegrationLogsResponse } from "slack-spec/dist/sdk/models/operations";

const sdk = new SlackSpec();

sdk.team.teamIntegrationLogs({
  appId: "dicta",
  changeType: "accusantium",
  count: "beatae",
  page: "dolores",
  serviceId: "enim",
  token: "laboriosam",
  user: "velit",
}, {
  slackAuth: "Bearer YOUR_ACCESS_TOKEN_HERE",
}).then((res: TeamIntegrationLogsResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

## teamProfileGet

Retrieve a team's profile.

API method documentation
<https://api.slack.com/methods/team.profile.get>

### Example Usage

```typescript
import { SlackSpec } from "slack-spec";
import { TeamProfileGetResponse } from "slack-spec/dist/sdk/models/operations";

const sdk = new SlackSpec();

sdk.team.teamProfileGet({
  token: "a",
  visibility: "molestias",
}, {
  slackAuth: "Bearer YOUR_ACCESS_TOKEN_HERE",
}).then((res: TeamProfileGetResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```
