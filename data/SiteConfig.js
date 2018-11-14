module.exports = {
  blogPostDir: "posts", // The name of directory that contains your posts.
  lessonsDir: "lessons", // The name of the directory that contains lessons or docs.
  siteTitle: "CAAML meets OGC standards and INSPIRE", // Site title.
  siteTitleAlt: "CAAML meets OGC standards and INSPIRE", // Alternative site title for SEO.
  siteLogo: "/logos/camel.png", // Logo used for SEO and manifest.
  siteUrl: "http://geoavalanche.org", // Domain of your website without pathPrefix.
  pathPrefix: "/caaml-workshop", // Prefixes all links. For cases when deployed to example.github.io/gatsby-advanced-starter/.
  siteDescription: "How to use OGC standards and pushing CAAML into operational phase efficiently.", // Website description used for RSS feeds/meta description tag.
  siteRss: "/rss.xml", // Path to the RSS file.
  siteFBAppID: "1825356251115265", // FB Application ID for using app insights
  googleAnalyticsID: "UA-82450300-1 ", // GA tracking ID.
  disqusShortname: "https-caaml-github-io-ogc-caaml-inspire", // Disqus shortname.
  postDefaultCategoryID: "CAAML", // Default category for posts.
  userName: "GeoAvalanche Team", // Username to display in the author segment.
  userTwitter: "geoavalanche", // Optionally renders "Follow Me" in the UserInfo segment.
  userLocation: "Rome, IT", // User location to display in the author segment.
  userAvatar: "https://api.adorable.io/avatars/250/geoavalanche@adorable.io.png", // User avatar to display in the author segment.
  userDescription: "Dev team for snow avalanche Spatial Data Infrastructure!", // User description to display in the author segment.
  // Links to social profiles/projects you want to display in the author segment/navigation bar.
  userLinks: [
    {
      label: "GitHub",
      url: "https://github.com/geoavalanche",
      iconClassName: "fa fa-github"
    },
    {
      label: "Twitter",
      url: "https://twitter.com/geoavalanche",
      iconClassName: "fa fa-twitter"
    },
    {
      label: "Messenger",
      url: "https://www.messenger.com/t/geoavalanche",
      iconClassName: "fa fa-message"
    },
    {
      label: "Email",
      url: "mailto:geoavalanche@gmail.com",
      iconClassName: "fa fa-envelope"
    },
    {
      label: "Instagram",
      url: "https://instagram.com/geoavalanche",
      iconClassName: "fa fa-envelope"
    }
  ],
  copyright: "Copyright © 2018. GeoAvalanche Team", // Copyright string for the footer of the website and RSS feed.
themeColor : "#0079ac", // Used for setting manifest and progress theme colors.
  backgroundColor: "#e0e0e0", // Used for setting manifest background color.
  // TODO: Move this literally anywhere better.
  toCChapters: ["", "Chapter 1", "Chapter 2"] // Used to generate the Table Of Contents. Index 0 should be blank.
};
