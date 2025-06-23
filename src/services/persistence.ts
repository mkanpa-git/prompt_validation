import Ajv from 'ajv';
import yaml from 'js-yaml';
import specText from '../../childcare_openapi.yaml.txt?raw';
import { ApplicationSubmission } from '../api/models/ApplicationSubmission';

const BASE_URL = 'https://virtserver.swaggerhub.com/mkanpa/ApplicationsService/1.0.0';

const openapi = yaml.load(specText) as any;
const submissionSchema = openapi?.components?.schemas?.ApplicationSubmission || {};
const ajv = new Ajv();
const validateSubmission = ajv.compile(submissionSchema);

export interface DraftData {
  formData: Record<string, unknown>;
  stepIndex: number;
}

const LOCAL_STORAGE_KEY = 'childcare_draft';

export async function loadDraft(applId = 'draft'): Promise<DraftData | null> {
  try {
    const stored = localStorage.getItem(LOCAL_STORAGE_KEY);
    if (stored) {
      return JSON.parse(stored) as DraftData;
    }
  } catch (e) {
    console.error('failed to read draft from localStorage', e);
  }

  try {
    const res = await fetch(`${BASE_URL}/appl/${applId}`);
    if (!res.ok) throw new Error('Request failed');
    const json = await res.json();
    // Assume API returns { formData, stepIndex }
    try {
      localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(json));
    } catch (err) {
      console.error('failed to persist draft in localStorage', err);
    }
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
    try {
      localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(data));
    } catch (err) {
      console.error('failed to persist draft in localStorage', err);
    }
    await fetch(`${BASE_URL}/appl/${applId}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    });
  } catch (e) {
    console.error('saveDraft failed', e);
  }
}

export async function submitApplication(
  applId: string,
  data: ApplicationSubmission,
): Promise<void> {
  try {
    const valid = validateSubmission(data);
    if (!valid) {
      console.error('submitApplication validation failed', validateSubmission.errors);
      throw new Error('Payload validation failed');
    }
    await fetch(`${BASE_URL}/appl/${applId}/submit`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    });
  } catch (e) {
    console.error('submitApplication failed', e);
    throw e;
  }
}
