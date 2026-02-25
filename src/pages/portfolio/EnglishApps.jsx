import main from "../../assets/img/apps.png"
import apple from "../../assets/img/downloadapple.png"
import google from "../../assets/img/downloadgoogle.png"


export default function EnglishApps() {
    return (
        <main className="portfolioDetail">
            <h1>English Apps - App Design / Development</h1>
            <img src={main} alt="project information" loading="lazy" />
            <div className="download">
                    <a href="https://apps.apple.com/us/app/idioms-and-expressions-app/id1521743695" target="_blank" rel="noopener noreferrer">
                        <img src={apple} alt="Download in app store" loading="lazy" />
                    </a>
                    <a href="https://play.google.com/store/apps/details?id=com.estebanl.idioms" target="_blank" rel="noopener noreferrer">
                        <img src={google} alt="download in google play" loading="lazy" />
                    </a>
            </div>
        </main>
    );
}