'use client';

export default function GlobalLoading() {
  return (
    <div className="min-h-screen bg-black flex items-center justify-center">
      <div className="animate-spin h-12 w-12 border-t-2 border-b-2 border-orange-600"></div>
    </div>
  );
}
