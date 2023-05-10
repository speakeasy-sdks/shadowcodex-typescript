# adminInviteRequests

### Available Operations

* [adminInviteRequestsApprove](#admininviterequestsapprove) - Approve a workspace invite request.
* [adminInviteRequestsDeny](#admininviterequestsdeny) - Deny a workspace invite request.
* [adminInviteRequestsList](#admininviterequestslist) - List all pending workspace invite requests.

## adminInviteRequestsApprove

Approve a workspace invite request.

API method documentation
<https://api.slack.com/methods/admin.inviteRequests.approve>

### Example Usage

```typescript
import { SlackSpec } from "slack-spec";
import { AdminInviteRequestsApproveResponse } from "slack-spec/dist/sdk/models/operations";

const sdk = new SlackSpec();

sdk.adminInviteRequests.adminInviteRequestsApprove({
  requestBody: {
    inviteRequestId: "nostrum",
    teamId: "hic",
  },
  token: "recusandae",
}, {
  slackAuth: "Bearer YOUR_ACCESS_TOKEN_HERE",
}).then((res: AdminInviteRequestsApproveResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

## adminInviteRequestsDeny

Deny a workspace invite request.

API method documentation
<https://api.slack.com/methods/admin.inviteRequests.deny>

### Example Usage

```typescript
import { SlackSpec } from "slack-spec";
import { AdminInviteRequestsDenyResponse } from "slack-spec/dist/sdk/models/operations";

const sdk = new SlackSpec();

sdk.adminInviteRequests.adminInviteRequestsDeny({
  requestBody: {
    inviteRequestId: "omnis",
    teamId: "facilis",
  },
  token: "perspiciatis",
}, {
  slackAuth: "Bearer YOUR_ACCESS_TOKEN_HERE",
}).then((res: AdminInviteRequestsDenyResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

## adminInviteRequestsList

List all pending workspace invite requests.

API method documentation
<https://api.slack.com/methods/admin.inviteRequests.list>

### Example Usage

```typescript
import { SlackSpec } from "slack-spec";
import { AdminInviteRequestsListResponse } from "slack-spec/dist/sdk/models/operations";

const sdk = new SlackSpec();

sdk.adminInviteRequests.adminInviteRequestsList({
  cursor: "voluptatem",
  limit: 783645,
  teamId: "consequuntur",
  token: "blanditiis",
}, {
  slackAuth: "Bearer YOUR_ACCESS_TOKEN_HERE",
}).then((res: AdminInviteRequestsListResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```
