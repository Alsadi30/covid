import { useQuery } from "@tanstack/react-query";
import { useRouter } from "next/router";
import { getBrands } from "../../api/home";
import { getBrandProducts } from "../../api/singleBrandProducts";

const SingleBrandProducts = ({ ProductsByBrand }) => {

    const route = useRouter();

    const brandName = route.query.brand;

  // data:Products will be used in the page to render product list
  const { data: Products } = useQuery({
    queryKey: ["ProductByBrand", brandName],
    queryFn: () => getBrandProducts(brandName),
    initialData: ProductsByBrand,
  });


  return <div>Products of a Single Brand</div>;

};

export default SingleBrandProducts;

export const getStaticProps = async ({ params }) => {
  const brandName = params.brand;
  const ProductsByBrand = await getBrandProducts(brandName);
  return {
    props: { ProductsByBrand }, // will be passed to the page component as props
  };
};

export const getStaticPaths = async ({}) => {
  const Brands = await getBrands();
  const paths = Brands.map((brand) => ({
    params: { brand: brand.attributes.name },
  }));
  return {
    paths,
    fallback: false,
  };
};
