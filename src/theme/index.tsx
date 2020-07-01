import { createMuiTheme } from '@material-ui/core/styles';

declare module '@material-ui/core/styles/createPalette' {
  interface Palette {
    greyBackground: Palette['primary'];
  }
  interface PaletteOptions {
    greyBackground: PaletteOptions['primary'];
  }
}

export const myTheme = createMuiTheme({
  palette: {
    greyBackground: {
      main: '#E5E5E5',
    },
  },
});
