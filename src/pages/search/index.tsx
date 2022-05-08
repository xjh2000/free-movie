import React, { useEffect, useState } from 'react';
import { SearchOutline } from 'antd-mobile-icons';
import { Checkbox, InfiniteScroll, Popup } from 'antd-mobile';
import { Query, SearchResultItem, searchServer } from '@/server/search';

export default function Page() {
  // 数据的结果
  const [result, setResult] = useState<SearchResultItem[]>([]);
  useEffect(() => {
    if (result.length === 0
      && JSON.parse(localStorage.getItem('searchResult') as string)
      && JSON.parse(localStorage.getItem('searchResult') as string).length > 0) {
      setResult(JSON.parse(localStorage.getItem('searchResult') as string));
    }
  });
  // 数据的查询
  const pageSize = 30;
  const subtypes: string[] = [
    '剧情',
    '犯罪',
    '古装',
    '爱情',
    '刑侦',
    '都市',
    '科幻',
    '家庭',
    '战争',
    '悬疑',
    '谍战',
    '喜剧',
    '武侠',
    '动作',
    '警匪',
    '偶像',
    '神话',
    '网络剧',
  ];
  const [queryVisible, setQueryVisible] = useState(false);
  const [query, setQuery] = useState<Query>({} as Query);

  useEffect(() => {
    if (Object.keys(query).length === 0) {
      setQuery({
        ...{
          sort: 'hot', subtype: [], title: '', year: '', pageSize, offset: 0,
        },
        ...JSON.parse(localStorage.getItem('query') as string),
      });
    }
    return () => {
      if (Object.keys(query).length > 0) {
        localStorage.setItem('query', JSON.stringify(query));
      }
    };
  }, [query]);

  // 数据的加载

  let dataLoading = false;
  const [hasMore, setHasMore] = useState(false);

  function queryNewData() {
    setQuery({ ...query, offset: 0 });
    setResult([]);
    setHasMore(true);
    setQueryVisible(false);
    window.scrollTo(0, 0);
  }

  async function loadMore() {
    if (Object.keys(query).length === 0) return;
    if (dataLoading) return;
    dataLoading = true;
    await searchServer(query).then(
      (data) => {
        setResult([...result, ...data]);
        localStorage.setItem('searchResult', JSON.stringify([...result, ...data]));
        if (data.length < query.pageSize) {
          setHasMore(false);
        } else {
          setHasMore(true);
          const offset = query.offset + query.pageSize;
          setQuery({ ...query, offset });
        }
      },
    ).catch(() => {
      setHasMore(false);
      setResult([]);
      localStorage.setItem('searchResult', JSON.stringify([]));
    });
    dataLoading = false;
  }

  // 滑动位置
  function storageScrollTopToLocal() {
    localStorage.setItem('searchScrollTop', String(window.scrollY));
  }

  useEffect(() => {
    const scrollTop = localStorage.getItem('searchScrollTop');
    // useEffect 有毒
    setTimeout(() => {
      window.scrollTo({
        top: scrollTop ? Number(scrollTop) : 0,
      });
    }, 100);
    window.addEventListener('scroll', storageScrollTopToLocal);
    return () => {
      window.removeEventListener('scroll', storageScrollTopToLocal);
    };
  });

  return (
    <div className="bg-primary h-auto ">
      {/* 数据展示 */}
      <div className=" p-10
        gap-6 grid  sm:grid-cols-2 md:grid-cols-3  xl:grid-cols-4   justify-items-stretch"
      >
        {result && result.map((item, index) => (
          <div
            className="  hover:brightness-50 "
            key={index}
          >
            <div className="flex h-full flex-row ">
              <img className="rounded-l-md object-cover w-1/2 h-full " src={item.post} alt="" />
              <div className="my-1 rounded-r-md p-6 grow space-y-2 text-textColor bg-secondary ">
                <h1 className=" text-xl font-extrabold">{item.title}</h1>
                <h1 className=" text-sm">
                  集数 ：

                  {item.episode}
                </h1>
              </div>
            </div>
          </div>
        ))}
      </div>
      {/* 搜索图标 */}

      <button
        type="button"
        className="hover:brightness-150
            fixed bottom-14 right-4 rounded-xl bg-secondary p-2 "
        onClick={() => {
          setQueryVisible(true);
        }}
      >
        <SearchOutline fontSize={32} color="var(--adm-color-primary)" />
      </button>

      <InfiniteScroll loadMore={() => loadMore()} hasMore={hasMore} />

      {/* 搜索弹出框 */}
      <Popup
        visible={queryVisible}
        onMaskClick={() => {
          queryNewData();
        }}
        bodyStyle={{ height: '50vh' }}
      >
        <div className="flex h-full flex-wrap flex-col bg-secondary">
          <div className="flex flex-row  bg-secondary p-3 space-x-2 ">
            <p className="text-textColor text-xl">年份 :</p>
            <input
              type="text"
              value={query.year}
              placeholder="2022"
              className="bg-primary text-textColor w-1/4
                                text-xl rounded-xl text-center
                               "
              onChange={(e) => {
                setQuery({ ...query, year: e.target.value });
              }}
            />
            <div className="grow grid justify-items-end  grid-flow-col text-2xl text-textColor">
              <Checkbox
                checked={query.sort === 'hot'}
                value="hot"
                onChange={(e: boolean) => {
                  if (e) {
                    setQuery({ ...query, sort: 'hot' });
                  } else {
                    setQuery({ ...query, sort: '' });
                  }
                }}
              >
                热度
              </Checkbox>
              <Checkbox
                checked={query.sort === 'score'}
                value="score"
                onChange={(e: boolean) => {
                  if (e) {
                    setQuery({ ...query, sort: 'score' });
                  } else {
                    setQuery({ ...query, sort: '' });
                  }
                }}
              >
                分数
              </Checkbox>
            </div>

          </div>

          <div className="flex flex-row  bg-secondary p-3 space-x-2 ">
            <p className="text-textColor text-xl">名称 :</p>
            <input
              type="text"
              value={query.title}
              placeholder="你的名字"
              className="bg-primary text-textColor w-1/2
                                text-xl rounded-xl text-center
                               "
              onChange={(e) => {
                setQuery({ ...query, title: e.target.value });
              }}
            />
          </div>
          <div className="flex flex-col  flex-wrap  p-3   text-textColor">
            <p className="text-textColor text-xl">类型 :</p>
            <Checkbox.Group
              value={query.subtype}
              onChange={(val) => {
                setQuery({ ...query, subtype: val as string[] });
              }}
            >
              <div className="flex flex-row  flex-wrap
                            justify-start p-3  text-textColor"
              >
                {subtypes.map(
                  (item) => <Checkbox key={item} value={item}>{item}</Checkbox>,
                )}
              </div>
            </Checkbox.Group>

          </div>
        </div>
      </Popup>
    </div>
  );
}
