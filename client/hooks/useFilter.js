import { useQuery } from '@tanstack/react-query'
import { getProducts } from '../api/singleCategoryProducts'

const useFilter = (baseField, baseFieldValue, price, sort) => {
  const {
    isInitialLoading,
    isError,
    data,
    error,
    refetch,
    isFetching
  } = useQuery({
    queryKey: ['searchProduct', baseField, baseFieldValue, price, sort],
    queryFn: () => getProducts(baseField, baseFieldValue, price, sort),
    enabled: false
  })

  return {
    isInitialLoading,
    isError,
    data,
    error,
    refetch,
    isFetching
  }
}

export default useFilter
