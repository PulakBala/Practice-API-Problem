/*
the meal db এর খালতো ভাই the sports db থেকে কিছু জিনিস এনে দেখাবে। একজাক্টলি কি দেখাতে হবে। সেটা আমি বলে দিবো না। তুমি ওদের ওয়েবসাইট এ যাও। সেখানে কি কি লেখা আছে সেগুলা পড়ো। api গুলা এর ছোট করে কি কি করে বলা আছে। সেগুলা দেখো। তারপর কিছু ডাটা লোড করো। সেই ডাটাগুলো দেখাও। এইখানে সার্চ ফাংশনালিটি ইমপ্লিমেন্ট করো। অনেকটা mealdb এর মতো। আবার কোন একটাতে ক্লিক করলে সেটার ডিটেল দেখাবে। 
*/

const loadData = () =>{
    const url = `https://www.thesportsdb.com/api/v1/json/2/search_all_teams.php?l=English%20Premier%20League`
    fetch(url)
    .then(res => res.json())
    .then(data => dispalyData(data.teams))
}
const dispalyData = user => {
    const playerTeams = document.getElementById('player-teams');
    user.forEach(element => {
        console.log(element);
        const newDiv = document.createElement('div');
        newDiv.classList.add('col');
        newDiv.innerHTML = `
        <div class="card">
                <img src=" ${element.strTeamBanner} " class="card-img-top" alt="...">
            <div class="card-body">
                <h5 class="card-title">League : ${element.strLeague} </h5>
                <p class="card-text"> Team : ${element.strAlternate}  </p>
            </div>
        </div>
        `;
        playerTeams.appendChild(newDiv)
    });
    
}
loadData();