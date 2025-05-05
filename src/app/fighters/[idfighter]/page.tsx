import FighterInfo from "@/components/FighterInfo";
import { getFighter } from "@/data/FightersRepository";

export default async function FighterPage({
  params,
}: {
  params: { idfighter: string };
}) {
  const { idfighter } = params;

  const fighter = await getFighter(Number.parseInt(idfighter));
  return (
    <>
      <FighterInfo fighter={fighter} key={fighter.id} />
    </>
  );
}
