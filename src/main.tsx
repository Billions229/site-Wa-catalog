import { createRoot } from 'react-dom/client';
import { HelmetProvider } from 'react-helmet-async';
import App from './App.tsx';
import './index.css';

// Version optimisée avec HelmetProvider mais sans StrictMode
// StrictMode est supprimé car il double les rendus et effets en développement

// Créer le root avant de rendre quoi que ce soit
const root = createRoot(document.getElementById('root')!);

// Rendre l'application avec un délai minimal pour éviter le blocage initial
setTimeout(() => {
  root.render(
    <HelmetProvider>
      <App />
    </HelmetProvider>
  );
}, 0);
