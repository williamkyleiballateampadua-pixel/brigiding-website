import { Request, Response } from 'express';
import { SiteService } from '../services/SiteService';

export class SiteController {
  static async getMeta(req: Request, res: Response) {
    try {
      const meta = await SiteService.getSiteMeta();
      res.json({ success: true, data: meta });
    } catch (err: any) {
      res.status(500).json({ success: false, error: err.message });
    }
  }

  static async getEvents(req: Request, res: Response) {
    try {
      const upcoming = req.query.upcoming === 'true';
      const featured = req.query.featured === 'true';
      const limit = req.query.limit ? parseInt(req.query.limit as string) : undefined;

      const events = await SiteService.getEvents({ upcomingOnly: upcoming, featuredOnly: featured, limit });
      res.json({ success: true, count: events.length, data: events });
    } catch (err: any) {
      res.status(500).json({ success: false, error: err.message });
    }
  }

  static async getEventBySlugOrId(req: Request, res: Response) {
    try {
      const { slugOrId } = req.params;
      const event = await SiteService.getEventDetails(slugOrId);
      res.json({ success: true, data: event });
    } catch (err: any) {
      res.status(404).json({ success: false, error: err.message });
    }
  }

  static async getGallery(req: Request, res: Response) {
    try {
      const category = req.query.category as string | undefined;
      const items = await SiteService.getGallery(category);
      res.json({ success: true, count: items.length, data: items });
    } catch (err: any) {
      res.status(500).json({ success: false, error: err.message });
    }
  }

  static async getMilestones(req: Request, res: Response) {
    try {
      const milestones = await SiteService.getMilestones();
      res.json({ success: true, count: milestones.length, data: milestones });
    } catch (err: any) {
      res.status(500).json({ success: false, error: err.message });
    }
  }
}
