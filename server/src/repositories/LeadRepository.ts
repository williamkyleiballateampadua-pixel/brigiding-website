import { supabaseAdmin, supabasePublic } from '../db/supabase';

export interface CreateInquiryData {
  userId?: string;
  fullName: string;
  email: string;
  organizationName?: string;
  serviceType: 'CORPORATE_PERFORMANCE' | 'CHOREOGRAPHY_WORKSHOP' | 'HOSTING_MC' | 'BRAND_COLLAB' | 'FESTIVAL_BOOKING';
  targetDate?: string;
  budgetRange?: string;
  message: string;
  source?: 'DIRECT_FORM' | 'TYPEFORM_WEBHOOK';
}

export interface CreateTicketAppData {
  eventId: string;
  fullName: string;
  email: string;
  mobileNumber: string;
  numberOfTickets: number;
  preferredShowTime: string;
  accessibilityNotes?: string;
  termsAccepted: boolean;
}

export class LeadRepository {
  static async createInquiry(inquiryData: CreateInquiryData) {
    const { data, error } = await supabasePublic
      .from('booking_inquiries')
      .insert({
        user_id: inquiryData.userId || null,
        full_name: inquiryData.fullName,
        email: inquiryData.email,
        organization_name: inquiryData.organizationName || null,
        service_type: inquiryData.serviceType,
        target_date: inquiryData.targetDate || null,
        budget_range: inquiryData.budgetRange || null,
        message: inquiryData.message,
        status: 'NEW',
        source: inquiryData.source || 'DIRECT_FORM',
      })
      .select()
      .single();

    if (error) {
      throw new Error(`Failed to submit booking inquiry: ${error.message}`);
    }
    return data;
  }

  static async createTicketApplication(appData: CreateTicketAppData) {
    const { data, error } = await supabasePublic
      .from('ticket_applications')
      .insert({
        event_id: appData.eventId,
        full_name: appData.fullName,
        email: appData.email,
        mobile_number: appData.mobileNumber,
        number_of_tickets: appData.numberOfTickets,
        preferred_show_time: appData.preferredShowTime,
        accessibility_notes: appData.accessibilityNotes || null,
        terms_accepted: appData.termsAccepted,
        status: 'SUBMITTED',
      })
      .select()
      .single();

    if (error) {
      throw new Error(`Failed to submit ticket application: ${error.message}`);
    }
    return data;
  }

  static async getAllInquiries(statusFilter?: string) {
    let query = supabaseAdmin.from('booking_inquiries').select('*');
    if (statusFilter) {
      query = query.eq('status', statusFilter.toUpperCase());
    }
    query = query.order('created_at', { ascending: false });

    const { data, error } = await query;
    if (error) {
      throw new Error(`Failed to fetch inquiries: ${error.message}`);
    }
    return data || [];
  }

  static async getAllTicketApplications(eventId?: string) {
    let query = supabaseAdmin.from('ticket_applications').select('*, events(*)');
    if (eventId) {
      query = query.eq('event_id', eventId);
    }
    query = query.order('created_at', { ascending: false });

    const { data, error } = await query;
    if (error) {
      throw new Error(`Failed to fetch ticket applications: ${error.message}`);
    }
    return data || [];
  }
}
