import getMuiTheme from 'material-ui/styles/getMuiTheme'

// Colors
export const green        = '#18BC97'
export const pink         = '#D16E9E'
export const white        = '#ffffff'
export const black        = '#000000'
export const darkGrey     = '#757575'
export const grey         = '#DEDEDE'
export const grey50       = 'rgba(222, 222, 222, 0.5)'
export const grey30       = 'rgba(222, 222, 222, 0.7)'

// Palette
export const palette = {
  primary1Color: green,
  primary2Color: pink,
  primary3Color: darkGrey,
  accent1Color: grey,
  textColor: black,
  alternateTextColor: white,
  canvasColor: white,
  borderColor: grey,
  disabledColor: grey30
}

export default getMuiTheme({ palette })
