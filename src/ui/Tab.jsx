import PropTypes from 'prop-types';
import styled from 'styled-components';

const StyledTabs = styled.div`
  display: flex;
  border-bottom: 1px solid var(--color-primary-200);
  background-color: var(--color-grey-300); /* Hintergrundfarbe für die Tabs */
  gap: 5px;
  margin-top: 20px;
  border-radius: 10px;
`;
const TabItem = styled.button`
  background: none;
  border: none;
  padding: 1.1rem 2.4rem;
  font-size: 1.5rem;
  transition: all 0.2s;
  border-bottom: 3px solid transparent;
  color: var(--color-grey-600);
  cursor: pointer;
  gap: 5px;
  &:hover {
    background-color: var(--color-grey-50);
  }
  &.active {
    color: var(--color-primary);
    border-bottom-color: var(--color-primary);
  }
`;
const TabContent = styled.div`
  padding: 1rem;
`;

const Tab = ({ tabs, activeTab, setActiveTab, tabContents }) => {
  return (
    <>
      <StyledTabs>
        {tabs.map((tab, index) => (
          <TabItem
            key={index}
            className={activeTab === index ? 'active' : ''}
            onClick={() => setActiveTab(index)}
          >
            {tab}
          </TabItem>
        ))}
      </StyledTabs>
      <TabContent>{tabContents[activeTab]}</TabContent>
    </>
  );
};

Tab.propTypes = {
    tabs: PropTypes.arrayOf(PropTypes.string).isRequired,
    activeTab: PropTypes.number.isRequired,
    setActiveTab: PropTypes.func.isRequired,
    tabContents: PropTypes.object.isRequired,
  };
export default Tab;
