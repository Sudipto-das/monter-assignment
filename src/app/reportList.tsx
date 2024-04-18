'use Client'
import dummyData from "@/data/data"
const RepostList = () => {
    const listHeader = ['Date', 'Report Name', 'Download']
    return <div><table className="w-full">
        <thead className="bg-[#efeeee]">
            <tr>
                <th className="py-3 px-3 text-sm font-semibold w-[10%]">{listHeader[0]}</th>
                <th className="py-3 px-6 text-sm font-semibold w-[60%] text-start">{listHeader[1]}</th>
                <th className="py-3 px-3 text-sm font-semibold w-[10%] text-start">{listHeader[2]}</th>
            </tr>
        </thead>
        <tbody>
            {dummyData.map((item, index) => (
                <tr key={index} className="border-t py-8">
                    <td className="py-3 pl-32 w-[20%] ">{item.date} <br/><span className="text-xs">{item.time}</span>
                    </td>
                    <td className="pl-6 w-[60%]">{item.reportName}</td>
                    <td className=" pl-8 w-[10%] m-auto"> <div><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-file-down"><path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z" /><path d="M14 2v4a2 2 0 0 0 2 2h4" /><path d="M12 18v-6" /><path d="m9 15 3 3 3-3" /></svg></div></td>
                </tr>
            ))}
        </tbody>
    </table>
    </div>
}
export default RepostList