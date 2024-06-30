import styled from "styled-components";

const Column = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px; /* Hier die Lücke hinzufügen */
`;

const TwoColumnContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 30px;
  @media (max-width: 900px) {
    flex-direction: column;
  }
`;

const HalfColumn = styled.div`
  flex: 1;
  min-width: 300px;
`;

export { Column, TwoColumnContainer, HalfColumn };
