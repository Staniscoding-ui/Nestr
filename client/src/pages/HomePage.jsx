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
  return (
    <>
      <Header
        title="Nestr"
        subtitle="Turn your activities into progress"
      />

      <CreaturePen activities={activities} />
      
      <section className="section">
        <Card title="Welcome to Nestr">
          <p>
            Log your activities and watch your nest grow.
          </p>

          <Button
            variant="accent"
            onClick={onAddActivity}
          >
            Log an Activity
          </Button>
        </Card>
      </section>

      <section className="section">
        <Card title="Your Eggs">
          <ActivityList
            activities={activities}
            onComplete={onComplete}
          />
        </Card>
      </section>
    </>
  );
}

export default HomePage;

