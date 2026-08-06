"use client";

import { useEffect } from "react";
import { analyticsPromise } from "@/lib/firebase";

export function FirebaseAnalytics() {
  useEffect(() => {
    // Ensure Firebase Analytics is initialized on the client side
    analyticsPromise.then((analytics) => {
      if (analytics) {
        // Firebase analytics initialized successfully
      }
    }).catch((err) => {
      console.error("Firebase Analytics initialization error:", err);
    });
  }, []);

  return null;
}
