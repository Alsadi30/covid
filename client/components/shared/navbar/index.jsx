import React from 'react';
import styled from 'styled-components';
import { Flex, FlexContentAround, Stack } from '../../styles/Flex.styled';
import { AiOutlineMenu } from 'react-icons/ai';
import NavItem from './navItem';
import { DownOutlined, SmileOutlined } from '@ant-design/icons';
import { Dropdown, Space } from 'antd';

const items2 = [
    {
        key: '1',
        label: (
            <a target="_blank" rel="noopener noreferrer" href="https://www.antgroup.com">
                1st menu item
            </a>
        ),
    },
    {
        key: '2',
        label: (
            <a target="_blank" rel="noopener noreferrer" href="https://www.aliyun.com">
                2nd menu item (disabled)
            </a>
        ),
        icon: <SmileOutlined />,
        disabled: true,
    },
    {
        key: '3',
        label: (
            <a target="_blank" rel="noopener noreferrer" href="https://www.luohanacademy.com">
                3rd menu item (disabled)
            </a>
        ),
        disabled: true,
    },
    {
        key: '4',
        danger: true,
        label: 'a danger item',
    },
];


const items = ['Home', 'Products', 'Review', 'About'];

const CategoryPara = styled.a`
    font-size: 18x;
    font-weight: 500;
    padding: 3px 10px 3px 10px;
    border: 1px solid #E1E3E6;
    border-radius: 6px;
    display: flex;
    align-items: center;

    ul li ul.dropdown{
        min-width: 100%; /* Set width of the dropdown */
        background: #f2f2f2;
        display: none;
        position: absolute;
        z-index: 999;
        left: 0;
    }
    ul li:hover ul.dropdown{
        display: block;	/* Display the dropdown */
    }
    ul li ul.dropdown li{
        display: block;
    }
`

const CategoryList = styled.div`

        // min-width: 100%; /* Set width of the dropdown */
        background: #f2f2f2;
        // display: none;
        // position: absolute;
        // z-index: 999;
        // left: 0;

        li {
            display: flex;
            justify-content: flex-start;
        }
        
        a {
            padding: 5px 3px;
        }

        


`

const Navbar = ({ categories }) => {
  

    return (
        <>
            <FlexContentAround>
                <Stack>
                    {/* <div> */}
                    <CategoryPara href="#">
                        <Dropdown menu={{ items2 }}>
                            <>
                                <AiOutlineMenu style={{ marginRight: '7px' }}></AiOutlineMenu>
                                All Categories
                            </>
                        </Dropdown>


                    </CategoryPara>

                    {/* </div> */}

                    {/* <Dropdown
                        menu={{
                            items2
                        }}
                    >
                        <>
                            <a onClick={(e) => e.preventDefault()}>
                                <Space>
                                    Hover me
                                    <DownOutlined />
                                </Space>
                            </a>
                        </>
                    </Dropdown> */}

                    <ul>
                        {
                            items?.map((item, i) =>
                                <li key={i}>
                                    <NavItem item={item} />
                                </li>
                            )
                        }
                    </ul>
                </Stack>

                <div>
                    <p style={{ fontSize: '16px', fontWeight: '500' }}>Contact: <strong><a href="tel:01771904605">01771904605</a></strong></p>
                </div>
            </FlexContentAround>
        </>
    );
};

export default Navbar;