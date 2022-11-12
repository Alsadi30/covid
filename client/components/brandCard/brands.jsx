import { FlexCenter, FlexContentSpace } from "../styles/Flex.styled";
import Brand from "./brand";

const BrandCards = ({brands}) => {
    return (
        <FlexCenter mt="35px" gap="6rem">
            {
                brands?.map(brand => <Brand key={brand?.id} brand={brand}>
                </Brand>)
            }
        </FlexCenter>
    );
};

export default BrandCards;