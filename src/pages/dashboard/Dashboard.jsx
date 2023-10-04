import React from "react";
import { useSelector } from "react-redux";

export default function Dashboard() {
  const data = useSelector((state) => state.food);
  console.log(data);
  return <div>Dashboard</div>;
}
