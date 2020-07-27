import useSWR from 'swr';

export const baseUrl = "http://localhost:8000/api";

export const useRequest = (path, name) => {
  if (!path) {
    throw new Error("Path is required");
  }

  const url = name ? baseUrl + path + "/" + name : baseUrl + path;
  const { data, error } = useSWR(url);

  return { data, error };
};
