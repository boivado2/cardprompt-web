import React, { useState, memo } from 'react';
import { Button } from '../ui/button';
import CardSearch from './CardSearch';
import CardDisplay from './CardDisplay';
import { type Card } from '../../types/card';
import { type UseQueryResult } from '@tanstack/react-query';
import { useGetAllCards, useGetCardsByPrompt } from '@/lib/query';
import { Skeleton } from '../ui/skeleton';

const CardList: React.FC = () => {
  const [prompt, setPrompt] = useState<string>('');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const { data: allCards, error: allError, isLoading: loadingAll }: UseQueryResult<Card[], Error> =
    useGetAllCards(searchQuery === '');
  const { data: promptCards, error: promptError, isLoading: loadingPrompt }: UseQueryResult<
    Card[],
    Error
  > = useGetCardsByPrompt({prompt: searchQuery, enabled: searchQuery.trim().length > 0});

  const handleSearch = () => {
    if (prompt.trim() === '') {
      setSearchQuery("")
      return;
    }
    setSearchQuery(prompt);
  };

  const handleResetSearch = () => {
    setSearchQuery("");
    setPrompt('');
  };

  const cardsToDisplay = searchQuery ? promptCards : allCards;
  console.log(cardsToDisplay)
  const isLoading = searchQuery ? loadingPrompt : loadingAll;
  const error = searchQuery ? promptError : allError;

  return (
    <div className="container mx-auto p-4 w-full">
      <div className="flex justify-between gap-2.5 mb-6 w-full">
        <CardSearch prompt={prompt} onPromptChange={setPrompt} />
        <Button onClick={handleSearch}>Search</Button>
        {searchQuery && (
          <Button onClick={handleResetSearch} variant="outline">
            Reset Search
          </Button>
        )}
      </div>
      {error ? (
        <div className="text-red-500">Error: {error.message}</div>
      ) : isLoading ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2.5 w-full">
            <Skeleton  className="w-full max-w-full h-[225px] rounded-xl"/>
            <Skeleton  className="w-full max-w-full h-[225px] rounded-xl"/>
            <Skeleton  className="w-full max-w-full h-[225px] rounded-xl"/>
            <Skeleton  className="w-full max-w-full h-[225px] rounded-xl"/>
        </div>
        
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