export default {
    'POST /api/search': (_req: any, res: any) => {
        let mockList = [
            {
                "title": "大约是爱2",
                "post": "http://puui.qpic.cn/vcover_vt_pic/0/mzc00200cgumtil1646568515442/220",
                "episode": 1
            },
            {
                "title": "锦心似玉",
                "post": "http://puui.qpic.cn/vcover_vt_pic/0/mzc002000w08m6u1614051201965/220",
                "episode": 1
            },
            {
                "title": "扫黑风暴",
                "post": "http://puui.qpic.cn/vcover_vt_pic/0/mzc00200lxzhhqz1628216915340/220",
                "episode": 1
            },
            {
                "title": "大约是爱2",
                "post": "http://puui.qpic.cn/vcover_vt_pic/0/mzc00200cgumtil1646568515442/220",
                "episode": 1
            },
            {
                "title": "锦心似玉",
                "post": "http://puui.qpic.cn/vcover_vt_pic/0/mzc002000w08m6u1614051201965/220",
                "episode": 1
            },
            {
                "title": "扫黑风暴",
                "post": "http://puui.qpic.cn/vcover_vt_pic/0/mzc00200lxzhhqz1628216915340/220",
                "episode": 1
            },
            {
                "title": "大约是爱2",
                "post": "http://puui.qpic.cn/vcover_vt_pic/0/mzc00200cgumtil1646568515442/220",
                "episode": 1
            },
            {
                "title": "锦心似玉",
                "post": "http://puui.qpic.cn/vcover_vt_pic/0/mzc002000w08m6u1614051201965/220",
                "episode": 1
            },
            {
                "title": "扫黑风暴",
                "post": "http://puui.qpic.cn/vcover_vt_pic/0/mzc00200lxzhhqz1628216915340/220",
                "episode": 1
            },
            {
                "title": "大约是爱2",
                "post": "http://puui.qpic.cn/vcover_vt_pic/0/mzc00200cgumtil1646568515442/220",
                "episode": 1
            },
            {
                "title": "锦心似玉",
                "post": "http://puui.qpic.cn/vcover_vt_pic/0/mzc002000w08m6u1614051201965/220",
                "episode": 1
            },
            {
                "title": "扫黑风暴",
                "post": "http://puui.qpic.cn/vcover_vt_pic/0/mzc00200lxzhhqz1628216915340/220",
                "episode": 1
            },
            {
                "title": "大约是爱2",
                "post": "http://puui.qpic.cn/vcover_vt_pic/0/mzc00200cgumtil1646568515442/220",
                "episode": 1
            }
            ,
            {
                "title": "大约是爱2",
                "post": "http://puui.qpic.cn/vcover_vt_pic/0/mzc00200cgumtil1646568515442/220",
                "episode": 1
            },
            {
                "title": "锦心似玉",
                "post": "http://puui.qpic.cn/vcover_vt_pic/0/mzc002000w08m6u1614051201965/220",
                "episode": 1
            },
            {
                "title": "扫黑风暴",
                "post": "http://puui.qpic.cn/vcover_vt_pic/0/mzc00200lxzhhqz1628216915340/220",
                "episode": 1
            },
            {
                "title": "大约是爱2",
                "post": "http://puui.qpic.cn/vcover_vt_pic/0/mzc00200cgumtil1646568515442/220",
                "episode": 1
            },
            {
                "title": "锦心似玉",
                "post": "http://puui.qpic.cn/vcover_vt_pic/0/mzc002000w08m6u1614051201965/220",
                "episode": 1
            },
            {
                "title": "扫黑风暴",
                "post": "http://puui.qpic.cn/vcover_vt_pic/0/mzc00200lxzhhqz1628216915340/220",
                "episode": 1
            },
            {
                "title": "大约是爱2",
                "post": "http://puui.qpic.cn/vcover_vt_pic/0/mzc00200cgumtil1646568515442/220",
                "episode": 1
            },
            {
                "title": "锦心似玉",
                "post": "http://puui.qpic.cn/vcover_vt_pic/0/mzc002000w08m6u1614051201965/220",
                "episode": 1
            },
            {
                "title": "扫黑风暴",
                "post": "http://puui.qpic.cn/vcover_vt_pic/0/mzc00200lxzhhqz1628216915340/220",
                "episode": 1
            },
            {
                "title": "大约是爱2",
                "post": "http://puui.qpic.cn/vcover_vt_pic/0/mzc00200cgumtil1646568515442/220",
                "episode": 1
            },
            {
                "title": "锦心似玉",
                "post": "http://puui.qpic.cn/vcover_vt_pic/0/mzc002000w08m6u1614051201965/220",
                "episode": 1
            },
            {
                "title": "扫黑风暴",
                "post": "http://puui.qpic.cn/vcover_vt_pic/0/mzc00200lxzhhqz1628216915340/220",
                "episode": 1
            },
            {
                "title": "大约是爱2",
                "post": "http://puui.qpic.cn/vcover_vt_pic/0/mzc00200cgumtil1646568515442/220",
                "episode": 1
            },
            {
                "title": "锦心似玉",
                "post": "http://puui.qpic.cn/vcover_vt_pic/0/mzc002000w08m6u1614051201965/220",
                "episode": 1
            },
            {
                "title": "扫黑风暴",
                "post": "http://puui.qpic.cn/vcover_vt_pic/0/mzc00200lxzhhqz1628216915340/220",
                "episode": 1
            },
            {
                "title": "大约是爱2",
                "post": "http://puui.qpic.cn/vcover_vt_pic/0/mzc00200cgumtil1646568515442/220",
                "episode": 1
            }
        ];
        res.status(200).json(mockList);
    },
};