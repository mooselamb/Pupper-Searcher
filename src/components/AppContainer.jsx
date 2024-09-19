import React from 'react';

function AppContainer({ children }) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-warm-light via-warm to-warm-dark">
      {children}
    </div>
  );
}

export default AppContainer;