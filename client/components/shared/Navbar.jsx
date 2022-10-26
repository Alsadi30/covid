import React from 'react';
import { Flex, FlexContentAround } from '../styles/Flex.styled';

const items = ['Home', 'Shop', 'Product', 'Pages', 'About'];

const Navbar = () => {
    return (
        <FlexContentAround>
            <Flex>
                <div>
                    <a href="#">All Categories</a>
                </div>

                <ul>
                    {
                        items.map(item =>
                            <li>
                                <a href='#'>{item}</a>
                            </li>
                        )
                    }
                </ul>
            </Flex>

            <div>
                <p>Contact: <strong>01771904605</strong></p>
            </div>
        </FlexContentAround>
    );
};

export default Navbar;