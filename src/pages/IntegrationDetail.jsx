import React, { useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ChevronRight, ArrowLeft, Check, Zap, RefreshCw, Shield, Clock, Globe, Users } from 'lucide-react';
import { useModalStore } from '../data/useModalStore';

/* ─────────────────────────────────────────
   Helper: convert card name to URL slug
   ───────────────────────────────────────── */
export const toSlug = (name) =>
  name.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');

/* ─────────────────────────────────────────
   Integration Data Map
   ───────────────────────────────────────── */
const integrationData = {
  'linkedin-talent-solutions': {
    name: 'LinkedIn Talent Solutions',
    tagline: "Connect your pipeline to the world's largest professional network.",
    logoSrc: 'https://upload.wikimedia.org/wikipedia/commons/8/81/LinkedIn_icon.svg',
    logoAlt: 'LinkedIn',
    category: 'Job Boards',
    partnerType: 'Featured Partner',
    accentColor: '#0077B5',
    about: "Sync KareerGrowth with LinkedIn Talent Solutions to post roles, extract passive candidate profiles, and manage applicants in real time — all without leaving your dashboard. With this integration you can:",
    aboutBullets: [
      'Automatically post job openings to LinkedIn and pull applicants back into KareerGrowth.',
      "Access LinkedIn's passive talent database and bookmark high-fit profiles directly.",
      'Trigger assessment invitations the moment a candidate applies on LinkedIn.',
      'Sync application status changes in both directions in under 30 seconds.',
      'Use LinkedIn Insights to benchmark your hiring speed against competitors.'
    ],
    platformDesc: "LinkedIn is the world's largest professional network with over 950 million members across 200 countries. It's where top talent discovers opportunities, builds reputation, and connects with employers. With KareerGrowth's native LinkedIn integration, your recruitment team gets bi-directional real-time data without manual CSV exports or tab switching.",
    keyFeatures: [
      { icon: 'zap', title: 'One-click job posting', desc: 'Publish roles directly from KareerGrowth to your LinkedIn company page. No copy-paste, no formatting rework.' },
      { icon: 'refresh', title: 'Bi-directional sync', desc: 'Application status, candidate notes, and rejection reasons flow both ways — LinkedIn and KareerGrowth stay perfectly aligned.' },
      { icon: 'users', title: 'Passive talent import', desc: 'Browse LinkedIn profiles and instantly add shortlisted candidates to your KareerGrowth pipeline with a single click.' },
      { icon: 'shield', title: 'Compliance-safe data handling', desc: 'All candidate data is transferred via OAuth 2.0 and stored compliant with GDPR, CCPA, and Indian DPDP standards.' },
      { icon: 'clock', title: 'Real-time alerts', desc: 'Get notified the moment a candidate applies, withdraws, or is shortlisted — without refreshing a single page.' },
      { icon: 'globe', title: 'Global reach', desc: "Target talent in any geography using LinkedIn's geo-location filters directly from your KareerGrowth job config." }
    ],
    faqs: [
      { q: 'Do I need a LinkedIn Recruiter seat?', a: "No. Basic job posting and applicant sync works with any LinkedIn Company Page. LinkedIn Recruiter unlocks passive talent browsing." },
      { q: 'How often does the sync run?', a: 'Status updates sync within 30 seconds of any change in either system via webhook. Bulk imports run on a 15-minute schedule.' },
      { q: 'Can I post multiple roles at once?', a: 'Yes. You can bulk-select open requisitions in KareerGrowth and push them all to LinkedIn in a single action.' }
    ]
  },
  'indeed-sourcing': {
    name: 'Indeed Sourcing',
    tagline: "Tap the world's #1 job site — without leaving KareerGrowth.",
    logoSrc: 'https://iaccessibility.net/wp-content/uploads/2018/04/indeed-employer-logo.png',
    logoAlt: 'Indeed',
    category: 'Job Boards',
    partnerType: 'Standard Partner',
    accentColor: '#2557A7',
    about: "Connect KareerGrowth with Indeed, the world's #1 job site, to publish opportunities automatically and process assessment pipelines end-to-end. With this integration you can:",
    aboutBullets: [
      'Automatically publish open roles to Indeed as sponsored or free listings.',
      'Pull in applicant resumes and auto-parse them into structured candidate profiles.',
      'Trigger KareerGrowth skill assessments right from the Indeed application flow.',
      'Track source-of-hire analytics to measure Indeed ROI per role.',
      'Sync dispositions back to Indeed so your employer brand stays accurate.'
    ],
    platformDesc: "Indeed serves over 350 million unique visitors each month and is the go-to platform for active job seekers across every industry and experience level. KareerGrowth's Indeed integration brings all that application volume into one structured, assessment-first hiring funnel.",
    keyFeatures: [
      { icon: 'zap', title: 'Auto job publishing', desc: 'Every role you open in KareerGrowth is optionally pushed to Indeed — free or sponsored — on save.' },
      { icon: 'refresh', title: 'Resume auto-parse', desc: 'Indeed applicant resumes are parsed and enriched with AI-extracted skills, titles, and seniority levels.' },
      { icon: 'clock', title: 'Assessment trigger', desc: 'Candidates are auto-invited to KareerGrowth skill assessments immediately after applying on Indeed.' },
      { icon: 'globe', title: 'Source analytics', desc: 'Compare Indeed vs. other sources by offer acceptance rate, time-to-hire, and assessment pass rate.' },
      { icon: 'shield', title: 'GDPR safe', desc: 'Candidate consent is captured at the Indeed application stage before any data enters KareerGrowth.' },
      { icon: 'users', title: 'Disposition sync', desc: 'Hired, rejected, and withdrawn statuses post back to Indeed automatically to close the loop.' }
    ],
    faqs: [
      { q: 'Do I need an Indeed employer account?', a: "Yes. You'll connect your existing Indeed Employer account via OAuth in KareerGrowth settings. Free accounts are supported." },
      { q: 'Can I control which roles go to Indeed?', a: 'Yes. Each job requisition has a toggle to include or exclude it from Indeed publishing.' },
      { q: 'Is there a cost per application?', a: "Indeed's pay-per-click and free posting models apply. KareerGrowth does not charge additionally for the integration." }
    ]
  },
  'naukri-com-integration': {
    name: 'Naukri.com Integration',
    tagline: "India's largest talent pool, directly in your hiring pipeline.",
    logoSrc: 'https://pbs.twimg.com/profile_images/1772331192085274624/PlbkwMwX_400x400.png',
    logoAlt: 'Naukri',
    category: 'Job Boards',
    partnerType: 'Standard Partner',
    accentColor: '#E54E2E',
    about: "Tap into India's largest employment platform. Automatically screen profiles, match assessments, and pull pre-qualified candidates directly into your KareerGrowth pipeline. With this integration you can:",
    aboutBullets: [
      'Post job openings to Naukri.com with a single click from KareerGrowth.',
      'Import candidate resumes from the Naukri database using AI keyword matching.',
      'Auto-trigger skill assessments for Naukri applicants as they come in.',
      'Score and rank incoming Naukri profiles before any human review.',
      'Sync application statuses back to Naukri for a seamless candidate experience.'
    ],
    platformDesc: "Naukri.com has over 70 million registered job seekers and is India's dominant employment marketplace. With KareerGrowth's Naukri integration, hiring teams can cast a wide net across India's working population while keeping every applicant inside a structured, bias-reduced evaluation workflow.",
    keyFeatures: [
      { icon: 'globe', title: 'India-wide reach', desc: "Access Naukri's 70M+ candidate database filtered by skills, city, salary, and experience — right from KareerGrowth." },
      { icon: 'zap', title: 'AI profile matching', desc: 'Our AI scores incoming Naukri profiles against your job description before they land in your inbox.' },
      { icon: 'refresh', title: 'Status sync', desc: 'Shortlist, reject, or move to interview in KareerGrowth — Naukri reflects the update within minutes.' },
      { icon: 'clock', title: 'Assessment auto-invite', desc: 'Candidates are sent a KareerGrowth assessment link the moment they apply on Naukri.' },
      { icon: 'users', title: 'Bulk resume import', desc: 'Import up to 500 Naukri profiles at a time and have them auto-parsed, scored, and ranked.' },
      { icon: 'shield', title: 'Indian data compliance', desc: "All candidate data is handled per India's DPDP Act 2023 with clear consent checkpoints." }
    ],
    faqs: [
      { q: 'Do I need a paid Naukri account?', a: 'A Naukri Recruiter subscription is required for database access. Free employer accounts can still receive applications from posted jobs.' },
      { q: 'Which cities and roles are supported?', a: 'All cities and all role types on Naukri are supported. You can apply geo and function filters inside KareerGrowth.' },
      { q: 'How quickly are profiles imported?', a: 'Bulk imports complete within 2-5 minutes depending on volume. Real-time applications arrive within 60 seconds of submission.' }
    ]
  },
  'zoho-recruit': {
    name: 'Zoho Recruit',
    tagline: 'Seamless ATS-to-ATS sync — no duplicate data entry, ever.',
    logoSrc: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRsy5z_xdAg28SwbkWx2rkcppOSRkBNige6Iw&s',
    logoAlt: 'Zoho Recruit',
    category: 'Applicant Tracking Systems',
    partnerType: 'Standard Partner',
    accentColor: '#E42527',
    about: "Keep your candidate database perfectly in sync between KareerGrowth and Zoho Recruit without manual exports, copy-paste errors, or stale records. With this integration you can:",
    aboutBullets: [
      'Mirror candidates and their assessment results from KareerGrowth into Zoho Recruit automatically.',
      'Trigger KareerGrowth evaluations from within Zoho Recruit candidate profiles.',
      'Map KareerGrowth pipeline stages to Zoho Recruit status fields for unified reporting.',
      'Eliminate double-entry — notes, ratings, and interview feedback flow between systems.',
      'Receive Slack/email alerts when a candidate advances stages in either system.'
    ],
    platformDesc: "Zoho Recruit is one of the most widely adopted ATS platforms globally, especially among SMBs and staffing agencies. This integration bridges KareerGrowth's AI-powered assessment engine with Zoho Recruit's robust applicant management, giving your team the best of both platforms.",
    keyFeatures: [
      { icon: 'refresh', title: 'Bidirectional ATS sync', desc: 'Candidate records, stages, and notes sync between Zoho Recruit and KareerGrowth in real time.' },
      { icon: 'zap', title: 'Assessment trigger from Zoho', desc: 'One-click to send a KareerGrowth skill test to any candidate directly from their Zoho Recruit profile.' },
      { icon: 'users', title: 'Unified candidate view', desc: 'See KareerGrowth assessment scores as a custom field inside every Zoho Recruit candidate card.' },
      { icon: 'clock', title: 'Stage mapping', desc: 'Map your Zoho pipeline stages to KareerGrowth milestones so reporting stays consistent across tools.' },
      { icon: 'shield', title: 'Secure token auth', desc: "Integration uses Zoho's OAuth 2.0 API with read/write scopes you explicitly grant and can revoke any time." },
      { icon: 'globe', title: 'Multi-account support', desc: 'Agencies managing multiple Zoho accounts can connect each to a separate KareerGrowth workspace.' }
    ],
    faqs: [
      { q: 'Which Zoho Recruit plans are supported?', a: 'All Zoho Recruit plans including Free, Standard, Enterprise, and the Staffing Agency edition are supported.' },
      { q: 'Will existing Zoho candidates be imported?', a: 'Yes. On initial setup you can do a one-time bulk import of existing Zoho candidates into KareerGrowth with a field-mapping wizard.' },
      { q: "What happens if a field doesn't exist in the other system?", a: 'You can configure custom field mappings during setup. Unmapped fields are stored as metadata and ignored in the other system.' }
    ]
  },
  'slack-alerts': {
    name: 'Slack Alerts',
    tagline: 'Keep your whole team in the loop — instantly, in Slack.',
    logoSrc: 'https://upload.wikimedia.org/wikipedia/commons/d/d5/Slack_icon_2019.svg',
    logoAlt: 'Slack',
    category: 'Collaboration & Workspace',
    partnerType: 'Standard Partner',
    accentColor: '#4A154B',
    about: "Receive instant notification updates in your dedicated Slack channels when candidates complete assessments, pass screening tests, or hit key pipeline milestones. With this integration you can:",
    aboutBullets: [
      'Get notified in Slack the moment a candidate submits a KareerGrowth assessment.',
      'Route alerts to role-specific channels (e.g. #hiring-engineering, #hiring-design).',
      'Share assessment scorecards directly inside Slack threads for team discussion.',
      'Trigger Slack messages when a candidate is moved to interview or offer stage.',
      'Use Slack commands to shortlist or reject candidates without opening KareerGrowth.'
    ],
    platformDesc: "Slack is where modern teams communicate, collaborate, and make decisions. With KareerGrowth's Slack integration, your hiring workflow lives where your team already works — reducing context-switching and keeping every stakeholder aligned without a single email chain.",
    keyFeatures: [
      { icon: 'zap', title: 'Real-time pipeline alerts', desc: 'Configurable Slack notifications trigger on every candidate milestone — apply, assess, shortlist, offer.' },
      { icon: 'users', title: 'Channel routing', desc: 'Route alerts for different job functions to different Slack channels. Engineering leads only see engineering alerts.' },
      { icon: 'refresh', title: 'Scorecard sharing', desc: 'Automatically post formatted assessment scorecards into Slack for team review and async decisions.' },
      { icon: 'clock', title: 'Slash commands', desc: 'Use /kg-shortlist or /kg-reject commands in Slack to take pipeline actions without switching apps.' },
      { icon: 'shield', title: 'Permission-aware', desc: 'Only users with KareerGrowth access can take actions from Slack. All changes are logged with the acting user.' },
      { icon: 'globe', title: 'Multi-workspace', desc: 'Connect multiple Slack workspaces if you have subsidiaries or regional teams with separate Slack instances.' }
    ],
    faqs: [
      { q: "Do I need a paid Slack plan?", a: "No. Slack's free plan supports incoming webhooks. Slash command features require Slack Pro or higher." },
      { q: 'Can I mute certain notification types?', a: 'Yes. In KareerGrowth settings, you can toggle individual event types — assessments, stage changes, offer letters — independently.' },
      { q: 'Is the Slack bot visible to all workspace members?', a: "The bot only posts to channels it's explicitly added to. You control which channels receive notifications." }
    ]
  },
  'whatsapp-business': {
    name: 'WhatsApp Business',
    tagline: 'Engage candidates where they already are — on WhatsApp.',
    logoSrc: 'https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg',
    logoAlt: 'WhatsApp',
    category: 'Collaboration & Workspace',
    partnerType: 'Standard Partner',
    accentColor: '#25D366',
    about: "Engage candidates on their phones. Send instant screening invitations, assessment links, interview feedback, and offer letters — all via WhatsApp Business API. With this integration you can:",
    aboutBullets: [
      'Send assessment invite links to candidates via WhatsApp immediately on application.',
      'Deliver personalized interview schedules and confirmation messages via WhatsApp.',
      'Receive candidate responses and document submissions directly in KareerGrowth.',
      'Use WhatsApp templates for offer letters, rejection notices, and onboarding reminders.',
      'Track message delivery, open, and response rates per campaign from your dashboard.'
    ],
    platformDesc: "WhatsApp has over 2 billion active users and is the primary communication channel for professionals across South Asia, Southeast Asia, Africa, and Latin America. KareerGrowth's WhatsApp Business integration dramatically improves candidate response rates by meeting them on the platform they check most.",
    keyFeatures: [
      { icon: 'zap', title: 'Instant assessment links', desc: 'Auto-send WhatsApp messages with unique assessment links the moment a candidate is shortlisted in KareerGrowth.' },
      { icon: 'users', title: 'Personalized templates', desc: 'Use dynamic WhatsApp message templates with candidate names, role titles, and deadlines auto-filled.' },
      { icon: 'refresh', title: 'Two-way messaging', desc: 'Candidates can reply with queries. Responses appear in KareerGrowth as candidate conversation logs.' },
      { icon: 'clock', title: 'Scheduled reminders', desc: 'Auto-send assessment reminders 24h and 1h before deadlines to dramatically reduce drop-off rates.' },
      { icon: 'shield', title: 'WhatsApp Business API compliant', desc: 'All messages use approved WhatsApp Business API templates to avoid spam flagging and account suspension.' },
      { icon: 'globe', title: 'Global delivery', desc: 'Messages are delivered internationally. Particularly high engagement in India, MENA, and Southeast Asia.' }
    ],
    faqs: [
      { q: 'Do I need a WhatsApp Business API account?', a: "Yes. You'll need a verified WhatsApp Business API account from Meta. KareerGrowth guides you through setup during onboarding." },
      { q: 'Can candidates reply to messages?', a: "Yes. Two-way messaging is supported. Replies appear in KareerGrowth's candidate conversation feed." },
      { q: 'Are template messages free?', a: "Meta charges per conversation (24-hour window). KareerGrowth does not add additional fees on top of Meta's pricing." }
    ]
  },
  'google-calendar': {
    name: 'Google Calendar',
    tagline: 'Schedule interviews in seconds — no back-and-forth email chains.',
    logoSrc: 'https://upload.wikimedia.org/wikipedia/commons/a/a5/Google_Calendar_icon_%282020%29.svg',
    logoAlt: 'Google Calendar',
    category: 'Communications & Scheduling',
    partnerType: 'Standard Partner',
    accentColor: '#4285F4',
    about: "Coordinate interviewer availability instantly. Automatically block schedules, create Google Calendar events, and send custom digital invites to candidates and panellists. With this integration you can:",
    aboutBullets: [
      "View interviewer availability across your team directly from KareerGrowth's scheduling panel.",
      'Create Google Calendar events with video links, agenda, and candidate profiles attached.',
      'Auto-send calendar invites to candidates the moment interviews are confirmed.',
      'Sync calendar conflicts so interviews are never double-booked.',
      'Receive reminders in Google Calendar for upcoming candidate assessment deadlines.'
    ],
    platformDesc: "Google Calendar is the scheduling backbone for millions of organizations worldwide. KareerGrowth's Google Calendar integration brings availability, scheduling, and reminders into a single flow — eliminating the slow back-and-forth that adds days to your time-to-interview.",
    keyFeatures: [
      { icon: 'clock', title: 'Availability view', desc: 'See free/busy slots for all interviewers in a visual calendar grid before booking any slot.' },
      { icon: 'zap', title: 'One-click scheduling', desc: 'Pick a slot, add panellists, and book — KareerGrowth creates the Google Calendar event and sends invites automatically.' },
      { icon: 'users', title: 'Candidate self-scheduling', desc: 'Share a scheduling link with candidates so they pick from available slots — no admin needed.' },
      { icon: 'refresh', title: 'Conflict detection', desc: 'Real-time conflict checks prevent double-booking across all connected Google accounts.' },
      { icon: 'shield', title: 'Private event sync', desc: "Interview details are only shared with invited panellists. Candidate names are never visible on public calendars." },
      { icon: 'globe', title: 'Timezone auto-convert', desc: "Calendar invites automatically convert to each recipient's local timezone — no manual adjustment needed." }
    ],
    faqs: [
      { q: 'Does this work with Google Workspace and personal Gmail?', a: "Yes. Both Google Workspace (GSuite) and personal Gmail accounts can be connected. Workspace accounts benefit from shared calendar access across the team." },
      { q: 'Can candidates reschedule via the calendar invite?', a: "Yes. Candidates can use the rescheduling link in their invite to pick a new slot without contacting the recruiter." },
      { q: 'What happens if an interviewer cancels?', a: "KareerGrowth detects the cancellation via webhook and notifies you to reschedule. The candidate is not automatically notified until you confirm." }
    ]
  },
  'google-meet': {
    name: 'Google Meet',
    tagline: 'Start video interviews with a single click — right from KareerGrowth.',
    logoSrc: 'https://upload.wikimedia.org/wikipedia/commons/9/9b/Google_Meet_icon_%282020%29.svg',
    logoAlt: 'Google Meet',
    category: 'Communications & Scheduling',
    partnerType: 'Standard Partner',
    accentColor: '#00897B',
    about: "Initiate live video screening and digital interviews directly from KareerGrowth with automatic, unique Google Meet links generated for each session. With this integration you can:",
    aboutBullets: [
      'Auto-generate unique Google Meet links for every scheduled interview in KareerGrowth.',
      'Join interviews directly from the KareerGrowth candidate profile with a single click.',
      'Record interview sessions (with candidate consent) and store recordings against profiles.',
      'Share meeting links with candidates via email, WhatsApp, or SMS automatically.',
      'Track interview completion status back in the KareerGrowth pipeline.'
    ],
    platformDesc: "Google Meet is a secure, reliable video conferencing platform used by millions of organizations for remote hiring. KareerGrowth's Google Meet integration eliminates the need to manually create and share meeting links — every interview is set up automatically with the click of a button.",
    keyFeatures: [
      { icon: 'zap', title: 'Auto Meet link generation', desc: 'A unique, expiring Google Meet link is automatically created for each interview when you schedule in KareerGrowth.' },
      { icon: 'users', title: 'One-click join', desc: 'Interviewers and candidates can join directly from their calendar invite or KareerGrowth interview card.' },
      { icon: 'refresh', title: 'Recording storage', desc: 'With Meet recording enabled, session recordings are linked to the candidate profile for later review.' },
      { icon: 'clock', title: 'Auto-reminders', desc: 'KareerGrowth sends meeting reminders to both interviewers and candidates 30 minutes before each session.' },
      { icon: 'shield', title: 'Secure meeting rooms', desc: 'All Meet links require authenticated access. No unauthorized guests can join interview sessions.' },
      { icon: 'globe', title: 'No app required', desc: 'Candidates join Google Meet from any browser — no app install needed for a smooth interview experience.' }
    ],
    faqs: [
      { q: 'Do candidates need a Google account?', a: "No. Candidates can join as guests from any browser without a Google account, as long as the host admits them." },
      { q: 'Are meeting recordings saved automatically?', a: "Recording requires a Google Workspace account with recording enabled by the admin. KareerGrowth will store the recording link when available." },
      { q: 'Can I use Google Meet for group panel interviews?', a: "Yes. Multiple interviewers can be added to the same meeting event in KareerGrowth, and all will receive the same Meet link." }
    ]
  },
  'gmail-integration': {
    name: 'Gmail Integration',
    tagline: 'Manage every candidate conversation from your existing Gmail inbox.',
    logoSrc: 'https://upload.wikimedia.org/wikipedia/commons/7/7e/Gmail_icon_%282020%29.svg',
    logoAlt: 'Gmail',
    category: 'Communications & Scheduling',
    partnerType: 'Standard Partner',
    accentColor: '#EA4335',
    about: "Manage candidate conversations directly from KareerGrowth using your existing Gmail account. Set automated templates, follow-ups, and milestone announcements — without switching tabs. With this integration you can:",
    aboutBullets: [
      'Send and receive candidate emails from within KareerGrowth using your Gmail address.',
      'Use smart email templates that auto-fill candidate names, role titles, and next steps.',
      'Set automated follow-up sequences triggered by assessment completion or stage change.',
      'See the full email thread history against each candidate profile in KareerGrowth.',
      'Track email open and click rates to gauge candidate engagement levels.'
    ],
    platformDesc: "Gmail is the world's most widely used email service, trusted by 1.8 billion users. KareerGrowth's Gmail integration embeds your email workflow directly into candidate profiles — so every communication is contextual, trackable, and never lost in a busy inbox.",
    keyFeatures: [
      { icon: 'zap', title: 'In-app email composer', desc: 'Write and send Gmail emails directly from the KareerGrowth candidate profile without opening a new tab.' },
      { icon: 'users', title: 'Smart templates', desc: 'Pre-built and custom email templates auto-populate candidate details, saving hours of manual drafting per week.' },
      { icon: 'refresh', title: 'Automated sequences', desc: 'Set trigger-based email sequences (e.g. assessment reminder, follow-up, offer letter) that run automatically.' },
      { icon: 'clock', title: 'Thread history', desc: 'Every email sent or received from a candidate is logged against their profile in chronological order.' },
      { icon: 'shield', title: 'Sent from your domain', desc: 'Emails are sent via your own Gmail account. Candidates see your name and domain — not a generic KareerGrowth address.' },
      { icon: 'globe', title: 'Open rate tracking', desc: 'See which candidates have opened your emails so you can prioritize follow-ups to engaged applicants.' }
    ],
    faqs: [
      { q: "Will candidates see that I'm using KareerGrowth?", a: "No. Emails are sent from your Gmail address. KareerGrowth is invisible to the recipient." },
      { q: 'Are sent emails stored in my Gmail Sent folder?', a: "Yes. All emails sent via KareerGrowth appear in your Gmail Sent folder just like any email you'd send directly." },
      { q: 'Can multiple team members share one Gmail integration?', a: "Each team member connects their own Gmail. KareerGrowth consolidates all candidate threads in the profile regardless of who sent them." }
    ]
  },
  'google-alerts-sourcing': {
    name: 'Google Alerts Sourcing',
    tagline: 'Never miss a talent signal — track the market in real time.',
    logoSrc: 'https://play-lh.googleusercontent.com/YqM8H7Vip-UqQmsKXeJKxlvw8UcEc9v7oMEoPOe-8VDh1wKUudK6rdQ5TEaGjv8BkWA',
    logoAlt: 'Google Alerts',
    category: 'Job Boards',
    partnerType: 'Standard Partner',
    accentColor: '#FBBC04',
    about: "Track competitors, targeted talent pools, and emerging industry hiring trends dynamically with real-time Google Alerts news feeds piped directly into KareerGrowth. With this integration you can:",
    aboutBullets: [
      'Set Google Alerts for competitor company names to track their hiring movements.',
      'Monitor skill-specific terms to discover newly available specialist talent.',
      'Surface industry news alerts inside your KareerGrowth sourcing dashboard.',
      'Create candidate pipeline entries from relevant news mentions automatically.',
      'Get alerts when key people post new content signalling they may be open to opportunities.'
    ],
    platformDesc: "Google Alerts delivers real-time web monitoring for any keyword or phrase. For proactive talent teams, this means tracking competitor layoffs, alumni networks, industry publication mentions, and rising skills — all feeding sourcing intelligence directly into KareerGrowth.",
    keyFeatures: [
      { icon: 'globe', title: 'Market intelligence feed', desc: 'Pull Google Alerts for your target talent segments straight into your KareerGrowth sourcing dashboard.' },
      { icon: 'zap', title: 'Competitor tracking', desc: 'Monitor hiring announcements, layoffs, and company milestones to time your outreach to newly available talent.' },
      { icon: 'users', title: 'Candidate signals', desc: 'Detect when target candidates publish articles, speak at events, or announce career changes via Google Alerts.' },
      { icon: 'refresh', title: 'Auto-pipeline creation', desc: 'Convert relevant Google Alert mentions into candidate pipeline entries with one click from the alerts feed.' },
      { icon: 'clock', title: 'Real-time delivery', desc: 'Alerts arrive as-it-happens or in daily digests — configurable per alert topic inside KareerGrowth.' },
      { icon: 'shield', title: 'Privacy compliant', desc: 'Only publicly available web content is monitored. No private data scraping or unauthorized access.' }
    ],
    faqs: [
      { q: 'Do I need a paid Google account?', a: "No. Google Alerts is a free Google service. You just need a Google account to create and manage alerts." },
      { q: 'How many alerts can I create?', a: "Google allows up to 1000 alerts per account. KareerGrowth lets you organize and label them by sourcing campaign." },
      { q: 'Can I filter alerts by geography or language?', a: "Yes. Google Alerts supports region and language filters. KareerGrowth imports these filters into its sourcing panel." }
    ]
  },
  'shine-jobs-postings': {
    name: 'Shine Jobs Postings',
    tagline: "Reach India's professional job seekers through Shine.com.",
    logoSrc: 'https://images.seeklogo.com/logo-png/42/1/shine-com-logo-png_seeklogo-427506.png',
    logoAlt: 'Shine Jobs',
    category: 'Job Boards',
    partnerType: 'Standard Partner',
    accentColor: '#FF6B00',
    about: "Publish assessment-based roles instantly to Shine.com to source and screen pre-qualified professional profiles without any duplicate data entry. With this integration you can:",
    aboutBullets: [
      'Post open roles to Shine.com in one click directly from KareerGrowth.',
      'Pull Shine applicant profiles automatically into your assessment pipeline.',
      'Trigger KareerGrowth skill evaluations for Shine candidates on application.',
      'Track source-of-hire analytics comparing Shine vs. other job boards.',
      'Sync final hiring decisions back to Shine to maintain accurate employer branding.'
    ],
    platformDesc: "Shine.com is one of India's fastest-growing job portals with a focus on mid-level and senior professionals. The KareerGrowth x Shine integration helps hiring teams access quality professional profiles and immediately put them through a structured, skills-based evaluation process.",
    keyFeatures: [
      { icon: 'zap', title: 'One-click posting', desc: 'Publish any KareerGrowth requisition to Shine.com instantly with auto-mapped job description fields.' },
      { icon: 'users', title: 'Profile auto-import', desc: 'Shine applicants are automatically imported as candidates in KareerGrowth with resume and contact details parsed.' },
      { icon: 'refresh', title: 'Assessment auto-trigger', desc: 'Every Shine applicant receives an assessment invite from KareerGrowth within minutes of applying.' },
      { icon: 'clock', title: 'Source analytics', desc: 'Measure Shine.com ROI by tracking pass rates, offer rates, and time-to-hire from this source.' },
      { icon: 'shield', title: 'DPDP compliant', desc: "Candidate data from Shine is handled in compliance with India's Digital Personal Data Protection Act 2023." },
      { icon: 'globe', title: 'Disposition sync', desc: 'Post final hiring outcomes back to Shine.com to close the loop on posted roles and maintain data accuracy.' }
    ],
    faqs: [
      { q: 'Do I need a Shine.com employer account?', a: "Yes. A Shine.com employer account is required to connect via API. KareerGrowth supports both free and premium Shine plans." },
      { q: 'Can I post to Shine and other job boards simultaneously?', a: "Yes. KareerGrowth supports multi-board publishing. You can select Shine.com, LinkedIn, Indeed, and Naukri all at once." },
      { q: 'How quickly do applications appear in KareerGrowth?', a: "Shine applications typically appear in KareerGrowth within 2-5 minutes of submission via webhook." }
    ]
  }
};

