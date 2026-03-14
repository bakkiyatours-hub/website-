/** @type {import("next").NextConfig} */
const basePathFromEnv = process.env.NEXT_PUBLIC_BASE_PATH ?? process.env.BASE_PATH ?? "";

const normalizedBasePath = (() => {
  const raw = `${basePathFromEnv}`.trim();
  if (!raw || raw === "/") return "";
  const withLeadingSlash = raw.startsWith("/") ? raw : `/${raw}`;
  return withLeadingSlash.endsWith("/") ? withLeadingSlash.slice(0, -1) : withLeadingSlash;
})();

const nextConfig = {
  reactStrictMode: true,
  output: "export",
  trailingSlash: true,
  basePath: normalizedBasePath,
  assetPrefix: normalizedBasePath || undefined,
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
