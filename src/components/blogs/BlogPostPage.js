import React from "react";
import { Link, useParams } from "react-router-dom";
import { blogPosts, getBlogBySlug } from "../../api/blogs";
import Navbar from "../Navbar";
import Footer from "../Footer";
import "./BlogPages.css";

const BlogPostPage = () => {
  const { slug } = useParams();
  const post = getBlogBySlug(slug);

  if (!post) {
    return (
      <div className="blog-post-page">
        <Navbar />
        <main className="blog-post-page__main">
          <section className="blog-empty-state">
            <span className="blog-section__eyebrow">Blog Not Found</span>
            <h1 className="blog-empty-state__title">That story does not exist.</h1>
            <p className="blog-empty-state__text">
              The blog link may be outdated or the post may have been moved.
            </p>
            <Link className="blog-button blog-button--primary" to="/">
              Return to home
            </Link>
          </section>
        </main>
        <Footer />
      </div>
    );
  }

  const relatedPosts = blogPosts.filter((blog) => blog.slug !== slug).slice(0, 3);

  return (
    <div className="blog-post-page">
      <Navbar />

      <main className="blog-post-page__main">
        <section className="blog-post-hero">
          <div className="blog-post-hero__inner">
            <div className="blog-post-hero__copy">
              <Link className="blog-back-link" to="/">
                Back to home
              </Link>

              <div className="blog-post-hero__meta">
                <span className="blog-pill">{post.language}</span>
                <span className="blog-pill blog-pill--soft">{post.category}</span>
                <span className="blog-post-hero__reading">
                  {post.readingMinutes} min read
                </span>
              </div>

              <h1 className="blog-post-hero__title">{post.title}</h1>
              <p className="blog-post-hero__subtitle">{post.subtitle}</p>
              <p className="blog-post-hero__excerpt">{post.excerpt}</p>
            </div>

            <div className="blog-post-hero__image-frame">
              <img
                src={post.image}
                alt={post.title}
                className="blog-post-hero__image"
              />
            </div>
          </div>
        </section>

        <section className="blog-post-body">
          <div className="blog-post-body__inner">
            <article className="blog-article">
              {post.paragraphs.map((paragraph) => (
                <p key={paragraph.slice(0, 32)} className="blog-article__paragraph">
                  {paragraph}
                </p>
              ))}
            </article>

            <aside className="blog-sidebar">
              <div className="blog-sidebar__card">
                <span className="blog-section__eyebrow">Source Notes</span>
                <ul className="blog-sidebar__list">
                  {post.sourceNotes.map((note) => (
                    <li key={note}>{note}</li>
                  ))}
                </ul>
              </div>

              <div className="blog-sidebar__card">
                <span className="blog-section__eyebrow">More Blogs</span>
                <div className="blog-sidebar__related">
                  {relatedPosts.map((relatedPost) => (
                    <Link
                      key={relatedPost.slug}
                      className="blog-related-link"
                      to={`/blogs/${relatedPost.slug}`}
                    >
                      <span className="blog-related-link__language">
                        {relatedPost.language}
                      </span>
                      <span className="blog-related-link__title">
                        {relatedPost.title}
                      </span>
                    </Link>
                  ))}
                </div>
              </div>
            </aside>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default BlogPostPage;
