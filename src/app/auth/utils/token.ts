import Jwt from "jsonwebtoken";

export interface userTokenPayload {
  id: string;
}

const JWT_SCERET = "myjwtsecret";

export function createUserToken(payload: userTokenPayload) {
  const token = Jwt.sign(payload, JWT_SCERET);
  return token;
}

export function verifyUserToken(token: string) {
  try {
    const payload = Jwt.verify(token, JWT_SCERET) as userTokenPayload;
    return payload;
  } catch (error) {
    return null;
  }
}
