import Critters from "critters-webpack-plugin";

const nextConfig = {
  webpack: (config: { plugins: any[]; }) => {
    config.plugins.push(new Critters({
      preload: 'swap',
      compress: true,
    }));
    return config;
  },
};

export default nextConfig;
