import { Sparkles } from "lucide-react";
import { HoverCard, HoverCardTrigger, HoverCardContent } from "./ui/hover-card";

interface HoverCardProps {
  title: string;
  summary: string;
}

const HoverCardUI = ({ title, summary }: HoverCardProps) => {
  if(summary === "") {
    return null
  }
  return (
    <HoverCard>
      <HoverCardTrigger>{title}</HoverCardTrigger>
      <HoverCardContent className=" flex flex-col gap-2.5 text-sm">
        {summary}
        <p className=' text-sm'>Note:  <span className=' text-sm'>This is an AI-generated summary created automatically when a card is added or updated</span></p>

      </HoverCardContent>
      <Sparkles className="w-4 h-4 text-blue-500" />
    </HoverCard>
  );
};

export default HoverCardUI;