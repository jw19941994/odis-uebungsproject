import styled, { css } from "styled-components";
import { FaTimes } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';

const HeadingContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  box-shadow: 1px 1px 4px rgba(0, 0, 0, 0.1);
  border-radius: 5px;
`;

const CloseButton = styled.button`
  background: transparent;
  border: none;
  cursor: pointer;
  transition: transform 0.3s ease;
  z-index: 999;
  &:hover {
    transform: scale(1.2); /* Vergrößert das Symbol beim Hover-Effekt */
  }
`;

const CloseIcon = styled(FaTimes)`
  font-size: 20px; /* Anpassen der Symbolgröße */
  color: #555; /* Anpassen der Symbolfarbe */
`;

const StyledHeading = styled.h1`
  ${(props) =>
    props.as === "h1" &&
    css`
      font-size: 3rem;
      font-weight: 600;
    `}

  ${(props) =>
    props.as === "h2" &&
    css`
      font-size: 2rem;
      font-weight: 600;
    `}
    
  ${(props) =>
    props.as === "h3" &&
    css`
      font-size: 2rem;
      font-weight: 500;
    `}
    
  line-height: 1.4;
`;

function Heading({ as, children, showCloseButton }) {
  const navigate = useNavigate();

  const handleGoToDashboard = () => {
    navigate('/dashboard');
  };

  return (
    <HeadingContainer>
      <StyledHeading as={as}>{children}</StyledHeading>
      {showCloseButton && (
        <CloseButton onClick={handleGoToDashboard}>
          <CloseIcon />
        </CloseButton>
      )}
    </HeadingContainer>
  );
}

Heading.propTypes = {
  as: PropTypes.string,
  children: PropTypes.node.isRequired,
  showCloseButton: PropTypes.bool, 
};

Heading.defaultProps = {
  showCloseButton: true, // Standardmäßig wird die Schließen-Schaltfläche angezeigt
};
export default Heading;