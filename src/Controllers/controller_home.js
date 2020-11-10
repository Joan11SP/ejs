const fetch = require('node-fetch');

const vista = (req,res) => {
    res.render('home');
} 

const send = async (req,res) => {    
    const {id} = req.body;
    let path = `https://jsonplaceholder.typicode.com/photos?_limit=${id}`
    const send = await fetch(path,{method:'GET'});
    const data = await send.json();
    res.send(data)
}

module.exports = {
    vista,
    send
}

