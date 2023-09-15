import { Habit } from "@/app/types/habit.type";
import Image from "next/image";
import gymIcon from "../../../../../public/gym.svg";

export default function HabitCard(props: { habit: Habit }) {
  return (
    <div className="card card-side bg-white rounded-xl text-neutral-content">
      <figure className="w-[20%] ml-2">
        <Image priority src={gymIcon} alt="Gym Icon" />
      </figure>
      <div className="card-body items-center text-center p-0">
        <h2 className="card-title text-accent">{props.habit.name}</h2>
        <p>{props.habit.description}</p>
      </div>
    </div>
  );
}
