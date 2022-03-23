import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";

import Form from "component/Form";
import Modal from "component/Modal";
import AddContact from "component/data-entry/forms/AddContact";
import { useAddContact } from 'hooks/queries/contacts';

import { defaultFormValues, schema } from './utils'

const AddContactModal = (props) => {
    const { open, onClose } = props;

    const contactForm = useForm({
        shouldUnregister: true,
        defaultValues: defaultFormValues,
        resolver: yupResolver(schema),
    });

    const addContact = useAddContact();

    const handleSubmit = (values) => {
        addContact.mutate(values, {
            onSuccess: onClose,
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
                <Form {...contactForm} >
                    <AddContact />
                </Form>
            </Stack>
        </Modal>
    );
}

export default AddContactModal;