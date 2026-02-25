import main from "../../assets/img/psa.mp4"

export default function Psa() {
    return (
        <main className="portfolioDetail">
            <h1>PSA - Motion Design</h1>
            <video width="100%" controls>
                <source src={main} type="video/mp4" />
                Your browser does not support the video tag.
            </video>
        </main>
    );
  }