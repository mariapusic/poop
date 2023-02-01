document.getElementById('AddButton').addEventListener('click', async () => {
    const Data = {
        breed: document.getElementById('breed').value,
        lifespan: document.getElementById('lifespan').value,
        height: document.getElementById('height').value,
        colors: document.getElementById('colors').value,
        weight: document.getElementById('weight').value
    }
    const req = {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(Data)
    }
    console.log(req)
    const res = await fetch('/Doggy', req)
    console.log(res)
    if(res.ok){
        document.getElementById('result').innerText = 'Doggy successfully added.'
    }
    else{
        document.getElementById('result').innerText = 'Server made a boooobo'
    }
})