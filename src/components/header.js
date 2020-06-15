import PropTypes from "prop-types"
import React, {useContext} from "react"
import styled from "styled-components";
import ThemeContext from '../theme/theme-context';
import NavLink from './navlink';
import ContentEN from '../content/en/navlinks/content.json';

const Header = () => {
  const theme = useContext(ThemeContext);

  return (
  <HeaderContainer>
    <Navigator>
      <NavLink title={ContentEN.home} to="/" />
      <NavLink title={ContentEN.about} to="#about" />
      <NavLink title={ContentEN.portfolio} to="#portfolio" />
      <NavLink title={ContentEN.blog} to="#blog" />
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
