import { supabasePublic } from '../db/supabase';

export class SiteRepository {
  static async getActiveAnnouncements() {
    const { data, error } = await supabasePublic
      .from('site_announcements')
      .select('*')
      .eq('is_active', true)
      .order('created_at', { ascending: false });

    if (error) {
      throw new Error(`Failed to fetch site announcements: ${error.message}`);
    }
    return data || [];
  }

  static async getEvents(options: { upcomingOnly?: boolean; featuredOnly?: boolean; limit?: number } = {}) {
    let query = supabasePublic.from('events').select('*');

    if (options.upcomingOnly) {
      query = query.gte('event_date', new Date().toISOString());
    }
    if (options.featuredOnly) {
      query = query.eq('is_featured', true);
    }

    query = query.order('display_order', { ascending: true }).order('event_date', { ascending: true });

    if (options.limit) {
      query = query.limit(options.limit);
    }

    const { data, error } = await query;
    if (error) {
      throw new Error(`Failed to fetch events: ${error.message}`);
    }
    return data || [];
  }

  static async getEventBySlugOrId(identifier: string) {
    let query = supabasePublic.from('events').select('*');

    // Check if identifier is UUID
    const isUuid = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i.test(identifier);
    if (isUuid) {
      query = query.eq('event_id', identifier);
    } else {
      query = query.eq('slug', identifier);
    }

    const { data, error } = await query.single();
    if (error) {
      throw new Error(`Event not found: ${error.message}`);
    }
    return data;
  }

  static async getGalleryItems(category?: string) {
    let query = supabasePublic.from('gallery_items').select('*');

    if (category) {
      query = query.eq('category', category.toUpperCase());
    }

    query = query.order('sort_order', { ascending: true }).order('created_at', { ascending: false });

    const { data, error } = await query;
    if (error) {
      throw new Error(`Failed to fetch gallery items: ${error.message}`);
    }
    return data || [];
  }

  static async getMilestones() {
    const { data, error } = await supabasePublic
      .from('portfolio_milestones')
      .select('*')
      .order('event_year', { ascending: false })
      .order('display_order', { ascending: true });

    if (error) {
      throw new Error(`Failed to fetch milestones: ${error.message}`);
    }
    return data || [];
  }
}
