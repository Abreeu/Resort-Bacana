import DestaqueIMG from "../assets/destaque-beach.jpg";

export default function Destaque () {
    return (
        <div data-aos="fade-up-right"
        data-aos-duration="1000" class="container max-w-4xl mx-auto px-4 py-16">
        <div class="flex flex-col-reverse lg:flex-row">
            <div class="lg:pr-10">
                <div class="text-sm text-gray-400 font-semibold">RESORT EM DESTAQUE</div>
                <div class="text-2xl">Ecoresort Praia do bacana</div>
                <div class="text-sm text-gray-400 font-semibold mt-2">Hotel qualidade 5 estrelas</div>
                <div class="text-sm text-gray-400 font-semibold mt-4">
                    <p class="mb-2">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tenetur alias aut
                        consequuntur voluptatem perferendis, delectus incidunt enim quasi dicta ex fugiat quo ipsam eius
                        maxime reiciendis voluptatum cum repellendus aliquam!</p>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tenetur alias aut consequuntur
                        voluptatem perferendis, delectus incidunt enim quasi dicta ex fugiat quo ipsam eius maxime
                        reiciendis voluptatum cum repellendus aliquam!</p>
                </div>
                <div class="mt-4">
                    <a href=""
                        class="inline-flex items-center text-yellow-800  bg-yellow-500 font-medium px-3 py-2 border border-gray-700 rounded">
                        Solicitar Reserva <svg class="w-4 h-4 ml-2" dataSlot="icon" fill="none" strokeWidth={1.5}
                            stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"
                            aria-hidden="true">
                            <path strokeLinecap="round" strokeLinejoin="round"
                                d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                        </svg>
                    </a>
                </div>
            </div>
            <div class="flex-shrink-0 lg:ml-auto mb-5 lg:mb-0">
                <img class="w-80" src={DestaqueIMG} alt="Destaque"/>
            </div>
        </div>
    </div>
    )
}