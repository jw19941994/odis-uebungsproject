import Button from '../ui/Button';
import { getStandesamtDataById } from '../services/apiStandesamt';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { handleNotImplemented } from '../functions/helpers';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Spinner from '../ui/Spinner';
import Heading from '../ui/Heading';
// Import UI
import MainContent from '../ui/MainContent';
import Block from '../ui/Block';
import { Column } from '../ui/Columns';
import { HalfColumn } from '../ui/Columns';
import { TwoColumnContainer } from '../ui/Columns';
import ButtonContainer from '../ui/ButtonContainer';
import InputField from '../ui/InputField';
import SelectField from '../ui/SelectField';
import CheckboxField from '../ui/CheckboxField';

function Datensatz() {
  const { id } = useParams();
  const [datensatz, setDatensatz] = useState(null);
  const [loading, setLoading] = useState(true);

  // Laden Daten anhand der übergebenen ID
  useEffect(() => {
    getStandesamtDataById(id)
      .then(data => {
        setDatensatz(data[0]);
        setLoading(false);
      })
      .catch(error => {
        console.error("Error fetching data:", error);
        setLoading(false);
      });
  }, [id]);

  // Zeige Spinner, solange die Daten nicht geladen sind
  if (loading) {
    return <Spinner />;
  }
  if (!datensatz) {
    return <div>Daten konnten leider nicht geladen werden.</div>;
  }

  return (
    <>
      <Heading as="h1">Datensatz zu {datensatz.vorname} {datensatz.familienname} (ID:{datensatz.id})</Heading>
      <MainContent>
        <ToastContainer />
        {/* Daten zum Kind */}
        <Block>
          <h3>Daten zum Kind</h3>
          <Column>
            <InputField label="Familienname" name="familienname" defaultValue={datensatz.familienname} disabled />
            <InputField label="Vorname(n)" name="vorname" defaultValue={datensatz.vorname} disabled />
            <InputField label="Andere Namen" name="andereNamen" defaultValue={datensatz.andereNamen} disabled />
            <InputField label="Geburtsdatum" name="geburtsdatum" type="date" defaultValue={datensatz.geburtsdatum} disabled />
            <InputField label="Ereignisort" name="ereignisort" defaultValue={datensatz.ereignisort} disabled />
          </Column>
        </Block>
        {/* Daten zum Datensatz */}
        <Block>
          <h3>Daten zum Datensatz</h3>
          <TwoColumnContainer>
            <HalfColumn>
              <InputField label="Standesamtsnummer" name="standesamtsnummer" defaultValue={datensatz.standesamtsnummer} disabled />
              <InputField label="Registerart" name="registerart" defaultValue={datensatz.registart} disabled />
              <InputField label="Erstbeurkundungsjahr" name="erstbeurkundungsjahr" defaultValue={datensatz.erstbeurkundungsjahr} disabled />
              <InputField label="Eintragsnummer" name="eintragsnummer" defaultValue={datensatz.eintragsnummer} disabled />
            </HalfColumn>
            <HalfColumn>
              <SelectField label="Standesamt" name="standesamt" options={[datensatz.standesamt]} defaultValue={datensatz.standesamt} disabled />
              <InputField label="Bemerkungen" name="bemerkungen" defaultValue={datensatz.bemerkung} type="textarea" disabled />
              <InputField label="Ansprechpartner" name="ansprechpartner" defaultValue={datensatz.ansprechpartner} disabled />
              <CheckboxField label="Datensatz öffentlich" name="datensatzOeffentlich" checked={datensatz.datensatzoeffentlich} disabled />
              <CheckboxField label="Änderungen in /Andere Namen/ übernehmen" name="aenderungenUebernehmen" checked={datensatz.aenderunganderenamen} disabled />
            </HalfColumn>
          </TwoColumnContainer>
        </Block>
        <ButtonContainer>
          <Button variation="primary" size="large" onClick={handleNotImplemented}>Bearbeiten</Button>
          <Button variation="secondary" size="large" type="button" style={{ marginLeft: "10px" }} onClick={handleNotImplemented}>Kopieren</Button>
        </ButtonContainer>
      </MainContent>
    </>
  );
}

export default Datensatz;
