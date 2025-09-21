export type AuthorBoxProps = {
	name: string;
	role: string;
	experience?: string;
	avatarUrl?: string;
	linkedinUrl?: string;
	className?: string;
};

export function AuthorBox({ name, role, experience = "15+ anos de experiência", avatarUrl, linkedinUrl, className }: AuthorBoxProps) {
	return (
		<div className={`mt-6 flex items-center gap-4 p-4 rounded-xl border bg-zinc-50 ${className ?? ""}`}>
			{avatarUrl ? (
				<img src={avatarUrl} alt="Autor" className="w-16 h-16 rounded-full object-cover" />
			) : (
				<div className="w-16 h-16 rounded-full bg-neutral-200" />
			)}
			<div className="min-w-0">
				<p className="truncate font-semibold text-ink">{name}</p>
				<p className="truncate text-sm text-muted">{role} — {experience}</p>
			</div>
			{linkedinUrl ? (
				<a href={linkedinUrl} target="_blank" rel="noreferrer" className="ml-auto text-xs text-brand-teal underline">
					LinkedIn
				</a>
			) : null}
		</div>
	);
}

export default AuthorBox;
