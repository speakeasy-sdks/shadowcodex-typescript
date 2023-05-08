# users

### Available Operations

* [usersConversations](#usersconversations) - List conversations the calling user may access.
* [usersDeletePhoto](#usersdeletephoto) - Delete the user profile photo
* [usersGetPresence](#usersgetpresence) - Gets user presence information.
* [usersIdentity](#usersidentity) - Get a user's identity.
* [usersInfo](#usersinfo) - Gets information about a user.
* [usersList](#userslist) - Lists all users in a Slack team.
* [usersLookupByEmail](#userslookupbyemail) - Find a user with an email address.
* [usersProfileGet](#usersprofileget) - Retrieves a user's profile information.
* [usersProfileSet](#usersprofileset) - Set the profile information for a user.
* [usersSetActive](#userssetactive) - Marked a user as active. Deprecated and non-functional.
* [usersSetPhoto](#userssetphoto) - Set the user profile photo
* [usersSetPresence](#userssetpresence) - Manually sets user presence.

## usersConversations

List conversations the calling user may access.

API method documentation
<https://api.slack.com/methods/users.conversations>

### Example Usage

```typescript
import { SlackSpec } from "slack-spec";
import { UsersConversationsResponse } from "slack-spec/dist/sdk/models/operations";

const sdk = new SlackSpec();

sdk.users.usersConversations({
  cursor: "aliquam",
  excludeArchived: false,
  limit: 320565,
  token: "repellat",
  types: "alias",
  user: "corporis",
}, {
  slackAuth: "Bearer YOUR_ACCESS_TOKEN_HERE",
}).then((res: UsersConversationsResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

## usersDeletePhoto

Delete the user profile photo

API method documentation
<https://api.slack.com/methods/users.deletePhoto>

### Example Usage

```typescript
import { SlackSpec } from "slack-spec";
import { UsersDeletePhotoResponse } from "slack-spec/dist/sdk/models/operations";

const sdk = new SlackSpec();

sdk.users.usersDeletePhoto({
  token: "perspiciatis",
}, {
  slackAuth: "Bearer YOUR_ACCESS_TOKEN_HERE",
}).then((res: UsersDeletePhotoResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

## usersGetPresence

Gets user presence information.

API method documentation
<https://api.slack.com/methods/users.getPresence>

### Example Usage

```typescript
import { SlackSpec } from "slack-spec";
import { UsersGetPresenceResponse } from "slack-spec/dist/sdk/models/operations";

const sdk = new SlackSpec();

sdk.users.usersGetPresence({
  token: "nihil",
  user: "mollitia",
}, {
  slackAuth: "Bearer YOUR_ACCESS_TOKEN_HERE",
}).then((res: UsersGetPresenceResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

## usersIdentity

Get a user's identity.

API method documentation
<https://api.slack.com/methods/users.identity>

### Example Usage

```typescript
import { SlackSpec } from "slack-spec";
import { UsersIdentityResponse } from "slack-spec/dist/sdk/models/operations";

const sdk = new SlackSpec();

sdk.users.usersIdentity({
  token: "voluptas",
}, {
  slackAuth: "Bearer YOUR_ACCESS_TOKEN_HERE",
}).then((res: UsersIdentityResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

## usersInfo

Gets information about a user.

API method documentation
<https://api.slack.com/methods/users.info>

### Example Usage

```typescript
import { SlackSpec } from "slack-spec";
import { UsersInfoResponse } from "slack-spec/dist/sdk/models/operations";

const sdk = new SlackSpec();

sdk.users.usersInfo({
  includeLocale: false,
  token: "alias",
  user: "maiores",
}, {
  slackAuth: "Bearer YOUR_ACCESS_TOKEN_HERE",
}).then((res: UsersInfoResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

## usersList

Lists all users in a Slack team.

API method documentation
<https://api.slack.com/methods/users.list>

### Example Usage

```typescript
import { SlackSpec } from "slack-spec";
import { UsersListResponse } from "slack-spec/dist/sdk/models/operations";

const sdk = new SlackSpec();

sdk.users.usersList({
  cursor: "reiciendis",
  includeLocale: false,
  limit: 174658,
  token: "id",
}, {
  slackAuth: "Bearer YOUR_ACCESS_TOKEN_HERE",
}).then((res: UsersListResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

## usersLookupByEmail

Find a user with an email address.

API method documentation
<https://api.slack.com/methods/users.lookupByEmail>

### Example Usage

```typescript
import { SlackSpec } from "slack-spec";
import { UsersLookupByEmailResponse } from "slack-spec/dist/sdk/models/operations";

const sdk = new SlackSpec();

sdk.users.usersLookupByEmail({
  email: "Elda6@gmail.com",
  token: "recusandae",
}, {
  slackAuth: "Bearer YOUR_ACCESS_TOKEN_HERE",
}).then((res: UsersLookupByEmailResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

## usersProfileGet

Retrieves a user's profile information.

API method documentation
<https://api.slack.com/methods/users.profile.get>

### Example Usage

```typescript
import { SlackSpec } from "slack-spec";
import { UsersProfileGetResponse } from "slack-spec/dist/sdk/models/operations";

const sdk = new SlackSpec();

sdk.users.usersProfileGet({
  includeLabels: false,
  token: "omnis",
  user: "quaerat",
}, {
  slackAuth: "Bearer YOUR_ACCESS_TOKEN_HERE",
}).then((res: UsersProfileGetResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

## usersProfileSet

Set the profile information for a user.

API method documentation
<https://api.slack.com/methods/users.profile.set>

### Example Usage

```typescript
import { SlackSpec } from "slack-spec";
import { UsersProfileSetResponse } from "slack-spec/dist/sdk/models/operations";

const sdk = new SlackSpec();

sdk.users.usersProfileSet({
  requestBody: {
    name: "Carla Graham",
    profile: "debitis",
    user: "laudantium",
    value: "eum",
  },
  token: "nemo",
}, {
  slackAuth: "Bearer YOUR_ACCESS_TOKEN_HERE",
}).then((res: UsersProfileSetResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

## usersSetActive

Marked a user as active. Deprecated and non-functional.

API method documentation
<https://api.slack.com/methods/users.setActive>

### Example Usage

```typescript
import { SlackSpec } from "slack-spec";
import { UsersSetActiveResponse } from "slack-spec/dist/sdk/models/operations";

const sdk = new SlackSpec();

sdk.users.usersSetActive({
  token: "recusandae",
}, {
  slackAuth: "Bearer YOUR_ACCESS_TOKEN_HERE",
}).then((res: UsersSetActiveResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

## usersSetPhoto

Set the user profile photo

API method documentation
<https://api.slack.com/methods/users.setPhoto>

### Example Usage

```typescript
import { SlackSpec } from "slack-spec";
import { UsersSetPhotoResponse } from "slack-spec/dist/sdk/models/operations";

const sdk = new SlackSpec();

sdk.users.usersSetPhoto({
  cropW: "esse",
  cropX: "provident",
  cropY: "quis",
  image: "eum",
  token: "reiciendis",
}, {
  slackAuth: "Bearer YOUR_ACCESS_TOKEN_HERE",
}).then((res: UsersSetPhotoResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

## usersSetPresence

Manually sets user presence.

API method documentation
<https://api.slack.com/methods/users.setPresence>

### Example Usage

```typescript
import { SlackSpec } from "slack-spec";
import { UsersSetPresenceResponse } from "slack-spec/dist/sdk/models/operations";

const sdk = new SlackSpec();

sdk.users.usersSetPresence({
  requestBody: {
    presence: "provident",
  },
  token: "aspernatur",
}, {
  slackAuth: "Bearer YOUR_ACCESS_TOKEN_HERE",
}).then((res: UsersSetPresenceResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```
