import { LeadRepository, CreateInquiryData, CreateTicketAppData } from '../repositories/LeadRepository';

export class LeadService {
  static async submitInquiry(data: CreateInquiryData) {
    if (!data.fullName || !data.email || !data.message) {
      throw new Error('Full Name, Email, and Message are required.');
    }
    return await LeadRepository.createInquiry(data);
  }

  static async submitTicketApplication(data: CreateTicketAppData) {
    if (!data.eventId || !data.fullName || !data.email || !data.mobileNumber || !data.preferredShowTime) {
      throw new Error('Event ID, Full Name, Email, Mobile Number, and Preferred Show Time are required.');
    }
    if (!data.termsAccepted) {
      throw new Error('Terms and conditions must be accepted.');
    }
    return await LeadRepository.createTicketApplication(data);
  }

  static async processTypeformWebhook(payload: any) {
    // Typeform standard payload parser
    const formResponse = payload?.form_response;
    if (!formResponse) {
      throw new Error('Invalid Typeform payload structure.');
    }

    const answers = formResponse.answers || [];
    let fullName = 'Typeform User';
    let email = 'lead@typeform.com';
    let message = 'Submitted via Typeform webhook';
    let organizationName = '';
    let budgetRange = '';

    for (const ans of answers) {
      if (ans.type === 'text' && ans.field?.ref?.includes('name')) fullName = ans.text;
      if (ans.type === 'email') email = ans.email;
      if (ans.type === 'text' && ans.field?.ref?.includes('message')) message = ans.text;
      if (ans.type === 'text' && ans.field?.ref?.includes('org')) organizationName = ans.text;
      if (ans.type === 'choice' && ans.choice?.label) budgetRange = ans.choice.label;
    }

    return await LeadRepository.createInquiry({
      fullName,
      email,
      organizationName,
      serviceType: 'BRAND_COLLAB',
      budgetRange,
      message,
      source: 'TYPEFORM_WEBHOOK',
    });
  }
}
