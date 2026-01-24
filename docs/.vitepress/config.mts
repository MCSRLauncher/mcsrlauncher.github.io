import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "MCSR Launcher",
  description: "The Minecraft Launcher for Minecraft Speedrunning",
  head: [
    ['link', { rel: 'icon', href: '/icon.png' }]
  ],
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    logo: '/icon.png',
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Download', link: '/download' },
      { text: 'Document', link: '/document' }
    ],

    sidebar: {
      '/document': [
        { 
          text: 'Document',
          link: '/',
          base: '/document'
        }
      ]
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/MCSRLauncher/Launcher', ariaLabel: 'GitHub Repository' },
      { icon: 'discord', link: 'https://mcsrlauncher.github.io/discord', ariaLabel: 'Discord' },
      { icon: 'patreon', link: 'https://mcsrlauncher.github.io/patreon', ariaLabel: 'Discord' },
    ],

    search: {
      provider: 'local'
    },
  },
  cleanUrls: true
})
