import type { JSX } from "react";

export function PostCard({
  img,
  tag,
  title,
  excerpt,
  meta,
}: {
  img: string;
  tag: string;
  title: string;
  excerpt: string;
  meta: string;
}): JSX.Element {
  return (
    <a
      className="block rounded-2xl border border-line bg-panel overflow-hidden shadow-card hover:shadow-hover transition"
      href="#"
    >
      <img src={img} alt="" className="w-full h-44 object-cover" />
      <div className="p-5">
        <span className="inline-flex text-xs px-2 py-0.5 rounded-full bg-white/10 text-ink border border-line">
          {tag}
        </span>
        <h3 className="mt-2 text-lg text-white font-semibold leading-snug">{title}</h3>
        <p className="mt-1 text-sm text-sub">{excerpt}</p>
        <div className="mt-3 text-xs text-sub">{meta}</div>
      </div>
    </a>
  );
}

export default PostCard;
