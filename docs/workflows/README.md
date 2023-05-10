# workflows

### Available Operations

* [workflowsStepCompleted](#workflowsstepcompleted) - Indicate that an app's step in a workflow completed execution.
* [workflowsStepFailed](#workflowsstepfailed) - Indicate that an app's step in a workflow failed to execute.
* [workflowsUpdateStep](#workflowsupdatestep) - Update the configuration for a workflow extension step.

## workflowsStepCompleted

Indicate that an app's step in a workflow completed execution.

API method documentation
<https://api.slack.com/methods/workflows.stepCompleted>

### Example Usage

```typescript
import { SlackSpec } from "slack-spec";
import { WorkflowsStepCompletedResponse } from "slack-spec/dist/sdk/models/operations";

const sdk = new SlackSpec();

sdk.workflows.workflowsStepCompleted({
  outputs: "vitae",
  token: "rerum",
  workflowStepExecuteId: "tempora",
}, {
  slackAuth: "Bearer YOUR_ACCESS_TOKEN_HERE",
}).then((res: WorkflowsStepCompletedResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

## workflowsStepFailed

Indicate that an app's step in a workflow failed to execute.

API method documentation
<https://api.slack.com/methods/workflows.stepFailed>

### Example Usage

```typescript
import { SlackSpec } from "slack-spec";
import { WorkflowsStepFailedResponse } from "slack-spec/dist/sdk/models/operations";

const sdk = new SlackSpec();

sdk.workflows.workflowsStepFailed({
  error: "quis",
  token: "inventore",
  workflowStepExecuteId: "fugit",
}, {
  slackAuth: "Bearer YOUR_ACCESS_TOKEN_HERE",
}).then((res: WorkflowsStepFailedResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

## workflowsUpdateStep

Update the configuration for a workflow extension step.

API method documentation
<https://api.slack.com/methods/workflows.updateStep>

### Example Usage

```typescript
import { SlackSpec } from "slack-spec";
import { WorkflowsUpdateStepResponse } from "slack-spec/dist/sdk/models/operations";

const sdk = new SlackSpec();

sdk.workflows.workflowsUpdateStep({
  inputs: "cumque",
  outputs: "quae",
  stepImageUrl: "perferendis",
  stepName: "velit",
  token: "aspernatur",
  workflowStepEditId: "eum",
}, {
  slackAuth: "Bearer YOUR_ACCESS_TOKEN_HERE",
}).then((res: WorkflowsUpdateStepResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```
