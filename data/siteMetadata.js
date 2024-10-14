// @ts-check
/** @type {import("pliny/config").PlinyConfig } */

const siteMetadata = {
  title: "arthur-madureira's Coding Adventure",
  author: 'Trong Khanh',
  fullName: 'Do Trong Khanh',
  headerTitle: "arthur-madureira's Blog",
  description: 'My desire to practice my skills and share my acquired knowledge fuels my endeavors.',
  language: 'en-us',
  theme: 'system',
  siteUrl: 'https://blogtest',
  analyticsURL:
    "https://analytics.us.umami.is/share/LwbQOMMcBOK9zcwU/arthur-madureira's%20Blog%20-%20arthur-madureira's%20Coding%20Adventure",
  siteRepo: 'https://github.com/arthur-madureira/blogtest',
  siteLogo: '/static/images/avatar.jpg',
  image: '/static/images/avatar.jpg',
  socialBanner: '/static/images/projects/arthur-madureira-blog.png',
  email: 'dotrongkhanh.dev@gmail.com',
  github: 'https://github.com/arthur-madureira',
  // facebook: 'https://www.facebook.com/blogtest',
  linkedin: 'https://www.linkedin.com/in/arthur-madureira',
  // twitter: 'https://twitter.com/arthur-madureira',
  // youtube: 'https://youtube.com',
  locale: 'en-US',
  socialAccounts: {
    github: 'arthur-madureira',
    linkedin: 'arthur-madureira',
    facebook: 'blogtest',
  },
  analytics: {
    umamiWebsiteId: '7b7953a7-de2e-4e30-9a29-1a4aee05c627',
  },
  newsletter: {
    provider: 'buttondown',
  },
  comments: {
    provider: 'giscus',
    giscusConfig: {
      repo: process.env.NEXT_PUBLIC_GISCUS_REPO,
      repositoryId: process.env.NEXT_PUBLIC_GISCUS_REPOSITORY_ID,
      category: process.env.NEXT_PUBLIC_GISCUS_CATEGORY,
      categoryId: process.env.NEXT_PUBLIC_GISCUS_CATEGORY_ID,
      mapping: 'title',
      reactions: '1',
      metadata: '0',
      theme: 'light',
      darkTheme: 'transparent_dark',
      themeURL: '',
      lang: 'en',
      inputPosition: 'top',
    },
  },
};

module.exports = siteMetadata;