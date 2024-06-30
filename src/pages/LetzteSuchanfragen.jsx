import { useEffect, useState } from 'react';
import Heading from '../ui/Heading';
import MainContent from '../ui/MainContent';
import { getSearchQuery } from '../services/apiSearchQuery';
import { handleNotImplemented } from '../functions/helpers';
//Import UI
import Table from '../ui/Table';
import Spinner from '../ui/Spinner';
import Button from '../ui/Button';
import Pagination from '../ui/Pagination'; 

function LetzteSuchanfragen() {
  const [searchQueries, setSearchQueries] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(10); // Anzahl der Elemente pro Seite

  // Berechnung der aktuellen Elemente auf der aktuellen Seite
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = searchQueries.slice(indexOfFirstItem, indexOfLastItem);

  //Spalten für Tabelle
  const columns = ["Letzter Suchbegriff(e)", "Verzeichniss(e)", "Zeitstempel", "Aktionen"];

  //Fetch meine alten Suchanfragen aus der DB
  useEffect(() => {
    const fetchSearchQueries = async () => {
      try {
        const data = await getSearchQuery();
        setSearchQueries(data.reverse());
        setLoading(false);
      } catch (error) {
        console.error(error);
        setLoading(false);
      }
    };
    fetchSearchQueries();
  }, []);

  const formattedData = currentItems.map((query) => {
    const directories = JSON.parse(query.directories);
    const selectedDirectories = Object.keys(directories)
      .filter(key => directories[key])
      .map(key => key.charAt(0).toUpperCase() + key.slice(1));  
      return [
      query.search_term,
      // Zeige die ausgewählten Verzeichnisse an
      selectedDirectories.join(', '), 
      // Zeige Zeitstempel
      new Date(query.timestamp).toLocaleString(),
      // Starte neue Suche
      <Button key={query.id} variation="secondary" size="small" onClick={handleNotImplemented}>Erneut suchen</Button> 
    ];
  });

  // Navigiere weiter
  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <>
      <Heading as="h1">Letzte Suchanfragen</Heading>
      <MainContent>
        {loading ? (
          <Spinner />
        ) : (
          <>
            <Table columns={columns} data={formattedData} />
            <Pagination
              itemsPerPage={itemsPerPage}
              totalItems={searchQueries.length}
              currentPage={currentPage}
              onPageChange={handlePageChange}
            />
          </>
        )}
      </MainContent>
    </>
  );
}

export default LetzteSuchanfragen;
