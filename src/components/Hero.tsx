export default function Hero() {
    return <div className="grow flex items-center justify-center h-[90vh] w-full relative bg-cover hero-bg">
        <div className="bg-black opacity-50 absolute inset-0"></div>

        <div className="flex flex-col font-semibold text-white z-10 items-center gap-y-2">
            <span className="text-4xl">Selamat Datang di JOKER</span>
            <span className="">Selesaikan Tugas Sambil Belajar</span>
            <button className="px-4 py-2 btn">Order Now</button>
        </div>
    </div>
}