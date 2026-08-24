"use client";

import { useEffect } from "react";
import { analyticsPromise } from "@/lib/firebase";

export function FirebaseAnalytics() {
  useEffect(() => {
    analyticsPromise.catch(() => null);
  }, []);

  return null;
}
