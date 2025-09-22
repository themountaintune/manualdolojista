import type { JSX } from "react";

export function Navbar(): JSX.Element {
	return (
		<header className="sticky top-0 z-30 bg-bg border-b border-line">
			<div className="container h-16 flex items-center justify-between">
				<nav className="flex items-center gap-5 text-sm text-ink">
					{["Featured", "How-to", "Expert Advice"].map((item) => (
						<a key={item} href="#" className="hover:text-accent focus:outline-none focus:ring-2 focus:ring-accent">
							{item}
						</a>
					))}
				</nav>
				
				{/* Logo */}
				<div className="flex items-center gap-2">
					<div className="relative w-10 h-12">
						<div className="absolute w-5 h-7 bg-ink top-0 left-0"></div>
						<div className="absolute w-5 h-7 bg-accent top-2 left-4"></div>
					</div>
					<div className="text-xs text-ink">
						<span className="text-ink">daily </span>
						<span className="text-accent">beauty</span>
					</div>
				</div>
				
				<div className="flex items-center gap-5">
					<a href="#contact" className="text-sm text-ink hover:text-accent focus:outline-none focus:ring-2 focus:ring-accent">
						Contact
					</a>
					<button className="btn btn-outline">
						Subscribe
					</button>
				</div>
			</div>
		</header>
	);
}

export default Navbar;
