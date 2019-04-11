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
      <Box background="brand">
        <Grid fill="vertical" columns={this.state.columns} gap="small">
          <Text size="large">{this.state.match.player1}</Text>
          <Text>vs</Text>
          <Text size="large">{this.state.match.player2}</Text>
        </Grid>
      </Box>
    );
  }
}
