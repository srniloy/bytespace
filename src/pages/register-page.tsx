
// --- Icons ---
const ButterflyLogo = () => (
    <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-8 h-8">
        <path d="M50 50C50 50 70 20 90 20C90 20 95 50 50 90Z" fill="#CCFF00" />
        <path d="M50 50C50 50 30 20 10 20C10 20 5 50 50 90Z" fill="#CCFF00" />
    </svg>
);





// Dummy component for now, will update it later with appropiate design and content.





// --- Component ---
export default function RegisterPage() {
    return (
        <div className="min-h-screen w-full flex flex-col lg:flex-row bg-white font-sans">

            {/* =========================================
          LEFT SIDE: Showcase (Blue Background)
      ========================================= */}
            <div className="w-full lg:w-1/2 bg-[#0033FF] relative overflow-hidden flex flex-col p-8 lg:p-16 min-h-[600px] lg:min-h-screen">

                {/* Grid Pattern Overlay (CSS generated) */}
                <div
                    className="absolute inset-0 pointer-events-none opacity-20"
                    style={{
                        backgroundImage: `
              linear-gradient(to right, rgba(255,255,255,0.3) 1px, transparent 1px),
              linear-gradient(to bottom, rgba(255,255,255,0.3) 1px, transparent 1px)
            `,
                        backgroundSize: '100px 100px'
                    }}
                />

                {/* Logo (Top Left) */}
                <div className="relative z-20 mb-12 lg:mb-24">
                    <ButterflyLogo />
                </div>

                {/* Left Side Typography */}
                <div className="relative z-20 max-w-md mb-16">
                    <div className="border border-blue-400/50 p-6 rounded-sm">
                        <h1 className="text-white text-xl font-semibold mb-2">Sign up and come in</h1>
                        <p className="text-blue-100 text-sm leading-relaxed">
                            The registration process is straightforward, uncomplicated, and efficient, allowing users to sign up quickly, easily, and at no cost
                        </p>
                    </div>
                </div>

                {/* --- COMPLEX FLOATING UI ELEMENTS (DESKTOP ONLY) --- */}
                <div className="hidden lg:block absolute inset-0 z-10 pointer-events-none">

                    {/* Main Data Card */}
                    <div className="absolute top-[35%] left-[15%] w-[320px] bg-white rounded-3xl p-4 shadow-2xl">
                        <div className="w-full h-32 bg-gray-900 rounded-xl mb-4 overflow-hidden relative">
                            {/* Mock Chart lines */}
                            <div className="absolute bottom-0 left-0 right-0 h-16 flex items-end justify-around px-2 gap-1 opacity-50">
                                {[40, 70, 45, 90, 60, 80, 30, 50].map((h, i) => (
                                    <div key={i} className="w-4 bg-blue-500 rounded-t-sm" style={{ height: `${h}%` }}></div>
                                ))}
                            </div>
                            <div className="absolute top-2 left-2 flex gap-2">
                                <div className="bg-white/20 px-2 py-1 rounded text-[8px] text-white">Tutorial</div>
                                <div className="bg-white/20 px-2 py-1 rounded text-[8px] text-white">Data</div>
                            </div>
                        </div>

                        <h3 className="font-bold text-gray-900 text-lg mb-1">The Power of Big Data</h3>
                        <p className="text-xs text-gray-500 mb-3">by purpofol.studio</p>

                        <div className="flex items-center justify-between mb-3">
                            <div className="flex items-center gap-1 text-[10px] text-gray-600 bg-gray-100 px-2 py-1 rounded">
                                <span>📊</span> Beginner
                            </div>
                            <div className="flex -space-x-2">
                                {[1, 2, 3].map(i => <img key={i} src={`https://i.pravatar.cc/100?img=${i + 10}`} className="w-5 h-5 rounded-full border border-white" alt="user" />)}
                                <div className="w-5 h-5 rounded-full bg-[#0033FF] text-white text-[8px] flex items-center justify-center border border-white">2k+</div>
                            </div>
                        </div>

                        <div className="flex items-center justify-between mt-4">
                            <span className="text-blue-600 font-bold">$25<span className="text-xs text-gray-400 font-normal">/lifetime</span></span>
                            <span className="text-sm font-bold text-gray-800 flex items-center gap-1">4.5 <span className="text-[#CCFF00]">★</span></span>
                        </div>
                    </div>

                    {/* Secondary Left Card (Peeking out) */}
                    <div className="absolute top-[45%] left-[5%] w-[140px] bg-white rounded-2xl p-3 shadow-xl -z-10">
                        <div className="w-full h-24 bg-gray-200 rounded-lg mb-2"></div>
                        <div className="text-[10px] text-gray-500 bg-gray-100 inline-block px-2 py-1 rounded mb-2">17 Lessons</div>
                        <h4 className="font-bold text-sm text-gray-900">Build Digital...</h4>
                    </div>

                    {/* Happy Students Card (Bottom Right of Showcase) */}
                    <div className="absolute bottom-[10%] left-[35%] w-[200px] bg-[#CCFF00] rounded-2xl p-4 shadow-xl">
                        <h4 className="font-bold text-gray-900 text-sm mb-1">Happy Students</h4>
                        <div className="flex items-center gap-1 mb-3">
                            <span className="text-[10px] font-bold text-gray-800">4.5</span>
                            <span className="text-yellow-500 text-[10px]">★</span>
                            <span className="text-[10px] text-gray-600">(240)</span>
                        </div>
                        <div className="flex -space-x-2">
                            {[4, 5, 6, 7, 8].map(i => <img key={i} src={`https://i.pravatar.cc/100?img=${i + 20}`} className="w-6 h-6 rounded-full border-2 border-[#CCFF00]" alt="user" />)}
                            <div className="w-6 h-6 rounded-full bg-black text-white text-[8px] flex items-center justify-center border-2 border-[#CCFF00]">2k+</div>
                        </div>
                    </div>

                    {/* Abstract Shapes (Squiggles & Triangles) */}
                    <svg className="absolute bottom-[20%] right-[20%] w-16 h-16 text-white opacity-90" viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="15" strokeLinecap="round">
                        <path d="M20 80 Q 40 50 60 80 T 90 80" />
                    </svg>
                    <div className="absolute bottom-[5%] left-[10%] w-0 h-0 border-l-[50px] border-l-transparent border-b-[80px] border-b-[#CCFF00] border-r-[50px] border-r-transparent rotate-12"></div>
                    <div className="absolute top-[30%] left-[5%] w-16 h-16 rounded-full border-[12px] border-[#CCFF00]"></div>
                </div>
            </div>


            {/* =========================================
          RIGHT SIDE: Sign Up Form
      ========================================= */}
            <div className="w-full lg:w-1/2 flex items-center justify-center p-6 md:p-12 lg:p-24 bg-white z-20">

                <div className="w-full max-w-[440px] flex flex-col h-full justify-center">

                    {/* Form Header */}
                    <div className="mb-10 text-left mt-10 lg:mt-0">
                        <span className="text-[#0033FF] font-medium text-sm mb-2 block">Create an Account</span>
                        <h2 className="text-4xl md:text-[44px] font-bold text-black tracking-tight leading-[1.1]">
                            Welcome to <br /> ByteSpace
                        </h2>
                    </div>

                    {/* Form */}
                    <form className="flex flex-col gap-5" onSubmit={(e) => e.preventDefault()}>

                        {/* Full Name Input */}
                        <div className="flex flex-col gap-2">
                            <label htmlFor="fullName" className="text-sm font-medium text-gray-700">Full Name</label>
                            <input
                                id="fullName"
                                type="text"
                                placeholder="Jamie Davis"
                                className="w-full px-4 py-3.5 rounded-xl border border-gray-200 text-gray-800 placeholder-gray-400 outline-none focus:border-[#0033FF] focus:ring-1 focus:ring-[#0033FF] transition-all duration-200"
                            />
                        </div>

                        {/* Email Input */}
                        <div className="flex flex-col gap-2">
                            <label htmlFor="email" className="text-sm font-medium text-gray-700">Email</label>
                            <input
                                id="email"
                                type="email"
                                placeholder="designer@example.com"
                                className="w-full px-4 py-3.5 rounded-xl border border-gray-200 text-gray-800 placeholder-gray-400 outline-none focus:border-[#0033FF] focus:ring-1 focus:ring-[#0033FF] transition-all duration-200"
                            />
                        </div>

                        {/* Password Input */}
                        <div className="flex flex-col gap-2">
                            <label htmlFor="password" className="text-sm font-medium text-gray-700">Password</label>
                            <input
                                id="password"
                                type="password"
                                placeholder="••••••••"
                                className="w-full px-4 py-3.5 rounded-xl border border-gray-200 text-gray-800 placeholder-gray-400 outline-none focus:border-[#0033FF] focus:ring-1 focus:ring-[#0033FF] transition-all duration-200"
                            />
                        </div>

                        {/* Submit Button Area */}
                        <div className="flex justify-end mt-4">
                            <button
                                type="submit"
                                className="bg-[#CCFF00] hover:bg-[#b3e600] text-black font-semibold py-3.5 px-10 rounded-full transition-colors duration-200 w-full sm:w-auto"
                            >
                                Continue
                            </button>
                        </div>
                    </form>

                    {/* Spacer to push footer text down on large screens if needed */}
                    <div className="flex-grow min-h-[40px]"></div>

                    {/* Footer Text */}
                    <p className="text-center text-[15px] text-gray-500 mt-10">
                        Already have an account? <a href="#" className="text-[#0033FF] hover:underline font-medium">Login</a>
                    </p>

                </div>
            </div>
        </div>
    );
}