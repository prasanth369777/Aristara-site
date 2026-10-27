
import React, { useMemo, useRef, useState } from "react";
import {
  ArrowDownRight,
  ArrowRight,
  ArrowUpRight,
  BookOpen,

  Clock3,
  House,
  Building2,
  Sofa,
  Wallet,
  Handshake,
  Landmark,
} from "lucide-react";
import { motion, useInView } from "framer-motion";

const categories = [
  "All Articles",
  "Home Construction",
  "Villa Design",
  "Apartment Construction",
  "Interior Design",
  "Home Planning & Budgeting",
  "Real Estate & Joint Ventures",
];

const blogs = [
  {
    number: "01",
    category: "Home Construction",
    title: "Building Your Dream Home: Where Should You Begin?",
    description:
      "Discover the essential steps involved in building a home, from understanding your plot and planning the layout to selecting materials, coordinating construction and preparing for handover.",
    image:
      "https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg?auto=compress&cs=tinysrgb&w=1200",
    tags: ["Construction Planning", "Materials", "Home Building"],
    readTime: "6 min read",
    icon: House,
    featured: true,
  },
  {
    number: "02",
    category: "Villa Design",
    title: "Modern Villa Design: Balancing Luxury and Everyday Living",
    description:
      "Explore villa design ideas that combine spacious layouts, natural light, outdoor connections, elegant materials and practical features for comfortable everyday living.",
    image:
      "https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg?auto=compress&cs=tinysrgb&w=1000",
    tags: ["Villa Architecture", "Modern Design", "Space Planning"],
    readTime: "5 min read",
    icon: Building2,
  },
  {
    number: "03",
    category: "Apartment Construction",
    title: "Apartment Construction: Understanding the Key Stages",
    description:
      "Learn how site preparation, structural work, building services, quality checks and finishing contribute to the development of a residential apartment project.",
    image:
      "https://images.pexels.com/photos/323705/pexels-photo-323705.jpeg?auto=compress&cs=tinysrgb&w=1000",
    tags: ["Residential Projects", "Construction", "Quality"],
    readTime: "7 min read",
    icon: Landmark,
  },
  {
    number: "04",
    category: "Interior Design",
    title: "Interior Design Ideas That Make a House Feel Like Home",
    description:
      "Discover how layout planning, colour palettes, lighting, furniture and storage can work together to create a beautiful, functional and personal living space.",
    image:
      "https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=1000",
    tags: ["Home Interiors", "Lighting", "Furniture"],
    readTime: "5 min read",
    icon: Sofa,
  },
  {
    number: "05",
    category: "Home Planning & Budgeting",
    title: "Home Construction Budget: Plan Before You Build",
    description:
      "Understand the costs to consider before starting a project, including design, materials, labour, electrical work, interiors, approvals and a contingency allowance.",
    image:
      "https://images.pexels.com/photos/584399/pexels-photo-584399.jpeg?auto=compress&cs=tinysrgb&w=1000",
    tags: ["Budget Planning", "Cost Estimation", "Home Design"],
    readTime: "6 min read",
    icon: Wallet,
  },
  {
    number: "06",
    category: "Real Estate & Joint Ventures",
    title: "Joint Ventures in Real Estate: A Guide for Landowners",
    description:
      "Learn the fundamentals of property development partnerships, including project feasibility, responsibilities, agreement terms, approvals and the importance of professional advice.",
    image:
      "https://images.pexels.com/photos/280222/pexels-photo-280222.jpeg?auto=compress&cs=tinysrgb&w=1000",
    tags: ["Real Estate", "Joint Venture", "Landowners"],
    readTime: "7 min read",
    icon: Handshake,
  },
];

