const config = require('./data/config')

module.exports = {
    calculate: async function ({
        space,
        used,
        type,
        specialfactor }) {

        let emissionfactor
        if (space == NaN || used == NaN) return
        if (!type === "distanceheat") { emissionfactor = config.emissionfactors[type] }
        else { if (!specialfactor == NaN) emissionfactor = specialfactor; else return; }

        let co2_emission = (used * emissionfactor).toFixed(3)
        console.log(co2_emission + " kg CO2")

    }


}

