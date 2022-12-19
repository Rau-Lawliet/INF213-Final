let date = new Date();
document.getElementById('date').innerHTML =  date.getUTCDate() + '/' + (date.getMonth() + 1) + '/' + date.getFullYear();