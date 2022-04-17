
import EditIcon from "@mui/icons-material/Edit";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from '@mui/icons-material/Delete';
import Menu from "component/Menu";

import { useDeleteContact } from 'react-query/mutations';
import { useModal } from "mui-modal-provider";
import EditContactModal from '../EditContactModal';
import ConfirmationModal from "../ConfirmationModal";
import { useSnackbar } from 'notistack';

const renderAction = (actionProps) => (
    <IconButton size="small" {...actionProps}>
        <MoreHorizIcon />
    </IconButton>
);

const ActionCell = (props) => {
    const { id, firstName } = props.row.original;
    const deleteContact = useDeleteContact();
    const { showModal } = useModal();
    const { enqueueSnackbar } = useSnackbar();
    const meta = props.initialState;

    const handleDelete = (id) => {
        const modal = showModal(ConfirmationModal, {
            message: `Are you sure to delete ${firstName}?`,
            onConfirm: () => {
                deleteContact.mutate(id, {
                    onSuccess: () => {
                        onClose();
                        // toast.success("Contact deleted successfully!");
                        enqueueSnackbar('Contact deleted successfully!!', {
                            variant: 'success',
                            autoHideDuration: 3000,
                        });
                    },
                    onSettled: () => {
                        modal.hide();
                    }
                });
            }
        })
    }

    return (
        <Menu action={renderAction}>
            <Menu.Item
                onClick={() => showModal(EditContactModal, { id, meta: { page: meta.currentPage, pageSize: meta.pageSize } })}
                icon={<EditIcon />}>
                Edit
            </Menu.Item>
            <Menu.Item
                onClick={() => handleDelete(id)} disabled={deleteContact.isLoading}
                icon={<DeleteIcon />}>
                Delete
            </Menu.Item>
        </Menu>
    )
}

export default ActionCell