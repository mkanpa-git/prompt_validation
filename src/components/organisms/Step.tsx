import { ReactNode } from 'react';

export interface StepProps {
  id: string;
  title: string;
  children: ReactNode;
}

export default function Step({ title, children }: StepProps) {
  return (
    <section aria-label={title} style={{ marginBottom: '2rem' }}>
      <h2>{title}</h2>
      {children}
    </section>
  );
}
