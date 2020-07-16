import React from 'react';
import { ColumnFeed, MainBlock, NewsBlock } from '../../components';
import './MainFeed.scss';
import { useMediaQuery } from 'react-responsive'

export const MainFeed = ({ allData, gamesData, hobbyData, politicsData, sportsData, advertisingData }) => {

    const changeMainArticles = id => {
        const article = allData.find(item => item.id === id);
        return article;
    }

    const mainArticle_1 = changeMainArticles(6);
    const mainArticle_2 = changeMainArticles(19);
    const mainArticle_3 = changeMainArticles(20);

    const Desktop = ({ children }) => {
        const isDesktop = useMediaQuery({ minWidth: 1140 })
        return isDesktop ? children : null
    }
    const TabletOrLaptop = ({ children }) => {
        const isTablet = useMediaQuery({ minWidth: 769, maxWidth: 1139 })
        return isTablet ? children : null
    }
    const Mobile = ({ children }) => {
        const isMobile = useMediaQuery({ maxWidth: 768 })
        return isMobile ? children : null
    }

    // idx === bigBlock 

    const renderResponsiveNewsBlock = (data, idx1, idx2) => {
        return (
            <>
                <Desktop> 
                    <NewsBlock data={data} index1={idx1} blocks={3} /> 
                </Desktop>
                <TabletOrLaptop> 
                    <NewsBlock data={data} blocks={2} /> 
                </TabletOrLaptop>
                <Mobile> 
                    <NewsBlock data={data} index2={idx2} blocks={1} /> 
                </Mobile>
            </>
        )
    }

    return (
        <>
            <div className="main-feed-wrapper">
                <ColumnFeed data={allData} />
                <MainBlock art1={mainArticle_1} art2={mainArticle_2} art3={mainArticle_3} />
            </div>
            {renderResponsiveNewsBlock(gamesData, 1, 0)}
            {renderResponsiveNewsBlock(sportsData, false, 0)}
            {renderResponsiveNewsBlock(politicsData, 0, 0)}
            {renderResponsiveNewsBlock(hobbyData, false, 0)}
            {renderResponsiveNewsBlock(advertisingData, 2, 0)}
        </>
    )
}


