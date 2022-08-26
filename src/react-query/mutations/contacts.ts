import type { AxiosError } from "axios";

import { useSnackbar } from "notistack";
import { useMutation, useQueryClient, UseMutationResult } from "react-query";

import { addContact, updateContact, deleteContact } from "apis";
import {
  ContactByIdResponse,
  ContactsResponse,
  ContactParams,
} from "apis/contacts/types";

export const useAddContact = (): UseMutationResult<
  ContactByIdResponse & { id: string },
  AxiosError
> => {
  const queryClient = useQueryClient();
  const { enqueueSnackbar } = useSnackbar();

  return useMutation(addContact, {
    onSuccess: async () => {
      enqueueSnackbar("Contact added successfully!!", {
        variant: "success",
        autoHideDuration: 3000,
      });

      /** Query Invalidation Start */
      queryClient.invalidateQueries("contacts");

      /** Handling Mutation Response Start */
      // queryClient.setQueryData('super-heroes', oldQueryData => {
      //   return {
      //     ...oldQueryData,
      //     data: [...oldQueryData.data, data.data]
      //   }
      // })
    },
  });
};

export const useDeleteContact = (): UseMutationResult<
  ContactByIdResponse & { id: string },
  AxiosError
> => {
  const queryClient = useQueryClient();
  return useMutation(deleteContact, {
    onSuccess: () => {
      /** Query Invalidation Start */
      queryClient.invalidateQueries("contacts");

      /** Handling Mutation Response Start */
      // queryClient.setQueryData('super-heroes', oldQueryData => {
      //   return {
      //     ...oldQueryData,
      //     data: [...oldQueryData.data, data.data]
      //   }
      // })
    },
  });
};

export const useUpdateContact = (
  id: string,
  meta: any
): UseMutationResult<ContactByIdResponse & { id: string }, AxiosError> => {
  const queryClient = useQueryClient();
  const { enqueueSnackbar } = useSnackbar();
  return useMutation((data: ContactParams) => updateContact(id, data), {
    onSuccess: (data) => {
      enqueueSnackbar("Contact updated successfully!!", {
        variant: "success",
        autoHideDuration: 3000,
      });
      /** Query Invalidation Start */
      // queryClient.invalidateQueries('contacts');
      /** Handling Mutation Response Start */
      queryClient.setQueryData(
        ["contacts", meta],
        (oldContacts: ContactsResponse) => {
          const updatedContacts = oldContacts.results.map((old) =>
            old.id === id ? data : old
          );
          // eslint-disable-next-line no-param-reassign
          oldContacts.results = updatedContacts;
          return oldContacts;
        }
      );
    },
  });
};
