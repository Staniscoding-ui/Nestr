import { useEffect, useState } from "react";

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

function createCreaturePosition() {
  return {
    x: Math.random() * 70 + 15,
    y: Math.random() * 45 + 30,
    direction: Math.random() > 0.5 ? 1 : -1,
    speed: 0.015 + Math.random() * 0.025,
    moving: true,
    pauseUntil: 0,
  };
}

function CreaturePen({ activities }) {
  const hatchedCreatures = activities.filter(
    (activity) =>
      activity.status === "completed" &&
      activity.creatureId
  );

  const [positions, setPositions] = useState({});

  useEffect(() => {
    setPositions((current) => {
      const next = { ...current };

      hatchedCreatures.forEach((activity) => {
        if (!next[activity.id]) {
          next[activity.id] =
            createCreaturePosition();
        }
      });

      Object.keys(next).forEach((id) => {
        if (
          !hatchedCreatures.some(
            (activity) =>
              activity.id === Number(id)
          )
        ) {
          delete next[id];
        }
      });

      return next;
    });
  }, [hatchedCreatures.length]);

  useEffect(() => {
    if (hatchedCreatures.length === 0) {
      return;
    }

    let animationFrame;

    function moveCreatures() {
      const now = Date.now();

      setPositions((current) => {
        const next = { ...current };

        hatchedCreatures.forEach((activity) => {
          const creature = next[activity.id];

          if (!creature) {
            return;
          }

          if (!creature.moving) {
            if (now >= creature.pauseUntil) {
              next[activity.id] = {
                ...creature,
                moving: true,
                direction:
                  Math.random() > 0.5 ? 1 : -1,
                speed:
                  0.015 + Math.random() * 0.025,
              };
            }

            return;
          }

          let x =
            creature.x +
            creature.speed *
              creature.direction;

          let y = creature.y;

          let direction =
            creature.direction;

          if (x >= 88) {
            x = 88;
            direction = -1;
          }

          if (x <= 8) {
            x = 8;
            direction = 1;
          }

          if (Math.random() < 0.002) {
            y +=
              (Math.random() - 0.5) * 4;

            y = Math.max(
              30,
              Math.min(75, y)
            );
          }

          if (Math.random() < 0.0015) {
            next[activity.id] = {
              ...creature,
              x,
              y,
              direction,
              moving: false,
              pauseUntil:
                now +
                1000 +
                Math.random() * 2500,
            };

            return;
          }

          next[activity.id] = {
            ...creature,
            x,
            y,
            direction,
          };
        });

        return next;
      });

      animationFrame =
        requestAnimationFrame(moveCreatures);
    }

    animationFrame =
      requestAnimationFrame(moveCreatures);

    return () => {
      cancelAnimationFrame(animationFrame);
    };
  }, [hatchedCreatures.length]);

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
          hatchedCreatures.map((activity) => {
            const creature =
              positions[activity.id];

            if (!creature) {
              return null;
            }

            return (
              <img
                key={activity.id}
                src={getCreatureImage(
                  activity.creatureId
                )}
                alt="Your creature"
                className="pen-creature"
                style={{
                  left: `${creature.x}%`,
                  top: `${creature.y}%`,
                  transform: `scaleX(${creature.direction})`,
                }}
              />
            );
          })
        )}
      </div>
    </div>
  );
}

export default CreaturePen;

