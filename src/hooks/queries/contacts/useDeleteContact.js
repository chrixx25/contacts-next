import { useMutation, useQueryClient } from 'react-query';
import { deleteContact } from 'services/contacts';

const useDeleteContact = () => {
    const queryClient = useQueryClient()
    return useMutation(deleteContact, {
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

export default useDeleteContact