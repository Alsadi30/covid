import Head from 'next/head'
import BrandCards from '../components/brandCard/brands'
import ProductCards from '../components/productCard/products'
import ReviewCards from '../components/reviewCard/reviews'
import Slide from '../components/slider/slides'
import Topbar from '../components/shared/topbar'
import { Container } from '../components/styles/Container.styled'
import Navbar from '../components/shared/navbar'
import { getBrands, getCategories, getProducts } from '../api/home'
import { useQuery } from '@tanstack/react-query'
import LoadingSkeleton from '../components/shared/skeleton'
import { useEffect } from 'react'
import { getCartofUser } from '../api/cart'
import { useStoreActions } from 'easy-peasy'
import GlobalCart from '../components/shared/globalCart/GlobalCart'
import styled from 'styled-components'

const Box = styled.div`
  position: relative;
`

export default function Home ({ saleProducts }) {
  const { SetDatabaseCart } = useStoreActions(action => action.Cart)
  useEffect(() => {
    ;(async () => {
      const cart = await getCartofUser()
      if (cart) {
        SetDatabaseCart(cart)
      }
    })()
  }, [])

  const { data: saleProd, isLoading } = useQuery({
    queryKey: ['saleProducts'],
    queryFn: getProducts,
    initialData: saleProducts
  })
  const { data: categories } = useQuery({
    queryKey: ['categories'],
    queryFn: getCategories
  })
  const { data: brands, isLoading: isLoading2 } = useQuery({
    queryKey: ['brands'],
    queryFn: getBrands
  })

  if (isLoading || isLoading2) {
    return <LoadingSkeleton />
  }

  return (
    <Box>
      <Head>
        <title>Covid Ecommerce Application</title>
        <meta name='description' content='Generated by create next app' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Topbar />
      <Navbar categories={categories} />
      <Container>
        <Slide />
        <BrandCards brands={brands} />
        <ProductCards products={saleProd} heading={'On Sale Products'} />
        <ReviewCards />
      </Container>
      <GlobalCart></GlobalCart>
    </Box>
  )
}

export const getStaticProps = async () => {
  try {
    const saleProducts = await getProducts()
    return {
      props: { saleProducts } // will be passed to the page component as props
    }
  } catch (error) {
    console.log(error)
  }
}
