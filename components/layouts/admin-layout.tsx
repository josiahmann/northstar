import HeaderComponent from "./Navigation";

export default function AdminLayout({ children }) {
  return (
    <div className="min-h-full">
        <HeaderComponent></HeaderComponent>
        <div className="py-10 bg-gray-50">			
            {children}
        </div>
    </div>
  )
}
