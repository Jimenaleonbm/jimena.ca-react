import main from "../../assets/img/f1.mp4"

export default function F1() {
    return (
        <main className="portfolioDetail">
            <h2>F1 - Motion Design Package</h2>
            <video width="100%" controls>
                <source src={main} type="video/mp4" />
                Your browser does not support the video tag.
            </video>
        </main>
    );
  }