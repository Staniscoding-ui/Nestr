import Header from "../components/Header";
import Button from "../components/Button";
import Card from "../components/Card";

function AddActivityPage({
  formData,
  onChange,
  onSubmit,
}) {
  return (
    <>
      <Header
        title="Log Activity"
        subtitle="Record something you accomplished"
      />

      <Card>
        <form onSubmit={onSubmit}>
          <label htmlFor="activity">
            Activity
          </label>

          <input
            id="activity"
            name="activity"
            type="text"
            value={formData.activity}
            onChange={onChange}
            placeholder="What did you do?"
            required
          />

          <label htmlFor="description">
            Description
          </label>

          <textarea
            id="description"
            name="description"
            rows="4"
            value={formData.description}
            onChange={onChange}
            placeholder="Add some details..."
          />

          <Button type="submit" variant="accent">
            Save Activity
          </Button>
        </form>
      </Card>
    </>
  );
}

export default AddActivityPage;