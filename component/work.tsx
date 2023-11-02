'use client'
import Image from "next/image";
import { useEffect, useState } from "react";


interface WorkItem{
    img: string;
    descTitle: string;
    desc: string;
    keyword: string[];
    color: string[];
    font: string;
    tools: string[];
    date: string;
    contribution: string;
  //   type: "Clone" | "Project" | "wdbapp";
    type: string;
    original ?: string;
    create: string;
    git: string;
  }
  interface WorkData{
      data: WorkItem[];
  }

export default function Works(){

    const [isActive, setIsActive] = useState<number>(0);
    const [itemList, setItemList] = useState<WorkItem[]>([]);
    const [cateGory, setCateGory] = useState<string>("전체");
    useEffect(()=>{
        const fetchData = async ()=>{
            try{
                const res = await fetch('/api/work');
                const data = await res.json();
                setItemList(data.data);
                // console.log(data.data)
            }catch(error){
                console.log(error)
            } 
        }
        fetchData();
    },[])

    const menuArray = ["전체", "클론", "팀프로젝트", "웹앱"];
    const menuType = ["전체", "Clone", "Project", "Webapp"];
    const FilterData = itemList && itemList.filter(e =>{
        return cateGory === "전체" || cateGory === e.type
    })

        return (
        <div className="max-w-7xl mx-auto mt-8">
            <ul className="flex m-4 ml-0">
                      {
                        menuArray.map((e,i)=>{
                           return(
                            <li onClick={()=>{setIsActive(i);setCateGory(menuType[i])}}
                             key={i} className={`${isActive === i ? 'bg-sky-500 text-white' : 'bg-white text-black'} cursor-pointer mr-4 border dark:bg-[#272929] dark:text-[#ebf4f1] py-2 px-5 rounded-md`}>{e}
                            </li>
                          )
                      })
                   }
                </ul>
           <div className="mt-8">
           {
               // itemList.map((e,i)=>(e)=>cateGory === "전체" || cateGory === e.type).map((e,i)=>{
                   // })

                   FilterData.map((e,i)=>{
                    return(
                        <div className="bg-white mb-8 pt-12 group px-8 pb-16 rounded-md flex border flex-wrap" key={i}>
                            <div className="basis-[48%] relative mokup-img group-even:order-1 xl:group-even:order-2">
                                <div>
                                    <Image width={500} height={500} src="/images/mokup-1.png" alt="1" className="w-full" />
                                </div>
                                <div>
                                    <Image width={500} height={500} src="/images/mokup-2.png" alt="1" className="w-full" />
                                </div>
                                <div>
                                    <Image width={500} height={500} src="/images/mokup-3.png" alt="1" className="w-full" />
                                </div>
                            </div>
                            <div className="basis-[52%] group-even:order-2 xl:group-even:order-1 pt-10">
                            <h3 className="text-2xl font-bold py-2.5 lg:pl-[50px]">{e.descTitle}</h3>
                            <p className="text-base font-bold py-2.5 lg:pl-[50px]">{e.desc}</p>
                            <p className="text-base font-bold py-2.5 lg:pl-[50px]">키워드: {e.keyword}</p>
                            <p className="text-base font-bold py-2.5 lg:pl-[50px]">컬러: {
                                e.color.map((el,idx)=>{
                                    return(
                                        <span className="w-5 h-5 inline-block align-middle mr-2" style={{backgroundColor: el, marginLeft:"5px"}}key={idx}></span>
                                    )
                                })
                                }
                                </p>
                                <p className="text-base font-bold py-2.5 lg:pl-[50px]">폰트 : {e.font}</p>
                                <p className="text-base font-bold py-2.5 lg:pl-[50px]">사용툴 : {e.tools}</p>
                                <p className="text-base font-bold py-2.5 lg:pl-[50px]">작업기간 : {e.date}</p>
                                <p className="text-base font-bold py-2.5 lg:pl-[50px]">기여도 : {e.contribution}</p>
                                <ul className="flex justify-center mt-6">
                                    <li className="py-1 px-8 border rounded-md text-sm mr-4"><a href={e.original} target="_blank" rel="noopener noreferrer">Original</a></li>
                                    <li className="py-1 px-8 border rounded-md text-sm mr-4"><a href={e.create} target="_blank" rel="noopener noreferrer">Create</a></li>
                                    <li className="py-1 px-8 border rounded-md text-sm"><a href={e.git} target="_blank" rel="noopener noreferrer">GIT</a></li>
                                </ul>
                            </div>
                        </div>
                    )
                })
            }
           </div>
        </div>
    )
}