export interface ConfirmationModalProps {
  open?: boolean;
  onClose?: () => void;
  onConfirm?: () => void;
  message?: string;
}
