import { Bell, Grid, MessageCircle, Search, ChevronDown } from 'lucide-react'
import { Link } from '@tanstack/react-router'
import { useUserData } from '@/hooks/useUserData'

export const Header = () => {
    
    const { userData } = useUserData()

    return (
        <nav className="flex items-center justify-between px-8 bg-white border-b-2 border-gray-500 shadow-sm">

            {/* SECCIÓN IZQUIERDA: Logo y Buscador */}
            <div className="flex items-center gap-2 py-4">
                <img className="w-10 h-10 rounded-full border border-black" src="src/assets/icono2.png" alt="Logo" />

                <div className="relative group">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <Search className="h-4 w-4 text-gray-500" />
                    </div>
                    <input
                        type="text"
                        className="text-black w-48 md:w-64 pl-10 pr-3 py-2 border-none bg-gray-100 rounded-full text-sm focus:ring-2 focus:ring-blue-500 focus:bg-white transition-all outline-none"
                        placeholder="Buscar"
                    />
                </div>
            </div>

            {/* SECCIÓN CENTRAL: Navegación */}
            <div className="hidden md:flex items-center gap-4 rounded-full self-end">
                <Link
                    to="/home"
                    className="py-2 px-8 flex items-center h-full text-gray-600 font-medium hover:bg-blue-100 transition-colors relative border-b-[3px] border-transparent"
                    activeProps={{
                        className: "!border-blue-600"
                    }}
                >
                    Comunidad
                </Link>

                <Link
                    to="/ping"
                    className="py-2 px-8 flex items-center h-full text-gray-600 font-medium hover:bg-blue-100 transition-colors relative border-b-[3px] border-transparent"
                    activeProps={{
                        className: "!border-blue-600"
                    }}
                >
                    Empleos
                </Link>
            </div>

            {/* SECCIÓN DERECHA: Iconos de Acción y Perfil */}
            <div className="flex items-center gap-3 py-4">
                <button className="p-2 bg-gray-100 text-black active:text-blue-600 rounded-full hover:bg-blue-100 transition-colors">
                    <Grid size={20} />
                </button>

                <button className="p-2 bg-gray-100 text-black rounded-full hover:bg-blue-100 transition-colors">
                    <MessageCircle size={20} />
                </button>

                <div className="relative">
                    <button className="p-2 bg-gray-100 text-black rounded-full hover:bg-blue-100 transition-colors">
                        <Bell size={20} />
                    </button>
                    <span className="absolute top-0 right-0 flex h-4 w-4 items-center justify-center rounded-full bg-red-600 text-[10px] font-bold text-white border-2 border-white">
                        1
                    </span>
                </div>

                {/* Profile Avatar */}
                <div className="relative cursor-pointer group">
                    <div className="w-10 h-10 rounded-full border border-gray-200 overflow-hidden">
                        <img
                            src={userData?.Image}
                            alt="Profile"
                            className="w-full h-full object-cover"
                        />
                    </div>
                    <div className="absolute -bottom-1 -right-1 bg-white border border-gray-200 rounded-full p-0.5 shadow-sm">
                        <ChevronDown size={12} className="text-gray-600" />
                    </div>
                </div>
            </div>

        </nav>
    )
} 