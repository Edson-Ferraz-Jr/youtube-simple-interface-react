import styled from "styled-components";

export const Container = styled.div`
    max-width: 100%;
    width: 100%;
`;

export const Slider = styled.div<{ $openMenu?: boolean }>`
    box-sizing: border-box;
    max-width: inherit;
    width: inherit;
    background-color: #fff;
    padding: 15px 10px;
    position: fixed;
    top: 55px;
    display: flex;
    column-gap: 10px;
    align-items: center;
    justify-content: space-between;

    @media(min-width: 1024px) {
        
    }

    @media(min-width: 1440px) {

    }

    @media(min-width: 1920px) {

    }
`;

export const SliderContent = styled.div<{ $sliderPosition?: number }>`
    display: flex;
    column-gap: 15px;
    overflow-x: hidden;
    
    .category {
        transform: translateX(${ ({ $sliderPosition }) => `${$sliderPosition}px` });
    }
`;

export const Category = styled.button`
    font-size: 15px;
    padding: 8px;
    background-color: #f2f2f2;
    color: #000;
    border: none;
    border-radius: 5px;
    white-space: nowrap;
    cursor: pointer;
    transition: .2s;

    &:hover {
        background-color: #e5e5e5;
    }

    &:focus {
        background-color: #000;
        color: #fff;
        outline: none;
    }
`;

export const SliderButton = styled.div`
    max-width: 40px;
    max-height: 40px;
    padding: 5px;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;

    &:hover {
        background-color: #e5e5e5;
    }
`;

export const ButtonIcon = styled.img`
    width: 25px;
    height: 25px;
    border-radius: 50%;
`;
