import React, { useState, useEffect } from 'react';

import { useNavigate } from "react-router-dom";
import { 
  Clock, 
  ChevronLeft, 
  ChevronRight, 
  CheckCircle2, 
  Flag, 
  Menu, 
  X, 
  User, 
  Info 
} from 'lucide-react';

// Mock Data
const EXAM_DATA = {
  subject: "Advanced Web Technologies",
  durationMinutes: 50,
  questions: [
    { id: 1, text: "What is the primary benefit of using Tailwind CSS?", options: ["It provides pre-built UI components like Bootstrap", "It uses a utility-first approach for rapid custom styling", "It is a backend framework for Node.js", "It replaces the need for JavaScript in modern web apps"], correctAnswer: 1 },
    { id: 2, text: "In React, what is the purpose of the 'useEffect' hook?", options: ["To manage global application state", "To perform side effects in functional components", "To create custom styling for components", "To speed up the initial rendering of the page"], correctAnswer: 1 },
    { id: 3, text: "Which of the following is NOT a TypeScript primitive type?", options: ["string", "boolean", "integer", "number"], correctAnswer: 2 },
    { id: 4, text: "What does the 'any' type in TypeScript represent?", options: ["A strictly typed object", "A variable that can hold any value, bypassing type checking", "A null or undefined value only", "An array of strings"], correctAnswer: 1 },
    { id: 5, text: "How do you define an optional property in a TypeScript interface?", options: ["property!", "property?", "optional property", "property: null"], correctAnswer: 1 }
  ]
};

