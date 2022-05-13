import ReactDOM from 'react-dom';
import { ThemeProvider } from '@emotion/react';
import { QueryClient, QueryClientProvider } from 'react-query';

import App from './App';
import { theme } from './styles/theme';
import GlobalStyle from './GlobalStyle';

const queryClient = new QueryClient();

ReactDOM.render(
  <QueryClientProvider client={queryClient}>
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <App />
    </ThemeProvider>
  </QueryClientProvider>,
  document.getElementById('root'),
);
