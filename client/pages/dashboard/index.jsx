import { useQuery } from "@tanstack/react-query"
import { getOrders } from "../../api/order"

const Dashboard = () =>{
    const {data} = useQuery({ queryKey: ['orders'], queryFn: getOrders })
    return(
        <div>
            Dashboard
        </div>
    )
}

export default Dashboard