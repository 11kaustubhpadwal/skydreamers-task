import { CacheKeys } from "../cacheKeys";
import { GetListResponse } from "./types";
import { getList } from "../../api/list";
import { useQuery } from "react-query";

export const useGetListQuery = (searchValue: string, sortBy: string) => {
  return useQuery<GetListResponse[]>(
    CacheKeys.GetList,
    () => getList(searchValue, sortBy),
    { refetchOnWindowFocus: false, refetchOnMount: false }
  );
};
