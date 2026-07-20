export default function Skills(){

    const ONclick = (id)=>{
        
    }
    return(
        <div className="pt-24">
            <h1 className="text-red-500 text-6xl animate-bounce font-bold text-center">Tech Arsenal</h1>

          <div className="flex gap-70 mt-30 ml-20 ">
              <div className="grid gird col-auto row-auto w-[100px] gap-6 ">
                <span id="1" className="px-8 py-4 border border-gray-400 text-white text-xl rounded-md">CORE_LANGUAGES</span>
                 <span className="px-8 py-4 border border-gray-400 text-white text-xl rounded-md">FRONTEND_OPS</span>
                  <span className="px-8 py-4 border border-gray-400 text-white text-xl rounded-md">BACKEND_SYS</span>
                   <span className="px-8 py-4 border border-gray-400 text-white text-xl rounded-md">DATA_CORE</span>
                    <span className="px-8 py-4 border border-gray-400 text-white text-xl rounded-md">DEVOPS_CLOUD</span>
            </div>
                <div className="border-2 border-red-500 w-[900px] h-[400px] rounded-md ">
                    <img src="grid.svg" alt="backgrond" className="w-[800px] h-[300px]"/>
                </div>

          </div>
        </div>
    )
}