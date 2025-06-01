"use client";

import { useRouter } from "next/navigation";
import { useEffect } from "react";
function NewsFeedPage() {
  const router = useRouter();

  useEffect(() => {
    const token = localStorage.getItem("access_token");
    if (!token) {
      router.replace("/");
      return;
    }
  }, [router]);

  return (
    <div>
      <h1>This will be a news feed for authenticated user only</h1>
    </div>
  );
}

export default NewsFeedPage;
