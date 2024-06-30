import styled from "styled-components";
import { AiOutlineSearch, AiOutlineBell, AiOutlineSetting, AiOutlineClose } from 'react-icons/ai'; // Import der Symbole
import { useNavigate } from 'react-router-dom';
import { useState } from "react";
import { ToastContainer } from 'react-toastify';

const StyledHeader = styled.header`
  background-color: var(--color-grey-0);
  padding: 1.2rem 4.8rem;
  border-bottom: 1px solid var(--color-grey-100);
  display: flex;
  height: 90px;
  align-items: center;
  justify-content: space-between; /* Zentriert den Inhalt horizontal und platziert die Symbole ganz rechts */
`;

const IconsContainer = styled.div`
  display: flex;
  align-items: center;
`;

const SearchContainer = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 20px; /* Abrundung der Ecken */
  flex-grow: 1; /* Damit die Suchleiste den verfügbaren Platz einnimmt */
  max-width: 50%; /* Begrenzt die Breite auf die Hälfte */
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); /* Hinzufügen eines Schattens */
`;

const SearchInput = styled.input`
  padding: 0.5rem 2rem 0.5rem 3rem; /* Platz für das Suchsymbol und X-Symbol */
  border-radius: 25px; /* Abrundung der Ecken */
  border: 1px solid var(--color-grey-200);
  width: 100%;
  box-sizing: border-box; /* Inklusive Padding und Border in der Breite */
`;

const SearchIcon = styled(AiOutlineSearch)`
  position: absolute;
  font-size: 25px;
  left: 10px;
  top: 50%;
  transform: translateY(-50%);
`;

const CloseIcon = styled(AiOutlineClose)`
  position: absolute;
  font-size: 20px;
  right: 10px;
  top: 50%;
  transform: translateY(-50%);
  cursor: pointer;
`;

const BellIcon = styled(AiOutlineBell)`
  font-size: 24px;
  margin-left: 10px;
`;

const SettingIcon = styled(AiOutlineSetting)`
  font-size: 24px;
  margin-left: 10px;
`;

const InitialsContainer = styled.div`
  display: flex;
  align-items: center;
`;

const JWInitials = styled.div`
  font-size: 14px; /* Kleinere Größe */
  font-weight: bold;
  margin-left: 10px; /* Reduzierter Abstand */
  border: 1px solid grey;
  border-radius: 50%;
  width: 34px; /* Kleinere Breite */
  height: 34px; /* Kleinere Höhe */
  display: flex;
  color:white;
  justify-content: center;
  align-items: center;
  background-color: var(--color-grey-500);
`;

const HeaderContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-grow: 1;
`;

function Header() 
{
  const navigate = useNavigate();
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const handleSettingsClick = () => {
    navigate('/settings');
  };
  const togglePopup = () => {
    setIsPopupOpen(!isPopupOpen);
  };
 
  return (
    <>
    <StyledHeader>
       <HeaderContent>
      <SearchContainer>
      <ToastContainer />
        <SearchIcon />
        <SearchInput type="text" placeholder=" Suche..." />
        <CloseIcon />
      </SearchContainer>
    </HeaderContent>
      <IconsContainer>
        <BellIcon/>
        <SettingIcon onClick={handleSettingsClick} style={{ cursor: 'pointer' }} />
        <InitialsContainer onClick={togglePopup} style={{ cursor: 'pointer' }}>
          <JWInitials>JW</JWInitials>
          {isPopupOpen && (
                 <PopupContent onClick={(e) => e.stopPropagation()}>
                 <PopupLink onClick={() => navigate('/account')}>Mein Account</PopupLink>
                 <PopupLink >Logout</PopupLink>
                 <PopupCloseButton onClick={togglePopup}>X</PopupCloseButton>
               </PopupContent>
          )}
        </InitialsContainer>
      </IconsContainer>
    </StyledHeader>
    </>
  );
}

export default Header;



const PopupContent = styled.div`
  position: absolute;
  top: 75px; /* Adjust this value to position the popup below the initials */
  right: 0;
  background: white;
  margin-right: 50px;
  padding: 20px;
  border-radius: 8px;
  width: 200px;
  box-shadow: 0 1px 15px #1c345b;
  z-index: 1000;
    border: 1px solid #1c345b; /* Border-Stil und -Farbe */

`;

const PopupCloseButton = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  padding: 5px;
  border: none;
  background-color: transparent;
  font-size: 16px;
  cursor: pointer;
  transition: color 0.3s ease;

  &:hover {
    color: #ff0000;
  }
`;

const PopupLink = styled.p`
  margin: 0;
  padding: 2px 0;
  cursor: pointer;

  &:hover {
    text-decoration: underline;
  }
`;