import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Categories from "@/components/Categories";
import TrendingTopics from "@/components/TrendingTopics";
import FeaturedVideos from "@/components/FeaturedVideos";
import Subscription from "@/components/Subscription";
import Footer from "@/components/Footer";

export default function Home() {
	return (
		<div>
			<Navbar />
			<main>
				<Hero />
				<Categories />
				<TrendingTopics />
				<FeaturedVideos />
				<Subscription />
			</main>
			<Footer />
		</div>
	);
}
