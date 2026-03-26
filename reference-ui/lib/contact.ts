export type ContactFormData = {
  name: string;
  email: string;
  company?: string;
  service: string;
  projectType: string;
  budget: string;
  timeline?: string;
  outcomes: string;
  details: string;
  website?: string;
};

export type ContactSubmissionResult = {
  status: number;
  body: {
    error?: string;
    message?: string;
  };
};

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function hasMinLength(value: string | undefined, min: number) {
  return typeof value === 'string' && value.trim().length >= min;
}

export function validateContactForm(input: Partial<ContactFormData>): ContactSubmissionResult | null {
  const requiredFields: Array<keyof ContactFormData> = ['name', 'email', 'service', 'projectType', 'budget', 'outcomes', 'details'];

  for (const field of requiredFields) {
    const value = input[field];
    if (typeof value !== 'string' || value.trim().length === 0) {
      return {
        status: 400,
        body: { error: `Please provide a valid ${field}.` },
      };
    }
  }

  if (!emailRegex.test(input.email!.trim())) {
    return {
      status: 400,
      body: { error: 'Please provide a valid email address.' },
    };
  }

  if (!hasMinLength(input.name, 2)) {
    return { status: 400, body: { error: 'Please provide your full name.' } };
  }

  if (!hasMinLength(input.outcomes, 8) || !hasMinLength(input.details, 20)) {
    return {
      status: 400,
      body: { error: 'Please include enough detail for outcomes and project scope.' },
    };
  }

  if (typeof input.website === 'string' && input.website.trim().length > 0) {
    return {
      status: 400,
      body: { error: 'Spam detection triggered. Please resubmit without hidden fields.' },
    };
  }

  return null;
}

export function normalizeContactForm(input: ContactFormData): ContactFormData {
  return {
    name: input.name.trim(),
    email: input.email.trim().toLowerCase(),
    company: input.company?.trim() || '',
    service: input.service.trim(),
    projectType: input.projectType.trim(),
    budget: input.budget.trim(),
    timeline: input.timeline?.trim() || '',
    outcomes: input.outcomes.trim(),
    details: input.details.trim(),
    website: '',
  };
}
