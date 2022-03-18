import React from 'react'
import { useQuery } from 'react-query';
import { getContactById } from 'services/contacts';

const useGetContactById = (id) => {
    return useQuery(['contact', id], getContactById, {
        enable: !!id
    })
}

export default useGetContactById;