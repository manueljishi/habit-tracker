import { Habit } from "../../types/habit.type";
import { NextRequest, NextResponse } from "next/server";

const habits: Habit[] = [
  {
    name: "Gym",
    goal: 80,
    icon: "XXX",
    description: "Entrenar",
  },
  {
    name: "Eating",
    goal: 80,
    icon: "XXX",
    description: "Comer lo que toca",
  },
  {
    name: "Sleep",
    goal: 80,
    icon: "XXX",
    description: "Sleep 7 hours",
  },
];
export async function GET(req: Request) {
  return new NextResponse(JSON.stringify(habits), { status: 200 });
}
