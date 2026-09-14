import { Request, Response } from 'express';
import { AuthService } from '../services/AuthService';
import { AuthRequest } from '../middleware/authMiddleware';

export class AuthController {
  static async register(req: Request, res: Response) {
    try {
      const { email, password, fullName, phone, instagramHandle } = req.body;
      const result = await AuthService.register({ email, password, fullName, phone, instagramHandle });
      res.status(201).json({ success: true, ...result });
    } catch (err: any) {
      res.status(400).json({ success: false, error: err.message });
    }
  }

  static async login(req: Request, res: Response) {
    try {
      const { email, password } = req.body;
      const result = await AuthService.login({ email, password });
      res.json({ success: true, ...result });
    } catch (err: any) {
      res.status(401).json({ success: false, error: err.message });
    }
  }

  static async getProfile(req: AuthRequest, res: Response) {
    try {
      if (!req.user) return res.status(401).json({ error: 'Unauthorized' });
      const profile = await AuthService.getUserProfile(req.user.userId);
      res.json({ success: true, data: profile });
    } catch (err: any) {
      res.status(500).json({ success: false, error: err.message });
    }
  }

  static async updateProfile(req: AuthRequest, res: Response) {
    try {
      if (!req.user) return res.status(401).json({ error: 'Unauthorized' });
      const updated = await AuthService.updateProfile(req.user.userId, req.body);
      res.json({ success: true, data: updated });
    } catch (err: any) {
      res.status(400).json({ success: false, error: err.message });
    }
  }
}
