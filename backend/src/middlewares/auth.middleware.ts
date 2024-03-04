import jwt from 'jsonwebtoken';
import { Response, NextFunction } from 'express';
import 'dotenv/config';

export const auth = (req: any, res: Response, next: NextFunction) => {
  try {
    const header = req.header('Authorization');

    if (!header) {
      return res.status(403).json({ error: 'Authorization header is missing' });
    }

    const token = header.split(' ')[1];
    const decodedToken = jwt.verify(token, process.env.TOKEN_SECRET as string) as {
      userId: string;
      userEmail: string;
      userRole: string;
      userFirstName: string;
      userLastName: string;
    };
    const { userId, userEmail, userRole, userFirstName, userLastName } = decodedToken;
    req.auth = {
      userId: userId,
      userEmail: userEmail,
      userFistName: userFirstName,
      userLastName: userLastName,
      userRole: userRole,
    };
    next();
  } catch (error) {
    res.status(401).json({ error });
  }
};
