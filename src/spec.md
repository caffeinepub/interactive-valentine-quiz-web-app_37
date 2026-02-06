# Specification

## Summary
**Goal:** Build a shareable, mobile-first interactive Valentine-themed web quiz experience with a romantic UI, a 7-question MCQ flow, results screens, and a playful “Valentine trick” Yes/No interaction.

**Planned changes:**
- Create a consistent romantic UI system (pastel gradients, rounded cards, subtle shadows), smooth transitions, gentle animations, micro-interactions, and a floating-hearts background across all screens.
- Implement a Welcome screen with exact provided title/subtitle and a “Start the Love Test →” CTA that resets and begins the quiz.
- Implement a 7-question, one-question-per-screen MCQ quiz with progress indicator, option hover/press animations, correct-answer celebration (hearts/confetti), and a special sparkle animation for Q4 option “Yes I will😘”.
- Hardcode the quiz questions/options and scoring logic exactly as specified, including multi-correct logic, producing a final score from 0–7.
- Implement results flow:
  - For score 7/7: winning screen with the exact text, a romantic meme image, a date-coupon block, and “Redeem My Date 💌” button that reveals the provided booking message.
  - For score < 5: teasing screen with exact text + teasing meme image, then a separate punishment page with the provided punishment text, then proceed to the Valentine Yes/No step.
- Implement the “Will you still be my Valentine? 💘” step with the Valentine trick: repeated “No 😈” clicks scale Yes up / No down and change prompt text after the 1st and 2nd No; clicking “Yes 💖” shows the final celebration screen with exact text plus confetti/hearts/romantic animation.
- Add optional audio (background music and subtle SFX) with visible user controls, default OFF, and stoppable at any time.
- Add a “Copy Link” share action (with success/failure feedback) and ensure the entire experience works without login.
- Store and reference required generated result images as static assets under `frontend/public/assets/generated` (no backend image fetching).

**User-visible outcome:** Visitors can open a shareable link, start a romantic 7-question quiz, see animated feedback and themed results (including redeem flow), experience the playful Valentine Yes/No trick ending, and optionally enable/disable audio at any time.
