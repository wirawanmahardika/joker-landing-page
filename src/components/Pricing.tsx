export default function Pricing() {
    return <div id="pricing" className="bg-base-300 py-10 my-10">
        <div className="container p-10 mx-auto">
            <div className="flex flex-col justify-between gap-y-3 items-center">
                <span className="text-3xl">Cek Harga</span>
                <p>Harga project secara garis besar</p>
            </div>

            <div className="grid md:grid-cols-3 justify-items-end gap-5 mt-10">
                <Card title="Landing Page" price="30k - 100k" />
                <Card title="Monolith App" price="100k - 300k" />
                <Card title="Monolith App + Admin Panel" price="200k - 500k" />
            </div>
        </div>
    </div>
}

function Card({title, price}: {title: string; price: string;}) {
    return <div className="card w-full bg-base-100 shadow-xl shadow-base-300">
        <div className="card-body">
            <div className="flex justify-between flex-col gap-y-1 mt-auto">
                <h2 className="text-xl lg:text-3xl font-bold">{title}</h2>
                <span className="text-base lg:text-lg">Rp {price}</span>
            </div>
            <div className="mt-1">
                <button className="btn btn-primary btn-block">Order</button>
            </div>
        </div>
    </div>
}