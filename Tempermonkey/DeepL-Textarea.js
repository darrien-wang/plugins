// ==UserScript==
// @name        DeepL翻译器
// @namespace   https://github.com/Darrien
// @include     https://chat.openai.com/*
// @description 在任意页面的右上角生成一个textarea，输入内容，调用DeepL翻译快捷键，可完成基于DeepL的写作翻译
// @author      Darrien
// @version     1.1
// @require     http://ajax.googleapis.com/ajax/libs/jquery/1.7.2/jquery.min.js
// @grant       none
// @license     MIT
// ==/UserScript==


$( document ).ready( function () {
    var circle=document.createElement( 'div' );
    circle.style.width='100px';
    circle.style.height='100px';
    circle.style.borderRadius='50px';
    circle.style.position='absolute';
    circle.style.top='100px';
    circle.style.right='100px';
    circle.style.cursor='move';
    document.body.appendChild( circle );

    var textarea=document.createElement( 'textarea' );
    textarea.style.width='100px';
    textarea.style.height='100px';
    textarea.style.border='none';
    textarea.style.resize='none';
    textarea.style.overflow='hidden';
    textarea.style.backgroundColor='transparent';
    textarea.style.position='absolute';
    textarea.style.top='0px';
    textarea.style.left='0px';
    circle.appendChild( textarea );

    var mouseX=0;
    var mouseY=0;
    var offsetX=0;
    var offsetY=0;
    var isDragging=false;

    circle.addEventListener( 'mousedown',function ( e ) {
        mouseX=e.pageX;
        mouseY=e.pageY;
        offsetX=parseInt( circle.style.right );
        offsetY=parseInt( circle.style.top );
        isDragging=true;
    } );

    document.addEventListener( 'mousemove',function ( e ) {
        if ( isDragging ) {
            var newX=offsetX-( e.pageX-mouseX );
            var newY=offsetY+( e.pageY-mouseY );
            circle.style.right=newX+'px';
            circle.style.top=newY+'px';
        }
    } );

    document.addEventListener( 'mouseup',function ( e ) {
        isDragging=false;
    } );

    textarea.style.backgroundColor='transparent';
    circle.style.borderRadius='10px';
    circle.style.width='103px';
    circle.style.height='103px';
    textarea.style.width='98px';
    textarea.style.height='98px';
    textarea.style.textAlign='left';

    circle.style.backgroundColor='#cccccc';

    document.body.appendChild( circle );

} );
