import { useOutletContext } from 'react-router-dom';
import Home from './Home';

export default function HomePage() {
  const { openEnquiryModal } = useOutletContext();
  return <Home openEnquiryModal={openEnquiryModal} />;
}
