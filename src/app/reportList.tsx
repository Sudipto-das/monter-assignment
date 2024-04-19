'use client'
import dummyData from "@/data/data"
import { useState } from "react"
const RepostList = () => {
    const [currentPage, setCurrentPage] = useState(1)
    const Item_per_page = 3
    const total_pages = Math.ceil(dummyData.length / Item_per_page)
    const startIndex = (currentPage - 1) * Item_per_page
    const endIndex = Math.min(startIndex + Item_per_page, dummyData.length)
    const listHeader = ['Date', 'Report Name', 'Download']
    const handleNextPage = () => {
        setCurrentPage(Math.min(currentPage + 1, total_pages));
    };

    const handlePrevPage = () => {
        setCurrentPage(Math.max(currentPage - 1, 1));
    };
    return <div className="h-[54rem] flex flex-col justify-between pb-10">
        <table className="w-full ">
            <thead className="bg-[#efeeee]">
                <tr>
                    <th className="py-3 px-3 text-sm font-semibold w-[10%]">{listHeader[0]}</th>
                    <th className="py-3 px-6 text-sm font-semibold w-[60%] text-start">{listHeader[1]}</th>
                    <th className="py-3 px-3 text-sm font-semibold w-[10%] text-start">{listHeader[2]}</th>
                </tr>
            </thead>
            <tbody>
                {dummyData.slice(startIndex, endIndex).map((item, index) => (
                    <tr key={index} className="border-t py-8">
                        <td className="py-3 pl-32 w-[20%] ">{item.date} <br /><span className="text-xs">{item.time}</span>
                        </td>
                        <td className="pl-6 w-[60%]">{item.reportName}</td>
                        <td className=" pl-8 w-[10%] m-auto"> <div><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-file-down"><path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z" /><path d="M14 2v4a2 2 0 0 0 2 2h4" /><path d="M12 18v-6" /><path d="m9 15 3 3 3-3" /></svg></div></td>
                    </tr>
                ))}
            </tbody>
        </table>
        <div className="flex justify-center mt-4">
                <button onClick={handlePrevPage} disabled={currentPage === 1} className="mx-1 px-3 py-1 text-xs">Previous</button>
                {Array.from({ length: total_pages }, (_, i) => (
                    <button key={i + 1} onClick={() => setCurrentPage(i + 1)} className={`mx-1 px-3 py-1 rounded-md ${currentPage === i + 1 ? 'bg-orange-400' : 'bg-gray-200'}`}>{i + 1}</button>
                ))}
                <button onClick={handleNextPage} disabled={currentPage === total_pages} className="mx-1 px-3 py-1 text-xs">Next</button>
            </div>
    </div>
}
export default RepostList