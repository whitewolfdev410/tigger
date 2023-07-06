import Link from "next/link"

interface Props {
    href: string
    children: React.ReactNode
}

const PinkButton: React.FC<Props> = ({href, children}) => {
    return (
        <Link href={href}>
            <div className="bg-[#F2AEC1] px-5 py-3 rounded font-bold transition-all hover:scale-105 cursor-pointer text-center text-lg">
            {children}
            </div>
        </Link>
    )
}

export default PinkButton