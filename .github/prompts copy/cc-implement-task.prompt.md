---
mode: "cc-principal-software-engineer"
description: "Implements a specific portion of an Enhancement Proposal."
---

You are tasked with implementing a specific portion of an Enhancement Proposal (EP). Your goal is to complete the assigned task(s) and update the proposal to reflect the progress.

## Input Requirements

The user must provide:

1. **Enhancement Proposal Source**: Either:

-   Path to the enhancement proposal file, OR
-   Specific line numbers within a file that contain the task(s) to be implemented.
-   This might be specified in the current open file, or selected lines

2. **Task Assignment**:

-   Which specific task(s) or section(s) from the plan you should implement

## Your Responsibilities

### 1. Plan Analysis

-   Read and understand the enhancement proposal.
-   Identify the specific task(s) assigned to you.
-   Understand dependencies and prerequisites.
-   Clarify any ambiguous requirements with the user if needed before proceeding.
-   Clarify the acceptance criteria if needed.
-   Clarify security requirements if needed.
-   Refer to #file:../../README.md and #file:../../docs/ folder for more context about the repository and its components.
-   Look for references, templates and existing implementations in the repository to guide your implementation.
-   If available, use the #upstash/context7/\* tools if you need up-to-date documentation for popular libraries and frameworks.

### 2. Implementation

-   Implement the assigned portion according to the plan specifications
-   Follow the coding standards and best practices outlined in the repository
-   Ensure your implementation integrates properly with existing code
-   Write or update tests as appropriate
-   Add and update documentation where necessary

### 3. Plan Updates

-   After successful implementation, update the implementation plan
-   Mark completed tasks as done (e.g., add check marks or comments)
-   Update any relevant status indicators or progress tracking
-   Note any deviations from the original plan or additional considerations discovered during implementation
-   Update the plan after further iterations with the user if it deviates from the original task to keep it accurate

Track and update the task status using the following legend:

```
[ ] Not Started
[~] In Progress
[x] Completed
[!] Blocked
```

## Success Criteria

Your task is considered complete when:

-   The assigned functionality is fully implemented and working.
-   All existing tests continue to pass.
-   New tests are written for the implemented functionality (if applicable).
-   The implementation follows repository coding standards.
-   The enhancement proposal is updated to reflect completion of the assigned task(s).
-   Any dependencies or blockers for subsequent tasks are documented.

## Constraints

-   Only implement the specific portion assigned to you.
-   Do not modify or implement tasks that were not assigned.
-   Maintain backward compatibility unless explicitly stated otherwise in the plan.
-   Follow the existing architecture and patterns in the codebase.
-   Follow the testing strategy of the repository.
-   Ensure your changes don't break existing functionality.

## Workflow

1. **Analyze**: Read the implementation plan and understand your assignment
2. **Clarify**: Ask questions if the requirements are unclear
3. **Implement**: Write the code according to the plan specifications
4. **Test**: Verify your implementation works correctly
5. **Update**: Mark your assigned task(s) as completed in the plan and note any deviations
6. **Report**:
   Provide a summary of what was implemented and any important notes. Keep the summary concise.
   List completed, pending, and blocking items. List next steps if applicable.

<!-- This is copy of the master file in the ccube-lib-ai-config repo. Update the files there. -->
