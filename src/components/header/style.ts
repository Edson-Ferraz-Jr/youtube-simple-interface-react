import styled from "styled-components";

export const Container = styled.header`
    width: 100%;
    height: 55px;
    background-color: #fff;
    padding: 0 16px;
    box-sizing: border-box;
    display: flex;
    align-items: center;
    justify-content: space-between;
    position: sticky;
    top: 0;

    .menu-button-mobile {
        display: flex;
    }

    @media(min-width: 769px) {
        .menu-button-mobile {
            display: none;
        }
    }
`;

export const LogoContainer = styled.div`
    display: flex;
    align-items: center;
`;

export const ButtonContainer = styled.div<{ margin?: string }>`
    display: none;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    margin: ${({ margin }) => { return margin ? margin : 0} };
    justify-content: center;
    align-items: center;
    cursor: pointer;

    &:hover {
        background-color: #f2f2f2;
    }

    @media(min-width: 769px) {
        display: flex;
    }
`;

export const ButtonIcon = styled.img`
    width: 20px;
`;

export const SearchContainer = styled.div`
    display: flex;

    @media(max-width: 1024px) {
        max-width: 400px;
    }

    @media(max-width: 768px) {
        display: none;
    }
`;

export const SearchInputContainer = styled.div`
    width: 450px;
    height: 35px;
    border: 1px solid #d3d3d3;
    border-radius: 40px 0 0 40px;
    display: flex;
    align-items: center;
    padding: 0 16px;
`;

export const SearchInput = styled.input`
    width: 100%;
    height: 25px;
    outline: none;
    border: none;
`;

export const SearchButton = styled.div`
    border-radius: 0 40px 40px 0;
    height: 35px;
    width: 70px;
    background-color: #f8f8f8;
    border: 1px solid #d3d3d3;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
`;

export const TogglerShowInput = styled.div<{ $showInput?: boolean }>`
    display: ${ ({ $showInput }) => $showInput ? 'none' : 'flex' };
    width: 100%;
    padding: 0 20px;
    justify-content: flex-end;

    @media(min-width: 769px) {
        display: none;
    }
`;

export const SearchContainerMobile = styled.div<{ $showInput?: boolean }>`
    display: ${ ({ $showInput }) => $showInput ? 'grid' : 'none' };
    grid-template-columns: 1fr 4fr 1fr;
    background-color: #f1f1f1;
    position: fixed;
    top: 0;
    left: 0;
    height: 50px;
    max-width: 100%;
    width: 100%;
    padding: 10px;
    box-sizing: border-box;
    
    .back-button {
        ${ButtonIcon} {
            width: 30px;
            height: 30px;
        }
    }
    
    .search-button {
        border-radius: 0 40px 40px 0;
        height: 35px;
        width: 70px;
        background-color: #fff;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    @media(min-width: 769px) {
        display: none;
    }
`;

export const SearchInputContainerMobile = styled.div`
    display: flex;
    background-color: #fff;
    border-radius: 40px 0 0 40px;
    align-items: center;
    padding: 0 16px;
    height: 35px;
    max-width: 100%;

    input {
        width: 100%;
        height: 30px;
        outline: none;
        border: none;
    }
`;

export const HeaderButtons = styled.div`
    display: flex;
    justify-content: flex-end;
    white-space: nowrap;
`;

export const LoginButton = styled.button`
    display: flex;
    justify-content: space-between;
    justify-content: center;
    align-items: center;
    column-gap: 5px;
    padding: 10px;
    background-color: #fff;
    color: #065fd4;
    font-weight: 600;
    border: 1px solid #e5e5e5;
    border-radius: 20px;
    cursor: pointer;

    &:hover {
        background-color: #def1ff;
        border-color: #def1ff;
    }

    @media(max-width: 425px) {
        span {
            display: none;
        }
    }
`;
