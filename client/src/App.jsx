import { useEffect, useState } from "react";
import BottomNav from "./components/BottomNav";

import HomePage from "./pages/HomePage";
import NestPage from "./pages/NestPage";
import AddActivityPage from "./pages/AddActivityPage";
import PenPage from "./pages/PenPage";

import {
  listActivities,
  createActivity,
  updateActivity,
} from "./api/httpApi";

const CREATURE_COUNT = 48;

function getRandomCreature() {
  return (
    Math.floor(
      Math.random() * CREATURE_COUNT
    ) + 1
  );
}

function App() {
  const [activePage, setActivePage] =
    useState("home");

  const [activities, setActivities] =
    useState([]);

  const [loading, setLoading] =
    useState(true);

  const [error, setError] =
    useState("");

  const [formData, setFormData] =
    useState({
      activity: "",
      description: "",
    });

  useEffect(() => {
    async function loadActivities() {
      try {
        setLoading(true);
        setError("");

        const data =
          await listActivities();

        setActivities(data);
      } catch (error) {
        console.error(
          "Unable to load activities:",
          error
        );

        setError(
          "Unable to connect to the Nestr server."
        );
      } finally {
        setLoading(false);
      }
    }

    loadActivities();
  }, []);

  function handleChange(event) {
    const {
      name,
      value,
    } = event.target;

    setFormData((current) => ({
      ...current,
      [name]: value,
    }));
  }

  async function handleComplete(activityId) {
    const activity =
      activities.find(
        (item) =>
          item.id === activityId
      );

    if (!activity) return;

    const completedActivity = {
      ...activity,
      status: "completed",
      creatureId:
        getRandomCreature(),
    };

    try {
      setError("");

      const updatedActivity =
        await updateActivity(
          activityId,
          completedActivity
        );

      setActivities((current) =>
        current.map((item) =>
          item.id === activityId
            ? updatedActivity
            : item
        )
      );
    } catch (error) {
      console.error(
        "Unable to complete activity:",
        error
      );

      setError(
        "Unable to complete the activity."
      );
    }
  }

  async function handleSubmit(event) {
    event.preventDefault();

    const activityName =
      formData.activity.trim();

    const description =
      formData.description.trim();

    if (!activityName) return;

    const newActivity = {
      activity: activityName,
      description,
      date: new Date()
        .toLocaleDateString(),
      status: "pending",
      creatureId: null,
    };

    try {
      setError("");

      const createdActivity =
        await createActivity(
          newActivity
        );

      setActivities((current) => [
        createdActivity,
        ...current,
      ]);

      setFormData({
        activity: "",
        description: "",
      });

      setActivePage("home");
    } catch (error) {
      console.error(
        "Unable to create activity:",
        error
      );

      setError(
        "Unable to save the activity."
      );
    }
  }

  function renderPage() {
    if (loading) {
      return (
        <p className="muted">
          Loading your activities...
        </p>
      );
    }

    switch (activePage) {
      case "nest":
        return (
          <NestPage
            activities={activities}
            onAddActivity={() =>
              setActivePage("add")
            }
            onComplete={handleComplete}
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

      case "pen":
        return (
          <PenPage
            activities={activities}
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
        {error && (
          <p className="error">
            {error}
          </p>
        )}

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
