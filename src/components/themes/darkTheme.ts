import { createTheme, Theme } from '@mui/material';
import { PaletteOptions } from '@mui/material/styles/createPalette';
import { mainPalette } from './mainTheme';

export const darkTheme: Theme = createTheme({
  palette: Object.assign<PaletteOptions, PaletteOptions>(mainPalette, {
    mode: 'dark',
    background: {
      default: '#282c34',
    },
  }),
});
