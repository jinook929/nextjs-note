"use client";
import { useEffect, useState } from "react";
import styles from "./MeowArticle.module.scss";

export default function MeowArticle() {
  const [catText, setCatText] = useState("Loading...");

  useEffect(() => {
    fetch("https://meowfacts.herokuapp.com/", {
      next: { revalidate: 3 },
    })
      .then((res) => res.json())
      .then((data) => setCatText(data.data[0]));
  }, []);

  return <article className={styles.article}>{catText}</article>;
}
