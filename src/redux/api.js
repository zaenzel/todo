export const url = "https://jsonplaceholder.typicode.com/";

export const setHeaders = () => {
  const headers = {
    headers: {
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
  };

  return headers;
};
