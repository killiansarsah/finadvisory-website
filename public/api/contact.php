<?php
/**
 * FinAdvisory Chartered Accountants - Corporate Inquiry Dispatcher
 * Hosted natively on Hostinger (finadvisorycc.com)
 * Delivers formatted inquiries to info@finadvisorycc.com and sends
 * a branded confirmation to the client.
 */

// Enable CORS and define JSON response headers
header('Content-Type: application/json; charset=UTF-8');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type, Accept');

// Handle preflight OPTIONS request
if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit;
}

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(['success' => false, 'message' => 'Method not allowed.']);
    exit;
}

// Read raw JSON payload
$rawInput = file_get_contents('php://input');
$data = json_decode($rawInput, true);

if (!$data) {
    // Fallback to $_POST if form-encoded
    $data = $_POST;
}

// Extract and sanitize inputs
$fullName        = trim(htmlspecialchars($data['fullName'] ?? $data['name'] ?? '', ENT_QUOTES, 'UTF-8'));
$email           = filter_var(trim($data['email'] ?? ''), FILTER_VALIDATE_EMAIL);
$phone           = trim(htmlspecialchars($data['phone'] ?? '', ENT_QUOTES, 'UTF-8'));
$companyName     = trim(htmlspecialchars($data['companyName'] ?? $data['company'] ?? 'Not specified', ENT_QUOTES, 'UTF-8'));
$serviceInterest = trim(htmlspecialchars($data['serviceInterest'] ?? $data['service'] ?? 'General Advisory Consultation', ENT_QUOTES, 'UTF-8'));
$urgency         = trim(htmlspecialchars($data['urgency'] ?? 'Standard', ENT_QUOTES, 'UTF-8'));
$message         = trim(htmlspecialchars($data['message'] ?? 'No additional notes provided.', ENT_QUOTES, 'UTF-8'));
$formTitle       = trim(htmlspecialchars($data['formTitle'] ?? 'Website Consultation Request', ENT_QUOTES, 'UTF-8'));

// Validation
if (empty($fullName) || !$email || empty($phone)) {
    http_response_code(400);
    echo json_encode([
        'success' => false,
        'message' => 'Please provide your Full Name, a valid Email Address, and Phone Number.'
    ]);
    exit;
}

// Recipient email: FinAdvisory corporate mailbox
$recipientEmail = 'info@finadvisorycc.com';
$fromEmail      = 'info@finadvisorycc.com';
$submissionDate = date('D, d M Y H:i:s') . ' GMT';

// -------------------------------------------------------------
// 1. Executive HTML Email for Partners (info@finadvisorycc.com)
// -------------------------------------------------------------
$isProposal = stripos($formTitle, 'proposal') !== false || stripos($serviceInterest, 'proposal') !== false || stripos($serviceInterest, 'custom') !== false;
$requestType = $isProposal ? 'Custom Proposal Request' : 'Consultation Request';
$companySuffix = (!empty($companyName) && $companyName !== 'Not specified' && $companyName !== 'N/A') ? " ({$companyName})" : '';

$partnerSubject = "{$requestType}: {$serviceInterest} – {$fullName}{$companySuffix}";

