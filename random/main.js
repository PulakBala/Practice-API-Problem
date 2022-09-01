/*
৬. randomuser এর ওয়েবসাইট এ গিয়ে (randomuser.me) এ গিয়ে সেখান থেকে ডাটা লোড করবে। তারপর ইউজারের ছবি দেখাবে। শুধু সেটাও না। ইউজারের location এর মধ্যে যত কিছু আছে। সব দেখাবে ওয়েবসাইট এ। অর্থাৎ street, city, coordinates, timezone যেকোন একভাবে দেখলেই হবে। তবে দেখাতে হবে। 
*/

const randomUser = () => {
    const url = 'https://randomuser.me/api/?gender=female';
    fetch(url)
    .then(res => res.json())
    .then(data => displayUser(data.results[0]))
}

const displayUser = user => {
    console.log(user)
    const randomUser = document.getElementById('random-user');
    randomUser.innerHTML = ` `;
    const newDiv = document.createElement('div');
    newDiv.innerHTML = `
        <img src = "${user.picture.large}" >
        <h3>Name : ${user.name.title} ${user.name.first} ${user.name.last}</h3>
        <h3>City : ${user.location.city} </h3>
        <h3>Street : ${user.location.street.number} ${user.location.street.name}</h3>

    `;
    randomUser.appendChild(newDiv);
}
