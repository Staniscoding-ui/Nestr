import ActivityCard from "./ActivityCard";

function ActivityList({ activities, onComplete }) {
  if (activities.length === 0) {
    return (
      <p className="muted">
        No activities logged yet.
      </p>
    );
  }

  return (
    <ul className="list">
      {activities.map((activity) => (
        <li key={activity.id}>
          <ActivityCard
            activity={activity}
            onComplete={onComplete}
          />
        </li>
      ))}
    </ul>
  );
}

export default ActivityList;

