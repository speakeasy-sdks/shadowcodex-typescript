# filesRemote

### Available Operations

* [filesRemoteAdd](#filesremoteadd) - Adds a file from a remote service
* [filesRemoteInfo](#filesremoteinfo) - Retrieve information about a remote file added to Slack
* [filesRemoteList](#filesremotelist) - Retrieve information about a remote file added to Slack
* [filesRemoteRemove](#filesremoteremove) - Remove a remote file.
* [filesRemoteShare](#filesremoteshare) - Share a remote file into a channel.
* [filesRemoteUpdate](#filesremoteupdate) - Updates an existing remote file.

## filesRemoteAdd

Adds a file from a remote service

API method documentation
<https://api.slack.com/methods/files.remote.add>

### Example Usage

```typescript
import { SlackSpec } from "slack-spec";
import { FilesRemoteAddResponse } from "slack-spec/dist/sdk/models/operations";

const sdk = new SlackSpec();

sdk.filesRemote.filesRemoteAdd({
  externalId: "magni",
  externalUrl: "aperiam",
  filetype: "saepe",
  indexableFileContents: "numquam",
  previewImage: "veniam",
  title: "Ms.",
  token: "officiis",
}, {
  slackAuth: "Bearer YOUR_ACCESS_TOKEN_HERE",
}).then((res: FilesRemoteAddResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

## filesRemoteInfo

Retrieve information about a remote file added to Slack

API method documentation
<https://api.slack.com/methods/files.remote.info>

### Example Usage

```typescript
import { SlackSpec } from "slack-spec";
import { FilesRemoteInfoResponse } from "slack-spec/dist/sdk/models/operations";

const sdk = new SlackSpec();

sdk.filesRemote.filesRemoteInfo({
  externalId: "beatae",
  file: "laudantium",
  token: "exercitationem",
}, {
  slackAuth: "Bearer YOUR_ACCESS_TOKEN_HERE",
}).then((res: FilesRemoteInfoResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

## filesRemoteList

Retrieve information about a remote file added to Slack

API method documentation
<https://api.slack.com/methods/files.remote.list>

### Example Usage

```typescript
import { SlackSpec } from "slack-spec";
import { FilesRemoteListResponse } from "slack-spec/dist/sdk/models/operations";

const sdk = new SlackSpec();

sdk.filesRemote.filesRemoteList({
  channel: "praesentium",
  cursor: "cum",
  limit: 386827,
  token: "dolorum",
  tsFrom: 5300.89,
  tsTo: 6223.85,
}, {
  slackAuth: "Bearer YOUR_ACCESS_TOKEN_HERE",
}).then((res: FilesRemoteListResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

## filesRemoteRemove

Remove a remote file.

API method documentation
<https://api.slack.com/methods/files.remote.remove>

### Example Usage

```typescript
import { SlackSpec } from "slack-spec";
import { FilesRemoteRemoveResponse } from "slack-spec/dist/sdk/models/operations";

const sdk = new SlackSpec();

sdk.filesRemote.filesRemoteRemove({
  externalId: "hic",
  file: "expedita",
  token: "debitis",
}, {
  slackAuth: "Bearer YOUR_ACCESS_TOKEN_HERE",
}).then((res: FilesRemoteRemoveResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

## filesRemoteShare

Share a remote file into a channel.

API method documentation
<https://api.slack.com/methods/files.remote.share>

### Example Usage

```typescript
import { SlackSpec } from "slack-spec";
import { FilesRemoteShareResponse } from "slack-spec/dist/sdk/models/operations";

const sdk = new SlackSpec();

sdk.filesRemote.filesRemoteShare({
  channels: "neque",
  externalId: "dolorum",
  file: "nostrum",
  token: "officia",
}, {
  slackAuth: "Bearer YOUR_ACCESS_TOKEN_HERE",
}).then((res: FilesRemoteShareResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

## filesRemoteUpdate

Updates an existing remote file.

API method documentation
<https://api.slack.com/methods/files.remote.update>

### Example Usage

```typescript
import { SlackSpec } from "slack-spec";
import { FilesRemoteUpdateResponse } from "slack-spec/dist/sdk/models/operations";

const sdk = new SlackSpec();

sdk.filesRemote.filesRemoteUpdate({
  externalId: "dolorum",
  externalUrl: "corrupti",
  file: "accusamus",
  filetype: "tempora",
  indexableFileContents: "atque",
  previewImage: "fugit",
  title: "Mrs.",
  token: "fugiat",
}, {
  slackAuth: "Bearer YOUR_ACCESS_TOKEN_HERE",
}).then((res: FilesRemoteUpdateResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```
