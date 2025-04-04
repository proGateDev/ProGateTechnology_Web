import { useEffect } from "react";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import { getVendors, getVendorsCategories } from "../api/vendor";
//==================================================================
export const useFetchVendors = () => {
  const queryClient = useQueryClient();

  const { data, error: vendorError, isLoading: vendorIsLoading } = useQuery({
    queryKey: ["vendors"],
    queryFn: getVendors,
    staleTime: 5 * 60 * 1000, // 5 minutes before refetching automatically
    cacheTime: 10 * 60 * 1000, // 10 minutes before garbage collection
    select: (data) => data?.data?.vendors || [], // Extract only vendor data
  });

  const refetchVendors = () => {
    queryClient.invalidateQueries(["vendors"]);
  };
  //==================================================================
  return {
    vendors: data, // Vendors already transformed in `select`
    vendorError,
    vendorIsLoading,
    refetchVendors,
  };
};
//==================================================================

export const useFetchVendorsCategories = (vendorId) => {
  const queryClient = useQueryClient();

  const { data, error: vendorError, isLoading: vendorIsLoading } = useQuery({
    queryKey: ["vendors",vendorId],
    queryFn: ()=>getVendorsCategories(vendorId),
    staleTime: 5 * 60 * 1000, // 5 minutes before refetching automatically
    cacheTime: 10 * 60 * 1000, // 10 minutes before garbage collection
    select: (data) => data?.data?.category || [], // Extract only vendor data
  });
  // console.log('===================', data);

  const refetchVendors = () => {
    queryClient.invalidateQueries(["vendors"]);
  };
  //==================================================================
  return {
    vendorsCategories: data, // Vendors already transformed in `select`
    vendorError,
    vendorIsLoading,
    refetchVendors,
  };
};
//==================================================================