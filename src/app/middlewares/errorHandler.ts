import type { Request, Response, NextFunction } from 'express';

export default function errorHandler(
  error: Error,
  request: Request,
  response: Response,
  next: NextFunction,
) {
  response.sendStatus(500);
}
