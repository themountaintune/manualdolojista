import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function PrivacidadePage() {
	return (
		<div>
			<Navbar />
			<main className="container py-8">
				<div className="max-w-4xl mx-auto">
					<h1 className="text-4xl text-white font-extrabold tracking-tight mb-8">Política de Privacidade</h1>
					
					<div className="prose prose-invert max-w-none">
						<p className="text-lg text-sub mb-6">
							Última atualização: 20 de janeiro de 2025
						</p>

						<h2>1. Informações que coletamos</h2>
						<p>
							Coletamos informações que você nos fornece diretamente, como quando você:
						</p>
						<ul>
							<li>Se inscreve em nossa newsletter</li>
							<li>Baixa nossos materiais gratuitos</li>
							<li>Entra em contato conosco</li>
							<li>Comenta em nossos artigos</li>
						</ul>

						<h2>2. Como usamos suas informações</h2>
						<p>
							Utilizamos suas informações para:
						</p>
						<ul>
							<li>Enviar newsletters e conteúdo relevante</li>
							<li>Melhorar nossos serviços e conteúdo</li>
							<li>Responder às suas solicitações</li>
							<li>Analisar o uso do site</li>
						</ul>

						<h2>3. Compartilhamento de informações</h2>
						<p>
							Não vendemos, alugamos ou compartilhamos suas informações pessoais com terceiros, 
							exceto quando necessário para fornecer nossos serviços ou quando exigido por lei.
						</p>

						<h2>4. Cookies e tecnologias similares</h2>
						<p>
							Utilizamos cookies para melhorar sua experiência em nosso site, analisar o tráfego 
							e personalizar conteúdo. Você pode desativar os cookies nas configurações do seu navegador.
						</p>

						<h2>5. Seus direitos</h2>
						<p>
							Você tem o direito de:
						</p>
						<ul>
							<li>Acessar suas informações pessoais</li>
							<li>Corrigir informações incorretas</li>
							<li>Solicitar a exclusão de seus dados</li>
							<li>Retirar seu consentimento a qualquer momento</li>
						</ul>

						<h2>6. Segurança</h2>
						<p>
							Implementamos medidas de segurança adequadas para proteger suas informações 
							pessoais contra acesso não autorizado, alteração, divulgação ou destruição.
						</p>

						<h2>7. Alterações nesta política</h2>
						<p>
							Podemos atualizar esta Política de Privacidade periodicamente. 
							Notificaremos sobre mudanças significativas através de nosso site ou por email.
						</p>

						<h2>8. Contato</h2>
						<p>
							Se você tiver dúvidas sobre esta Política de Privacidade, entre em contato conosco:
						</p>
						<ul>
							<li>Email: privacidade@manualdolojista.com</li>
							<li>Telefone: (11) 99999-9999</li>
						</ul>
					</div>
				</div>
			</main>
			<Footer />
		</div>
	);
}
