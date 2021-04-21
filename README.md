# work on player-roster project
Here are the list of changes to fix the bugs in the project

### 1. Syntax Error in src/Components/Filters.jsx
```
 delete "|| }" 
{states.map((state, i) => <MenuItem key={i} value={state.abbreviation} || }>{state.name}</MenuItem>)}
dd </Grid> at the end
```
### 2. Syntax Error in src/Components/PlayerInfo.jsx
```
missing </Card>
```

### 3. ESlint Erro: Parsing error: Unexpected token <
```
change in .eslintrc.json
//"parser": "esprima",
  "parser": "babel-eslint",
``` 
### 4. fix assigned a value but never used 
```
in src/Components/Filters.jsx: remove props
in src/Components/PlayerInfo.jsx: use {state}, {gender}, {status}
in src/Components/Players.jsx: use props.theme in <div>
```

### 5. fetch problem in src/Components/Players.jsx
```
add useState hook for data,hasError
add useEffect hook for fetching data from cloud or local server
add <div> to display hasError
change forEach() with map()
add player prop to <PlayerInfo>
```

### 6. change <Grid> in src/Components/PlayerInfo.jsx
```
change props to props.player
change top <Grid> sx={12} to sx={3}
change <Grid> sx={12} to sx={6} for name and age
change <Grid> sx={12} to sx={4} for state, gender, status
```

### 7. add local server.js
```
Sorry, I didn't read the README.md in the project, so I didn't see the amazon cloud API link,
so I copy mocks/mockData.js and create server.js to fetch the data to the client. 
to start server: npm run server
It works before, but ater modify Player.jsx to work with cloud API, the local server not
fetching correctly.
```

### 8. Create .env 
```
When change .env, need to restart the client, npm start
```
### 9. future work for src/Components/PlayerInfo.jsx
````
add padding m={3} or p={3} and centeralize <Card> 
````

### 10. Add Active and Inactive feature
```
add onActive handler in Players.js
add onClick() handler to Active Button in Filters.jsx
```

### 11. Add Select State feature
```
add onState handler in Players.js
add onChange() handler to Select in Filters.jsx
```
### 12. Add Clear feature
```
add onClear handler in Players.jss
add onClick() handler to Clear button in Filters.jsx
```
### 13. future work for Filters.jsx
```
Clear button didn't clear the state name
```
### 14. remain issues about theme
````
not clear about how to use theme prop in App.js
````
### 14 player-roster-works.md in docs/
````
player-roster-works.md, fetch_cloud.png, Filter_By_Alaska.png Filter_By_Alaska_inactive.png Filter_By_Clear.png Filter_By_Inactive.png fetch_server.png
````

# Demosphere Debugging Test
Welcome! You have received this repo that replicates one of our existing products for Player Rosters. It contains a list of players with specific characteristics for each player like name, age, gender or which state they are from. However, due to some coding errors we are unable to run this app to see the preview as sent by the original developer. 

![App Preview](preview.png "App Preview")

### Goal
* Get the app running. A successful run would show you what is seen in the preview image.
* For this test you're required to make all of the unit tests pass (see `src/App.test.js`) - without modifying the tests. 
* Make all the lint rules pass.

#### Helpful Tips:
* The dataset is loaded from https://dii-test.s3.amazonaws.com/players.json and should be accessible as an environment variable from a `.env` file.
* You may download any additional packages or libraries you might need for this project.

#### Bonus Points:

* Based on the dataset, how you would you model the backend to persist the data for rosters and players. (The answer can be in pseudocode or however you prefer.)

* If you have modeled your data, how will you design your API endpoints to get data from backend? (The answer can be in pseudocode or however you prefer.)

* If you see opportunities to refactor the code, refactor the code.

### Evaluation
Please document your changes well and make as many atomic commits as you feel are necessary for someone to track your changes.
We will be evaluating the following:

1. Adopting and using modern best practices
2. Coding style
3. Attention to detail
4. Clarity in communication
5. Robustness of testing, both manual and automatic testing
6. Ability to work with an API, Database Modeling

Thank you and Good Luck!

### Submission
Fork this repository and submit a PR/MR when you are done with your solution, make your submission accessible for reviewer.
If you have any questions at all regarding the test, please create an issue in the master repo. Thank you!
