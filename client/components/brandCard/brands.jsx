import brands from "../../staticData/brand";
import { FlexContentSpace } from "../styles/Flex.styled";
import Brand from "./brand";

const BrandCards = () => {
    return (
        <FlexContentSpace>
            {
                brands?.map(brand => <Brand key={brand?.id} brand={brand}>
                </Brand>)
            }
        </FlexContentSpace>
    );
};

export default BrandCards;