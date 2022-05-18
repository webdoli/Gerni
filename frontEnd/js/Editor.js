import { Storage as _Storage } from '../../backend/models/Storage.js';
import { History as _History } from '../../backend/models/History.js';
import Swiper from 'https://unpkg.com/swiper@7/swiper-bundle.esm.browser.min.js';

function Editor () {

    var Signal = signals.Signal;
    this.scene = {};
    this.scene.pass = new Map();
    // this.scene.pass.set( 'usr-name', false )
    //                .set( 'board-select-job', false )
    //                .set( 'board-select-age', false )
    //                .set( 'board-select-relation' , false )
    //                .set( 'board-select-body', false )
    this.storage = new _Storage();
    this.history = new _History( this );

    this.signals = {

        sceneChanged: new Signal(),
        historyChanged: new Signal(),
        createRenderer: new Signal(),
        windowResize: new Signal(),
        sidebarVanish: new Signal(),
        viewportCloseup: new Signal(),
        chartRender: new Signal(),
        viewportChartRenderer: new Signal(),
        allChartRes: new Signal(),
        panelColorChanged: new Signal(),
        slidePass: new Signal(),
        chartBtnOn: new Signal(),
        pepeRemoved: new Signal()

    }

    
    
}

Editor.prototype =  {

    setScene: function( bloDB ) {

        this.scene.blogDB = bloDB;
        // this.scene.pass = new Map();
        // this.scene.pass.set( 'usr-name', false )
        //                .set( 'board-select-job', false )
        //                .set( 'board-select-age', false )
        //                .set( 'board-select-relation' , false )
        //                .set( 'board-select-body', false )
        this.swiper = new Swiper(".mySwiper", {

            pagination: {

                el: ".swiper-pagination",
                type: "fraction"

            },

            navigation: {

                nextEl: ".swiper-button-next",
                prevEl: ".swiper-button-prev"
            }

        });

    },

    execute: function ( cmd, optionalName ) {

        this.history.execute( cmd, optionalName );
    
    },

    compChartData : function( slcData ) {

        this.scene.slcData = slcData;
        this.signals.chartRender.dispatch();
        this.signals.viewportChartRenderer.dispatch();
        

    },

    scenePass : function( title, val ) {
        
        console.log( 'input 항목: ' + title );
        console.log( 'input값: ' + val );
        this.scene.pass.set( title, val );

    },

    render: function( config, canvasUI ) {

        this.signals.allChartRes.dispatch( config, canvasUI );

    },

    addUsrInfo: function( data ) {

        this.scene.usrInfo = data;
    },

    fromJSON: async function( json ) {
        console.log('fromJSON 실행');
        let blowareType = { 
            Gerny: '', 
            Econy: ''
        };

        let blowareData = await (json.blowaretype)  ? blowareType[json.blowareType] : '';


        //데이터가공
        // let resDB = chkValidate( jsonDB );
        this.setScene( blowareData );
    },

    toJSON: function() {
        console.log('toJSON 실행');
        return {
            metadata: {},
            project: {
                blowareType: 'Gerny',
            },
            history: this.history.toJSON()
        }

    },

    clear: function() {
        this.storage.clear();
        window.location.reload();
    },

    undo: function() {

        console.log( 'undo 실행' );
        this.history.undo();
        
    }


} //Editor End


export { Editor }