export default function Form () {
    return (
        <div data-aos="fade-up"
        data-aos-duration="1000"  class="py-16">
        <div class="flex justify-center container max-w-4xl mx-auto px-4">
            <div class="mt-7">
                <form class="grid grid-cols-2 lg:grid-cols-3 gap-4">
                    <select class="px-2 py-1 border bg-gray-300 rounded text-gray-600">
                        <option>Escolha o estado</option>
                    </select>
                    <select class="px-2 py-1 border bg-gray-300 rounded text-gray-600">
                        <option>Escolha a cidade</option>
                    </select>
                    <button
                        class="col-span-2 lg:col-span-1 justify-center inline-flex items-center text-yellow-800  bg-yellow-500 font-medium px-3 py-2 border border-gray-700 rounded">
                        <svg class="w-4 h-4 mr-2" data-slot="icon" fill="none" stroke-width="1.5" stroke="currentColor"
                            viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                            <path stroke-linecap="round" stroke-linejoin="round"
                                d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z">
                            </path>
                        </svg> Pesquisar cidade</button>
                </form>
            </div>

        </div>
    </div>
    )
}