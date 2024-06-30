// DashboardStyles.js

import styled from 'styled-components';

export const DashboardContainer = styled.div`
  width: 100%;
  padding: 20px;
`;

export const Grid = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
`;

export const HorizontalLine = styled.hr`
  border: 0;
  height: 1px;
  background: #ddd;
  margin: 20px 0;
`;

export const Cell = styled.div`
  flex: 1 1 calc(33.333% - 40px);
  box-sizing: border-box;
  text-align: center;
  margin: 10px;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 8px 8px 8px rgba(0, 0, 0, 0.2);
  @media (max-width: 768px) {
    flex: 1 1 calc(50% - 20px);
  }

  @media (max-width: 480px) {
    flex: 1 1 100%;
  }
`;

export const Icon = styled.div`
  font-size: 50px;
  color: #ea722c;
`;

export const LinkContainer = styled.div`
  margin-top: 10px;
`;

export const Link = styled.a`
  text-decoration: underline;
  color: #ea722c;

  &:hover {
    text-decoration: none;
  }
`;
