import PropTypes from "prop-types"
import React, {useContext} from "react"
import styled from "styled-components";
import LanguageContext from '../content/language-context';
import NavLink from './navlink';
import FeatureToggle from "./feature-toggle";

const Header = () => {
  const { home, about, portfolio, blog } = useContext(LanguageContext);

  return (
  <HeaderContainer>
    <Navigator>
      <FeatureToggle disabled>
        <NavLink title={home.title} to="/" />
        <NavLink title={about.title} to="/#about" />
        <NavLink title={portfolio.title} to="/#portfolio" />
        <NavLink title={blog.title} to="/#blog" />
      </FeatureToggle>
    </Navigator>
  </HeaderContainer>
  );
}

const HeaderContainer = styled.header`
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
