export default function Hero() {
    return <div className="flex items-center justify-center h-[90vh] w-full relative bg-cover hero-bg bg-center">
        <div className="bg-black opacity-50 absolute inset-0"></div>

        <div className="flex flex-col font-semibold text-white z-10 items-center gap-y-2">
            <span className="text-2xl md:text-4xl">Selamat Datang di JOKER</span>
            <span className="text-sm md:text-base">Selesaikan Tugas IT Anda Sambil Belajar</span>
            <button className="text-sm md:text-base px-4 py-2 btn">Order Now</button>
        </div>
    </div>
}