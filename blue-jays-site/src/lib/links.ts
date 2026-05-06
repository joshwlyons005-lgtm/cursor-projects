export const LINKS = {
  featureForm:
    "https://docs.google.com/forms/d/e/1FAIpQLSf29qweW0Zok2b_80z03ueYLMd-n5IwpmRxCCSU0UYOikyYGg/viewform?usp=publish-editor",
  ambassadorForm:
    "https://docs.google.com/forms/d/e/1FAIpQLSf-zY-pXzwldWrckCPpmdXvuXlvv-fNodLRm0zabNjaP1JdvA/viewform?usp=publish-editor",
  x: "https://x.com/devnet_x",
  linkedIn: "https://www.linkedin.com/company/dev-network/",
  email: "devnetwork8@gmail.com",
} as const;

export function mailtoDevNet(subject?: string) {
  const base = `mailto:${LINKS.email}`;
  if (!subject) return base;
  return `${base}?subject=${encodeURIComponent(subject)}`;
}
