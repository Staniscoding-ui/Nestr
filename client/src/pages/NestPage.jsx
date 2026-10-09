import Header from "../components/Header";
import Card from "../components/Card";
import Button from "../components/Button";
import ActivityCard from "../components/ActivityCard";

function NestPage({
activities,
onAddActivity,
onComplete,
}) {
const pendingActivities = activities.filter(
(activity) => activity.status === "pending"
);

const pastActivities = activities.filter(
(activity) => activity.status === "completed"
);

return (
<> <Header
     title="My Nest"
     subtitle="Your activities are growing here"
   />

```
  <section className="section">
    <Card title="Active Eggs">
      {pendingActivities.length === 0 ? (
        <div className="empty-state">
          <div className="empty-egg">🥚</div>

          <h3>Your nest is empty</h3>

          <p className="muted">
            Create a task to place a new egg
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
        <div className="activity-list">
          {pendingActivities.map((activity) => (
            <ActivityCard
              key={activity.id}
              activity={activity}
              onComplete={onComplete}
            />
          ))}
        </div>
      )}
    </Card>
  </section>

  <section className="section">
    <Card title="Past Activities">
      {pastActivities.length === 0 ? (
        <div className="empty-state">
          <h3>No past activities yet</h3>

          <p className="muted">
            Completed activities will appear here.
          </p>
        </div>
      ) : (
        <div className="activity-list">
          {pastActivities.map((activity) => (
            <ActivityCard
              key={activity.id}
              activity={activity}
              onComplete={onComplete}
            />
          ))}
        </div>
      )}
    </Card>
  </section>
</>

);
}

export default NestPage;
