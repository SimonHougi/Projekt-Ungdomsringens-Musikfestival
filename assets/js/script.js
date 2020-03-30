/* 
Github upload test <3
*/

const WPurl = 'http://andhof17.dreamhosters.com/wp-json/wp/v2/'; // Andreas WP API URL
const WPkey = 'ZojeMhiQCU4ZzrmgoT4Bx8HkDlV2ABXM'; // Andreas WP API Nøgle


let appOptions;
const postInfoId = 5;

getDataWP();

function getDataWP(){
    const xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function(){
        if (this.readyState == 4 && this.status == 200){
            const data = JSON.parse(this.responseText);
             console.log(data);
                console.log(data.url);
          //  console.log(data.date);
           // console.log(data.explanation);
           // renderWP(data); // fører koden videre til en function ved navn renderWP
            
           
        }
    }
    xhttp.open('GET', `${WPurl}posts/?tags=${postInfoId}`, true);
    xhttp.setRequestHeader('Authorization', `bearer ${WPkey}`);
    xhttp.send();
    
}


//  xhttp.open('GET', `${WPurl}?api_key=${WPkey}`, true);


/* function renderWP(data){
    
    document.querySelector('body').innerHTML = `
    <h3>${acf.date}</h3>
    <h1>${data.title}</h1>
    <img src="${data.url}" alt="APOD">
    
    <h5>credits: ${data.copyright}</h5>
    <p>${data.explanation}</p>
    
`;
} */

/*
function getInfoFromWP() {
    const xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            // all good
            try {
                appOptions = JSON.parse(this.responseText);
                heroImage.src = appOptions.acf.info_image;
            } catch (error) {
                errorMessage(`Error parsing JSON: ${error}`);
            }
        }
        if (this.readyState == 4 && this.status > 400) {
            errorMessage(`An Error has occured while getting the data.`);
        }
    }
    xhttp.open('GET', `${WPurl}posts/${postInfoId}`, true);
    xhttp.setRequestHeader('Authorization', `bearer ${WPKey}`);
    xhttp.send();
}
 */