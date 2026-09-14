import { Router } from 'express';
import { LeadController } from '../controllers/LeadController';

const router = Router();

router.post('/inquiries', LeadController.submitInquiry);
router.post('/tickets/apply', LeadController.submitTicketApplication);
router.post('/webhooks/typeform', LeadController.handleTypeformWebhook);

export default router;
