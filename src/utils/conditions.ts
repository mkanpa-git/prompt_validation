export interface Condition {
  field: string;
  operator: 'equals' | 'includes';
  value: unknown;
}

export function evaluateCondition(
  formData: Record<string, unknown>,
  cond?: Condition | { condition?: Condition }
): boolean {
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
