import { useQuery, useQueryClient } from 'react-query';
import { getContacts, getContactById } from 'apis';

export const useGetContacts = (meta) => {
    return useQuery(['contacts', meta], () => getContacts(meta), {
        initialData: { results: [], page: 1, size: 10, pages: 0, total: 0 },
        keepPreviousData: true,
    })
}

export const useGetContactById = (id) => {
    const queryClient = useQueryClient()
    return useQuery(['contact', id], getContactById, {
        enable: !!id,
        initialData: () => {
            const contact = queryClient?.getQueryData('contacts')?.find(contact => contact.id === id);
            if (!contact) return undefined;
            return contact;
        }
    });
}