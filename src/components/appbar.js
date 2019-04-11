import React from 'react';
import ReactDOM from 'react-dom';
import {
  Box,
  Button,
  Collapsible,
  Heading,
  Grommet,
  Layer,
  ResponsiveContext,
  Stack,
  Text
} from 'grommet';
import { FormClose, Notification } from 'grommet-icons';

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
      >
        <Heading level="3" margin="none">
          Dota2 Ticker
        </Heading>
        <Button
          onClick={() =>
            this.setState(prevState => ({
              showSidebar: !prevState.showSidebar
            }))
          }
        >
          <Stack anchor="top-right">
            <Notification size="large" />
            <Box
              anchor="bottom-left"
              background="red"
              pad={{ horizontal: 'xsmall' }}
              round
            >
              <Text color="white">8</Text>
            </Box>
          </Stack>
        </Button>
      </Box>
    );
  }
}
