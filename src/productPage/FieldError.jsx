export default function FieldError({ name, errors }) {
  const error = errors?.[name];

  if (!error) return null;

  return (
    <p className="mt-1 text-xs font-medium text-red-500">
      {error}
    </p>
  );
}