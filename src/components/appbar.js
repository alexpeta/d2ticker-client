import React from 'react';
import ReactDOM from 'react-dom';
import { Box, Grid, Text } from 'grommet';

export class AppBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      properties: props
    };
  }

  render() {
    return (
      <Box
        tag="header"
        direction="row"
        align="center"
        justify="between"
        background="brand"
        pad={{ left: 'medium', right: 'small', vertical: 'small' }}
        elevation="medium"
        style={{ zIndex: '1' }}
        {...this.state.properties}
      />
    );
  }
}
