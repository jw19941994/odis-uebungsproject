// SucheStyles.js
import styled from 'styled-components';

export const SearchInput = styled.input`
  width: 100%;
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 16px;
  transition: border-color 0.2s;
  &:focus {
    border-color: var(--color-brand-700);
    outline: none;
  }

  &::placeholder {
    color: #aaa;
  }
`;
