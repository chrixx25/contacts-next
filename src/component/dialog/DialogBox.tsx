import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import { styled } from "@mui/material/styles";

import DialogBoxTitle from "./DialogBoxTitle";
import { DialogBoxProps } from "./types";

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  "& .MuiDialogContent-root": {
    padding: theme.spacing(2),
  },
  "& .MuiDialogActions-root": {
    padding: theme.spacing(2),
  },
}));

const DialogBox = ({
  open,
  onClose,
  submit,
  title,
  children,
  isLoading,
}: DialogBoxProps): React.ReactElement => (
  <BootstrapDialog
    onClose={onClose}
    aria-labelledby="customized-dialog-title"
    // component="form"
    fullWidth
    maxWidth={"sm"}
    open={open}
    onSubmit={submit}
  >
    <DialogBoxTitle onClose={onClose}>{title}</DialogBoxTitle>
    <DialogContent dividers>{children}</DialogContent>
    <DialogActions>
      <Button type="submit" variant="contained" disabled={isLoading} autoFocus>
        Save
      </Button>
      <Button type="button" variant="contained" onClick={onClose}>
        Close
      </Button>
    </DialogActions>
  </BootstrapDialog>
);

export default DialogBox;
