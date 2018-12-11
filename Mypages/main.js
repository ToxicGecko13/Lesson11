document.querySelector('#row1col1').addEventListener('click', RowColClick);
document.querySelector('#row1col2').addEventListener('click', RowColClick);
document.querySelector('#row1col3').addEventListener('click', RowColClick);
document.querySelector('#row2col1').addEventListener('click', RowColClick);
document.querySelector('#row2col2').addEventListener('click', RowColClick);
document.querySelector('#row2col3').addEventListener('click', RowColClick);
document.querySelector('#row3col1').addEventListener('click', RowColClick);
document.querySelector('#row3col2').addEventListener('click', RowColClick);
document.querySelector('#row3col3').addEventListener('click', RowColClick);

function RowColClick(event) {
    document.getElementById('demo');
    alert(event.target.id);
    console.log(event);
}