import { createMuiTheme } from '@material-ui/core/styles';

import { indigo, deepPurple } from '@material-ui/core/colors/';

export default createMuiTheme({
  palette: {
    primary: indigo,
    secondary: deepPurple,
  },
  status: {
    danger: 'orange',
  },
});
