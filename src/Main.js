import React from 'react';
import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';
import EmotionForm from './EmotionForm';

const theme = createMuiTheme({
  palette: {
    primary: { main: '#F81C28' }, // Purple and green play nicely together.
    secondary: { main: '#F7921C' }, // This is just green.A700 as hex.
  },
});

export default function Main() {
  return (
    <ThemeProvider theme={theme}>
      <EmotionForm/>
    </ThemeProvider>
    
  );
}