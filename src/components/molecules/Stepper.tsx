import { ReactNode } from 'react';
import Button from '../atoms/Button';
import { useFormStore } from '../../store/formStore';

interface StepperProps {
  steps: { id: string; title: string; content: ReactNode }[];
}

export default function Stepper({ steps }: StepperProps) {
  const { stepIndex, next, prev } = useFormStore();
  const clampedIndex = Math.min(stepIndex, steps.length - 1);
  const step = steps[clampedIndex];

  return (
    <div>
      <div role="navigation" aria-label="form-stepper">
        {steps.map((s, i) => (
          <span key={s.id} style={{ marginRight: 8, fontWeight: i === clampedIndex ? 'bold' : 'normal' }}>
            {s.title}
          </span>
        ))}
      </div>
      <div>{step.content}</div>
      <div style={{ marginTop: 16 }}>
        <Button onClick={prev} disabled={clampedIndex === 0} aria-label="Previous step">
          Back
        </Button>
        <Button onClick={next} disabled={clampedIndex === steps.length - 1} aria-label="Next step" style={{ marginLeft: 8 }}>
          Next
        </Button>
      </div>
    </div>
  );
}
