document.querySelector('#theTime').addEventListener('click', TimeClick); 
document.querySelector('#test').addEventListener('click', TimeClick);

function TimeClick(event) {
    document.getElementById('demo').innerHTML=Date();
    event.preventDefault();
    console.log(event);
}