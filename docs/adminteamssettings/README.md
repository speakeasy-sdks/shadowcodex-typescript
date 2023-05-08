# adminTeamsSettings

### Available Operations

* [adminTeamsSettingsInfo](#adminteamssettingsinfo) - Fetch information about settings in a workspace
* [adminTeamsSettingsSetDefaultChannels](#adminteamssettingssetdefaultchannels) - Set the default channels of a workspace.
* [adminTeamsSettingsSetDescription](#adminteamssettingssetdescription) - Set the description of a given workspace.
* [adminTeamsSettingsSetDiscoverability](#adminteamssettingssetdiscoverability) - An API method that allows admins to set the discoverability of a given workspace
* [adminTeamsSettingsSetIcon](#adminteamssettingsseticon) - Sets the icon of a workspace.
* [adminTeamsSettingsSetName](#adminteamssettingssetname) - Set the name of a given workspace.

## adminTeamsSettingsInfo

Fetch information about settings in a workspace

API method documentation
<https://api.slack.com/methods/admin.teams.settings.info>

### Example Usage

```typescript
import { SlackSpec } from "slack-spec";
import { AdminTeamsSettingsInfoResponse } from "slack-spec/dist/sdk/models/operations";

const sdk = new SlackSpec();

sdk.adminTeamsSettings.adminTeamsSettingsInfo({
  teamId: "hic",
  token: "excepturi",
}, {
  slackAuth: "Bearer YOUR_ACCESS_TOKEN_HERE",
}).then((res: AdminTeamsSettingsInfoResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

## adminTeamsSettingsSetDefaultChannels

Set the default channels of a workspace.

API method documentation
<https://api.slack.com/methods/admin.teams.settings.setDefaultChannels>

### Example Usage

```typescript
import { SlackSpec } from "slack-spec";
import { AdminTeamsSettingsSetDefaultChannelsResponse } from "slack-spec/dist/sdk/models/operations";

const sdk = new SlackSpec();

sdk.adminTeamsSettings.adminTeamsSettingsSetDefaultChannels({
  channelIds: "cum",
  teamId: "voluptate",
  token: "dignissimos",
}, {
  slackAuth: "Bearer YOUR_ACCESS_TOKEN_HERE",
}).then((res: AdminTeamsSettingsSetDefaultChannelsResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

## adminTeamsSettingsSetDescription

Set the description of a given workspace.

API method documentation
<https://api.slack.com/methods/admin.teams.settings.setDescription>

### Example Usage

```typescript
import { SlackSpec } from "slack-spec";
import { AdminTeamsSettingsSetDescriptionResponse } from "slack-spec/dist/sdk/models/operations";

const sdk = new SlackSpec();

sdk.adminTeamsSettings.adminTeamsSettingsSetDescription({
  requestBody: {
    description: "reiciendis",
    teamId: "amet",
  },
  token: "dolorum",
}, {
  slackAuth: "Bearer YOUR_ACCESS_TOKEN_HERE",
}).then((res: AdminTeamsSettingsSetDescriptionResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

## adminTeamsSettingsSetDiscoverability

An API method that allows admins to set the discoverability of a given workspace

API method documentation
<https://api.slack.com/methods/admin.teams.settings.setDiscoverability>

### Example Usage

```typescript
import { SlackSpec } from "slack-spec";
import { AdminTeamsSettingsSetDiscoverabilityResponse } from "slack-spec/dist/sdk/models/operations";

const sdk = new SlackSpec();

sdk.adminTeamsSettings.adminTeamsSettingsSetDiscoverability({
  requestBody: {
    discoverability: "numquam",
    teamId: "veritatis",
  },
  token: "ipsa",
}, {
  slackAuth: "Bearer YOUR_ACCESS_TOKEN_HERE",
}).then((res: AdminTeamsSettingsSetDiscoverabilityResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

## adminTeamsSettingsSetIcon

Sets the icon of a workspace.

API method documentation
<https://api.slack.com/methods/admin.teams.settings.setIcon>

### Example Usage

```typescript
import { SlackSpec } from "slack-spec";
import { AdminTeamsSettingsSetIconResponse } from "slack-spec/dist/sdk/models/operations";

const sdk = new SlackSpec();

sdk.adminTeamsSettings.adminTeamsSettingsSetIcon({
  imageUrl: "ipsa",
  teamId: "iure",
  token: "odio",
}, {
  slackAuth: "Bearer YOUR_ACCESS_TOKEN_HERE",
}).then((res: AdminTeamsSettingsSetIconResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

## adminTeamsSettingsSetName

Set the name of a given workspace.

API method documentation
<https://api.slack.com/methods/admin.teams.settings.setName>

### Example Usage

```typescript
import { SlackSpec } from "slack-spec";
import { AdminTeamsSettingsSetNameResponse } from "slack-spec/dist/sdk/models/operations";

const sdk = new SlackSpec();

sdk.adminTeamsSettings.adminTeamsSettingsSetName({
  requestBody: {
    name: "Sophia Predovic",
    teamId: "natus",
  },
  token: "eos",
}, {
  slackAuth: "Bearer YOUR_ACCESS_TOKEN_HERE",
}).then((res: AdminTeamsSettingsSetNameResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```
