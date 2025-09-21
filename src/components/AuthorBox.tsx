export type AuthorBoxProps = {
	name: string;
	role: string;
	experience?: string;
	avatarUrl?: string;
	linkedinUrl?: string;
	className?: string;
};

export function AuthorBox({ name, role, experience = "+15 anos de experiência", avatarUrl, linkedinUrl, className }: AuthorBoxProps): JSX.Element {
	return (
		<div className={`flex items-center gap-4 rounded-lg border border-neutral-200/70 bg-white p-4 ${className ?? ""}`}>
			{avatarUrl ? (
				<img src={avatarUrl} alt="Autor" className="h-14 w-14 rounded-full object-cover" />
			) : (
				<div className="h-14 w-14 rounded-full bg-neutral-200" />
			)}
			<div className="min-w-0">
				<p className="truncate text-sm font-bold text-neutral-900">{name}</p>
				<p className="truncate text-sm text-neutral-600">{role}</p>
				<p className="truncate text-xs text-neutral-500">{experience}</p>
			</div>
			{linkedinUrl ? (
				<a href={linkedinUrl} target="_blank" rel="noreferrer" className="ml-auto inline-flex items-center rounded-full border border-neutral-200 px-3 py-1 text-xs text-teal hover:bg-teal/5">
					LinkedIn
				</a>
			) : null}
		</div>
	);
}

export default AuthorBox;
