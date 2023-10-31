import { faFontAwesome } from "@fortawesome/free-solid-svg-icons/faFontAwesome";
import { promises } from "dns";
import { NextResponse } from "next/server";
import { faUser, faCode, faWindowMaximize, IconDefinition} from "@fortawesome/free-solid-svg-icons";

interface NavItem{
    name: string,
    link: string,
    icon: IconDefinition
}
interface NavData{
    data: NavItem[];
}


export async function GET() : Promise<NextResponse>{
    const data = [
        {
            name: "소개",
            link : "/about",
            icon:  faUser
        },
        {
            name: "스킬",
            link : "/skill",
            icon:  faCode

        },
        {
            name: "포트폴리오",
            link : "/work",
            icon:  faWindowMaximize
        }
    ]
    return NextResponse.json({data} as NavData);
}