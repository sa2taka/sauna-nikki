import { createTheme, Theme } from '@mui/material';
import { PaletteOptions } from '@mui/material/styles/createPalette';
import { mainPalette } from './mainTheme';

export const lightTheme: Theme = createTheme({
  palette: Object.assign<PaletteOptions, PaletteOptions>(mainPalette, {
    mode: 'light',
    background: {
      default: '#ededed',
    },
  }),
});
