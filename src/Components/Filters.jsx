import React from 'react'
import { Button, Grid, MenuItem, Select, Typography } from '@material-ui/core'
import { states } from '../data/states'
import { withTheme } from '@material-ui/core/styles'

const Filters = props => {
    return <Grid container>
        <Grid item xs={2}><Typography variant="h5" color="secondary">Filter By:</Typography></Grid>
        <Grid item xs={5}>
            <Typography variant="subtitle2">Status</Typography>
            <Button variant="outlined" color="primary" id="activeButton">Active</Button>
            <Button variant="outlined" color="secondary" id="inactiveButton">Inactive</Button>
        </Grid>
        <Grid item xs={3}>
            <Typography variant="subtitle2">State</Typography>
            <Select id="stateFilter">
                {states.map((state, i) => <MenuItem key={i} value={state.abbreviation} || }>{state.name}</MenuItem>)}
            </Select>
        </Grid>
        <Grid item xs={2}>
            <Typography variant="subtitle2">Reset</Typography>
            <Button variant="outlined" color="primary" id="clearButton">Clear</Button>

    </Grid>
}

export default withTheme(Filters)