import styled from "styled-components";

export const Container = styled.div<{ $openMenu?: boolean }>`
    position: fixed;
    top: 55px;
    max-width: 100%;
    width: calc(100% - ${ ({ $openMenu }) => $openMenu ? '120px' : '60px' });
`;

export const Slider = styled.div`
    box-sizing: border-box;
    max-width: inherit;
    width: inherit;
    background-color: #fff;
    padding: 15px 10px;
    display: flex;
    column-gap: 10px;
    align-items: center;
    justify-content: space-between;

    ::-webkit-scrollbar {
        display: none;
    }
`;

export const SliderContent = styled.div`
    display: flex;
    column-gap: 15px;
    overflow-x: scroll;
    scroll-behavior: smooth;
`;

export const Category = styled.button`
    font-size: 15px;
    padding: 8px;
    background-color: rgba(0, 0, 0, 0.05);
    color: #000;
    border: none;
    border-radius: 5px;
    white-space: nowrap;
    cursor: pointer;
    transition: .2s;

    &:hover {
        background-color: rgba(0, 0, 0, 0.1);
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
