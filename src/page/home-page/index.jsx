import React, { useEffect, useState } from 'react'
import MainLayout from '../../infratructure/common/layout/main-layout';
import BannerCommon from '../../infratructure/common/layout/banner';
import Articles from './articles';
import Destination from './destination';
import Festival from './festival';
import Specialty from './specialty';
import api from '../../infratructure/api';
import LoadingFullPage from '../../infratructure/common/controls/loading';
import Constants from '../../core/common/constant';

const HomePage = () => {
    const [loading, setLoading] = useState(false);
    const [listTinTuc, setListTinTuc] = useState([]);
    const [listDiaDiem, setListDiaDiem] = useState([]);
    const [listDacSan, setListDacSan] = useState([]);
    const [listLeHoi, setListLeHoi] = useState([]);

    const [pageSize, setPageSize] = useState(10);

    const onGetListDiemDenAsync = async () => {
        const response = await api.getAllDiaDiem(
            `dichvu/top?idDanhMuc=${Constants.CategoryConfig.Location.value}`,
            setLoading
        )
        setListDiaDiem(response.data.diaDiems);
        // setPagination(response.data.pagination);
        // setTotalItem(response.data.totalItems);
    }


    const onGetListDacSanAsync = async () => {
        const response = await api.getAllDiaDiem(
            `dichvu/top?idDanhMuc=${Constants.CategoryConfig.Specialty.value}`,
            setLoading
        )
        setListDacSan(response.data.diaDiems);
        // setPagination(response.data.pagination);
        // setTotalItem(response.data.totalItems);
    }

    const onGetListLeHoiAsync = async () => {
        const response = await api.getAllDiaDiem(
            `dichvu/top?idDanhMuc=${Constants.CategoryConfig.Festival.value}`,
            setLoading
        )
        setListLeHoi(response.data.diaDiems);
        // setPagination(response.data.pagination);
        // setTotalItem(response.data.totalItems);
    }

    const onGetListTinTucAsync = async () => {
        const response = await api.getAllTinTuc(
            `loaitin?type=1`,
            setLoading
        )
        setListTinTuc(response.data.tinTucs);
        // setPagination(response.data.pagination);
        // setTotalItem(response.data.totalItems);
    }
    useEffect(() => {
        onGetListDiemDenAsync().then(_ => { });
        onGetListTinTucAsync().then(_ => { });
        onGetListDacSanAsync().then(_ => { });
        onGetListLeHoiAsync().then(_ => { });

    }, []);

    return (
        <MainLayout>
            <LoadingFullPage isLoading={loading} />
            <BannerCommon />
            <Destination
                data={listDiaDiem}
            />
            <Festival
                data={listLeHoi}
            />
            <Specialty
                data={listDacSan}
            />
            <Articles
                data={listTinTuc}
            />
        </MainLayout>
    )
}

export default HomePage;