import type { Request, Response, NextFunction } from "express";
import { verifyUserToken } from "../auth/utils/token.js";

export function authenticationMiddleware() {
  return function (req: Request, res: Response, next: NextFunction) {
    const headers = req.headers["authorization"];

    if (!headers) return next();

    if (!headers?.startsWith("Bearer")) {
      return res
        .status(400)
        .json({ error: "authorization header must start with Bearer" });
    }

    const token = headers.split(" ")[1];

    if (!token) {
      return res.status(400).json({
        error:
          "authorization header must start with Bearer and followed by token",
      });
    }

    const decoded = verifyUserToken(token);

    //@ts-ignore
    req.user = decoded;

    next();
  };
}

export function restrictToAuthenticatedUser() {
  return function (req: Request, res: Response, next: NextFunction) {
    //@ts-ignore
    if (!req.user)
      return res.status(401).json({ error: "authentication required" });
    return next();
  };
}
