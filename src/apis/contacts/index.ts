import request from "utils/request";

import {
  ContactsParams,
  ContactsResponse,
  ContactParams,
  ContactByIdResponse,
} from "./types";

export const getContacts = async ({
  page,
  pageSize,
}: ContactsParams): Promise<ContactsResponse> => {
  const options = {
    url: "users",
    params: { page, limit: pageSize },
  };
  return request.get(options.url, { params: options.params });
};

export const getContactById = async (
  id: string
): Promise<ContactByIdResponse> => {
  const options = {
    url: `users/${id}`,
  };
  return request.get(options.url);
};

export const addContact = async (
  data: ContactParams
): Promise<ContactByIdResponse> => {
  const options = {
    url: "users",
    body: data,
  };
  return request.post(options.url, options.body);
};

export const updateContact = async (
  id: string,
  data: ContactParams
): Promise<ContactByIdResponse> => {
  const options = {
    url: `users/${id}`,
    body: data,
  };
  return request.put(options.url, options.body);
};

export const deleteContact = async (id: string): Promise<any> => {
  const options = {
    url: `users/${id}`,
  };
  return request.delete(options.url);
};
