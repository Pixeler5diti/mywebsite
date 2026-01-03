import React, { useState, useEffect } from 'react';
import { Terminal, Brain, BookOpen, Code, Mail, Sun, Moon, X, Calendar, Clock, Tag, ArrowLeft, Search } from 'lucide-react';

export default function Portfolio() {
  const [activeSection, setActiveSection] = useState('about');
  const [darkMode, setDarkMode] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [time, setTime] = useState(new Date());
  const [selectedBlog, setSelectedBlog] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [glitchEffect, setGlitchEffect] = useState(true);

  useEffect(() => {
    const timer = setInterval(() => setTime(new Date()), 1000);
    
    // Glitch effect for 1.5 seconds on load
    const glitchTimer = setTimeout(() => {
      setGlitchEffect(false);
    }, 1500);
    
    return () => {
      clearInterval(timer);
      clearTimeout(glitchTimer);
    };
  }, []);

  // ORIGINAL THEME
  const theme = darkMode ? {
    bg: 'bg-black',
    text: 'text-[#00ff00]',
    textAlt: 'text-[#00aa00]',
    link: 'text-[#00ffff]',
    linkHover: 'hover:text-[#ffff00]',
    border: 'border-[#00ff00]',
    btnBg: 'bg-[#003300]',
    btnHover: 'hover:bg-[#004400]',
    modalBg: 'bg-[#001100]'
  } : {
    bg: 'bg-[#c0c0c0]',
    text: 'text-black',
    textAlt: 'text-[#000080]',
    link: 'text-[#0000ff]',
    linkHover: 'hover:text-[#ff00ff]',
    border: 'border-[#808080]',
    btnBg: 'bg-[#dfdfdf]',
    btnHover: 'hover:bg-[#bfbfbf]',
    modalBg: 'bg-[#e0e0e0]'
  };

  const skills = [
    'Python', 'FastAPI', 'NLP', 'TensorFlow', 'PyTorch', 'Hugging Face',
    'BERT', 'Docker', 'Langflow', 'Langchain', 'Linux', 'Django',
    'C', 'C++', 'Lua', 'Go', 'PHP', 'Laravel', 'SQL', 'Flask',
    'Java', 'Springboot', 'HTML5', 'CSS', 'JavaScript', 'Generative AI'
  ];

  const projects = [
    {
      title: 'AI-Powered Legal Assistant',
      desc: 'Fine-tuned LegalBERT model providing case mapping of petitions to earlier cases, saving 80% of lawyers\' time',
      tech: 'Python • BERT • Hugging Face • Streamlit',
      github: 'https://github.com/Pixeler5diti'
    },
    {
      title: 'FlowBit - Multi Agent Business Document Processor',
      desc: 'AI-powered workflow engine autonomously processing emails, PDFs, and JSON with full audit trail',
      tech: 'Python • Langflow • Next.js • Docker',
      github: 'https://github.com/Pixeler5diti/FlowBit-AI-Multi-Agent-Buisness-Document-Processor'
    },
    {
      title: 'Emotion Detector',
      desc: 'IBM Watson-powered NLP system identifying and displaying dominant emotions from text input',
      tech: 'Python • IBM Watson NLP',
      github: 'https://github.com/Pixeler5diti/Final-Project-Emotion-Detector'
    },
    {
      title: 'IPO Data Aggregation Platform',
      desc: 'Real-time web application providing insights on company listings, pricing, and financial reports',
      tech: 'REST API • Web Scraping • Real-time Data',
      github: '#'
    }
  ];

  // Blog data
  const allBlogs = [
    {
      id: 'fine-tuning-bert-legal',
      title: 'Fine-tuning BERT for Legal Document Analysis',
      date: '2024.11.15',
      timestamp: '2024-11-15',
      excerpt: 'A practical guide to adapting BERT models for the unique challenges of legal text processing.',
      category: 'TECHNICAL',
      tags: ['NLP', 'BERT', 'LEGAL-TECH'],
      readTime: '8 min',
      content: `> ./blog/fine-tuning-bert-legal.md

# FINE-TUNING BERT FOR LEGAL DOCUMENT ANALYSIS

coming soon yawr bohot lamba hai.`,
      featured: true
    },
    {
      id: 'मन',
      title: 'मन',
      date: '2024.11.10',
      timestamp: '2024-11-10',
      excerpt: 'thoda deep shit',
      category: 'POETRY',
      tags: ['Human Mind', 'POETRY', 'CREATIVITY'],
      readTime: '10 sec',
      content: `> ./poem/mann.md

# MANN

  "Mann mei na ulajh, ye samandar tujhe duba dega,
  esa samandar hai ye... tujhe vahi ked karlega
  bahar nikal, peecha kar uss roshni ka jo sabki jananni hai
  sab bandhano se mukt hoga, khudko paa lega"
  - DeeJaVu`
    }
  ];

  // Filter blogs based on search query
  const filteredBlogs = allBlogs.filter(blog => 
    blog.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    blog.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
    blog.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase())) ||
    blog.category.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // Get unique categories
  const categories = [...new Set(allBlogs.map(blog => blog.category))];

  // Render blog content
  const renderBlogContent = (content) => {
    return content.split('\n').map((line, idx) => {
      if (line.startsWith('# ')) {
        return <h1 key={idx} className="text-xl sm:text-2xl font-bold mt-6 mb-3 uppercase">{line.substring(2)}</h1>;
      } else if (line.startsWith('## ')) {
        return <h2 key={idx} className="text-lg sm:text-xl font-bold mt-4 mb-2 uppercase">{line.substring(3)}</h2>;
      } else if (line.startsWith('> ')) {
        return <div key={idx} className={`my-2 p-2 border-l-2 ${theme.border} ${theme.btnBg}`}>{line.substring(2)}</div>;
      } else if (line.startsWith('```')) {
        return null;
      } else if (line.trim() === '') {
        return <br key={idx} />;
      } else {
        return <p key={idx} className="my-2">{line}</p>;
      }
    });
  };

  return (
    <div className={`min-h-screen ${theme.bg} ${theme.text} relative overflow-hidden`} style={{ fontFamily: '"Courier New", Courier, monospace' }}>
      {/* GLITCH EFFECT OVERLAY */}
      {glitchEffect && (
        <div className="fixed inset-0 z-[9999] pointer-events-none">
          {/* Multiple glitch layers */}
          <div className="absolute inset-0 bg-[#ff00ff] opacity-20 animate-ping"></div>
          <div className="absolute inset-0 bg-[#00ffff] opacity-15 animate-pulse"></div>
          <div className="absolute inset-0 bg-[#ffff00] opacity-10" style={{
            clipPath: 'polygon(0% 0%, 100% 0%, 100% 30%, 0% 30%)',
            animation: 'glitch-vertical 0.3s infinite'
          }}></div>
          <div className="absolute inset-0" style={{
            background: 'linear-gradient(90deg, transparent 50%, rgba(255,0,0,0.1) 50%)',
            backgroundSize: '10px 100%',
            animation: 'scanlines 0.2s infinite'
          }}></div>
          
          {/* CRT monitor effect */}
          <div className="absolute inset-0" style={{
            background: 'radial-gradient(ellipse at center, transparent 0%, rgba(0,0,0,0.3) 100%)',
            boxShadow: 'inset 0 0 100px rgba(0,255,0,0.1)'
          }}></div>
          
          {/* Loading text */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center">
              <div className={`text-3xl sm:text-4xl font-bold mb-4 animate-pulse ${darkMode ? 'text-[#00ff00]' : 'text-[#000080]'}`}>
                SYSTEM BOOT...
              </div>
              <div className={`text-lg sm:text-xl ${darkMode ? 'text-[#00aa00]' : 'text-[#0000aa]'}`}>
                loading DeeJaVu's website v1.0
              </div>
              <div className="mt-6 sm:mt-8">
                <div className={`inline-block w-48 sm:w-64 h-3 sm:h-4 border-2 ${theme.border}`}>
                  <div 
                    className={`h-full ${darkMode ? 'bg-[#00ff00]' : 'bg-[#0000ff]'} animate-progress`}
                    style={{ animationDuration: '1.5s' }}
                  ></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Pixel pattern background */}
      <div className="fixed inset-0 opacity-10 pointer-events-none" style={{
        backgroundImage: `repeating-linear-gradient(0deg, transparent, transparent 2px, ${darkMode ? '#00ff00' : '#000'} 2px, ${darkMode ? '#00ff00' : '#000'} 4px),
                         repeating-linear-gradient(90deg, transparent, transparent 2px, ${darkMode ? '#00ff00' : '#000'} 2px, ${darkMode ? '#00ff00' : '#000'} 4px)`,
        backgroundSize: '20px 20px'
      }}></div>

      {/* Header */}
      <header className={`border-b-4 ${theme.border} ${theme.btnBg} p-3 sm:p-4`}>
        <div className="max-w-5xl mx-auto px-2 sm:px-4">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2 sm:gap-0 mb-2">
            <div className="flex items-center gap-2 sm:gap-3">
              <div className="text-2xl sm:text-3xl">☕</div>
              <div>
                <div className="text-xl sm:text-2xl font-bold" style={{ textShadow: '2px 2px 0px rgba(0,0,0,0.3)' }}>
                  ~/DeeJaVu
                </div>
                <div className={`text-xs sm:text-sm ${theme.textAlt}`}>Diti Vasisht • AI Engineer & Poet</div>
              </div>
            </div>
            <div className="flex items-center gap-2 sm:gap-4 text-xs sm:text-sm">
              <span>{time.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</span>
              <button
                onClick={() => setDarkMode(!darkMode)}
                className={`px-2 sm:px-3 py-1 sm:py-2 border-2 ${theme.border} ${theme.btnBg} ${theme.btnHover} text-sm sm:text-base`}
              >
                {darkMode ? '☀' : '🌙'}
              </button>
            </div>
          </div>
          <div className="text-xs sm:text-sm">
            <span className="animate-pulse">●</span> ONLINE | Last login: {time.toLocaleDateString()}
          </div>
        </div>
      </header>

      {/* Navigation */}
      <nav className={`border-b-2 ${theme.border} ${theme.btnBg}`}>
        <div className="max-w-5xl mx-auto p-2 sm:p-3">
          <div className="flex flex-wrap gap-1 sm:gap-2 justify-center sm:justify-start">
            {['about', 'skills', 'projects', 'blog', 'connect'].map((section) => (
              <button
                key={section}
                onClick={() => setActiveSection(section)}
                className={`px-3 sm:px-4 py-1.5 sm:py-2 border-2 ${theme.border} text-xs sm:text-sm uppercase font-bold whitespace-nowrap min-w-[80px] text-center ${
                  activeSection === section
                    ? `${darkMode ? 'bg-[#00ff00] text-black' : 'bg-black text-white'}`
                    : `${theme.btnBg} ${theme.btnHover}`
                }`}
                style={{ boxShadow: activeSection === section ? '3px 3px 0px rgba(0,0,0,0.5)' : '2px 2px 0px rgba(0,0,0,0.3)' }}
              >
                [{section}]
              </button>
            ))}
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="max-w-5xl mx-auto p-3 sm:p-4 md:p-6">
        {/* About Section */}
        {activeSection === 'about' && (
          <div className="space-y-4 sm:space-y-6">
            <div className={`border-4 ${theme.border} ${theme.btnBg} p-4 sm:p-5`} style={{ boxShadow: '5px 5px 0px rgba(0,0,0,0.3)' }}>
              <div className="flex items-center gap-2 mb-3 pb-2 border-b-2 border-dashed border-current">
                <Terminal className="w-4 h-4 sm:w-5 sm:h-5" />
                <h2 className="text-sm sm:text-base font-bold uppercase">$ whoami</h2>
              </div>
              <div className="space-y-2 sm:space-y-3 text-xs sm:text-sm leading-relaxed">
                <p>
                  &gt;&gt; I am <span className="font-bold underline">DeeJaVu</span> (Diti Vasisht), a BTech AIML 3rd yr student at GGSIPU and an AI/ML/NLP engineer currently working as a <span className="font-bold">CM's Intern at Government of Delhi (GNCTD)</span>.
                </p>
                <p>
                  &gt;&gt; I've worked with <span className="font-bold">Heimatverse</span> (AI Developer), <span className="font-bold">Bluestock</span> (SDE), and <span className="font-bold">1Stopai at IIT Roorkee</span> (Full Stack Developer).
                </p>
                <p>
                  &gt;&gt; As a former <span className="font-bold">Outreach Head at The FOSS Club</span>, I secured sponsorships from The Linux Foundation and Cipher Schools.
                </p>
                <div className={`mt-3 pt-3 border-t-2 border-dashed ${theme.border} italic text-center text-sm sm:text-base`}>
                  "I write code for machines<br/>
                  and poetry for humans"
                </div>
              </div>
            </div>

            {/* Resume Download */}
            <div className={`border-4 ${theme.border} ${theme.btnBg} p-4 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3`} style={{ boxShadow: '5px 5px 0px rgba(0,0,0,0.3)' }}>
              <div className="flex-1">
                <div className="font-bold text-sm sm:text-base mb-1">📄 RESUME.PDF</div>
                <div className="text-xs sm:text-sm">Size: 420KB | Last modified: 2024-11-30</div>
              </div>
              <a 
                href="https://drive.google.com/file/d/13OaCqbuMrsIBmf8E_PU0PCemGKHnhe2a/view?usp=sharing" 
                download
                className={`px-4 sm:px-6 py-2 border-2 ${theme.border} ${theme.btnBg} ${theme.btnHover} text-xs sm:text-sm font-bold w-full sm:w-auto text-center`}
                style={{ boxShadow: '2px 2px 0px rgba(0,0,0,0.3)' }}
              >
                [DOWNLOAD]
              </a>
            </div>

            {/* Terminal Contact */}
            <div className={`border-4 ${theme.border} ${darkMode ? 'bg-black' : 'bg-[#000080]'} ${darkMode ? 'text-[#00ff00]' : 'text-white'} p-4 font-mono`} style={{ boxShadow: '5px 5px 0px rgba(0,0,0,0.3)' }}>
              <div className="text-xs sm:text-sm">
                <div className="mb-2">C:\DEEJAVU&gt; type contact.txt</div>
                <div className="pl-2 sm:pl-4 space-y-1">
                  <div>&gt; EMAIL: ditivasisht@gmail.com</div>
                  <div>&gt; WEB: diti.is-a.dev</div>
                  <div>&gt; GITHUB: github.com/Pixeler5diti</div>
                  <div>&gt; LINKEDIN: linkedin.com/in/ditivasisht</div>
                </div>
                <div className="mt-2">C:\DEEJAVU&gt;<span className="animate-pulse">_</span></div>
              </div>
            </div>
          </div>
        )}

        {/* Skills Section */}
        {activeSection === 'skills' && (
          <div>
            <div className={`border-4 ${theme.border} ${theme.btnBg} p-4 sm:p-5 mb-4`} style={{ boxShadow: '5px 5px 0px rgba(0,0,0,0.3)' }}>
              <div className="flex items-center gap-2 mb-3 pb-2 border-b-2 border-dashed border-current">
                <Brain className="w-4 h-4 sm:w-5 sm:h-5" />
                <h2 className="text-sm sm:text-base font-bold uppercase">$ ls -la /skills/</h2>
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-2">
                {skills.map((skill, idx) => (
                  <div
                    key={idx}
                    className={`border-2 ${theme.border} ${theme.btnBg} ${theme.btnHover} p-2 text-center text-xs sm:text-sm font-bold cursor-default break-words`}
                    style={{ boxShadow: '2px 2px 0px rgba(0,0,0,0.3)' }}
                  >
                    {skill}
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Projects Section */}
        {activeSection === 'projects' && (
          <div className="space-y-4 sm:space-y-6">
            <div className="flex items-center gap-2 mb-3 sm:mb-4">
              <Code className="w-4 h-4 sm:w-5 sm:h-5" />
              <h2 className="text-sm sm:text-base font-bold uppercase">$ cat ./projects/*</h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
              {projects.map((project, idx) => (
                <div
                  key={idx}
                  className={`border-4 ${theme.border} ${theme.btnBg} p-4`}
                  style={{ boxShadow: '5px 5px 0px rgba(0,0,0,0.3)' }}
                >
                  <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-2 mb-2">
                    <h3 className="font-bold text-sm sm:text-base uppercase break-words">&gt;&gt; {project.title}</h3>
                    {project.github !== '#' && (
                      <a 
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`${theme.link} ${theme.linkHover} text-xs sm:text-sm underline text-right sm:text-left`}
                      >
                        [CODE]
                      </a>
                    )}
                  </div>
                  <p className={`text-xs sm:text-sm mb-2 ${theme.textAlt} break-words`}>{project.desc}</p>
                  <div className={`text-xs sm:text-sm border-2 ${theme.border} p-2 inline-block break-words`}>
                    TECH: {project.tech}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Blog Section */}
        {activeSection === 'blog' && !selectedBlog && (
          <div className="space-y-4 sm:space-y-6">
            <div className="flex items-center gap-2 mb-3 sm:mb-4">
              <BookOpen className="w-4 h-4 sm:w-5 sm:h-5" />
              <h2 className="text-sm sm:text-base font-bold uppercase">$ cat ./writings/*</h2>
            </div>

            {/* Search */}
            <div className={`border-4 ${theme.border} ${theme.btnBg} p-3 sm:p-4 mb-4`} style={{ boxShadow: '4px 4px 0px rgba(0,0,0,0.3)' }}>
              <div className="flex items-center gap-2 mb-3">
                <Search className="w-4 h-4" />
                <span className="text-xs sm:text-sm font-bold">SEARCH:</span>
                <input
                  type="text"
                  placeholder="Type to filter..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className={`flex-1 ${theme.bg} border-2 ${theme.border} px-2 sm:px-3 py-1 text-xs sm:text-sm ${theme.text}`}
                />
              </div>
              <div className="flex flex-wrap gap-1 sm:gap-2">
                <button
                  onClick={() => setSearchQuery('')}
                  className={`px-2 sm:px-3 py-1 border-2 ${theme.border} text-xs ${!searchQuery ? (darkMode ? 'bg-[#00ff00] text-black' : 'bg-black text-white') : theme.btnBg}`}
                >
                  ALL
                </button>
                {categories.map(category => (
                  <button
                    key={category}
                    onClick={() => setSearchQuery(category)}
                    className={`px-2 sm:px-3 py-1 border-2 ${theme.border} text-xs ${searchQuery === category ? (darkMode ? 'bg-[#00ff00] text-black' : 'bg-black text-white') : theme.btnBg}`}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div>

            {/* Featured Post */}
            {filteredBlogs.filter(b => b.featured).map(blog => (
              <div key={blog.id} className="mb-6">
                <div className={`border-l-4 ${theme.border} pl-3 mb-3`}>
                  <span className="text-xs sm:text-sm font-bold uppercase">FEATURED</span>
                </div>
                <div 
                  onClick={() => setSelectedBlog(blog)}
                  className={`border-4 ${theme.border} ${theme.btnBg} p-4 cursor-pointer hover:border-[#00ff00] transition-colors`}
                  style={{ boxShadow: '4px 4px 0px rgba(0,0,0,0.3)' }}
                >
                  <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-2 mb-3">
                    <h2 className="font-bold text-sm sm:text-base uppercase break-words">&gt;&gt; {blog.title}</h2>
                    <div className="flex gap-2">
                      <span className={`border-2 ${theme.border} px-2 py-1 text-xs`}>{blog.category}</span>
                      <span className={`border-2 ${theme.border} px-2 py-1 text-xs`}>{blog.date}</span>
                    </div>
                  </div>
                  <p className={`text-xs sm:text-sm mb-3 ${theme.textAlt} break-words`}>{blog.excerpt}</p>
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                    <div className="flex flex-wrap gap-1">
                      {blog.tags.map(tag => (
                        <span key={tag} className={`border ${theme.border} px-2 py-1 text-xs ${darkMode ? 'bg-[#002200]' : 'bg-[#efefef]'}`}>
                          {tag}
                        </span>
                      ))}
                    </div>
                    <div className="flex items-center gap-1 text-xs sm:text-sm">
                      <Clock className="w-3 h-3" />
                      <span>{blog.readTime}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}

            {/* Blog Listings */}
            <div className="space-y-4">
              {filteredBlogs
                .filter(b => !b.featured)
                .map(blog => (
                  <div 
                    key={blog.id} 
                    onClick={() => setSelectedBlog(blog)}
                    className={`border-4 ${theme.border} ${theme.btnBg} p-4 cursor-pointer hover:border-[#00ff00] transition-colors`}
                    style={{ boxShadow: '4px 4px 0px rgba(0,0,0,0.3)' }}
                  >
                    <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-2 mb-2">
                      <h3 className="font-bold text-sm sm:text-base break-words">&gt; {blog.title}</h3>
                      <div className="flex gap-2">
                        <span className={`border ${theme.border} px-2 py-1 text-xs`}>{blog.category}</span>
                        <span className={`border ${theme.border} px-2 py-1 text-xs`}>{blog.date}</span>
                      </div>
                    </div>
                    <p className={`text-xs sm:text-sm mb-2 ${theme.subtle} break-words`}>{blog.excerpt}</p>
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                      <div className="flex flex-wrap gap-1">
                        {blog.tags.map(tag => (
                          <span key={tag} className={`border ${theme.border} px-2 py-1 text-xs ${darkMode ? 'bg-[#002200]' : 'bg-[#efefef]'}`}>
                            {tag}
                          </span>
                        ))}
                      </div>
                      <div className="flex items-center gap-1 text-xs sm:text-sm">
                        <Clock className="w-3 h-3" />
                        <span>{blog.readTime}</span>
                      </div>
                    </div>
                  </div>
                ))}
            </div>

            {/* No results */}
            {filteredBlogs.length === 0 && (
              <div className={`border-4 ${theme.border} ${theme.btnBg} p-4 text-center`}>
                <div className="text-sm sm:text-base mb-2">No articles found for "{searchQuery}"</div>
                <button
                  onClick={() => setSearchQuery('')}
                  className={`px-3 py-1 border-2 ${theme.border} ${theme.btnBg} ${theme.btnHover} text-xs sm:text-sm`}
                >
                  CLEAR SEARCH
                </button>
              </div>
            )}
          </div>
        )}

        {/* Blog Detail */}
        {selectedBlog && (
          <div className="space-y-4 sm:space-y-6">
            {/* Back Button */}
            <button
              onClick={() => setSelectedBlog(null)}
              className={`flex items-center gap-2 px-3 sm:px-4 py-2 border-2 ${theme.border} ${theme.btnBg} ${theme.btnHover} text-xs sm:text-sm`}
            >
              <ArrowLeft className="w-3 h-3 sm:w-4 sm:h-4" />
              BACK TO ARTICLES
            </button>

            {/* Article */}
            <div className={`border-4 ${theme.border} ${theme.btnBg} p-4 sm:p-5`} style={{ boxShadow: '5px 5px 0px rgba(0,0,0,0.3)' }}>
              {/* Header */}
              <div className="mb-4 sm:mb-6 pb-3 sm:pb-4 border-b-2 border-dashed border-current">
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-2 sm:gap-4 mb-3">
                  <h1 className="text-lg sm:text-xl font-bold uppercase break-words">&gt;&gt; {selectedBlog.title}</h1>
                  <div className="flex flex-col sm:items-end gap-2">
                    <span className={`border-2 ${theme.border} px-2 sm:px-3 py-1 text-xs sm:text-sm`}>{selectedBlog.category}</span>
                    <span className={`border-2 ${theme.border} px-2 sm:px-3 py-1 text-xs sm:text-sm`}>{selectedBlog.date}</span>
                  </div>
                </div>
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                  <div className="flex flex-wrap gap-1">
                    {selectedBlog.tags.map(tag => (
                      <span key={tag} className={`border ${theme.border} px-2 py-1 text-xs ${darkMode ? 'bg-[#002200]' : 'bg-[#efefef]'}`}>
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="flex items-center gap-1 text-xs sm:text-sm">
                    <Clock className="w-3 h-3 sm:w-4 sm:h-4" />
                    <span>{selectedBlog.readTime}</span>
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="text-xs sm:text-sm leading-relaxed space-y-3">
                {renderBlogContent(selectedBlog.content)}
              </div>

              {/* Author */}
              <div className={`mt-4 sm:mt-6 pt-3 sm:pt-4 border-t-2 border-dashed ${theme.border}`}>
                <div className="flex items-center gap-3">
                  <div className="text-2xl">👩‍💻</div>
                  <div>
                    <div className="font-bold text-sm sm:text-base">Diti Vasisht</div>
                    <div className={`text-xs sm:text-sm ${theme.textAlt}`}>AI Engineer & Poet</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Connect Section */}
        {activeSection === 'connect' && (
          <div className="space-y-4 sm:space-y-6">
            <div className="flex items-center gap-2 mb-3 sm:mb-4">
              <Mail className="w-4 h-4 sm:w-5 sm:h-5" />
              <h2 className="text-sm sm:text-base font-bold uppercase">$ ./connect.sh</h2>
            </div>

            {/* Contact Form */}
            <div className={`border-4 ${theme.border} ${theme.btnBg} p-4`} style={{ boxShadow: '5px 5px 0px rgba(0,0,0,0.3)' }}>
              <h3 className="font-bold mb-3 text-sm sm:text-base uppercase border-b-2 border-dashed border-current pb-2">SEND MESSAGE</h3>
              <div className="space-y-3">
                <div>
                  <label className="block text-xs sm:text-sm mb-1 font-bold">NAME:</label>
                  <input
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    className={`w-full ${theme.bg} border-2 ${theme.border} p-2 sm:p-3 text-xs sm:text-sm ${theme.text}`}
                    placeholder="Your name..."
                  />
                </div>
                <div>
                  <label className="block text-xs sm:text-sm mb-1 font-bold">EMAIL:</label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    className={`w-full ${theme.bg} border-2 ${theme.border} p-2 sm:p-3 text-xs sm:text-sm ${theme.text}`}
                    placeholder="your@email.com"
                  />
                </div>
                <div>
                  <label className="block text-xs sm:text-sm mb-1 font-bold">MESSAGE:</label>
                  <textarea
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                    rows="4"
                    className={`w-full ${theme.bg} border-2 ${theme.border} p-2 sm:p-3 text-xs sm:text-sm ${theme.text} resize-none`}
                    placeholder="Type your message..."
                  />
                </div>
                <button className={`w-full border-2 ${theme.border} ${theme.btnBg} ${theme.btnHover} py-2 sm:py-3 text-xs sm:text-sm font-bold`} style={{ boxShadow: '3px 3px 0px rgba(0,0,0,0.3)' }}>
                  [SUBMIT MESSAGE]
                </button>
              </div>
            </div>

            {/* Social Links */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {[
                { icon: '📧', title: 'EMAIL', link: 'mailto:ditivasisht@gmail.com', text: 'ditivasisht@gmail.com' },
                { icon: '💻', title: 'GITHUB', link: 'https://github.com/Pixeler5diti', text: 'github.com/Pixeler5diti' },
                { icon: '💼', title: 'LINKEDIN', link: 'https://linkedin.com/in/ditivasisht', text: 'linkedin.com/in/ditivasisht' },
                { icon: '🌐', title: 'WEBSITE', link: 'https://diti.is-a.dev', text: 'diti.is-a.dev' }
              ].map((social, idx) => (
                <a
                  key={idx}
                  href={social.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`border-4 ${theme.border} ${theme.btnBg} ${theme.btnHover} p-3 sm:p-4`}
                  style={{ boxShadow: '4px 4px 0px rgba(0,0,0,0.3)' }}
                >
                  <div className="font-bold text-xs sm:text-sm mb-1 break-words">{social.icon} {social.title}</div>
                  <div className={`text-xs sm:text-sm ${theme.textAlt} break-words`}>{social.text}</div>
                </a>
              ))}
            </div>
          </div>
        )}
      </main>

      {/* Footer */}
      <footer className={`border-t-4 ${theme.border} ${theme.btnBg} mt-6 sm:mt-8 p-4`}>
        <div className="max-w-5xl mx-auto text-center text-xs sm:text-sm">
          <div className="mb-2">
            ═══════════════════════════════════════════════
          </div>
          <p className="font-bold text-sm sm:text-base">© 2024 ~/DeeJaVu | Diti Vasisht</p>
          <p className="italic mt-1 text-sm sm:text-base">"Where code compiles and verse rhymes"</p>
          <div className="mt-2">
            ═══════════════════════════════════════════════
          </div>
          <div className="mt-2 text-xs sm:text-sm">
            Best viewed in 800x600 resolution 🖥️ | Made with ☕ and ⌨️
          </div>
        </div>
      </footer>

      <style jsx>{`
        @keyframes blink {
          0%, 49% { opacity: 1; }
          50%, 100% { opacity: 0; }
        }
        
        @keyframes glitch-vertical {
          0% { transform: translateY(0); }
          20% { transform: translateY(-2px); }
          40% { transform: translateY(2px); }
          60% { transform: translateY(-1px); }
          80% { transform: translateY(1px); }
          100% { transform: translateY(0); }
        }
        
        @keyframes scanlines {
          0% { transform: translateY(0); }
          100% { transform: translateY(10px); }
        }
        
        @keyframes progress {
          0% { width: 0%; }
          100% { width: 100%; }
        }
        
        .animate-pulse { animation: blink 1s infinite; }
        .animate-progress { animation: progress linear forwards; }
        
        /* Fix text overflow */
        .break-words {
          overflow-wrap: break-word;
          word-wrap: break-word;
          word-break: break-word;
        }
        
        /* Button alignment fixes */
        .flex-wrap {
          align-items: center;
        }
        
        /* Ensure buttons have consistent height */
        button {
          min-height: 2.5rem;
        }
        
        /* CRT flicker effect */
        @keyframes flicker {
          0% { opacity: 0.97; }
          5% { opacity: 0.99; }
          10% { opacity: 0.98; }
          15% { opacity: 1; }
          20% { opacity: 0.99; }
          25% { opacity: 0.98; }
          30% { opacity: 0.99; }
          35% { opacity: 1; }
          40% { opacity: 0.98; }
          45% { opacity: 0.99; }
          50% { opacity: 1; }
          55% { opacity: 0.98; }
          60% { opacity: 0.99; }
          65% { opacity: 1; }
          70% { opacity: 0.99; }
          75% { opacity: 0.98; }
          80% { opacity: 0.99; }
          85% { opacity: 1; }
          90% { opacity: 0.98; }
          95% { opacity: 0.99; }
          100% { opacity: 1; }
        }
        
        /* Apply subtle CRT flicker to the main content */
        main {
          animation: flicker 5s infinite;
        }
        
        /* Fix responsive spacing */
        @media (max-width: 640px) {
          .flex-col > * + * {
            margin-top: 0.5rem;
          }
        }
      `}</style>
    </div>
  );
}
