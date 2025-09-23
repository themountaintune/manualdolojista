import React from "react";

export function Subscription(): React.JSX.Element {
  return (
    <section className="newsletter-section">
      <div className="container">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            {/* Left side - Newsletter form */}
            <div className="space-y-6">
              <div className="section-title">
                <h2 className="text-2xl font-medium text-[#3E3232] capitalize">
                  Newsletter
                </h2>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <div className="flex-1">
                  <input
                    type="email"
                    placeholder="Digite seu email .."
                    className="newsletter-input"
                  />
                </div>
                <button className="gradient-button px-6 py-3 text-sm font-medium">
                  Inscrever-se
                </button>
              </div>
            </div>

            {/* Right side - Content */}
            <div className="hidden lg:block">
              <div className="bg-white rounded-2xl p-8 shadow-lg">
                <h3 className="text-xl font-medium text-[#3E3232] mb-4">
                  Mantenha-se Atualizado
                </h3>
                <p className="text-sm text-[rgba(62,50,50,0.75)] mb-6">
                  Receba as últimas dicas de e-commerce, análises de produtos e ofertas exclusivas diretamente na sua caixa de entrada.
                </p>
                <div className="flex items-center gap-2 text-xs text-[rgba(62,50,50,0.75)]">
                  <span>✓</span>
                  <span>Sem spam, cancele a qualquer momento</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Subscription;
