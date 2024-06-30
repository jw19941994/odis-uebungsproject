import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";
import Header from "./Header";
import styled from "styled-components";
import { useState } from "react";


const StyledAppLayout = styled.div`
  display: grid;
  grid-template-columns: ${props => (props.isCollapsed ? "8rem" : "25rem")} 1fr; /* Adjusted width based on sidebar collapse state */
  grid-template-rows: auto 1fr;
  min-height: 100vh; 
`;
const Main = styled.main`
  background-color: var(--color-grey-50);
  padding: 3rem 4.8rem;
`;

function AppLayout() {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const handleCollapse = () => {
    setIsCollapsed(!isCollapsed);
  };

  return (
    <StyledAppLayout isCollapsed={isCollapsed}>
      <Header />
      <Sidebar isCollapsed={isCollapsed} handleCollapse={handleCollapse} />
      <Main isCollapsed={isCollapsed}>
        <Outlet />
      </Main>
    </StyledAppLayout>
  );
}

export default AppLayout;
