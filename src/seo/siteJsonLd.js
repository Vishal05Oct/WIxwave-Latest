export const SITE = {
  name: "Wixwave",
  url: "https://wixwave.co",
  logo: "https://res.cloudinary.com/dobbdtftp/image/upload/v1746202311/3_rgrvsx.png",
  telephone: "+919470440744",
  sameAs: [
    "https://www.linkedin.com/company/wixwave/",
    "https://www.facebook.com/people/WixWave-The-Digital-Solutions/61570872845668/",
    "https://www.instagram.com/wixwave.co/",
    "https://x.com/Wixwave?t=aNUW1kl498Ht4V-7vT3wuA&s=09",
  ],
};

export function getOrganizationJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: SITE.name,
    url: SITE.url,
    logo: SITE.logo,
    telephone: SITE.telephone,
    sameAs: SITE.sameAs,
  };
}

export function getWebsiteJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: SITE.name,
    url: SITE.url,
  };
}

