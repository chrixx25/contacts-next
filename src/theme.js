import RemoveIcon from "@mui/icons-material/Remove";
import { timelineConnectorClasses } from "@mui/lab/TimelineConnector";
import { createTheme, alpha } from "@mui/material/styles";

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
});

export default createTheme(theme, {
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
    MuiTablePagination: {
      styleOverrides: {
        toolbar: {
          padding: "0 !important",
        },
        input: {
          borderColor: theme.palette.grey[500],
        },
        select: {
          paddingTop: theme.spacing(0.75),
          paddingBottom: theme.spacing(0.75),
          paddingRight: "32px !important",
        },
        selectIcon: {
          color: "inherit",
          right: theme.spacing(0.5),
        },
        spacer: {
          display: "none",
        },
      },
    },
    MuiPagination: {
      styleOverrides: {
        root: {
          marginLeft: "auto",
        },
        ul: {
          flexWrap: "nowrap",
        },
      },
    },
    MuiPaginationItem: {
      styleOverrides: {
        previousNext: {
          border: "1px solid",
          borderColor: theme.palette.grey[500],
          "&:first-of-type": {
            marginRight: theme.spacing(1.75),
          },
          "&:last-of-type": {
            marginLeft: theme.spacing(1.75),
          },
        },
      },
    },
    MuiTableCell: {
      styleOverrides: {
        root: {
          borderWidth: 0,
        },
      },
    },
    MuiButtonBase: {
      defaultProps: {
        disableRipple: true,
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
