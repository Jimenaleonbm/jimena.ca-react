import main from "../../assets/img/bouncingball.mp4"

export default function BouncingBall() {
    return (
        <main className="portfolioDetail">
            <h2>Bouncing Ball - Animation Fundamentals</h2>
            <video width="100%" controls>
                <source src={main} type="video/mp4" />
                Your browser does not support the video tag.
            </video>
        </main>
    );
  }