/* ─────────────────────────────────────────
   Icon renderer helper
   ───────────────────────────────────────── */
const FeatureIcon = ({ type }) => {
  const icons = {
    zap: <Zap size={18} />,
    refresh: <RefreshCw size={18} />,
    shield: <Shield size={18} />,
    clock: <Clock size={18} />,
    globe: <Globe size={18} />,
    users: <Users size={18} />
  };
  return icons[type] || <Zap size={18} />;
};

/* ─────────────────────────────────────────
   FAQ Accordion Item
   ───────────────────────────────────────── */
const FaqItem = ({ q, a, isOpen, onClick }) => (
  <div className={`border border-[#e4e4dd] rounded-2xl overflow-hidden transition-all duration-300 ${isOpen ? 'shadow-sm' : ''}`}>
    <button
      onClick={onClick}
      className="w-full flex items-center justify-between px-6 py-5 text-left bg-white hover:bg-[#fafaf7] transition-colors"
    >
      <span className="font-semibold text-[17px] sm:text-[19px] text-[#1a1a1a] tracking-tight pr-4">{q}</span>
      <span className={`flex-shrink-0 w-8 h-8 rounded-full border border-[#e4e4dd] flex items-center justify-center transition-transform duration-300 ${isOpen ? 'rotate-45 bg-[#1a1a1a] border-[#1a1a1a]' : 'bg-white'}`}>
        <svg width="14" height="14" viewBox="0 0 12 12" fill="none">
          <path d="M6 1v10M1 6h10" stroke={isOpen ? '#fff' : '#1a1a1a'} strokeWidth="2" strokeLinecap="round" />
        </svg>
      </span>
    </button>
    {isOpen && (
      <div className="px-6 pb-5 pt-0 text-[16px] sm:text-[17px] leading-[1.65] text-[#5f5f5a] bg-white border-t border-[#f0f0e8]">
        {a}
      </div>
    )}
  </div>
);

