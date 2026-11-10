/**
 * Form submission service for FinAdvisory Chartered Accountants
 * Primary: Native Hostinger backend (/api/contact.php) with branded executive HTML
 * Fallback: FormSubmit.co direct to info@finadvisorycc.com
 */

const FORMSUBMIT_ENDPOINT = import.meta.env.VITE_FORMSUBMIT_TOKEN || 'info@finadvisorycc.com';
const TARGET_EMAIL = import.meta.env.VITE_CONTACT_EMAIL || 'info@finadvisorycc.com';

export async function submitInquiry(formData, formTitle = 'Consultation Inquiry') {
  // Generate clean, executive subject line matching industry standards:
  // e.g. "Consultation Request: Audit & Assurance – Kwame Mensah (GoldCoast Ventures Ltd)"
  const isProposal = formTitle?.toLowerCase().includes('proposal') || formData.serviceInterest?.toLowerCase().includes('custom');
  const requestType = isProposal ? 'Custom Proposal Request' : 'Consultation Request';
  const companySuffix = formData.companyName && formData.companyName.trim() && formData.companyName !== 'Not specified' && formData.companyName !== 'N/A'
    ? ` (${formData.companyName.trim()})`
    : '';
  const executiveSubject = `${requestType}: ${formData.serviceInterest || 'General Advisory'} – ${formData.fullName}${companySuffix}`;

  // 1. Primary Strategy: Native Hostinger PHP Endpoint (/api/contact.php)
  // Sends genuine @finadvisorycc.com emails with custom Navy & Gold branded HTML
  try {
    const phpResponse = await fetch('/api/contact.php', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json'
      },
      body: JSON.stringify({
        formTitle,
        fullName: formData.fullName,
        email: formData.email,
        phone: formData.phone,
        companyName: formData.companyName || 'Not specified',
        serviceInterest: formData.serviceInterest || 'General Inquiry',
        urgency: formData.urgency || 'Standard',
        message: formData.message || 'No additional notes provided'
      })
    });

    if (phpResponse.ok) {
      const phpResult = await phpResponse.json();
      if (phpResult.success) {
        return phpResult;
      }
    }
  } catch (err) {
    // If running in local development (Vite dev server without PHP),
    // or if /api/contact.php is unreachable, gracefully proceed to fallback.
    console.warn('Native Hostinger PHP mailer unavailable, using backup gateway:', err);
  }

  // 2. Web3Forms (if access key is provided in .env)
  const web3FormsKey = import.meta.env.VITE_WEB3FORMS_ACCESS_KEY;
  if (web3FormsKey) {
    const res = await fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json'
      },
      body: JSON.stringify({
        access_key: web3FormsKey,
        subject: executiveSubject,
        from_name: 'FinAdvisory Practice Portal',
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

  // 3. Fallback: FormSubmit.co
  const response = await fetch(`https://formsubmit.co/ajax/${FORMSUBMIT_ENDPOINT}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json'
    },
    body: JSON.stringify({
      _subject: executiveSubject,
      _replyto: formData.email,
      _template: 'table',
      _captcha: 'false',
      _autoresponse: `Thank you for contacting FinAdvisory Chartered Accountants. We have safely received your inquiry regarding ${formData.serviceInterest || 'our services'}. A Senior Partner / Officer at our Accra office will review your request and contact you promptly via ${formData.phone || formData.email}.`,
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
