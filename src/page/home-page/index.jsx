import React from 'react'
import MainLayout from '../../infratructure/common/layout/main-layout';
import BannerCommon from '../../infratructure/common/layout/banner';
import Articles from './articles';
import Destination from './destination';
import Festival from './festival';

const HomePage = () => {
    return (
        <MainLayout>
            <BannerCommon />
            <Destination />
            <Festival />
            <Articles />
        </MainLayout>
    )
}

export default HomePage;