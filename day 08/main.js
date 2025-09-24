export async function sendReq() {
    const res = await fetch("https://dummyjson.com/todos");
    const data = await res.json();
    console.log(data);
}