$partnerHtml = "
<!DOCTYPE html>
<html>
<head>
  <meta charset='UTF-8'>
  <style>
    body { font-family: 'Segoe UI', Arial, sans-serif; background-color: #f4f6f9; margin: 0; padding: 24px; color: #1e293b; }
    .email-container { max-width: 620px; margin: 0 auto; background: #ffffff; border-radius: 8px; overflow: hidden; box-shadow: 0 4px 14px rgba(0,0,0,0.06); border: 1px solid #e2e8f0; }
    .header-banner { background: #021226; padding: 28px 24px; text-align: left; border-bottom: 4px solid #c59b27; }
    .header-banner h1 { margin: 0; color: #ffffff; font-size: 20px; font-weight: 700; letter-spacing: 0.5px; }
    .header-banner p { margin: 4px 0 0; color: #c59b27; font-size: 13px; text-transform: uppercase; letter-spacing: 1px; }
    .content-area { padding: 28px 24px; }
    .inquiry-badge { display: inline-block; background: #fef9c3; color: #854d0e; padding: 4px 10px; border-radius: 4px; font-size: 12px; font-weight: 600; margin-bottom: 18px; border: 1px solid #fde047; }
    .details-table { width: 100%; border-collapse: collapse; margin-bottom: 24px; }
    .details-table th, .details-table td { padding: 12px 14px; text-align: left; font-size: 14px; }
    .details-table tr:nth-child(even) { background-color: #f8fafc; }
    .details-table th { width: 34%; color: #475569; font-weight: 600; border-bottom: 1px solid #e2e8f0; }
    .details-table td { color: #0f172a; font-weight: 500; border-bottom: 1px solid #e2e8f0; }
    .message-box { background: #f8fafc; border-left: 4px solid #c59b27; padding: 16px; border-radius: 0 6px 6px 0; margin-top: 14px; font-size: 14px; line-height: 1.6; color: #334155; }
    .footer { background: #f1f5f9; padding: 18px 24px; font-size: 12px; color: #64748b; text-align: center; border-top: 1px solid #e2e8f0; }
    .action-btn { display: inline-block; background: #021226; color: #ffffff !important; text-decoration: none; padding: 10px 20px; border-radius: 6px; font-size: 13px; font-weight: 600; margin-top: 18px; }
  </style>
</head>
<body>
  <div class='email-container'>
    <div class='header-banner'>
      <p>{$requestType}</p>
      <h1>FinAdvisory Chartered Accountants</h1>
    </div>
    <div class='content-area'>
      <div class='inquiry-badge'>{$formTitle}</div>
      <table class='details-table'>
        <tr>
          <th>Client Name</th>
          <td><strong>{$fullName}</strong></td>
        </tr>
        <tr>
          <th>Email Address</th>
          <td><a href='mailto:{$email}'>{$email}</a></td>
        </tr>
        <tr>
          <th>Phone Number</th>
          <td><a href='tel:{$phone}'>{$phone}</a></td>
        </tr>
        <tr>
          <th>Company / Entity</th>
          <td>{$companyName}</td>
        </tr>
        <tr>
          <th>Service / Need</th>
          <td><strong>{$serviceInterest}</strong></td>
        </tr>
        <tr>
          <th>Timeline / Urgency</th>
          <td>{$urgency}</td>
        </tr>
        <tr>
          <th>Submission Time</th>
          <td>{$submissionDate}</td>
        </tr>
      </table>

      <strong>Inquiry Notes / Request Details:</strong>
      <div class='message-box'>
        " . nl2br($message) . "
      </div>

      <div style='text-align: center;'>
        <a href='mailto:{$email}?subject=RE: FinAdvisory Inquiry - {$serviceInterest}' class='action-btn'>
          Direct Reply to {$fullName}
        </a>
      </div>
    </div>
    <div class='footer'>
      Received via FinAdvisory Corporate Website (finadvisorycc.com)<br>
      East Legon Hills, Accra, Ghana &bull; P.O. Box MD 222, Madina, Accra
    </div>
  </div>
</body>
</html>
";

$partnerHeaders = [
    'MIME-Version: 1.0',
    'Content-Type: text/html; charset=UTF-8',
    'From: FinAdvisory Portal <' . $fromEmail . '>',
    'Reply-To: ' . $fullName . ' <' . $email . '>',
    'X-Mailer: PHP/' . phpversion()
];

// -------------------------------------------------------------
// 2. Branded Confirmation Email for the Client ($email)
// -------------------------------------------------------------
$clientSubject = "Inquiry Received: FinAdvisory Chartered Accountants";

$clientHtml = "
<!DOCTYPE html>
<html>
<head>
  <meta charset='UTF-8'>
  <style>
    body { font-family: 'Segoe UI', Arial, sans-serif; background-color: #f4f6f9; margin: 0; padding: 24px; color: #1e293b; }
    .email-container { max-width: 600px; margin: 0 auto; background: #ffffff; border-radius: 8px; overflow: hidden; box-shadow: 0 4px 14px rgba(0,0,0,0.06); border: 1px solid #e2e8f0; }
    .header-banner { background: #021226; padding: 30px 24px; text-align: center; border-bottom: 4px solid #c59b27; }
    .header-banner h1 { margin: 0; color: #ffffff; font-size: 22px; font-weight: 700; letter-spacing: 0.5px; }
    .header-banner p { margin: 6px 0 0; color: #c59b27; font-size: 13px; letter-spacing: 1px; text-transform: uppercase; }
    .content-area { padding: 28px 24px; line-height: 1.6; }
    .summary-card { background: #f8fafc; border: 1px solid #e2e8f0; border-radius: 6px; padding: 16px; margin: 20px 0; }
    .summary-card table { width: 100%; border-collapse: collapse; font-size: 13px; }
    .summary-card td { padding: 6px 8px; }
    .summary-card td.label { font-weight: 600; color: #475569; width: 35%; }
    .gold-box { background: #fefce8; border-left: 4px solid #c59b27; padding: 12px 16px; border-radius: 0 6px 6px 0; font-size: 13px; color: #713f12; margin-top: 18px; }
    .footer { background: #f1f5f9; padding: 20px 24px; font-size: 12px; color: #64748b; text-align: center; border-top: 1px solid #e2e8f0; }
  </style>
</head>
<body>
  <div class='email-container'>
    <div class='header-banner'>
      <h1>FinAdvisory Chartered Accountants</h1>
      <p>Trusted Advice. Lasting Value.</p>
    </div>
    <div class='content-area'>
      <p>Dear <strong>{$fullName}</strong>,</p>
      <p>
        Thank you for contacting <strong>FinAdvisory Chartered Accountants</strong>. We have successfully received your inquiry regarding <strong>{$serviceInterest}</strong>.
      </p>
      <p>
        A Senior Partner / Officer at our Accra practice is reviewing your requirements and will reach out promptly via phone (<strong>{$phone}</strong>) or email (<strong>{$email}</strong>) within 1 to 2 business days.
      </p>

      <div class='summary-card'>
        <strong>Your Submission Summary:</strong>
        <table>
          <tr>
            <td class='label'>Service Requested:</td>
            <td>{$serviceInterest}</td>
          </tr>
          <tr>
            <td class='label'>Company / Entity:</td>
            <td>{$companyName}</td>
          </tr>
          <tr>
            <td class='label'>Direct Phone:</td>
            <td>{$phone}</td>
          </tr>
        </table>
      </div>

      <div class='gold-box'>
        <strong>Urgent Matter?</strong><br>
        If your request is time-sensitive (e.g. immediate statutory GRA or Registrar-General filing deadline), please feel free to reach our office directly at <strong>0243663994</strong> or <strong>0206768299</strong>.
      </div>

      <p style='margin-top: 24px;'>
        Warm regards,<br>
        <strong>Practice Management Team</strong><br>
        FinAdvisory Chartered Accountants
      </p>
    </div>
    <div class='footer'>
      <strong>FinAdvisory Chartered Accountants</strong><br>
      Licensed by the Institute of Chartered Accountants, Ghana (ICAG)<br>
      BG56 Abayateye Street, East Legon Hills, Accra, Ghana<br>
      Tel: 0243663994 / 0206768299 &bull; Email: info@finadvisorycc.com
    </div>
  </div>
</body>
</html>
";

$clientHeaders = [
    'MIME-Version: 1.0',
    'Content-Type: text/html; charset=UTF-8',
    'From: FinAdvisory Chartered Accountants <' . $fromEmail . '>',
    'Reply-To: FinAdvisory <' . $recipientEmail . '>',
    'X-Mailer: PHP/' . phpversion()
];

// Send emails using native Hostinger PHP mail
$sentToPartner = @mail($recipientEmail, $partnerSubject, $partnerHtml, implode("\r\n", $partnerHeaders), "-f" . $fromEmail);
$sentToClient  = @mail($email, $clientSubject, $clientHtml, implode("\r\n", $clientHeaders), "-f" . $fromEmail);

if ($sentToPartner) {
    http_response_code(200);
    echo json_encode([
        'success' => true,
        'message' => 'Inquiry received successfully. A Senior Partner will contact you shortly.'
    ]);
} else {
    // If native mail failed, return 500 so frontend can fallback
    http_response_code(500);
    echo json_encode([
        'success' => false,
        'message' => 'Unable to dispatch email through server mail. Falling back to alternative gateway.'
    ]);
}
