import { ButtonIcon, Category, Container, Slider, SliderButton, SliderContent } from "./style";

import { useState, useContext } from "react";

import { InterfaceContext } from "../../contexts/interfaceContext";

import ButtonNext from '../../assets/button-next.png';
import ButtonBack from '../../assets/button-back.png';

interface IProps {
    categoriesList?: {name: string, id: string}[]
}


function CategoriesBar({ categoriesList }: IProps) {
    const { openMenu } = useContext(InterfaceContext);
    
    const [sliderPosition, setSliderPosition] = useState(0);
    const sliderLimit = -1000;
    
    const handleBackButton = () => {
        setSliderPosition(sliderPosition + 100);
    };
    
    const handleNextButton = () => {
        setSliderPosition(sliderPosition - 100);
    };
    
    const handleCategory = () => {
        
    };


    return (
        <Container>
            <Slider $openMenu={openMenu}>
                {
                    sliderPosition != 0 ?
                        <SliderButton onClick={() => handleBackButton()}>
                            <ButtonIcon src={ButtonBack} />
                        </SliderButton>
                    :
                        undefined
                } 

                <SliderContent $sliderPosition={sliderPosition}>
                    {
                        categoriesList ?
                            categoriesList.map((item, index) => (
                                <Category className="category" key={index}>
                                    {item.name}
                                </Category>
                            ))
                        :
                            <>
                                <Category>
                                    example
                                </Category>
                                <Category>
                                    example
                                </Category>
                                <Category>
                                    example
                                </Category>
                                <Category>
                                    example
                                </Category>
                            </>
                    }
                </SliderContent>
                
                {
                    sliderPosition != sliderLimit ?
                        <SliderButton onClick={() => handleNextButton()}>
                            <ButtonIcon src={ButtonNext} />
                        </SliderButton>
                    :
                        ''
                }

            </Slider>
        </Container>
    )
}

export default CategoriesBar;
