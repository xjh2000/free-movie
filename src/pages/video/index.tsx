/* eslint-disable eqeqeq */
import React, { useEffect, useState } from 'react';
import {
  Button, CapsuleTabs, Form, Input, Picker,
} from 'antd-mobile';

export default function Page() {
  const resolveList = [
    {
      label: '纯净',
      value: 'https://z1.m1907.cn/?jx=',
    },
    {
      label: 'parwix',
      value: 'https://vip.parwix.com:4433/player/?url=',
    },
    {
      label: 'm3u8',
      value: 'https://jsap.attakids.com/?url=',
    },
    {
      label: 'ok',
      value: 'https://okjx.cc/?url=',
    },
  ];
  const [playerUrl, setPlayerUrl] = useState('');
  const [resolveUrl, setResolveUrl] = useState('');
  const [playerType, setPlayerType] = useState('');
  const [visible, setVisible] = useState(false);

  useEffect(
    () => {
      if (resolveUrl === '') {
        const pageData = localStorage.getItem('videoPage');
        if (pageData) {
          const { playerUrlLocal, resolveUrlLocal } = JSON.parse(pageData);
          setPlayerUrl(playerUrlLocal);
          setResolveUrl(resolveUrlLocal);
        }
      }
      return () => {
        if (resolveUrl !== '') {
          localStorage.setItem('videoPage', JSON.stringify({ playerUrlLocal: playerUrl, resolveUrlLocal: resolveUrl }));
        }
      };
    },
  );

  return (
    <div className="h-full ">
      {/* 嵌入播放器 */}
      <div id="player-state" className="bg-secondary h-1/2  flex items-center  ">
        {
          playerUrl !== '' ? (
            <iframe title="player" className="h-full w-full" allowFullScreen src={resolveUrl + playerUrl} />
          ) : (<p className="grow text-center align-middle text-textColor text-4xl">暂无视频</p>)
        }
      </div>
      {/* 播放器选择 */}
      <div className="bg-primary h-1/2 flex flex-col p-2">
        <div className="  basis-1/6 flex flex-row">
          <div className="w-full h-full space-x-5 p-3 flex flex-row">
            <Button
              shape="rounded"
              type="button"
              color="primary"
              onClick={() => {
                setVisible(true);
              }}
            >
              选择解析路线
            </Button>
            <p className="text-4xl text-textColor">

              {resolveList.map((item) => (
                item.value == resolveUrl ? item.label : ''))}
            </p>
          </div>

          <Picker
            columns={[resolveList]}
            visible={visible}
            onClose={() => {
              setVisible(false);
            }}
            defaultValue={[resolveUrl]}
            onConfirm={(v) => {
              setResolveUrl(v as any);
            }}
          />

        </div>
        <div className="basis-5/6 ">
          <CapsuleTabs
            defaultActiveKey={playerType}
            onChange={(key) => {
              setPlayerType(key);
            }}
          >
            <CapsuleTabs.Tab title="自定义" key="custom">
              <Form
                layout="horizontal"
                onFinish={(values: any) => {
                  setPlayerUrl(values?.playerUrlInput);
                }}
              >
                <Form.Item
                  label="目标地址"
                  name="playerUrlInput"
                  extra={(
                    <Button className="text-secondary" block type="submit" color="primary" size="large">
                      播放
                    </Button>
                  )}
                >
                  <Input defaultValue={playerUrl} placeholder="请输入目标地址" clearable />
                </Form.Item>
              </Form>
            </CapsuleTabs.Tab>
            <CapsuleTabs.Tab title="非自定义" key="un-custom">
              fei
            </CapsuleTabs.Tab>
          </CapsuleTabs>
        </div>
      </div>
    </div>
  );
}
