import { useNavigate } from 'react-router-dom';
//Navigiere zurück
export function useMoveBack() {
  const navigate = useNavigate();
  return () => navigate(-1);
}
