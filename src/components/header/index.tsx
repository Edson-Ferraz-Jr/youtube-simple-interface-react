import {
    ButtonContainer,
    ButtonIcon,
    Container,
    HeaderButtons,
    LoginButton,
    LogoContainer,
    LogoImage,
    LogoImageContainer,
    SearchButton,
    SearchContainer,
    SearchContainerMobile,
    SearchInput,
    SearchInputContainer,
    SearchInputContainerMobile,
    TogglerShowInput
} from "./style";

import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { InterfaceContext } from "../../contexts/interfaceContext";

import HamburguerIcon from '../../assets/hamburger-icon.png';
import SearchIcon from '../../assets/search-icon.png';
import MicrophoneIcon from '../../assets/microphone-icon.png';
import LoginIcon from '../../assets/login-icon.png';
import ButtonBack from '../../assets/button-back.png';
import ThemeSwitcherIcon from '../../assets/theme-switcher-icon.png';


function Header() {
    const navigate = useNavigate();

    const { openMenu, setOpenMenu, openMenuMobile, setOpenMenuMobile, showInput, setShowInput, themeToggler } = useContext(InterfaceContext);
    
    return(
        <Container>
            <LogoContainer>
                <ButtonContainer onClick={() => setOpenMenu(!openMenu)} margin="0 10px 0 0">
                    <ButtonIcon src={HamburguerIcon} alt="" />
                </ButtonContainer>

                <ButtonContainer className="menu-button-mobile" onClick={() => { setOpenMenuMobile(!openMenuMobile); setOpenMenu(true) }} margin="0 10px 0 0">
                    <ButtonIcon src={HamburguerIcon} alt="" />
                </ButtonContainer>

                <LogoImageContainer>
                    <LogoImage onClick={() => navigate('/')} />
                </LogoImageContainer>
            </LogoContainer>

            <TogglerShowInput $showInput={showInput} onClick={ () => setShowInput(!showInput) }>
                <ButtonIcon src={SearchIcon} />
            </TogglerShowInput>

            <SearchContainerMobile $showInput={showInput} >
                <div className="back-button" onClick={ () => setShowInput(!showInput) } >
                    <ButtonIcon src={ButtonBack} />
                </div>
                
                <SearchInputContainerMobile>
                    <input type="text" placeholder="Pesquisar" />    
                </SearchInputContainerMobile>

                <div className="search-button">
                    <ButtonIcon src={SearchIcon} />
                </div>
            </SearchContainerMobile>

            <SearchContainer>
                <SearchInputContainer>
                    <SearchInput placeholder="Pesquisar" />
                </SearchInputContainer>
                
                <SearchButton>
                    <ButtonIcon src={SearchIcon} alt="" />
                </SearchButton>

                <ButtonContainer margin='0 0 0 10px'>
                    <ButtonIcon src={MicrophoneIcon} alt="" />
                </ButtonContainer>
            </SearchContainer>

            <HeaderButtons>

                {
                    <LoginButton onClick={() => navigate('/sign-in')}>
                        <ButtonIcon src={LoginIcon} alt="" />

                        <span>Fazer login</span>
                    </LoginButton>
                }

                <ButtonContainer className="theme-switcher" margin='0 0 0 10px' onClick={() => themeToggler()}>
                    <ButtonIcon src={ThemeSwitcherIcon} alt="" />
                </ButtonContainer>
            </HeaderButtons>
        </Container>
    )
}

export default Header;
