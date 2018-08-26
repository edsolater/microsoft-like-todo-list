function parseMolecule(atoms) {
  function analysis(atoms, weight = 1) {
    const regex = /((?:[A-Z][a-z]*|\([^\(\)]*?\)|\[[^\[\]]*?\]|\{[^\{\}]*?\}))(\d*)/g  // "Mg" / "Mg3" / "(OH)2"/ "[ON(SO3)2]2" / "{Be4C5[BCo3(CO2)3]2}4"
    let result = null
    let counter = {}

    while ((result = regex.exec(atoms))) {
      let { 1:content, 2:number} = result
      if (!number) number = 1 
      if (content.startsWith('(') || content.startsWith('[') || content.startsWith('{')) {
        const childCounter = analysis(content.slice(1, -1), number)
        for (const [content, number] of Object.entries(childCounter)) {
          if (counter[content]) {
            counter[content] += +number * weight
          } else {
            counter[content] = number * weight
          }
        }
      } else {
        if (counter[content]) {
          counter[content] += +number * weight
        } else {
          counter[content] = number * weight
        }
      }
    }
    return counter
  }
  return analysis(atoms)
}

// test
var water = ' As2{Be4C5[BCo3(CO2)3]2}4Cu5'
console.log(parseMolecule(water)) // return {H: 2, O: 1}
