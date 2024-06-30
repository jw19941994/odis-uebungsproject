import Button from '../ui/Button';
import Heading from '../ui/Heading';
import Table from '../ui/Table';
import { useState } from 'react';
import Spinner from '../ui/Spinner';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { handleNotImplemented } from '../functions/helpers';
// Import UI
import MainContent from '../ui/MainContent';
import Block from '../ui/Block';
import { HalfColumn } from '../ui/Columns';
import { TwoColumnContainer } from '../ui/Columns';
import ButtonContainer from '../ui/ButtonContainer';
import InputField from '../ui/InputField';
import SelectField from '../ui/SelectField';
//  Spaltenüberschriften
const columns = ["ID", "Verzeichnisart", "Familienname"]; 

function Postbox() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [showTable, setShowTable] = useState(false);

  // Simuliere erstmal nur Data-Fetching, denn Funktion noch nicht implementiert
  const handleSearch = () => {
    setLoading(true);
    setShowTable(true);
    setTimeout(() => {
      setData([]);
      setLoading(false);
    }, 1000); 
  };

  return (
    <>
    <Heading as="h1">Postbox</Heading>
    <MainContent>
      <ToastContainer />
      {/* Daten zur Post */}
      <Block>
        <TwoColumnContainer>
          <HalfColumn>
            <InputField label="Familienname" name="familienname" />
            <InputField label="Vorname" name="vorname" />
            <InputField label="Geburtsdatum" name="geburtsdatum" type="date" />
            <InputField label="Eintragsnummer" name="eintragsnummer" />
          </HalfColumn>
          <HalfColumn>
            <SelectField label="Meldungstyp" name="meldungstyp" options={["Option 1", "Option 2", "Option 3"]} />
            <SelectField label="Status" name="status" options={["Option 1", "Option 2", "Option 3"]} />
            <SelectField label="Team" name="team" options={["Team A", "Team B", "Team C"]} />
          </HalfColumn>
        </TwoColumnContainer>
      </Block>
      {/* Buttons */}
      <ButtonContainer style={{ marginTop: "20px" }}>
        <Button variation="primary" size="large" onClick={handleSearch}>Suchen</Button>
        <Button variation="secondary" size="large" type="button" style={{ marginLeft: "10px" }} onClick={handleNotImplemented} >Reservieren</Button>
        <Button variation="secondary" size="large" type="button" style={{ marginLeft: "10px" }} onClick={handleNotImplemented}>Suche zurücksetzen</Button>
      </ButtonContainer>
      <Block style={{ marginTop: "20px" }}>
        {showTable && (
          <div>
             <h3>Ergebnisliste</h3>
            {loading ? (
              <Spinner />
            ) : (
              <>
                {data.length === 0 ? (
                  <p>Noch keine Nachrichten gefunden. Implementierung folgt demnächst.</p>
                ) : (
                  <Table columns={columns} data={data} />
                )}
              </>
            )}
          </div>
        )}
      </Block>
    </MainContent>
    </>
  );
}

export default Postbox;
