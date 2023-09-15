import Image from "next/image";
import HabitsHome from "@components/habits/home/HabitsHome";

export default async function Home() {
  return (
    <div className="flex justify-center align-center flex-col">
      <h3 className="text-center pb-1">TUS OBJETIVOS</h3>
      <HabitsHome />
    </div>
  );
}
