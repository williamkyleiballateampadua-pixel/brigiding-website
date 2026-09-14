import { Request, Response, NextFunction } from 'express';
import { AuthService } from '../services/AuthService';

export interface AuthRequest extends Request {
  user?: {
    userId: string;
    role: string;
  };
}

export function authenticate(req: AuthRequest, res: Response, next: NextFunction) {
  const authHeader = req.headers.authorization;
  if (!authHeader || !authHeader.startsWith('Bearer ')) {
    return res.status(401).json({ error: 'Unauthorized. Token required.' });
  }

  const token = authHeader.split(' ')[1];
  try {
    const decoded = AuthService.verifyToken(token);
    req.user = decoded;
    next();
  } catch (err: any) {
    return res.status(401).json({ error: err.message || 'Unauthorized. Invalid token.' });
  }
}

export function requireRole(...roles: string[]) {
  return (req: AuthRequest, res: Response, next: NextFunction) => {
    if (!req.user) {
      return res.status(401).json({ error: 'Unauthorized.' });
    }
    if (!roles.includes(req.user.role)) {
      return res.status(403).json({ error: 'Forbidden. Insufficient permissions.' });
    }
    next();
  };
}
