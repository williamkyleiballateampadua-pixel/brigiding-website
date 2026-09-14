import { Router } from 'express';
import authRoutes from './auth.routes';
import siteRoutes from './site.routes';
import leadsRoutes from './leads.routes';

const apiRouter = Router();

apiRouter.use('/auth', authRoutes);
apiRouter.use('/site', siteRoutes);
apiRouter.use('/events', siteRoutes); // Alias for clean /api/v1/events endpoints
apiRouter.use('/gallery', siteRoutes); // Alias for clean /api/v1/gallery endpoints
apiRouter.use('/milestones', siteRoutes); // Alias for clean /api/v1/milestones endpoints
apiRouter.use('/', leadsRoutes);

export default apiRouter;
