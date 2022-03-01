const allpayars = () => {
    const searchValue = document.getElementById('search-box').value;
    const url = `https://www.thesportsdb.com/api/v1/json/2/searchplayers.php?p=${searchValue}`;
    fetch(url)
        .then((Response) => Response.json())
        .then((data) => showPalayerDetalics(data.data));

};
const showPalayerDetalics = (players) => {

    for (const data of players) {
        const perant = document.getElementById('player-contaner');
        const div = document.createElement('div');
        div.innerHTML = ` 
         <div class="cord border">
        <div class="pro-pic">
            <img class="w-25" src="" alt="">
        </div>
        <h2>Name:cool</h2>
        <h5>contry</h5>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptas, eaque.</p>
        <div class="buttons">
            <button class="btn btn-success">Details</button>
        </div>
        </div>`;
        perant.appendChild(div);
    };
    console.log(players);
};