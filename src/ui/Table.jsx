import PropTypes from 'prop-types';
import styled from 'styled-components';

const StyledTable = styled.div`
  border: 1px solid var(--color-grey-200);
  font-size: 1.4rem;
  background-color: var(--color-grey-0);
  border-radius: 7px;
  overflow: hidden;
`;

const CommonRow = styled.div`
  display: grid;
  grid-template-columns: ${(props) => `repeat(${props.columnsCount}, 1fr)`};
  column-gap: 2.4rem;
  align-items: center;
  transition: none;
`;

const StyledHeader = styled(CommonRow)`
  padding: 1.6rem 2.4rem;
  background-color:  #233a60;
  border-bottom: 1px solid var(--color-grey-100);
  text-transform: uppercase;
  letter-spacing: 0.4px;
  font-weight: 600;
  color: #ffffff; /* Schriftfarbe auf Weiß setzen */
`;

const StyledBody = styled.section`
  margin: 0.4rem 0;
`;

const StyledRow = styled(CommonRow)`
  padding: 1.2rem 2.4rem;
  &:not(:last-child) {
    border-bottom: 1px solid var(--color-grey-100);
  }
`;

const Footer = styled.footer`
  background-color: var(--color-grey-50);
  display: flex;
  justify-content: center;
  padding: 1.2rem;
  &:not(:has(*)) {
    display: none;
  }
`;

const Empty = styled.p`
  font-size: 1.6rem;
  font-weight: 500;
  text-align: center;
  margin: 2.4rem;
`;

const Table = ({ columns, data }) => (
  <StyledTable>
    <StyledHeader columnsCount={columns.length}>
      {columns.map((col, index) => <div  key={index}>{col}</div>)}
    </StyledHeader>
    <StyledBody>
      {data.length === 0 ? (
        <Empty>Keine Daten gefunden.</Empty>
      ) : (
        data.map((row, index) => (
          <StyledRow columnsCount={columns.length} key={index}>
            {row.map((cell, cellIndex) => <div key={cellIndex}>{cell}</div>)}
          </StyledRow>
        ))
      )}
    </StyledBody>
    <Footer>
      {data.length > 0 && <p>- {data.length} Treffer -</p>}
    </Footer>
  </StyledTable>
);

Table.propTypes = {
  columns: PropTypes.arrayOf(PropTypes.string).isRequired,
  data: PropTypes.arrayOf(PropTypes.arrayOf(PropTypes.string)).isRequired,
};

export default Table;
