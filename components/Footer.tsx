export default function Footer(){
    return(
        <div>
            <div className="w-full h-[2px] bg-gradient-to-r from-black via-red-500 to-black"></div>
            <div className="flex justify-center gap-2 mt-4">
                <span className="text-gray-400 text-lg">Bulid by</span>
                <a href="https://www.linkedin.com/in/shubham-awasthi-310520291/?skipRedirect=true"
              target="_blank"
              rel="noopener noreferrer">
                    <span className="text-gray-400 text-lg hover:underline hover:text-red-500">Shubham Awasthi.</span>
                </a>

                <span className="text-gray-400 text-lg">Check out the source code on</span>
                <a href="https://github.com/shubham22062"
                target="_blank"
                rel="noopener noreferrer"
                >
                    <span className="text-gray-400 text-lg hover:underline hover:text-red-500">Github</span>
                </a>
            </div>

            <div className="flex gap-5 justify-center pt-4">
                <a href="https://github.com/shubham22062">
              <img src="github.svg" className="w-10 h-10 bg-white border rounded-full transition-transform duration-300 hover:scale-105"/>
            </a>

            <a href="https://www.linkedin.com/in/shubham-awasthi-310520291/">
              <img src="Linkedin.svg" className="w-10 h-10 bg-white border rounded-full transition-transform duration-300 hover:scale-105"/>
            </a>

            <a href="https://x.com/Awa24777Shubham">
              <img src="twitter.svg" className="w-10 h-10 bg-white border rounded-full transition-transform duration-300 hover:scale-105"/>
            </a>

            <a href="mailto:shubhamawasthi021@gmail.com">
              <img src="email.svg" className="w-10 h-10 bg-white border rounded-full transition-transform duration-300 hover:scale-105"/>
            </a>
            </div>
        </div>
    )
}