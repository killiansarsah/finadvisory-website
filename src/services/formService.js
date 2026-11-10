/**
 * Form submission service for FinAdvisory Chartered Accountants
 * Dispatches form data to designated recipient
 * Currently activated with verified FormSubmit token: 0ce7dd0ae807c44ced50a88dfd28262a (routes to techzealous100@gmail.com)
 * Hides raw email address from spam scrapers in the client bundle.
 */

const FORMSUBMIT_ENDPOINT = import.meta.env.VITE_FORMSUBMIT_TOKEN || '0ce7dd0ae807c44ced50a88dfd28262a';
const TARGET_EMAIL = import.meta.env.VITE_CONTACT_EMAIL || 'info@finadvisorycc.com';

export async function submitInquiry(formData, formTitle = 'Consultation Inquiry') {
  const web3FormsKey = import.meta.env.VITE_WEB3FORMS_ACCESS_KEY;

  // Option 1: Web3Forms (if access key is provided in .env)
  if (web3FormsKey) {
    const res = await fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json'
      },
      body: JSON.stringify({
        access_key: web3FormsKey,
        subject: `[FinAdvisory Website] ${formTitle}: ${formData.serviceInterest || 'General'} - ${formData.fullName}`,
        from_name: 'FinAdvisory Website',
        to_email: TARGET_EMAIL,
        name: formData.fullName,
        email: formData.email,
        phone: formData.phone,
        company: formData.companyName || 'N/A',
        service_interest: formData.serviceInterest || 'General Inquiry',
        urgency: formData.urgency || 'Standard',
        message: formData.message || 'No additional notes provided'
      })
    });

    const result = await res.json();
    if (!res.ok || result.success === false) {
      throw new Error(result.message || 'Failed to deliver message via Web3Forms.');
    }
    return result;
  }

  // Option 2 (Free & Zero Config): FormSubmit.co via activated endpoint token
  const response = await fetch(`https://formsubmit.co/ajax/${FORMSUBMIT_ENDPOINT}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json'
    },
    body: JSON.stringify({
      _subject: `New Website Inquiry: ${formTitle} - ${formData.serviceInterest || 'General'} (${formData.fullName})`,
      _template: 'table',
      _captcha: 'false',
      'Client Name': formData.fullName,
      'Email Address': formData.email,
      'Phone Number': formData.phone,
      'Company / Organization': formData.companyName || 'Not specified',
      'Service Requested': formData.serviceInterest || 'General Inquiry',
      'Timeline / Urgency': formData.urgency || 'Standard',
      'Inquiry Details / Message': formData.message || 'None provided'
    })
  });

  const data = await response.json().catch(() => ({}));
  if (!response.ok) {
    throw new Error(data.message || 'Submission failed. Please contact info@finadvisorycc.com directly.');
  }

  return data;
}
