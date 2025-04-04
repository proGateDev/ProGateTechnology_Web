import React from "react";

const articles = [
  {
    title: "How Tech is Empowering Small Businesses",
    excerpt: "Explore how digital tools are transforming local businesses into global players.",
    image: "news.png",
    date: "April 3, 2025",
    author: "Team ProGateTechnology",
  },
  {
    title: "Top 5 ERP Features Every SME Needs",
    excerpt: "Streamline operations, manage inventory, and boost productivity with the right ERP features.",
    image: "news.png",
    date: "March 28, 2025",
    author: "Tech Desk",
  },
  {
    title: "Logistics Optimization in 2025",
    excerpt: "From AI to real-time tracking, learn the trends shaping the future of delivery.",
    image: "news.png",
    date: "March 21, 2025",
    author: "Growth Lab",
  },
  {
    title: "Logistics Optimization in 2025",
    excerpt: "From AI to real-time tracking, learn the trends shaping the future of delivery.",
    image: "news.png",
    date: "March 21, 2025",
    author: "Growth Lab",
  }, {
    title: "Logistics Optimization in 2025",
    excerpt: "From AI to real-time tracking, learn the trends shaping the future of delivery.",
    image: "news.png",
    date: "March 21, 2025",
    author: "Growth Lab",
  },
];

const NewsSection = () => {
  return (
    <section className="bg-white py-25 mt-4">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-6">
          Latest News & Articles
        </h2>
        <p className="text-center text-gray-600 max-w-xl mx-auto mb-12">
          Stay updated with insights, trends, and innovations that shape your business growth.
        </p>

        <div className="grid md:grid-cols-3 gap-8">
          {articles.map((article, idx) => (
            <div
              key={idx}
              className="bg-gray-50 rounded-xl shadow-md hover:shadow-xl transition duration-300 overflow-hidden"
            >
              <img
                src={article.image}
                alt={article.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <span className="text-sm text-gray-400">
                  {article.date} · {article.author}
                </span>
                <h3 className="mt-2 text-lg font-semibold text-gray-900">
                  {article.title}
                </h3>
                <p className="mt-2 text-sm text-gray-600">{article.excerpt}</p>
                <a
                  href="#"
                  className="mt-4 inline-block text-orange-600 hover:text-orange-800 font-medium text-sm"
                >
                  Read more →
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default NewsSection;
