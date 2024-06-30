import Heading from "../ui/Heading";
import { useState } from 'react';
import Tab from '../ui/Tab';
import Geburt from "../features/neuereintrag/Geburt";
import NFKind from "../features/neuereintrag/NFKind";

//Benötige Tabs
const tabs = ['Geburt', 'NF Kind', 'Angleichung', 'Ehe', 'NF Ehe', 'Lebenspartn.', 'NF LP', 'Sterbefall', 'TE'];

//Komponenten für Inhalte der Tabs
const tabContents = {
  0: <Geburt/>,
  1: <NFKind/>,
  2: <p>Implementierung folgt demnächst.</p>,
  3: <p>Implementierung folgt demnächst.</p>,
  4: <p>Implementierung folgt demnächst.</p>,
  5: <p>Implementierung folgt demnächst.</p>,
  6: <p>Implementierung folgt demnächst.</p>,
  7: <p>Implementierung folgt demnächst.</p>,
  8: <p>Implementierung folgt demnächst.</p>
};

function NeuerEintrag() {
  const [activeTab, setActiveTab] = useState(0);
  return (
    <>
      <Heading as="h1">Neuer Eintrag</Heading>
      <Tab tabs={tabs} activeTab={activeTab} setActiveTab={setActiveTab} tabContents={tabContents} />
    </>
  );
}
export default NeuerEintrag;
