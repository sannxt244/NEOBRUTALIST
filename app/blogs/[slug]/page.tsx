export default async function BlogDetail({
  params,
}: {
  params: { slug: string };
}) {
  const { slug } = await params;

  return <div>BlogDetail {slug}</div>;
}
