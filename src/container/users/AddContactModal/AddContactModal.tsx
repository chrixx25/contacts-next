import { yupResolver } from "@hookform/resolvers/yup";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import { useModal } from "mui-modal-provider";
import { useForm } from "react-hook-form";

import AddContact from "component/data-entry/forms/AddContact";
import Form from "component/Form";
import Modal from "component/Modal";
import { useAddContact } from "react-query/mutations";

import ConfirmationModal from "../ConfirmationModal";

import { defaultFormValues, schema } from "./utils";
import { AddContactModalProps } from "./types";

const AddContactModal = (props: AddContactModalProps): React.ReactElement => {
  const { open, onClose } = props;
  const { showModal } = useModal();
  const contactForm = useForm({
    shouldUnregister: true,
    defaultValues: defaultFormValues,
    resolver: yupResolver(schema),
    mode: "onChange",
  });
  const addContact = useAddContact();

  const handleSubmit = (values: any): void => {
    const modal = showModal(ConfirmationModal, {
      message: `Are you sure to add ${values.firstName}?`,
      onConfirm: () => {
        addContact.mutate(values, {
          onSuccess: () => onClose(),
          onSettled: () => modal.hide(),
        });
      },
    });
  };

  return (
    <Modal
      title="New Contact"
      maxWidth="sm"
      actions={
        <Modal.Actions>
          <Button onClick={onClose}>Cancel</Button>
          <Button
            disabled={addContact.isLoading}
            onClick={contactForm.handleSubmit(handleSubmit)}
          >
            Save
          </Button>
        </Modal.Actions>
      }
      open={open}
      onClose={onClose}
    >
      <Stack spacing={3}>
        <Form {...contactForm}>
          <AddContact />
        </Form>
      </Stack>
    </Modal>
  );
};

export default AddContactModal;
