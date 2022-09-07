import { useQuery, useInfiniteQuery } from '@tanstack/react-query';

export const useInfiniteRequest = (key, request, options) =>
  useInfiniteQuery(key, request, { ...options });

export const useRequest = (key, request, options) => useQuery(key, request, { ...options });
