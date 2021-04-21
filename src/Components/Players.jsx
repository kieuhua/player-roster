import {React, useState, useEffect} from 'react'
import PlayerInfo from './PlayerInfo'
import Filters from './Filters'
import { Grid, Typography } from '@material-ui/core'
import { withTheme } from '@material-ui/core/styles'

const Players = function (props) {
    const [alldata, setAllData] = useState([])
    const [data, setData] = useState([])
    const [hasError, setHasError] = useState("")
    //const defaultURL = process.env.REACT_APP_API_URL2
    
    useEffect( async () => {
        //const list = await fetch(defaultURL, {cache: 'no-cache'})
        const list = await fetch("https://dii-test.s3.amazonaws.com/players.json")
            .then(result => result.json())
            .then(result => result)
            .catch(err => setHasError(err))
        
        setAllData(list)
        setData(list)
    },[])
    //console.log(data)
    // need to filter
    const onActive = ( active ) => {
        console.log("Players, onActive: ", active)
        const tdata = data.filter( obj => obj.status == active )     // filter on status
        console.log(tdata.length)
        setData(tdata)
    }
    const onState = (state) => {
        console.log(state)
        const tdata = alldata.filter( obj => obj.state == state )
        console.log("players new tdata: ", tdata)
        setData(tdata)
    }
    const onClear = () => {
        setData(alldata)
    }
    return <div theme={props.theme}>
        { hasError != "" &&
        <div>Error in fetching Data, {hasError}.</div>
        }
        <Typography variant="h3" color="primary">2021 Player Directory</Typography>
        <Filters onActive={onActive} onState={onState} onClear={onClear} />
        { data.length > 0 && 
        <Grid container>
            {data.map((player, i) => {
                // fill out below props from results of API
                return <PlayerInfo player={player} key={i} />
            })}
        </Grid>
        }
    </div>
}

export default withTheme(Players)