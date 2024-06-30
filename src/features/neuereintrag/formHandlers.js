// formHandlers.js
import { toast } from 'react-toastify';
import { addStandesamtData } from '../../services/apiStandesamt';

//Funktion bei Klick auf "Speichern"
export const handleSaveClick = async (formData, setFormData, initialFormData, requiredFields) => {
  const formDataToSave = {
    verzeichnisart: "Geburt",
    kalendarjahr: "2024",
    familienname: document.getElementsByName('familienname')[0].value,
    geburtsdatum: document.getElementsByName('geburtsdatum')[0].value,
    vorname: document.getElementsByName('vorname')[0].value,
    anderenamen: document.getElementsByName('anderenamen')[0].value,
    ereignisort: document.getElementsByName('ereignisort')[0].value,
    standesamtsnummer: document.getElementsByName('standesamtsnummer')[0].value,
    registart: document.getElementsByName('registerart')[0].value,
    erstbeurkundungsjahr: document.getElementsByName('erstbeurkundungsjahr')[0].value || null,
    eintragsnummer: document.getElementsByName('eintragsnummer')[0].value || null,
    standesamt: document.getElementsByName('standesamt')[0].value,
    bemerkung: document.getElementsByName('bemerkungen')[0].value,
    ansprechpartner: document.getElementsByName('ansprechpartner')[0].value,
    datensatzoeffentlich: document.getElementsByName('datensatzOeffentlich')[0].checked,
    aenderunganderenamen: document.getElementsByName('aenderungenUebernehmen')[0].checked
  };

  // Validiere, ob integer
  if (!validateIntegerFields(formDataToSave)) {
    return;
  }

  // Meldungen, wenn nicht alle Felder gesetzt
  for (const field of requiredFields) {
    if (formDataToSave[field] === '' || formDataToSave[field] === null || formDataToSave[field] === undefined) {
      const capitalizedField = field.charAt(0).toUpperCase() + field.slice(1);
      toast.error(`Das Feld "${capitalizedField}" ist erforderlich.`);
      return;
    }
  }

  // Aktualisiere Status
  setFormData(formDataToSave);
  console.log(formData);

  // Sende an DB
  try {
    const data = await addStandesamtData(formDataToSave);
    console.log(data);
    toast.success(`Der Eintrag wurde erfolgreich hinzugefügt.`);
  } catch (error) {
    console.error("Fehler beim Hinzufügen des Eintrags:", error);
    toast.error(`Der Eintrag konnte nicht hinzugefügt werden.`);
  }
  resetFormFields(initialFormData);
};

//Prüfe, ob integer
export const validateIntegerFields = (formData) => {
    if (formData.erstbeurkundungsjahr && !Number.isInteger(parseInt(formData.erstbeurkundungsjahr))) {
      toast.error('Erstbeurkundungsjahr muss eine ganze Zahl sein.');
      return false;
    }
    if (formData.eintragsnummer && !Number.isInteger(parseInt(formData.eintragsnummer))) {
      toast.error('Eintragsnummer muss eine ganze Zahl sein.');
      return false;
    }
    return true;
  };

//Daten in Eingabefeldern zurücksetzen
export const resetFormFields = (initialFormData) => {
  document.getElementsByName('familienname')[0].value = initialFormData.familienname;
  document.getElementsByName('vorname')[0].value = initialFormData.vorname;
  document.getElementsByName('anderenamen')[0].value = initialFormData.anderenamen;
  document.getElementsByName('geburtsdatum')[0].value = initialFormData.geburtsdatum;
  document.getElementsByName('ereignisort')[0].value = initialFormData.ereignisort;
  document.getElementsByName('standesamtsnummer')[0].value = initialFormData.standesamtsnummer;
  document.getElementsByName('registerart')[0].value = initialFormData.registerart;
  document.getElementsByName('erstbeurkundungsjahr')[0].value = initialFormData.erstbeurkundungsjahr;
  document.getElementsByName('eintragsnummer')[0].value = initialFormData.eintragsnummer;
  document.getElementsByName('standesamt')[0].value = initialFormData.standesamt;
  document.getElementsByName('bemerkungen')[0].value = initialFormData.bemerkungen;
  document.getElementsByName('ansprechpartner')[0].value = initialFormData.ansprechpartner;
  document.getElementsByName('datensatzOeffentlich')[0].checked = initialFormData.datensatzOeffentlich;
  document.getElementsByName('aenderungenUebernehmen')[0].checked = initialFormData.aenderungenUebernehmen;
};
