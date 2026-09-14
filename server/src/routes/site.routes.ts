import { Router } from 'express';
import { SiteController } from '../controllers/SiteController';

const router = Router();

router.get('/meta', SiteController.getMeta);
router.get('/events', SiteController.getEvents);
router.get('/events/:slugOrId', SiteController.getEventBySlugOrId);
router.get('/gallery', SiteController.getGallery);
router.get('/milestones', SiteController.getMilestones);

export default router;
