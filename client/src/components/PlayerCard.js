import React from 'react'

// Material UI
import { withStyles } from '@material-ui/core/styles'
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import { Typography } from '@material-ui/core';

const useStyles = theme => ({
    card: {
      minWidth: 365,
      maxWidth: 365,
      flexWrap: 'wrap'
    },
    media: {
      height: 0,
      paddingTop: '56.25%', // 16:9
    },
    text: {
      minHeight: 40,
    },
    avatar: {
        
      },
});

class PlayerCard extends React.Component {
    
   
    render() {
        const { classes } = this.props;
        return (
            <Card className={classes.card}>
                <CardHeader
                    title={this.props.name}
                />
                <CardContent>
                    <Typography paragraph>
                        {this.props.country}
                    </Typography>
                    <Typography paragraph>
                        Searches: {this.props.searches} 
                    </Typography>
                </CardContent>
            </Card>
        )
    }
}

export default withStyles(useStyles) (PlayerCard);