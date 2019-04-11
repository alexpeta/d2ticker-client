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
import { ListView } from './components/listview';
import { AppBar } from './components/appbar';

const theme = {
  global: {
    font: {
      family: 'Roboto',
      brand: '#228BE6',
      size: '14px',
      height: '20px'
    }
  }
};

class MainApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showSidebar: false,
      matches: [{ id: 1, team1: 'Alliance', team2: 'Navi' }]
    };
  }
  render() {
    const { showSidebar } = this.state;

    return (
      <Grommet theme={theme} full>
        <ResponsiveContext.Consumer>
          {size => (
            <Box fill>
              <AppBar>
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
              </AppBar>
              <Box direction="row" flex overflow={{ horizontal: 'hidden' }}>
                <Box flex align="center" justify="center">
                  <ListView matches={this.state.matches} />
                </Box>
                {!showSidebar || size !== 'small' ? (
                  <Collapsible direction="horizontal" open={showSidebar}>
                    <Box
                      flex
                      width="medium"
                      background="light-2"
                      elevation="small"
                      align="center"
                      justify="center"
                    >
                      sidebar
                    </Box>
                  </Collapsible>
                ) : (
                  <Layer>
                    <Box
                      background="light-2"
                      tag="header"
                      justify="end"
                      align="center"
                      direction="row"
                    >
                      <Button
                        icon={<FormClose />}
                        onClick={() => this.setState({ showSidebar: false })}
                      />
                    </Box>
                    <Box
                      fill
                      background="light-2"
                      align="center"
                      justify="center"
                    >
                      sidebar
                    </Box>
                  </Layer>
                )}
              </Box>
            </Box>
          )}
        </ResponsiveContext.Consumer>
      </Grommet>
    );
  }
}

// ========================================

ReactDOM.render(<MainApp />, document.getElementById('root'));
