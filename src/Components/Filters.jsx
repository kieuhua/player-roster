//import {React, useState} from 'react'
import React from 'react'
import { Button, Grid, MenuItem, Select, Typography } from '@material-ui/core'
import { states } from '../data/states'
import { withTheme } from '@material-ui/core/styles'

//const Filters = props => {
const Filters = (props) => {
    //const [curState, setCurState] = useState("")
    const onActive = (value) => {
        props.onActive(value)
    }
    const onState = (event) => {
        console.log("Filters, state is: ", event.target.value)
        props.onState(event.target.value)
    } 
    /** I don't know how to clear the Select field yet */
    const onClear = () => {
        //setCurState("All")
        props.onClear()
    }
    

    return <Grid container>
        <Grid item xs={2}><Typography variant="h5" color="secondary">Filter By:</Typography></Grid>
        <Grid item xs={5}>
            <Typography variant="subtitle2">Status</Typography>
            <Button variant="outlined" color="primary" id="activeButton" onClick={() => onActive('active')}>Active</Button>
            <Button variant="outlined" color="secondary" id="inactiveButton" onClick={() => onActive('inactive')}>Inactive</Button>
        </Grid>
        <Grid item xs={3}>
            <Typography id="state" variant="subtitle2">State</Typography>
            <Select id="stateFilter" labelId="state" onChange={onState} >
                {states.map((state, i) => <MenuItem key={i} value={state.abbreviation} >{state.name}</MenuItem>)}
            </Select>
        </Grid>
        <Grid item xs={2}>
            <Typography variant="subtitle2">Reset</Typography>
            <Button variant="outlined" color="primary" id="clearButton" onClick={onClear}>Clear</Button>
        </Grid>
    </Grid>
}

export default withTheme(Filters)