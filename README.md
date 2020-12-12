#MyLife Take-Home Project

The purpose of this README is to provide an outline and justification of all project design decisions, as well as instructions regarding app usage.


###Design Decisions and General Timeline
1. Ensure that task is well-understood and formulate general game-plan.
   - Client requirements are to create a React application that requests data from an endpoint, displays data according to appropriate tags, has clickable toggle buttons to filter data content, and which has minimal appropriate styling.
    - First assumption is that data is organized in such a way that it can be presented easily in a table.
    - Second assumption is that a reasonable number of npm imports is acceptable.
    - **Game Plan:** take an initial look at the data to confirm assumptions. If as expected, go ahead with creating table component to display data, toggle switches to implement filtering functionality, and attempt to populate table via API call to endpoint. Use Bootstrap for simple styling. Once this is successful, work on filtering functionality. Implement a few simple component unit tests with Jest, which is built into CRA.
    - **Bonus Objectives:** if there is time, make the table sortable.
2. **Step 1:** used Postman to query data endpoint, which returned a JSON file. Noted that each data object is composed of a "tag" ("character", "location", and "quote") with corresponding "content", and that total file is only ~10kb. Concluded that a table is is the ideal means of data display, and also that the amount of data is small enough to GET and then store in state for filtering, rather than making separate API calls for each filter selection on tags.
3. **Step 2:** created folder structure and imported known required libraries. Simple file structure should only require a src/ folder for APIs and a folder for the components. Imports so far: react-bootstrap and node-sass (for styling, prefer to use Emotion but there are very few components in this project), axios (for API calls). 