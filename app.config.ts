export default defineAppConfig({
    baseUrl: "https://cinxini.com",
    maxFeatured: 3,
    maxRecent: 6,
    maxPostPerPage: 2,
    intersectObsThreshold: 1.0,
    intersectObsIds: ".md-style h2[id]",
    giscus: {
      src: "https://giscus.app/client.js",
      repo: "cinxini/cinxini-blog-comments",
      repoId: "R_kgDOMtKXYw",
      category:"General",
      categoryId:"DIC_kwDOMtKXY84CiN5i",
      mapping:"title",
      strict:"0",
      reactionsEnabled:"1",
      emitMetadata:"0",
      inputPosition:"top",
      theme:"https://cinxini.github.io/stylesheets/giscus/candy.css",
      lang:"en",
      crossorigin:"anonymous"
    }
  })