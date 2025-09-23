import React from "react";

export function Categories(): React.JSX.Element {
  const categories = [
    {
      title: "Marketing Digital",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=287&h=416&fit=crop&crop=center",
      width: "w-[303px]",
    },
    {
      title: "Vendas Online",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=291&h=416&fit=crop&crop=center",
      width: "w-[307px]",
    },
    {
      title: "Gestão de Negócios",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=287&h=416&fit=crop&crop=center",
      width: "w-[303px]",
    },
  ];

  return (
    <section className="container py-20 border-t border-b border-gray-200">
      <div className="flex items-end justify-between">
        <div className="space-y-12">
          <div className="space-y-6">
            <div className="section-title">
              <span className="text-sm font-medium text-[#F81539] uppercase tracking-wide">
                categories
              </span>
            </div>
            <h2 className="text-5xl lg:text-6xl font-medium text-[#3E3232] leading-tight">
              Explore o E-commerce
            </h2>
          </div>
          <button className="border border-[#3E3232] text-[#3E3232] hover:bg-[#3E3232] hover:text-white px-6 py-2 rounded-md transition-colors duration-200">
            Ver Mais
          </button>
        </div>

        {/* Categories Grid */}
        <div className="flex gap-4">
          {categories.map((category, index) => (
            <div key={index} className={`${category.width} bg-white rounded-2xl p-4 shadow-lg`}>
              <img
                src={category.image}
                alt={category.title}
                className="w-full h-[416px] rounded-xl object-cover"
              />
              <div className="flex items-center justify-between px-2 pt-4">
                <h3 className="text-2xl font-normal text-[#3E3232] flex-1">{category.title}</h3>
                <div className="w-5 h-2 bg-[#F81539] rounded-full"></div>
              </div>
            </div>
          ))}
        </div>

        {/* Navigation arrows */}
        <div className="absolute left-0 top-20 flex gap-2">
          <button className="p-2.5 rotate-180 hover:opacity-70 transition-opacity">
            <svg width="20" height="7" viewBox="0 0 20 7" fill="none">
              <path d="M0 3.5L5 0V3H20V4H5V7L0 3.5Z" fill="rgba(62, 50, 50, 0.60)"/>
            </svg>
          </button>
          <button className="p-2.5 hover:opacity-70 transition-opacity">
            <svg width="20" height="7" viewBox="0 0 20 7" fill="none">
              <path d="M20 3.5L15 7V4H0V3H15V0L20 3.5Z" fill="#3E3232"/>
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}

export default Categories;
