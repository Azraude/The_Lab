/** @type {import('next').NextConfig} */
const nextConfig = {
  exportPathMap: async function (defaultPathMap) {
    return {
      ...defaultPathMap,
      '/': { page: '/' },
      '/about': { page: '/about' },
      '/menu': { page: '/menu' },
      '/payment': { page: '/payment' },
      '/product/[id]': { page: '/product/[id]' },
      // Ajouter d'autres pages ici
    }
  },
  // Activer la génération de pages statiques pour les routes dynamiques
  exportTrailingSlash: true,
  // Activer le mode strict de React
  reactStrictMode: true,
  // Autres options de configuration ici
};

module.exports = nextConfig;
