import React from 'react'
import PlayerInfo from './PlayerInfo'
import Filters from './Filters'
import { Grid, Typography } from '@material-ui/core'
import { withTheme } from '@material-ui/core/styles'

const Players = function (props) {
    const defaultURL = process.env.API_URL
    
    const list = fetch(defaultURL, {cache: 'no-cache'})
        .then(result => result.json())
        .then(result => result)

    return <div>
        <Typography variant="h3" color="primary">2021 Player Directory</Typography>
        <Filters />
        <Grid container>
            {list.forEach((player, i) => {
                // fill out below props from results of API
                return <PlayerInfo 
                key={i} />
            })}
        </Grid>
    </div>
}

export default withTheme(Players)