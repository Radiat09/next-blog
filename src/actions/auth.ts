"use server";
import { FieldValues } from "react-hook-form";

export const register = async (data: FieldValues) => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/user`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });

  if (!res.ok) {
    console.log("User registration failed", res);
    // throw new Error(`Registration failed: ${res.statusText}`);
  }

  // Parse the response JSON
  const result = await res.json();
  return result;
};

export const login = async (data: FieldValues) => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/auth/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });

  if (!res.ok) {
    console.log("User Login failed", res);
    // throw new Error(`Login failed: ${res.statusText}`);
  }

  const result = await res.json();
  return result;
};
