import Header from "../components/Header";
import Card from "../components/Card";
import Button from "../components/Button";
import ActivityList from "../components/ActivityList";

function HomePage({ activities, onAddActivity }) {
  return (
    <>
      <Header
        title="Nestr"
        subtitle="Turn your activities into progress"
      />

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
        <Card title="Recent Activity">
          <ActivityList activities={activities} />
        </Card>
      </section>
    </>
  );
}

export default HomePage;