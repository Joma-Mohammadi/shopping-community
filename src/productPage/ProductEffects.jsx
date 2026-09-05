import { FaRegCircle } from "react-icons/fa";
import { MdOutlinePsychology } from "react-icons/md";
import { TbMoodHappy } from "react-icons/tb";

const icons = {
  effects: FaRegCircle,
  relieve: MdOutlinePsychology,
  aromas: TbMoodHappy,
};

export default function ProductEffects({ product }) {
  const EffectsIcon = icons.effects;
  const RelieveIcon = icons.relieve;
  const AromasIcon = icons.aromas;

  return (
    <div className="rounded-xl border border-gray-100 px-5 py-4">

      <div className="space-y-6">

        <div className="flex gap-4">
          <div className="flex h-7 w-7 shrink-0 items-center justify-center text-gray-400">
            <EffectsIcon className="text-xl" />
          </div>

          <div>
            <p className="text-[10px] uppercase tracking-[0.2em] text-gray-400">
              Effects
            </p>

            <p className="mt-2 text-sm leading-5 text-[#20242d]">
              {product.effects.join(", ")}
            </p>
          </div>
        </div>


        <div className="flex gap-4">
          <div className="flex h-7 w-7 shrink-0 items-center justify-center text-gray-400">
            <RelieveIcon className="text-2xl" />
          </div>

          <div>
            <p className="text-[10px] uppercase tracking-[0.2em] text-gray-400">
              May Relieve
            </p>

            <p className="mt-2 text-sm leading-5 text-[#20242d]">
              {product.mayRelieve.join(", ")}
            </p>
          </div>
        </div>


        <div className="flex gap-4">
          <div className="flex h-7 w-7 shrink-0 items-center justify-center text-gray-400">
            <AromasIcon className="text-2xl" />
          </div>

          <div>
            <p className="text-[10px] uppercase tracking-[0.2em] text-gray-400">
              Aromas
            </p>

            <p className="mt-2 text-sm leading-5 text-[#20242d]">
              {product.aromas.join(", ")}
            </p>
          </div>
        </div>

      </div>

    </div>
  );
}