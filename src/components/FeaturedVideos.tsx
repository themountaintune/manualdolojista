import React from "react";

export function FeaturedVideos(): React.JSX.Element {
  const videos = [
    {
      title: "Destaque do Leitor: Histórias de Transformação",
      category: "Conselhos",
      duration: "15:48",
      active: false,
    },
    {
      title: "Especialista Convidado: Experiências Interativas de E-commerce",
      category: "Especialistas",
      duration: "15:48",
      active: true,
    },
    {
      title: "Guia Passo a Passo: Como Criar uma Loja Online Perfeita",
      category: "Tutorial",
      duration: "15:48",
      active: false,
    },
  ];

  return (
    <section className="container py-20 border-t border-b border-gray-200">
      <div className="flex items-end justify-between mb-10">
        <div className="space-y-6">
          <div className="section-title">
            <span className="text-sm font-medium text-[#F81539] uppercase tracking-wide">CONSELHOS</span>
          </div>
          <h2 className="text-5xl lg:text-6xl font-medium text-[#3E3232] leading-tight">
            Vídeos em Destaque
          </h2>
        </div>

        {/* Navigation arrows */}
        <div className="flex gap-1">
          <button className="p-2.5 -rotate-90 hover:opacity-70 transition-opacity">
            <svg width="7" height="20" viewBox="0 0 7 20" fill="none">
              <path d="M3.5 0L7 4H4V20H3V4H0L3.5 0Z" fill="rgba(62, 50, 50, 0.60)"/>
            </svg>
          </button>
          <button className="p-2.5 rotate-90 hover:opacity-70 transition-opacity">
            <svg width="7" height="20" viewBox="0 0 7 20" fill="none">
              <path d="M3.5 20L0 16H3V0H4V16H7L3.5 20Z" fill="#3E3232"/>
            </svg>
          </button>
        </div>
      </div>

      <div className="flex gap-4">
        {/* Main Video */}
        <div className="relative w-[827px] h-[466px]">
          <img 
            src="https://images.unsplash.com/photo-1551650975-87deedd944c3?w=827&h=466&fit=crop&crop=center" 
            alt="Featured video"
            className="w-full h-full rounded-2xl object-cover shadow-lg"
          />
          {/* Play button overlay */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-16 h-16 bg-white/90 rounded-full flex items-center justify-center shadow-lg hover:bg-white transition-colors duration-200">
              <div className="w-0 h-0 border-l-[20px] border-l-[#F81539] border-t-[12px] border-t-transparent border-b-[12px] border-b-transparent ml-1"></div>
            </div>
          </div>
        </div>

        {/* Video List */}
        <div className="space-y-4">
          {videos.map((video, index) => (
            <div
              key={index}
              className={`w-[405px] p-4 rounded-2xl border-2 transition-all duration-200 ${
                video.active 
                  ? "border-[#F81539] bg-white shadow-lg" 
                  : "border-gray-200 bg-gray-50 hover:border-gray-300"
              }`}
            >
              <div className="space-y-4">
                <h3
                  className={`text-2xl font-normal leading-tight ${
                    video.active ? "text-[#3E3232]" : "text-[rgba(62,50,50,0.6)]"
                  }`}
                >
                  {video.title}
                </h3>
                <div
                  className={`pt-3 border-t ${
                    video.active ? "border-gray-200" : "border-gray-100"
                  } flex items-center justify-between`}
                >
                  <div className="flex items-center gap-4">
                    <span className={`text-sm ${
                      video.active ? "text-[#3E3232]" : "text-[rgba(62,50,50,0.6)]"
                    }`}>
                      {video.category}
                    </span>
                    <span className={`text-sm ${
                      video.active ? "text-[#3E3232]" : "text-[rgba(62,50,50,0.6)]"
                    }`}>
                      {video.duration}
                    </span>
                  </div>
                  <div className="w-6 h-6 relative overflow-hidden">
                    <div
                      className={`absolute w-3 h-4 left-2 top-1 ${
                        video.active ? "bg-[#F81539]" : "bg-[rgba(62,50,50,0.3)]"
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
