import crypto from "crypto";

export const hash = (string) =>
  crypto.createHash("sha256").update(string).digest("base64");

export const hash_compare = (first, second) => Object.is(first, second);
