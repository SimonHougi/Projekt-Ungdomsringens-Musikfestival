/* 
Github upload test <3
*/

const WPurl = 'http://andhof17.dreamhosters.com/wp-json/wp/v2/'; // Andreas WP API URL
const WPkey = 'ZojeMhiQCU4ZzrmgoT4Bx8HkDlV2ABXM'; // Andreas WP API Nøgle


let appOptions;
const postInfoId = 5;

const InfoPost = 58;
const tablePost = 69;
const ForsidePost1 = 90;
const galleryPost = 100;

// parameter test neden for
randompost = 58;
var TPtest = randompost;

getDatPInfo(); //parameter der kan skifte posts ud efter en cycle? postene skal nok være i et array som looper?
getDataForside();
getDataGallery();

function getDatPInfo(){
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

function getDataForside(){
    const xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function(){
        if (this.readyState == 4 && this.status == 200){
            const data = JSON.parse(this.responseText);
            console.log(data);
    
            renderForsideWP(data);
        }
    }
    // xhttp.open('GET', `${WPurl}posts/?tags=${postInfoId}`, true);
    xhttp.open('GET', `${WPurl}posts/${ForsidePost1}`, true); // parameter skal være her! efter "posts/"
    xhttp.setRequestHeader('Authorization', `bearer ${WPkey}`);
    xhttp.send();
}

function getDataGallery(){
    const xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function(){
        if (this.readyState == 4 && this.status == 200){
            const data = JSON.parse(this.responseText);
            console.log(data);
    
            renderGalleryWP(data);
        }
    }
    // xhttp.open('GET', `${WPurl}posts/?tags=${postInfoId}`, true);
    xhttp.open('GET', `${WPurl}posts/${galleryPost}`, true); // parameter skal være her! efter "posts/"
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

function renderForsideWP(data){ // billede
    document.querySelector('#topmain').innerHTML = `
    <section>
        <h1>${data.acf.hero_header}</h1>
        <p>${data.acf.hero_date}</p>
        <button><a href="#tilmelding">Tilmelding</a></button>
    </section>
    <section id="icondown">
        <i class="fa fa-arrow-down fa-3x"></i>
    </section>

`;
document.querySelector('#aboutus').innerHTML = `
    
        <h2>${data.acf.section_1_header}</h2>
        <div id="JScontent">
            <section><p>${data.acf.section_1_text_area_1}<P></section>
            <aside><p>${data.acf.section_1_text_area_2}<P></aside>
        </div>
`;
document.querySelector('.tilmelding-container').innerHTML = `
<section class="infobox leftsection">
    <h4>${data.acf.generel_header}</h4>
    <article>${data.acf.generel_text_area}</article>
    </section>
    <section>
    <button class="subbtn"><a href="tilmelding.html">Tilmeld</a></button>
    <button class="infobtn"><a href="info.html">Mere info</a></button>
    </section>
    <section class="infobox rightsection">
    <h4>${data.acf.regler_header}</h4>
    <article>${data.acf.regler_text_area}</article>
</section>
`;
}

function renderGalleryWP(data){ 
    document.querySelector('#').innerHTML = `

`;
}

