import type { JSX } from "react";

export function Skeleton({ className = "" }: { className?: string }): JSX.Element {
	return <div className={`animate-pulse rounded bg-zinc-50 ${className}`} />;
}

export function SkeletonText({ lines = 3, className = "" }: { lines?: number; className?: string }): JSX.Element {
	return (
		<div className={`animate-pulse space-y-2 ${className}`}>
			{Array.from({ length: lines }).map((_, i) => (
				<div key={i} className={`h-3 rounded bg-zinc-50 ${i === lines - 1 ? "w-3/5" : "w-full"}`} />
			))}
		</div>
	);
}

export default Skeleton;


