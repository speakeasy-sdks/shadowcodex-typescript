# calls

### Available Operations

* [callsAdd](#callsadd) - Registers a new Call.
* [callsEnd](#callsend) - Ends a Call.
* [callsInfo](#callsinfo) - Returns information about a Call.
* [callsParticipantsAdd](#callsparticipantsadd) - Registers new participants added to a Call.
* [callsParticipantsRemove](#callsparticipantsremove) - Registers participants removed from a Call.
* [callsUpdate](#callsupdate) - Updates information about a Call.

## callsAdd

Registers a new Call.

API method documentation
<https://api.slack.com/methods/calls.add>

### Example Usage

```typescript
import { SlackSpec } from "slack-spec";
import { CallsAddResponse } from "slack-spec/dist/sdk/models/operations";

const sdk = new SlackSpec();

sdk.calls.callsAdd({
  requestBody: {
    createdBy: "temporibus",
    dateStart: 183280,
    desktopAppJoinUrl: "neque",
    externalDisplayId: "fugit",
    externalUniqueId: "magni",
    joinUrl: "odio",
    title: "Mr.",
    users: "ullam",
  },
  token: "nam",
}, {
  slackAuth: "Bearer YOUR_ACCESS_TOKEN_HERE",
}).then((res: CallsAddResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

## callsEnd

Ends a Call.

API method documentation
<https://api.slack.com/methods/calls.end>

### Example Usage

```typescript
import { SlackSpec } from "slack-spec";
import { CallsEndResponse } from "slack-spec/dist/sdk/models/operations";

const sdk = new SlackSpec();

sdk.calls.callsEnd({
  requestBody: {
    duration: 940432,
    id: "0cbb1e31-b8b9-40f3-843a-1108e0adcf4b",
  },
  token: "cupiditate",
}, {
  slackAuth: "Bearer YOUR_ACCESS_TOKEN_HERE",
}).then((res: CallsEndResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

## callsInfo

Returns information about a Call.

API method documentation
<https://api.slack.com/methods/calls.info>

### Example Usage

```typescript
import { SlackSpec } from "slack-spec";
import { CallsInfoResponse } from "slack-spec/dist/sdk/models/operations";

const sdk = new SlackSpec();

sdk.calls.callsInfo({
  id: "21879fce-953f-473e-b7fb-c7abd74dd39c",
  token: "aut",
}, {
  slackAuth: "Bearer YOUR_ACCESS_TOKEN_HERE",
}).then((res: CallsInfoResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

## callsParticipantsAdd

Registers new participants added to a Call.

API method documentation
<https://api.slack.com/methods/calls.participants.add>

### Example Usage

```typescript
import { SlackSpec } from "slack-spec";
import { CallsParticipantsAddResponse } from "slack-spec/dist/sdk/models/operations";

const sdk = new SlackSpec();

sdk.calls.callsParticipantsAdd({
  requestBody: {
    id: "f5d2cff7-c70a-4456-a6d4-36813f16d9f5",
    users: "sapiente",
  },
  token: "quisquam",
}, {
  slackAuth: "Bearer YOUR_ACCESS_TOKEN_HERE",
}).then((res: CallsParticipantsAddResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

## callsParticipantsRemove

Registers participants removed from a Call.

API method documentation
<https://api.slack.com/methods/calls.participants.remove>

### Example Usage

```typescript
import { SlackSpec } from "slack-spec";
import { CallsParticipantsRemoveResponse } from "slack-spec/dist/sdk/models/operations";

const sdk = new SlackSpec();

sdk.calls.callsParticipantsRemove({
  requestBody: {
    id: "e6c55614-6c3e-4250-bb00-8c42e141aac3",
    users: "eum",
  },
  token: "autem",
}, {
  slackAuth: "Bearer YOUR_ACCESS_TOKEN_HERE",
}).then((res: CallsParticipantsRemoveResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

## callsUpdate

Updates information about a Call.

API method documentation
<https://api.slack.com/methods/calls.update>

### Example Usage

```typescript
import { SlackSpec } from "slack-spec";
import { CallsUpdateResponse } from "slack-spec/dist/sdk/models/operations";

const sdk = new SlackSpec();

sdk.calls.callsUpdate({
  requestBody: {
    desktopAppJoinUrl: "nobis",
    id: "8dd6b144-2907-4474-b78a-7bd466d28c10",
    joinUrl: "id",
    title: "Miss",
  },
  token: "neque",
}, {
  slackAuth: "Bearer YOUR_ACCESS_TOKEN_HERE",
}).then((res: CallsUpdateResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```
