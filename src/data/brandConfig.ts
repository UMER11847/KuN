export interface BrandConfig {
  name: string;
  wordmarkArabic: string;
  tagline: string;
  locationCity: string;
  country: string;
  instagramHandle: string;
  instagramUrl: string;
  enquiryEmailPlaceholder: string;
  ethicsStatement: string;
  crisisDisclaimer: string;
}

export const brandConfig: BrandConfig = {
  name: 'KÜN',
  wordmarkArabic: 'كُنْ',
  tagline: 'Being human is a whole experience.',
  locationCity: 'Karachi',
  country: 'Pakistan',
  instagramHandle: '@kun.exist',
  instagramUrl: 'https://www.instagram.com/kun.exist/',
  enquiryEmailPlaceholder: 'care@kunexist.com',
  ethicsStatement:
    'KÜN practices respectful, confidential, and evidence-informed psychological care. Every human arrives with a unique emotional narrative that deserves attentive hearing.',
  crisisDisclaimer:
    'KÜN is not an acute emergency crisis intervention service. If you or someone you care for is experiencing an immediate psychiatric emergency or acute safety crisis, please contact local hospital emergency facilities or national crisis helplines immediately.',
};
