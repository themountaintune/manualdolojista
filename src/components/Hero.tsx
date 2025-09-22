import type { JSX } from "react";

export function Hero(): JSX.Element {
	return (
		<section className="container py-20">
			<div className="flex items-center justify-between gap-12">
				<div className="flex-1 space-y-12">
					{/* Navigation arrows */}
					<div className="flex items-center gap-2">
						<div className="p-2.5 rotate-180">
							<div className="arrow-left"></div>
						</div>
						<div className="p-2.5">
							<div className="arrow-right"></div>
						</div>
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
							Explore the essential skincare products that can transform your daily routine. From hydrating serums to powerful antioxidants, discover the secrets to achieving radiant and healthy skin.
						</p>
					</div>
					
					<button className="btn btn-primary">
						Read more
					</button>
				</div>
				
				{/* Hero Image */}
				<div className="flex-shrink-0">
					<img 
						src="https://placehold.co/600x702" 
						alt="Skincare products" 
						className="w-[600px] h-[702px] rounded-sm object-cover"
					/>
				</div>
			</div>
		</section>
	);
}

export default Hero;
