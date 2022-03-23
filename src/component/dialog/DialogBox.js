import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import Button from '@mui/material/Button';
import DialogBoxTitle from './DialogBoxTitle';
import { styled } from '@mui/material/styles';

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
    '& .MuiDialogContent-root': {
        padding: theme.spacing(2),
    },
    '& .MuiDialogActions-root': {
        padding: theme.spacing(2),
    },
}));

const DialogBox = ({ open, onClose, submit, title, children, isLoading }) => {
    return (
        <BootstrapDialog
            onClose={onClose}
            aria-labelledby="customized-dialog-title"
            component="form"
            fullWidth
            maxWidth={'sm'}
            open={open}
            onSubmit={submit}
        >
            <DialogBoxTitle id="customized-dialog-title" onClose={onClose}>
                {title}
            </DialogBoxTitle>
            <DialogContent dividers>
                {children}
            </DialogContent>
            <DialogActions>
                <Button type="submit" variant="contained" disabled={isLoading} autoFocus>
                    Save
                </Button>
                <Button type="button" variant="contained" onClick={onClose}>
                    Close
                </Button>
            </DialogActions>
        </BootstrapDialog>
    )
}

export default DialogBox;