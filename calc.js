const config = require('./data/config')

module.exports = {

    calculate: async function ({
        space,
        used,
        type,
        specialfactor }) {



        if (isNaN(space) || isNaN(used)) return
        if (type === "distanceheat" && isNaN(specialfactor)) return
        let emissionfactor = type === "distanceheat" ? specialfactor : config.emissionfactors[type]

        const percentage = async (kg) => {
            if (kg < 5) res = 100
            else if (kg <= 15) return 10
            else if (kg <= 20) return 20
            else if (kg <= 30) return 40
            else if (kg <= 40) return 60
            else if (kg <= 45) return 80
            else if (kg > 45) return 90
        }


        emissionfactor = config.emissionfactors[type]
        let co2_emission = Math.floor(used * emissionfactor)//.toFixed(3)
        let specific_emission = Math.floor(co2_emission / space).toFixed(1)
        let landlord_percentage = await percentage(specific_emission)

        console.log(`Space: ${space}\nUsed: ${used} ${config.units[type]}\nType: ${type}`)
        console.log(`Emission: ` + co2_emission + ` kg CO2\nSpecific Emission: ` + specific_emission + `kg CO2/m2\nLandlord Percentage: ` + landlord_percentage + ` %`)

        let sum = 0
        for (let year in config.co2_cost) {
            let co2_cost = config.co2_cost[year]
            let cost = Math.floor(Math.round(co2_emission / 1000 * co2_cost))
            console.log(`${year} : ${cost} €`)
            if (year === "2027") break
            sum += cost
        }
        console.log(`\n2021-2026 : ${Math.floor(sum / 100 * landlord_percentage)} €\nYearly for 100€ : ${Math.floor((Math.round(co2_emission / 1000 * config.co2_cost[2027]) / 100 * landlord_percentage))} €`)

        return {
            'co2': co2_emission,
            'kg_co2_m2': specific_emission
        }
    }


}

