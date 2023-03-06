import React from "react";
import { addDecorator } from "@storybook/react";
import { MemoryRouter } from "react-router-dom";
import { createTheme } from '@mui/material/styles';
import { ThemeProvider } from '@emotion/react';

const theme = createTheme({
  palette: {
    primary: {
      main: '#327B18',
    },
  },
});

addDecorator((story) => (
  <MemoryRouter initialEntries={["/*"]}>
    <ThemeProvider theme={theme}>
      {story()}
    </ThemeProvider>
  </MemoryRouter>
));
export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};
