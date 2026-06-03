import express from "express";
import type { Router } from "express";
import AuthenticationController from "./controller.js";
import { restrictToAuthenticatedUser } from "../middleware/auth-middleware.js";

const authenticationController = new AuthenticationController();
export const authRouter: Router = express.Router();

authRouter.post(
  "/sign-up",
  authenticationController.handleSignUp.bind(authenticationController),
);

authRouter.post(
  "/sign-in",
  authenticationController.handleSignIn.bind(authenticationController),
);

authRouter.get(
  "/me",
  restrictToAuthenticatedUser(),
  authenticationController.handleGetMe.bind(authenticationController),
);
