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
const galleryPost = 129;

const spinner = document.querySelector('#spinner') // henter Spinner fra html
loadPage();

function setSpinner(isActive) {
    if (isActive) {
        spinner.classList.add('active');
    } else {
        spinner.classList.remove('active');
    }
}

function loadPage() {
    // turn on the spinner
    setSpinner(true);

   
   
    getDataForside(); // henter Forside SIDE DATA fra API (Wordpress)
    getDataGallery(); // henter Galleri DATA
    getDataPInfo(); // henter INFO SIDE DATA
    getDataProgram();
     // Note: parameter der kan skifte posts ud efter en cycle? postene skal nok være i et array som looper?
}




function getDataPInfo(){
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

function getDataProgram(){
    const xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function(){
        if (this.readyState == 4 && this.status == 200){
            const data = JSON.parse(this.responseText);
            console.log(data);

          // console.log(data.date);
           // console.log(data.explanation);
            // fører koden videre til en function ved navn renderInfoWP
            renderProgramWP(data);
        }
    }
    // xhttp.open('GET', `${WPurl}posts/?tags=${postInfoId}`, true);
    xhttp.open('GET', `${WPurl}posts/${tablePost}`, true); // parameter skal være her! efter "posts/"
    xhttp.setRequestHeader('Authorization', `bearer ${WPkey}`);
    xhttp.send();
}



//  xhttp.open('GET', `${WPurl}?api_key=${WPkey}`, true);
function renderInfoWP(data){ // billede
    
    document.querySelector('.info-gen').innerHTML = `
                        <div class="infocontainer">
                        <div class="left">
                            
                                <img src="${data.acf.info_image_left.url}" alt="">
                            
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
                            
                                <img src="${data.acf.info_image_mid.url}" alt="">
                            
                        </div>
                        <div class="right">
                            
                                <img src="${data.acf.info_image_right.url}" alt="">
                            
                            <section class="informationarticle scrollbar">
                                <article><h1>${data.acf.info_header_right}</h1>
                                <p>${data.acf.info_text_right}</p></article>
                            </section>
                        </div>
                    </div>
`;
setSpinner(false);
}

function renderForsideWP(data){ // billede
    document.querySelector('#topmain').innerHTML = `
    <section>
        <h1>${data.acf.hero_header}</h1>
        <p>${data.acf.hero_date}</p>
        <button id="landingbutton"><a href="#tilmelding">Tilmelding</a></button>
    </section>
    <section id="icondown">
        <i class="fa fa-arrow-down fa-3x"></i>
    </section>

`;
document.querySelector('#aboutus').innerHTML = `
    
        <h2>${data.acf.section_1_header}</h2>
        <div id="JScontent">
            <section class="aboutleft hidden"><p>${data.acf.section_1_text_area_1}<P></section>
            <aside class="aboutright hidden"><p>${data.acf.section_1_text_area_2}<P></aside>
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
    <section class="infobox rightsection scrollbar">
    <h4>${data.acf.regler_header}</h4>
    <article>${data.acf.regler_text_area}</article>
</section>
`;
setSpinner(false);
}

function renderGalleryWP(data){ 
    document.querySelector('#JSgalleri').innerHTML = `
    <div class="flex-gallery">
        <div class="gallery-img-box"><img src="${data.acf.img_1.url}" alt="billede"></div>
        <div class="gallery-img-box"><img src="${data.acf.img_2.url}" alt="billede"></div>
        <div class="gallery-img-box hidden"><img src="${data.acf.img_3.url}" alt="billede"></div>
        <div class="gallery-img-box hidden"><img src="${data.acf.img_4.url}" alt="billede"></div>
        <div class="gallery-img-box hidden"><img src="${data.acf.img_5.url}" alt="billede"></div>
        <div class="gallery-img-box hidden"><img src="${data.acf.img_6.url}" alt="billede"></div>
        <div class="gallery-img-box hidden"><img src="${data.acf.img_7.url}" alt="billede"></div>
        <div class="gallery-img-box hidden"><img src="${data.acf.img_8.url}" alt="billede"></div>
        <div class="gallery-img-box hidden"><img src="${data.acf.img_9.url}" alt="billede"></div>
        <div class="gallery-img-box hidden"><img src="${data.acf.img_10.url}" alt="billede"></div>
        <div class="gallery-img-box hidden"><img src="${data.acf.img_11.url}" alt="billede"></div>
        <div class="gallery-img-box hidden"><img src="${data.acf.img_12.url}" alt="billede"></div>
        <div class="gallery-img-box hidden"><img src="${data.acf.img_13.url}" alt="billede"></div>
        <div class="gallery-img-box hidden"><img src="${data.acf.img_14.url}" alt="billede"></div>
        <div class="gallery-img-box hidden"><img src="${data.acf.img_15.url}" alt="billede"></div>
        <div class="gallery-img-box"><img src="${data.acf.img_16.url}" alt="billede"></div>
        <div class="gallery-img-box hidden"><img src="${data.acf.img_17.url}" alt="billede"></div>
        <div class="gallery-img-box hidden"><img src="${data.acf.img_18.url}" alt="billede"></div>
    </div>
`;

}

function renderProgramWP(data){ // billede
    
    document.querySelector('#table').innerHTML = `
                        <table id="friday">
                            <tr>
                                <th>FREDAG D. 17</th>
                                <th>Skråen</th>
                                <th>Royal Stage</th>
                                <th>Joule</th>
                                <th>Watt</th>
                                <th>Kulkælderen</th>
                                <th>Baghuset</th>
                            </tr>
                            <tr>
                                <td>19.00</td>
                                <td>${data.acf.table_act_1}</td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                            </tr>
                            <tr>
                                <td>19.30</td>
                                <td>${data.acf.table_act_1}</td>
                                <td>${data.acf.table_act_2}</td>
                                <td>${data.acf.table_act_3}</td>
                                <td>${data.acf.table_act_4}</td>
                                <td></td>
                                <td></td>
                            </tr>
                            <tr>
                                <td>20.00</td>
                                <td>${data.acf.table_act_5}</td>
                                <td>${data.acf.table_act_6}</td>
                                <td>${data.acf.table_act_7}</td>
                                <td>${data.acf.table_act_8}</td>
                                <td></td>
                                <td></td>
                            </tr>
                            <tr>
                                <td>20.30</td>
                                <td>${data.acf.table_act_9}</td>
                                <td>${data.acf.table_act_10}</td>
                                <td>${data.acf.table_act_11}</td>
                                <td>${data.acf.table_act_12}</td>
                                <td></td>
                                <td></td>
                            </tr>
                            <tr>
                                <td>21.00</td>
                                <td>${data.acf.table_act_13}</td>
                                <td>${data.acf.table_act_14}</td>
                                <td>${data.acf.table_act_15}</td>
                                <td>${data.acf.table_act_16}</td>
                                <td></td>
                                <td></td>
                            </tr>
                            <tr>
                                <td>21.30</td>
                                <td>${data.acf.table_act_17}</td>
                                <td>${data.acf.table_act_18}</td>
                                <td>${data.acf.table_act_19}</td>
                                <td>${data.acf.table_act_20}</td>
                                <td></td>
                                <td></td>
                            </tr>
                            <tr>
                                <td>22.00</td>
                                <td>${data.acf.table_act_21}</td>
                                <td>${data.acf.table_act_22}</td>
                                <td>${data.acf.table_act_23}</td>
                                <td>${data.acf.table_act_24}</td>
                                <td></td>
                                <td></td>
                            </tr>
                            <tr>
                                <td>22.30</td>
                                <td>${data.acf.table_act_25}</td>
                                <td>${data.acf.table_act_26}</td>
                                <td>${data.acf.table_act_27}</td>
                                <td>${data.acf.table_act_28}</td>
                                <td></td>
                                <td></td>
                            </tr>
                            <tr>
                                <td>23.00</td>
                                <td>${data.acf.table_act_29}</td>
                                <td>${data.acf.table_act_30}</td>
                                <td>${data.acf.table_act_31}</td>
                                <td>${data.acf.table_act_32}</td>
                                <td></td>
                                <td></td>
                            </tr>
                            <tr>
                                <td>23.30</td>
                                <td>${data.acf.table_act_33}</td>
                                <td>${data.acf.table_act_34}</td>
                                <td>${data.acf.table_act_35}</td>
                                <td>${data.acf.table_act_36}</td>
                                <td></td>
                                <td></td>
                            </tr>
                        </table>
                        <table id="saturday">
                            <tr>
                                <th>FREDAG D. 17</th>
                                <th>Skråen</th>
                                <th>Royal Stage</th>
                                <th>Joule</th>
                                <th>Watt</th>
                                <th>Kulkælderen</th>
                                <th>Baghuset</th>
                            </tr>
                            <tr>
                                <td>19.00</td>
                                <td>${data.acf.table_act_1}</td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                            </tr>
                            <tr>
                                <td>19.30</td>
                                <td>${data.acf.table_act_1}</td>
                                <td>${data.acf.table_act_2}</td>
                                <td>${data.acf.table_act_3}</td>
                                <td>${data.acf.table_act_4}</td>
                                <td></td>
                                <td></td>
                            </tr>
                            <tr>
                                <td>20.00</td>
                                <td>${data.acf.table_act_5}</td>
                                <td>${data.acf.table_act_6}</td>
                                <td>${data.acf.table_act_7}</td>
                                <td>${data.acf.table_act_8}</td>
                                <td></td>
                                <td></td>
                            </tr>
                            <tr>
                                <td>20.30</td>
                                <td>${data.acf.table_act_9}</td>
                                <td>${data.acf.table_act_10}</td>
                                <td>${data.acf.table_act_11}</td>
                                <td>${data.acf.table_act_12}</td>
                                <td></td>
                                <td></td>
                            </tr>
                            <tr>
                                <td>21.00</td>
                                <td>${data.acf.table_act_13}</td>
                                <td>${data.acf.table_act_14}</td>
                                <td>${data.acf.table_act_15}</td>
                                <td>${data.acf.table_act_16}</td>
                                <td></td>
                                <td></td>
                            </tr>
                            <tr>
                                <td>21.30</td>
                                <td>${data.acf.table_act_17}</td>
                                <td>${data.acf.table_act_18}</td>
                                <td>${data.acf.table_act_19}</td>
                                <td>${data.acf.table_act_20}</td>
                                <td></td>
                                <td></td>
                            </tr>
                            <tr>
                                <td>22.00</td>
                                <td>${data.acf.table_act_21}</td>
                                <td>${data.acf.table_act_22}</td>
                                <td>${data.acf.table_act_23}</td>
                                <td>${data.acf.table_act_24}</td>
                                <td></td>
                                <td></td>
                            </tr>
                            <tr>
                                <td>22.30</td>
                                <td>${data.acf.table_act_25}</td>
                                <td>${data.acf.table_act_26}</td>
                                <td>${data.acf.table_act_27}</td>
                                <td>${data.acf.table_act_28}</td>
                                <td></td>
                                <td></td>
                            </tr>
                            <tr>
                                <td>23.00</td>
                                <td>${data.acf.table_act_29}</td>
                                <td>${data.acf.table_act_30}</td>
                                <td>${data.acf.table_act_31}</td>
                                <td>${data.acf.table_act_32}</td>
                                <td></td>
                                <td></td>
                            </tr>
                            <tr>
                                <td>23.30</td>
                                <td>${data.acf.table_act_33}</td>
                                <td>${data.acf.table_act_34}</td>
                                <td>${data.acf.table_act_35}</td>
                                <td>${data.acf.table_act_36}</td>
                                <td></td>
                                <td></td>
                            </tr>
                        </table>
`;
setSpinner(false);
}