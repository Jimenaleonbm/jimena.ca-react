import main from "../../assets/img/apps.png"
import apple from "../../assets/img/downloadapple.png"
import google from "../../assets/img/downloadgoogle.png"


export default function EnglishApps() {
    return (
        <main className="portfolioDetail">
            <img src={main} alt="project information" />
            <div class="download">
                    <a href="https://apps.apple.com/us/app/idioms-and-expressions-app/id1521743695" target="_blank">
                        <img src={apple} alt="Download in app store" />
                    </a>
                    <a href="https://play.google.com/store/apps/details?id=com.estebanl.idioms" target="_blank">
                        <img src={google} alt="download in google play" />
                    </a>
            </div>
        </main>
    );
}