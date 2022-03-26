import { useQuery, useQueryClient } from 'react-query';
import { getContactById } from 'services/contacts';

const useGetContactById = (id) => {
    const queryClient = useQueryClient()
    return useQuery(['contact', id], getContactById, {
        enable: !!id,
        initialData: () => {
            const contact = queryClient?.getQueryData('contacts').find(contact => contact.id === id);
            if (!contact) return undefined;
            return contact;
        }
    });
}

export default useGetContactById;