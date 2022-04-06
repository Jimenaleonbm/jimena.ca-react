import React from 'react';
 
const PorftfolioItem = ({item}) => {
    return (
        <article className='itemPortfolio'>
            <img src={item.img} alt="Image Project" />
            <div className="itemPortfolio-hover">
                <h2>{item.project}</h2>
                <span>{item.type}</span>
            </div>
        </article>
    );
};
 
export default PorftfolioItem;