import Header from "../components/Header";
import CreaturePen from "../components/CreaturePen";

function PenPage({ activities }) {
  return (
    <>
      <Header
        title="Creature Pen"
        subtitle="Your hatched creatures"
      />

      <section className="section">
        <CreaturePen activities={activities} />
      </section>
    </>
  );
}

export default PenPage;
