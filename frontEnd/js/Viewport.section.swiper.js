import { UIDiv } from '../libs/ui.js';
import Swiper from 'https://unpkg.com/swiper@7/swiper-bundle.esm.browser.min.js';
import { ViewportRenderData } from './Viewport.render.data.js';

function ViewportSwiper( editor ) {
    const container = new UIDiv();

    let swiperWrapper = new UIDiv();
    let swiperPrevBtn = new UIDiv();
    let swiperNextBtn = new UIDiv();
    let swiperPagination = new UIDiv();

    container.setClass( 'swiper mySwiper' );
    swiperWrapper.setClass( 'swiper-wrapper' );
    swiperPrevBtn.setClass( 'swiper-button-next' );
    swiperNextBtn.setClass( 'swiper-button-prev' );
    swiperPagination.setClass( 'swiper-pagination' );

    container.add( swiperWrapper );
    container.add( swiperPrevBtn );
    container.add( swiperNextBtn );
    container.add( swiperPagination );

    editor.signals.viewportCloseup.add( function() {

        container.dom.style.visibility = 'visible';

    })


    editor.signals.createRenderer.add( function() {
        
        new Swiper(".mySwiper", {
            pagination: {
                el: ".swiper-pagination",
                type: "fraction"
            },
            navigation: {
                nextEl: ".swiper-button-next",
                prevEl: ".swiper-button-prev"
            }
        });
        
        let ranj, ranx, rani;
        let resArr = [];
        let swiperWrapper = document.querySelector('.swiper-wrapper');
        let pageContentLen = 15;
        let renderData = new ViewportRenderData( resArr );

        for( rani = renderData.length; rani; rani -= 1 ){

            ranj = Math.floor( Math.random() * rani );
            ranx = renderData[ rani - 1 ];
            renderData[ rani - 1 ] = renderData[ ranj ];
            renderData[ ranj ] = ranx;

        }

        let pages = pageMaking( renderData.length, pageContentLen );

        makePage( swiperWrapper, pages, pageContentLen, renderData );

    });


//pagination
    function pageMaking( val, num ) {

        let remain = val % num;

        if( remain ) {
        
            return Math.floor( val/num ) + 1;
        
        }else{

            return Math.floor( val/num );

        }

    }

//makePage
    function makePage( wrapper, pages, pageLength, data ) {

        for( let i = 0; i< pages; i ++ ) {

            let slide = document.createElement( 'div' );
                slide.classList.add( 'swiper-slide' );
                slide.style.backgroundColor = '#111';
            
            let slideUl = document.createElement( 'ul' );
                slideUl.classList.add( 'q-ul' );

                slide.append( slideUl );
                wrapper.append( slide );

            let currentPage = i + 1;

            for( let j = i * pageLength; j < data.length - ( (pages - currentPage) * pageLength); j ++ ){

                let list = document.createElement( 'li' );
                    list.classList.add( 'q-list' );
                
                let inputChk = document.createElement( 'div' );
                    inputChk.classList.add( 'usr-input-chk' );
                    inputChk.setAttribute( 'id', `${data[j][0]}:${data[j][1]}` );

                let labelChk = document.createElement( 'label' );
                    labelChk.classList.add( 'slcLabel' );
                    labelChk.textContent = data[j][2];

                    list.append( inputChk, labelChk );
                    slideUl.appendChild( list );

            } //inner for End

        }// outer for End

    } //makePage Func End

    return container;
}

export { ViewportSwiper };