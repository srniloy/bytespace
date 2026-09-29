
export default function HappyUserCard() {
    return (
        <div className="hidden sm:block absolute bottom-[14%] -left-2 md:left-20 bg-white rounded-2xl p-4 shadow-xl z-50 w-44 md:w-52">
            <h3 className="font-bold text-gray-800 text-sm md:text-base label-m">Happy Students</h3>
            <div className="flex items-center gap-1 mt-1 mb-3">
                <span className="text-[10px] md:text-xs text-black body-xs">4.5 <span className='text-gray-500'>(240)</span></span>
                <span className="text-accent-lime text-lg leading-3">★</span>
            </div>
            {/* Avatar Stack */}
            <div className="flex items-center">
                <div className="flex -space-x-2">
                    {[1, 2, 3, 4].map((i) => (
                        <img key={i} className="w-6 h-6 md:w-8 md:h-8 rounded-full border-2 border-white object-cover" src={`https://i.pravatar.cc/100?img=${i}`} alt="Student" />
                    ))}
                    <div className="w-6 h-6 md:w-8 md:h-8 rounded-full border-2 border-white bg-[#CCFF00] flex items-center justify-center text-[8px] md:text-[10px] font-bold text-black -ml-1">
                        2K+
                    </div>
                </div>
            </div>
        </div>
    )
}
