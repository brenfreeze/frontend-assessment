import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="min-h-screen max-w-screen-lg mx-auto px-4 sm:px-6 lg:px-8 grid place-content-center">
      <h1 className="text-5xl font-black mb-4 md:hover:-rotate-3 md:hover:scale-125 transition-all duration-150 ease-in-out">
        Filta Frontend Assessment
      </h1>
      <ul className="mb-8">
        <li>
          Setup created with <code>vite</code>
        </li>
        <li>
          Used <code>tailwindcss</code> for minimal styling and more on utility
          classes
        </li>
        <li>
          Also used <code>react-router-dom</code> for routing
        </li>
      </ul>

      <h3>Navigate to</h3>
      <ul className="list-disc list-inside">
        <li>
          <Link
            className="hover:text-blue-500 transition-all duration-300 font-bold"
            to="/responsive-page-design"
          >
            Responsive Page Design
          </Link>
          <ul className="ml-8 text-sm list-inside list-disc">
            <li>Used BEM syntax for styling</li>
            <li>
              Used <code>@screen</code> tailwind function for quick media
              queries
            </li>
          </ul>
        </li>
        <li>
          <Link
            className="hover:text-blue-500 transition-all duration-300 font-bold"
            to="/accordions-and-tabs"
          >
            Accordions and Tabs
          </Link>
          <ul className="ml-8 text-sm list-inside list-disc">
            <li>Used BEM syntax for styling</li>
            <li>
              Used <code>@screen</code> tailwind function for quick media
              queries
            </li>
            <li>
              Used <code>useLoaderData</code> for fetching data
            </li>
            <li>Relied mostly on css in hiding/showing tab content</li>
          </ul>
        </li>
        <li>
          <Link
            to="/banana"
            className="hover:text-blue-500 transition-all duration-300 font-bold"
          >
            The <code>banana</code> problem
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default Home;
