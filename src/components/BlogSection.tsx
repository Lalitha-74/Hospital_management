import React, { useState } from 'react';
import { BookOpen, Clock, User, ArrowRight, X, Heart, Share2, Tag } from 'lucide-react';
import { BlogPost, Language } from '../types';
import { BLOG_POSTS } from '../data/mockData';
import { t } from '../i18n/translations';

interface BlogSectionProps {
  language: Language;
}

export const BlogSection: React.FC<BlogSectionProps> = ({ language }) => {
  const tr = t(language);
  const [selectedPost, setSelectedPost] = useState<BlogPost | null>(null);

  return (
    <section className="py-16 sm:py-24 bg-[#080c14] border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/30 text-purple-400 text-xs font-bold uppercase tracking-wider mb-3">
            <BookOpen className="w-3.5 h-3.5" />
            <span>{language === 'te' ? 'వైద్యుల ఆరోగ్య సలహాలు' : 'Clinical Health Insights'}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            {tr.blogTitle}
          </h2>
          <p className="mt-4 text-slate-300 text-base sm:text-lg">
            {tr.blogSubtitle}
          </p>
        </div>

        {/* Blog Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {BLOG_POSTS.map((post) => (
            <div
              key={post.id}
              onClick={() => setSelectedPost(post)}
              className="rounded-3xl bg-[#0c1220] border border-slate-800 hover:border-purple-500/40 transition-all duration-300 shadow-xl overflow-hidden flex flex-col justify-between group cursor-pointer"
            >
              <div>
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={post.imageUrl}
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0c1220] via-transparent to-transparent" />
                  <span className="absolute top-3 left-3 bg-purple-600/90 backdrop-blur-md text-white text-[10px] font-extrabold uppercase px-3 py-1 rounded-full shadow">
                    {post.category}
                  </span>
                </div>

                <div className="p-6 space-y-3">
                  <div className="flex items-center gap-3 text-xs text-slate-400">
                    <span className="flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5 text-purple-400" />
                      {post.readTime}
                    </span>
                    <span>·</span>
                    <span>{post.date}</span>
                  </div>

                  <h3 className="text-lg font-bold text-white group-hover:text-purple-300 transition line-clamp-2">
                    {language === 'te' ? post.titleTe : post.title}
                  </h3>

                  <p className="text-xs text-slate-400 line-clamp-3 leading-relaxed">
                    {language === 'te' ? post.excerptTe : post.excerpt}
                  </p>
                </div>
              </div>

              <div className="p-6 pt-0">
                <div className="pt-4 border-t border-slate-800/80 flex items-center justify-between text-xs">
                  <span className="font-semibold text-slate-300 flex items-center gap-1.5">
                    <User className="w-3.5 h-3.5 text-rose-400" />
                    {post.author}
                  </span>
                  <span className="text-purple-400 font-bold flex items-center gap-1 group-hover:translate-x-1 transition">
                    <span>{language === 'te' ? 'పూర్తిగా చదవండి' : 'Read Article'}</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Read Post Modal */}
        {selectedPost && (
          <div className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4">
            <div className="max-w-2xl w-full bg-[#0c1220] border border-slate-700 rounded-3xl overflow-hidden shadow-2xl max-h-[90vh] flex flex-col">
              <div className="p-6 border-b border-slate-800 flex items-center justify-between">
                <div className="flex items-center gap-2 text-xs text-purple-400 font-bold uppercase">
                  <Tag className="w-3.5 h-3.5" />
                  <span>{selectedPost.category}</span>
                </div>
                <button
                  onClick={() => setSelectedPost(null)}
                  className="p-1.5 rounded-full bg-slate-800 text-slate-400 hover:text-white cursor-pointer"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div className="p-6 sm:p-8 overflow-y-auto space-y-5">
                <h3 className="text-2xl font-black text-white leading-snug">
                  {language === 'te' ? selectedPost.titleTe : selectedPost.title}
                </h3>

                <div className="flex items-center gap-4 text-xs text-slate-400 pb-3 border-b border-slate-800">
                  <span className="text-rose-400 font-bold">{selectedPost.author}</span>
                  <span>·</span>
                  <span>{selectedPost.date}</span>
                  <span>·</span>
                  <span>{selectedPost.readTime}</span>
                </div>

                <div className="space-y-4 text-sm sm:text-base text-slate-300 leading-relaxed">
                  {(language === 'te' ? selectedPost.contentTe : selectedPost.content).map((para, i) => (
                    <p key={i}>{para}</p>
                  ))}
                </div>

                <div className="pt-4 border-t border-slate-800 flex flex-wrap gap-2">
                  {selectedPost.tags.map((tg, idx) => (
                    <span key={idx} className="text-xs bg-slate-900 text-slate-400 px-3 py-1 rounded-full border border-slate-800">
                      #{tg}
                    </span>
                  ))}
                </div>
              </div>

              <div className="p-4 bg-slate-900 border-t border-slate-800 flex items-center justify-between">
                <span className="text-xs text-slate-400">Lifeline Hospital Health Education Initiative</span>
                <button
                  onClick={() => setSelectedPost(null)}
                  className="px-4 py-2 rounded-xl bg-purple-600 hover:bg-purple-500 text-white font-bold text-xs cursor-pointer"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        )}

      </div>
    </section>
  );
};
