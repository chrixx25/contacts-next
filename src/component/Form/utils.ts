import { get, defaultTo } from "lodash";

export const getOption = (path) => (option) => defaultTo(get(option, path), "");
