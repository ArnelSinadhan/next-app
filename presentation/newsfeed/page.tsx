"use client";

import { Button } from "../../application/components/ui/button";
import { Card, CardContent } from "../../application/components/ui/card";

function NewsFeedPage() {
  const handleLogout = () => {
    // Implement your logout logic here
    console.log("Logging out...");
  };

  return (
    <div className="min-h-screen bg-gray-50 px-4 py-6 sm:px-8">
      {/* Top bar with logout */}
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">News Feed</h1>
        <Button variant="destructive" onClick={handleLogout}>
          Logout
        </Button>
      </div>

      {/* News Cards */}
      <div className="space-y-4">
        {[1, 2, 3].map((item) => (
          <Card
            key={item}
            className="shadow-md hover:shadow-lg transition-shadow"
          >
            <CardContent className="p-6">
              <h2 className="text-xl font-semibold mb-2">News Title #{item}</h2>
              <p className="text-gray-700">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
                ac vulputate eros, vel hendrerit tellus. Sed at ex nec metus
                feugiat tincidunt.
              </p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}

export default NewsFeedPage;
