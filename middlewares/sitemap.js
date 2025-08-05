import { SitemapStream, streamToPromise } from "sitemap";
import { Readable } from "stream";
import Projects from "../model/projects.js"; // adjust path to your Project model

let sitemapCache;

async function sitemapMiddleware(req, res, next) {
  try {
    res.header("Content-Type", "application/xml");

    if (sitemapCache) {
      // Send cached sitemap if available
      return res.send(sitemapCache);
    }

    const projects = await Projects.find().select("_id updatedAt").lean();

    // Define your static URLs
    const links = [
      { url: "/", changefreq: "monthly", priority: 1.0 },
      { url: "/about", changefreq: "yearly", priority: 0.7 },
      { url: "/projects", changefreq: "weekly", priority: 0.9 },
      { url: "/experience", changefreq: "yearly", priority: 0.7 },
      { url: "/skills", changefreq: "yearly", priority: 0.7 },
      { url: "/academic", changefreq: "yearly", priority: 0.7 },
      { url: "/certifications", changefreq: "yearly", priority: 0.7 },
      { url: "/contact", changefreq: "yearly", priority: 0.6 },
    ];

    // Add dynamic project URLs
    projects.forEach((proj) => {
      links.push({
        url: `/projects/${proj._id}`,
        changefreq: "monthly",
        priority: 0.8,
        lastmod: proj.updatedAt ? proj.updatedAt.toISOString() : undefined,
      });
    });

    // Create sitemap stream
    const stream = new SitemapStream({
      hostname: "https://sachinnimshan.com",
    });

    // Convert URLs array into stream and pipe to sitemap stream
    const xmlData = await streamToPromise(Readable.from(links).pipe(stream));

    sitemapCache = xmlData.toString(); // cache sitemap

    res.send(sitemapCache);
  } catch (error) {
    console.error("Error generating sitemap:", error);
    res.status(500).end();
  }
}

export default sitemapMiddleware;
