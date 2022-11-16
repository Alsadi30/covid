import React from 'react';
import styled from 'styled-components';
import { Flex, FlexContentAround, Stack } from '../../styles/Flex.styled';
import { AiOutlineMenu } from 'react-icons/ai';
import NavItem from './navItem';
import { DownOutlined, SmileOutlined } from '@ant-design/icons';
import { Avatar, Menu, Dropdown } from "antd";
import {
    UserOutlined,
    SolutionOutlined,
    LockOutlined,
    TranslationOutlined,
    PoweroffOutlined
} from "@ant-design/icons";

const widgetMenu = (
    <Menu>
        <Menu.Item>
            <SolutionOutlined className="icon" />
            profile
        </Menu.Item>
        <Menu.Item>
            <LockOutlined className="icon" />
            change password
        </Menu.Item>
        <Menu.Item>
            <TranslationOutlined className="icon" />
            change language
        </Menu.Item>
        <Menu.Item>
            <PoweroffOutlined className="icon" />
            sign out
        </Menu.Item>
    </Menu>
);


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
        display: block;
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

const List = styled.ul`
        // display: inline-block;
        // position: relative;

        width: 100%;
        background: red;
        position: absolute;
        z-index: 999;

        li {
            display:none;
            background-color: red;
        }
    
`

const menu2 = ({ categories }) => {
    return (
        <>
            {
                categories?.map((cat, i) =>
                    <Menu key={i}>
                        <Menu.Item>{
                            cat?.attributes?.name
                        }</Menu.Item>
                    </Menu>)
            }
        </>
    )
}

const Navbar = ({ categories }) => {

    return (
        <>
            <FlexContentAround>
                <Stack>
                    {/* <div> */}
                    <CategoryPara href="#">
                        <Dropdown overlay={
                            <Menu >
                                {
                                    categories.map((cat, i) => (
                                        <Menu.Item key={i}>{cat?.attributes?.name}</Menu.Item>
                                    ))
                                }
                            </Menu>
                        } >
                            <Flex>
                                <AiOutlineMenu style={{ marginRight: '7px' }}></AiOutlineMenu>
                                All Categories
                            </Flex>
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