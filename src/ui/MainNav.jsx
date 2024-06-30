import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { FaArrowLeft, FaUser } from 'react-icons/fa'; // Import des Pfeilsymbols
import PropTypes from "prop-types";
import {
  HiOutlineHome
} from "react-icons/hi2";
import { FaPlus, FaSearch, FaHistory, FaInbox,  FaCertificate, FaMoneyCheckAlt, FaQuestionCircle, FaCog } from 'react-icons/fa'; // Beispiel-Icons


const NavList = styled.ul`
  display: flex;
  flex-direction: column;
  background: #233a60;
  gap: 0.8rem;
  width: ${props => (props.isCollapsed ? "80px" : "100%")}; /* Adjust width based on isCollapsed state */
  height: 100vh;
  border-top-right-radius: 10px;
  border-bottom-right-radius: 10px;
  transition: width 0.3s; /* Smooth transition for width change */
`;

const StyledNavLink = styled(NavLink)`
  &:link,
  &:visited {
    display: flex;
    align-items: center;
    gap: ${props => (props.isCollapsed ? "0" : "1.4rem")}; /* Adjust gap based on isCollapsed state */
    color: var(--color-grey-100);
    font-size: 1.8rem;
    font-weight: 500;
    padding: 1.2rem ${props => (props.isCollapsed ? "1.2rem" : "3.4rem")}; /* Adjust padding based on isCollapsed state */
    transition: all 0.3s;
  }

  &:hover,
  &:active,
  &.active:link,
  &.active:visited {
    color: white;
    border-radius: var(--border-radius-sm);
  }

  & svg {
    width: 2.4rem;
    height: 2.4rem;
    color: var(--color-grey-100);
    transition: all 0.3s;
  }
  &:hover svg,
  &:active svg,
  &.active:link svg,
  &.active:visited svg {
    color: #4f46e5;
  }

  span {
    display: ${props => (props.isCollapsed ? "none" : "inline")}; /* Hide text based on isCollapsed state */
  }
`;

function MainNav({ isCollapsed, handleCollapse }) {
  return (
    <nav>
      <NavList isCollapsed={isCollapsed}>
        <li>
          <StyledNavLink
            to="#"
            isCollapsed={isCollapsed}
          >
             <FaArrowLeft
              onClick={handleCollapse}
              style={{
                fontSize: '50px',
                marginLeft: 'auto',
                padding: '1px',
                color: 'white',
                border: '1px solid white', // Add border here
                borderRadius: '10px', // Add border-radius if you want rounded corners
                transition: 'transform 0.3s ease',
                transform: isCollapsed ? 'rotate(180deg)' : 'rotate(0)',
              }}
            />
          </StyledNavLink>
        </li>
        <li>
          <StyledNavLink to="/dashboard" isCollapsed={isCollapsed}>
            <HiOutlineHome />
            <span>Dashboard</span>
          </StyledNavLink>
        </li>
        <li>
          <StyledNavLink to="/neuereintrag" isCollapsed={isCollapsed}>
            <FaPlus />
            <span>Neuer Eintrag</span>
          </StyledNavLink>
        </li>
        <li>
          <StyledNavLink to="/suche" isCollapsed={isCollapsed}>
            <FaSearch />
            <span>Suche</span>
          </StyledNavLink>
        </li>
        <li>
          <StyledNavLink to="/letztesuchanfrage" isCollapsed={isCollapsed}>
            <FaHistory />
            <span>Letzte Suchanfragen</span>
          </StyledNavLink>
        </li>
        <li>
          <StyledNavLink to="/postbox" isCollapsed={isCollapsed}>
            <FaInbox />
            <span>Postbox</span>
          </StyledNavLink>
        </li>
        <li>
          <StyledNavLink to="/teambox" isCollapsed={isCollapsed}>
            <FaUser />
            <span>Teambox</span>
          </StyledNavLink>
        </li>
        <li>
          <StyledNavLink to="/urkundenbox" isCollapsed={isCollapsed}>
            <FaCertificate />
            <span>Urkundenbox</span>
          </StyledNavLink>
        </li>
        <li>
          <StyledNavLink to="/bezahlbox" isCollapsed={isCollapsed}>
            <FaMoneyCheckAlt />
            <span>Bezahlbox</span>
          </StyledNavLink>
        </li>
        <div style={{ marginTop: 'auto', marginBottom:'100px' }}>
          <li>
            <StyledNavLink to="/help" isCollapsed={isCollapsed}>
              <FaQuestionCircle />
              <span>Online-Hilfen</span>
            </StyledNavLink>
          </li>
          <li>
            <StyledNavLink to="/settings" isCollapsed={isCollapsed}>
              <FaCog />
              <span>Einstellungen</span>
            </StyledNavLink>
          </li>
        </div>
      </NavList>
    </nav>
  );
}

MainNav.propTypes = {
  isCollapsed: PropTypes.bool.isRequired,
  handleCollapse: PropTypes.func.isRequired,
};

export default MainNav;
