import Step from './organisms/Step';
import Input from './atoms/Input';
import { useFormStore } from '../store/formStore';

interface Condition {
  field: string;
  operator: 'equals' | 'includes';
  value: unknown;
}

function evaluateCondition(
  cond: undefined | Condition | { condition?: Condition }
): boolean {
  const { formData } = useFormStore.getState();
  if (!cond) return true;
  const c = (cond as any).field ? (cond as Condition) : (cond as any).condition;
  if (!c) return true;
  const val = (formData as any)[c.field];
  switch (c.operator) {
    case 'equals':
      return val === c.value;
    case 'includes':
      return Array.isArray(val) && val.includes(c.value);
    default:
      return true;
  }
}

interface FieldSpec {
  id: string;
  label?: string;
  type?: string;
  fields?: FieldSpec[];
  ui?: { options?: any[] };
  metadata?: { multiple?: boolean };
  visibilityCondition?: Condition;
}

function FieldRenderer({ field }: { field: FieldSpec }) {
  const { formData, updateField } = useFormStore();
  if (!evaluateCondition(field.visibilityCondition)) return null;

  const value = (formData as any)[field.id] ?? '';
  const opts = field.ui?.options || [];

  switch (field.type) {
    case 'radio':
      return (
        <fieldset>
          <legend>{field.label}</legend>
          {opts.map((o: any) => {
            const val = typeof o === 'string' ? o : o.value;
            const lbl = typeof o === 'string' ? o : o.label;
            return (
              <label key={val} style={{ marginRight: 8 }}>
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
        <fieldset>
          <legend>{field.label}</legend>
          {opts.map((o: any) => {
            const val = typeof o === 'string' ? o : o.value;
            const lbl = typeof o === 'string' ? o : o.label;
            const checked = arr.includes(val);
            return (
              <label key={val} style={{ marginRight: 8 }}>
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
  if (!evaluateCondition(section.visibilityCondition)) return null;

  if (section.type === 'info') {
    return (
      <section id={section.id} style={{ marginBottom: '1rem' }}>
        {section.title && <h3>{section.title}</h3>}
        <p>{section.content}</p>
      </section>
    );
  }

  return (
    <section id={section.id} style={{ marginBottom: '1rem' }}>
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

export default function StepRenderer({ step }: { step: StepSpec }) {
  if (!evaluateCondition(step.visibilityCondition)) return null;
  return (
    <Step id={step.id} title={step.title}>
      {step.sections.map((s) => (
        <SectionRenderer key={s.id} section={s} />
      ))}
    </Step>
  );
}
