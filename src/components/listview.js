import React from 'react';
import ReactDOM from 'react-dom';
import { ListItem } from './listitem';
import { Grid, Text } from 'grommet';

export class ListView extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      matches: props.matches,
      rows: {
        size: 'auto'
      }
    };
  }

  render() {
    return (
      <Grid fill="horizontal" rows={this.state.rows} gap="small">
        {this.state.matches.map(match => (
          <ListItem match={match} />
        ))}
      </Grid>
    );
  }
}
