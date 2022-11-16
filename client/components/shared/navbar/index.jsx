import {
    LockOutlined, PoweroffOutlined, SolutionOutlined, TranslationOutlined
} from "@ant-design/icons";
import { useQuery } from "@tanstack/react-query";
import { Dropdown, Menu } from "antd";
import React from 'react';
import { AiOutlineMenu } from 'react-icons/ai';
import { getCategories } from "../../../api/home";
import { Flex, FlexContentAround, Stack } from '../../styles/Flex.styled';
import { CategoryPara } from "./navbar.style";
import NavItem from './navItem';

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



const menu2 = ({ categories }) => {
    
    return (
        <div>
            {
                categories.map((cat, i) =>
                    <Menu key={i}>
                        <Menu.Item>{
                            cat.attributes.name
                        }</Menu.Item>
                    </Menu>)
            }
        </div>
    )
}

const Navbar = () => {

    const { data: categories } = useQuery({
        queryKey: ['categories'],
        queryFn: getCategories
      })

    return (
        <div>
            <FlexContentAround>
                <Stack>
                    {/* <div> */}
                   <CategoryPara>
                        <Dropdown overlay={
                            <Menu >
                                {
                                categories?.map((cat, i) => {
                                    return (
                                        <a href={`/category/${cat.attributes.name}`}>
                                            <Menu.Item key={i}>{cat.attributes?.name}</Menu.Item>
                                        </a>
                                    );
                                })
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
        </div>
    );
};

export default Navbar;