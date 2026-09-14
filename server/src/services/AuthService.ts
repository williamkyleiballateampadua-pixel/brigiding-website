import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import { AuthRepository, CreateUserData } from '../repositories/AuthRepository';

const JWT_SECRET = process.env.JWT_SECRET || 'brigiding-default-secret-key-change-in-production';
const JWT_EXPIRES_IN = '7d';

export class AuthService {
  static async register(data: { email: string; password?: string; fullName: string; phone?: string; instagramHandle?: string }) {
    const existingUser = await AuthRepository.findUserByEmail(data.email);
    if (existingUser) {
      throw new Error('User with this email already exists.');
    }

    let passwordHash: string | undefined;
    if (data.password) {
      passwordHash = await bcrypt.hash(data.password, 10);
    }

    const newUser = await AuthRepository.createUser({
      email: data.email,
      passwordHash,
      fullName: data.fullName,
      phone: data.phone,
      instagramHandle: data.instagramHandle,
      role: 'CLIENT',
    });

    const token = this.generateToken(newUser.user_id, newUser.role);
    return { user: newUser, token };
  }

  static async login(data: { email: string; password?: string }) {
    const user = await AuthRepository.findUserByEmail(data.email);
    if (!user) {
      throw new Error('Invalid email or password.');
    }

    if (user.password_hash) {
      if (!data.password) {
        throw new Error('Password is required.');
      }
      const isMatch = await bcrypt.compare(data.password, user.password_hash);
      if (!isMatch) {
        throw new Error('Invalid email or password.');
      }
    }

    const token = this.generateToken(user.user_id, user.role);
    return { user, token };
  }

  static generateToken(userId: string, role: string) {
    return jwt.sign({ userId, role }, JWT_SECRET, { expiresIn: JWT_EXPIRES_IN });
  }

  static verifyToken(token: string) {
    try {
      return jwt.verify(token, JWT_SECRET) as { userId: string; role: string };
    } catch (err) {
      throw new Error('Invalid or expired token.');
    }
  }

  static async getUserProfile(userId: string) {
    return await AuthRepository.findUserById(userId);
  }

  static async updateProfile(userId: string, updates: { fullName?: string; phone?: string; instagramHandle?: string; avatarUrl?: string }) {
    return await AuthRepository.updateProfile(userId, updates);
  }
}
