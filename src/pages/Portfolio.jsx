import React, {useState} from "react";
import {Link} from "react-router-dom"
import PorftfolioItem from "../components/PortfolioItem"
import portfolioListData from "../assets/data/portfolioList.json"

export default function Portfolio() {
    const [portfolioList, setPortfolioList] = useState(portfolioListData)
    return (
        <main>
            <div className="portfolioHome">
                <div className="flexRow">
                    {portfolioList.cols.map((cols, index) => {
                        return (
                            <div className={'row col' + (index + 1)} key={'col' + (index + 1)}>
                                <h1 className={index === 1 ? 'displayBlock' : 'displayNone'}>Portfolio</h1>
                                {
                                    cols.map((item) => {
                                        return (
                                            <Link to={item.link}>
                                                <PorftfolioItem key={'item' + item.id} item={item} />
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