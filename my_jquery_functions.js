/* CHANGE THE JOB TITLES */

$(document).ready(function(){
    var text  = [ "Data Analyst", "Jr. Software Developer", "Draftman", "Hardworker"];
var index = 0;

$("#description").fadeTo( 1, 0 );

setInterval( function(){
$( "#description" ).stop().html( text[ index ] ).fadeTo( 500, 1, function(){
index++;
$( "#description" ).delay( 500 ).fadeTo( 500, 0 );
if ( index == 4 ) {
index = 0;
};
} );
}, 1800 );


});


/* CHANGE THE TAB LINKS UNDER ABOUT ME */

var tablinks= document.getElementsByClassName("tab-links");
var tabcontents= document.getElementsByClassName("tab-contents");

function opentab(tabname){

    for(tablink of tablinks){
 tablink.classList.remove("active-link");
    };

    for(tabcontent of tabcontents){
        tabcontent.classList.remove("active-tab");
           };

    event.currentTarget.classList.add("active-link");
    document.getElementById(tabname).classList.add("active-tab")
}


/* OPEN/CLOSE MENU FUNCTIONS ON INDEX PAGE AT THE BOTTOM*/

let containers = document.querySelectorAll('.container')

window.addEventListener('scroll',fadeIn);
fadeIn();

function fadeIn() {
   
   const conTop= containers.scrollTop();
   const triggerButtom= conTop + $(window).height();
    // find out how to what my trigger bottom will be 
      
    containers.forEach(container=>{



if (conTop<triggerButtom){
    container.classList.add('show');
}
else{
    container.classList.remove('show');
}
    });


}



/* issue with menu icon on samsung galaxy s8 width 360 */
/* issue with menu menu and background image on ipad Air width 820 */
/* issue with menu icon,header text size on galaxy fold width 280*/
/* issue with hader text size on ipadMini width 768*/
/*issue with menu icon on surface pro 7 width 912*/