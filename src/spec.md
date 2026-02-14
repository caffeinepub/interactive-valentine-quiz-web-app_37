# Specification

## Summary
**Goal:** Align Quiz Question 6 correctness with the latest quiz script by marking both “Ronaldo” and “You” as correct answers and ensuring correct scoring/celebration behavior for either selection.

**Planned changes:**
- Update Q6 in `frontend/src/features/quiz/quizData.ts` so options “Ronaldo” and “You” have `isCorrect: true`, while “Myself” and “Food” remain `isCorrect: false`.
- Ensure selecting either “Ronaldo” or “You” on Q6 is treated as a correct answer (increments score and triggers correct-answer celebration), while incorrect options do not.

**User-visible outcome:** On Question 6, choosing either “Ronaldo” or “You” counts as correct (score increases and celebration plays), while choosing “Myself” or “Food” remains incorrect; overall quiz scoring stays out of 7.
