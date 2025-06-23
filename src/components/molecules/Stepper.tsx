import { ReactNode, useEffect, useRef } from 'react';
import Button from '../atoms/Button';
import { useFormStore } from '../../store/formStore';
import { evaluateCondition } from '../../utils/conditions';
import { saveDraft, submitApplication } from '../../services/persistence';

interface StepperProps {
  steps: { id: string; title: string; content: ReactNode; spec: any }[];
}

export default function Stepper({ steps }: StepperProps) {
  const { stepIndex, next, prev, formData, fieldValid } = useFormStore();
  const containerRef = useRef<HTMLDivElement>(null);
  const stepRef = useRef<HTMLElement>(null);

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
  const isLastStep = clampedIndex === steps.length - 1;

  useEffect(() => {
    saveDraft('draft', { formData, stepIndex });
  }, [stepIndex, formData]);

  useEffect(() => {
    const el = stepRef.current?.querySelector<HTMLElement>(
      'input, select, textarea, button, [tabindex]:not([tabindex="-1"])',
    );
    el?.focus();
  }, [clampedIndex]);

  return (
    <div
      ref={containerRef}
      className="stepper-container"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === 'ArrowLeft') {
          prev();
          e.preventDefault();
        }
        if (e.key === 'ArrowRight' && !disableNext) {
          next();
          e.preventDefault();
        }
      }}
    >
      <nav role="navigation" aria-label="form-stepper">
        <ul className="stepper">
          {steps.map((s, i) => (
            <li key={s.id} aria-current={i === clampedIndex ? 'step' : undefined}>
              {s.title}
            </li>
          ))}
        </ul>
      </nav>
      <div ref={stepRef}>{step.content}</div>
      <div className="step-actions" role="group" aria-label="wizard actions">
        <Button onClick={prev} disabled={clampedIndex === 0} aria-label="Previous step">
          Back
        </Button>
        {!isLastStep && (
          <Button onClick={next} disabled={disableNext} aria-label="Next step">
            Next
          </Button>
        )}
        {isLastStep && (
          <Button
            onClick={() => submitApplication('draft', formData as any)}
            disabled={!allValid}
            aria-label="Submit application"
          >
            Submit
          </Button>
        )}
        <Button
          onClick={() => saveDraft('draft', { formData, stepIndex })}
          aria-label="Save draft"
        >
          Save for later
        </Button>
      </div>
    </div>
  );
}
