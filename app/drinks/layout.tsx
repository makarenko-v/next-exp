import React from 'react';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="max-w-xl">
      <div className="mockup-code mb-10">
        <pre data-prefix="$">
          <code>npx create-next-app@latest</code>
        </pre>
      </div>
      {children}
    </div>
  );
}
