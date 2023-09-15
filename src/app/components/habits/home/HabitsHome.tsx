"use client";

import { Habit } from "@/app/types/habit.type";
import { useEffect, useState } from "react";
import HabitCard from "./HabitCard";

export default function HabitsHome() {
  const [habits, setHabits] = useState([]);
  useEffect(() => {
    fetch(`/api/habits`, {
      method: "GET",
    }).then((res) => {
      res.json().then((habitsData) => {
        console.log(habitsData);
        setHabits(habitsData);
      });
    });
  }, []);
  return (
    <>
      {habits &&
        habits.map((h: Habit, idx: number) => {
          return (
            <>
              <HabitCard habit={h} key={`${h.name}-${idx}`} />
              <div className="divider"></div>
            </>
          );
        })}
    </>
  );
}
