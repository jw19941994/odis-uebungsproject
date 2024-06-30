import Button from '../../ui/Button';
import { useState } from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { handleSaveClick, resetFormFields } from './formHandlers';

//Import UI
import MainContent from '../../ui/MainContent';
import Block from '../../ui/Block';
import { Column } from '../../ui/Columns';
import { HalfColumn } from '../../ui/Columns';
import { TwoColumnContainer } from '../../ui/Columns';
import ButtonContainer from '../../ui/ButtonContainer';
import InputField from '../../ui/InputField';
import SelectField from '../../ui/SelectField';
import CheckboxField from '../../ui/CheckboxField';


function Geburt() {
  //Initialer Status
  const initialFormData = {
    verzeichnisart: '',
    vorgangsnr: "",  
    kalendarjahr: "",  
    familienname: '',
    vorname: '',
    anderenamen: '',
    geburtsdatum: '',
    ereignisort: '',
    standesamtsnummer: 'ST001',
    registerart: 'G',
    erstbeurkundungsjahr: '',
    eintragsnummer: '',
    standesamt: '',
    bemerkungen: '',
    ansprechpartner: '',
    datensatzOeffentlich: false,
    aenderungenUebernehmen: false
  };
  const [formData, setFormData] = useState(initialFormData);
  //Pflichtfelder
  const requiredFields = ["familienname", "geburtsdatum", "ereignisort", ];
  return (
    <>
      <MainContent>
        {/* Daten zum Kind */}
        <Block>
        <ToastContainer />
          <h3>Daten zum Kind</h3>
          <Column>
            <InputField label="Familienname" name="familienname" required={true} />
            <InputField label="Vorname(n)" name="vorname" />
            <InputField label="Andere Namen" name="anderenamen" />
            <InputField label="Geburtsdatum" name="geburtsdatum" required={true} type="date" />
            <InputField label="Ereignisort" name="ereignisort" required={true} />
          </Column>
        </Block>
        {/* Daten zum Datensatz */}
        <Block>
          <h3>Daten zum Datensatz</h3>
          <TwoColumnContainer>
            <HalfColumn>
              <InputField label="Standesamtsnummer" name="standesamtsnummer" defaultValue="ST001" readOnly={true} />
              <InputField label="Registerart" name="registerart" defaultValue="G" readOnly={true} />
              <InputField label="Erstbeurkundungsjahr" name="erstbeurkundungsjahr" />
              <InputField label="Eintragsnummer" name="eintragsnummer" />
            </HalfColumn>
            <HalfColumn>
              <SelectField label="Standesamt" name="standesamt" options={["I in Berlin"]} />
              <InputField label="Bemerkungen" name="bemerkungen" type="textarea" />
              <InputField label="Ansprechpartner" name="ansprechpartner" />
              <CheckboxField label="Datensatz öffentlich" name="datensatzOeffentlich" />
              <CheckboxField label="Änderungen in 'Andere Namen' übernehmen" name="aenderungenUebernehmen" />
            </HalfColumn>
          </TwoColumnContainer>
        </Block>
        {/* Button */}
        <ButtonContainer>
        <Button variation="primary" size="large" onClick={() => handleSaveClick(formData, setFormData, initialFormData, requiredFields)}>Speichern</Button>
        <Button variation="secondary" size="large" type="button" style={{ marginLeft: "10px" }}  onClick={() => resetFormFields(initialFormData)}>Abbrechen</Button>
        </ButtonContainer>
      </MainContent>
    </>
  );
}
export default Geburt;
