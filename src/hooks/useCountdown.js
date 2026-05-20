import { useEffect } from 'react';

export function useCountdown() {
  useEffect(() => {
    const timers = document.querySelectorAll('.countdown-timer');
    const intervals = [];

    timers.forEach((timer) => {
      if (timer.dataset.started) return;
      timer.dataset.started = 'true';
      let totalSeconds = 24 * 60 * 60;

      const updateTimer = () => {
        const hours = String(Math.floor(totalSeconds / 3600)).padStart(2, '0');
        const minutes = String(Math.floor((totalSeconds % 3600) / 60)).padStart(2, '0');
        const seconds = String(totalSeconds % 60).padStart(2, '0');
        timer.textContent = `${hours}:${minutes}:${seconds}`;
        totalSeconds -= 1;
        if (totalSeconds < 0) totalSeconds = 24 * 60 * 60;
      };

      updateTimer();
      intervals.push(setInterval(updateTimer, 1000));
    });

    return () => intervals.forEach(clearInterval);
  }, []);
}
