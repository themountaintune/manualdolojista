import type { JSX } from "react";

export function TrendingTopics(): JSX.Element {
  const articles = [
    {
      title: "Seasonal Makeup Trends: Fall Edition",
      excerpt:
        "Dive into the enchanting world of fall-inspired makeup trends. From warm hues to bold lip colors, discover the latest beauty trends that will elevate your autumn beauty routine.",
      image: "https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=389&h=240&fit=crop&crop=center",
      author: "Jane Doe",
      readTime: "5min read",
    },
    {
      title: "Reviewing the Latest Beauty Innovations in 2023",
      excerpt:
        "Stay on the cutting edge of beauty with a comprehensive review of the latest innovations in the industry. From skincare breakthroughs to high-tech beauty gadgets, explore what's new in 2023.",
      image: "https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=389&h=240&fit=crop&crop=center",
      author: "Jane Doe",
      readTime: "5min read",
    },
    {
      title: "Reader Spotlight: Transformation Stories",
      excerpt:
        "Witness the incredible transformations of our valued customers. Read real stories of beauty journeys, complete with before-and-after photos, and be inspired by the power of self-care.",
      image: "https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=389&h=240&fit=crop&crop=center",
      author: "Jane Doe",
      readTime: "5min read",
    },
    {
      title: "Inside BB: Product Development Journey",
      excerpt:
        "Take an exclusive behind-the-scenes look at the creation of beauty products. Learn about commitment to quality, innovation, and the meticulous process that goes into each product.",
      image: "https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=389&h=240&fit=crop&crop=center",
      author: "Jane Doe",
      readTime: "5min read",
    },
    {
      title: "Exclusive Interview with Jenna Milhouse @missyb",
      excerpt:
        "Gain insights from a renowned beauty influencer or expert in an exclusive interview. Discover their favorite beauty tips, product recommendations, and the secrets behind their success in the industry.",
      image: "https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=389&h=240&fit=crop&crop=center",
      author: "Jane Doe",
      readTime: "5min read",
    },
    {
      title: "Step-by-Step Guide: Achieving the Perfect Smokey Eye",
      excerpt:
        "Witness the incredible transformations of our valued customers. Read real stories of beauty journeys, complete with before-and-after photos, and be inspired by the power of self-care.",
      image: "https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=389&h=240&fit=crop&crop=center",
      author: "Jane Doe",
      readTime: "5min read",
    },
  ];

  return (
    <section className="container py-20">
      <div className="flex items-end justify-between mb-10">
        <div className="space-y-2">
          <div className="text-sm font-semibold text-accent uppercase tracking-wide">
            Trending Topics
          </div>
          <h2 className="text-5xl font-semibold text-ink leading-tight max-w-lg">
            Latest Beauty Insights
          </h2>
        </div>
        <button className="btn btn-outline">See More</button>
      </div>

      {/* Articles Grid */}
      <div className="space-y-8">
        {/* First row */}
        <div className="flex gap-4">
          {articles.slice(0, 3).map((article, index) => (
            <article key={index} className="w-[405px] card p-2">
              <img
                src={article.image}
                alt={article.title}
                className="w-full h-60 rounded-sm border border-line object-cover"
              />
              <div className="p-2 space-y-4">
                <h3 className="text-2xl font-normal text-ink leading-tight">{article.title}</h3>
                <p className="text-base font-light text-sub leading-relaxed tracking-wide">
                  {article.excerpt}
                </p>
                <div className="pt-3 border-t border-line/16 flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <span className="text-sm text-ink">{article.author}</span>
                    <span className="text-sm text-ink">{article.readTime}</span>
                  </div>
                  <div className="w-5 h-2 bg-brand-muted"></div>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Second row */}
        <div className="flex gap-4">
          {articles.slice(3, 6).map((article, index) => (
            <article key={index + 3} className="w-[405px] card p-2">
              <img
                src={article.image}
                alt={article.title}
                className="w-full h-60 rounded-sm border border-line object-cover"
              />
              <div className="p-2 space-y-4">
                <h3 className="text-2xl font-normal text-ink leading-tight">{article.title}</h3>
                <p className="text-base font-light text-sub leading-relaxed tracking-wide">
                  {article.excerpt}
                </p>
                <div className="pt-3 border-t border-line/16 flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <span className="text-sm text-ink">{article.author}</span>
                    <span className="text-sm text-ink">{article.readTime}</span>
                  </div>
                  <div className="w-5 h-2 bg-brand-muted"></div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default TrendingTopics;
