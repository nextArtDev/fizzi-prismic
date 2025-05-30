import { IconType } from "react-icons";
import {
  LuCrown,
  LuDroplet,
  LuFlame,
  LuGem,
  LuTreePine,
  LuZap,
} from "react-icons/lu";

// Define specific literal types for scent profile and mood,
// independent of Prismic's Content type.
export type ScentProfileKey = "spicy" | "woody" | "fresh";
export type MoodKey = "bold" | "grounded" | "refreshing";

type AttributeData = {
  label: string;
  Icon: IconType;
};

const SCENT_PROFILES: Record<ScentProfileKey, AttributeData> = {
  spicy: { label: "Spicy & Smoky", Icon: LuFlame },
  woody: { label: "Woody & Herbal", Icon: LuTreePine },
  fresh: { label: "Fresh & Aquatic", Icon: LuDroplet },
};

const MOODS: Record<MoodKey, AttributeData> = {
  bold: { label: "Bold & Seductive", Icon: LuCrown },
  grounded: { label: "Grounded & Sophisticated", Icon: LuGem },
  refreshing: { label: "Refreshing & Invigorating", Icon: LuZap },
};

type FragranceAttributesProps = {
  scentProfile: ScentProfileKey; // Use the new independent type
  mood: MoodKey; // Use the new independent type
  className?: string;
};

export const FragranceAttributes = ({
  mood: providedMood,
  scentProfile: providedScentProfile,
  className,
}: FragranceAttributesProps) => {
  const scentProfile = SCENT_PROFILES[providedScentProfile];
  const mood = MOODS[providedMood];

  return (
    <div className={className}>
      <p className="mb-2 text-base font-semibold uppercase">Features</p>

      <div className="grid gap-2">
        <p className="flex items-center gap-2">
          <scentProfile.Icon className="size-6" />
          {scentProfile.label}
        </p>
        <p className="flex items-center gap-2">
          <mood.Icon className="size-6" />
          {mood.label}
        </p>
      </div>
    </div>
  );
};