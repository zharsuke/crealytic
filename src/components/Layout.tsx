import Header from "./Header";

type LayoutProps = {
    children: React.ReactNode
}

export default function Layout({ children }: LayoutProps) {

    const hover = "hover:text-primary transition ease-in-out delay-150 hover:-translate-y-0.5 duration-300";

    return (
        <div className="max-w-screen-lg mx-auto">

            {/* header */}
            <Header hover={hover}></Header>

            {/* main content */}
            <div className="mx-2">
                {children}
            </div>

        </div>
    )
}