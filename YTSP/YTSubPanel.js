// ==UserScript==
// @name        YT Subscriptions Panel
// @description Change view of Youtube subscriptions panel
// @author      SzaryMarian
// @copyright   2015, SzaryMarian
// @namespace   .
// @include     https://www.youtube.com/*
// @version     1.0.1
// @grant       none
// @downloadURL https://gist.githubusercontent.com/SzaryMarian/52bbd9e57e93e1299046/raw/5fb74fb7b9a4506eb8633f4213252dfad7699b4a/YTSubsPanel.js
// ==/UserScript==


// test 11

window.addEventListener('load', function(){
  
  var css=function(){
    var css=
        'div#m-cont{position:absolute; z-index:1000; min-height:20px; background:#fff; overflow:hidden;}'+
        'div#m-cont:hover{box-shadow:0 0 3px #bbb;}'
        '';
    var s=document.createElement('style');
    //s.styleSheet.cssText=css;
    s.appendChild(document.createTextNode(css));
    document.getElementsByTagName('head')[0].appendChild(s);
  }
  css();
  
  var getSubsList=function(holder){
    var ul=document.getElementById('guide-channels');
    var list=ul.getElementsByClassName('guide-channel');
    return list
  }
  
  var setContainer=function(para){
    var cont=document.createElement('div');
    cont.id='m-cont'
    cont.style.width=(para.width)+'px';
    cont.onmouseover=function(){
      cont.style.width=(para.width*5)+'px';
    };
    cont.onmouseout=function(){
      cont.style.width=(para.width)+'px';
    }

    var ul=document.getElementById('guide-channels');
    var mul=ul.cloneNode(ul);
    ul.style.display='none';
    mul.style.width=(para.width*5)+'px';
    var list=mul.getElementsByClassName('guide-channel');
    for(var i=0; i<list.length; i++){
      list[i].style.float='left';
    }
    cont.appendChild(mul);
    
    var cb=document.createElement('div');
    cb.style.clear='both';
    cont.appendChild(cb);
    
    return cont;
    
  }
  
  // remove overflow from left side panel
  document.getElementById('appbar-guide-menu').style.overflow='unset';
  
  var subs=document.getElementById('guide-subscriptions-section');
  var subsListHolder=document.getElementById('guide-subs-footer-container');
  var _W=subsListHolder.offsetWidth;
  var container=setContainer({
    width:_W
  });
  setTimeout(function(){subsListHolder.style.height=(container.offsetHeight)+'px';}, 500);
  subsListHolder.parentNode.insertBefore(container, subsListHolder);
  var subsList=getSubsList(subsListHolder);
});
