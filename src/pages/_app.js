import '../styles/globals.css';
import 'react-toastify/dist/ReactToastify.css';
import { QueryClientProvider, QueryClient } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';
import { ThemeProvider } from "@mui/material/styles";
import { ToastContainer } from 'react-toastify';
import { createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
//import theme from "theme";

const MyApp = ({ Component, pageProps }) => {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        refetchOnWindowFocus: false,
        refetchOnReconnect: false,
        retry: false,
      },
    },
  });

  const theme = createTheme({
    drawerWidth: 240,
    palette: {
      primary: {
        main: "#2e3192",
      },
      secondary: {
        main: "#6E6E6E",
      },
      error: {
        main: "#FF5660",
      },
      info: {
        main: "#428EFE",
      },
      background: {
        default: "#F9F9FB",
      },
      common: {
        black: "#333333",
        form: "#E5E5E5",
      },
    }
  }, {
    components: {

    }
  });

  return (
    <QueryClientProvider client={queryClient}>
      <ToastContainer />
      <ReactQueryDevtools initialIsOpen={false} />
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Component {...pageProps} />
      </ThemeProvider>
    </QueryClientProvider>
  )
}

export default MyApp
