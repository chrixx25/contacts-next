import CloseIcon from "@mui/icons-material/Close";
import DialogTitle from "@mui/material/DialogTitle";
import IconButton from "@mui/material/IconButton";

import { DialogBoxTitleProps } from "./types";

const DialogBoxTitle = (props: DialogBoxTitleProps): React.ReactElement => {
  const { children, onClose } = props;

  return (
    <DialogTitle sx={{ m: 0, p: 2 }}>
      {children}
      {onClose ? (
        <IconButton
          aria-label="close"
          onClick={onClose}
          sx={{
            position: "absolute",
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <CloseIcon />
        </IconButton>
      ) : null}
    </DialogTitle>
  );
};

export default DialogBoxTitle;
