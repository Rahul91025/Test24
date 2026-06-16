export function validateEnv() {
  const required = ["MONGODB_URI", "JWT_SECRET"];
  const missing = required.filter(k => !process.env[k]);
  if (missing.length) throw new Error(`Missing required environment variables: ${missing.join(", ")}`);
}