/* ─────────────────────────────────────────
   Main Page Component
   ───────────────────────────────────────── */
const IntegrationDetail = () => {
  const { slug } = useParams();
  const navigate = useNavigate();
  const { openDemoModal } = useModalStore();
  const [openFaq, setOpenFaq] = useState(null);

  const data = integrationData[slug];

  if (!data) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-white pt-24 text-center px-6">
        <h1 className="text-4xl font-bold text-[#1a1a1a] mb-4">Integration Not Found</h1>
        <p className="text-[#5f5f5a] text-lg mb-8">
          We could not find an integration matching <code className="bg-[#f0f0e8] px-2 py-1 rounded text-sm">{slug}</code>.
        </p>
        <Link
          to="/integrations"
          className="inline-flex items-center gap-2 bg-[#1a1a1a] text-white px-6 py-3 rounded-full font-semibold hover:opacity-80 transition-opacity"
        >
          <ArrowLeft size={16} /> Back to Integrations
        </Link>
      </div>
    );
  }

  return (
    <main className="min-h-screen bg-white text-[#1a1a1a] font-sans antialiased">
      <style>{`
        .right-scroll-panel::-webkit-scrollbar { display: none; }
        .right-scroll-panel { -ms-overflow-style: none; scrollbar-width: none; }
      `}</style>

      {/* Hero Banner — strictly half screen height */}
      <section className="bg-[#f5f4eb] flex items-center" style={{ paddingTop: '80px', minHeight: '45vh' }}>
        <div className="max-w-[1440px] mx-auto w-full px-6 sm:px-12 lg:px-20 py-10 lg:py-12">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="flex flex-col lg:flex-row items-center gap-10 lg:gap-16"
          >
            {/* Logo card — scaled down to fit */}
            <div className="w-48 h-48 sm:w-64 sm:h-64 lg:w-[320px] lg:h-[320px] bg-white rounded-[32px] lg:rounded-[48px] shadow-sm flex items-center justify-center flex-shrink-0">
              <img src={data.logoSrc} alt={data.logoAlt} className="w-[55%] h-[55%] object-contain" />
            </div>

            {/* Text content */}
            <div className="flex flex-col justify-center">
              <h1 className="text-[3.2rem] sm:text-[4.5rem] lg:text-[5.5rem] font-semibold tracking-[-0.05em] leading-[0.95] text-[#1a1a1a]">
                {data.name}
              </h1>
              {data.tagline && (
                <p className="mt-4 text-[18px] sm:text-[22px] text-[#5f5f5a] tracking-tight w-full leading-[1.45]">
                  {data.tagline}
                </p>
              )}
              <div className="mt-8">
                <button
                  onClick={openDemoModal}
                  className="inline-flex items-center gap-2 bg-[#bef33e] text-[#1a1a1a] px-7 py-3 rounded-full font-bold text-[15px] sm:text-[16px] hover:brightness-95 active:scale-95 transition-all shadow-sm cursor-pointer"
                >
                  Request a Demo <ChevronRight size={15} className="stroke-[3]" />
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Breadcrumb — Sticky below navbar */}
      <nav className="bg-white z-40" style={{ position: 'sticky', top: '80px' }}>
        <div className="max-w-[1440px] w-full mx-auto px-6 sm:px-10 lg:px-16 py-4 flex items-center gap-2 text-[14px] sm:text-[15px] text-[#5f5f5a]">
          <Link to="/" className="hover:text-[#1a1a1a] transition-colors">Home</Link>
          <ChevronRight size={14} className="opacity-50" />
          <Link to="/integrations" className="hover:text-[#1a1a1a] transition-colors">Marketplace</Link>
          <ChevronRight size={14} className="opacity-50" />
          <span className="text-[#1a1a1a] font-medium">{data.name}</span>
        </div>
      </nav>

      {/* Main Content — natural browser scroll with sticky sidebar */}
      <div className="max-w-[1440px] w-full mx-auto px-6 sm:px-10 lg:px-16 flex flex-col lg:flex-row gap-0 lg:gap-16 pb-20 pt-10">

        {/* Left Sidebar — fully sticky, never scrolls */}
        <aside
          className="hidden lg:flex flex-shrink-0 w-72"
          style={{ position: 'sticky', top: '140px', height: 'calc(100vh - 140px)', alignSelf: 'flex-start' }}
        >
          <div className="pb-10 pr-8 border-r border-[#e8e8e0] w-full flex flex-col gap-8 h-full overflow-y-auto" style={{ scrollbarWidth: 'none' }}>
            <div>
              <p className="text-[12px] font-bold tracking-[0.12em] uppercase text-[#9a9a90] mb-3">Category</p>
              <span className="text-[16px] text-[#1a1a1a] font-medium">{data.category}</span>
            </div>
            <div>
              <p className="text-[12px] font-bold tracking-[0.12em] uppercase text-[#9a9a90] mb-3">Partner Type</p>
              <span className="text-[16px] text-[#1a1a1a] font-medium">{data.partnerType}</span>
            </div>
            <div>
              <p className="text-[12px] font-bold tracking-[0.12em] uppercase text-[#9a9a90] mb-3">Quick Links</p>
              <ul className="space-y-4">
                {['About', 'Key Features'].map((label) => (
                  <li key={label}>
                    <a
                      href={`#${label.toLowerCase().replace(/ /g, '-')}`}
                      className="text-[15px] text-[#5f5f5a] hover:text-[#1a1a1a] transition-colors flex items-center gap-1.5"
                    >
                      <ChevronRight size={13} className="opacity-50" /> {label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </aside>

        {/* Mobile sidebar (shown only on small screens, normal flow) */}
        <aside className="lg:hidden px-6 pt-8 pb-4 flex flex-wrap gap-6 border-b border-[#e8e8e0]">
          <div>
            <p className="text-[11px] font-bold tracking-[0.12em] uppercase text-[#9a9a90] mb-1">Category</p>
            <span className="text-[14px] text-[#1a1a1a] font-medium">{data.category}</span>
          </div>
          <div>
            <p className="text-[11px] font-bold tracking-[0.12em] uppercase text-[#9a9a90] mb-1">Partner Type</p>
            <span className="text-[14px] text-[#1a1a1a] font-medium">{data.partnerType}</span>
          </div>
        </aside>

        {/* Right Content — scrolls naturally with the page */}
        <article className="flex-1 min-w-0 space-y-20 pb-12">

          {/* About Section */}
          <motion.section
            id="about"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-[2.2rem] sm:text-[2.8rem] font-bold tracking-[-0.03em] text-[#1a1a1a] mb-8">
              About the Integration
            </h2>
            <p className="text-[16px] sm:text-[18px] leading-[1.65] text-[#5f5f5a] mb-6">
              {data.about}
            </p>
            <ul className="space-y-4">
              {data.aboutBullets.map((bullet, i) => (
                <li key={i} className="flex items-start gap-4 text-[16px] sm:text-[17px] text-[#3a3a35] leading-[1.55]">
                  <span className="flex-shrink-0 w-6 h-6 rounded-full bg-[#bef33e] flex items-center justify-center mt-0.5">
                    <Check size={13} className="stroke-[3] text-[#1a1a1a]" />
                  </span>
                  {bullet}
                </li>
              ))}
            </ul>
          </motion.section>

          {/* Platform Desc Card */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="rounded-[28px] border border-[#e4e4dd] bg-[#fafaf7] p-8 sm:p-10"
          >
            <div className="flex items-center gap-4 mb-5">
              <div
                className="w-10 h-10 rounded-[14px] flex items-center justify-center flex-shrink-0"
                style={{ backgroundColor: data.accentColor + '1A' }}
              >
                <img src={data.logoSrc} alt={data.logoAlt} className="w-6 h-6 object-contain" />
              </div>
              <h3 className="font-bold text-[18px] sm:text-[20px] tracking-tight text-[#1a1a1a]">
                About {data.name}
              </h3>
            </div>
            <p className="text-[16px] sm:text-[17px] text-[#5f5f5a] leading-[1.6]">
              {data.platformDesc}
            </p>
          </motion.section>

          {/* Key Features */}
          <motion.section
            id="key-features"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-[2.2rem] sm:text-[2.8rem] font-bold tracking-[-0.03em] text-[#1a1a1a] mb-8">
              Key Features
            </h2>
            <ul className="space-y-6">
              {data.keyFeatures.map((feat, i) => (
                <motion.li
                  key={i}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="flex items-start gap-4"
                >
                  <div className="flex-shrink-0 mt-0.5">
                    <feat.icon size={24} strokeWidth={2} style={{ color: data.accentColor }} />
                  </div>
                  <div>
                    <h4 className="font-bold text-[18px] sm:text-[20px] text-[#1a1a1a] tracking-tight mb-1">
                      {feat.title}
                    </h4>
                    <p className="text-[15px] sm:text-[16px] text-[#5f5f5a] leading-[1.3]">
                      {feat.desc}
                    </p>
                  </div>
                </motion.li>
              ))}
            </ul>
          </motion.section>


        </article>
      </div>

      {/* Full Width Sections */}
      <div className="w-full border-t border-[#e8e8e0] bg-white">
        
        {/* CTA Block (Now Full Width) */}
        <div className="max-w-[1440px] w-full mx-auto px-6 sm:px-10 lg:px-16 py-16">
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="rounded-[32px] bg-[#1a1a1a] p-10 sm:p-14 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-8"
          >
            <div>
              <h3 className="text-[1.8rem] sm:text-[2.2rem] font-bold tracking-[-0.03em] text-white mb-3">
                Ready to connect {data.name}?
              </h3>
              <p className="text-[16px] sm:text-[17px] text-white/70 leading-snug w-full max-w-2xl">
                Book a 20-minute demo and our team will walk you through the full setup — live, tailored to your stack.
              </p>
            </div>
            <button
              onClick={openDemoModal}
              className="flex-shrink-0 inline-flex items-center gap-2 bg-[#bef33e] text-[#1a1a1a] px-8 py-4.5 rounded-full font-bold text-[17px] hover:brightness-95 active:scale-95 transition-all shadow-sm cursor-pointer"
            >
              Book a Demo <ChevronRight size={17} className="stroke-[3]" />
            </button>
          </motion.section>
        </div>

        <div className="max-w-[1440px] w-full mx-auto px-6 sm:px-10 lg:px-16 py-20 space-y-32 border-t border-black/5">
          {/* Do more with APIs Section */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col md:flex-row items-center gap-12 md:gap-24"
          >
            <div className="flex-1">
              <h2 className="title-huge text-perk-black leading-tight mb-6">
                Do more with KareerGrowth
              </h2>
              <p className="text-lg md:text-xl text-slate-500 max-w-2xl mb-10">
                Build your own personalized integrations so KareerGrowth slots seamlessly into your company's way of working. Our self-serve docs are easy-to-use so you can get started quickly.
              </p>
              <button className="inline-flex items-center gap-2 bg-[#bef33e] text-[#1a1a1a] px-8 py-3.5 rounded-full font-bold text-[16px] sm:text-[17px] hover:brightness-95 active:scale-95 transition-all shadow-sm cursor-pointer">
                Explore our APIs <ChevronRight size={16} className="stroke-[3]" />
              </button>
            </div>
            <div className="flex-1 w-full flex justify-center lg:justify-end">
              <div className="w-full max-w-lg aspect-[4/3] rounded-[40px] overflow-hidden relative shadow-xl">
                <img 
                  src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80" 
                  alt="Developer working on API" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </motion.section>

          {/* Promote your apps Section */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col-reverse md:flex-row items-center gap-12 md:gap-24"
          >
            <div className="flex-1 w-full flex justify-center lg:justify-start">
              <div className="w-full max-w-lg grid grid-cols-3 gap-4 sm:gap-6">
                {[
                  'Slack', 'Zoom', 'Notion', 
                  'Figma', 'GitHub', 'Linear', 
                  'Stripe', 'Twilio', 'Asana'
                ].map((partner, i) => (
                  <div key={i} className="aspect-[3/2] bg-white border border-[#e4e4dd] rounded-2xl flex items-center justify-center p-4 sm:p-6 shadow-sm hover:border-black/20 hover:shadow-md transition-all">
                    <span className="font-bold text-[#1a1a1a] text-[15px] sm:text-[17px] tracking-tight">{partner}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="flex-1">
              <h2 className="title-huge text-perk-black leading-tight mb-6">
                Promote your apps for free
              </h2>
              <p className="text-lg md:text-xl text-slate-500 max-w-2xl mb-10">
                Reach thousands of SMBs when you share your integrations on our marketplace. Create tools that businesses need to optimize their processes—and market them at no extra cost.
              </p>
              <button className="inline-flex items-center gap-2 bg-[#bef33e] text-[#1a1a1a] px-8 py-3.5 rounded-full font-bold text-[16px] sm:text-[17px] hover:brightness-95 active:scale-95 transition-all shadow-sm cursor-pointer">
                Become a partner <ChevronRight size={16} className="stroke-[3]" />
              </button>
            </div>
          </motion.section>
        </div>
      </div>
    </main>
  );
};

export default IntegrationDetail;
