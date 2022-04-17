import '../styles/globals.css';
import 'react-toastify/dist/ReactToastify.css';
import { QueryClientProvider, QueryClient } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';
import { ThemeProvider } from "@mui/material/styles";
import { ToastContainer } from 'react-toastify';
//import { createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import ModalProvider from "mui-modal-provider";
import { SnackbarProvider } from 'notistack';
import UserProvider from 'contexts/UserProvider';
import theme from "theme";

const MyApp = (props) => {
  const {
    Component,
    pageProps: { user, ...pageProps },
  } = props;

  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        refetchOnWindowFocus: false,
        refetchOnReconnect: false,
        retry: false,
      },
    },
  });

  return (
    <QueryClientProvider client={queryClient}>
      <ToastContainer />
      <ReactQueryDevtools initialIsOpen={false} />
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <UserProvider initialValue={user}>
          <SnackbarProvider
            anchorOrigin={{
              vertical: 'top',
              horizontal: 'right',
            }}>
            <ModalProvider>
              <Component {...pageProps} />
            </ModalProvider>
          </SnackbarProvider>
        </UserProvider>
      </ThemeProvider>
    </QueryClientProvider>
  )
}

export default MyApp
