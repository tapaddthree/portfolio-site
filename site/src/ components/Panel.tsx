export default function Panel({
  title,
  body,
}: {
  title: string;
  body: string;
}) {
  return (
    <>
      <div>
        <span>{title}</span>
        <div>{body}</div>
      </div>
    </>
  );
}
