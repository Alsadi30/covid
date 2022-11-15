import { useQuery } from "@tanstack/react-query";
import { useRouter } from "next/router";
import { getCategories } from "../../api/home";
import { getCategoryProducts } from "../../api/singleCategoryProducts";
import SingleCategory from "../../components/category/category";
import LoadingSkeleton from "../../components/shared/skeleton";
import { products } from "../../data/products.json";
import useFilter from "../../hooks/useFilter";

const SingleCatProducts = ({ ProductsByCategory }) => {
  const route = useRouter();
  const categoryName = route.query.category;

  // data:Products will be used in the page to render product list
  const { data: Products, isLoading } = useQuery({
    queryKey: ["ProductByCat", categoryName],
    queryFn: () => getCategoryProducts(categoryName),
    initialData: ProductsByCategory,
  });

  // filter products by price and categoryName
  const { data, refetch } = useFilter("category", categoryName, 500, "asc");

  if (isLoading) {
    return <LoadingSkeleton />;
  }

  return (
    <div>
      <SingleCategory products={products} heading="Category filter Products" />
    </div>
  );
};

export default SingleCatProducts;

export const getStaticProps = async ({ params }) => {
  const categoryName = params.category;
  const ProductsByCategory = await getCategoryProducts(categoryName);
  return {
    props: { ProductsByCategory }, // will be passed to the page component as props
  };
};

export const getStaticPaths = async ({}) => {
  const Category = await getCategories();
  const paths = Category.map((category) => ({
    params: { category: category.attributes.name },
  }));
  return {
    paths,
    fallback: false,
  };
};
