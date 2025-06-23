import { ReactNode, forwardRef } from 'react';

export interface StepProps {
  id: string;
  title: string;
  children: ReactNode;
}

const Step = forwardRef<HTMLElement, StepProps>(function Step(
  { id, title, children },
  ref,
) {
  return (
    <section ref={ref} id={id} className="step" aria-label={title} role="region">
      <h2>{title}</h2>
      {children}
    </section>
  );
});

export default Step;
