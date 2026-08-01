import jwt from 'jsonwebtoken';

const getJwtSecret = () => {
  return process.env.JWT_SECRET || 'catalix_global_jwt_secret_2026_secure_key';
};

const getAdminPassword = () => {
  return process.env.ADMIN_PASSWORD || 'secure_password_here';
};

export const generateToken = (password: string): string => {
  const adminPass = getAdminPassword();
  if (password !== adminPass) {
    throw new Error('Invalid password');
  }
  return jwt.sign({ admin: true }, getJwtSecret(), {
    expiresIn: '24h',
  });
};

export const verifyToken = (token: string) => {
  try {
    return jwt.verify(token, getJwtSecret());
  } catch {
    return null;
  }
};
