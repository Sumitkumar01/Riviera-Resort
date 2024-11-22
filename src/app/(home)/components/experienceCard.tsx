import { RightTick } from "@/icons/icons"
import Link from "next/link"
const experienceCard = () => {
    return (
        <div className="mx-auto flex flex-col gap-5 items-center px-14 py-9 text-base text-white rounded-sm bg-[#040404] max-w-[945px] max-md:px-4">
            <div className="text-3xl font-bold">Experience Best Resorts</div>
            <div className=" leading-7 text-center w-[644px] max-md:max-w-full">
                At Riviera Resort Rishikesh, we promise to provide the best resorts with
                quality services and magnificent locations for your vacation.
            </div>
            <div className="flex gap-5 self-stretch leading-[162.5%] max-md:flex-wrap">
                <div className="flex gap-3">
                    <RightTick />
                    <div>Highest rated resort in Rishikesh, India.</div>
                </div>
                <div className="flex gap-3">
                    <RightTick />
                    <div>Best and quality services.</div>
                </div>
                <div className="flex gap-3">
                    <RightTick />
                    <div>Most beautiful resort.</div>
                </div>
            </div>
            <Link href="https://engine.eazotel.com/?id=b3818c66-af22-4bb4-8bb6-922fb127d974&hid=35513674" target="_blank" className="border border-[#ffffff] bg-[#ffffff] text-md px-8 py-2 text-[#474747] rounded-sm hover:bg-transparent hover:text-[#ffffff] duration-300 active:scale-75 hover:scale-105">
                Book now
            </Link>
        </div>
    )
}

export default experienceCard