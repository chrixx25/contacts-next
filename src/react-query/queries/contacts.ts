import { useQuery, UseQueryResult, useQueryClient } from "react-query";

import {
  ContactsParams,
  ContactsResponse,
  ContactByIdResponse,
} from "apis/contacts/types";
import { getContactById, getContacts } from "apis";

export const useGetContacts = (
  meta: ContactsParams
): UseQueryResult<ContactsResponse> =>
  useQuery(["contacts", meta], () => getContacts(meta), {
    initialData: { results: [], page: 1, size: 10, pages: 0, total: 0 },
    keepPreviousData: true,
  });

export const useGetContactById = (
  id: string | undefined
): UseQueryResult<ContactByIdResponse> => {
  const queryClient = useQueryClient();
  return useQuery(["contact", id], () => getContactById(id), {
    enabled: !!id,
    initialData: () => {
      const contacts: ContactByIdResponse[] =
        queryClient.getQueryData("contacts");
      const contact =
        contacts && contacts.find((contactData) => contactData.id === id);

      if (!contact) return undefined;
      return contact;
    },
  });
};
