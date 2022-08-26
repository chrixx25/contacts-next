export interface DialogBoxTitleProps {
  children: React.ReactNode;
  onClose: () => void;
}

export interface DialogBoxProps {
  open: boolean;
  onClose: () => void;
  submit: () => void;
  title: string;
  children: React.ReactNode;
  isLoading: boolean;
}
