import type { QuizSession } from './types';
import { session001 } from './sessions/session-001';
import { session002 } from './sessions/session-002';
import { session003 } from './sessions/session-003';
import { session029 } from './sessions/session-029';
import { session030 } from './sessions/session-030';
import { session031 } from './sessions/session-031';
import { session055 } from './sessions/session-055';
import { session056 } from './sessions/session-056';
import { session057 } from './sessions/session-057';

export const allSessions: QuizSession[] = [
  session001,
  session002,
  session003,
  session029,
  session030,
  session031,
  session055,
  session056,
  session057,
];

export * from './types';
