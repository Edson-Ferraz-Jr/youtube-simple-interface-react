import { ChannelImage, Container, ImageBanner, TextCard, TextContainer, Title, TitleContainer } from "./style";

interface IProps {
    video: {
        image: string
        title: string,
        channel: string,
        views: string,
        time: string
    }
}

function VideoComponent({ video }: IProps) {
    return (
        <Container>
            <ImageBanner $thumbnail={video.image} />

            <TitleContainer>
                <ChannelImage>
                    A
                </ChannelImage>

                <TextContainer>
                    <Title>{ video.title }</Title>
                    <TextCard>{ video.channel }</TextCard>
                    <TextCard>{ video.views } de visualizações - há { video.time }</TextCard>
                </TextContainer>
            </TitleContainer>
        </Container>
    )
}

export default VideoComponent;
