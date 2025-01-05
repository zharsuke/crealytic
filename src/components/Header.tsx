import Link from "next/link"

type HeaderProps = {
    hover: string
}

export default function Header({ hover }: HeaderProps) {
    return (
        <div className="navbar bg-base-100">
            <div className="flex-1 gap-3">
                <Link href={'/'} className={`text-xl font-bold ${hover}`}>Crealytic</Link>
            </div>

            {/* mobile navbar */}
            <div className="sm:hidden">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost btn-circle" aria-label="Menu Toggle">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7" /></svg>
                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-10 z-[1] right-0 top-0 p-3 shadow bg-base-100 rounded-box w-52">
                        <li><Link className={hover} href={'/script'}>Script</Link></li>
                        <li><Link className={hover} href={'/transcript'}>Transcript</Link></li>
                        <li><Link className={hover} href={'/analytic'}>Analytic</Link></li>
                    </ul>
                </div>
            </div>

            {/* desktop navbar */}
            <div className="hidden sm:block flex gap-4">
                <Link className={`mr-3 ${hover}`} href={'/script'}>Script</Link>
                <Link className={`mr-3 ${hover}`} href={'/transcript'}>Transcript</Link>
                <Link className={`mr-3 ${hover}`} href={'/analytic'}>Analytic</Link>
            </div>
        </div>
    )
}