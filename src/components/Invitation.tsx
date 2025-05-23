export default function Invitation() {
    return <div id="how-to-order" className="bg-base-100 py-10 mt-10">
        <div className="container p-10 mx-auto">
            <div className="flex flex-col justify-between gap-y-3 items-center">
                <span className="text-3xl">Simpel step order jokian</span>
                <p className="mt-3 text-center md:text-left md:mt-0">Order jokian dengan mudah hanya dengan 3 step berikut :</p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-y-4 gap-x-9 mt-10 md:mt-5">
                <div className="card card-border bg-base-100 shadow-lg shadow-base-200">
                    <div className="card-body">
                        <h2 className="card-title">Negosiasi langsung pada fitur chat</h2>
                        <p>Menggunakan fitur chat untuk negosiasi dan setup plan</p>
                    </div>
                </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-y-4 gap-x-9 mt-10 md:mt-5">
                <div className="card card-border bg-base-100 shadow-lg shadow-base-200 lg:col-start-2">
                    <div className="card-body">
                        <h2 className="card-title">Pembayaran lewat transfer bank atau cash</h2>
                        <p>Pembayaran bisa lewat cash, ataupun bisa memanfaatkan kemudahan mobile banking digital</p>
                    </div>
                </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-y-4 gap-x-9 mt-10 md:mt-5">
                <div className="card card-border bg-base-100 shadow-lg shadow-base-200 lg:col-start-3">
                    <div className="card-body">
                        <h2 className="card-title">Pemberian akun untuk tracking progress</h2>
                        <p>Akan diberikan akun yang akan berguna nantinya untuk memanfaatkan fitur-fitur yang tersedia seperti video tutorial, rekomendasi belajar, serta progress aplikasi</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
}