"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateContactForm = validateContactForm;
exports.normalizeContactForm = normalizeContactForm;
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
function hasMinLength(value, min) {
    return typeof value === 'string' && value.trim().length >= min;
}
function validateContactForm(input) {
    const requiredFields = ['name', 'email', 'service', 'projectType', 'budget', 'outcomes', 'details'];
    for (const field of requiredFields) {
        const value = input[field];
        if (typeof value !== 'string' || value.trim().length === 0) {
            return {
                status: 400,
                body: { error: `Please provide a valid ${field}.` },
            };
        }
    }
    if (!emailRegex.test(input.email.trim())) {
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
function normalizeContactForm(input) {
    var _a, _b;
    return {
        name: input.name.trim(),
        email: input.email.trim().toLowerCase(),
        company: ((_a = input.company) === null || _a === void 0 ? void 0 : _a.trim()) || '',
        service: input.service.trim(),
        projectType: input.projectType.trim(),
        budget: input.budget.trim(),
        timeline: ((_b = input.timeline) === null || _b === void 0 ? void 0 : _b.trim()) || '',
        outcomes: input.outcomes.trim(),
        details: input.details.trim(),
        website: '',
    };
}
