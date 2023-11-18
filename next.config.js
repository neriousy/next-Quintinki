/** @type {import('next').NextConfig} */

const nextConfig = {
  env: {
    DISCORD_CLIENT_ID: '1174841523578359808',
    DISCORD_CLIENT_SECRET: 'ayX7AI_vl0S-_SDWr6Tzjmm1Pw9u6BUf',
    NEXTAUTH_SECRET: 'Y1AiwaOzZG2BvGgesUQdFnaVjGfdMduwb6RRZwGoml0=',
    DISCORD_REDIRECT_URI: 'http://localhost:3000/api/auth/callback/discord',
    DISCORD_QUINTIN_ID: '757921600745242694',
    NEXTAUTH_URL: 'http://localhost:3000',
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cdn.discordapp.com',
        port: '',
        pathname: '/avatars/**',
      },
    ],
  },
};

module.exports = nextConfig;
