import { useMutation, useQueryClient } from 'react-query';
import { useSnackbar } from 'notistack';
import {
    addContact,
    updateContact,
    deleteContact
} from "apis";

export const useAddContact = () => {
    const queryClient = useQueryClient();
    const { enqueueSnackbar } = useSnackbar();

    return useMutation(addContact, {
        onSuccess: async data => {
            enqueueSnackbar('Contact added successfully!!', {
                variant: 'success',
                autoHideDuration: 3000,
            });

            /** Query Invalidation Start */
            queryClient.invalidateQueries('contacts');

            /** Handling Mutation Response Start */
            // queryClient.setQueryData('super-heroes', oldQueryData => {
            //   return {
            //     ...oldQueryData,
            //     data: [...oldQueryData.data, data.data]
            //   }
            // })
        },
    })
}

export const useDeleteContact = () => {
    const queryClient = useQueryClient();
    return useMutation(deleteContact, {
        onSuccess: _data => {
            /** Query Invalidation Start */
            queryClient.invalidateQueries('contacts');

            /** Handling Mutation Response Start */
            // queryClient.setQueryData('super-heroes', oldQueryData => {
            //   return {
            //     ...oldQueryData,
            //     data: [...oldQueryData.data, data.data]
            //   }
            // })
        },
    })
}

export const useUpdateContact = (id, meta) => {
    const queryClient = useQueryClient()
    const { enqueueSnackbar } = useSnackbar();
    return useMutation((data) => updateContact(id, data), {
        onSuccess: data => {
            enqueueSnackbar('Contact updated successfully!!', {
                variant: 'success',
                autoHideDuration: 3000,
            });
            /** Query Invalidation Start */
            //queryClient.invalidateQueries('contacts');
            /** Handling Mutation Response Start */
            queryClient.setQueryData(['contacts', meta], oldContacts => {
                const updatedContacts = oldContacts.results.map(oldContacts => oldContacts.id === id ? data : oldContacts);
                oldContacts.results = updatedContacts
                return oldContacts;
            });
        },
    })
}