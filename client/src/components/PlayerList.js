import React from 'react'
import axios from 'axios'

// Components
import PlayerCard from './PlayerCard'

// Material UI
import Grid from '@material-ui/core/Grid';
import { withStyles } from '@material-ui/core/styles'

// Styles
const useStyles = theme => ({
    root: {
      flexGrow: 1,
      margin: '75px auto'
    },
    title: {
      flexGrow: 1,
    },
    gridItem: {
      padding: theme.spacing(2)
    },
    container: {
      marginTop: -80
    },
    paper: {
      padding: theme.spacing(2),
      textAlign: 'center',
      color: theme.palette.text.secondary
    },
  });

class PlayerList extends React.Component {
    constructor() {
        super();
        this.state = {
            player: [],
        };
    }
    componentDidMount() {
        console.log('cDM is running and fetching localhost data');

        axios
            .get('http://localhost:5000/api/players')
            .then(res => {
                this.setState({
                    player: res.data
                });
                console.log(res)
            })
            .catch(err => console.log(err));
    }
    render() {
        const { classes } = this.props;
        return (
            <Grid container className={classes.root} justify="center">
                {this.state.player.map(data => {
                return (
                    <Grid item className={classes.gridItem} s>
                    <PlayerCard
                        key={data.id}
                        name={data.name}
                        country={data.country}
                        searches={data.searches}
                    />
                    </Grid>
                    );
                })}
            </Grid>
        )
    }
}

export default withStyles(useStyles) (PlayerList);