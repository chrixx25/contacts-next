import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import IconButton from "@mui/material/IconButton";
import { useModal } from "mui-modal-provider";
import { useSnackbar } from "notistack";

import Menu from "component/Menu";
import { useDeleteContact } from "react-query/mutations";

import ConfirmationModal from "../ConfirmationModal";
import EditContactModal from "../EditContactModal";

import { ActionCellParams } from "./types";

const renderAction = (actionProps): React.ReactElement => (
  <IconButton size="small" {...actionProps}>
    <MoreHorizIcon />
  </IconButton>
);

const ActionCell = (props: ActionCellParams): React.ReactElement => {
  const { id, firstName } = props.row.original;
  const deleteContact = useDeleteContact();
  const { showModal } = useModal();
  const { enqueueSnackbar } = useSnackbar();
  const meta = props.initialState;

  const handleDelete = (contactId: string): void => {
    const modal = showModal(ConfirmationModal, {
      message: `Are you sure to delete ${firstName}?`,
      onConfirm: () => {
        deleteContact.mutate(contactId, {
          onSuccess: () => {
            // toast.success("Contact deleted successfully!");
            enqueueSnackbar("Contact deleted successfully!!", {
              variant: "success",
              autoHideDuration: 3000,
            });
          },
          onSettled: () => {
            modal.hide();
          },
        });
      },
    });
  };

  return (
    <Menu action={renderAction}>
      <Menu.Item
        onClick={() =>
          showModal(EditContactModal, {
            id,
            meta: { page: meta.currentPage, pageSize: meta.pageSize },
          })
        }
        icon={<EditIcon />}
      >
        Edit
      </Menu.Item>
      <Menu.Item
        onClick={() => handleDelete(id)}
        disabled={deleteContact.isLoading}
        icon={<DeleteIcon />}
      >
        Delete
      </Menu.Item>
    </Menu>
  );
};

export default ActionCell;