const App = () => {
  const routerNavigate = useNavigate();
  const [currentIdx, setCurrentIdx] = useState(0);
  const [answers, setAnswers] = useState({});
  const [marked, setMarked] = useState(new Set());
  const [visited, setVisited] = useState(new Set([0]));
  const [timeLeft, setTimeLeft] = useState(EXAM_DATA.durationMinutes * 60);
  const [isSidebarOpen, setIsSidebarOpen] = useState(window.innerWidth > 1024);
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Timer logic
  useEffect(() => {
    const timer = setInterval(() => setTimeLeft(p => (p > 0 ? p - 1 : 0)), 1000);
    return () => clearInterval(timer);
  }, []);



  // Handle responsiveness
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 1024) setIsSidebarOpen(false);
      else setIsSidebarOpen(true);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const formatTime = (s) => `${Math.floor(s / 60).toString().padStart(2, '0')}:${(s % 60).toString().padStart(2, '0')}`;

  const navigate = (i) => {
    if (i >= 0 && i < EXAM_DATA.questions.length) {
      setCurrentIdx(i);
      setVisited(p => new Set([...p, i]));
      if (window.innerWidth < 1024) setIsSidebarOpen(false);
    }
  };

  const q = EXAM_DATA.questions[currentIdx];

  if (isSubmitted) {
    return (
      <div className="finish-screen">
        <div className="finish-card">
          <div className="success-icon">
            <CheckCircle2 size={48} />
          </div>
          <h1>Exam Submitted</h1>
          <p>Your responses for {EXAM_DATA.subject} have been recorded successfully.</p>
          <button className="btn-primary" onClick={() =>routerNavigate("/Exams")}>
            Go to Exams
          </button>
        </div>
        <style>{`
          .finish-screen { min-height: 100vh; background: #f8fafc; display: flex; align-items: center; justify-content: center; padding: 20px; }
          .finish-card { background: white; padding: 40px; border-radius: 24px; box-shadow: 0 20px 25px -5px rgba(0,0,0,0.1); text-align: center; max-width: 400px; width: 100%; border: 1px solid #f1f5f9; }
          .success-icon { background: #f0fdf4; width: 80px; height: 80px; border-radius: 50%; display: flex; align-items: center; justify-content: center; margin: 0 auto 24px; color: #16a34a; }
          .finish-card h1 { margin: 0 0 8px; color: #0f172a; font-size: 24px; }
          .finish-card p { color: #64748b; margin-bottom: 32px; }
          .btn-primary { background: #4f46e5; color: white; border: none; width: 100%; padding: 16px; border-radius: 12px; font-weight: bold; cursor: pointer; font-size: 16px; transition: 0.2s; }
          .btn-primary:hover { background: #4338ca; }
        `}</style>
      </div>
    );
  }

  return (
    <div className="exam-container">
      <style>{`
        * { box-sizing: border-box; }
        .exam-container { height: 100vh; display: flex; flex-direction: column; background: #f8fafc; font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif; overflow: hidden; }
        
        .header { background: white; border-bottom: 1px solid #e2e8f0; height: 80px; padding: 0 24px; display: flex; align-items: center; justify-content: space-between; z-index: 50; }
        .header-left { display: flex; align-items: center; gap: 16px; }
        .menu-toggle { background: transparent; border: none; padding: 10px; border-radius: 12px; cursor: pointer; color: #64748b; }
        .menu-toggle:hover { background: #f1f5f9; }
        .subject-info h1 { margin: 0; font-size: 18px; color: #1e1b4b; text-transform: uppercase; letter-spacing: -0.01em; }
        .subject-info p { margin: 4px 0 0; font-size: 11px; color: #94a3b8; font-weight: 600; text-transform: uppercase; }
        
        .header-right { display: flex; align-items: center; gap: 24px; }
        .timer-box { display: flex; align-items: center; gap: 8px; padding: 10px 20px; border-radius: 100px; font-family: monospace; font-size: 18px; font-weight: bold; border: 1px solid #e2e8f0; background: #f1f5f9; color: #334155; }
        .timer-critical { background: #fef2f2; border-color: #fee2e2; color: #dc2626; animation: pulse 2s infinite; }
        
        .main-wrapper { display: flex; flex: 1; overflow: hidden; position: relative; }
        .content-area { flex: 1; overflow-y: auto; padding: 40px 24px; }
        .content-container { max-width: 800px; margin: 0 auto; }
        
        .q-meta { display: flex; justify-content: space-between; align-items: center; margin-bottom: 32px; }
        .q-badge { background: #eef2ff; color: #4338ca; padding: 6px 16px; border-radius: 100px; font-size: 12px; font-weight: bold; border: 1px solid #e0e7ff; }
        .q-type { display: flex; align-items: center; gap: 8px; font-size: 12px; color: #94a3b8; }
        
        .question-card { background: white; border: 1px solid #e2e8f0; border-radius: 24px; padding: 40px; box-shadow: 0 1px 3px rgba(0,0,0,0.05); }
        .question-text { font-size: 22px; color: #1e293b; margin: 0 0 40px; line-height: 1.4; }
        
        .options-list { display: flex; flex-direction: column; gap: 16px; }
        .option-item { display: flex; align-items: center; gap: 16px; width: 100%; padding: 16px; border-radius: 16px; border: 2px solid #f1f5f9; background: white; cursor: pointer; text-align: left; transition: 0.2s; font-size: 16px; font-weight: 500; color: #475569; }
        .option-item:hover { border-color: #cbd5e1; background: #f8fafc; }
        .option-item.active { border-color: #4f46e5; background: #f5f3ff; color: #1e1b4b; }
        .option-letter { width: 32px; height: 32px; border-radius: 8px; display: flex; align-items: center; justify-content: center; font-weight: bold; font-size: 14px; background: #f1f5f9; color: #64748b; flex-shrink: 0; }
        .option-item.active .option-letter { background: #4f46e5; color: white; }
        
        .nav-controls { display: flex; justify-content: space-between; align-items: center; margin-top: 40px; gap: 16px; }
        .nav-left, .nav-right { display: flex; gap: 12px; }
        .btn-secondary { background: white; border: 1px solid #e2e8f0; padding: 12px 24px; border-radius: 12px; font-weight: bold; color: #475569; cursor: pointer; display: flex; align-items: center; gap: 8px; font-size: 14px; }
        .btn-secondary:hover { background: #f8fafc; border-color: #cbd5e1; }
        .btn-marked { background: #fffbeb; border-color: #fef3c7; color: #b45309; }
        .btn-clear { border: none; background: transparent; color: #94a3b8; padding: 12px; }
        .btn-clear:hover { color: #ef4444; }
        .btn-nav-arrow { background: white; border: 1px solid #e2e8f0; padding: 12px; border-radius: 12px; cursor: pointer; color: #64748b; }
        .btn-next { background: #4f46e5; color: white; border: none; padding: 12px 32px; border-radius: 12px; font-weight: bold; cursor: pointer; display: flex; align-items: center; gap: 8px; box-shadow: 0 4px 6px -1px rgba(79, 70, 229, 0.2); }
        .btn-next:hover { background: #4338ca; }
        
        .sidebar { width: 320px; background: white; border-left: 1px solid #e2e8f0; display: flex; flex-direction: column; transition: 0.3s; z-index: 40; }
        .sidebar-closed { width: 0; transform: translateX(100%); position: absolute; right: 0; height: 100%; }
        .sidebar-content { flex: 1; overflow-y: auto; padding: 24px; }
        .palette-title { font-size: 10px; font-weight: 900; color: #94a3b8; text-transform: uppercase; letter-spacing: 0.2em; margin-bottom: 24px; display: flex; justify-content: space-between; align-items: center; }
        .palette-grid { display: grid; grid-template-columns: repeat(5, 1fr); gap: 12px; }
        .palette-num { width: 40px; height: 40px; border-radius: 12px; border: 1px solid #e2e8f0; display: flex; align-items: center; justify-content: center; font-weight: bold; font-size: 12px; cursor: pointer; background: #f1f5f9; color: #94a3b8; transition: 0.2s; }
        .palette-num.current { ring: 2px solid #4f46e5; outline: 2px solid #4f46e5; outline-offset: 2px; transform: scale(1.1); }
        .palette-num.answered { background: #22c55e; color: white; border-color: #22c55e; }
        .palette-num.marked { background: #f59e0b; color: white; border-color: #f59e0b; }
        .palette-num.visited { background: #1e293b; color: white; border-color: #1e293b; }
        
        .legend { margin-top: 48px; padding-top: 32px; border-top: 1px solid #f1f5f9; }
        .legend-item { display: flex; align-items: center; gap: 12px; margin-bottom: 16px; font-size: 12px; font-weight: 600; color: #64748b; }
        .legend-color { width: 14px; height: 14px; border-radius: 4px; }
        
        .sidebar-footer { padding: 24px; border-top: 1px solid #e2e8f0; background: #f8fafc; }
        .btn-submit { width: 100%; background: #0f172a; color: white; border: none; padding: 16px; border-radius: 12px; font-weight: bold; cursor: pointer; transition: 0.2s; }
        .btn-submit:hover { background: black; }

        @keyframes pulse { 0% { opacity: 1; } 50% { opacity: 0.7; } 100% { opacity: 1; } }
        
        @media (max-width: 1024px) {
          .sidebar { position: fixed; right: 0; top: 80px; height: calc(100vh - 80px); box-shadow: -10px 0 15px rgba(0,0,0,0.05); }
          .overlay { position: fixed; inset: 0; background: rgba(15, 23, 42, 0.4); backdrop-filter: blur(4px); z-index: 30; }
          .nav-controls { flex-direction: column; align-items: stretch; }
          .nav-left, .nav-right { width: 100%; }
          .btn-next { flex: 1; }
        }
      `}</style>

      {/* Header */}
      <header className="header">
        <div className="header-left">
          <button className="menu-toggle" onClick={() => setIsSidebarOpen(!isSidebarOpen)}>
            {isSidebarOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
          <div className="subject-info">
            <h1>{EXAM_DATA.subject}</h1>
            <p>Internal Assessment · 2024-25</p>
          </div>
        </div>

        <div className="header-right">
          <div className={`timer-box ${timeLeft < 300 ? 'timer-critical' : ''}`}>
            <Clock size={20} />
            {formatTime(timeLeft)}
          </div>
          <div className="user-profile hidden sm:flex" style={{ display: 'flex', alignItems: 'center', gap: '12px', paddingLeft: '24px', borderLeft: '1px solid #e2e8f0' }}>
            <div style={{ textAlign: 'right' }}>
              <div style={{ fontSize: '14px', fontWeight: 'bold', color: '#1e293b' }}>Abhishek Sharma</div>
              <div style={{ fontSize: '10px', color: '#94a3b8', fontWeight: 'bold', textTransform: 'uppercase' }}>ID: 20240912</div>
            </div>
            <div style={{ width: '40px', height: '40px', background: '#e0e7ff', color: '#4338ca', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', border: '2px solid white', boxShadow: '0 2px 4px rgba(0,0,0,0.05)' }}>
              <User size={20} />
            </div>
          </div>
        </div>
      </header>

      <div className="main-wrapper">
        <main className="content-area">
          <div className="content-container">
            <div className="q-meta">
              <span className="q-badge">QUESTION {currentIdx + 1} OF {EXAM_DATA.questions.length}</span>
              <div className="q-type">
                <Info size={14} />
                Single Correct Choice
              </div>
            </div>

            <div className="question-card">
              <h2 className="question-text">{q.text}</h2>
              <div className="options-list">
                {q.options.map((opt, i) => (
                  <button
                    key={i}
                    onClick={() => setAnswers({...answers, [q.id]: i})}
                    className={`option-item ${answers[q.id] === i ? 'active' : ''}`}
                  >
                    <div className="option-letter">{String.fromCharCode(65 + i)}</div>
                    <span>{opt}</span>
                  </button>
                ))}
              </div>
            </div>

            <div className="nav-controls">
              <div className="nav-left">
                <button 
                  onClick={() => {
                    const n = new Set(marked);
                    n.has(q.id) ? n.delete(q.id) : n.add(q.id);
                    setMarked(n);
                  }}
                  className={`btn-secondary ${marked.has(q.id) ? 'btn-marked' : ''}`}
                >
                  <Flag size={18} fill={marked.has(q.id) ? "currentColor" : "none"} />
                  {marked.has(q.id) ? "Marked" : "Mark for Review"}
                </button>
                <button className="btn-clear" onClick={() => { const n = {...answers}; delete n[q.id]; setAnswers(n); }}>Clear</button>
              </div>

              <div className="nav-right">
                <button 
                  className="btn-nav-arrow" 
                  disabled={currentIdx === 0}
                  onClick={() => navigate(currentIdx - 1)}
                  style={{ opacity: currentIdx === 0 ? 0.3 : 1 }}
                >
                  <ChevronLeft size={24} />
                </button>
                <button 
                  className="btn-next"
                  onClick={() => currentIdx === EXAM_DATA.questions.length - 1 ? setIsSubmitted(true) : navigate(currentIdx + 1)}
                >
                  {currentIdx === EXAM_DATA.questions.length - 1 ? 'Finish Exam' : 'Save & Next'}
                  <ChevronRight size={18} />
                </button>
              </div>
            </div>
          </div>
        </main>

        {isSidebarOpen && <div className="overlay" onClick={() => setIsSidebarOpen(false)}></div>}

        <aside className={`sidebar ${!isSidebarOpen ? 'sidebar-closed' : ''}`}>
          <div className="sidebar-content">
            <div className="palette-title">
              Question Palette
              <X size={18} style={{ cursor: 'pointer' }} className="lg:hidden" onClick={() => setIsSidebarOpen(false)} />
            </div>

            <div className="palette-grid">
              {EXAM_DATA.questions.map((_, i) => {
                const qId = EXAM_DATA.questions[i].id;
                let status = "";
                if (answers[qId] !== undefined) status = "answered";
                else if (marked.has(qId)) status = "marked";
                else if (visited.has(i)) status = "visited";

                return (
                  <button
                    key={i}
                    onClick={() => navigate(i)}
                    className={`palette-num ${status} ${currentIdx === i ? 'current' : ''}`}
                  >
                    {i + 1}
                  </button>
                );
              })}
            </div>

            <div className="legend">
              <div className="palette-title">Status Legend</div>
              <div className="legend-item">
                <div className="legend-color" style={{ background: '#22c55e' }}></div>
                Answered
              </div>
              <div className="legend-item">
                <div className="legend-color" style={{ background: '#f59e0b' }}></div>
                Marked for Review
              </div>
              <div className="legend-item">
                <div className="legend-color" style={{ background: '#1e293b' }}></div>
                Not Answered
              </div>
              <div className="legend-item">
                <div className="legend-color" style={{ background: '#f1f5f9', border: '1px solid #e2e8f0' }}></div>
                Not Visited
              </div>
            </div>
          </div>

          <div className="sidebar-footer">
            <button className="btn-submit" onClick={() => setIsSubmitted(true)}>Final Submit</button>
          </div>
        </aside>
      </div>
    </div>
  );
};

const LegendItem = ({ color, label }) => (
  <div className="legend-item">
    <div className="legend-color" style={{ background: color }}></div>
    {label}
  </div>
);

export default App;