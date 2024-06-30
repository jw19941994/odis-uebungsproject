import styled from "styled-components";
import PropTypes from "prop-types";
import logoGif from "../assets/layout_set_logo.gif"; // Importiere die GIF-Datei

const StyledLogo = styled.div`
  text-align: left;
`;

const Img = styled.img`
`;

const LogoText = styled.span`
  font-size: ${props => (props.isCollapsed ? "0" : "35px")};
  font-weight: bold;
  color: var(--color-darkblue-brand);
  visibility: ${props => (props.isCollapsed ? "hidden" : "visible")}; /* Setze die Sichtbarkeit basierend auf isCollapsed */
`;

function Logo({ isCollapsed }) {
  return (
    <StyledLogo>
      <Img src={logoGif} alt="Logo" /> {/* Verwende den importierten Pfad */}
      <LogoText isCollapsed={isCollapsed}>ODiS 2.0</LogoText>
    </StyledLogo>
  );
}

Logo.propTypes = {
  isCollapsed: PropTypes.bool.isRequired,
};

export default Logo;
