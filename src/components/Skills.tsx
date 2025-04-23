import js from '../assets/javascript.png'
import ts from '../assets/typescript.png'
import bootstrap from '../assets/bootstrap.png'
import go from '../assets/go.png'

export default function Skills() {
    const skills = [
        {
            image: js,
            name: 'javascript',
            desc: 'JavaScript adalah bahasa pemrograman dinamis, berorientasi objek, dan berbasis prototipe yang digunakan untuk membangun aplikasi web interaktif dan server-side. Ia memiliki dukungan luas dari komunitas dan ekosistem pustaka yang besar, menjadikannya salah satu bahasa paling populer di dunia.'
        },
        {
            image: go,
            name: 'go',
            desc: 'Go (atau Golang) adalah bahasa pemrograman open-source yang dikembangkan oleh Google, dirancang untuk efisiensi, kecepatan eksekusi, dan kemudahan dalam pengembangan perangkat lunak yang skalabel dan andal, terutama di sisi backend dan sistem.'
        },
        {
            image: ts,
            name: 'typescript',
            desc: 'TypeScript adalah superset dari JavaScript yang menambahkan dukungan tipe statis (static typing) dan fitur pemrograman yang lebih kuat, seperti interface, enum, dan generics. TypeScript dikompilasi ke JavaScript biasa sehingga bisa dijalankan di semua lingkungan yang mendukung JavaScript.'
        },
        {
            image: bootstrap,
            name: 'bootstrap',
            desc: 'Bootstrap adalah framework CSS open-source yang digunakan untuk membangun antarmuka web yang responsif dan mobile-first dengan cepat. Dikembangkan oleh Twitter, Bootstrap menyediakan kumpulan komponen UI siap pakai seperti tombol, form, navigasi, grid sistem, dan lainnya.'
        },
    ]


    return <div className="py-10">
        <div className="container p-10 mx-auto">
            <div className="flex flex-col justify-between gap-y-3 items-center">
                <span className="text-3xl">Our Ability</span>
                <p className="text-">Teknologi-teknologi yang kami kuasai : </p>
            </div>

            <div className="grid grid-cols-4 gap-14 mt-5">
                {
                    skills.map(s => {
                        return <div className="card bg-base-300 shadow-sm">
                            <figure className='bg-base-200'><img src={s.image} alt={s.name} /></figure>

                            <div className="card-body">
                                <h2 className="card-title capitalize text-xl">{s.name}</h2>
                                <p>{s.desc}
                                </p>
                            </div>
                        </div>
                    })
                }
            </div>
        </div>
    </div>
}