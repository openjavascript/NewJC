;requirejs( [ 'JC.common', 'JC.AutoFixed' ], function( ){

    JC.AutoFixed.INIT_DELAY = 200;

    JWIN.on( 'GO_MAIN_TOP', function( _evt, _ms ){
        _ms = _ms || 0;
        JC.f.safeTimeout( function(){
            location.href = "#btop";
        }, null, 'GO_MAIN_TOPsdfadsf', 20 );
    });

    var _hideBar = $( 'button.js_hideHeader' );

    JDOC.delegate( 'div.js_headarBar', 'mouseenter', function(){
        _hideBar.show();
    });
    
    JDOC.delegate( 'div.js_headarBar', 'mouseleave', function(){
        _hideBar.hide();
    });

    JDOC.delegate( 'button.js_hideHeader', 'click', function(){
        $( 'div.js_headarBar' ).remove();
        $.cookie( 'hideheader', 1, { expires: 30 } );
    });

    JDOC.on( 'mouseover', '[hover]', function( e ){
        var _ele = $( e.target );
        _ele.addClass( _ele.attr( 'hover' ) );
    }).on( 'mouseleave', '[hover]', function( e ){ 
        var _ele = $( e.target );
        if( typeof _ele.attr('hover') == 'undefined' ){
            _ele = _ele.closest( '[hover]' );
        }
        _ele.removeClass( _ele.attr('hover') );
    });

    $( '#outlink a' ).hover( function( e ){
        $( e.target ).stop().velocity( {
            color : '#ccc'
            , backgroundColor : '#4d5152'
        } );
    }, function( e ){
        $( e.target ).stop().velocity( {
            color : '#666'
            , backgroundColor : '#e6decb'
        } );
    } );

    /*
    JDOC.delegate( '#bodynav a[href]', 'click', function( _evt ){
        var _p = $( this ), _header = $( '#mainHeader' );
        if( !( _header.length ) ) return;
        JC.f.safeTimeout( function(){
            JDOC.scrollTop( JDOC.scrollTop() - _header.height() );
        }, null, 'bodynav_stasdfasd', 1 );
    });
    */

});
