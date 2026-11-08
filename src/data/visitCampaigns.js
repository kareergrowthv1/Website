/** Predefined marketing visit campaigns keyed by visit code (6+ chars). */
export const VISIT_CAMPAIGNS = {
  KG202601: {
    id: 'KG202601',
    headline: 'Land your dream role with AI-powered career tools',
    subheadline: 'Mock interviews, resume scoring, job tracking, and placement prep — built for students and professionals.',
    badge: 'Limited-time offer',
    ctaLabel: 'Talk to a career advisor',
    highlights: ['Free career consultation', 'AI mock interview demo', 'Resume review snapshot'],
  },
  PLACE01: {
    id: 'PLACE01',
    headline: 'Boost campus placements with KareerGrowth',
    subheadline: 'Help your students practice, assess, and get hired — with dashboards your TPO team will love.',
    badge: 'For colleges & institutes',
    ctaLabel: 'Schedule an institute demo',
    highlights: ['Bulk student onboarding', 'Placement analytics', 'Proctored assessments'],
  },
};

export const DEFAULT_CAMPAIGN = {
  id: 'general',
  headline: 'Your career growth starts here',
  subheadline: 'Practice interviews, build stronger resumes, and track applications — all in one platform.',
  badge: 'KareerGrowth',
  ctaLabel: 'Request a callback',
  highlights: ['Expert guidance', 'AI-powered tools', 'Trusted by learners nationwide'],
};

export const EXPERIENCE_OPTIONS = [
  { id: 'working_technical', label: 'Working professional - Technical roles' },
  { id: 'working_non_technical', label: 'Working professional - Non technical' },
  { id: 'student_final_year', label: 'College student - Final year' },
  { id: 'student_pre_final', label: 'College student - 1st to pre-final year' },
  { id: 'others', label: 'Others' },
];

export function isValidVisitCode(code) {
  return typeof code === 'string' && /^[A-Za-z0-9]{6,}$/.test(code.trim());
}

export function getCampaignForCode(code) {
  const normalized = String(code || '').trim().toUpperCase();
  return VISIT_CAMPAIGNS[normalized] || { ...DEFAULT_CAMPAIGN, id: normalized };
}
