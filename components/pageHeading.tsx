function PageHeading({ title, children }: { title: string; children?: React.ReactNode }) {
    return (
        <header>
            <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 justify-between flex items-center">
                <h1 className="text-3xl font-bold leading-tight tracking-tight text-gray-900">
                    {title}
                </h1>
                {children}
            </div>
        </header>
    )
}

export default PageHeading;