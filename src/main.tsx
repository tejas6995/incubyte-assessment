import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import StringCalculator from '@/components/StringCalculator';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <StringCalculator />
  </StrictMode>
);
