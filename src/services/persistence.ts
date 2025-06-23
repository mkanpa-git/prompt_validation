const BASE_URL = 'https://virtserver.swaggerhub.com/mkanpa/ApplicationsService/1.0.0';

export interface DraftData {
  formData: Record<string, unknown>;
  stepIndex: number;
}

export async function loadDraft(applId = 'draft'): Promise<DraftData | null> {
  try {
    const res = await fetch(`${BASE_URL}/appl/${applId}`);
    if (!res.ok) throw new Error('Request failed');
    const json = await res.json();
    // Assume API returns { formData, stepIndex }
    return json;
  } catch (e) {
    console.error('loadDraft failed', e);
    return null;
  }
}

export async function saveDraft(
  applId: string,
  data: DraftData,
): Promise<void> {
  try {
    await fetch(`${BASE_URL}/appl/${applId}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    });
  } catch (e) {
    console.error('saveDraft failed', e);
  }
}
