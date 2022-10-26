function ActionsLayout({ children }: { children: React.ReactNode }) {
    return (
        <div className="pt-5">
        <div className="flex justify-end">
            {children}
            </div>
            </div>
    )
}

export default ActionsLayout;