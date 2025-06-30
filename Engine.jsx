import React from 'react';
import XOPTerminal from '../components/XOPTerminal';
import MemoryLog from '../components/MemoryLog';

export default function Engine() {
  return (
    <div className="p-4 space-y-4">
      <XOPTerminal />
      <MemoryLog />
    </div>
  );
}