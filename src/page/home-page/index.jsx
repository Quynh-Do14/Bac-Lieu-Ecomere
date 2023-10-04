import React, { useEffect, useState } from 'react'
import MainLayout from '../../infratructure/common/layout/main-layout';
import BannerCommon from '../../infratructure/common/layout/banner';
import Articles from './articles';
import Destination from './destination';
import Festival from './festival';
import Specialty from './specialty';
import api from '../../infratructure/api';
import LoadingFullPage from '../../infratructure/common/controls/loading';

const HomePage = () => {
    const [loading, setLoading] = useState(false);
    const [data, setData] = useState([]);
    const [pageSize, setPageSize] = useState(10);

    // const onGetListDiemDenAsync = async ({ keyWord = "", limit = pageSize, page = 1, idQuanHuyen = 1, idDanhMuc = 1 }) => {
    //     const response = await api.getAllDiaDiem(
    //         `dichvu/top?idDanhMuc=1`,
    //         setLoading
    //     )
    //     setData(response.data.diaDiems);
    //     // setPagination(response.data.pagination);
    //     // setTotalItem(response.data.totalItems);
    // }

    // const onSearch = async (keyWord = "", limit = pageSize, page = 1) => {
    //     await onGetListDiemDenAsync({ keyWord: keyWord, limit: limit, page: page });
    // };

    // useEffect(() => {
    //     onSearch().then(_ => { });
    // }, []);

    const onGetListDiemDenAsync = async ({ keyWord = "", limit = pageSize, page = 1, idQuanHuyen = 1, idDanhMuc = 1 }) => {
        const response = await api.getAllTinTuc(
            `loaitin?type=1`,
            setLoading
        )
        setData(response.data.diaDiems);
        // setPagination(response.data.pagination);
        // setTotalItem(response.data.totalItems);
    }

    const onSearch = async (keyWord = "", limit = pageSize, page = 1) => {
        await onGetListDiemDenAsync({ keyWord: keyWord, limit: limit, page: page });
    };

    useEffect(() => {
        onSearch().then(_ => { });
    }, []);

    console.log('data', data);
    return (
        <MainLayout>
            <LoadingFullPage />
            <BannerCommon />
            <Destination />
            <Festival />
            <Specialty />
            <Articles />
        </MainLayout>
    )
}

export default HomePage;