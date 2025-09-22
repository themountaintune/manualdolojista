import type { JSX } from "react";

export function Categories(): JSX.Element {
	const categories = [
		{
			title: "Skincare",
			image: "https://placehold.co/287x416",
			width: "w-[303px]"
		},
		{
			title: "Haircare", 
			image: "https://placehold.co/291x416",
			width: "w-[307px]"
		},
		{
			title: "Makeup",
			image: "https://placehold.co/287x416", 
			width: "w-[303px]"
		}
	];

	return (
		<section className="container py-20 border-t border-b border-line">
			<div className="flex items-end justify-between">
				<div className="space-y-12">
					<div className="space-y-2">
						<div className="text-sm font-semibold text-accent uppercase tracking-wide">
							categories
						</div>
						<h2 className="text-6xl font-semibold text-ink leading-tight">
							Dive into Beauty
						</h2>
					</div>
					<button className="btn btn-outline">
						See More
					</button>
				</div>
				
				{/* Categories Grid */}
				<div className="flex gap-2">
					{categories.map((category, index) => (
						<div key={index} className={`${category.width} card p-2 pb-4`}>
							<img 
								src={category.image} 
								alt={category.title}
								className="w-full h-[416px] rounded-sm border border-line object-cover"
							/>
							<div className="flex items-center justify-between px-4 pt-4">
								<h3 className="text-2xl font-normal text-ink flex-1">
									{category.title}
								</h3>
								<div className="w-5 h-2 bg-brand-muted"></div>
							</div>
						</div>
					))}
				</div>
				
				{/* Navigation arrows */}
				<div className="absolute left-0 top-20 flex gap-2">
					<div className="p-2.5 rotate-180">
						<div className="arrow-left"></div>
					</div>
					<div className="p-2.5">
						<div className="arrow-right"></div>
					</div>
				</div>
			</div>
		</section>
	);
}

export default Categories;
