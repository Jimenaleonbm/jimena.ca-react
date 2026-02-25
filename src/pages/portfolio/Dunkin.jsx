import main from "../../assets/img/dunkin.mp4"

export default function Dunkin() {
    return (
        <main className="portfolioDetail">
            <h1>Dunkin</h1>
            <video width="100%" controls>
                <source src={main} type="video/mp4" />
                Your browser does not support the video tag.
            </video>
        </main>
    );
  }