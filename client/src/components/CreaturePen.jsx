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

function CreaturePen({ activities }) {
  const hatchedCreatures = activities.filter(
    (activity) =>
      activity.status === "completed" &&
      activity.creatureId
  );

  return (
    <div className="creature-pen">
      <div className="pen-header">
        <h2>Your Nest</h2>

        <span>
          {hatchedCreatures.length} creatures
        </span>
      </div>

      <div className="pen-area">
        {hatchedCreatures.length === 0 ? (
          <p className="muted pen-empty">
            Complete an activity to hatch your
            first creature.
          </p>
        ) : (
          hatchedCreatures.map((activity) => (
            <img
              key={activity.id}
              src={getCreatureImage(activity.creatureId)}
              alt="Your creature"
              className="pen-creature"
            />
          ))
        )}
      </div>
    </div>
  );
}

export default CreaturePen;