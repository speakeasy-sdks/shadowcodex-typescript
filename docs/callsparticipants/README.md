# callsParticipants

### Available Operations

* [callsParticipantsAdd](#callsparticipantsadd) - Registers new participants added to a Call.
* [callsParticipantsRemove](#callsparticipantsremove) - Registers participants removed from a Call.

## callsParticipantsAdd

Registers new participants added to a Call.

API method documentation
<https://api.slack.com/methods/calls.participants.add>

### Example Usage

```typescript
import { SlackSpec } from "slack-spec";
import { CallsParticipantsAddResponse } from "slack-spec/dist/sdk/models/operations";

const sdk = new SlackSpec();

sdk.callsParticipants.callsParticipantsAdd({
  requestBody: {
    id: "cdca4251-904e-4523-87e0-bc7178e4796f",
    users: "dolores",
  },
  token: "deserunt",
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

sdk.callsParticipants.callsParticipantsRemove({
  requestBody: {
    id: "70c68828-2aa4-4825-a2f2-22e9817ee17c",
    users: "nam",
  },
  token: "vero",
}, {
  slackAuth: "Bearer YOUR_ACCESS_TOKEN_HERE",
}).then((res: CallsParticipantsRemoveResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```
