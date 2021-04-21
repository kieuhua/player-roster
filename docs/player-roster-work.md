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
