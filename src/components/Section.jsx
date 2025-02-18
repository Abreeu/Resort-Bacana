import Hotel1 from "../assets/hotel1-beach.jpg";
import Hotel2 from "../assets/hotel2-beach.jpg";
import Hotel3 from "../assets/hotel3-beach.jpg";
import Hotel4 from "../assets/hotel4-beach.jpg";
export default function Section () {
    return (
        <div>
        <div data-aos="fade-up"
          data-aos-duration="1000"  class="container max-w-4xl mx-auto px-4">
            <h3 class="text-2xl text-gray-500 font-semibold text-center mb-8">Conheça mais espaços</h3>

            <div class="md:grid md:grid-cols-4 md:grid-rows-2 md:gap-4 space-y-5 md:space-y-0">
                <div class="relative md:col-span-2 md:row-span-2 rounded-md overflow-hidden shadow-md">
                    <div class="absolute bottom-0 left-0 bg-yellow-500 text-white px-2 py-1 font-semibold">
                        Resort Bacana
                    </div>
                    <img class="w-full h-full object-cover" src={Hotel1} alt="Hotel1"/>
                </div>
                <div class="relative md:col-span-2 md:h-40 rounded-md overflow-hidden shadow-md">
                    <div class="absolute bottom-0 left-0 bg-yellow-500 text-white px-2 py-1 font-semibold">
                        Beach Bacana
                    </div>
                    <img class="w-full h-full object-cover" src={Hotel2} alt="Hotel2"/>
                </div>
                <div class="relative rounded-md overflow-hidden shadow-md">
                    <div class="absolute bottom-0 left-0 bg-yellow-500 text-white px-2 py-1 font-semibold">
                        Park Bacana
                    </div>
                    <img class="w-full h-full object-cover" src={Hotel3} alt="Hotel3"/>
                </div>
                <div class="relative rounded-md overflow-hidden shadow-md">
                    <div class="absolute bottom-0 left-0 bg-yellow-500 text-white px-2 py-1 font-semibold">
                        Suite Bacana
                    </div>
                    <img class="w-full h-full object-cover" src={Hotel4} alt="Hotel4"/>
                </div>
            </div>
        </div>
    </div>
    )
}