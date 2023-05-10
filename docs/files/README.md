# files

### Available Operations

* [filesCommentsDelete](#filescommentsdelete) - Deletes an existing comment on a file.
* [filesDelete](#filesdelete) - Deletes a file.
* [filesInfo](#filesinfo) - Gets information about a file.
* [filesList](#fileslist) - List for a team, in a channel, or from a user with applied filters.
* [filesRemoteAdd](#filesremoteadd) - Adds a file from a remote service
* [filesRemoteInfo](#filesremoteinfo) - Retrieve information about a remote file added to Slack
* [filesRemoteList](#filesremotelist) - Retrieve information about a remote file added to Slack
* [filesRemoteRemove](#filesremoteremove) - Remove a remote file.
* [filesRemoteShare](#filesremoteshare) - Share a remote file into a channel.
* [filesRemoteUpdate](#filesremoteupdate) - Updates an existing remote file.
* [filesRevokePublicURL](#filesrevokepublicurl) - Revokes public/external sharing access for a file
* [filesSharedPublicURL](#filessharedpublicurl) - Enables a file for public/external sharing.
* [filesUpload](#filesupload) - Uploads or creates a file.

## filesCommentsDelete

Deletes an existing comment on a file.

API method documentation
<https://api.slack.com/methods/files.comments.delete>

### Example Usage

```typescript
import { SlackSpec } from "slack-spec";
import { FilesCommentsDeleteResponse } from "slack-spec/dist/sdk/models/operations";

const sdk = new SlackSpec();

sdk.files.filesCommentsDelete({
  requestBody: {
    file: "cum",
    id: "375ed4f6-fbee-441f-b331-7fe35b60eb1e",
  },
  token: "similique",
}, {
  slackAuth: "Bearer YOUR_ACCESS_TOKEN_HERE",
}).then((res: FilesCommentsDeleteResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

## filesDelete

Deletes a file.

API method documentation
<https://api.slack.com/methods/files.delete>

### Example Usage

```typescript
import { SlackSpec } from "slack-spec";
import { FilesDeleteResponse } from "slack-spec/dist/sdk/models/operations";

const sdk = new SlackSpec();

sdk.files.filesDelete({
  requestBody: {
    file: "tempora",
  },
  token: "aspernatur",
}, {
  slackAuth: "Bearer YOUR_ACCESS_TOKEN_HERE",
}).then((res: FilesDeleteResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

## filesInfo

Gets information about a file.

API method documentation
<https://api.slack.com/methods/files.info>

### Example Usage

```typescript
import { SlackSpec } from "slack-spec";
import { FilesInfoResponse } from "slack-spec/dist/sdk/models/operations";

const sdk = new SlackSpec();

sdk.files.filesInfo({
  count: "voluptas",
  cursor: "voluptas",
  file: "voluptas",
  limit: 324405,
  page: "nobis",
  token: "dolorum",
}, {
  slackAuth: "Bearer YOUR_ACCESS_TOKEN_HERE",
}).then((res: FilesInfoResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

## filesList

List for a team, in a channel, or from a user with applied filters.

API method documentation
<https://api.slack.com/methods/files.list>

### Example Usage

```typescript
import { SlackSpec } from "slack-spec";
import { FilesListResponse } from "slack-spec/dist/sdk/models/operations";

const sdk = new SlackSpec();

sdk.files.filesList({
  channel: "adipisci",
  count: "minus",
  page: "dolores",
  showFilesHiddenByLimit: false,
  token: "blanditiis",
  tsFrom: 4492.92,
  tsTo: 2962.42,
  types: "aliquam",
  user: "officiis",
}, {
  slackAuth: "Bearer YOUR_ACCESS_TOKEN_HERE",
}).then((res: FilesListResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

## filesRemoteAdd

Adds a file from a remote service

API method documentation
<https://api.slack.com/methods/files.remote.add>

### Example Usage

```typescript
import { SlackSpec } from "slack-spec";
import { FilesRemoteAddResponse } from "slack-spec/dist/sdk/models/operations";

const sdk = new SlackSpec();

sdk.files.filesRemoteAdd({
  externalId: "temporibus",
  externalUrl: "ullam",
  filetype: "adipisci",
  indexableFileContents: "cum",
  previewImage: "blanditiis",
  title: "Ms.",
  token: "hic",
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

sdk.files.filesRemoteInfo({
  externalId: "nesciunt",
  file: "culpa",
  token: "corrupti",
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

sdk.files.filesRemoteList({
  channel: "pariatur",
  cursor: "totam",
  limit: 940210,
  token: "exercitationem",
  tsFrom: 7507.65,
  tsTo: 246.19,
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

sdk.files.filesRemoteRemove({
  externalId: "rerum",
  file: "sed",
  token: "reiciendis",
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

sdk.files.filesRemoteShare({
  channels: "explicabo",
  externalId: "asperiores",
  file: "facilis",
  token: "voluptate",
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

sdk.files.filesRemoteUpdate({
  externalId: "expedita",
  externalUrl: "ab",
  file: "iste",
  filetype: "dolore",
  indexableFileContents: "laborum",
  previewImage: "sed",
  title: "Ms.",
  token: "commodi",
}, {
  slackAuth: "Bearer YOUR_ACCESS_TOKEN_HERE",
}).then((res: FilesRemoteUpdateResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

## filesRevokePublicURL

Revokes public/external sharing access for a file

API method documentation
<https://api.slack.com/methods/files.revokePublicURL>

### Example Usage

```typescript
import { SlackSpec } from "slack-spec";
import { FilesRevokePublicURLResponse } from "slack-spec/dist/sdk/models/operations";

const sdk = new SlackSpec();

sdk.files.filesRevokePublicURL({
  requestBody: {
    file: "quidem",
  },
  token: "explicabo",
}, {
  slackAuth: "Bearer YOUR_ACCESS_TOKEN_HERE",
}).then((res: FilesRevokePublicURLResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

## filesSharedPublicURL

Enables a file for public/external sharing.

API method documentation
<https://api.slack.com/methods/files.sharedPublicURL>

### Example Usage

```typescript
import { SlackSpec } from "slack-spec";
import { FilesSharedPublicURLResponse } from "slack-spec/dist/sdk/models/operations";

const sdk = new SlackSpec();

sdk.files.filesSharedPublicURL({
  requestBody: {
    file: "voluptas",
  },
  token: "unde",
}, {
  slackAuth: "Bearer YOUR_ACCESS_TOKEN_HERE",
}).then((res: FilesSharedPublicURLResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

## filesUpload

Uploads or creates a file.

API method documentation
<https://api.slack.com/methods/files.upload>

### Example Usage

```typescript
import { SlackSpec } from "slack-spec";
import { FilesUploadResponse } from "slack-spec/dist/sdk/models/operations";

const sdk = new SlackSpec();

sdk.files.filesUpload({
  channels: "architecto",
  content: "suscipit",
  file: "sapiente",
  filename: "debitis",
  filetype: "illo",
  initialComment: "reiciendis",
  threadTs: 193,
  title: "Ms.",
  token: "maiores",
}, {
  slackAuth: "Bearer YOUR_ACCESS_TOKEN_HERE",
}).then((res: FilesUploadResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```
