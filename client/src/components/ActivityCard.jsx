import Card from "./Card";
import Egg from "../assets/creatures/egg_base.png";

const creatures = import.meta.glob(
  "../assets/creatures/Icon*.png",
  {
    eager: true,
    import: "default",
  }
);

function getCreatureImage(creatureId) {
  return creatures[
    `../assets/creatures/Icon${creatureId}.png`
  ];
}

function ActivityCard({
  activity,
  onComplete,
}) {
  const completed =
    activity.status === "completed";

  const creatureImage = completed
    ? getCreatureImage(
        activity.creatureId
      )
    : Egg;

  return (
    <Card
      className={`activity-card ${
        completed ? "completed" : ""
      }`}
    >
      <div className="activity-card-content">
        <div className="egg-container">
          <img
            src={creatureImage}
            alt={
              completed
                ? "Hatched creature"
                : "Activity egg"
            }
            className="activity-egg"
          />
        </div>

        <div className="activity-info">
          <div className="activity-title-row">
            <div>
              <span className="activity-status">
                {completed
                  ? "HATCHED"
                  : "ACTIVE EGG"}
              </span>

              <h3>
                {activity.activity}
              </h3>
            </div>

            <small className="muted">
              {activity.date}
            </small>
          </div>

          {activity.description && (
            <p>
              {activity.description}
            </p>
          )}

          {!completed && (
            <button
              type="button"
              className="button button-accent"
              onClick={() =>
                onComplete(activity.id)
              }
            >
              Complete & Hatch
            </button>
          )}

          {completed && (
            <p className="hatched-text">
              Your creature has hatched!
            </p>
          )}
        </div>
      </div>
    </Card>
  );
}

export default ActivityCard;

