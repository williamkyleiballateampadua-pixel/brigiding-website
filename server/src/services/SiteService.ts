import { SiteRepository } from '../repositories/SiteRepository';

export class SiteService {
  static async getSiteMeta() {
    const announcements = await SiteRepository.getActiveAnnouncements();
    const featuredEvents = await SiteRepository.getEvents({ featuredOnly: true, limit: 3 });

    return {
      heroText: 'BRIGIDING — Glamour Without Borders',
      subTitle: 'Drag Performer, Choreographer, Host & Fashion Icon',
      socialLinks: {
        instagram: 'https://instagram.com/brigiding',
        twitter: 'https://twitter.com/brigiding',
        youtube: 'https://youtube.com/@brigiding',
        tiktok: 'https://tiktok.com/@brigiding',
      },
      marqueeText: announcements.length > 0 ? announcements[0].marquee_text : 'CONFIRMADA • BRIGIDING LIVE',
      featuredEvents,
    };
  }

  static async getEvents(options?: { upcomingOnly?: boolean; featuredOnly?: boolean; limit?: number }) {
    return await SiteRepository.getEvents(options);
  }

  static async getEventDetails(identifier: string) {
    return await SiteRepository.getEventBySlugOrId(identifier);
  }

  static async getGallery(category?: string) {
    return await SiteRepository.getGalleryItems(category);
  }

  static async getMilestones() {
    return await SiteRepository.getMilestones();
  }
}
