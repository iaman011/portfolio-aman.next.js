/** @type {import('next').NextConfig} */
const nextConfig ={
    images: {
      
            dangerouslyAllowSVG: true ,
            // contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
            remotePatterns: [
                {
                hostname:'github-readme-stats.vercel.app',
            },
                {
                hostname:'github-readme-streak-stats.herokuapp.com',
            },
                {
                hostname:'github-profile-summary-cards.vercel.app',
            },
                {
                hostname:'leetcard.jacoblin.cool',
            },
        ]
      
    },
  };

module.exports = nextConfig
