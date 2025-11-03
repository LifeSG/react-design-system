# Introducing enhancement proposal (EP)

EP is a concept adapted from Kubernetes' style of doing enhancement, as referenced from <https://github.com/kubernetes/enhancements/blob/master/keps/NNNN-kep-template/README.md>.

## Why are we doing this

1. We want to have formal peer review for technical solutioning
2. We want to catch solutioning mistakes early in the development phase
    1. Traditional we only have formal review of the implementation after the ticket is done. This poses problem whereby the implementation could have a better alternative solution, and would have been spotted by the team if everyone member could critique on the solution.

## What is EP for

1. Articulating the technical solution in a manner that everyone in the team can understand what the problem is and how does your solution solve the problem
2. To have an audit trail of how did a solution came about
    1. This trail is captured as comments in the gitlab MRs

## What is EP not for

1. It is not for understanding how the application behaves currently
    1. That should be captured as confluence docs, like how we are documenting major features such as fileupload, appGen schema

## Process of creating EP

-   [ ] Make a copy of [this template](./cc-ep-template.md) and name it
        `PNNNN-short-descriptive-title`, where `P` is first letter of the directory, `NNNN` is the running number (with NO
        leading-zero padding). E.g. `A1-new-dropdown-field.md` if the directory is `appGen`
-   [ ] Move the copied file to the related directory e.g. `enhancement-proposal/<feature>`
-   [ ] Populate the EP details
-   [ ] Create an MR for the EP and request for comments from the team
-   [ ] Once MR approved, you can choose to merge the MR back and branch off a new branch, or continue the implementation in the current branch

## FAQ

1. When should we write an EP?
    1. As long as there's a change in feature, EP should be written regardless of storypoints
    2. E.g. of things that doesn't need an EP
        1. Copy updates
        2. Config changes to schema
2. Where does this leave Tech Review (existing process for getting solution alignment)
    1. We will still have Tech Review where necessary, but the EP should be a pre-requisite for the TR
3. Do we add on to a previous EP if we are enhancing existing features
    1. If the previous implementation MR has been merged, a new EP should be created
4. If the EP has been approved by the team and during implementation, new consideration arises, should I call for a review of the EP?
    1. Yes. You should update the EP and submit an MR for review
5. If most of the changes are happening in the frontend (FE) repo, then should we place the ep in the frontend repo?
    1. If majority of the enhancements are on the FE, then the EP should be in the FE.
    2. If both FE and BE have complicated enhancement, then it should have been 2 EPs, one in the front end one in the backend
6. Herman EP is A1 then Jordan EP is A2 but their EP is at the BE. If I have an EP for FE, would my EP in the FE be A3-title?
    1. EPs numbering should be be self contained within a repo.
        1. The purpose of the number is just there to capture a chronological order of changes happening to that repo.
    2. So the expectation here is that your new EP in FE will be A1-title.
