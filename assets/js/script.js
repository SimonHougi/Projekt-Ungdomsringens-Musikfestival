/* 
Github upload test <3
*/

const WPurl = 'http://andhof17.dreamhosters.com/wp-json/wp/v2/'; // Andreas WP API URL
const WPkey = 'ZojeMhiQCU4ZzrmgoT4Bx8HkDlV2ABXM'; // Andreas WP API Nøgle


let appOptions;
const postInfoId = 5;
const førstetInfoPost = 58;
const andenInfoPost = 69;
// parameter test neden for
randompost = 69;
var TPtest = randompost;
getDataWP(TPtest); //parameter der kan skifte posts ud efter en cycle? postene skal nok være i et array som looper?

function getDataWP(TPtest){
    const xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function(){
        if (this.readyState == 4 && this.status == 200){
            const data = JSON.parse(this.responseText);
            console.log(data);
            
                
          // console.log(data.date);
           // console.log(data.explanation);
            // fører koden videre til en function ved navn renderWP
            renderWP(data);
           
        }
    }
    // xhttp.open('GET', `${WPurl}posts/?tags=${postInfoId}`, true);
    xhttp.open('GET', `${WPurl}posts/${TPtest}`, true); // parameter skal være her! efter "posts/"
    xhttp.setRequestHeader('Authorization', `bearer ${WPkey}`);
    xhttp.send();
    
}


//  xhttp.open('GET', `${WPurl}?api_key=${WPkey}`, true);
function renderWP(data){ // billede
    document.querySelector('.left section.informationimg').innerHTML = `
    <img src="${data.acf.info_image.url}">
    
    
`;
document.querySelector('.left section.informationarticle').innerHTML = `
<h1>${data.acf.info_header}</h1>
<p>${data.acf.info_text}</p>

`;
}



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