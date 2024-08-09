// plugins/canvasConfetti.client.ts
import confetti from 'canvas-confetti';

export default defineNuxtPlugin(() => {
  return {
    provide: {
      confetti
    }
  };
});
