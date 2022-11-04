import { FlexContentSpace } from "../styles/Flex.styled";
import Brand from "./brand";

const BrandCards = ({brands}) => {
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