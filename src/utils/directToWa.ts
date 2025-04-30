export default function directToWA(pesan: string) {
    const noWa = import.meta.env.VITE_WA
    const anchorTag = document.createElement("a")
    anchorTag.href = `https://wa.me/${noWa}?text=${pesan}`
    anchorTag.target = "_blank"
    anchorTag.click()
}