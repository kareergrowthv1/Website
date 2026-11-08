const STORAGE_KEY = 'kg_marketing_leads';

/**
 * Submit a marketing lead. Uses VITE_MARKETING_LEADS_API when configured;
 * otherwise persists to localStorage (dev / until backend is wired).
 */
export async function submitMarketingLead(payload) {
  const apiUrl = import.meta.env.VITE_MARKETING_LEADS_API;

  if (apiUrl) {
    const res = await fetch(apiUrl, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
    });
    if (!res.ok) {
      const err = await res.json().catch(() => ({}));
      throw new Error(err.message || 'Unable to submit your request. Please try again.');
    }
    return res.json();
  }

  const existing = JSON.parse(localStorage.getItem(STORAGE_KEY) || '[]');
  existing.push({ ...payload, submittedAt: new Date().toISOString() });
  localStorage.setItem(STORAGE_KEY, JSON.stringify(existing));
  return { success: true, storedLocally: true };
}
