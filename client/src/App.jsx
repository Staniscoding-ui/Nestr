import { useEffect, useState } from "react";
import BottomNav from "./components/BottomNav";

import HomePage from "./pages/HomePage";
import NestPage from "./pages/NestPage";
import AddActivityPage from "./pages/AddActivityPage";
import ProfilePage from "./pages/ProfilePage";

const STORAGE_KEY = "nestr-activities";
const CREATURE_COUNT = 48;
function loadActivities() {
  try {
    const savedActivities =
      localStorage.getItem(STORAGE_KEY);

    if (!savedActivities) {
      return [];
    }

    const parsedActivities =
      JSON.parse(savedActivities);

    if (!Array.isArray(parsedActivities)) {
      return [];
    }

    return parsedActivities.filter((activity) => {
      return (
        activity &&
        typeof activity === "object" &&
        typeof activity.id === "number" &&
        typeof activity.activity === "string" &&
        typeof activity.description === "string" &&
        typeof activity.date === "string"
      );
    });
  } catch {
    return [];
  }
}

function getRandomCreature() {
  return Math.floor(
    Math.random() * CREATURE_COUNT
  ) + 1;
}
function App() {
  const [activePage, setActivePage] = useState("home");

  const [activities, setActivities] = useState(
    loadActivities
  );

  const [formData, setFormData] = useState({
    activity: "",
    description: "",
  });

  useEffect(() => {
    try {
      localStorage.setItem(
        STORAGE_KEY,
        JSON.stringify(activities)
      );
    } catch (error) {
      console.error(
        "Unable to save activities:",
        error
      );
    }
  }, [activities]);

  function handleChange(event) {
    const { name, value } = event.target;

    setFormData((current) => ({
      ...current,
      [name]: value,
    }));
  }

  function handleComplete(activityId) {
  setActivities((current) =>
    current.map((activity) =>
      activity.id === activityId
        ? {
            ...activity,
            status: "completed",
            creatureId: getRandomCreature(),
          }
        : activity
    )
  );
}

  function handleSubmit(event) {
    event.preventDefault();

    const activityName = formData.activity.trim();
    const description = formData.description.trim();

    if (!activityName) {
      return;
    }

    const newActivity = {
      id: Date.now(),
      activity: activityName,
      description,
      date: new Date().toLocaleDateString(),
      status: "pending",
    };

    setActivities((current) => [
      newActivity,
      ...current,
    ]);

    setFormData({
      activity: "",
      description: "",
    });

    setActivePage("home");
  }

  function renderPage() {
    switch (activePage) {
      case "nest":
        return (
          <NestPage
            activityCount={activities.length}
            onAddActivity={() =>
              setActivePage("add")
            }
          />
        );

      case "add":
        return (
          <AddActivityPage
            formData={formData}
            onChange={handleChange}
            onSubmit={handleSubmit}
          />
        );

      case "profile":
        return (
          <ProfilePage
            activityCount={activities.length}
          />
        );

      case "home":
      default:
        return (
          <HomePage
            activities={activities}
            onAddActivity={() =>
              setActivePage("add")
            }
            onComplete={handleComplete}
          />
        );
    }
  }

  return (
    <div className="page">
      <main className="page-content">
        {renderPage()}
      </main>

      <BottomNav
        activePage={activePage}
        onNavigate={setActivePage}
      />
    </div>
  );
}

export default App;