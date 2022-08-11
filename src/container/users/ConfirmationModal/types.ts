export interface IConfirmationModal {
  open?: boolean;
  onClose?: () => void;
  onConfirm?: () => void;
  message?: string;
}
