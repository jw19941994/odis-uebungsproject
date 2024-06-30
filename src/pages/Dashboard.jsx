import Heading from '../ui/Heading';
import { FaPlus, FaSearch, FaHistory, FaInbox, FaUsers, FaCertificate, FaMoneyCheckAlt, FaQuestionCircle, FaCog } from 'react-icons/fa'; // Beispiel-Icons
import { 
  DashboardContainer, 
  Grid, 
  HorizontalLine, 
  Cell, 
  Icon, 
  LinkContainer, 
  Link 
} from '../ui/DashboardStyles';
import { useNavigate } from 'react-router-dom';

const Dashboard = () => {
  const navigate = useNavigate();

  // Exemplarischer Benutzer
  const user = { name: 'Herr Mustermann' };
  const hours = new Date().getHours();
  let greeting;

  // Zeige Begrüßungsstring
  if (hours < 12) {
    greeting = 'Guten Morgen';
  } else if (hours < 18) {
    greeting = 'Guten Tag';
  } else {
    greeting = 'Guten Abend';
  }

  // Zellen für Dashboard 
  const cells = [
    { icon: <FaPlus />, title: 'Neuer Eintrag', link: '/neuereintrag' },
    { icon: <FaSearch />, title: 'Suche starten', link: '/suche' },
    { icon: <FaHistory />, title: 'Letzte Suchanfragen', link: '/letztesuchanfrage' },
    { icon: <FaInbox />, title: 'Postbox', link: '/postbox' },
    { icon: <FaUsers />, title: 'Teambox', link: '/teambox' },
    { icon: <FaCertificate />, title: 'Urkundenbox', link: '/urkundenbox' },
    { icon: <FaMoneyCheckAlt />, title: 'Bezahlbox', link: '/bezahlbox' },
    { icon: <FaQuestionCircle />, title: 'Online-Hilfe', link: '/help' },
    { icon: <FaCog />, title: 'Einstellungen', link: '/settings' },
  ];

  return (
    <DashboardContainer>
      <Heading as="h1" showCloseButton={false}>Dashboard - {`${greeting}, ${user.name}!`}</Heading>
      <HorizontalLine />
      <Grid>
        {cells.map((cell, index) => (
          <Cell key={index} onClick={() => navigate(cell.link)}>
            <Icon>{cell.icon}</Icon>
            <h2>{cell.title}</h2>
            <LinkContainer>
            <Link style={{ cursor: 'pointer' }}>{cell.title}</Link>
            </LinkContainer>           
          </Cell>
        ))}
      </Grid>
    </DashboardContainer>
  );
};

export default Dashboard;
