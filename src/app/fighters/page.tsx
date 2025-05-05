
import Fighter from "@/components/Fighter";
import { getFighters } from "@/data/FightersRepository";
import { FighterType } from "@/types/fighter";

export default async function Fighters() {
  const fighters = await getFighters();

  return (
    <div className="flex items-center justify-center flex-wrap">
      {fighters.map((fighter : FighterType) => (
          <Fighter fighter={fighter} key={fighter.id} />
      ))}
    </div>
  );
}
