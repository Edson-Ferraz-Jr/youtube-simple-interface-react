import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    box-sizing: border-box;
    overflow-x: hidden;
`;

export const VideosContainer = styled.div<{ $openMenu: boolean }>`
    width: 100%;
    max-width: 1600px;
    padding: 30px 0;
    margin: auto;
    display: grid;
    column-gap: 20px;
    row-gap: 50px;
    grid-template-columns: ${ ({ $openMenu }) => $openMenu ? 'repeat(3, 1fr)' : 'repeat(4, 1fr)' };

    @media(min-width: 1440px) {
        grid-template-columns: ${ ({ $openMenu }) => $openMenu ? 'repeat(4, 1fr)' : 'repeat(5, 1fr)' };
    }
`;
