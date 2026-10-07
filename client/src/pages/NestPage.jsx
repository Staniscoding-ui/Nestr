import Header from "../components/Header";
import Card from "../components/Card";
import Button from "../components/Button";

function NestPage({
  activityCount,
  onAddActivity,
}) {
  return (
    <>
      <Header
        title="My Nest"
        subtitle="Take care of your progress"
      />

      <section className="section">
        <Card title="Your Creature">
          <div className="creature-display">
            🥚
          </div>

          <p className="muted">
            Keep logging activities to help your
            creature grow.
          </p>
        </Card>
      </section>

      <section className="section">
        <Card title="Nest Progress">
          <p>
            You have logged {activityCount}{" "}
            {activityCount === 1
              ? "activity"
              : "activities"}.
          </p>

          <Button
            variant="accent"
            onClick={onAddActivity}
          >
            Log an Activity
          </Button>
        </Card>
      </section>
    </>
  );
}

export default NestPage;