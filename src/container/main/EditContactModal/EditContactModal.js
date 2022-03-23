import { useEffect } from 'react';
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";

import Form from "component/Form";
import Modal from "component/Modal";
import EditContact from "component/data-entry/forms/EditContact";
import { useGetContactById, useUpdateContact } from 'hooks/queries/contacts';
import { toast } from 'react-toastify';

import { schema, defaultFormValues } from './utils';

const EditContactModal = (props) => {
    const { id, open, onClose } = props;
    const updateContact = useUpdateContact(id);
    const contact = useGetContactById(id);

    const contactForm = useForm({
        shouldUnregister: true,
        defaultValues: defaultFormValues,
        resolver: yupResolver(schema),
    });

    const handleSubmit = (values) => {
        updateContact.mutate(values, {
            onSuccess: () => {
                onClose();
                toast.success("Contact updated successfully!");
            },
        });
    };

    //effect runs when user state is updated
    useEffect(() => {
        // reset form with user data
        contactForm.reset(contact.data);
    }, [contact.data]);

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
                <Form {...contactForm} >
                    <EditContact />
                </Form>
            </Stack>
        </Modal>
    );
}

export default EditContactModal;