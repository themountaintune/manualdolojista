import type { JSX } from "react";
import Link from "next/link";

export function Footer(): JSX.Element {
	return (
		<footer className="border-t border-line bg-bg">
			<div className="container py-4 flex items-center justify-between">
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
				
				{/* Social Icons */}
				<div className="flex items-center gap-4">
					<div className="w-6 h-6 relative overflow-hidden">
						<div className="absolute w-4 h-4 left-1 top-1 bg-ink"></div>
					</div>
					<div className="w-6 h-6 relative overflow-hidden">
						<div className="absolute w-5 h-5 left-0.5 top-0.5 bg-ink"></div>
					</div>
					<div className="w-6 h-6 relative overflow-hidden">
						<div className="absolute w-5 h-4 left-0.5 top-1 bg-ink"></div>
					</div>
				</div>
				
				{/* Links */}
				<div className="flex items-center gap-3.5">
					<Link href="/privacy" className="text-sm text-ink hover:text-accent">
						Privacy Policy
					</Link>
					<Link href="/cookies" className="text-sm text-ink hover:text-accent">
						Cookie Policy
					</Link>
				</div>
			</div>
		</footer>
	);
}

export default Footer;
