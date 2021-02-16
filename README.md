# 
You've recently been reassigned as a tester to this web project, and a bunch of the tests are broken or nonxeistent! Being the proactive tester that you are, you want to jump in and make sure that any tests for the project actually test the requirements for the application.
(We use nightwatch for our tests.)

# Prerequisites
Have a recent version of chrome, and have NodeJS installed.

# Setup
As part of this assessment, you'll need to use npm to install the dependencies of this project. It's pretty straightforward:
* [Install NodeJS](https://nodejs.org/en/) if you haven't already
* Navigate to the project folder
* Run `npm install`
* Run `npx nightwatch`

# Test Requirements
We want "great" coverage for our tests, so make sure to hit all these marks:

## /
* You can search for content with the quick search bar
* Dropdown menus are navigable
* All footer links work
* Free trial link takes you to a registration page
* We have a link somewhere on the page to schedule a demo

## /search
* You can search for articles
* You can filter via tag

## /powershell
* You can search for commands
* Links to command articles work

# Submitting your results
You'll want to fork this repository, make your changes, and then send a pull request to this repository to merge your fork into ours.

# Lastly
All of the broken tests are in the `tests` folder. You shouldn't have to muck about in `nightwatch.conf.js` or anything like that. Remember, human eyes are going to be reviewing the tests and how they perform. No robots here. As long as the test content meets the test requirements, you can completely re-write a test. You'll get bonus points for making the tests even more resilient, and for creativity!