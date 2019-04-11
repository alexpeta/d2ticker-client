import React from 'react';
import ReactDOM from 'react-dom';
import { Box, Grid, Text } from 'grommet';

export class ListItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      match: props.match,
      columns: {
        size: 'auto',
        count: 3
      }
    };
  }

  render() {
    return (
      <Box background="#18171c" pad="small" margin="small">
        <Grid
          fill="horizontal"
          columns={this.state.columns}
          align="center"
          justifyContent="center"
          justify="center"
        >
          <Text size="xxlarge">{this.state.match.team1}</Text>
          <Text size="large">vs</Text>
          <Text size="xxlarge">{this.state.match.team2}</Text>
        </Grid>
      </Box>
    );
  }
}
