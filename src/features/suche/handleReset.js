
//Funktion zum Reset (Checkbox, Suchbegriff)
export const handleReset = (setSearchTerm, setSelectAll, setCheckboxStates,setShowTable) => {
    setSearchTerm('');
    setSelectAll({
      directories: false,
      ehe: false,
      namensfuehrung: false,
      lebenspartn: false
    });
    setCheckboxStates({
      geburt: false,
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
    setShowTable(false);
  };