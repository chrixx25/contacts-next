import { useMutation, useQueryClient } from 'react-query';
import { updateContact } from 'services/contacts';

const useUpdateContact = (id) => {
    const queryClient = useQueryClient()
    //useMutation((passwords) => updateUserPassword({ ...passwords, id })
    return useMutation((data) => updateContact(id, data), {
        onSuccess: data => {
            /** Query Invalidation Start */
            //queryClient.invalidateQueries('contacts');
            /** Handling Mutation Response Start */
            queryClient.setQueryData('contacts', oldContacts => {
                const updatedContacts = oldContacts.map(oldContacts => oldContacts.id === id ? data : oldContacts);
                return updatedContacts
            })
        },
    })
}

export default useUpdateContact