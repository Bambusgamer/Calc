const space = 300
const used = 7500
const type = "liquidgas"
const specialfactor = "a"

const main = async () => {

    
    let res = await require('./calc.js').calculate({ space, used, type, specialfactor })

    // console.log(res.co2 + `\n` + res.kg_co2_m2)

}

main();