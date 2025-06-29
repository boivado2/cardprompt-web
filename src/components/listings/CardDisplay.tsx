// src/components/CardDisplay.tsx
import React, { memo } from 'react';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '../ui/card';
import { type Card as CardType } from '../../types/card';
import HoverCardUI from '../HoverCardUI';
import { Sparkles } from 'lucide-react';

interface CardDisplayProps {
  card: CardType;
}

const CardDisplay: React.FC<CardDisplayProps> = ({ card }) => {
  return (
    <Card className="w-full max-w-full">
      <CardHeader className="">
        <div className='items-start text-left flex justify-between'>
          <div className="flex flex-col gap-1.5">
            <div className="flex gap-1 items-center">
              <CardDescription className="text-sm">Bank:</CardDescription>
              <CardTitle className=' text-sm'>{card.bank}</CardTitle>
            </div>
            <div className="flex gap-1 items-center">
              <CardDescription className="text-sm">Card:</CardDescription>
              <CardTitle className=' text-sm'>{card.cardName}</CardTitle>
            </div>
            <div className="flex gap-1 items-center">
              <CardDescription className="text-sm">Card Type:</CardDescription>
              <CardTitle className=' text-sm'>{card.cardType}</CardTitle>
            </div>
            <div className="flex gap-1.5 items-center">
              <CardDescription>Joining Fee:</CardDescription>
              <CardTitle>{card.fees.joining}</CardTitle>
            </div>
          </div>

        <div className="flex flex-col gap-1.5 items-end">
          <div className="flex gap-1 items-center">
            <CardDescription className="text-sm">Annual Fee:</CardDescription>
            <CardTitle className=' text-sm'>{card.annualFee}</CardTitle>
          </div>
          <div className="flex gap-1 items-center">
            <CardDescription className="text-sm">Eligibility:</CardDescription>
            <CardTitle className=' text-sm'>{card.eligibility}</CardTitle>
          </div>
          <div className="flex gap-1 items-center">
            <CardDescription className="text-sm">Foreign Transaction Fee:</CardDescription>
            <CardTitle className=' text-sm'>{card.foreignTransactionFee}</CardTitle>
          </div>

          <div className="flex gap-1.5 items-center">
            <CardDescription>Renewal Fee:</CardDescription>
            <CardTitle>{card.fees.renewal}</CardTitle>
          </div>
        </div>

        </div>
        <div className="flex gap-1.5 items-center text-center justify-center mt-3.5">
            <CardDescription>Reward:</CardDescription>
            <CardTitle className=' text-xs'>{card.rewardsRate}</CardTitle>
        </div>
      </CardHeader>
      <CardContent>
        <div className="flex my-4 gap-1.5">


        </div>
        <div className="flex items-start flex-col">
          <CardTitle>Features:</CardTitle>
          <ul className="my-3 flex flex-col gap-2">
            {card.features.map((feature, index) => (
              <li key={`${card._id}-feature-${index}`} className="text-sm flex items-start gap-2.5">
                <span>-</span> {feature}
              </li>
            ))}
          </ul>
        </div>
        <div className="flex items-start flex-col">
          <CardTitle>Benefits:</CardTitle>
          <ul className="my-3 flex flex-col gap-2">
            {card.bestFor.map((benefit, index) => (
              <li key={`${card._id}-benefit-${index}`} className="text-sm flex items-start gap-2.5">
                <span>-</span> {benefit}
              </li>
            ))}
          </ul>
        </div>
        <div className='flex items-start cursor-pointer'>
          <HoverCardUI title='AI generated summary' summary={card.summary}/>
        </div>
      </CardContent>
    </Card>
  );
};

export default memo(CardDisplay);