/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useMemo, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  BookOpen, 
  ClipboardCheck, 
  ChevronLeft, 
  ChevronRight, 
  ExternalLink, 
  AlertTriangle,
  RotateCcw,
  CheckCircle2,
  Check,
  XCircle,
  Menu,
  X
} from 'lucide-react';
import { QUESTIONS, THEMES } from './data/questions';
import { useProgress } from './hooks/useProgress';
import { Question } from './types';

type Mode = 'LERNEN' | 'TESTEN';

export default function App() {
  const [mode, setMode] = useState<Mode>('LERNEN');
  const [selectedTheme, setSelectedTheme] = useState<string | null>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showAnswer, setShowAnswer] = useState(false);
  //const [userInput, setUserInput] = useState('');
  const [userSelection, setUserSelection] = useState<string[]>([]);
  const [isGameOver, setIsGameOver] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [sessionQuestions, setSessionQuestions] = useState<Question[]>([]);
  const { progress, recordAnswer, getSuccessRate, resetProgress } = useProgress();

  // Update session questions when mode or theme changes
  useEffect(() => {
    let qs = selectedTheme 
      ? QUESTIONS.filter(q => q.theme === selectedTheme)
      : QUESTIONS;

    if (mode === 'LERNEN') {
      // Sort: incorrectly answered questions first
      qs = [...qs].sort((a, b) => {
        const aIncorrect = progress.answeredIncorrectly.includes(a.id);
        const bIncorrect = progress.answeredIncorrectly.includes(b.id);
        if (aIncorrect && !bIncorrect) return -1;
        if (!aIncorrect && bIncorrect) return 1;
        return 0;
      });
    } else {
      // In Test mode, shuffle questions AND their options
      qs = [...qs]
        .sort(() => Math.random() - 0.5)
        .map(q => ({
          ...q,
          options: q.options ? [...q.options].sort(() => Math.random() - 0.5) : undefined
        }));
    }
    
    setSessionQuestions(qs);
    setCurrentIndex(0);
    setShowAnswer(false);
    //setUserInput('');
    setUserSelection('');
  }, [mode, selectedTheme]); // Removed progress dependencies to keep session stable

  const currentQuestion = sessionQuestions[currentIndex];

  // Mehrfachauswahl
  const isMultiSelect = currentQuestion?.correctOptions && currentQuestion.correctOptions.length > 1;

  const toggleSelection = (option: string) => {
    setUserSelection(prev =>
      prev.includes(option)
        ? prev.filter(o => o !== option)
        : [...prev, option]
    );
  };

  const handleNext = () => {
    if (currentIndex < sessionQuestions.length - 1) {
      setCurrentIndex(prev => prev + 1);
      setShowAnswer(false);
      //setUserInput('');
    }
  };

  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex(prev => prev - 1);
      setShowAnswer(false);
      //setUserInput('');
    }
  };

  /* Veraltete Single-Antwort Funktion
  const handleSubmitAnswer = (answer: string) => {
    if (showAnswer) return;
    
    setUserInput(answer);
    const isCorrect = answer.toLowerCase().trim() === currentQuestion.answer.toLowerCase().trim();
    
    if (!isCorrect && currentQuestion.isSafetyCritical) {
      setIsGameOver(true);
      setTimeout(() => setIsGameOver(false), 3000);
    }

    recordAnswer(currentQuestion.id, isCorrect);
    setShowAnswer(true);
  };
  */

  // Auswertung von Multiple-Choice-Fragen mit Mehrfachauswahl
  const handleSubmitAnswer = (selected: string | string[]) => {
    if (showAnswer) return;

    let isCorrect = false;

    if (Array.isArray(selected)) {
      // Multi-Select
      const correct = currentQuestion.correctOptions || [currentQuestion.answer];
      const userSorted = [...selected].sort();
      const correctSorted = [...correct].sort();
      isCorrect = userSorted.length === correctSorted.length &&
                  userSorted.every((v, i) => v === correctSorted[i]);
    } else {
      // Single-Choice (wie früher)
      isCorrect = selected.toLowerCase().trim() === currentQuestion.answer.toLowerCase().trim();
    }

    recordAnswer(currentQuestion.id, isCorrect);
    setShowAnswer(true);

    if (!isCorrect && currentQuestion.isSafetyCritical) {
      setIsGameOver(true);
      setTimeout(() => setIsGameOver(false), 3000);
    }
  };

  const successRate = getSuccessRate();

  return (
    <div className="min-h-screen bg-[#F5F5F5] text-[#1A1A1A] font-sans flex flex-col">
      {/* Header */}
      <header className="bg-white border-b border-black/5 px-6 py-3 md:py-4 flex flex-col md:flex-row items-center justify-between gap-3 md:gap-4 sticky top-0 z-30">
        <div className="flex items-center justify-between w-full md:w-auto">
          <div className="flex items-center gap-4">
            <button 
              onClick={() => setIsSidebarOpen(!isSidebarOpen)}
              className="p-2 hover:bg-black/5 rounded-lg lg:hidden"
            >
              <Menu size={20} />
            </button>
            <h1 className="text-xl font-semibold tracking-tight flex items-center gap-2">
              <svg 
                width="24" 
                height="24" 
                viewBox="0 0 24 24" 
                fill="none" 
                xmlns="http://www.w3.org/2000/svg"
                className="text-black"
              >
                {/* Stilisiertes Triebfahrzeug von vorne */}
                <rect x="4" y="8" width="16" height="12" rx="2" fill="currentColor" />
                <circle cx="8" cy="14" r="2" fill="white" />
                <circle cx="16" cy="14" r="2" fill="white" />
                <rect x="6" y="6" width="12" height="2" fill="currentColor" /> {/* Dach */}
                <rect x="9" y="10" width="6" height="4" fill="#000" opacity="0.3" /> {/* Fenster */}
                <path d="M5 20 H19" stroke="currentColor" strokeWidth="1.5" /> {/* Schienen-Andeutung */}
              </svg>
              Tf-Trainer Anlage 5 (Stand: 02/2026)
            </h1>
          </div>
        </div>

        <div className="flex items-center justify-center md:justify-end w-full md:w-auto gap-6">
          <div className="hidden md:flex items-center gap-2 text-sm font-medium">
            <span className="text-black/40 uppercase tracking-wider text-[10px]">Erfolg</span>
            <div className="w-32 h-2 bg-black/5 rounded-full overflow-hidden">
              <div 
                className={`h-full transition-all duration-500 ${successRate >= 70 ? 'bg-emerald-500' : 'bg-amber-500'}`}
                style={{ width: `${successRate}%` }}
              />
            </div>
            <span className={successRate >= 70 ? 'text-emerald-600' : 'text-amber-600'}>
              {successRate}%
            </span>
          </div>

          <nav className="flex bg-black/5 p-1 rounded-xl w-full md:w-auto">
            <button
              onClick={() => setMode('LERNEN')}
              className={`flex-1 md:flex-none flex items-center justify-center gap-2 px-4 py-1.5 rounded-lg text-sm font-medium transition-all ${
                mode === 'LERNEN' ? 'bg-white shadow-sm text-black' : 'text-black/60 hover:text-black'
              }`}
            >
              <BookOpen size={16} />
              Lernen
            </button>
            <button
              onClick={() => setMode('TESTEN')}
              className={`flex-1 md:flex-none flex items-center justify-center gap-2 px-4 py-1.5 rounded-lg text-sm font-medium transition-all ${
                mode === 'TESTEN' ? 'bg-white shadow-sm text-black' : 'text-black/60 hover:text-black'
              }`}
            >
              <ClipboardCheck size={16} />
              Testen
            </button>
          </nav>
        </div>
      </header>

      <div className="flex-1 flex overflow-hidden">
        {/* Sidebar */}
        <aside className={`
          fixed inset-0 z-40 lg:relative lg:z-0 lg:translate-x-0 transition-transform duration-300
          ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'}
          w-72 bg-white border-r border-black/5 flex flex-col
        `}>
          <div className="p-6 flex items-center justify-between lg:hidden">
            <span className="font-semibold">Themen</span>
            <button onClick={() => setIsSidebarOpen(false)}><X size={20} /></button>
          </div>
          
          <div className="flex-1 overflow-y-auto p-4 space-y-2">
            <button
              onClick={() => { setSelectedTheme(null); setIsSidebarOpen(false); }}
              className={`w-full text-left px-4 py-3 rounded-xl text-sm font-medium transition-all ${
                selectedTheme === null ? 'bg-black text-white' : 'hover:bg-black/5 text-black/70'
              }`}
            >
              Alle Themen
            </button>
            {THEMES.map(theme => (
              <button
                key={theme.id}
                onClick={() => { setSelectedTheme(theme.id); setIsSidebarOpen(false); }}
                className={`w-full text-left px-4 py-3 rounded-xl text-sm font-medium transition-all ${
                  selectedTheme === theme.id ? 'bg-black text-white' : 'hover:bg-black/5 text-black/70'
                }`}
              >
                {theme.name}
              </button>
            ))}
          </div>

          <div className="p-4 border-t border-black/5 bg-black/[0.02] space-y-4">
            <div>
              <div className="text-[10px] uppercase tracking-widest text-black/40 font-bold mb-2">Status</div>
              <div className="space-y-1 text-xs">
                <div className="flex justify-between">
                  <span className="text-black/60">Gelernt:</span>
                  <span className="font-mono">{progress.answeredCorrectly.length}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-black/60">Wiederholen:</span>
                  <span className="font-mono text-amber-600">{progress.answeredIncorrectly.length}</span>
                </div>
              </div>
            </div>
            
            <button
              onClick={() => {
                if (confirm('Möchtest du deinen gesamten Lernfortschritt wirklich zurücksetzen?')) {
                  resetProgress();
                }
              }}
              className="w-full flex items-center justify-center gap-2 py-2 text-[10px] uppercase tracking-widest font-bold text-black/30 hover:text-red-500 transition-colors"
            >
              <RotateCcw size={12} /> Fortschritt löschen
            </button>
          </div>
        </aside>

        {/* Main Content */}
        <main className="flex-1 overflow-y-auto p-6 lg:p-12 flex flex-col items-center">
          <div className="w-full max-w-2xl">
            <AnimatePresence mode="wait">
              {currentQuestion ? (
                <motion.div
                  key={currentQuestion.id + mode}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  className="space-y-8"
                >
                  {/* Question Card */}
                  <div className="bg-white rounded-3xl shadow-[0_4px_20px_rgba(0,0,0,0.04)] border border-black/5 overflow-hidden">
                    <div className="px-8 py-4 bg-black/[0.02] border-b border-black/5 flex items-center justify-between">
                      <span className="text-[10px] uppercase tracking-widest font-bold text-black/40">
                        {currentQuestion.theme} • {currentIndex + 1} / {sessionQuestions.length}
                      </span>
                      {currentQuestion.isSafetyCritical && (
                        <span className="flex items-center gap-1 text-[10px] uppercase tracking-widest font-bold text-red-600">
                          <AlertTriangle size={12} />
                          Sicherheitsrelevant
                        </span>
                      )}
                    </div>

                    <div className="p-12 flex flex-col items-center text-center space-y-8">
                      <h2 className="text-2xl font-medium leading-tight">
                        {currentQuestion.question}
                      </h2>

                      {mode === 'LERNEN' ? (
                        <div className="w-full space-y-6">
                          <div className="p-8 bg-black/5 rounded-2xl border border-black/5">
                            <p className="text-lg text-black/80 italic">
                              {currentQuestion.answer}
                            </p>
                          </div>
                          <div className="flex items-center justify-center gap-4">
                            <a 
                              href={currentQuestion.sourceUrl} 
                              target="_blank" 
                              rel="noreferrer"
                              className="text-xs text-black/40 hover:text-black flex items-center gap-1 transition-colors"
                            >
                              Quelle: {currentQuestion.source} <ExternalLink size={10} />
                            </a>
                          </div>
                        </div>
                      ) : (
                        <div className="w-full space-y-6">
                          {!showAnswer ? (
                            <div className="space-y-4">
                              <div className="grid grid-cols-1 gap-3">
                                {(currentQuestion.options || [currentQuestion.answer]).map((option, i) => {
                                  const isSelected = userSelection.includes(option);

                                  return (
                                    <button
                                      key={i}
                                      onClick={() => {
                                        if (isMultiSelect) {
                                          toggleSelection(option);
                                        } else {
                                          handleSubmitAnswer(option);
                                        }
                                      }}
                                      className={`w-full text-left px-6 py-4 rounded-xl border transition-all text-sm font-medium flex items-center gap-3 ${
                                        isSelected
                                          ? 'border-black bg-black/5'
                                          : 'border-black/10 hover:border-black hover:bg-black/5'
                                      }`}
                                    >
                                      {isMultiSelect && (
                                        <div className={`w-5 h-5 rounded border flex items-center justify-center flex-shrink-0 ${
                                          isSelected ? 'bg-black border-black' : 'border-black/40'
                                        }`}>
                                          {isSelected && <Check size={14} className="text-white" />}
                                        </div>
                                      )}
                                      <span>{option}</span>
                                    </button>
                                  );
                                })}
                              </div>

                              {isMultiSelect && (
                                <button
                                  onClick={() => handleSubmitAnswer(userSelection)}
                                  disabled={userSelection.length === 0}
                                  className="mt-6 w-full py-4 bg-black text-white rounded-xl font-medium hover:bg-black/90 disabled:bg-black/30 disabled:cursor-not-allowed transition"
                                >
                                  Antwort prüfen {userSelection.length > 0 && `(${userSelection.length})`}
                                </button>
                              )}
                            </div>
                          ) : (
                            <motion.div 
                              initial={{ opacity: 0, scale: 0.95 }}
                              animate={{ opacity: 1, scale: 1 }}
                              className="space-y-6"
                            >
                              <div className="grid grid-cols-1 gap-3">
                                {(currentQuestion.options || [currentQuestion.answer]).map((option, i) => {
                                  const correctOptions = currentQuestion.correctOptions || [currentQuestion.answer];
                                  const isCorrect = correctOptions.includes(option);
                                  const isSelected = userSelection.includes(option);

                                  let style = "border-black/10 opacity-50";
                                  if (isCorrect) style = "bg-emerald-50 border-emerald-500 text-emerald-700";
                                  else if (isSelected && !isCorrect) style = "bg-red-50 border-red-500 text-red-700";

                                  return (
                                    <div
                                      key={i}
                                      className={`w-full text-left px-6 py-4 rounded-xl border transition-all text-sm font-medium flex items-center justify-between ${style}`}
                                    >
                                      <span>{option}</span>
                                      {isCorrect && <CheckCircle2 size={18} className="text-emerald-500" />}
                                      {isSelected && !isCorrect && <XCircle size={18} className="text-red-500" />}
                                    </div>
                                  );
                                })}
                              </div>

                              <button
                                onClick={handleNext}
                                className="w-full bg-black text-white px-8 py-4 rounded-xl font-medium hover:bg-black/80 transition-all flex items-center justify-center gap-2"
                              >
                                Nächste Frage <ChevronRight size={18} />
                              </button>
                            </motion.div>
                          )}
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Navigation */}
                  {mode === 'LERNEN' && (
                    <div className="flex items-center justify-between gap-4">
                      <button
                        onClick={handlePrev}
                        disabled={currentIndex === 0}
                        className="flex-1 bg-white border border-black/5 px-6 py-4 rounded-2xl font-medium flex items-center justify-center gap-2 hover:bg-black/5 disabled:opacity-30 transition-all shadow-sm"
                      >
                        <ChevronLeft size={20} /> Zurück
                      </button>
                      <button
                        onClick={handleNext}
                        disabled={currentIndex === sessionQuestions.length - 1}
                        className="flex-1 bg-white border border-black/5 px-6 py-4 rounded-2xl font-medium flex items-center justify-center gap-2 hover:bg-black/5 disabled:opacity-30 transition-all shadow-sm"
                      >
                        Weiter <ChevronRight size={20} />
                      </button>
                    </div>
                  )}
                </motion.div>
              ) : (
                <div className="text-center py-20">
                  <RotateCcw size={48} className="mx-auto mb-4 text-black/20" />
                  <h3 className="text-xl font-medium mb-2">Keine Fragen gefunden</h3>
                  <p className="text-black/40">Wähle ein anderes Thema oder setze den Filter zurück.</p>
                </div>
              )}
            </AnimatePresence>
          </div>
        </main>
      </div>

      {/* Game Over Overlay */}
      <AnimatePresence>
        {isGameOver && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-red-600 flex items-center justify-center text-white"
          >
            <motion.div
              initial={{ scale: 0.5, rotate: -10 }}
              animate={{ scale: 1, rotate: 0 }}
              className="text-center"
            >
              <h1 className="text-8xl font-black uppercase tracking-tighter mb-4">Game Over</h1>
              <p className="text-2xl font-medium opacity-80">Sicherheitsrelevante Frage falsch beantwortet!</p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Mobile Stats Footer */}
      <div className="md:hidden bg-white border-t border-black/5 p-4 flex items-center justify-between text-xs font-medium">
        <div className="flex items-center gap-2">
          <span className="text-black/40">Erfolg:</span>
          <span className={successRate >= 70 ? 'text-emerald-600' : 'text-amber-600'}>{successRate}%</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="text-black/40">Gelernt:</span>
          <span>{progress.answeredCorrectly.length}</span>
        </div>
      </div>
    </div>
  );
}
