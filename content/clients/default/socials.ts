// ─────────────────────────────────────────────
//  SOCIALS — edit links for each client
// ─────────────────────────────────────────────

export interface SocialLink {
  platform: 'whatsapp' | 'instagram' | 'facebook' | 'tiktok';
  url: string;
}

export const socials: SocialLink[] = [
  { platform: 'whatsapp',  url: 'https://wa.me/212665953320' },
  { platform: 'instagram', url: 'https://instagram.com/soufianelabs' },
  { platform: 'facebook',  url: 'https://facebook.com/soufianelabs' },
  { platform: 'tiktok',    url: 'https://tiktok.com/@soufianelabs' },
];
