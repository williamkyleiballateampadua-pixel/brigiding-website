import { Request, Response } from 'express';
import { LeadService } from '../services/LeadService';
import { AuthRequest } from '../middleware/authMiddleware';

export class LeadController {
  static async submitInquiry(req: AuthRequest, res: Response) {
    try {
      const { fullName, email, organizationName, serviceType, targetDate, budgetRange, message } = req.body;
      const inquiry = await LeadService.submitInquiry({
        userId: req.user?.userId,
        fullName,
        email,
        organizationName,
        serviceType,
        targetDate,
        budgetRange,
        message,
        source: 'DIRECT_FORM',
      });
      res.status(201).json({ success: true, message: 'Booking inquiry received!', data: inquiry });
    } catch (err: any) {
      res.status(400).json({ success: false, error: err.message });
    }
  }

  static async submitTicketApplication(req: Request, res: Response) {
    try {
      const { eventId, fullName, email, mobileNumber, numberOfTickets, preferredShowTime, accessibilityNotes, termsAccepted } = req.body;
      const application = await LeadService.submitTicketApplication({
        eventId,
        fullName,
        email,
        mobileNumber,
        numberOfTickets,
        preferredShowTime,
        accessibilityNotes,
        termsAccepted,
      });
      res.status(201).json({ success: true, message: 'Ticket application submitted!', data: application });
    } catch (err: any) {
      res.status(400).json({ success: false, error: err.message });
    }
  }

  static async handleTypeformWebhook(req: Request, res: Response) {
    try {
      const inquiry = await LeadService.processTypeformWebhook(req.body);
      res.status(200).json({ success: true, message: 'Typeform lead ingested', data: inquiry });
    } catch (err: any) {
      res.status(400).json({ success: false, error: err.message });
    }
  }
}
