import { useRef } from "react";
import {
  ArrowDownRight,
  ArrowRight,
  ArrowUpRight,
  BookOpen,
  CalendarDays,
  Clock3,
  MoveUpRight,
} from "lucide-react";
import { motion, useInView } from "framer-motion";

const blogs = [
  {
    category: "Interior Design",
    title: "Small Home, Smart Design: Make Every Square Foot Count",
    description:
      "A thoughtfully designed home doesn't need extra space to feel spacious. Explore practical storage, multifunctional furniture, lighting, and layout ideas that help smaller homes feel open, organised, and comfortable.",
    image:
      "https://images.pexels.com/photos/6801648/pexels-photo-6801648.jpeg?auto=compress&cs=tinysrgb&w=1200",
    tags: ["Space Planning", "Storage", "Home Design"],
    readTime: "5 min read",
    date: "Oct 12, 2026",
    number: "01",
    featured: true,
  },
  {
    category: "Construction",
    title: "Building a Home? What to Plan Before Construction Begins",
    description:
      "Understand the importance of budgeting, site assessment, material selection, project scheduling, and coordination before your construction work begins.",
    image:
      "https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=900",
    tags: ["Planning", "Budget", "Construction"],
    readTime: "6 min read",
    date: "Oct 08, 2026",
    number: "02",
  },
  {
    category: "Design Trends",
    title: "Modern Interior Design: Timeless Ideas for Today's Homes",
    description:
      "Discover how natural textures, warm neutral colours, layered lighting, and carefully chosen furniture can create interiors that look refined without feeling overwhelming.",
    image:
      "https://images.pexels.com/photos/6476587/pexels-photo-6476587.jpeg?auto=compress&cs=tinysrgb&w=900",
    tags: ["Modern Homes", "Colours", "Lighting"],
    readTime: "5 min read",
    date: "Oct 04, 2026",
    number: "03",
  },
  {
    category: "Kitchen Design",
    title: "Modular or Traditional Kitchen? Choose What Works for You",
    description:
      "Compare layouts, storage, maintenance, finishes, and customisation to find a kitchen solution that suits your cooking habits and everyday routine.",
    image:
      "https://images.pexels.com/photos/3797992/pexels-photo-3797992.jpeg?auto=compress&cs=tinysrgb&w=900",
    tags: ["Kitchen", "Storage", "Materials"],
    readTime: "7 min read",
    date: "Sep 28, 2026",
    number: "04",
  },
  {
    category: "Painting Guide",
    title: "How to Choose the Right Paint Colours for Every Room",
    description:
      "From living rooms to bedrooms, learn how natural light, room size, existing furniture, and paint finishes influence the final look of your interiors.",
    image:
      "https://images.pexels.com/photos/6474471/pexels-photo-6474471.jpeg?auto=compress&cs=tinysrgb&w=900",
    tags: ["Wall Colours", "Paint Finish", "Interiors"],
    readTime: "4 min read",
    date: "Sep 22, 2026",
    number: "05",
  },
  {
    category: "Commercial Spaces",
    title: "Designing a Workspace That Supports Productivity",
    description:
      "A practical office design considers more than furniture. Explore layout planning, lighting, storage, circulation, and comfort when designing a professional workspace.",
    image:
      "https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=900",
    tags: ["Office Design", "Planning", "Function"],
    readTime: "5 min read",
    date: "Sep 16, 2026",
    number: "06",
  },
];

