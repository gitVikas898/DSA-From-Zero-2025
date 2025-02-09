function assignElements(groups, elements) {
   
    const elementMap = new Map();
    for (let j = 0; j < elements.length; j++) {
        const elem = elements[j];
        if (!elementMap.has(elem)) {
            elementMap.set(elem, j); 
        }
    }

    const assigned = [];
    for (let i = 0; i < groups.length; i++) {
        const group = groups[i];
        let found = -1;
       
        for (const [elem, index] of elementMap.entries()) {
            if (elem === 0) continue; 
            if (group % elem === 0) {
                if (found === -1 || index < found) {
                    found = index; 
                }
            }
        }
        assigned.push(found);
    }
    return assigned;
}