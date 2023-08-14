import { Container,
    ContainerVideoCards,
    ShortsLogo,
    VideoCard,
    VideoCardDescription,
    VideoCardThumbnail
} from "./style";

import ShortsLogoImg from '../../assets/big-shorts-logo.png'


function ShortsComponent() {
    return(
        <Container>
            <ShortsLogo src={ShortsLogoImg} />
            
            <ContainerVideoCards>
                {
                    [...Array(10)].map((item, index) => (
                        <VideoCard key={index}>
                            <VideoCardThumbnail />

                            <VideoCardDescription>
                                <span className="title">Título do vídeo</span>

                                <span>1 mi de visualiazações</span>
                            </VideoCardDescription>
                        </VideoCard>
                    ))
                }
            </ContainerVideoCards>
        </Container>
    )
}

export default ShortsComponent;
