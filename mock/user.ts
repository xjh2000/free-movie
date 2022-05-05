import mockjs from "mockjs"

export default {
    'GET /api/user': (_req: any, res: any) => {
        let mock1 = mockjs.mock({"status": 200, "data|1-10": "@name"});
        res.json({
            ...mock1
        });
    },
};
