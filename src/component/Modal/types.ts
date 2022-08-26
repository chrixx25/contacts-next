import { DialogProps } from "@mui/material/Dialog";

export interface ModalProps {
  title?: string;
  maxWidth?: DialogProps["maxWidth"];
  dividers?: boolean;
  actions?: React.ReactNode;
  closeIcon?: boolean;
  disableEscapeKeyDown?: boolean;
  open?: boolean;
  onClose: () => void;
  onEnter?: () => void;
  onExited?: () => void;
  children?: React.ReactNode | string;
}

export interface ModalElements {
  Actions: any;
}
