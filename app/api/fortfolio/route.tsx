import { NextRequest, NextResponse } from "next/server";

interface AboutItem{
    title: string,
    desc?: string,
    desc2?: string,
    date?: string[];
    dateDesc?: string[];
}
interface NavItem{
    name: string,
    link: string,
}
interface SkillItem{
    title: string,
    progressBefore: number,
    progressAfter: number,
    desc: string
}
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
    type: string;
    original ?: string;
    create: string;
    git: string;
  }




export const GET = async (req: NextRequest): Promise<NextResponse>=>{
    const type = req.nextUrl.searchParams.get("type");

    switch(type){
        case 'about' :
            const Data: AboutItem[] = [
                {
                    title: "◆ MIND",
                    desc : "혼자 부딭혀봐야 온전히 내 것이 된다.",
                    desc2 : "는 마인드를 가지고 있어, 혼자 찾아보고 고민하여 문제 해결하는 것을 좋아합니다.",
         
                },
                {
                    title:  "◆ EDUCATION",
                    date :  ["2023.06.29 ~ 2023.11.30",
                             "2023.01.01 ~ 2023.12.31",
                             "2023.01.01 ~ 2023.12.31",
                             "2023.01.01 ~ 2023.12.31",
                ],
                    dateDesc:[ "(혼합+디지털컨버전스) React를 활용한 프론트엔드 개발자 양성(SPA 프로젝트 개발) A",
                    "설명2",
                    "설명3",
                    "설명4"
                ]
                },
                {
                    title: "◆ LICENSE",
                    date: [
                        "2023.06",
                        "2023.05",
                        "2023.04",
                    ],
                    dateDesc: [
                        "자격증 이름1",
                        "자격증 이름2",
                        "자격증 이름3"
                    ]
                },
            ]
            return NextResponse.json({Data});

        case 'nav' :
            const NavData: NavItem[] = [
                {
                    name: "소개",
                    link : "/about",
                },
                {
                    name: "스킬",
                    link : "/skill",
        
                },
                {
                    name: "포트폴리오",
                    link : "/work",
                }
            ]
            return NextResponse.json({NavData});
            
        case 'skill' :
            const skillData: SkillItem[] = [
                {
                    title: "html",
                    progressBefore : 0,
                    progressAfter : 90,
                    desc : "웹 표준에 준수하여, 마크업을 할 수 있으며, flex or grid를 활용하여 레이아웃을 구성을 할 수 있다.",
                },
                {
                    title: "css",
                    progressBefore : 0,
                    progressAfter : 80,
                    desc : "마크업에 작성된 CLASS 토대로, 디자인을 할 수 있다.",
                },
                {
                    title: "JS",
                    progressBefore : 0,
                    progressAfter : 70,
                    desc : "웹 페이지 내 동적인 기능을 구현, 서버의 데이터를 수신해 가공할 수 있다.",
                },
                {
                    title: "REACT",
                    progressBefore : 0,
                    progressAfter : 40,
                    desc : "REACT를 활용하여, SPA 사이트 제작을 할 수 있다. REDUX, ROUTER DOM 등 다양한 라이브러리를 활용을 할 수 있다.",
                },
                {
                    title: "NEXTJS",
                    progressBefore : 0,
                    progressAfter : 60,
                    desc : "REACT 프레임워크 NEXTJS를 활용하여 SSR 사이트 제작을 할 수 있다.",
                }
               
            ]
            return NextResponse.json({skillData});

        case 'work' :
            const WorkData: WorkItem[]= [
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
            return NextResponse.json({WorkData});
        default :
        return NextResponse.json({error: "파라미터가 에러 발생"})
    }
  
}