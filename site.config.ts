import { siteConfig } from './lib/site-config'

export default siteConfig({
  // the site's root Notion page (required)
  // https://pauljoych.notion.site/Edutolia-cfa8824d71e24e3ea6cc4e48ce8dfa89
  rootNotionPageId: 'cfa8824d71e24e3ea6cc4e48ce8dfa89',

  // if you want to restrict pages to a single notion workspace (optional)
  // (this should be a Notion ID; see the docs for how to extract this)
  rootNotionSpaceId: null,

  // basic site info (required)
  name: 'Edutolia Hub',
  domain: 'hub.edutolia.com',
  author: 'Edutolia Team',

  // open graph metadata (optional)
  description: 'Edutolia Hub',

  // social usernames (optional)
  // twitter: '',
  // github: '',
  // linkedin: 'edutolia',
  // mastodon: '#', // optional mastodon profile URL, provides link verification
  // newsletter: '#', // optional newsletter URL
  // youtube: '@edutoliaeducation', // optional youtube channel name or `channel/UCGbXXXXXXXXXXXXXXXXXXXXXX`

  // default notion icon and cover images for site-wide consistency (optional)
  // page-specific values will override these site-wide defaults
  defaultPageIcon: null,
  defaultPageCover: null,
  defaultPageCoverPosition: 0.5,

  // whether or not to enable support for LQIP preview images (optional)
  isPreviewImageSupportEnabled: true,

  // whether or not redis is enabled for caching generated preview images (optional)
  // NOTE: if you enable redis, you need to set the `REDIS_HOST` and `REDIS_PASSWORD`
  // environment variables. see the readme for more info
  isRedisEnabled: false,

  // map of notion page IDs to URL paths (optional)
  // any pages defined here will override their default URL paths
  // example:
  // https://www.notion.so/pauljoych/Content-Planner-fc72ea3389f1421eb5123806e19bc5c6
  // pageUrlOverrides: {
  //   '/content': 'fc72ea3389f1421eb5123806e19bc5c6',
  // },

  pageUrlOverrides: null,

  // whether to use the default notion navigation style or a custom one with links to
  // important pages
  navigationStyle: 'default'
  // navigationStyle: 'custom',
  // navigationLinks: [
  //   {
  //     title: 'About',
  //     pageId: 'f1199d37579b41cbabfc0b5174f4256a'
  //   },
  //   {
  //     title: 'Contact',
  //     pageId: '6a29ebcb935a4f0689fe661ab5f3b8d1'
  //   }
  // ]
})
