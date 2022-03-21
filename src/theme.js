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
  },
  typography: {
    fontFamily: "Helvetica Neue",
  },
  shape: {
    borderRadius: 4,
  },
  mixins: {
    toolbar: {
      minHeight: 64,
    },
  },
});

export default createTheme(theme, {
  components: {
    MuiCssBaseline: {
      styleOverrides: `
      @font-face {
        font-family: "Helvetica Neue";
        font-style: normal;
        font-weight: 700;
        src: url("/fonts/HelveticaNeue-Bold.otf") format("opentype");
      }

      @font-face {
        font-family: "Helvetica Neue";
        font-style: normal;
        font-weight: 600;
        src: url("/fonts/HelveticaNeue-Medium.otf") format("opentype");
      }

      @font-face {
        font-family: "Helvetica Neue";
        font-style: normal;
        font-weight: 500;
        src: url("/fonts/HelveticaNeue-Medium.otf") format("opentype");
      }

      @font-face {
        font-family: "Helvetica Neue";
        font-style: normal;
        font-weight: 400;
        src: url("/fonts/HelveticaNeue-Regular.otf") format("opentype");
      }

      .rdtPicker {
        & td.rdtActive,
        & td.rdtActive:hover {
          background-color: ${theme.palette.primary.main}!important;
        }

        & td.rdtToday:before {
          border-bottom-color: ${theme.palette.primary.main}!important;
        }
      }
    `,
    },
    MuiAppBar: {
      defaultProps: {
        color: "inherit",
        elevation: 0,
      },
    },
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
    MuiAlert: {
      styleOverrides: {
        standardSuccess: {
          color: theme.palette.primary.main,
        },
        standardError: {
          color: theme.palette.error.main,
        },
      },
    },
    MuiAccordion: {
      styleOverrides: {
        root: {
          border: "1px solid",
          borderColor: "#E4F0FC",
          borderRadius: 6,
          overflow: "hidden",
          "&:before": {
            display: "none",
          },
        },
      },
      defaultProps: {
        disableGutters: true,
        elevation: 0,
        TransitionProps: { unmountOnExit: true },
      },
    },
    MuiAccordionSummary: {
      styleOverrides: {
        root: {
          backgroundColor: "#F9FCFF",
          flexDirection: "row-reverse",
        },
        content: {
          alignItems: "center",
          marginLeft: theme.spacing(2),
        },
      },
      defaultProps: {
        expandIcon: <RemoveIcon color="inherit" />,
      },
    },
    MuiAccordionDetails: {
      styleOverrides: {
        root: {
          backgroundColor: "#F9FCFF",
          padding: theme.spacing(2, 2, 2, 7),
        },
      },
    },
    MuiTimeline: {
      styleOverrides: {
        root: {
          alignItems: "flex-start",
          paddingLeft: 0,
          paddingRight: 0,
        },
      },
    },
    MuiTimelineItem: {
      styleOverrides: {
        root: {
          width: "100%",
          "&:before": {
            display: "none",
          },
          [`&:last-of-type .${timelineConnectorClasses.root}`]: {
            display: "none",
          },
        },
      },
    },
    MuiTimelineDot: {
      styleOverrides: {
        root: {
          backgroundColor: "#ECECEC",
          boxShadow: "none",
          margin: theme.spacing(0.25, 0),
          padding: 2,
        },
      },
    },
    MuiTimelineConnector: {
      styleOverrides: {
        root: {
          backgroundColor: "#ECECEC",
          width: 1,
        },
      },
    },
    MuiTimelineContent: {
      styleOverrides: {
        root: {
          marginTop: -4,
          paddingTop: 0,
        },
      },
    },
    MuiList: {
      styleOverrides: {
        root: {
          paddingLeft: "0 !important",
          paddingRight: "0 !important",
        },
      },
    },
    MuiListItem: {
      styleOverrides: {
        root: {
          primary: {
            overflow: "hidden",
            textOverflow: "ellipsis",
            display: "-webkit-box",
            WebkitLineClamp: 1,
            WebkitBoxOrient: "vertical",
          },
          "&.Mui-selected": {
            backgroundColor: alpha(theme.palette.primary.main, 0.2),
          },
        },
      },
    },
    MuiListItemText: {
      styleOverrides: {
        primary: {
          color: theme.palette.secondary.main,
          fontWeight: theme.typography.fontWeightMedium,
        },
      },
      defaultProps: {
        primaryTypographyProps: {
          variant: "body1",
        },
      },
    },
    MuiListItemIcon: {
      styleOverrides: {
        root: {
          color: theme.palette.primary.main,
          minWidth: 45,
        },
      },
    },
    MuiCard: {
      defaultProps: {
        elevation: 0,
      },
    },
    MuiPaper: {
      defaultProps: {
        elevation: 0,
      },
    },
    MuiDivider: {
      root: {
        color: "#F9F9FB",
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
    MuiFormControl: {
      defaultProps: {
        fullWidth: true,
      },
    },
    MuiFormLabel: {
      styleOverrides: {
        root: {
          color: theme.palette.common.black,
          fontWeight: theme.typography.fontWeightMedium,
        },
      },
    },
    MuiInputLabel: {
      styleOverrides: {
        shrink: {
          transform: "translate(0, 1.5px) scale(1)",
        },
      },
      defaultProps: {
        shrink: true,
      },
    },
    MuiFormControlLabel: {
      styleOverrides: {
        label: {
          color: theme.palette.common.black,
        },
      },
    },
    MuiInputBase: {
      styleOverrides: {
        root: {
          borderRadius: 3,
          border: "1px solid",
          borderColor: theme.palette.common.form,
          backgroundColor: theme.palette.common.white,
          "&:hover:not($disabled)": {
            borderColor: theme.palette.grey[500],
          },
          "& > svg": {
            color: theme.palette.grey[300],
          },
          "&.Mui-focused": {
            borderColor: theme.palette.primary.main,
          },
          "&.Mui-error": {
            borderColor: theme.palette.error.main,
          },
          "&.Mui-disabled": {
            backgroundColor: theme.palette.common.form.disabled,
            borderColor: theme.palette.common.form.disabled,
            color: "#6E6E6E",
          },
        },
        input: {
          fontWeight: theme.typography.fontWeightMedium,
          padding: theme.spacing(1.25, 1.5),
          "&::placeholder": {
            color: alpha(theme.palette.common.black, 0.46),
          },
        },
        formControl: {
          "label + &": {
            marginTop: "30px !important",
          },
        },
        adornedStart: {
          paddingLeft: theme.spacing(1.5),
        },
      },
    },
    MuiTextField: {
      defaultProps: {
        variant: "standard",
        margin: "none",
        fullWidth: true,
        InputLabelProps: {
          shrink: true,
        },
        InputProps: {
          disableUnderline: true,
        },
      },
    },
    MuiSelect: {
      styleOverrides: {
        root: {
          select: {
            backgroundColor: theme.palette.common.white,
          },
        },
        icon: {
          color: theme.palette.common.form.main,
          right: "0.75rem",
          position: "absolute",
          userSelect: "none",
          pointerEvents: "none",
        },
      },
      defaultProps: {
        variant: "standard",
        MenuProps: {
          anchorOrigin: {
            vertical: "bottom",
            horizontal: "left",
          },
          transformOrigin: {
            vertical: "top",
            horizontal: "left",
          },
          // getContentAnchorEl: null,
        },
      },
    },
    MuiMenu: {
      styleOverrides: {
        paper: {
          borderRadius: 6,
          marginTop: theme.spacing(1.25),
          boxShadow: `0 2px 4px 0 ${theme.palette.common.form.main} !important`,
        },
        list: {
          paddingTop: theme.spacing(1.25),
          paddingBottom: theme.spacing(1.25),
          background: theme.palette.common.white,
          maxHeight: 250,
          overflowY: "auto",
          "& li.Mui-selected": {
            background: alpha(theme.palette.primary.main, 0.2),
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
    MuiPopover: {
      styleOverrides: {
        paper: {
          boxShadow: `0 2px 15px 5px ${alpha("#464646", 0.1)}`,
          overflow: "initial",
        },
      },
    },
    MuiAutocomplete: {
      styleOverrides: {
        inputRoot: {
          padding: theme.spacing(0.75, 1.5),
        },
        tag: {
          marginTop: 0,
          marginBottom: 0,
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: "none",
        },
      },
      defaultProps: {
        variant: "contained",
        disableElevation: true,
        disableRipple: true,
      },
    },
  },
});
