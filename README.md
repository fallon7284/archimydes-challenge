This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Status

The challenge is mostly finished in terms of functionality.  That said, there is plenty left unfinished in terms of styling, session persistence, and some navigation flow.

The gist laid out well more than 6-8 hours of work.

In any case, what exists is this:

## Login

A user can login as either an Admin or a User role.

## Admin

If logged in as an Admin, all stories are fetched from the backend and we navigate to /stories, to a table view.
In this view, a user is able to sort by either ID or Complexity.  A user can toggle ascending or descending sort by clicking the same category multiple times.  A user can also filter results by type.

In the table view, an admin user can click on any row in the table to select a single story and navigate to /stories/:id, an expanded view of all that user story's details.  In this single-story view, an admin user is provided two buttons to add a status to the story object.  The admit can select accept or reject, and doing so will navigate the user back to the list view, where accepted stories will be highlighted in green, and rejected stories in red.

## User

If logged in as a User, the user will be navigated first to the create story view where they will find a form to submit a new user story.  Fields will be validated and if not correct an error modal will open which can be clicked to close.  If fields validate successfully, a new story will be posted to the database, returned, and added to the user's story list in the redux store, and we navigate to the story table view.  This is the same view as the admin list, but shows only the user's own created stories, and we are not able to click the items to navigate to the detail view to change status.  A user is still able to sort and filter.
