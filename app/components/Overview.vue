<script setup lang="ts">
const stats = [
    { label: 'HEIGHT', value: '70 m / 229.6 ft' },
    { label: 'DIAMETER', value: '12.2 m / 39.9 ft' },
    { label: 'MASS', value: '1,420,788 kg / 3,125,735 lb' },
    { label: 'PAYLOAD TO LEO', value: '63,800 kg / 140,660 lb' },
    { label: 'PAYLOAD TO GTO', value: '26,700 kg / 58,860 lb' },
    { label: 'PAYLOAD TO MARS', value: '16,800 kg / 37,040 lb' },
]
</script>

<template>
    <section class="container flex flex-col md:flex-row items-center justify-between gap-10">
        <div class="w-[550px] text-white">
            <h2 class="text-2xl leading-tight font-bold mb-11 text-white" data-aos="fade-right">FALCON HEAVY <br>
                OVERVIEW</h2>

            <div class="space-y-4 mb-20">
                <div v-for="(stat, index) in stats" :key="stat.label" class="flex justify-between py-3"
                    data-aos="fade-right" :data-aos-delay="index * 50">
                    <span class="font-bold tracking-wider">{{ stat.label }}</span>
                    <span class="font-normal">{{ stat.value }}</span>
                </div>
            </div>

            <h2 class="text-2xl leading-tight font-bold mb-11 text-white uppercase" data-aos="fade-up">UNMATCHED <br>
                PERFORMANCE</h2>
            <p class="text-gray-300 leading-relaxed max-w-lg" data-aos="fade-up" data-aos-delay="100">
                With more than 5 million pounds of thrust at liftoff, Falcon Heavy is the most capable rocket flying. By
                comparison, the liftoff thrust of the Falcon Heavy equals approximately eighteen 747 aircraft at full
                power. Falcon Heavy can lift the equivalent of a fully loaded 737 jetliner—complete with passengers,
                luggage and fuel—to orbit.
            </p>
        </div>

        <div class="w-full flex justify-center" data-aos="zoom-in" data-aos-delay="200">
            <img src="../assets/svg/overview.svg" alt="Falcon Heavy" class=" object-contain">
        </div>
    </section>
</template>
