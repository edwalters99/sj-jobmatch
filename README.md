# swipejobs job match app

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Deployed version

This project has been deployed to [https://swipejobs-jobmatches.netlify.app/](https://swipejobs-jobmatches.netlify.app/)

## Additional dependencies
- axios ^0.27.2
- luxon ^2.4.0
- react-icons ^4.4.0
- react-spinners ^0.12.0

---------------------------------------------------------------

## Available Scripts

In the project directory, you can run:

### `npm install`

To install required dependencies

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

---------------------------------------------------------------

## Approach

I chose to create separate components for each section of the JobCard. I thought that this would be beneficial for testing as I could create a test suite for each section that displays data within the card. If the card were to be redesigned, this modular approach would ensure that these components could be re-used  / re-assembled in a different order etc. The relevant CSS and jest tests are compartmentalized in each folder. The downside was that there are more files & folders to work with so the project may appear more complex at first sight. 

I started by designing the file structure. I then created the JobCard subcomponents and CSS, using hard coded data to ensure that the style matched the design. I then implemented the API call functionality, passed the data to the components, processed it for formatting and tested that it still matched the design.
I then wrote test suites for the components. This was useful as it prompted me to consider edge cases that might cause a component to fail if it received undefined data for example.

---------------------------------------------------------------

## Assumptions

I made the following assumptions:

- Direct access to images / logos / style guide / figma design are unavailable. I emulated the design to the best of my ability from the supplied image.

- The page will be viewed primarily on tablet or phone devices. I ensured that the card has a max-width so it looks acceptable on large screens, but I didn't create a full desktop design. This would involve creating a page design from scratch, likely involving multiple cards in a grid pattern on the page. (CSS Grid or Flexbox)

- I chose to display the confirmation/denial message when a job is accepted/rejected directly underneath the buttons as I felt that this was the cleanest and simplest visibility for the user.

- Authentication is not required for the API GET requests (and not currently planned). If authentication were to be implemented changes would need to be made to the axios functions.

- There is an attribute in the ‘profile' JSON named `maxJobDistance`. Since the two example jobs returned by 'matches' are within this distance, I assume that filtering is handled by the back-end and additional filtering/checks are not required in React.

- JSON data is inconsistent between the two example job Matches. (i.e. There is no phone number available for Report To in one example, and in the other example there are no Requirements supplied). I assumed that other data may be inconsistent. I guarded for & built test cases to handle missing/empty data gracefully.

---------------------------------------------------------------

## Improvements

- API Calls are made from functions within JobMatches and JobCard. I would have preferred to separate them out to a 'services' folder for modularity / re-use. But I relied on these functions modifying local state (errors and loading status). Without implementing global state (my previous React project used Redux) I was unsure how to move these functions out of the components. This also caused me a problem in finding a way to test the API calls using jest. This is something that I need to study and investigate further.

- To implement global CSS variables that inherit into the individual components. Currently to make a change such as the background colour to the card, CSS properties would need to be amended across a few components. This isn't ideal. 

---------------------------------------------------------------

## Screenshots
<img src="/public/images/screenshot.jpg" width="250" alt="Screenshot">
<img src="/public/images/screenshot_noshifts.jpg" width="250" alt="Screenshot - No Shifts">
<img src="/public/images/screenshot_nomatches.jpg" width="250" alt="Screenshot - No Job Matches">
<img src="/public/images/screenshot_errors.jpg" width="250" alt="Screenshot - Errors">
