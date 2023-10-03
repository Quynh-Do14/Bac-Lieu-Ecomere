import React from 'react'
import MainLayout from '../../infratructure/common/layout/main-layout';
import BannerCommon from '../../infratructure/common/layout/banner';
import Articles from './articles';
import Destination from './destination';
import Festival from './festival';
import Specialty from './specialty';

const HomePage = () => {
    return (
        <MainLayout>
            <BannerCommon />
            <Destination />
            <Festival />
            <Specialty />
            <Articles />
        </MainLayout>
    )
}

export default HomePage;