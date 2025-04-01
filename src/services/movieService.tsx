"use server";

import axios from "axios";
import React from "react";

export async function getAllMovies() {
  try {
    const res = await axios.get(`${process.env.API_URL_WITH_KEY}`);
    // const result = res.data.json();
    return res.data;
  } catch (error) {
    console.log("error fetching movies" + error);
    return { data: [] };
  }
}
