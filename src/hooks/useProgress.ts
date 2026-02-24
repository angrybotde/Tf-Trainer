import { useState, useEffect } from 'react';
import { UserProgress } from '../types';

const STORAGE_KEY = 'tf_exam_progress';

const initialProgress: UserProgress = {
  answeredCorrectly: [],
  answeredIncorrectly: [],
  lastAttempted: {},
};

export function useProgress() {
  const [progress, setProgress] = useState<UserProgress>(() => {
    const saved = localStorage.getItem(STORAGE_KEY);
    return saved ? JSON.parse(saved) : initialProgress;
  });

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(progress));
  }, [progress]);

  const recordAnswer = (questionId: string, correct: boolean) => {
    setProgress(prev => {
      const newCorrect = correct 
        ? Array.from(new Set([...prev.answeredCorrectly, questionId]))
        : prev.answeredCorrectly.filter(id => id !== questionId);
      
      const newIncorrect = !correct
        ? Array.from(new Set([...prev.answeredIncorrectly, questionId]))
        : prev.answeredIncorrectly.filter(id => id !== questionId);

      return {
        ...prev,
        answeredCorrectly: newCorrect,
        answeredIncorrectly: newIncorrect,
        lastAttempted: {
          ...prev.lastAttempted,
          [questionId]: Date.now(),
        },
      };
    });
  };

  const getSuccessRate = () => {
    const total = progress.answeredCorrectly.length + progress.answeredIncorrectly.length;
    if (total === 0) return 0;
    return Math.round((progress.answeredCorrectly.length / total) * 100);
  };

  const resetProgress = () => {
    localStorage.removeItem(STORAGE_KEY);
    localStorage.clear();
    setProgress(initialProgress);
    setTimeout(() => {
      window.location.reload();
    }, 50);
  };

  return { progress, recordAnswer, getSuccessRate, resetProgress };
}
