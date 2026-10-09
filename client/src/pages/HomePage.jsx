import Header from "../components/Header";
import Card from "../components/Card";
import Button from "../components/Button";
import ActivityList from "../components/ActivityList";
import CreaturePen from "../components/CreaturePen";

function HomePage({
  activities,
  onAddActivity,
  onComplete,
}) {
  const activeActivities =
    activities.filter(
      (activity) =>
        activity.status === "pending"
    );

  const hatchedCreatures =
    activities.filter(
      (activity) =>
        activity.status === "completed" &&
        activity.creatureId
    );

  return (
    <>
      <Header
        title="Nestr"
        subtitle="Your little world of progress"
      />

      <section className="home-hero">
        <div className="home-hero-content">
          <div>
            <span className="home-eyebrow">
              WELCOME BACK
            </span>

            <h2>Grow your Nestr</h2>

            <p>
              Complete activities, hatch eggs,
              and grow your collection.
            </p>
          </div>

          <Button
            variant="accent"
            onClick={onAddActivity}
          >
            + Create Task
          </Button>
        </div>
      </section>

      <section className="home-stats">
        <Card>
          <div className="home-stat">
            <span className="home-stat-icon">
              🥚
            </span>

            <div>
              <strong>
                {activeActivities.length}
              </strong>

              <span>Active Eggs</span>
            </div>
          </div>
        </Card>

        <Card>
          <div className="home-stat">
            <span className="home-stat-icon">
              🐾
            </span>

            <div>
              <strong>
                {hatchedCreatures.length}
              </strong>

              <span>Creatures</span>
            </div>
          </div>
        </Card>
      </section>

      <section className="section">
        <Card title="Your Creatures">
          <CreaturePen
            activities={activities}
          />
        </Card>
      </section>

      <section className="section">
        <Card title="Active Eggs">
          {activeActivities.length === 0 ? (
            <div className="home-empty">
              <div className="home-empty-icon">
                🥚
              </div>

              <h3>No active eggs</h3>

              <p className="muted">
                Create a task to place an egg
                in your nest.
              </p>

              <Button
                variant="accent"
                onClick={onAddActivity}
              >
                Create a Task
              </Button>
            </div>
          ) : (
            <ActivityList
              activities={activities}
              onComplete={onComplete}
            />
          )}
        </Card>
      </section>
    </>
  );
}

export default HomePage;

