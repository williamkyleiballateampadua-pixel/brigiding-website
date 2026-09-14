import { supabaseAdmin, supabasePublic } from '../db/supabase';

export interface CreateUserData {
  email: string;
  passwordHash?: string;
  fullName: string;
  phone?: string;
  instagramHandle?: string;
  role?: 'CLIENT' | 'VIP_MEMBER' | 'ADMIN' | 'SUPERADMIN';
}

export class AuthRepository {
  static async findUserByEmail(email: string) {
    const { data, error } = await supabaseAdmin
      .from('users')
      .select('*, profiles(*)')
      .eq('email', email)
      .single();

    if (error && error.code !== 'PGRST116') {
      throw new Error(`Error fetching user by email: ${error.message}`);
    }
    return data;
  }

  static async findUserById(userId: string) {
    const { data, error } = await supabaseAdmin
      .from('users')
      .select('*, profiles(*)')
      .eq('user_id', userId)
      .single();

    if (error) {
      throw new Error(`Error fetching user by ID: ${error.message}`);
    }
    return data;
  }

  static async createUser(userData: CreateUserData) {
    const { data: user, error: userError } = await supabaseAdmin
      .from('users')
      .insert({
        email: userData.email,
        password_hash: userData.passwordHash,
        role: userData.role || 'CLIENT',
        status: 'ACTIVE',
      })
      .select()
      .single();

    if (userError) {
      throw new Error(`User creation failed: ${userError.message}`);
    }

    const { data: profile, error: profileError } = await supabaseAdmin
      .from('profiles')
      .insert({
        user_id: user.user_id,
        full_name: userData.fullName,
        phone: userData.phone || null,
        instagram_handle: userData.instagramHandle || null,
      })
      .select()
      .single();

    if (profileError) {
      throw new Error(`Profile creation failed: ${profileError.message}`);
    }

    return { ...user, profile };
  }

  static async updateProfile(userId: string, updates: { fullName?: string; phone?: string; instagramHandle?: string; avatarUrl?: string }) {
    const payload: Record<string, any> = {};
    if (updates.fullName !== undefined) payload.full_name = updates.fullName;
    if (updates.phone !== undefined) payload.phone = updates.phone;
    if (updates.instagramHandle !== undefined) payload.instagram_handle = updates.instagramHandle;
    if (updates.avatarUrl !== undefined) payload.avatar_url = updates.avatarUrl;
    payload.updated_at = new Date().toISOString();

    const { data, error } = await supabaseAdmin
      .from('profiles')
      .update(payload)
      .eq('user_id', userId)
      .select()
      .single();

    if (error) {
      throw new Error(`Profile update failed: ${error.message}`);
    }
    return data;
  }
}
