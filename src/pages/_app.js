import '../styles/globals.css';
import 'react-toastify/dist/ReactToastify.css';
import { QueryClientProvider, QueryClient } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';
import { ThemeProvider } from "@mui/material/styles";
import { ToastContainer } from 'react-toastify';
import { createTheme } from "@mui/material/styles";
//import theme from "theme";

const MyApp = ({ Component, pageProps }) => {
  const queryClient = new QueryClient();

  const darkTheme = createTheme({
    palette: {
      mode: 'dark',
    },
  });


  return (

    <QueryClientProvider client={queryClient}>
      <ToastContainer />
      <ReactQueryDevtools initialIsOpen={false} />
      <Component {...pageProps} />
    </QueryClientProvider>

  )
}

export default MyApp
