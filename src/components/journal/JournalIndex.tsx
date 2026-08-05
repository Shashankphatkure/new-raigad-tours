"use client";

import { useMemo, useState } from "react";
import { Search, X } from "lucide-react";
import { ArticleCard } from "./ArticleCard";
import { ARTICLES } from "@/lib/journal/articles";
import { JOURNAL_CATEGORIES, type JournalCategory } from "@/lib/journal/types";

type Filter = JournalCategory | "All";

export function JournalIndex() {
  const [query, setQuery] = useState("");
  const [filter, setFilter] = useState<Filter>("All");

  const trimmedQuery = query.trim().toLowerCase();
  const isSearching = trimmedQuery.length > 0 || filter !== "All";

  const results = useMemo(() => {
    return ARTICLES.filter((article) => {
      const matchesCategory = filter === "All" || article.category === filter;
      if (!matchesCategory) return false;
      if (!trimmedQuery) return true;

      const haystack = [
        article.title,
        article.standfirst,
        article.category,
        article.author,
      ]
        .join(" ")
        .toLowerCase();

      return haystack.includes(trimmedQuery);
    });
  }, [filter, trimmedQuery]);

  return (
    <div>
      {/* ---------- Search & categories ---------- */}
      <div className="border-y border-line py-8">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
          <label className="relative flex w-full items-center lg:max-w-sm">
            <Search
              className="pointer-events-none absolute left-4 h-4 w-4 text-gray-500"
              strokeWidth={1.5}
              aria-hidden
            />
            <span className="sr-only">Search the journal</span>
            <input
              type="search"
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              placeholder="Search stories…"
              className="w-full rounded-button border border-line bg-white py-3.5 pl-11 pr-10 text-small text-brown placeholder:text-gray-500 focus:border-forest focus:outline-none focus:ring-1 focus:ring-forest"
            />
            {query && (
              <button
                type="button"
                onClick={() => setQuery("")}
                aria-label="Clear search"
                className="absolute right-3 cursor-pointer rounded-full p-1 text-gray-500 transition-colors hover:text-brown"
              >
                <X className="h-4 w-4" strokeWidth={1.5} />
              </button>
            )}
          </label>

          <div className="flex flex-wrap gap-2" role="group" aria-label="Filter by category">
            {(["All", ...JOURNAL_CATEGORIES] as Filter[]).map((category) => {
              const isActive = filter === category;
              return (
                <button
                  key={category}
                  type="button"
                  onClick={() => setFilter(category)}
                  aria-pressed={isActive}
                  className={`cursor-pointer rounded-button px-4 py-2 text-small transition-colors duration-200 ${
                    isActive
                      ? "bg-forest text-cream"
                      : "bg-beige text-brown hover:bg-line"
                  }`}
                >
                  {category}
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* ---------- Results ---------- */}
      {isSearching ? (
        <div className="pt-16">
          <p className="mb-10 text-small text-gray-500" role="status" aria-live="polite">
            {results.length} {results.length === 1 ? "story" : "stories"}
            {filter !== "All" && ` in ${filter}`}
            {trimmedQuery && ` matching “${query.trim()}”`}
          </p>

          {results.length > 0 ? (
            <div className="grid grid-cols-1 gap-x-10 gap-y-16 sm:grid-cols-2 lg:grid-cols-3">
              {results.map((article) => (
                <ArticleCard key={article.slug} article={article} />
              ))}
            </div>
          ) : (
            <div className="py-16 text-center">
              <p className="font-display text-h3 text-brown">Nothing found</p>
              <p className="mt-4 text-body text-gray-600">
                Try a different search, or browse all categories.
              </p>
              <button
                type="button"
                onClick={() => {
                  setQuery("");
                  setFilter("All");
                }}
                className="mt-8 cursor-pointer text-small font-semibold uppercase tracking-[0.12em] text-forest underline underline-offset-4 transition-colors hover:text-saffron"
              >
                Clear filters
              </button>
            </div>
          )}
        </div>
      ) : (
        <BrowseByCategory />
      )}
    </div>
  );
}

/** Default view: latest stories, then a rail per editorial section. */
function BrowseByCategory() {
  const latest = ARTICLES.slice(0, 6);

  return (
    <div>
      <section className="pt-16">
        <h2 className="font-display text-h2 leading-tight text-brown">
          Latest Articles
        </h2>
        <div className="mt-12 grid grid-cols-1 gap-x-10 gap-y-16 sm:grid-cols-2 lg:grid-cols-3">
          {latest.map((article) => (
            <ArticleCard key={article.slug} article={article} />
          ))}
        </div>
      </section>

      {JOURNAL_CATEGORIES.map((category) => {
        const inCategory = ARTICLES.filter(
          (article) => article.category === category,
        ).slice(0, 3);
        if (inCategory.length === 0) return null;

        return (
          <section key={category} className="border-t border-line pt-16 mt-24">
            <h2 className="font-display text-h2 leading-tight text-brown">
              {category}
            </h2>
            <div className="mt-12 grid grid-cols-1 gap-x-10 gap-y-16 sm:grid-cols-2 lg:grid-cols-3">
              {inCategory.map((article) => (
                <ArticleCard key={article.slug} article={article} variant="compact" />
              ))}
            </div>
          </section>
        );
      })}
    </div>
  );
}
