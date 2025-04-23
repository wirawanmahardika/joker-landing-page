export default function About() {
    return <div id="why-us" className="container p-10 mx-auto mt-10 flex flex-col gap-y-14">
        <div className="flex flex-col justify-between gap-y-3 items-center">
            <span className="text-3xl">Project Based Learning</span>
        </div>
        
        <div className="grid grid-cols-2 gap-9">
            <div className="flex flex-col justify-between">
                <span className="font-semibold">Learn</span>
                <p className="text-3xl">Temukan cara terbaik belajar sambil membuat project dengan harga terjangkau untuk mahasiswa</p>
            </div>
            <div>
                <p>Joki Kami dirancang untuk memberdayakan Anda dengan keterampilan yang dibutuhkan untuk mendapatkan nilai yang diimpikan. Dengan fokus pada pengetahuan praktis dan penerapan di dunia nyata, Anda akan siap memahami gambaran besar tentang cara pembuatan aplikasi serta pengetahun sekilas tentang teknologi yang digunakan sehingga memudahkan perjalanan belajar selanjutnya.</p>
            </div>
        </div>

        <div className="grid grid-cols-3 gap-6">
            <div className="card card-border bg-base-200">
                <div className="card-body">
                    <h2 className="card-title">Expert Programmer dengan pengalaman berbagai teknologi modern</h2>
                    <p>Kami memiliki banyak variasi teknologi yang dikuasai dengan penulisan kode yang optimal dan mudah dibaca serta pengalaman bertahun-tahun dalam penggunaannya</p>
                </div>
            </div>
            <div className="card card-border bg-base-200 col-start-2">
                <div className="card-body">
                    <h2 className="card-title">Video belajar khusus untuk project request anda</h2>
                    <p>Project anda akan memiliki tutorial video yang terkait langsung dengan project request anda saat itu yang memungkinkan anda belajar dengan lebih mudah</p>
                </div>
            </div>
            <div className="card card-border bg-base-200 col-start-3">
                <div className="card-body">
                    <h2 className="card-title">Rekomendasi sumber belajar unggulan pada tiap tutorial</h2>
                    <p>Kami akan memberikan rekomendasi sumber belajar terbaik langsung untuk menambah ilmu lebih luas lagi terhadap topik pelajaran yang dibahas. Sumber berupa dokumentasi asli teknologi, video youtube dan beberapa artikel terkait</p>
                </div>
            </div>
        </div>
        
        {/* <div className="grid grid-cols-3 gap-6">
            <div className="card card-border bg-base-200 col-start-2">
                <div className="card-body">
                    <h2 className="card-title">Video belajar khusus untuk project request anda</h2>
                    <p>Project anda akan memiliki tutorial video yang terkait langsung dengan project request anda saat itu yang memungkinkan anda belajar dengan lebih mudah</p>
                </div>
            </div>
        </div>
        <div className="grid grid-cols-3 gap-6">
            <div className="card card-border bg-base-200 col-start-3">
                <div className="card-body">
                    <h2 className="card-title">Rekomendasi sumber belajar unggulan pada tiap tutorial</h2>
                    <p>Kami akan memberikan rekomendasi sumber belajar terbaik langsung untuk menambah ilmu lebih luas lagi terhadap topik pelajaran yang dibahas. Sumber berupa dokumentasi asli teknologi, video youtube dan beberapa artikel terkait</p>
                </div>
            </div>
        </div> */}
    </div>
}