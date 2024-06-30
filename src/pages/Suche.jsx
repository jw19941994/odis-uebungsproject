import { useEffect, useState } from 'react';
import { getStandesamtData } from '../services/apiStandesamt.js';
import { useNavigate } from 'react-router-dom';
import Checkboxen from '../features/suche/Checkboxen.jsx';
//Import UI
import Spinner from '../ui/Spinner.jsx';
import Pagination from '../ui/Pagination.jsx';
import MainContent from '../ui/MainContent.jsx';
import Heading from '../ui/Heading';
import Row from '../ui/Row';
import Button from '../ui/Button';
import Table from '../ui/Table';
import { SearchInput } from '../ui/SearchInput.jsx';
import ButtonContainer from '../ui/ButtonContainer.jsx';
import Block from '../ui/Block.jsx';
//Ausgelagert
import { handleReset } from '../features/suche/handleReset.js';
import { getFilteredData, saveSearchQuery } from '../features/suche/searchUtils'; // Pfade anpassen je nach Projektstruktur


const Suche = () => {
  const navigate = useNavigate();  
  const [data, setData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [showTable, setShowTable] = useState(false);
  const [loading, setLoading] = useState(false);
  const itemsPerPage = 10;
  const [searchTerm, setSearchTerm] = useState('');

  //Initialer Status für "Alle"-Checkboxen
  const [selectAll, setSelectAll] = useState({
    directories: false,
    ehe: false,
    namensfuehrung: false,
    lebenspartn: false
  });

  //Initialer Status für Checkboxen
  const [checkboxStates, setCheckboxStates] = useState({
    geburt: true,
    namensfuehrung_kind: false,
    angleichung: false,
    ehe: false,
    namensfuehrung_ehe: false,
    namensfuehrung_lebenspartnerschaft: false,
    lebenspartnerschaft: false,
    sterbefaelle: false,
    todeserklaerungsbeschluesse: false,
    alleNamensfelder: false,
    deaktivierteDatensaetze: false
  });

  //Checkbox-Kategorien
  const categories = {
    directories: ['geburt', 'namensfuehrung Kind', 'angleichung'],
    ehe: ['ehe', 'namensfuehrung Ehe'],
    namensfuehrung: ['namensfuehrung Lebenspartnerschaft', 'lebenspartnerschaft'],
    lebenspartn: ['sterbefaelle', 'todeserklaerungsbeschluesse']
  };

  //Spaltenköpfe Ergebnistabelle
  const columns = ["ID", "Verzeichnisart", "Kalenderjahr", "Familienname", "Vorname", "Geburtsdatum",  "Ansprechpartner", "Aktion"];
  
  //Berechnungen für Ergebnisliste und Seiten navigieren
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = data.slice(indexOfFirstItem, indexOfLastItem);

  //Lade Daten aus DB, formatiere sie und filter entsprechend der Checkboxen und des Suchstrings
  useEffect(() => {
    if (showTable && loading) {
      getStandesamtData().then(fetchedData => {
        const formattedData = fetchedData.map(item => [
          item.id.toString(),
          item.verzeichnisart,
          item.kalendarjahr,
          item.familienname,
          item.vorname,
          item.geburtsdatum,
          item.ansprechpartner,
          <Button variation="secondary" size="small" key={item.id} onClick={() => handleButtonClick(item.id)}>Öffnen</Button>
        ]);
        //Ausgelagert nach: ../features/suche/searchUtils
        const filteredData = getFilteredData(formattedData, searchTerm, checkboxStates);
        setData(filteredData);
        setLoading(false);
      });
    }
  }, [showTable, loading, searchTerm, checkboxStates]);

  

  const handleButtonClick = (id) => {
    navigate(`/datensatz/${id}`);
  };

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const handleSearchClick = () => {
    setShowTable(true);
    setLoading(true);
    //Ausgelagert nach: ../features/suche/searchUtils
    saveSearchQuery(searchTerm, checkboxStates)
      .then(() => {
        console.log('Suchanfrage erfolgreich gespeichert');
      })
      .catch((error) => {
        console.error(error);
      });
  };

  //Wenn "Alle" gewählt wird
  const handleSelectAll = (category) => {
    const newSelectAll = !selectAll[category];
    setSelectAll(prevState => ({ ...prevState, [category]: newSelectAll }));
    setCheckboxStates(prevState => ({
      ...prevState,
      ...categories[category].reduce((acc, item) => {
        acc[item] = newSelectAll;
        return acc;
      }, {})
    }));
  };

  const handleCheckboxChange = (name) => {
    setCheckboxStates(prevState => ({
      ...prevState,
      [name]: !prevState[name]
    }));
  };

  const handleResetWrapper = () => {
    handleReset(setSearchTerm, setSelectAll, setCheckboxStates, setShowTable);
  };


  return (
    <>
    <Heading as="h1">Suche</Heading>
    <MainContent>
    <Row type="vertical">
      <Block >
        <SearchInput type="text" placeholder="Suche..." value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} />
          <label>
            <input type="checkbox" name="alleNamensfelder" checked={checkboxStates.alleNamensfelder} onChange={() => handleCheckboxChange('alleNamensfelder')} /> Alle Namensfelder durchsuchen
          </label>
          <label>
            <input type="checkbox" name="deaktivierteDatensaetze" checked={checkboxStates.deaktivierteDatensaetze} onChange={() => handleCheckboxChange('deaktivierteDatensaetze')} /> Deaktivierte Datensätze einbinden
          </label>
      </Block>
      <Block >
      <Checkboxen
        title="Verzeichnisse"
        categories={categories}
        checkboxStates={checkboxStates}
        selectAll={selectAll}
        handleSelectAll={handleSelectAll}
        handleCheckboxChange={handleCheckboxChange}
      />
      </Block>
      <ButtonContainer style={{ marginTop: "0px" }}>
        <Button variation="primary" size="large" onClick={handleSearchClick}>Suche</Button>
        <Button variation="secondary" size="large" type="button" style={{ marginLeft: "10px" }} onClick={handleResetWrapper}>Suche zurücksetzen</Button>
      </ButtonContainer>
      <Block>
      {showTable && (
        <div>
            <h3>Ergebnisliste</h3>
          {loading ? (
            <Spinner />
          ) : (
            <>
              <Table columns={columns} data={currentItems} />
              <Pagination
                itemsPerPage={itemsPerPage}
                totalItems={data.length}
                currentPage={currentPage}
                onPageChange={handlePageChange}
              />
            </>
          )}
        </div>
      )}
      </Block>
    </Row>
    </MainContent>
    </>
  );
}
export default Suche;
