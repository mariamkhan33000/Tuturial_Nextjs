"use client"
import EventsFunctionsState from "@/Components/EventsFunctionsState";
import styles from "./page.module.css";

export default function Home() {
  return (
    <>
    <main className="flex flex-col items-center justify-center my-5">
      <h2>Mohsin</h2>
      <EventsFunctionsState className= "my-7"/>
    </main>
    </>
  );
}
