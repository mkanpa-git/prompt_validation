import create from 'zustand';

export type Role = 'curator' | 'applicant';

export interface FormState {
  stepIndex: number;
  formData: Record<string, unknown>;
  role: Role;
  loadDraft: (data: Record<string, unknown>) => void;
  updateField: (path: string, value: unknown) => void;
  next: () => void;
  prev: () => void;
}

export const useFormStore = create<FormState>((set) => ({
  stepIndex: 0,
  formData: {},
  role: 'applicant',
  loadDraft: (data) => set({ formData: data }),
  updateField: (path, value) =>
    set((state) => ({ formData: { ...state.formData, [path]: value } })),
  next: () => set((state) => ({ stepIndex: state.stepIndex + 1 })),
  prev: () => set((state) => ({ stepIndex: Math.max(0, state.stepIndex - 1) })),
}));
