import { NextResponse } from "next/server";


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


export async function GET() : Promise<NextResponse>{
    const data: WorkItem[]= [
        {
            img: "https://via.placeholder.com/500",
            descTitle: "써브웨이 사이트 클론 코딩",
            desc: "xxxx 사이트 클론 코딩",
            keyword: ["#심플","#반응형","모바일"],
            color: ["blue","skyblue","darkblue"],
            font: "Noto Sans KR",
            tools: ["Figma","VS CODE","GIT"],
            date: "5일",
            contribution: "100%",
            type: "Clone",
            original : "https://github.com/szerncse/HMG.git",
            create: "https://subway-phi.vercel.app/",
            git: "https://github.com/szerncse",
        },
        {
            img: "https://via.placeholder.com/500",
            descTitle: "2드라이빙 사이트 클론 코딩",
            desc: "xxxx 사이트 클론 코딩",
            keyword: ["#심플","#반응형","모바일"],
            color: ["blue","skyblue","darkblue"],
            font: "Noto Sans KR",
            tools: ["Figma","VS CODE","GIT"],
            date: "5일",
            contribution: "100%",
            type: "Clone",
            original : "https://github.com/szerncse/HMG.git",
            create: "https://subway-phi.vercel.app/",
            git: "https://github.com/szerncse",
        },
        {
            img: "https://via.placeholder.com/500",
            descTitle: "3포트폴리오 사이트 클론 코딩",
            desc: "xxxx 사이트 클론 코딩",
            keyword: ["#심플","#반응형","모바일"],
            color: ["blue","skyblue","darkblue"],
            font: "Noto Sans KR",
            tools: ["Figma","VS CODE","GIT"],
            date: "5일",
            contribution: "100%",
            type: "Project",
            original : "https://github.com/szerncse/HMG.git",
            create: "https://subway-phi.vercel.app/",
            git: "https://github.com/szerncse",
        },
      
        {
            img: "https://via.placeholder.com/500",
            descTitle: "4포트폴리오 사이트 클론 코딩",
            desc: "xxxx 사이트 클론 코딩",
            keyword: ["#심플","#반응형","모바일"],
            color: ["blue","skyblue","darkblue"],
            font: "Noto Sans KR",
            tools: ["Figma","VS CODE","GIT"],
            date: "5일",
            contribution: "100%",
            type: "Webapp",
            original : "https://github.com/szerncse/HMG.git",
            create: "https://subway-phi.vercel.app/",
            git: "https://github.com/szerncse",
        },
      
        {
            img: "https://via.placeholder.com/500",
            descTitle: "5포트폴리오 사이트 클론 코딩",
            desc: "xxxx 사이트 클론 코딩",
            keyword: ["#심플","#반응형","모바일"],
            color: ["blue","skyblue","darkblue"],
            font: "Noto Sans KR",
            tools: ["Figma","VS CODE","GIT"],
            date: "5일",
            contribution: "100%",
            type: "Webapp",
            original : "subway-phi.vercel.app",
            create: "버셀주소",
            git: "subway-phi.vercel.app",
        },
      
        {
            img: "https://via.placeholder.com/500",
            descTitle: "6포트폴리오 사이트 클론 코딩",
            desc: "xxxx 사이트 클론 코딩",
            keyword: ["#심플","#반응형","모바일"],
            color: ["blue","skyblue","darkblue"],
            font: "Noto Sans KR",
            tools: ["Figma","VS CODE","GIT"],
            date: "5일",
            contribution: "100%",
            type: "Clone",
            original : "subway-phi.vercel.app",
            create: "버셀주소",
            git: "subway-phi.vercel.app",
        },
      
        {
            img: "https://via.placeholder.com/500",
            descTitle: "7포트폴리오 사이트 클론 코딩",
            desc: "xxxx 사이트 클론 코딩",
            keyword: ["#심플","#반응형","모바일"],
            color: ["blue","skyblue","darkblue"],
            font: "Noto Sans KR",
            tools: ["Figma","VS CODE","GIT"],
            date: "5일",
            contribution: "100%",
            type: "Clone",
            original : "subway-phi.vercel.app",
            create: "버셀주소",
            git: "subway-phi.vercel.app",
        },
      
        {
            img: "https://via.placeholder.com/500",
            descTitle: "8포트폴리오 사이트 클론 코딩",
            desc: "xxxx 사이트 클론 코딩",
            keyword: ["#심플","#반응형","모바일"],
            color: ["blue","skyblue","darkblue"],
            font: "Noto Sans KR",
            tools: ["Figma","VS CODE","GIT"],
            date: "5일",
            contribution: "100%",
            type: "Clone",
            original : "subway-phi.vercel.app",
            create: "버셀주소",
            git: "subway-phi.vercel.app",
        },
      
        {
            img: "https://via.placeholder.com/500",
            descTitle: "9포트폴리오 사이트 클론 코딩",
            desc: "xxxx 사이트 클론 코딩",
            keyword: ["#심플","#반응형","모바일"],
            color: ["blue","skyblue","darkblue"],
            font: "Noto Sans KR",
            tools: ["Figma","VS CODE","GIT"],
            date: "5일",
            contribution: "100%",
            type: "Clone",
            original : "subway-phi.vercel.app",
            create: "버셀주소",
            git: "subway-phi.vercel.app",
        },
        {
            img: "https://via.placeholder.com/500",
            descTitle: "10포트폴리오 사이트 클론 코딩",
            desc: "xxxx 사이트 클론 코딩",
            keyword: ["#심플","#반응형","모바일"],
            color: ["blue","skyblue","darkblue"],
            font: "Noto Sans KR",
            tools: ["Figma","VS CODE","GIT"],
            date: "5일",
            contribution: "100%",
            type: "Clone",
            original : "subway-phi.vercel.app",
            create: "버셀주소",
            git: "subway-phi.vercel.app",
        },
      
       
    ]
    return NextResponse.json({data} as WorkData);
}