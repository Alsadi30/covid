import Head from 'next/head'
import BrandCards from '../components/brandCard/brands'
import ProductCards from '../components/productCard/products'
import ReviewCards from '../components/reviewCard/reviews'
import Slide from '../components/slider/slides'
import Topbar from '../components/shared/topbar'
import { Container } from '../components/styles/Container.styled'
import Navbar from '../components/shared/navbar'
import {
  getBrands,
  getCategories,
  getLatestProducts,
  getProducts
} from '../api/home'
import { useQuery } from '@tanstack/react-query'
import LoadingSkeleton from '../components/shared/skeleton'
import { useEffect } from 'react'
import { getCartofUser } from '../api/cart'
import { useStoreActions } from 'easy-peasy'
import GlobalCart from '../components/shared/globalCart/GlobalCart'
import styled from 'styled-components'
import Footer from '../components/shared/footer/footer'
import { toast } from 'react-toastify'

const Box = styled.div`
  position: relative;
`

export default function Home ({ saleProducts, latestProducts }) {
  const { SetDatabaseCart, ClearCart } = useStoreActions(action => action.Cart)
  useEffect(() => {
    ;(async () => {
      const cart = await getCartofUser()
      if (cart) {
        SetDatabaseCart(cart)
      } else {
        ClearCart()
      }
    })()
  }, [])

  const { data: saleProd, isLoading } = useQuery({
    queryKey: ['saleProducts'],
    queryFn: getProducts,
    initialData: saleProducts
  })
  const { data: latestProd, isLoading: isLoading3 } = useQuery({
    queryKey: ['latestProducts'],
    queryFn: getLatestProducts,
    initialData: latestProducts
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
        <title>Covid First Aid Ecommerce Application</title>
        <meta
          name='description'
          content='Covid related precautionary product'
        />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Topbar />
      <Navbar categories={categories} />
      <Container>
        <Slide />
        <BrandCards brands={brands} />
        <ProductCards products={saleProd} heading={'On Sale Products'} />
        <ProductCards products={latestProd} heading={'Latest Products'} />
        <ReviewCards />
      </Container>
      <GlobalCart />
      <Footer></Footer>
    </Box>
  )
}

export const getStaticProps = async () => {
  try {
    const saleProducts = await getProducts()
    const latestProducts = await getLatestProducts()
    return {
      props: { saleProducts, latestProducts } // will be passed to the page component as props
    }
  } catch (error) {
    toast(error.message)
    return errror
  }
}
