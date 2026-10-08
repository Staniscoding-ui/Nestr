import Header from "../components/Header";
import Card from "../components/Card";
import Button from "../components/Button";
import Icon1 from "../assets/creatures/Icon1.png";

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
            <img
              src={Icon1}
              alt="Your creature"
              className="creature-image"
            />
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