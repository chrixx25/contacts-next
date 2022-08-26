import { useEffect } from "react";

import { yupResolver } from "@hookform/resolvers/yup";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import { useModal } from "mui-modal-provider";
import { useForm } from "react-hook-form";

import EditContact from "@/component/data-entry/forms/EditContact";
import Form from "@/component/Form";
import Modal from "@/component/Modal";
import { useUpdateContact } from "@/react-query/mutations";
import { useGetContactById } from "@/react-query/queries";
import { ContactParams } from "@/apis/contacts/types";

import ConfirmationModal from "../ConfirmationModal";

import { schema, defaultFormValues } from "./utils";
import { EditContactModalProps } from "./types";

const EditContactModal = (props: EditContactModalProps): React.ReactElement => {
  const { id, meta, open, onClose } = props;
  const updateContact = useUpdateContact(id, meta);
  const contact = useGetContactById(id);
  const { showModal } = useModal();

  const contactForm = useForm({
    shouldUnregister: true,
    defaultValues: defaultFormValues,
    resolver: yupResolver(schema),
  });

  const handleSubmit = (values: ContactParams): void => {
    const modal = showModal(ConfirmationModal);

    showModal(ConfirmationModal, {
      message: `Are you sure to update ${values.firstName}?`,
      onConfirm: () => {
        updateContact.mutate(values, {
          onSuccess: () => onClose(),
          onSettled: () => modal.hide(),
        });
      },
    });
  };

  // effect runs when user state is updated
  useEffect(() => {
    // reset form with user data
    contactForm.reset(contact.data);
  }, [contact.data, contactForm]);

  return (
    <Modal
      title="Edit Contact"
      maxWidth="sm"
      actions={
        <Modal.Actions>
          <Button onClick={onClose}>Cancel</Button>
          <Button
            disabled={updateContact.isLoading}
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
          <EditContact />
        </Form>
      </Stack>
    </Modal>
  );
};

export default EditContactModal;
