import React from "react";
import {Link} from "react-router-dom"
import PorftfolioItem from "../components/PortfolioItem"
import portfolioListData from "../assets/data/portfolioList.json"

export default function Portfolio() {
    const portfolioList = portfolioListData;
    return (
        <main>
            <div className="portfolioHome">
                <h1>Portfolio</h1>
                <div className="flexRow">
                    {portfolioList.cols.map((cols, index) => {
                        return (
                            <div className={'row col' + (index + 1)} key={'col' + (index + 1)}>
                                {
                                    cols.map((item) => {
                                        return (
                                            <Link to={item.link} key={`link-${item.id}`} aria-label={`View ${item.project} project`}>
                                                <PorftfolioItem item={item} />
                                            </Link>
                                        )
                                    })
                                }
                            </div>                        
                        )
                    })}
                </div>
            </div>
        </main>
    );
}