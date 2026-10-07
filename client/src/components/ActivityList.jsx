import ActivityCard from "./ActivityCard.jsx";

function ActivityList({ activities }) {
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
          <ActivityCard activity={activity} />
        </li>
      ))}
    </ul>
  );
}

export default ActivityList;

