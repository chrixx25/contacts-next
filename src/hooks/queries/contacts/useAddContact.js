import { useMutation, useQueryClient } from 'react-query';
import { addContact } from 'services/contacts';

const useAddContact = () => {
    const queryClient = useQueryClient()
    return useMutation(addContact, {
        onSuccess: data => {
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

export default useAddContact