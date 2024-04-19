import RepostList from "./reportList";


export default function Home() {
  return (
    <div className="w-[95%] m-auto border rounded-lg shadow-lg bg-white">
      <div className="flex items-center justify-center py-4">
        <h1 className=" text-center flex-grow font-bold">Recently Generated Reports</h1>
        <div className="flex gap-2 mr-4">
          <div className="border-2 rounded-lg p-1">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" stroke-linejoin="round" className="lucide lucide-filter"><polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3" /></svg>
          </div>
          <div className="border-2 rounded-lg p-1">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" stroke-linejoin="round" className="lucide lucide-x"><path d="M18 6 6 18" /><path d="m6 6 12 12" /></svg>
          </div>
        </div>
      </div>
      <RepostList/>
    </div>

  );
}
