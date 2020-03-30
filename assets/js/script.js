/* 
Github upload test <3
*/

const WPurl = 'http://andhof17.dreamhosters.com/wp-json/wp/v2/'; // Andreas WP API URL
const WPkey = 'ZojeMhiQCU4ZzrmgoT4Bx8HkDlV2ABXM'; // Andreas WP API Nøgle


let appOptions;
const postInfoId = 5;

const InfoPost = 58;
const midPost = 69;
const rightPost = 99;

// parameter test neden for
randompost = 58;
var TPtest = randompost;

getDataWP(); //parameter der kan skifte posts ud efter en cycle? postene skal nok være i et array som looper?

function getDataWP(){
    const xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function(){
        if (this.readyState == 4 && this.status == 200){
            const data = JSON.parse(this.responseText);
            console.log(data);
            
                
          // console.log(data.date);
           // console.log(data.explanation);
            // fører koden videre til en function ved navn renderInfoWP
            renderInfoWP(data);
           
        }
    }
    // xhttp.open('GET', `${WPurl}posts/?tags=${postInfoId}`, true);
    xhttp.open('GET', `${WPurl}posts/${InfoPost}`, true); // parameter skal være her! efter "posts/"
    xhttp.setRequestHeader('Authorization', `bearer ${WPkey}`);
    xhttp.send();
    
}


//  xhttp.open('GET', `${WPurl}?api_key=${WPkey}`, true);
function renderInfoWP(data){ // billede
    document.querySelector('.info-gen').innerHTML = `

                        <div class="infocontainer">
                        <div class="left">
                            <section class="informationimg">
                                <img src="${data.acf.info_image_left.url}" alt="">
                            </section>
                            <section class="informationarticle">
                                <article><h1>${data.acf.info_header_left}</h1>
                                <p>${data.acf.info_text_left}</p>
                       </article>
                            </section>
                        </div>

                        <div class="mid">
                            <section class="informationarticle">
                                <article><h1>${data.acf.info_header_mid}</h1>
                                <p>${data.acf.info_text_mid}</p></article>
                            </section>
                            <section class="informationimg">
                                <img src="${data.acf.info_image_mid.url}" alt="">
                            </section>
                        </div>
                        
                        <div class="right">
                            <section class="informationimg">
                                <img src="${data.acf.info_image_right.url}" alt="">
                            </section>
                            <section class="informationarticle">
                                <article><h1>${data.acf.info_header_right}</h1>
                                <p>${data.acf.info_text_right}</p></article>
                            </section>
                        </div>
                    </div>
    
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