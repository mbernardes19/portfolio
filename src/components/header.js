import PropTypes from "prop-types"
import React, {useContext} from "react"
import styled from "styled-components";
import ThemeContext from '../theme/theme-context';
import NavLink from './navlink';

const Header = () => {
  const theme = useContext(ThemeContext);

  return (
  <HeaderContainer>
    <Navigator>
      <NavLink title="Home" to="/" />
      <NavLink title="Portfólio" to="/portfolio" />
      <NavLink title="Blog" to="/blog" />
      <NavLink title="Sobre" to="/sobre" />
    </Navigator>
  </HeaderContainer>
  );
}

const HeaderContainer = styled.header`
  background-color: ${props => props.theme.color1};
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
