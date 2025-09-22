import type { JSX } from "react";

export function Categories(): JSX.Element {
  const categories = [
    {
      title: "Skincare",
      image: "https://images.unsplash.com/photo-1556228720-195a672e8a03?w=287&h=416&fit=crop&crop=center",
      width: "w-[303px]",
    },
    {
      title: "Haircare",
      image: "https://images.unsplash.com/photo-1560066984-138dadb4c035?w=291&h=416&fit=crop&crop=center",
      width: "w-[307px]",
    },
    {
      title: "Makeup",
      image: "https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=287&h=416&fit=crop&crop=center",
      width: "w-[303px]",
    },
  ];

  return (
    <section className="container py-20 border-t border-b border-line">
      <div className="flex items-end justify-between">
        <div className="space-y-12">
          <div className="space-y-2">
            <div className="text-sm font-semibold text-accent uppercase tracking-wide">
              categories
            </div>
            <h2 className="text-6xl font-semibold text-ink leading-tight">Dive into Beauty</h2>
          </div>
          <button className="btn btn-outline">See More</button>
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
                <h3 className="text-2xl font-normal text-ink flex-1">{category.title}</h3>
                <div className="w-5 h-2 bg-brand-muted"></div>
              </div>
            </div>
          ))}
        </div>

				{/* Navigation arrows */}
				<div className="absolute left-0 top-20 flex gap-2">
					<button className="p-2.5 rotate-180 hover:opacity-70 transition-opacity">
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
      </div>
    </section>
  );
}

export default Categories;
