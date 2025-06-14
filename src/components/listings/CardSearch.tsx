// src/components/CardSearch.tsx
import React, { memo, type ChangeEvent } from 'react';
import { Input } from '../ui/input';

interface CardSearchProps {
  prompt: string;
  onPromptChange: (value: string) => void;
}

const CardSearch: React.FC<CardSearchProps> = ({ prompt, onPromptChange }) => {
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    onPromptChange(e.target.value);
  };

  return (
    <Input
      type="search"
      value={prompt}
      onChange={handleChange}
      placeholder="Ask about a card (e.g., lounge access)"
      className="w-full p-2 border rounded"
    />
  );
};

export default memo(CardSearch);