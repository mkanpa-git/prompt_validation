import React from 'react';
import Step from './organisms/Step';
import Input from './atoms/Input';
import { useFormStore } from '../store/formStore';
import { evaluateCondition, Condition } from '../utils/conditions';

interface FieldSpec {
  id: string;
  label?: string;
  type?: string;
  fields?: FieldSpec[];
  ui?: { options?: any[] };
  metadata?: { multiple?: boolean };
  required?: boolean;
  requiredCondition?: Condition | { condition?: Condition };
  visibilityCondition?: Condition;
}

function FieldRenderer({ field }: { field: FieldSpec }) {
  const { formData, updateField, setFieldValid } = useFormStore();
  const visible = evaluateCondition(formData, field.visibilityCondition);
  const required =
    field.required || evaluateCondition(formData, field.requiredCondition);
  const value = (formData as any)[field.id];
  const opts = field.ui?.options || [];

  React.useEffect(() => {
    if (!visible || !required) {
      setFieldValid(field.id, true);
      return;
    }
    if (Array.isArray(value)) {
      setFieldValid(field.id, value.length > 0);
    } else {
      setFieldValid(
        field.id,
        value !== undefined && value !== null && value !== ''
      );
    }
  }, [visible, required, value, field.id, setFieldValid]);

  if (!visible) return null;

  switch (field.type) {
    case 'radio':
      return (
        <fieldset role="radiogroup" aria-required={required}>
          <legend id={`${field.id}-legend`}>{field.label}</legend>
          {opts.map((o: any) => {
            const val = typeof o === 'string' ? o : o.value;
            const lbl = typeof o === 'string' ? o : o.label;
            return (
              <label key={val} className="option-label">
                <input
                  type="radio"
                  name={field.id}
                  value={val}
                  checked={value === val}
                  onChange={(e) => updateField(field.id, e.target.value)}
                />
                {lbl}
              </label>
            );
          })}
        </fieldset>
      );
    case 'select':
      return (
        <div>
          <label htmlFor={field.id}>{field.label}</label>
          <select
            id={field.id}
            value={value}
            aria-required={required}
            required={required}
            aria-label={field.label}
            onChange={(e) => updateField(field.id, e.target.value)}
          >
            <option value="">Select...</option>
            {opts.map((o: any) => {
              const val = typeof o === 'string' ? o : o.value;
              const lbl = typeof o === 'string' ? o : o.label;
              return (
                <option key={val} value={val}>
                  {lbl}
                </option>
              );
            })}
          </select>
        </div>
      );
    case 'checkbox':
      const arr = Array.isArray(value) ? value : [];
      return (
        <fieldset role="group" aria-required={required}>
          <legend id={`${field.id}-legend`}>{field.label}</legend>
          {opts.map((o: any) => {
            const val = typeof o === 'string' ? o : o.value;
            const lbl = typeof o === 'string' ? o : o.label;
            const checked = arr.includes(val);
            return (
              <label key={val} className="option-label">
                <input
                  type="checkbox"
                  value={val}
                  checked={checked}
                  onChange={(e) => {
                    const checked = e.target.checked;
                    const next = Array.isArray(arr) ? [...arr] : [];
                    if (checked) {
                      if (!next.includes(val)) next.push(val);
                    } else {
                      const idx = next.indexOf(val);
                      if (idx !== -1) next.splice(idx, 1);
                    }
                    updateField(field.id, next);
                  }}
                />
                {lbl}
              </label>
            );
          })}
        </fieldset>
      );
    default:
      const type = field.type || 'text';
      return (
        <div>
          <label htmlFor={field.id}>{field.label}</label>
          <Input
            id={field.id}
            type={type as any}
            value={value as any}
            aria-required={required}
            required={required}
            aria-label={field.label}
            onChange={(e) => updateField(field.id, e.target.value)}
          />
        </div>
      );
  }
}

interface SectionSpec {
  id: string;
  title?: string;
  type?: string;
  content?: string;
  fields?: FieldSpec[];
  visibilityCondition?: Condition;
}

function SectionRenderer({ section }: { section: SectionSpec }) {
  const { formData } = useFormStore();
  if (!evaluateCondition(formData, section.visibilityCondition)) return null;

  if (section.type === 'info') {
    return (
      <section id={section.id} className="step-section">
        {section.title && <h3>{section.title}</h3>}
        <p>{section.content}</p>
      </section>
    );
  }

  return (
    <section id={section.id} className="step-section">
      {section.title && <h3>{section.title}</h3>}
      {section.fields?.map((f) => (
        <FieldRenderer key={f.id} field={f} />
      ))}
    </section>
  );
}

interface StepSpec {
  id: string;
  title: string;
  sections: SectionSpec[];
  visibilityCondition?: Condition;
}

const StepRenderer = React.forwardRef<HTMLElement, { step: StepSpec }>(
  ({ step }, ref) => {
    const { formData } = useFormStore();
    if (!evaluateCondition(formData, step.visibilityCondition)) return null;
    return (
      <Step id={step.id} title={step.title} ref={ref}>
        {step.sections.map((s) => (
          <SectionRenderer key={s.id} section={s} />
        ))}
      </Step>
    );
  },
);

export default StepRenderer;
