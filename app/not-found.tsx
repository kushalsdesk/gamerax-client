import Link from "next/link";

const NotFound = () => {
  return (
    <>
      <main className="container mx-auto grid min-h-full place-items-center bg-white bg-opacity-40 shadow-2xl shadow-white/[0.05] backdrop-blur-[0.5rem]  px-6 py-24 sm:py-32 lg:px-8 mt-[100px] rounded-md ">
        <div className="text-center">
          <p className="text-base font-semibold text-indigo-600">404</p>
          <h1 className="mt-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-5xl">
            Page not found
          </h1>
          <p className="mt-6 text-lg leading-7 text-gray-900 ">
            Sorry, we couldn’t find the page you’re looking for.
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <Link
              href="/"
              className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Go back home
            </Link>
            <Link href="#" className="text-base font-semibold text-gray-900">
              Contact support <span aria-hidden="true">&rarr;</span>
            </Link>
          </div>
        </div>
      </main>
    </>
  );
};

export default NotFound;
