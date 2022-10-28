import brands from "../staticData/brand";
import { FlexContentSpace } from "./styles/Flex.styled";
import BrandStyle from "./BrandStyle";

const Brand = () => {
    return (
        <FlexContentSpace>
            {
                brands?.map(brand => <BrandStyle key={brand?.id} brand={brand}>
                </BrandStyle>)
            }
        </FlexContentSpace>
    );
};

export default Brand;