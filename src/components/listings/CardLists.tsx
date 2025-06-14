import React, { useState, memo } from 'react';
import { Button } from '../ui/button';
import CardSearch from './CardSearch';
import CardDisplay from './CardDisplay';
import { type Card } from '../../types/card';
import { type UseQueryResult } from '@tanstack/react-query';
import { useGetAllCards, useGetCardsByPrompt } from '@/lib/query';

const CardList: React.FC = () => {
  const [prompt, setPrompt] = useState<string>('');
  const [usePromptSearch, setUsePromptSearch] = useState<boolean>(false);

  const { data: allCards, error: allError, isLoading: loadingAll }: UseQueryResult<Card[], Error> =
    useGetAllCards(!usePromptSearch);
  const { data: promptCards, error: promptError, isLoading: loadingPrompt }: UseQueryResult<
    Card[],
    Error
  > = useGetCardsByPrompt({prompt, enabled: usePromptSearch && prompt.length > 0});

  const handleSearch = () => {
    if (prompt === '') {
      return;
    }
    setUsePromptSearch(true);
  };

  const handleResetSearch = () => {
    setUsePromptSearch(false);
    setPrompt('');
  };

  const cardsToDisplay = usePromptSearch ? promptCards : allCards;
  const isLoading = usePromptSearch ? loadingPrompt : loadingAll;
  const error = usePromptSearch ? promptError : allError;

  return (
    <div className="container mx-auto p-4">
      <div className="flex justify-between gap-2.5 mb-6">
        <CardSearch prompt={prompt} onPromptChange={setPrompt} />
        <Button onClick={handleSearch}>Search</Button>
        {usePromptSearch && (
          <Button onClick={handleResetSearch} variant="secondary">
            Reset Search
          </Button>
        )}
      </div>
      {error ? (
        <div className="text-red-500">Error: {error.message}</div>
      ) : isLoading ? (
        <div className="text-center">Loading...</div>
      ) : cardsToDisplay?.length ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {cardsToDisplay.map((card) => (
            <CardDisplay key={card._id} card={card} />
          ))}
        </div>
      ) : (
        <div className="text-center">No cards found</div>
      )}
    </div>
  );
};

export default memo(CardList);