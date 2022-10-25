import HeaderComponent from "./header";

export default function AdminLayout({ children }) {
  return (
    <div className="min-h-full">
        <HeaderComponent></HeaderComponent>
        <div className="py-10">			
            {children}
        </div>
    </div>
  )
}
