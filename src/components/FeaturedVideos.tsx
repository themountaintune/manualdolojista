import type { JSX } from "react";

export function FeaturedVideos(): JSX.Element {
  const videos = [
    {
      title: "Reader Spotlight: Transformation Stories",
      category: "Advice",
      duration: "15:48",
      active: false,
    },
    {
      title: "Guest Expert Takeover: Interactive Beauty Experiences",
      category: "Experts",
      duration: "15:48",
      active: true,
    },
    {
      title: "Step-by-Step Guide: Achieving the Perfect Smokey Eye",
      category: "Tutorial",
      duration: "15:48",
      active: false,
    },
  ];

  return (
    <section className="container py-20 border-t border-b border-line">
      <div className="flex items-end justify-between mb-10">
        <div className="space-y-2">
          <div className="text-sm font-semibold text-accent uppercase tracking-wide">ADVICE</div>
          <h2 className="text-6xl font-semibold text-ink leading-tight">Featured Videos</h2>
        </div>

				{/* Navigation arrows */}
				<div className="flex gap-1">
					<button className="p-2.5 -rotate-90 hover:opacity-70 transition-opacity">
						<svg width="7" height="20" viewBox="0 0 7 20" fill="none">
							<path d="M3.5 0L7 4H4V20H3V4H0L3.5 0Z" fill="rgba(51, 51, 51, 0.60)"/>
						</svg>
					</button>
					<button className="p-2.5 rotate-90 hover:opacity-70 transition-opacity">
						<svg width="7" height="20" viewBox="0 0 7 20" fill="none">
							<path d="M3.5 20L0 16H3V0H4V16H7L3.5 20Z" fill="#333333"/>
						</svg>
					</button>
				</div>
      </div>

      <div className="flex gap-4">
        {/* Main Video */}
        <div className="relative w-[827px] h-[466px]">
          <img 
            src="https://images.unsplash.com/photo-1570194065650-d99fb4bedf0a?w=827&h=466&fit=crop&crop=center" 
            alt="Featured video"
            className="w-full h-full rounded-md border border-line object-cover"
          />
          {/* Play button overlay */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-8 h-12 bg-bg rounded-sm border border-line flex items-center justify-center">
              {/* Play icon would go here */}
            </div>
          </div>
        </div>

        {/* Video List */}
        <div className="space-y-4">
          {videos.map((video, index) => (
            <div
              key={index}
              className={`w-[405px] p-4 rounded-sm border ${
                video.active ? "border-line" : "border-line/16"
              }`}
            >
              <div className="space-y-4">
                <h3
                  className={`text-2xl font-normal leading-tight ${
                    video.active ? "text-ink" : "text-brand-muted"
                  }`}
                >
                  {video.title}
                </h3>
                <div
                  className={`pt-3 border-t ${
                    video.active ? "border-line/80" : "border-line/8"
                  } flex items-center justify-between`}
                >
                  <div className="flex items-center gap-4">
                    <span className={`text-sm ${video.active ? "text-ink" : "text-brand-muted"}`}>
                      {video.category}
                    </span>
                    <span className={`text-sm ${video.active ? "text-ink" : "text-brand-muted"}`}>
                      {video.duration}
                    </span>
                  </div>
                  <div className="w-6 h-6 relative overflow-hidden">
                    <div
                      className={`absolute w-3 h-4 left-2 top-1 ${
                        video.active ? "bg-ink" : "bg-brand-muted"
                      }`}
                    ></div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default FeaturedVideos;
