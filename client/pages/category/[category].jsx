import {useQuery} from '@tanstack/react-query';
import {getCategoryProducts} from '../../api/singleCategoryProducts';
import {useRouter} from 'next/router';
import {getCategories} from '../../api/home';
import useFilter from '../../hooks/useFilter';

const SingleCatProducts = ({ProductsByCategory}) => {
  const route = useRouter ();
  const categoryName = route.query.category;

  // data:Products will be used in the page to render product list
  const {data: Products, isLoading} = useQuery ({
    queryKey: ['ProductByCat', categoryName],
    queryFn: () => getCategoryProducts (categoryName),
    initialData: ProductsByCategory,
  });

  // filter products by price and categoryName
  const {data, refetch} = useFilter ('categories', categoryName, 500);
  console.log (data);

  if (isLoading) {
    return <LoadingSkeleton />;
  }

  return (
    <div>
      Products of a Single Category
      <button onClick={() => refetch ()}>Refetch</button>
    </div>
  );
};

export default SingleCatProducts;

export const getStaticProps = async ({params}) => {
  const categoryName = params.category;
  const ProductsByCategory = await getCategoryProducts (categoryName);
  return {
    props: {ProductsByCategory}, // will be passed to the page component as props
  };
};

export const getStaticPaths = async ({}) => {
  const Category = await getCategories ();
  const paths = Category.map (category => ({
    params: {category: category.attributes.name},
  }));
  return {
    paths,
    fallback: false,
  };
};
