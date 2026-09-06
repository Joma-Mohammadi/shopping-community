import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <main className="flex min-h-[70vh] items-center justify-center bg-white px-5 py-20">
      <div className="text-center">
        <p className="text-7xl font-bold text-[#075039] sm:text-9xl">404</p>

        <h1 className="mt-6 text-2xl font-bold text-[#20242d] sm:text-4xl">
          Page Not Found
        </h1>

        <p className="mx-auto mt-4 max-w-md text-sm leading-6 text-gray-500 sm:text-base">
          Sorry, the page you are looking for doesn't exist or may have been moved.
        </p>

        <Link
          to="/"
          className="mt-8 inline-flex h-12 items-center justify-center rounded-full bg-[#16b52a] px-8 text-sm font-semibold text-white transition hover:bg-[#13a425]"
        >
          Back To Home
        </Link>
      </div>
    </main>
  );
}