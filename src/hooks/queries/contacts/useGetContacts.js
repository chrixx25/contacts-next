import React from 'react'
import { useQuery } from 'react-query';
import { getContacts } from 'services/contacts';

const useGetContacts = () => {
    return useQuery('contacts', getContacts)
}

export default useGetContacts;