export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-blue-50 p-2 sm:p-4 md:p-8">
      <div className="w-full max-w-7xl mx-auto backdrop-blur-xl bg-white/30 border-4 border-black rounded-3xl shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] overflow-hidden">
        <header className="border-b-4 border-black p-4 sm:p-6 bg-white/40 backdrop-blur-md">
          <div className="flex justify-between items-center gap-4">
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-black tracking-tight">
              LOGO
            </h1>

            {/* Mobile menu */}
            <div className="flex md:hidden"></div>

            {/* Desktop buttons */}
            <div className="hidden sm:flex items-center gap-3">
              <button className="btn bg-black hover:bg-black/80 text-white rounded-xl border-2 border-black font-bold shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                Sign in
              </button>
              <button className="btn rounded-xl border-2 border-black font-bold shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                Settings
              </button>
            </div>
          </div>
        </header>
        <div className="grid md:grid-cols-[280px_1fr] h-[calc(100vh-6rem)]">
          <div className="hidden md:block border-r-4 border-black bg-white/40 p-4">
            <nav className="space-y-2">
              <button className="flex items-center gap-2 text-lg font-bold p-3 bg-black text-white rounded-xl">
                Dashboard
              </button>
              <button className="flex items-center gap-2 text-lg font-bold p-3 hover:bg-black/10 rounded-xl">
                Analytics
              </button>
              <button className="flex items-center gap-2 text-lg font-bold p-3 hover:bg-black/10 rounded-xl">
                Calendar
              </button>
              <button className="flex items-center gap-2 text-lg font-bold p-3 hover:bg-black/10 rounded-xl">
                Messages
              </button>
            </nav>

            <div className="mt-8">
              <h2 className="text-xl font-black mb-4">PLATFORMS</h2>
              <div className="space-y-2">
                <button className="btn-outline w-full justify-start gap-2 rounded-xl border-2 border-black font-bold">
                  {/* <Instagram className="h-5 w-5" /> Instagram */}
                </button>
                <button className="btn-outline w-full justify-start gap-2 rounded-xl border-2 border-black font-bold">
                  {/* <Twitter className="h-5 w-5" /> Twitter */}
                </button>
                <button className="btn-outline w-full justify-start gap-2 rounded-xl border-2 border-black font-bold">
                  {/* <Linkedin className="h-5 w-5" /> LinkedIn */}
                </button>
                <button className="btn-outline w-full justify-start gap-2 rounded-xl border-2 border-black font-bold">
                  {/* <Youtube className="h-5 w-5" /> YouTube */}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
