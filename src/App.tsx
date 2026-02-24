import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, AlertCircle, BookOpen, CheckCircle, Check, XCircle } from 'lucide-react';
import { QUESTIONS } from './data/questions'; // ← NEU: echte Datenquelle

interface Question {
  id: string;
  theme: string;
  question: string;
  answer: string;
  options?: string[];
  correctOptions?: string[];       // ← NEU: für Multi-Correct
  isSafetyCritical?: boolean;
  source?: string;
  sourceUrl?: string;
}

interface Progress {
  totalAnswered: number;
  answeredCorrectly: string[];
  answeredIncorrectly: string[];
}

const App: React.FC = () => {
  const [mode, setMode] = useState<'LERNEN' | 'TESTEN' | 'PRÜFUNG'>('LERNEN');
  const [theme, setTheme] = useState<string>('Alle');
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [userSelection, setUserSelection] = useState<string[]>([]); // ← NEU: Array statt String
  const [showAnswer, setShowAnswer] = useState<boolean>(false);
  const [progress, setProgress] = useState<Progress>({
    totalAnswered: 0,
    answeredCorrectly: [],
    answeredIncorrectly: [],
  });
  const [isGameOver, setIsGameOver] = useState<boolean>(false);

  // Fragen filtern
  const filteredQuestions = QUESTIONS.filter(
    (q) => theme === 'Alle' || q.theme === theme
  );

  const currentQuestion = filteredQuestions[currentIndex];

  const themes = ['Alle', ...new Set(QUESTIONS.map((q) => q.theme))];

  const startSession = () => {
    setCurrentIndex(0);
    setUserSelection([]);
    setShowAnswer(false);
    setProgress({ totalAnswered: 0, answeredCorrectly: [], answeredIncorrectly: [] });
    setIsGameOver(false);
  };

  const nextQuestion = () => {
    if (currentIndex < filteredQuestions.length - 1) {
      setCurrentIndex((prev) => prev + 1);
      setUserSelection([]);
      setShowAnswer(false);
    }
  };

  const previousQuestion = () => {
    if (currentIndex > 0) {
      setCurrentIndex((prev) => prev - 1);
      setUserSelection([]);
      setShowAnswer(false);
    }
  };

  const toggleSelection = (option: string) => {
    setUserSelection((prev) =>
      prev.includes(option)
        ? prev.filter((o) => o !== option)
        : [...prev, option]
    );
  };

  const submitAnswer = () => {
    if (!currentQuestion || userSelection.length === 0) return;

    const correctOptions = currentQuestion.correctOptions || [currentQuestion.answer];
    const isCorrect =
      userSelection.length === correctOptions.length &&
      userSelection.every((opt) => correctOptions.includes(opt)) &&
      correctOptions.every((opt) => userSelection.includes(opt));

    setShowAnswer(true);

    setProgress((prev) => ({
      ...prev,
      totalAnswered: prev.totalAnswered + 1,
      answeredCorrectly: isCorrect
        ? [...prev.answeredCorrectly, currentQuestion.id]
        : prev.answeredCorrectly,
      answeredIncorrectly: !isCorrect
        ? [...prev.answeredIncorrectly, currentQuestion.id]
        : prev.answeredIncorrectly,
    }));

    if (mode === 'PRÜFUNG' && currentQuestion.isSafetyCritical && !isCorrect) {
      setIsGameOver(true);
    }
  };

  const getProgressPercentage = () => {
    if (progress.totalAnswered === 0) return 0;
    return Math.round(
      (progress.answeredCorrectly.length / progress.totalAnswered) * 100
    );
  };

  useEffect(() => {
    startSession();
  }, [mode, theme]);

  if (!currentQuestion) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
        <div className="bg-white rounded-2xl shadow-xl p-8 max-w-md w-full text-center">
          <AlertCircle className="w-16 h-16 text-yellow-500 mx-auto mb-4" />
          <h2 className="text-2xl font-bold mb-2">Keine Fragen gefunden</h2>
          <p className="text-gray-600 mb-6">
            Versuche einen anderen Themenbereich oder lade neue Fragen hoch.
          </p>
          <button
            onClick={() => setTheme('Alle')}
            className="px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition"
          >
            Alle Themen anzeigen
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50">
      {/* Header */}
      <header className="bg-white border-b border-gray-200 sticky top-0 z-10">
        <div className="max-w-5xl mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <BookOpen className="w-8 h-8 text-blue-600" />
            <h1 className="text-xl font-bold text-gray-800">Tf-Trainer</h1>
          </div>

          <div className="flex items-center gap-4">
            <select
              value={theme}
              onChange={(e) => setTheme(e.target.value)}
              className="px-3 py-2 bg-white border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              {themes.map((t) => (
                <option key={t} value={t}>
                  {t}
                </option>
              ))}
            </select>

            <select
              value={mode}
              onChange={(e) =>
                setMode(e.target.value as 'LERNEN' | 'TESTEN' | 'PRÜFUNG')
              }
              className="px-3 py-2 bg-white border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="LERNEN">Lernen</option>
              <option value="TESTEN">Testen</option>
              <option value="PRÜFUNG">Prüfung</option>
            </select>
          </div>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-4 py-8">
        {/* Progress Bar */}
        <div className="mb-8">
          <div className="flex justify-between text-sm text-gray-600 mb-2">
            <span>
              Frage {currentIndex + 1} von {filteredQuestions.length}
            </span>
            <span>{getProgressPercentage()}% richtig</span>
          </div>
          <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
            <div
              className="h-full bg-gradient-to-r from-blue-500 to-indigo-600 transition-all duration-500"
              style={{ width: `${getProgressPercentage()}%` }}
            />
          </div>
        </div>

        {/* Game Over Screen */}
        {isGameOver && mode === 'PRÜFUNG' ? (
          <div className="bg-white rounded-2xl shadow-xl p-8 text-center">
            <AlertCircle className="w-20 h-20 text-red-500 mx-auto mb-6" />
            <h2 className="text-3xl font-bold text-red-600 mb-4">Prüfung nicht bestanden!</h2>
            <p className="text-lg text-gray-700 mb-6">
              Du hast eine sicherheitskritische Frage falsch beantwortet.
            </p>
            <button
              onClick={startSession}
              className="px-8 py-4 bg-red-600 text-white rounded-xl hover:bg-red-700 transition text-lg font-medium"
            >
              Neuer Versuch
            </button>
          </div>
        ) : (
          <div className="bg-white rounded-2xl shadow-xl p-8 mb-8">
            {/* Frage */}
            <h2 className="text-2xl font-bold text-gray-800 mb-6 leading-tight">
              {currentQuestion.question}
            </h2>

            {/* Antwortbereich */}
            {!showAnswer ? (
              <>
                {(currentQuestion.options || [currentQuestion.answer]).map((option, i) => (
                  <button
                    key={i}
                    onClick={() => toggleSelection(option)}
                    className={`w-full text-left px-6 py-4 mb-3 rounded-xl border transition-all text-base font-medium flex items-start gap-4 ${
                      userSelection.includes(option)
                        ? 'border-blue-500 bg-blue-50 ring-2 ring-blue-200'
                        : 'border-gray-200 hover:border-gray-300 hover:bg-gray-50'
                    }`}
                  >
                    <div
                      className={`mt-1 w-6 h-6 flex-shrink-0 border-2 rounded-md flex items-center justify-center transition-colors ${
                        userSelection.includes(option)
                          ? 'bg-blue-500 border-blue-500'
                          : 'border-gray-400'
                      }`}
                    >
                      {userSelection.includes(option) && (
                        <Check className="w-4 h-4 text-white" />
                      )}
                    </div>
                    <span className="flex-1">{option}</span>
                  </button>
                ))}

                <button
                  onClick={submitAnswer}
                  disabled={userSelection.length === 0}
                  className="mt-8 w-full py-4 bg-blue-600 text-white rounded-xl font-medium hover:bg-blue-700 disabled:bg-gray-300 disabled:cursor-not-allowed transition-all text-lg flex items-center justify-center gap-2 shadow-md"
                >
                  Antwort abgeben
                  {userSelection.length > 0 && ` (${userSelection.length} ausgewählt)`}
                </button>
              </>
            ) : (
              <>
                <div className="space-y-4 mb-8">
                  {(currentQuestion.options || [currentQuestion.answer]).map((option, i) => {
                    const correctOptions = currentQuestion.correctOptions || [currentQuestion.answer];
                    const isCorrect = correctOptions.includes(option);
                    const isSelected = userSelection.includes(option);

                    let bg = 'bg-gray-50 border-gray-200';
                    let text = 'text-gray-800';
                    let icon = null;

                    if (isCorrect) {
                      bg = 'bg-emerald-50 border-emerald-500';
                      text = 'text-emerald-800';
                      icon = <CheckCircle className="w-6 h-6 text-emerald-600" />;
                    } else if (isSelected) {
                      bg = 'bg-red-50 border-red-500';
                      text = 'text-red-800';
                      icon = <XCircle className="w-6 h-6 text-red-600" />;
                    }

                    return (
                      <div
                        key={i}
                        className={`px-6 py-4 rounded-xl border ${bg} flex items-center justify-between gap-4`}
                      >
                        <span className={`flex-1 ${text}`}>{option}</span>
                        {icon}
                      </div>
                    );
                  })}
                </div>

                <div className="flex flex-col sm:flex-row gap-4">
                  <button
                    onClick={() => {
                      setShowAnswer(false);
                      setUserSelection([]);
                    }}
                    className="flex-1 py-4 bg-gray-200 text-gray-800 rounded-xl hover:bg-gray-300 transition font-medium"
                  >
                    Nochmal versuchen
                  </button>

                  <button
                    onClick={nextQuestion}
                    disabled={currentIndex === filteredQuestions.length - 1}
                    className="flex-1 py-4 bg-indigo-600 text-white rounded-xl hover:bg-indigo-700 transition font-medium disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                  >
                    Nächste Frage
                    <ChevronRight className="w-5 h-5" />
                  </button>
                </div>
              </>
            )}
          </div>
        )}

        {/* Navigation */}
        {!isGameOver && (
          <div className="flex justify-between items-center">
            <button
              onClick={previousQuestion}
              disabled={currentIndex === 0}
              className="flex items-center gap-2 px-6 py-3 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed transition"
            >
              <ChevronLeft className="w-5 h-5" />
              Zurück
            </button>

            <div className="text-sm text-gray-500">
              {progress.totalAnswered} beantwortet • {progress.answeredCorrectly.length} richtig
            </div>

            <button
              onClick={nextQuestion}
              disabled={currentIndex === filteredQuestions.length - 1 || !showAnswer}
              className="flex items-center gap-2 px-6 py-3 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed transition"
            >
              Weiter
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        )}
      </main>

      {/* Footer */}
      <footer className="bg-white border-t border-gray-200 mt-auto py-6">
        <div className="max-w-4xl mx-auto px-4 text-center text-sm text-gray-500">
          Triebfahrzeugführer-Prüfungsvorbereitung • Basierend auf EBO, Ril 408 & TfV Anlage 5
        </div>
      </footer>
    </div>
  );
};

export default App;