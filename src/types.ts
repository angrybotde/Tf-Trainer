/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export enum QuestionType {
  FREE_TEXT = 'FREE_TEXT',
  MULTIPLE_CHOICE = 'MULTIPLE_CHOICE',
}

export interface Question {
  id: string;
  theme: string;
  question: string;
  answer: string;
  options?: string[]; // For Multiple Choice
  isSafetyCritical: boolean;
  source: string;
  sourceUrl?: string;
}

export interface UserProgress {
  answeredCorrectly: string[]; // IDs of questions
  answeredIncorrectly: string[]; // IDs of questions
  lastAttempted: Record<string, number>; // ID -> timestamp
}

export interface Theme {
  id: string;
  name: string;
  description: string;
}
