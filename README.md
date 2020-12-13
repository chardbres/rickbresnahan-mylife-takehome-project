#MyLife Take-Home Project

The purpose of this README is to provide an outline and justification of all project design decisions, as well as instructions regarding app usage.

#### Instructions to build and use app
1. Clone app from GitHub repository using `git clone <repo url>`
2. Navigate to app folder in command line and run `npm install ` or `yarn install` to install project dependencies.
3. In command line, run `npm start` or `yarn start` to host application locally, and interact with app in default browser.
4. Toggle filters ON and OFF with the three filter buttons (Characters, Locations, Quotes), and populate the data table by clicking "Get Data!" button. Application supports any combination of the categories above. Filter is ON when filter button is fully filled in: the category will be added to the table if the button is full, and no data will be added if all buttons are outlines.


###Design Decisions and General Timeline
1. Ensure that task is well-understood and formulate general game-plan.
   - Client requirements are to create a React application that requests data from an endpoint, displays data according to appropriate tags, has clickable toggle buttons to filter data content by tag category, and which has **minimal** appropriate styling.
    - First assumption is that data is organized in such a way that it can be presented easily in a table.
    - Second assumption is that a reasonable number of npm imports is acceptable.
    - **Game Plan:** take an initial look at the data to confirm assumptions. If as expected, go ahead with creating table component to display data, toggle switches to implement filtering functionality, and attempt to populate table with full dataset via API call to endpoint. Use Bootstrap/SASS for simple styling. Once this is successful, complete filtering functionality.
    - **Bonus Objectives:** if there is time, make the table sortable, and implement a few unit tests with Jest.
2. **Step 1:** used Postman to query data endpoint, which returned a JSON file. Noted that each data object is composed of a "tag" key ("character", "location", and "quote") with corresponding "content", and that total file is only ~10kb. Concluded that a table is is the ideal means of data display.
   * Assumption: amount of data is small enough to GET and then store in state for filtering, rather than making separate API calls for each filter selection on tags.
3. **Step 2:** created folder structure and imported known required libraries. Simple file structure should only require a src/ folder for APIs and a folder for the components. Imports so far: react-bootstrap and node-sass (for styling, prefer to use Emotion but there are very few components in this project), axios (for API calls), react-test-renderer (for Jest snapshot testing).
4. **Step 3:** completed Header and DataTable components and ensured successful rendering on local server. Could not succeed with Axios call to given AWS endpoint; discovered that endpoint CORS policy was blocking response to cross-origin request, which I had never seen before. Sidestepped this issue by using `fetch` with a proxy server, and confirmed that table would populate with full list of data.
    * Assumption: deployed app would not require a proxy server as cross-origin request would not be relevant. This is a workaround for local hosting. Axios is not needed at this time.
5. **Step 4:** completed filter function to limit data shown in table based on tags. Decided that function should filter full data array into new array, which would then be used to populate the table. If all filters are selected, then this array will match the full data array. At this point, noted that some cells were blank when full data array was used to populate; this was traced back to misspellings in some "tag" and "content" keys in response data.
   * Assumption: would be best to keep "corrupted" data if possible, as misspelled keys are clearly meant to belong. Should try to tackle this at the end.
6. **Step 5:** created filter button component and successfully implemented onClick/handleChange function that toggles the different filters on and off.
7. **Step 6:** finalized all styling, component labeling, and instructions for app use to be as basic and functional as possible.
8. **Step 7:** determined how to keep data with faulty keys. Decided to iterate through requested data object array at time of API call, copying the values of each object to new object with clean keys, pushing into tempArray, filling data state with this array, and then clearing tempArray.
9. **Future Features:** implement unit and integration testing with Jest/Enzyme. Add more styling to table to allow scrolling. Add sort functionality to table.