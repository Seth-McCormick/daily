let packages = [
    { heavy: true, priority: false, fragile: false, to: 'Harrington', trackingNumber: '1324kjs', image: './package.jpg' },
    { heavy: false, priority: true, fragile: true, to: 'Mark', trackingNumber: '1325sdk', image: './package.jpg' },
    { heavy: true, priority: false, fragile: true, to: 'Mick', trackingNumber: 'jffd147', image: './package.jpg' },
    { heavy: false, priority: false, fragile: false, to: 'Jake', trackingNumber: 'acdc145', image: './package.jpg' },
    { heavy: true, priority: true, fragile: true, to: 'Brittany', image: './package.jpg' },
    { heavy: false, priority: true, fragile: false, to: 'Zach', trackingNumber: '8081baz', image: './package.jpg' },
    { heavy: true, priority: false, fragile: true, to: 'Jeremy', trackingNumber: 'suz2367', image: './package.jpg' }]

let currentPackage = packages

// console.log(`${packages[3].to} lost his package ${packages[3].trackingNumber}`)

function startSearch() {
    let index = Math.floor(Math.random() * currentPackage.length)
    console.log(index)
    currentPackage[index]
    console.log('Missing package is', currentPackage[index]);
    missingPackage = currentPackage[index]
}

function drawPackages() {
    let template = ''
    currentPackage.forEach(currentPackage => {
        template += `
        <div class="col-md-3 rounded shadow bg-light my-1 p-1" onclick="accuse('${currentPackage.to}')" >
            <img class="img-fluid" src="${currentPackage.image}" alt="">
            <p class="text-center bg-light"><b>${currentPackage.to}</b></p>
            </div>
    `
    })
    document.getElementById('Package').innerHTML = template
}




function guessHeavy() {
    let heavyPackage = currentPackage.filter(p => p.heavy == missingPackage.heavy)
    console.log(heavyPackage);
    currentPackage = heavyPackage

    drawPackages()
}

function guessFragile() {
    let fragilePackage = currentPackage.filter(p => p.fragile == missingPackage.fragile)
    console.log(fragilePackage);
    currentPackage = fragilePackage

    drawPackages()
}

function guessPriority() {
    let priorityPackage = currentPackage.filter(p => p.priority == missingPackage.priority)
    console.log(priorityPackage)
    currentPackage = priorityPackage

    drawPackages()
}

function accuse(name) {
    let found = currentPackage.find(p => p.to == name)
    console.log(found);
    if (found.to == currentPackage.to) {
        window.alert('You found it!')
    }
    else {
        window.alert('You Failed')
    }
}

startSearch()
drawPackages()