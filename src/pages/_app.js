import '../styles/globals.css';
import 'react-toastify/dist/ReactToastify.css';
import { QueryClientProvider, QueryClient } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';
import { ThemeProvider } from "@mui/material/styles";
import { ToastContainer } from 'react-toastify';
import { createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import ModalProvider from "mui-modal-provider";
import { SnackbarProvider } from 'notistack';
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
      // MuiAppBar: {
      //   defaultProps: {
      //     color: "inherit",
      //     elevation: 0,
      //   },
      // },
      MuiToolbar: {
        styleOverrides: {
          root: {
            minHeight: 64,
          },
        },
      },
      MuiDrawer: {
        styleOverrides: {
          paperAnchorLeft: {
            borderRight: 0,
          },
        },
      },
      MuiTextField: {
        defaultProps: {
          fullWidth: true,
        },
      },
      MuiMenu: {
        styleOverrides: {
          paper: {
            borderRadius: 6,
            marginTop: 1.25,
          },
          list: {
            paddingTop: 1.25,
            paddingBottom: 1.25,
            maxHeight: 250,
            overflowY: "auto",
            "& li.Mui-selected": {
              fontWeight: 700,
            },
          },
        },
        defaultProps: {
          transformOrigin: { horizontal: "right", vertical: "top" },
          anchorOrigin: { horizontal: "right", vertical: "bottom" },
          PaperProps: {
            elevation: 1,
            sx: {
              boxShadow: "0 2px 10px 0 #E5E5E5",
            },
          },
        },
      },
    }
  });

  return (
    <QueryClientProvider client={queryClient}>
      <ToastContainer />
      <ReactQueryDevtools initialIsOpen={false} />
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <SnackbarProvider
          anchorOrigin={{
            vertical: 'top',
            horizontal: 'right',
          }}>
          <ModalProvider>
            <Component {...pageProps} />
          </ModalProvider>
        </SnackbarProvider>
      </ThemeProvider>
    </QueryClientProvider>
  )
}

export default MyApp
