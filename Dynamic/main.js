/*

৫. ডাইনামিক ডাটা লোড। কোন একটা কমেন্ট এ ক্লিক করলে (কমেন্ট এর div এ বা কোন একটা বাটন এ )সেই কমেন্ট এর আইডি নিয়ে সেটা api এর url এ বসিয়ে (ডাইনামিকভাবে টেমপ্লেট স্ট্রিং দিয়ে) সেই ডাটা লোড করে। সেই ডাটা ওয়েবসাইট এ দেখাতে পারতেছো কিনা। 

*/

const loadData = () =>{
    const url = 'https://jsonplaceholder.typicode.com/comments';
    fetch(url)
    .then(res => res.json())
    .then(data => displayData(data.slice(0, 5)))

}

const displayData = user => {
    const comentContainer = document.getElementById('comment');
    user.forEach(element => {
        const newDiv = document.createElement('div');
        newDiv.innerHTML = `
            <h3>Id : ${element.name}</h3>
            <button onclick = "loadDetails(${element.id})">Comment Details</button>
        `;
        comentContainer.appendChild(newDiv);
    });
    
}

const loadDetails = (id)=>{
    const url = `https://jsonplaceholder.typicode.com/comments/${id}`
    fetch(url)
    .then(res => res.json())
    .then(data => displayDataDetails(data));
}
const displayDataDetails = data => {
    const dynamicContainer = document.getElementById('dynamic-id');
    dynamicContainer.innerHTML = `
    <h1>Id : ${data.id} </h1>
    <h1>Name : ${data.name} </h1>
    <h1>Email : ${data.email} </h1>
    <h1>Body : ${data.body} </h1>
    `;
}


