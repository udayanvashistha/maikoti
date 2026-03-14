import React from "react";
import { Link } from "react-router-dom";
import { blogPosts } from "../api/blogs";
import "./blogs/BlogPages.css";

const NewsSection = () => {
  return (
    <section className="blog-section">
      <div className="blog-section__inner">
        <div className="blog-section__header">
          <span className="blog-section__eyebrow">Village Blogs</span>
          <h2 className="blog-section__title">Stories that give Maikoti real depth</h2>
          <p className="blog-section__text">
            Read curated English and Hindi blog posts on Maikoti's identity,
            culture, village life, and regional significance.
          </p>
        </div>

        <div className="blog-grid">
          {blogPosts.map((post) => (
            <article key={post.slug} className="blog-card">
              <Link className="blog-card__media" to={`/blogs/${post.slug}`}>
                <img src={post.image} alt={post.title} className="blog-card__image" />
              </Link>

              <div className="blog-card__body">
                <div className="blog-card__meta">
                  <span className="blog-pill">{post.language}</span>
                  <span className="blog-meta-separator" aria-hidden="true">
                    /
                  </span>
                  <span className="blog-card__category">{post.category}</span>
                </div>

                <h3 className="blog-card__title">
                  <Link className="blog-card__title-link" to={`/blogs/${post.slug}`}>
                    {post.title}
                  </Link>
                </h3>

                <p className="blog-card__excerpt">{post.excerpt}</p>

                <div className="blog-card__footer">
                  <span className="blog-card__reading-time">
                    {post.readingMinutes} min read
                  </span>
                  <Link className="blog-card__link" to={`/blogs/${post.slug}`}>
                    Read full blog
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default NewsSection;
