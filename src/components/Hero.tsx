import type { JSX } from "react";

export function Hero(): JSX.Element {
  return (
    <section className="container py-20">
      <div className="flex items-center justify-between gap-12">
        <div className="flex-1 space-y-12">
					{/* Navigation arrows */}
					<div className="flex items-center gap-2">
						<button className="p-2.5 hover:opacity-70 transition-opacity">
							<svg width="20" height="7" viewBox="0 0 20 7" fill="none">
								<path d="M0 3.5L5 0V3H20V4H5V7L0 3.5Z" fill="rgba(51, 51, 51, 0.60)"/>
							</svg>
						</button>
						<button className="p-2.5 hover:opacity-70 transition-opacity">
							<svg width="20" height="7" viewBox="0 0 20 7" fill="none">
								<path d="M20 3.5L15 7V4H0V3H15V0L20 3.5Z" fill="#333333"/>
							</svg>
						</button>
					</div>

          {/* Content */}
          <div className="space-y-2">
            <div className="text-sm font-semibold text-accent uppercase tracking-wide">
              FEATURED
            </div>
            <h1 className="text-6xl font-semibold text-ink leading-tight">
              10 Must-Have Skincare Products for Radiant Skin
            </h1>
            <p className="text-xl text-sub max-w-lg">
              Explore the essential skincare products that can transform your daily routine. From
              hydrating serums to powerful antioxidants, discover the secrets to achieving radiant
              and healthy skin.
            </p>
          </div>

          <button className="btn btn-primary">Read more</button>
        </div>

				{/* Hero Image */}
				<div className="flex-shrink-0">
					<img 
						src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=600&h=702&fit=crop&crop=face" 
						alt="Woman with face mask" 
						className="w-[600px] h-[702px] rounded-sm object-cover"
					/>
				</div>
      </div>
    </section>
  );
}

export default Hero;
