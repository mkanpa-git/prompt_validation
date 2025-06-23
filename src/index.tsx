import { createRoot } from 'react-dom/client';
import ChildcareWizard from './pages/ChildcareWizard';
import './styles/design-system.css';

const container = document.getElementById('root');
if (container) {
  const root = createRoot(container);
  root.render(<ChildcareWizard />);
}
