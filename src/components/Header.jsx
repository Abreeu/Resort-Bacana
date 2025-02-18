import Logo from "../assets/logo.png"

export default function Header () {
    return (
        <div >
        <div class="flex flex-col lg:flex-row container max-w-4xl mx-auto px-4 h-24 items-center justify-between">
           <img data-aos="fade-right"  data-aos-duration="1000" class="h-14 lg:h-20 lg:-ml-36" src={Logo} alt="logo" />
            <ul data-aos="fade-left"  data-aos-duration="1000" class="flex space-x-4 mb-2">
                <li>
                    <a class="text-sm text-gray-600 hover:text-gray-800 hover:underline" href="">Como Reservar</a>
                </li>
                <li>
                    <a class="text-sm text-gray-600 hover:text-gray-800 hover:underline" href="">Sobre nós</a>
                </li>
                <li>
                    <a class="text-sm text-gray-600 hover:text-gray-800 hover:underline" href="">Informações</a>
                </li>
                <li>
                    <a class="text-sm text-gray-600 hover:text-gray-800 hover:underline" href="">Contato</a>
                </li>
            </ul>
        </div>
    </div>

    )
}