function BlogCard({ blog, index }) {
  const Icon = blog.icon;
  const cardRef = useRef(null);
  const isInView = useInView(cardRef, {
    once: true,
    amount: 0.12,
  });

  return (
    <motion.article
      ref={cardRef}
      initial={{ opacity: 0, y: 24 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{
        duration: 0.5,
        delay: (index % 3) * 0.08,
        ease: "easeOut",
      }}
      className="group flex min-w-0 flex-col overflow-hidden border border-[#e7dece] bg-[#fbf8f1] transition-all duration-300 hover:-translate-y-1 hover:border-[#d6b458] hover:shadow-[0_16px_38px_rgba(65,49,19,0.08)]"
    >
      {/* ARTICLE IMAGE */}
      <a
        href="/journal"
        aria-label={`Read ${blog.title}`}
        className="relative block aspect-[16/10] overflow-hidden bg-[#eee6d8]"
      >
        <img
          src={blog.image}
          alt={blog.title}
          loading="lazy"
          decoding="async"
          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-[#201d18]/65 via-transparent to-transparent opacity-80" />

        <span className="absolute left-4 top-4 max-w-[calc(100%-2rem)] border border-white/50 bg-[#fbf8f1]/95 px-3 py-1.5 text-[9px] font-semibold uppercase tracking-[0.1em] text-[#6f5420] sm:left-5 sm:top-5">
          {blog.category}
        </span>

        <span className="absolute bottom-4 right-4 flex h-9 w-9 items-center justify-center bg-[#eab934] text-[#29251d] transition-all duration-300 group-hover:bg-white sm:bottom-5 sm:right-5 sm:h-10 sm:w-10">
          <ArrowUpRight size={17} strokeWidth={1.7} />
        </span>

        <span className="absolute bottom-5 left-4 text-[9px] font-medium uppercase tracking-[0.18em] text-white/90 sm:left-5">
          Aristara Journal
        </span>
      </a>

      {/* ARTICLE CONTENT */}
      <div className="flex flex-1 flex-col p-5 sm:p-6">
        <div className="mb-4 flex flex-wrap items-center gap-x-3 gap-y-2 text-[10px] font-medium text-[#817666] sm:text-[11px]">
          <span className="inline-flex items-center gap-1.5">
            <Icon size={14} className="text-[#a17b27]" />
            {blog.category}
          </span>

          <span className="h-1 w-1 rounded-full bg-[#c9bda7]" />

          <span className="inline-flex items-center gap-1.5">
            <Clock3 size={13} className="text-[#a17b27]" />
            {blog.readTime}
          </span>
        </div>

        <h3 className="font-['Poppins',sans-serif] text-base font-semibold leading-snug tracking-[-0.025em] text-[#29261f] transition-colors duration-300 group-hover:text-[#9c792e] sm:text-lg">
          <a href="/journal" className="outline-none focus-visible:underline">
            {blog.title}
          </a>
        </h3>

        <p className="mt-3 line-clamp-3 text-[11px] leading-6 text-[#746c60] sm:text-xs sm:leading-7">
          {blog.description}
        </p>

        <div className="mt-auto pt-5">
          <div className="mb-5 flex flex-wrap gap-2">
            {blog.tags.slice(0, 2).map((tag) => (
              <span
                key={tag}
                className="border border-[#e8dfd0] bg-[#f5f0e6] px-2.5 py-1.5 text-[9px] font-medium text-[#786b55] sm:text-[10px]"
              >
                {tag}
              </span>
            ))}
          </div>

          <div className="flex items-center justify-between border-t border-[#e8dfd0] pt-4">
            <a
              href="/journal"
              className="inline-flex items-center gap-2 text-[11px] font-semibold text-[#4c4232] transition-colors hover:text-[#a17b27]"
            >
              Read Article
              <ArrowRight
                size={15}
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </a>

            <span className="text-xs font-semibold tracking-wider text-[#c9bda7]">
              {blog.number}
            </span>
          </div>
        </div>
      </div>
    </motion.article>
  );
}

export default function BlogSectionClassic() {
  const [activeCategory, setActiveCategory] = useState("All Articles");
  const sectionRef = useRef(null);

  const isInView = useInView(sectionRef, {
    once: true,
    amount: 0.05,
  });

  const filteredBlogs = useMemo(() => {
    if (activeCategory === "All Articles") {
      return blogs;
    }

    return blogs.filter(
      (blog) => blog.category === activeCategory
    );
  }, [activeCategory]);

  const featuredBlog = filteredBlogs[0];
  const remainingBlogs = filteredBlogs.slice(1);

  return (
    <section
      id="blog"
      ref={sectionRef}
      className="relative isolate w-full overflow-hidden bg-[#fbf8f1] py-14 font-['Poppins',sans-serif] text-[#29261f] sm:py-16 md:py-20 lg:py-24"
    >
      {/* DECORATIVE BACKGROUND */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-32 top-0 -z-10 h-72 w-72 rounded-full bg-[#e9d8ac]/25 blur-[100px] sm:h-96 sm:w-96"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-24 -left-24 -z-10 h-72 w-72 rounded-full bg-[#e5d9c2]/40 blur-[100px]"
      />

      <div className="mx-auto w-full max-w-[1500px] px-5 sm:px-8 lg:px-12 xl:px-16">
        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.55, ease: "easeOut" }}
          className="mb-8 flex flex-col gap-5 sm:mb-10 md:gap-7 lg:mb-12 lg:flex-row lg:items-end lg:justify-between"
        >
          <div className="min-w-0 lg:max-w-3xl">
            <div className="mb-4 inline-flex items-center gap-2.5 border border-[#e5d8bc] bg-[#f5efdf] px-3.5 py-2 sm:mb-5 sm:px-4">
              <BookOpen
                size={15}
                strokeWidth={1.7}
                className="text-[#9c792e]"
              />

              <span className="text-[9px] font-semibold uppercase tracking-[0.17em] text-[#806225] sm:text-[10px] sm:tracking-[0.2em]">
                Aristara Journal
              </span>
            </div>

            <h2 className="max-w-3xl text-3xl font-semibold leading-[1.15] tracking-[-0.05em] text-[#25231f] sm:text-4xl md:text-5xl lg:text-[3.6rem]">
              Ideas for Better
              <span className="block text-[#b58a29]">
                Spaces & Smarter Decisions.
              </span>
            </h2>
          </div>

          <div className="min-w-0 lg:max-w-md lg:pb-1">
            <p className="text-xs leading-7 text-[#6e675b] sm:text-sm sm:leading-8">
              Explore practical guidance on home construction, villa
              design, apartments, interiors, budgeting and real estate
              partnerships to help you plan your next project with
              greater confidence.
            </p>

            <div className="mt-5 flex items-center gap-3">
              <span className="h-px w-9 bg-[#c99a29]" />
              <span className="text-[9px] font-medium uppercase tracking-[0.16em] text-[#8a754c]">
                Plan · Design · Build
              </span>
            </div>
          </div>
        </motion.div>

        {/* CATEGORY FILTERS */}
        <div className="mb-8 border-y border-[#e7dece] py-4 sm:mb-10 sm:py-5">
          <div
            className="flex gap-2 overflow-x-auto pb-1"
            role="group"
            aria-label="Filter blog articles by category"
          >
            {categories.map((category) => {
              const isActive = activeCategory === category;

              return (
                <button
                  key={category}
                  type="button"
                  onClick={() => setActiveCategory(category)}
                  aria-pressed={isActive}
                  className={`shrink-0 border px-4 py-2.5 text-[10px] font-medium transition-all duration-300 sm:px-5 sm:text-[11px] ${
                    isActive
                      ? "border-[#d6ad48] bg-[#eab934] text-[#29251d]"
                      : "border-[#e5dccb] bg-[#fbf8f1] text-[#6e675b] hover:border-[#d6b458] hover:bg-white"
                  }`}
                >
                  {category}
                </button>
              );
            })}
          </div>
        </div>

        {/* FEATURED ARTICLE */}
        {featuredBlog && (
          <motion.article
            key={`featured-${featuredBlog.number}`}
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45 }}
            className="mb-10 grid min-w-0 overflow-hidden border border-[#e5dccb] bg-[#f5f0e6] sm:mb-12 lg:mb-14 lg:grid-cols-[1.05fr_0.95fr]"
          >
            {/* FEATURED IMAGE */}
            <a
              href="/journal"
              aria-label={`Read ${featuredBlog.title}`}
              className="group/featured relative block min-h-[240px] overflow-hidden bg-[#e8dfd0] sm:min-h-[340px] lg:min-h-[440px]"
            >
              <img
                src={featuredBlog.image}
                alt={featuredBlog.title}
                fetchPriority="high"
                decoding="async"
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover/featured:scale-105"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-[#201d18]/65 via-transparent to-transparent" />

              <span className="absolute left-5 top-5 inline-flex items-center gap-2 border border-white/50 bg-[#fbf8f1]/95 px-3.5 py-2 text-[9px] font-semibold uppercase tracking-[0.12em] text-[#6f5420] sm:left-7 sm:top-7 sm:text-[10px]">
                <span className="h-1.5 w-1.5 rounded-full bg-[#c99a29]" />
                Featured Article
              </span>

              <div className="absolute bottom-5 left-5 right-5 text-white sm:bottom-7 sm:left-7 sm:right-7">
                <p className="text-[9px] font-semibold uppercase tracking-[0.16em] text-white/80 sm:text-[10px]">
                  {featuredBlog.category}
                </p>

                <h3 className="mt-2 max-w-xl text-xl font-semibold leading-snug tracking-[-0.025em] sm:text-2xl lg:text-3xl">
                  {featuredBlog.title}
                </h3>
              </div>
            </a>

            {/* FEATURED CONTENT */}
            <div className="flex min-w-0 flex-col justify-center p-5 sm:p-8 md:p-10 lg:p-8 xl:p-12">
              <div className="mb-5 flex flex-wrap items-center gap-x-3 gap-y-2 text-[10px] font-medium text-[#817666] sm:text-[11px]">
                <span className="uppercase tracking-[0.12em] text-[#9c792e]">
                  {featuredBlog.category}
                </span>

                <span className="h-1 w-1 rounded-full bg-[#c9bda7]" />

                <span className="inline-flex items-center gap-1.5">
                  <Clock3 size={14} />
                  {featuredBlog.readTime}
                </span>
              </div>

              <p className="mb-3 text-[9px] font-semibold uppercase tracking-[0.17em] text-[#a17b27]">
                Editor's Selection
              </p>

              <h3 className="text-xl font-semibold leading-snug tracking-[-0.035em] text-[#29261f] sm:text-2xl lg:text-3xl">
                {featuredBlog.title}
              </h3>

              <p className="mt-4 text-[11px] leading-7 text-[#746c60] sm:text-xs sm:leading-7">
                {featuredBlog.description}
              </p>

              <div className="mt-5 flex flex-wrap gap-2">
                {featuredBlog.tags.map((tag) => (
                  <span
                    key={tag}
                    className="border border-[#e5dccb] bg-[#fbf8f1] px-3 py-1.5 text-[9px] font-medium text-[#786b55] sm:text-[10px]"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <div className="mt-7 border-t border-[#e3d9c7] pt-5 sm:mt-8">
                <a
                  href="/journal"
                  className="group/read inline-flex min-h-11 items-center justify-center gap-3 bg-[#eab934] px-5 py-3 text-[10px] font-semibold text-[#29251d] transition-colors duration-300 hover:bg-[#d9aa2b] sm:px-6 sm:text-[11px]"
                >
                  Explore Article
                  <ArrowUpRight
                    size={16}
                    className="transition-transform duration-300 group-hover/read:translate-x-0.5 group-hover/read:-translate-y-0.5"
                  />
                </a>
              </div>
            </div>
          </motion.article>
        )}

        {/* ARTICLE GRID HEADING */}
        <div className="mb-6 flex flex-col gap-3 sm:mb-8 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="mb-2 text-[9px] font-semibold uppercase tracking-[0.18em] text-[#987329] sm:text-[10px]">
              Explore More
            </p>

            <h3 className="text-2xl font-semibold tracking-[-0.04em] text-[#25231f] sm:text-3xl">
              {activeCategory === "All Articles"
                ? "More Ideas for Your Project"
                : activeCategory}
            </h3>
          </div>

          <p className="max-w-md text-xs leading-6 text-[#746c60] sm:text-right">
            Useful insights for planning, designing, building and
            developing better spaces.
          </p>
        </div>

        {/* BLOG GRID */}
        {remainingBlogs.length > 0 ? (
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3 lg:gap-7">
            {remainingBlogs.map((blog, index) => (
              <BlogCard
                key={blog.number}
                blog={blog}
                index={index}
              />
            ))}
          </div>
        ) : (
          <div className="border border-[#e5dccb] bg-[#f5f0e6] px-5 py-8 text-center sm:py-10">
            <p className="text-sm font-medium text-[#514634]">
              You’re viewing the featured article in this category.
            </p>
            <p className="mt-2 text-xs leading-6 text-[#746c60]">
              Choose another category or select All Articles to explore
              more topics.
            </p>
          </div>
        )}

        {/* BOTTOM CTA */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.5 }}
          className="mt-10 flex flex-col gap-5 border border-[#e5dccb] bg-[#f3ecdd] p-5 sm:mt-14 sm:p-7 md:flex-row md:items-center md:justify-between md:gap-8 md:p-9 lg:mt-16"
        >
          <div className="flex min-w-0 items-start gap-4">
            <div className="flex h-11 w-11 shrink-0 items-center justify-center border border-[#e3d5b8] bg-[#fbf8f1] text-[#9c792e] sm:h-12 sm:w-12">
              <BookOpen size={22} strokeWidth={1.6} />
            </div>

            <div className="min-w-0">
              <h3 className="text-lg font-semibold leading-snug text-[#29261f] sm:text-xl md:text-2xl">
                Planning Your Next Project?
              </h3>

              <p className="mt-2 max-w-2xl text-xs leading-6 text-[#746c60] sm:text-sm sm:leading-7">
                Discuss your home construction, villa design, interior
                or real estate development requirements with our team.
              </p>
            </div>
          </div>

          <a
            href="/contact"
            className="inline-flex min-h-12 w-full shrink-0 items-center justify-center gap-3 bg-[#eab934] px-5 py-3.5 text-[10px] font-semibold text-[#29251d] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#d9aa2b] sm:w-auto sm:px-7 sm:text-[11px]"
          >
            Discuss Your Project
            <ArrowDownRight size={17} />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
