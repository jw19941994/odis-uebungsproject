import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { handleNotImplemented } from '../../functions/helpers';

// Import UI
import Button from '../../ui/Button';
import MainContent from '../../ui/MainContent';
import Block from '../../ui/Block';
import { Column } from '../../ui/Columns';
import { HalfColumn } from '../../ui/Columns';
import { TwoColumnContainer } from '../../ui/Columns';
import ButtonContainer from '../../ui/ButtonContainer';
import InputField from '../../ui/InputField';
import SelectField from '../../ui/SelectField';
import CheckboxField from '../../ui/CheckboxField';

function NFKind() {
  return (
    <>
      <MainContent>
        <ToastContainer />
        {/* Daten zum Kind */}
        <Block>
          <h3>Namensführung Kind</h3>
          <Column>
            <InputField label="Familienname" name="familienname" required />
            <InputField label="Vorname(n)" name="vorname" />
            <InputField label="Andere Namen" name="andereNamen" />
            <InputField label="Geburtsdatum" name="geburtsdatum" required type="date" />
            <InputField label="Ereignisort" name="ereignisort" required />
          </Column>
        </Block>
        {/* Daten zum Datensatz */}
        <Block>
          <h3>Daten zum Datensatz</h3>
          <TwoColumnContainer>
            <HalfColumn>
              <InputField label="Standesamtsnummer" name="standesamtsnummer" required defaultValue="11013013" />
            </HalfColumn>
            <HalfColumn>
              <SelectField label="Standesamt" name="standesamt" options={["I in Berlin"]} />
              <InputField label="Bemerkungen" name="bemerkungen" />
              <CheckboxField label="Ansprechpartner" name="ansprechpartner" />
              <CheckboxField label="Datensatz öffentlich" name="datensatzOeffentlich" />
              <CheckboxField label="Änderungen in 'Andere Namen' übernehmen" name="aenderungenUebernehmen" />
            </HalfColumn>
          </TwoColumnContainer>
        </Block>
        {/* Buttons */}
        <ButtonContainer>
          <Button variation="primary" size="large" onClick={handleNotImplemented}>Speichern</Button>
          <Button variation="secondary" size="large" type="button" style={{ marginLeft: "10px" }} onClick={handleNotImplemented}>Abbrechen</Button>
        </ButtonContainer>
      </MainContent>
    </>
  );
}

export default NFKind;
