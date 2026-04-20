// app/blog/[slug]/page.tsx
export function generateStaticParams() {
  return [{ slug: 'post-1' }, { slug: 'post-2' }]
}

export default function BlogPost({
  params,
}: {
  params: { slug: string }
}) {
  return <div>Post: {params.slug}</div>
}