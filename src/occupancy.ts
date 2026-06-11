export type OccupancyValue = {
  occupied: number;
  available: number;
  percentage: number;
};

export function getOccupancy(capacity: number, occupied: number): OccupancyValue {
  const safeCapacity = Math.max(0, Math.round(capacity));
  const safeOccupied = Math.min(
    safeCapacity,
    Math.max(0, Math.round(occupied)),
  );

  return {
    occupied: safeOccupied,
    available: safeCapacity - safeOccupied,
    percentage:
      safeCapacity === 0
        ? 0
        : Math.round((safeOccupied / safeCapacity) * 100),
  };
}
