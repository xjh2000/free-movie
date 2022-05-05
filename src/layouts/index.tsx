import React, {useEffect, useState} from 'react';
import {history, Outlet} from 'umi';
import {AppOutline, SearchOutline, VideoOutline} from "antd-mobile-icons";
import {TabBar} from "antd-mobile";
import {useLocation} from "@@/exports";


export default function Layout() {
    const tabs = [
        {
            key: '/',
            title: '首页',
            icon: <AppOutline/>,
        },
        {
            key: '/search',
            title: '搜索',
            icon: <SearchOutline/>,
        },
        {
            key: '/video',
            title: '视频',
            icon: <VideoOutline/>,
        },
    ]
    const location = useLocation();
    useEffect(() => {
        for (let i = tabs.length - 1; i > 0; i--) {
            if (location.pathname.startsWith(tabs[i].key)) {
                setActiveKey(tabs[i].key);
                break;
            }
        }
    }, [location])

    const [activeKey, setActiveKey] = useState('todo')
    const setKey = (key: string) => {
        setActiveKey(key);
        history.push(key);
    }

    return (
        <div>
            <div className="bg-primary h-screen">
                <Outlet/>
            </div>

            <div className="fixed bottom-0 left-0 right-0 bg-secondary ">
                <TabBar activeKey={activeKey} onChange={setKey}>
                    {tabs.map(item => (
                        <TabBar.Item key={item.key} icon={item.icon} title={item.title}/>
                    ))}
                </TabBar>
            </div>
        </div>
    );
}
