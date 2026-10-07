import Header from "../components/Header";
import Card from "../components/Card";

function ProfilePage({ activityCount }) {
  return (
    <>
      <Header
        title="Profile"
        subtitle="Your Nestr account"
      />

      <section className="section">
        <Card title="Your Progress">
          <p>
            You have completed {activityCount}{" "}
            {activityCount === 1
              ? "activity"
              : "activities"}.
          </p>

          <p className="muted">
            Your activities are saved on this device.
          </p>
        </Card>
      </section>
    </>
  );
}

export default ProfilePage;