const BlogCard = ({ blog, index }) => {
  const cardRef = useRef(null);
  const isInView = useInView(cardRef, {
    once: true,
    amount: 0.12,
  });

  return (
    <motion.article
      ref={cardRef}
      initial={{ opacity: 0, y: 28 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{
        duration: 0.55,
        delay: (index % 3) * 0.1,
        ease: "easeOut",
      }}
      className="group flex min-w-0 flex-col overflow-hidden rounded-2xl border border-slate-200/80 bg-white transition-all duration-300 hover:-translate-y-1 hover:border-indigo-200 hover:shadow-[0_18px_45px_rgba(15,23,42,0.09)] sm:rounded-3xl"
    >
      {/* Article image */}
      <a
        href="/journal"
        aria-label={`Read ${blog.title}`}
        className="relative block aspect-[16/10] overflow-hidden bg-slate-100"
      >
        <img
          src={blog.image}
          alt={blog.title}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/45 via-transparent to-transparent opacity-70 transition-opacity duration-300 group-hover:opacity-100" />

        <span className="absolute left-4 top-4 max-w-[calc(100%-2rem)] rounded-full border border-white/60 bg-white/95 px-3 py-1.5 font-['DM_Sans',sans-serif] text-[10px] font-bold uppercase tracking-[0.12em] text-slate-800 shadow-sm backdrop-blur sm:left-5 sm:top-5 sm:text-[11px]">
          {blog.category}
        </span>

        <span className="absolute bottom-4 right-4 flex h-9 w-9 items-center justify-center rounded-full bg-white text-slate-900 transition-all duration-300 group-hover:bg-indigo-600 group-hover:text-white sm:bottom-5 sm:right-5 sm:h-10 sm:w-10">
          <ArrowUpRight className="h-4 w-4" />
        </span>
      </a>

      {/* Article content */}
      <div className="flex flex-1 flex-col p-5 sm:p-6 lg:p-7">
        <div className="mb-4 flex flex-wrap items-center gap-x-3 gap-y-2 font-['DM_Sans',sans-serif] text-xs font-medium text-slate-500 sm:mb-5">
          <span className="inline-flex items-center gap-1.5">
            <CalendarDays className="h-3.5 w-3.5 text-indigo-600" />
            {blog.date}
          </span>

          <span className="h-1 w-1 rounded-full bg-slate-300" />

          <span className="inline-flex items-center gap-1.5">
            <Clock3 className="h-3.5 w-3.5 text-indigo-600" />
            {blog.readTime}
          </span>
        </div>

        <h3 className="font-['Poppins',sans-serif] text-lg font-semibold leading-snug tracking-tight text-slate-900 transition-colors duration-300 group-hover:text-indigo-700 sm:text-xl">
          <a href="/journal" className="outline-none focus-visible:underline">
            {blog.title}
          </a>
        </h3>

        <p className="mt-3 line-clamp-3 font-['DM_Sans',sans-serif] text-sm leading-6 text-slate-600 sm:mt-4 sm:text-[15px] sm:leading-7">
          {blog.description}
        </p>

        <div className="mt-auto pt-5 sm:pt-6">
          <div className="mb-5 flex flex-wrap gap-2">
            {blog.tags.slice(0, 2).map((tag) => (
              <span
                key={tag}
                className="rounded-md bg-slate-50 px-2.5 py-1.5 font-['DM_Sans',sans-serif] text-[10px] font-semibold text-slate-600 sm:text-xs"
              >
                {tag}
              </span>
            ))}
          </div>

          <div className="flex items-center justify-between border-t border-slate-100 pt-4">
            <a
              href="/journal"
              className="inline-flex items-center gap-2 font-['DM_Sans',sans-serif] text-sm font-bold text-slate-900 transition-colors hover:text-indigo-600"
            >
              Read article
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </a>

            <span className="font-['Poppins',sans-serif] text-xs font-semibold tracking-wider text-slate-300">
              {blog.number}
            </span>
          </div>
        </div>
      </div>
    </motion.article>
  );
};

export default function BlogSectionClassic() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, {
    once: true,
    amount: 0.08,
  });

  const featuredBlog = blogs[0];
  const remainingBlogs = blogs.slice(1);

  return (
    <section
      id="blog"
      ref={sectionRef}
      className="relative isolate w-full overflow-hidden bg-[#f8f9fc] py-14 sm:py-16 md:py-20 lg:py-24"
    >
      {/* Background details */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-28 top-0 -z-10 h-64 w-64 rounded-full bg-indigo-100/60 blur-[100px] sm:h-80 sm:w-80 lg:h-[420px] lg:w-[420px]"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-20 -left-20 -z-10 h-64 w-64 rounded-full bg-slate-200/60 blur-[100px] sm:h-80 sm:w-80"
      />

      <div className="mx-auto w-full max-w-[1440px] px-4 sm:px-6 md:px-8 lg:px-10 xl:px-14 2xl:px-16">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 22 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="mb-9 flex flex-col gap-6 sm:mb-12 md:gap-8 lg:mb-14 lg:flex-row lg:items-end lg:justify-between"
        >
          <div className="min-w-0 lg:max-w-3xl">
            <div className="mb-4 inline-flex items-center gap-2.5 rounded-full border border-indigo-100 bg-white px-3.5 py-2 shadow-sm sm:mb-5 sm:px-4">
              <BookOpen
                className="h-4 w-4 text-indigo-600"
                strokeWidth={1.8}
              />

              <span className="font-['DM_Sans',sans-serif] text-[10px] font-bold uppercase tracking-[0.17em] text-indigo-700 sm:text-xs sm:tracking-[0.2em]">
                Ideas, Guides & Inspiration
              </span>
            </div>

            <h2 className="font-['Poppins',sans-serif] text-3xl font-semibold leading-[1.2] tracking-tight text-slate-950 sm:text-4xl md:text-5xl lg:text-[3.5rem] xl:text-6xl">
              Better Spaces
              <span className="block text-indigo-600">
                Start with Better Ideas.
              </span>
            </h2>
          </div>

          <div className="min-w-0 lg:max-w-md lg:pb-1">
            <p className="font-['DM_Sans',sans-serif] text-sm leading-7 text-slate-600 sm:text-base sm:leading-8">
              Explore useful advice on interior design, construction,
              painting, and material selection to make more confident
              decisions for your home or workspace.
            </p>

            <div className="mt-5 flex flex-wrap gap-2 sm:mt-6">
              {["Interior Design", "Construction", "Painting"].map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-slate-200 bg-white px-3 py-1.5 font-['DM_Sans',sans-serif] text-xs font-semibold text-slate-600 sm:px-3.5 sm:py-2 sm:text-sm"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Featured article */}
        <motion.article
          initial={{ opacity: 0, y: 26 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.12 }}
          transition={{ duration: 0.65, ease: "easeOut" }}
          className="mb-12 grid min-w-0 overflow-hidden rounded-3xl border border-slate-200/80 bg-white shadow-sm sm:mb-14 sm:rounded-[2rem] lg:mb-16 lg:grid-cols-[1.05fr_0.95fr] xl:rounded-[2.5rem]"
        >
          {/* Featured image */}
          <a
            href="/journal"
            aria-label={`Read featured article: ${featuredBlog.title}`}
            className="group/featured relative block min-h-[240px] overflow-hidden bg-slate-200 sm:min-h-[320px] lg:min-h-[450px]"
          >
            <img
              src={featuredBlog.image}
              alt={featuredBlog.title}
              fetchPriority="high"
              className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover/featured:scale-105"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-slate-950/10 to-slate-950/10 lg:bg-gradient-to-r lg:from-slate-950/20 lg:via-transparent lg:to-transparent" />

            <span className="absolute left-5 top-5 inline-flex items-center gap-2 rounded-full bg-white px-3.5 py-2 font-['DM_Sans',sans-serif] text-[10px] font-bold uppercase tracking-[0.14em] text-slate-900 shadow-sm sm:left-7 sm:top-7 sm:px-4 sm:text-xs">
              <span className="h-1.5 w-1.5 rounded-full bg-indigo-600" />
              Editor's Pick
            </span>

            <div className="absolute bottom-5 left-5 right-5 text-white sm:bottom-7 sm:left-7 sm:right-7 lg:hidden">
              <p className="font-['DM_Sans',sans-serif] text-xs font-semibold uppercase tracking-[0.16em] text-white/80">
                {featuredBlog.category}
              </p>

              <p className="mt-2 font-['Poppins',sans-serif] text-xl font-semibold leading-snug sm:text-2xl">
                {featuredBlog.title}
              </p>
            </div>
          </a>

          {/* Featured copy */}
          <div className="flex min-w-0 flex-col justify-center p-5 sm:p-8 md:p-10 lg:p-8 xl:p-12 2xl:p-14">
            <div className="mb-5 hidden flex-wrap items-center gap-x-3 gap-y-2 font-['DM_Sans',sans-serif] text-xs font-semibold text-slate-500 lg:flex">
              <span className="uppercase tracking-[0.13em] text-indigo-600">
                {featuredBlog.category}
              </span>

              <span className="h-1 w-1 rounded-full bg-slate-300" />

              <span className="inline-flex items-center gap-1.5">
                <CalendarDays className="h-3.5 w-3.5" />
                {featuredBlog.date}
              </span>

              <span className="h-1 w-1 rounded-full bg-slate-300" />

              <span className="inline-flex items-center gap-1.5">
                <Clock3 className="h-3.5 w-3.5" />
                {featuredBlog.readTime}
              </span>
            </div>

            <div className="mb-3 flex flex-wrap items-center gap-2 lg:hidden">
              <span className="font-['DM_Sans',sans-serif] text-xs font-bold uppercase tracking-[0.13em] text-indigo-600">
                {featuredBlog.category}
              </span>

              <span className="h-1 w-1 rounded-full bg-slate-300" />

              <span className="font-['DM_Sans',sans-serif] text-xs text-slate-500">
                {featuredBlog.readTime}
              </span>
            </div>

            <p className="mb-3 hidden font-['DM_Sans',sans-serif] text-xs font-bold uppercase tracking-[0.16em] text-indigo-600 lg:block">
              Featured Article
            </p>

            <h3 className="hidden font-['Poppins',sans-serif] text-2xl font-semibold leading-snug tracking-tight text-slate-950 sm:text-3xl lg:block xl:text-[2.2rem]">
              {featuredBlog.title}
            </h3>

            <p className="mt-3 font-['DM_Sans',sans-serif] text-sm leading-7 text-slate-600 sm:mt-4 sm:text-base sm:leading-8">
              {featuredBlog.description}
            </p>

            <div className="mt-5 flex flex-wrap gap-2 sm:mt-6">
              {featuredBlog.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-lg border border-slate-200 bg-slate-50 px-3 py-1.5 font-['DM_Sans',sans-serif] text-xs font-medium text-slate-600"
                >
                  {tag}
                </span>
              ))}
            </div>

            <div className="mt-7 border-t border-slate-100 pt-5 sm:mt-8 sm:pt-6">
              <a
                href="/journal"
                className="group/read inline-flex min-h-11 w-full items-center justify-center gap-3 rounded-xl bg-slate-950 px-5 py-3 font-['DM_Sans',sans-serif] text-sm font-bold text-white transition-colors duration-300 hover:bg-indigo-600 focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 focus-visible:ring-offset-2 sm:w-auto sm:rounded-full sm:px-6"
              >
                Explore Featured Article
                <MoveUpRight className="h-4 w-4 transition-transform duration-300 group-hover/read:translate-x-0.5 group-hover/read:-translate-y-0.5" />
              </a>
            </div>
          </div>
        </motion.article>

        {/* Article list heading */}
        <div className="mb-6 flex flex-col gap-3 sm:mb-8 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="mb-2 font-['DM_Sans',sans-serif] text-[10px] font-bold uppercase tracking-[0.18em] text-indigo-600 sm:text-xs">
              Explore the Journal
            </p>

            <h3 className="font-['Poppins',sans-serif] text-2xl font-semibold tracking-tight text-slate-950 sm:text-3xl md:text-4xl">
              More Ideas for Your Space
            </h3>
          </div>

          <p className="max-w-md font-['DM_Sans',sans-serif] text-sm leading-6 text-slate-500 sm:text-right">
            Practical inspiration for planning, designing, building, and
            finishing better spaces.
          </p>
        </div>

        {/* Responsive article grid */}
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3 lg:gap-6 xl:gap-7">
          {remainingBlogs.map((blog, index) => (
            <BlogCard key={blog.number} blog={blog} index={index} />
          ))}
        </div>

        {/* Bottom call to action */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.55 }}
          className="mt-12 flex flex-col gap-5 rounded-2xl border border-slate-200 bg-white p-5 sm:mt-14 sm:rounded-3xl sm:p-7 md:flex-row md:items-center md:justify-between md:gap-8 md:p-9 lg:mt-16 lg:p-10"
        >
          <div className="flex min-w-0 items-start gap-4">
            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-indigo-50 text-indigo-600 sm:h-12 sm:w-12">
              <BookOpen className="h-5 w-5 sm:h-6 sm:w-6" />
            </div>

            <div className="min-w-0">
              <h3 className="font-['Poppins',sans-serif] text-lg font-semibold leading-snug text-slate-950 sm:text-xl md:text-2xl">
                Planning your next project?
              </h3>

              <p className="mt-2 max-w-2xl font-['DM_Sans',sans-serif] text-sm leading-6 text-slate-600 sm:text-base sm:leading-7">
                Get in touch with Cube4Spaces & Paint Studio to discuss your
                interior design, construction, or painting requirements.
              </p>
            </div>
          </div>

          <a
            href="/contact"
            className="inline-flex min-h-12 w-full shrink-0 items-center justify-center gap-2 rounded-xl bg-indigo-600 px-5 py-3.5 font-['DM_Sans',sans-serif] text-sm font-bold text-white transition-all duration-300 hover:bg-indigo-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 focus-visible:ring-offset-2 sm:w-auto sm:rounded-full sm:px-7"
          >
            Talk to Our Team
            <ArrowDownRight className="h-4 w-4" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}