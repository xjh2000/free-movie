import React from 'react';

export default function HomePage() {


    return (
        <div className="content-center text-center text-textColor h-screen bg-primary space-y-2">
            <p className="text-4xl ">
                项目介绍
            </p>
            <p className="text-2xl">
                前端技术栈
            </p>
            <ul className="text-xl">
                <li>umi : 运行时的上下文环境</li>
                <li>ant-design-mobile : UI的呈现</li>
            </ul>
            <p className="text-2xl">
                后端技术栈
            </p>
            <ul className="text-xl ">
                <li>spring : 运行时的上下文环境</li>
                <li>mongodb : 数据库</li>
            </ul>

        </div>
    );
}
