export type CountdownValue = {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
  completed: boolean;
};

const SECOND = 1_000;
const MINUTE = 60 * SECOND;
const HOUR = 60 * MINUTE;
const DAY = 24 * HOUR;

export function getCountdown(target: Date, now = new Date()): CountdownValue {
  const difference = Math.max(0, target.getTime() - now.getTime());

  return {
    days: Math.floor(difference / DAY),
    hours: Math.floor((difference % DAY) / HOUR),
    minutes: Math.floor((difference % HOUR) / MINUTE),
    seconds: Math.floor((difference % MINUTE) / SECOND),
    completed: difference === 0,
  };
}
