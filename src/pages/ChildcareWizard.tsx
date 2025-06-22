import Stepper from "../components/molecules/Stepper";
import Step from "../components/organisms/Step";
import Input from "../components/atoms/Input";
import { useFormStore } from "../store/formStore";

import formSpec from "../../childcare_form.json";

function ConsentStep() {
  return (
    <Step id="consent" title="Consent">
      <p>{formSpec.form.steps[0].sections[0].content}</p>
    </Step>
  );
}

function InstructionsStep() {
  return (
    <Step id="instructions" title="Instructions">
      <p>{formSpec.form.steps[1].sections[0].content}</p>
    </Step>
  );
}

function ApplicantInfoStep() {
  const { updateField, formData } = useFormStore();
  return (
    <Step id="applicant" title="Applicant Info">
      <label htmlFor="firstName">First Name</label>
      <Input
        id="firstName"
        value={(formData as any).firstName || ""}
        onChange={(e) => updateField("firstName", e.target.value)}
      />
    </Step>
  );
}

export default function ChildcareWizard() {
  const steps = [
    { id: "consent", title: "Consent", content: <ConsentStep /> },
    {
      id: "instructions",
      title: "Instructions",
      content: <InstructionsStep />,
    },
    {
      id: "applicant",
      title: "Applicant Info",
      content: <ApplicantInfoStep />,
    },
  ];
  return <Stepper steps={steps} />;
}
