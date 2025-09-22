import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata = {
	title: "10 Must-Have Skincare Products for Radiant Skin",
	description: "Explore the essential skincare products that can transform your daily routine. From hydrating serums to powerful antioxidants, discover the secrets to achieving radiant and healthy skin.",
};

const relatedArticles = [
	{
		title: "Seasonal Makeup Trends: Fall Edition",
		excerpt: "Dive into the enchanting world of fall-inspired makeup trends. From warm hues to bold lip colors, discover the latest beauty trends that will elevate your autumn beauty routine.",
		image: "https://placehold.co/389x240",
		author: "Jane Doe",
		readTime: "5min read"
	},
	{
		title: "Reviewing the Latest Beauty Innovations in 2023",
		excerpt: "Stay on the cutting edge of beauty with a comprehensive review of the latest innovations in the industry. From skincare breakthroughs to high-tech beauty gadgets, explore what's new in 2023.",
		image: "https://placehold.co/389x240",
		author: "Jane Doe",
		readTime: "5min read"
	},
	{
		title: "Reader Spotlight: Transformation Stories",
		excerpt: "Witness the incredible transformations of our valued customers. Read real stories of beauty journeys, complete with before-and-after photos, and be inspired by the power of self-care.",
		image: "https://placehold.co/389x240",
		author: "Jane Doe",
		readTime: "5min read"
	}
];

export default function SkincareArticle() {
	return (
		<div>
			<Navbar />
			<main className="container py-20">
				<article className="max-w-4xl mx-auto">
					<img
						src="https://placehold.co/1200x600"
						alt="Skincare products"
						className="w-full aspect-video object-cover rounded-sm border border-line shadow-card mb-8"
					/>
					
					<div className="space-y-2 mb-8">
						<div className="text-sm font-semibold text-accent uppercase tracking-wide">
							FEATURED
						</div>
						<h1 className="text-6xl font-semibold text-ink leading-tight">
							10 Must-Have Skincare Products for Radiant Skin
						</h1>
						<div className="text-sub text-sm">
							<span>January 20, 2025</span> • <span>15 min read</span> • <span className="text-accent">SKINCARE</span>
						</div>
					</div>

					{/* Author Box */}
					<div className="flex items-center gap-4 p-4 rounded-md border border-line bg-panel mb-8">
						<img 
							src="https://images.pexels.com/photos/3184405/pexels-photo-3184405.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop" 
							className="w-16 h-16 rounded-full object-cover" 
							alt="Author"
						/>
						<div>
							<div className="text-ink font-semibold">Jane Doe</div>
							<div className="text-sm text-sub">Senior Beauty Editor — 10+ years of experience</div>
							<a className="text-xs text-accent underline" href="#">Instagram</a>
						</div>
					</div>

					<div className="prose prose-light max-w-none">
						<p>Your skincare routine is the foundation of your beauty journey. With so many products on the market, it can be overwhelming to know which ones are truly essential. We've curated a list of 10 must-have skincare products that will transform your daily routine and help you achieve that coveted radiant glow.</p>

						<h2>1. Gentle Cleanser</h2>
						<p>A good cleanser is the cornerstone of any skincare routine. Look for a gentle, pH-balanced formula that removes dirt and makeup without stripping your skin of its natural oils. Whether you prefer a cream, gel, or oil cleanser, the key is consistency and gentleness.</p>

						<h2>2. Vitamin C Serum</h2>
						<p>Vitamin C is a powerhouse antioxidant that brightens skin, reduces hyperpigmentation, and stimulates collagen production. Apply it in the morning before your moisturizer for maximum benefits. Look for serums with L-ascorbic acid for the most potent form.</p>

						<h2>3. Hyaluronic Acid Serum</h2>
						<p>This hydration hero can hold up to 1000 times its weight in water, making it essential for plump, dewy skin. Apply it to damp skin for best results, and follow with a moisturizer to lock in the hydration.</p>

						<h2>4. Retinol Night Treatment</h2>
						<p>Retinol is the gold standard for anti-aging, helping to reduce fine lines, improve skin texture, and even out skin tone. Start with a low concentration and gradually increase as your skin builds tolerance. Always use sunscreen during the day when using retinol.</p>

						<h2>5. Broad-Spectrum SPF</h2>
						<p>Sunscreen is non-negotiable, even on cloudy days. Choose a broad-spectrum SPF 30 or higher that you'll actually want to wear daily. Look for formulas that are lightweight and don't leave a white cast.</p>

						<h2>6. Moisturizer</h2>
						<p>Whether you have oily, dry, or combination skin, a good moisturizer is essential. It helps maintain your skin's barrier function and keeps it soft and supple. Choose one that's appropriate for your skin type and the season.</p>

						<h2>7. Exfoliating Treatment</h2>
						<p>Regular exfoliation removes dead skin cells and reveals brighter, smoother skin underneath. Choose between chemical exfoliants (like AHAs or BHAs) or physical exfoliants, but don't overdo it—2-3 times per week is usually sufficient.</p>

						<h2>8. Eye Cream</h2>
						<p>The delicate skin around your eyes needs special attention. An eye cream can help with dark circles, puffiness, and fine lines. Look for ingredients like caffeine, peptides, or retinol specifically formulated for the eye area.</p>

						<h2>9. Face Oil</h2>
						<p>Face oils can provide intense hydration and nourishment, especially for dry or mature skin. They can be used alone or mixed with your moisturizer. Popular options include rosehip, jojoba, and argan oils.</p>

						<h2>10. Weekly Treatment Mask</h2>
						<p>A weekly mask can address specific skin concerns and provide intensive treatment. Whether you need hydration, brightening, or pore-clearing, there's a mask for every skin type and concern.</p>

						<h2>Building Your Routine</h2>
						<p>Start with the basics—cleanser, moisturizer, and sunscreen—and gradually add other products. Remember, consistency is key, and it can take 4-6 weeks to see results from most skincare products.</p>

						<p>Remember to patch test new products and introduce them one at a time to avoid irritation. And most importantly, listen to your skin—what works for others might not work for you, and that's perfectly okay.</p>
					</div>
				</article>

				{/* Related Articles */}
				<section className="mt-20">
					<h2 className="text-4xl font-semibold text-ink mb-8">Related Articles</h2>
					<div className="grid gap-6 md:grid-cols-3">
						{relatedArticles.map((article, i) => (
							<article key={i} className="card p-2">
								<img 
									src={article.image} 
									alt={article.title}
									className="w-full h-60 rounded-sm border border-line object-cover"
								/>
								<div className="p-2 space-y-4">
									<h3 className="text-2xl font-normal text-ink leading-tight">
										{article.title}
									</h3>
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
				</section>
			</main>
			<Footer />
		</div>
	);
}
