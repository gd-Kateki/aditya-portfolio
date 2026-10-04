export const basePath = process.env.NEXT_PUBLIC_BASE_PATH || '';
export const asset = (path: string) => `${basePath}${path}`;
export const siteOrigin = process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, '');
