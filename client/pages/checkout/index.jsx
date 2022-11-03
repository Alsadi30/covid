import { useStoreState } from "easy-peasy"


const Checkout = () =>{

    
    const {CartProducts} = useStoreState(state => state.Cart)

    return (
        <div>I am CheckOut</div>
    )
}

export default Checkout