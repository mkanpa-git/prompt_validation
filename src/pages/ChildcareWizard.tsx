import Stepper from "../components/molecules/Stepper";
import StepRenderer from "../components/FormRenderer";
import { useFormStore } from "../store/formStore";
import { evaluateCondition } from "../utils/conditions";

import formSpec from "../../childcare_form.json";

export default function ChildcareWizard() {
  const { formData } = useFormStore();

  const visibleSteps = formSpec.form.steps.filter((s: any) =>
    evaluateCondition(formData, s.visibilityCondition)
  );
  const steps = visibleSteps.map((step: any) => ({
    id: step.id,
    title: step.title,
    content: <StepRenderer step={step} />,
    spec: step,
  }));

  return <Stepper steps={steps} />;
}
