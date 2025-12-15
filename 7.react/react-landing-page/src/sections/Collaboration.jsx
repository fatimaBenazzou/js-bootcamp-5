import CollabFigure from "../components/CollabFigure";
import CollabList from "../components/CollabList";
import Section from "../components/Section";

function Collaboration() {
    return (
        <Section crosses id="collaboration">
            <div className="container lg:flex">
                {/* first part */}
                <CollabList />

                {/* APPS figure  */}
                <CollabFigure />
            </div>
        </Section>
    );
}

export default Collaboration;
