import React from 'react';
import { Drawer} from 'antd';


const CartDrawer = ({ onClose, open }) => {
    return (
        <>
            <Drawer title="Basic Drawer" placement="right" onClose={onClose} open={open}>
                Cart
            </Drawer>
        </>
    );
};

export default CartDrawer;