import Card from "./Card";

function ActivityCard({ activity }) {
  return (
    <Card>
      <div className="row-head">
        <h3>{activity.activity}</h3>

        <small className="muted">
          {activity.date}
        </small>
      </div>

      {activity.description && (
        <p>{activity.description}</p>
      )}
    </Card>
  );
}

export default ActivityCard;

