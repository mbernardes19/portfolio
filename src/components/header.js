import React, {useContext} from "react"
import styled from "styled-components";
import LanguageContext from '../content/language-context';
import NavLink from './navlink';
import FeatureToggle from "./feature-toggle";
import LanguageToggle from './language-toggle';

const Header = () => {
  const { currentLang, setCurrentLang } = useContext(LanguageContext);
  const { home, about, portfolio, blog } = currentLang;

  return (
  <HeaderContainer>
    <Navigator>
        <NavLink title={home.title} to="/" />
        <NavLink title={about.title} to="/#about" />
        <NavLink title={portfolio.title} to="/#portfolio" />
        <FeatureToggle disabled>
          <NavLink title={blog.title} to="/#blog" />
        </FeatureToggle>
    </Navigator>
    <LanguageToggle setCurrentLanguage={setCurrentLang}/>
  </HeaderContainer>
  );
}

const HeaderContainer = styled.header`
  position: relative;
  max-width: 960px;
  margin: 0 auto;
  background-color: ${props => props.theme.primaryColor};
  margin-bottom: 1.45rem;
`;

const Navigator = styled.nav`
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
  align-items: center;
  max-width: 820px;
  margin: 0 auto;
  padding: 1.45rem 4.0875rem;
`;

export default Header
