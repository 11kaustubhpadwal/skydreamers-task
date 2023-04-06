import axios from "axios";

export const getList = async (searchValue: string, sortBy: string) => {
  const response = await axios.get(
    `${process.env.REACT_APP_LIST_QUERIES_BASE_URL}list?search=${searchValue}&sortBy=${sortBy}`
  );
  return response.data;
};
