import {useQuery} from '@tanstack/react-query';
import {getOrders} from '../../api/order';

const Dashboard = () => {
  const {data, isLoading} = useQuery ({
    queryKey: ['orders'],
    queryFn: getOrders,
  });

  if (isLoading) {
    return <LoadingSkeleton />;
  }

  return (
    <div>
      Dashboard
    </div>
  );
};

export default Dashboard;
