// searchUtils.js
import moment from "moment-timezone";
import { addSearchQuery } from "../../services/apiSearchQuery";

//Filter die Daten entsprechend den Suchkriterien 
export const getFilteredData = (data, searchTerm, checkboxStates) => {
      //Prüfe, ob Suchbegriff in Familienname vorkommt, falls Checkbox "alleNamenfelder" aktiv, so prüfe auch den Vornamen 
    return data.filter(item => {
      const matchesSearchTerm = (checkboxStates.alleNamensfelder
        ? (item[3] && item[3].toLowerCase().includes(searchTerm.toLowerCase())) ||
          (item[4] && item[4].toLowerCase().includes(searchTerm.toLowerCase()))
        : (item[3] && item[3].toLowerCase().includes(searchTerm.toLowerCase())));
      if (!matchesSearchTerm) {
        return false;
      }
        //Prüfe, ob Checkbox aktiv und ob die Verzeichnisart, also item[1], den Key enthält
      for (const key in checkboxStates) {
        if (checkboxStates[key] && item[1] && item[1].toLowerCase().includes(key.toLowerCase())) {
          return true;
        }
      }
      return false;
    });
  };
  
// Speichern der Suche in meiner DB
  export const saveSearchQuery = (searchTerm, checkboxStates) => {
    const newQuery = {
      search_term: searchTerm,
      directories: JSON.stringify(checkboxStates),
      timestamp: moment().tz('Europe/Berlin').format()
    };
    return addSearchQuery(newQuery); 
  };
  