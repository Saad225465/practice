// let jsonRes = '{"fact": "Unlike other cats, lions have a tuft of hair at the end of their tails.","length": 71}'
// let jsonValid = JSON.parse(jsonRes);
// console.log(jsonRes);
// console.log(jsonValid.fact);
// let url = "https://catfact.ninja/fact";
// fetch(url)
// .then((response) => {
//     return response.json()
// })
// .then((data) => {
//     console.log("data1:" ,data.fact);
//     return fetch(url)
// })
// .then((response) => {
//     return response.json()
// })
// .then((data2) => {
//     console.log("data2: ", data2.fact)
// })
// .catch((error) => {
//     console.log("ERROR",error);
// })

// let btn = document.querySelector("button");
// let url = "https://dog.ceo/api/breeds/image/random";
// btn.addEventListener("click",async () =>{
    // let fact = await getFacts();
    // console.log(fact);
    // let p = document.querySelector("#result");
    // p.innerText = fact;
//     let link = await getImage();
//     console.log(link)
//     let img = document.querySelector("#result")
//     img.setAttribute("src",link)
// })


// let url = "https://catfact.ninja/fact";
// async function getImage() {
//     try{
//         let res = await axios.get(url);
//         return res.data.message
        
//     }catch(e){
//         return "/";
//     }
// }

// let url = "https://dog.ceo/api/breeds/image/random";
// fetch(url)
// .then((res) => {
//     return res.json();
// })
// .then((data) => {
//     console.log(data);
// })
// .catch((e) => {
//     console.log(e);
// })
// let url = "https://dog.ceo/api/breeds/image/random";
// async function getDog() {
//     try{
//         let res = axios.get(url);
//         console.log(res.message);
//     }
//     catch(er){
//         console.log(er);
//     }
// }

// let url = "https://icanhazdadjoke.com/";
// async function getJoke() {
//     try{
//         const config = {headers: { Accept: "application/json"} };
//         let res =await axios.get(url,config)
//         console.log(res.data);
//     }
//     catch(e){
//         console.log(e);
//     }
// }
let url = "https://universities.hipolabs.com/search?name="
let btn = document.querySelector("button");
btn.addEventListener("click",async () =>{
    let country = document.querySelector("input").value;
    console.log(country)
    let colleges = await getCollege(country);
    show(colleges)
})
function show(colleges){
    let list = document.querySelector("#list")
    list.innerText = ""
    for(col of colleges){
        console.log(col.name);
        let li = document.createElement("li");
        li.innerText = col.name;
        list.appendChild(li);
    }
}

async function getCollege(country) {
    try{
        let res = await axios.get(url+country)
        return res.data
    }
    catch(e){
        console.log("error: ",e);
        return [];
    }
}