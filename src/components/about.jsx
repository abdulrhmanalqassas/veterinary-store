import {
  CloudArrowUpIcon,
  LockClosedIcon,
  ServerIcon,
} from "@heroicons/react/20/solid";
import cover2 from "../assets/cover1.jpg";
export default function About() {
  return (
    <>
      <div className=" relative isolate overflow-hidden bg-gradient-inverse px-6 py-24 sm:py-32 lg:overflow-visible lg:px-0">
        <div className="absolute inset-0 -z-10 overflow-hidden">
          <svg
            aria-hidden="true"
            className="absolute left-[max(50%,25rem)] top-0 h-[64rem] w-[128rem] -translate-x-1/2 stroke-gray-950 [mask-image:radial-gradient(64rem_64rem_at_top,white,transparent)]"
          >
            <defs>
              <pattern
                x="50%"
                y={-1}
                id="e813992c-7d03-4cc4-a2bd-151760b470a0"
                width={200}
                height={200}
                patternUnits="userSpaceOnUse"
              >
                <path d="M100 200V.5M.5 .5H200" fill="none" />
              </pattern>
            </defs>
            <svg x="50%" y={-1} className="overflow-visible fill-orange-400">
              <path
                d="M-100.5 0h201v201h-201Z M699.5 0h201v201h-201Z M499.5 400h201v201h-201Z M-300.5 600h201v201h-201Z"
                strokeWidth={0}
              />
            </svg>
            <rect
              fill="url(#e813992c-7d03-4cc4-a2bd-151760b470a0)"
              width="100%"
              height="100%"
              strokeWidth={0}
            />
          </svg>
        </div>
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-start lg:gap-y-10">
          <div className="    md:block -mt-14 md:-ml-12 md:-mt-12 md:p-16 lg:sticky lg:top-4 lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:overflow-hidden">
            <img
              alt=""
              src={cover2}
              className="w-full max-w-none rounded-xl bg-gray-900 shadow-xl ring-1 ring-gray-400/10 sm:w-[57rem]"
            />
          </div>
          <div className="lg:col-span-2 lg:col-start-1 lg:row-start-1 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
            <div className="lg:pr-4">
              <div className="lg:max-w-lg">
                <p className="text-base/7 font-semibold text-black">About us</p>
                <h1 className="mt-2 text-pretty text-4xl font-semibold tracking-tight text-black sm:text-5xl">
                  Who are we?
                </h1>
                <p className="mt-6 text-xl/8 text-black">
                  Globador is a fast-growing Egyptian company specializing in
                  veterinary products. The company sets ambitious goals to
                  become one of the leading companies in the animal health
                  industry. Globador aims to achieve this by introducing unique
                  and innovative products that contribute to the improvement of
                  animal health and production.
                </p>
              </div>
            </div>
          </div>

          <div className="lg:col-span-2 lg:col-start-1 lg:row-start-2 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
            <div className="lg:pr-4">
              <div className="max-w-xl text-base/7 text-black lg:max-w-lg">
                <p>
                  By offering distinctive and high-quality veterinary products,
                  Globador aims to make a significant impact on the growth and
                  efficiency of animal production. The company understands the
                  importance of providing solutions that meet the evolving needs
                  of the industry, and it strives to stay at the forefront of
                  innovation and development.
                </p>

                <h2 className="mt-16 text-2xl font-bold tracking-tight text-black">
                  Our team:
                </h2>
                <p className="mt-6">
                  At the core of Globador&apos;s success is its dedicated and
                  professional team. Comprised of individuals who possess a
                  shared vision and drive, the team is committed to realizing
                  the company&apos;s objectives. Their collective spirit and
                  passion for excellence propel them forward, fostering a
                  culture of determination, collaboration, and continuous
                  improvement.
                </p>
                <h2 className="mt-16 text-2xl font-bold tracking-tight text-black">
                  Our vision:
                </h2>
                <p className="mt-6">
                  Through its unwavering commitment to excellence, Globador
                  seeks to establish itself as a trusted partner for
                  veterinarians, livestock producers, and animal health
                  professionals. By delivering exceptional products and
                  services, the company aims to build long-term relationships
                  with its customers and create a positive impact on the overall
                  animal production sector.
                </p>
                <h2 className="mt-16 text-2xl font-bold tracking-tight text-black">
                  Our mission:
                </h2>
                <p className="mt-6">
                  With a combination of unique products, a dedicated team, and a
                  clear vision for success, Globador is well-positioned to
                  achieve its goal of becoming one of the top companies in the
                  veterinary products industry.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-start lg:gap-y-10">
          <div className=" md:block -mt-12 md:-ml-12 md:p-16 mt-4  lg:sticky lg:top-4 lg:col-start-1 lg:row-span-2 lg:row-start-1 lg:overflow-hidden">
            <img
              alt=""
              src={cover2}
              className="w-full max-w-none rounded-xl bg-gray-900 shadow-xl ring-1 ring-gray-400/10 sm:w-[57rem]"
            />
          </div>
          <div className="lg:col-span-2 lg:col-start-2 lg:row-start-1 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
            <div className="lg:pr-4">
              <div className="lg:max-w-lg">
                <p className="text-base/7 font-semibold text-black">About us</p>
                <h1 className="mt-2 text-pretty text-4xl font-semibold tracking-tight text-black sm:text-5xl">
                  Who are we?
                </h1>
                <p className="mt-6 text-xl/8 text-black">
                  Globador is a fast-growing Egyptian company specializing in
                  veterinary products. The company sets ambitious goals to
                  become one of the leading companies in the animal health
                  industry. Globador aims to achieve this by introducing unique
                  and innovative products that contribute to the improvement of
                  animal health and production.
                </p>
              </div>
            </div>
          </div>
          <div className="lg:col-span-2 lg:col-start-2 lg:row-start-2 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
            <div className="lg:pr-4">
              <div className="max-w-xl text-base/7 text-black lg:max-w-lg">
                <p>
                  By offering distinctive and high-quality veterinary products,
                  Globador aims to make a significant impact on the growth and
                  efficiency of animal production. The company understands the
                  importance of providing solutions that meet the evolving needs
                  of the industry, and it strives to stay at the forefront of
                  innovation and development.
                </p>
                <h2 className="mt-16 text-2xl font-bold tracking-tight text-black">
                  Our team:
                </h2>
                <p className="mt-6">
                  At the core of Globador&apos;s success is its dedicated and
                  professional team. Comprised of individuals who possess a
                  shared vision and drive, the team is committed to realizing
                  the company&apos;s objectives. Their collective spirit and
                  passion for excellence propel them forward, fostering a
                  culture of determination, collaboration, and continuous
                  improvement.
                </p>
                <h2 className="mt-16 text-2xl font-bold tracking-tight text-black">
                  Our vision:
                </h2>
                <p className="mt-6">
                  Through its unwavering commitment to excellence, Globador
                  seeks to establish itself as a trusted partner for
                  veterinarians, livestock producers, and animal health
                  professionals. By delivering exceptional products and
                  services, the company aims to build long-term relationships
                  with its customers and create a positive impact on the overall
                  animal production sector.
                </p>
                <h2 className="mt-16 text-2xl font-bold tracking-tight text-black">
                  Our mission:
                </h2>
                <p className="mt-6">
                  With a combination of unique products, a dedicated team, and a
                  clear vision for success, Globador is well-positioned to
                  achieve its goal of becoming one of the top companies in the
                  veterinary products industry.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
