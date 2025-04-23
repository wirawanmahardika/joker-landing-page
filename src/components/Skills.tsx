import js from '../assets/javascript.png'
import ts from '../assets/typescript.png'
import go from '../assets/go.png'
import python from '../assets/python.png'
import php from '../assets/php.png'
import bootstrap from '../assets/bootstrap.png'
import laravel from '../assets/laravel.png'
import gofiber from '../assets/fiber.png'
import react from '../assets/react.png'
import tailwindcss from '../assets/tailwindcss.png'
import mysql from '../assets/mysql.png'

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
        {
            image: laravel,
            name: 'laravel',
            desc: 'Laravel adalah framework PHP open-source yang dirancang untuk pengembangan web dengan sintaks yang elegan dan ekspresif. Laravel mempermudah pembuatan aplikasi web dengan menyediakan fitur seperti routing, ORM (Eloquent), templating (Blade), sistem autentikasi, dan dukungan bawaan untuk RESTful API.'
        },
        {
            image: python,
            name: 'python',
            desc: 'Python adalah bahasa pemrograman tingkat tinggi yang terkenal karena sintaksnya yang bersih, mudah dibaca, dan mendukung banyak paradigma pemrograman seperti prosedural, berorientasi objek, dan fungsional. Python sangat populer dalam berbagai bidang, termasuk pengembangan web, data science, automasi, kecerdasan buatan, dan scripting.'
        },
        {
            image: php,
            name: 'php',
            desc: 'PHP (Hypertext Preprocessor) adalah bahasa pemrograman sisi server yang dirancang khusus untuk pengembangan web. PHP berjalan di server dan menghasilkan HTML untuk ditampilkan di browser, serta dapat terintegrasi dengan berbagai basis data seperti MySQL. Meski sempat dianggap kuno, PHP masih banyak digunakan, terutama karena framework populer seperti Laravel dan sistem manajemen konten seperti WordPress.'
        },
        {
            image: gofiber,
            name: 'fiber',
            desc: 'Fiber adalah framework web untuk Golang yang dibangun di atas fasthttp — HTTP engine tercepat di Go. Fiber menawarkan performa tinggi dan API yang sederhana, sehingga sangat ideal untuk membuat REST API, aplikasi microservices, atau web backend dengan struktur bersih dan efisien.'
        },
        {
            image: react,
            name: 'react',
            desc: 'React adalah library JavaScript open-source yang dikembangkan oleh Facebook untuk membangun antarmuka pengguna (UI) berbasis komponen. React memungkinkan pembuatan UI yang dinamis dan efisien dengan menggunakan konsep virtual DOM untuk meminimalkan manipulasi DOM langsung.'
        },
        {
            image: tailwindcss,
            name: 'tailwindcs',
            desc: 'Tailwind CSS adalah framework utility-first untuk CSS yang memungkinkan kamu membangun desain langsung di markup dengan menggunakan class-class kecil dan terperinci.'
        },
        {
            image: mysql,
            name: 'MySQL',
            desc: 'MySQL adalah sistem database relasional yang digunakan untuk menyimpan, mengatur, dan mengambil data secara terstruktur. MySQL sering digunakan dalam aplikasi web dan backend karena cepat, stabil, dan mudah diintegrasikan dengan berbagai bahasa pemrograman seperti PHP, Node.js, Python, dan Go'
        },
    ]

    return <div id='expertise' className="py-10">
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