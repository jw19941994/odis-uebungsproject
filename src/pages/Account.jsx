import Heading from '../ui/Heading';
import Button from '../ui/Button';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { handleNotImplemented } from '../functions/helpers';
//Import UI
import MainContent from '../ui/MainContent';
import FormGroup from '../ui/FormGroup';
import Block from '../ui/Block';
import { HalfColumn } from '../ui/Columns';
import { TwoColumnContainer } from '../ui/Columns';
import ButtonContainer from '../ui/ButtonContainer';
import InputField from '../ui/InputField';
import SelectField from '../ui/SelectField';
import FileInput from '../ui/FileInput';


function Account() {
  return (
    <>
    <Heading as="h1">Account</Heading>
    <MainContent>
      <ToastContainer />
      <Block>
        <TwoColumnContainer>
          <HalfColumn>
          <InputField label="Benutzername" name="username" required type="text" defaultValue="benutzer123" />
              <InputField label="E-Mail-Adresse" name="email" required type="email" defaultValue="benutzer@example.com" />
              <InputField label="Passwort" name="password" required type="password" defaultValue="password123" />
              <SelectField label="Anrede" name="salutation" options={["Herr", "Frau", "Divers"]} required />
              <InputField label="Vorname" name="firstName" required type="text" defaultValue="Max" />
              <InputField label="Nachname" name="lastName" required type="text" defaultValue="Mustermann" />
          </HalfColumn>
           <HalfColumn>
           <InputField label="Suffix" name="suffix" type="text" defaultValue="Jr." />
              <InputField label="Benutzer-ID" name="userId" required type="text" defaultValue="12345" />
              <InputField label="Position" name="position" type="text" defaultValue="Admin" />
            <FormGroup>
              <label>Bild zum Hochladen</label>
              <FileInput type="file" name="profilePicture" disabled />  
            </FormGroup>
          </HalfColumn>
        </TwoColumnContainer>
      </Block>
      {/* Buttons */}
      <ButtonContainer>
        <Button variation="primary" size="large" onClick={handleNotImplemented}>
        Speichern</Button>
      </ButtonContainer>
    </MainContent>
    </>
  );
}

export default Account;
