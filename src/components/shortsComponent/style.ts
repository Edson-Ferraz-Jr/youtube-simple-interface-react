import { styled } from 'styled-components';

export const Container = styled.div`
    width: 100%;
    border-top: 4px solid #ccc;
    border-bottom: 4px solid #ccc;
`;

export const ShortsLogo = styled.img`
    width: 120px;
`;

export const ContainerVideoCards = styled.div`
    padding: 5px 0;
    display: flex;
    flex-wrap: wrap;
    column-gap: 20px;
    row-gap: 30px;
    justify-content: center;
`;

export const VideoCard = styled.div`
    background-color: #fff;
    width: 200px;
    height: 450px;
`;

export const VideoCardThumbnail = styled.div`
    background-color: #f00;
    width: 100%;
    height: 80%;
    border-radius: 15px;
    background-image: url('http://placehold.co/1080x1920?text=thumbnail');
    background-size: cover;
    background-position: 50% 50%;
`;

export const VideoCardDescription = styled.div`
    padding: 10px;
    color: #fff;
    display: flex;
    flex-direction: column;
    row-gap: 5px;

    .title {
        color: #000;
        font-size: 18px;
        font-weight: 500;
    }

    span {
        color: #8c8c8c;
        font-size: 14px;
    }
`;
