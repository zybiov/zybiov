import { NotFoundClientPage } from "./not-found-client";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "404 - Page Not Found | Zybiov Multi-Activities Limited",
  description: "The requested page could not be found on Zybiov Multi-Activities Limited.",
  robots: {
    index: false,
    follow: false,
  },
};

export default function NotFound() {
  return <NotFoundClientPage />;
}
