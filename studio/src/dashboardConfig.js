export default {
  widgets: [
    { name: "structure-menu" },
    {
      name: "project-info",
      options: {
        __experimental_before: [
          {
            name: "netlify",
            options: {
              description:
                "NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.",
              sites: [
                {
                  buildHookId:
                    "62ed820539e4633deed58927",
                  title: "Sanity Studio",
                  name: "sanity-gatsby-blog-studio-wvmsunqu",
                  apiId: "c87ae823-0338-41c1-a124-0bc8eaf79cee",
                },
                {
                  buildHookId: "62ed8205f3c82a3723ad3f78",
                  title: "Blog Website",
                  name: "sanity-gatsby-blog-web-oovrmqdw",
                  apiId: "cd9d90d9-238e-45f4-9e2f-98bfcae4cb3c",
                },
              ],
            },
          },
        ],
        data: [
          {
            title: "GitHub repo",
            value:
              "https://github.com/seanconned/sanity-gatsby-blog",
            category: "Code",
          },
          {
            title: "Frontend",
            value: "https://sanity-gatsby-blog-web-oovrmqdw.netlify.app",
            category: "apps",
          },
        ],
      },
    },
    { name: "project-users", layout: { height: "auto" } },
    {
      name: "document-list",
      options: {
        title: "Recent blog posts",
        order: "_createdAt desc",
        types: ["post"],
      },
      layout: { width: "medium" },
    },
  ],
};
