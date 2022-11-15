import { useQuery } from "@tanstack/react-query";
import { useRouter } from "next/router";
import { getAllProducts, getSingleProduct } from "../../api/singleProduct";
import SingleProductCard from "../../components/productCard/singleProduct";
import LoadingSkeleton from "../../components/shared/skeleton";
const SingleProduct = ({ product }) => {
  const route = useRouter();
  const slug = route.query.slug;
  // data:Products will be used in the page to render product list
  const { data: Product, isLoading } = useQuery({
    queryKey: ["singleProduct", slug],
    queryFn: () => getSingleProduct(slug),
    initialData: product,
  });

  console.log(product);

  if (isLoading) {
    return <LoadingSkeleton />;
  }

  return (
    <>
      <SingleProductCard />
    </>
  );
};

export default SingleProduct;

export const getStaticProps = async ({ params }) => {
  const slug = params.slug;
  const product = await getSingleProduct(slug);
  return {
    props: { product }, // will be passed to the page component as props
  };
};

export const getStaticPaths = async ({}) => {
  const Products = await getAllProducts();
  const paths = Products.map((product) => ({
    params: { slug: product.attributes.slug },
  }));
  return {
    paths,
    fallback: true,
  };
};
