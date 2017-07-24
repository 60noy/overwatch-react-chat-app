import getMuiTheme from 'material-ui/styles/getMuiTheme'
import { primary, secondary, primaryDarker, accent } from './colors'

const customTheme = getMuiTheme({
  fontFamily: 'Roboto, sans-serif',
  borderRadius: 2,

  palette: {
    primary1Color: secondary,
    primary2Color: primary,
    primary3Color: primaryDarker,
    accent1Color: accent,
    accent2Color: secondary,
    accent3Color: secondary,
    textColor: '#000',
    alternateTextColor: '#fff',
    canvasColor: '#fff',

  },
  raisedButton: {
    primaryColor: primary,
    secondaryColor: secondary,
  },
})

export default customTheme
