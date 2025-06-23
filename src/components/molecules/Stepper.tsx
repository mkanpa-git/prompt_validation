import { ReactNode, useEffect } from 'react';
import Button from '../atoms/Button';
import { useFormStore } from '../../store/formStore';
import { evaluateCondition } from '../../utils/conditions';
import { saveDraft } from '../../services/persistence';

interface StepperProps {
  steps: { id: string; title: string; content: ReactNode; spec: any }[];
}

export default function Stepper({ steps }: StepperProps) {
  const { stepIndex, next, prev, formData, fieldValid } = useFormStore();

  const getRequiredFields = (spec: any): string[] => {
    const ids: string[] = [];
    if (!spec) return ids;
    if (!evaluateCondition(formData, spec.visibilityCondition)) return ids;
    const traverse = (fields: any[]) => {
      fields?.forEach((f) => {
        if (!evaluateCondition(formData, f.visibilityCondition)) return;
        if (f.fields) {
          traverse(f.fields);
        } else {
          const required = f.required || evaluateCondition(formData, f.requiredCondition);
          if (required) ids.push(f.id);
        }
      });
    };
    spec.sections?.forEach((s: any) => {
      if (!evaluateCondition(formData, s.visibilityCondition)) return;
      traverse(s.fields || []);
    });
    return ids;
  };
  const clampedIndex = Math.min(stepIndex, steps.length - 1);
  const step = steps[clampedIndex];
  const requiredIds = getRequiredFields(step.spec);
  const allValid = requiredIds.every((id) => fieldValid[id]);
  const disableNext = clampedIndex === steps.length - 1 || !allValid;

  useEffect(() => {
    saveDraft('draft', { formData, stepIndex });
  }, [stepIndex, formData]);

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
        <Button onClick={next} disabled={disableNext} aria-label="Next step" style={{ marginLeft: 8 }}>
          Next
        </Button>
        <Button
          onClick={() => saveDraft('draft', { formData, stepIndex })}
          aria-label="Save draft"
          style={{ marginLeft: 8 }}
        >
          Save for later
        </Button>
      </div>
    </div>
  );
}
