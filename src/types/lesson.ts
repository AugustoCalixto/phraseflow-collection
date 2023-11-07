import { Question } from "./questions";

export interface Lesson {
  title: string;
  content: string;
  questions: Question[];
}