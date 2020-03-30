/* 
Github upload test <3
*/

const WPurl = 'http://andhof17.dreamhosters.com/wp-json/wp/v2/'; // Andreas WP API URL
const WPkey = 'ZojeMhiQCU4ZzrmgoT4Bx8HkDlV2ABXM'; // Andreas WP API Nøgle

getDataWP();

function getDataWP(){
    const xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function(){
        if (this.readyState == 4 && this.status == 200){
            const data = JSON.parse(this.responseText);
             console.log(data);
            // console.log(data.url);
          //  console.log(data.date);
           // console.log(data.explanation);
            renderWP(data); // fører koden videre til en function ved navn renderWP
            
           
        }
    }
    xhttp.open('GET', `${WPurl}?api_key=${WPkey}`, true);
    xhttp.send();
}

/* function renderWP(data){
    
    document.querySelector('body').innerHTML = `
    <h3>${acf.date}</h3>
    <h1>${data.title}</h1>
    <img src="${data.url}" alt="APOD">
    
    <h5>credits: ${data.copyright}</h5>
    <p>${data.explanation}</p>
    
`;
} */