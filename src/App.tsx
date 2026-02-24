/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { 
  BookOpen, 
  ClipboardCheck, 
  ChevronLeft, 
  ChevronRight, 
  ExternalLink, 
  AlertTriangle,
  RotateCcw,
  CheckCircle2,
  XCircle,
  Check,              // ← neu
  XCircle as XCircleIcon  // ← neu (falls XCircle schon anders benannt war)
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
  const [userSelection, setUserSelection] = useState<string[]>([]);  // ← geändert
  const [isGameOver, setIsGameOver] = useState(false);
  const { progress, recordAnswer, getSuccessRate, resetProgress } = useProgress();

  const currentQuestion = QUESTIONS[currentIndex];

  const handleNext = () => {
    if (currentIndex < QUESTIONS.length - 1) {
      setCurrentIndex(prev => prev + 1);
      setShowAnswer(false);
      setUserSelection([]);
    }
  };

  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex(prev => prev - 1);
      setShowAnswer(false);
      setUserSelection([]);
    }
  };

  const toggleOption = (option: string) => {
    setUserSelection(prev => 
      prev.includes(option)
        ? prev.filter(o => o !== option)
        : [...prev, option]
    );
  };

  const handleSingleAnswer = (option: string) => {
    const isCorrect = option === currentQuestion.answer;
    recordAnswer(currentQuestion.id, isCorrect);
    setShowAnswer(true);

    if (!isCorrect && currentQuestion.isSafetyCritical) {
      setIsGameOver(true);
      setTimeout(() => setIsGameOver(false), 3000);
    }
  };

  const handleMultiSubmit = () => {
    if (userSelection.length === 0) return;

    const correct = currentQuestion.correctOptions || [currentQuestion.answer];
    const sortedUser = [...userSelection].sort();
    const sortedCorrect = [...correct].sort();

    const isCorrect = 
      sortedUser.length === sortedCorrect.length &&
      sortedUser.every((v, i) => v === sortedCorrect[i]);

    recordAnswer(currentQuestion.id, isCorrect);
    setShowAnswer(true);

    if (!isCorrect && currentQuestion.isSafetyCritical) {
      setIsGameOver(true);
      setTimeout(() => setIsGameOver(false), 3000);
    }
  };

  const isMultiQuestion = () => {
    return !!(currentQuestion.correctOptions && currentQuestion.correctOptions.length > 1);
  };

  const hasOptions = currentQuestion.options && currentQuestion.options.length > 0;

  useEffect(() => {
    setShowAnswer(false);
    setUserSelection([]);
  }, [currentIndex, mode]);

  return (
    <div className="min-h-screen bg-gray-50 text-gray-900">
      {/* Header – bitte deinen ursprünglichen Header hier einsetzen */}
      <header className="bg-white shadow">
        <div className="max-w-7xl mx-auto py-4 px-4 sm:px-6 lg:px-8 flex justify-between items-center">
          <h1 className="text-2xl font-bold">Tf-Trainer</h1>
          <div className="flex gap-4">
            <select 
              value={mode} 
              onChange={e => setMode(e.target.value as Mode)}
              className="border rounded px-3 py-1"
            >
              <option value="LERNEN">Lernen</option>
              <option value="TESTEN">Testen</option>
            </select>
          </div>
        </div>
      </header>

      <main className="max-w-4xl mx-auto py-8 px-4">
        {currentQuestion && (
          <div className="bg-white rounded-lg shadow p-8">
            <h2 className="text-xl font-semibold mb-6">
              {currentQuestion.question}
            </h2>

            {mode === 'LERNEN' ? (
              <div className="prose max-w-none">
                <p>{currentQuestion.answer}</p>
                {currentQuestion.source && (
                  <p className="text-sm text-gray-500 mt-4">
                    Quelle: {currentQuestion.source}
                    {currentQuestion.sourceUrl && (
                      <a 
                        href={currentQuestion.sourceUrl} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="ml-2 text-blue-600 hover:underline"
                      >
                        <ExternalLink size={14} className="inline" />
                      </a>
                    )}
                  </p>
                )}
              </div>
            ) : (
              // TESTEN Modus
              <div className="space-y-6">
                {!showAnswer ? (
                  <>
                    {(hasOptions ? currentQuestion.options! : [currentQuestion.answer]).map((option, idx) => {
                      const isSelected = userSelection.includes(option);
                      const isMulti = isMultiQuestion();

                      return (
                        <button
                          key={idx}
                          onClick={() => {
                            if (isMulti) {
                              toggleOption(option);
                            } else {
                              handleSingleAnswer(option);
                            }
                          }}
                          className={`w-full text-left p-4 border rounded transition-colors ${
                            isSelected 
                              ? 'bg-blue-100 border-blue-500' 
                              : 'hover:bg-gray-100 border-gray-300'
                          }`}
                        >
                          {isMulti && (
                            <span className={`inline-block w-5 h-5 mr-3 border rounded flex items-center justify-center ${
                              isSelected ? 'bg-blue-600 border-blue-600 text-white' : 'border-gray-400'
                            }`}>
                              {isSelected && <Check size={16} />}
                            </span>
                          )}
                          {option}
                        </button>
                      );
                    })}

                    {isMultiQuestion() && (
                      <div className="pt-4">
                        <button
                          onClick={handleMultiSubmit}
                          disabled={userSelection.length === 0}
                          className="w-full bg-blue-600 text-white py-3 rounded font-medium disabled:opacity-50 disabled:cursor-not-allowed"
                        >
                          Prüfen ({userSelection.length} ausgewählt)
                        </button>
                      </div>
                    )}
                  </>
                ) : (
                  <div className="space-y-4">
                    {(hasOptions ? currentQuestion.options! : [currentQuestion.answer]).map((option, idx) => {
                      const correctOptions = currentQuestion.correctOptions || [currentQuestion.answer];
                      const isCorrect = correctOptions.includes(option);
                      const isSelected = userSelection.includes(option);

                      let bg = 'bg-gray-50 border-gray-200';
                      let text = 'text-gray-900';
                      if (isCorrect) {
                        bg = 'bg-green-50 border-green-500';
                        text = 'text-green-800';
                      } else if (isSelected) {
                        bg = 'bg-red-50 border-red-500';
                        text = 'text-red-800';
                      }

                      return (
                        <div
                          key={idx}
                          className={`p-4 border rounded ${bg} ${text} flex justify-between items-center`}
                        >
                          <span>{option}</span>
                          {isCorrect && <CheckCircle2 className="text-green-600" />}
                          {isSelected && !isCorrect && <XCircle className="text-red-600" />}
                        </div>
                      );
                    })}
                  </div>
                )}
              </div>
            )}
          </div>
        )}

        {/* Navigation */}
        {mode === 'TESTEN' && !showAnswer && !isGameOver && (
          <div className="flex justify-between mt-8">
            <button
              onClick={handlePrev}
              disabled={currentIndex === 0}
              className="px-6 py-3 bg-gray-200 rounded disabled:opacity-50"
            >
              <ChevronLeft className="inline mr-2" size={18} />
              Zurück
            </button>

            <button
              onClick={handleNext}
              disabled={currentIndex >= QUESTIONS.length - 1}
              className="px-6 py-3 bg-gray-200 rounded disabled:opacity-50"
            >
              Weiter
              <ChevronRight className="inline ml-2" size={18} />
            </button>
          </div>
        )}
      </main>
    </div>
  );
}