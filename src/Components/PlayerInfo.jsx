import React from 'react'
import { Card, Grid,Typography } from '@material-ui/core'

const PlayerInfo = props => {
    const { name, age, state, gender, status } = props.player
    return <Grid item xs={3} lg={3}>
        <Card className="playerInfo" variant="outlined">
            <Grid container>
                <Grid item xs={6} lg={8}>
                    <Typography variant="subtitle1">Name</Typography>
                    <Typography variant="body2">{name}</Typography>
                </Grid>
                <Grid item xs={6} lg={4}>
                    <Typography variant="subtitle1">Age</Typography>
                    <Typography variant="body2">{age}</Typography>
                </Grid>
                <Grid item xs={4} lg={4}>
                    <Typography variant="subtitle1">State</Typography>
                    <Typography variant="body2">{state}</Typography>
                </Grid>
                <Grid item xs={4} lg={4}>
                    <Typography variant="subtitle1">Gender</Typography>
                    <Typography variant="body2">{gender}</Typography>
                </Grid>
                <Grid item xs={4} lg={4}>
                    <Typography variant="subtitle1">Status</Typography>
                    <Typography variant="body2">{status}</Typography>
                </Grid>
            </Grid>
        </Card>
     </Grid>
}

export default PlayerInfo