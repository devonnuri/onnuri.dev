'use client';
import React from 'react';

type Props = {
  start: string; // e.g. "2025.05.19"
  end: string; // e.g. "2027.02.18"
};

function parseYMD(input: string) {
  // Accepts 'YYYY.MM.DD' or 'YYYY-MM-DD' or 'YYYY/MM/DD'
  const parts = input.split(/[.\-/]/).map((p) => parseInt(p, 10));
  if (parts.length === 3 && parts.every((n) => !Number.isNaN(n))) {
    const [y, m, d] = parts;
    return new Date(y, m - 1, d);
  }
  const d = new Date(input);
  return isNaN(d.getTime()) ? new Date() : d;
}

export default function ProgressBar({ start, end }: Props) {
  const startDate = parseYMD(start);
  const endDate = parseYMD(end);
  const now = new Date();

  const total = endDate.getTime() - startDate.getTime();
  const elapsed = Math.min(
    Math.max(now.getTime() - startDate.getTime(), 0),
    Math.max(total, 0),
  );
  const percent = total > 0 ? Math.round((elapsed / total) * 100) : 0;
  const pct = Math.max(0, Math.min(100, percent));

  return (
    <div className="mt-1">
      <div className="w-full bg-gray-200 rounded-full h-2 overflow-hidden">
        <div
          className="h-2 bg-gray-500 transition-all duration-300"
          style={{ width: `${pct}%` }}
        />
      </div>
    </div>
  );
}
