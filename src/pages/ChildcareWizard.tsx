import Stepper from "../components/molecules/Stepper";
import StepRenderer from "../components/FormRenderer";
import { useFormStore } from "../store/formStore";

import formSpec from "../../childcare_form.json";

export default function ChildcareWizard() {
  const { formData } = useFormStore();

  const steps = formSpec.form.steps
    .filter((s: any) => {
      const cond = (s as any).visibilityCondition;
      if (!cond) return true;
      const val = (formData as any)[cond.field];
      if (cond.operator === "equals") return val === cond.value;
      if (cond.operator === "includes")
        return Array.isArray(val) && val.includes(cond.value);
      return true;
    })
    .map((step: any) => ({
      id: step.id,
      title: step.title,
      content: <StepRenderer step={step} />,
    }));

  return <Stepper steps={steps} />;
}
