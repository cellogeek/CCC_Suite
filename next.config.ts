
import type {NextConfig} from 'next';

const nextConfig: NextConfig = {
  /* config options here */
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'placehold.co',
        port: '',
        pathname: '/**',
      },
    ],
  },
  allowedDevOrigins: [
    "https://6000-firebase-studio-1750101048344.cluster-lqnxvk7thvfw4wbonsercicksm.cloudworkstations.dev",
    "https://9003-firebase-studio-1750101048344.cluster-lqnxvk7thvfw4wbonsercicksm.cloudworkstations.dev", // <-- ADD THIS LINE
    "https://9002-firebase-studio-1750101048344.cluster-lqnxvk7thvfw4wbonsercicksm.cloudworkstations.dev"
],  experimental: {
    // If there are other valid experimental options, they would go here.
    // For now, this might be empty if allowedDevOrigins was the only one.
  },
};

export default nextConfig;
