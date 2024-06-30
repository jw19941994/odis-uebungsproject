import styled from "styled-components";
import Logo from "./Logo";
import MainNav from "./MainNav";
import PropTypes from "prop-types";

const StyledSidebar = styled.aside`
  background-color: var(--color-grey-0);
  padding: 0.2rem;
  border-right: 1px solid var(--color-grey-100);
  grid-row: 1 / -1;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  height: 100%;
  min-height: 100vh; 
  width: ${props => (props.isCollapsed ? "10rem" : "25rem")}; /* Width based on collapsed state */
  transition: width 0.3s; /* Smooth transition for width change */
`;

function Sidebar({ isCollapsed, handleCollapse }) {
  return (
    <StyledSidebar isCollapsed={isCollapsed}>
      <Logo isCollapsed={isCollapsed} />
      <MainNav isCollapsed={isCollapsed} handleCollapse={handleCollapse} />
    </StyledSidebar>
  );
}

Sidebar.propTypes = {
  isCollapsed: PropTypes.bool.isRequired,
  handleCollapse: PropTypes.func.isRequired,
};

export default Sidebar;

