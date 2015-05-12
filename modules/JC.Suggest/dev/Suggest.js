;(function(define, _win) { 'use strict'; define( 'JC.Suggest', [ 'JC.BaseMVC', 'plugins.json2' ], function(){
    window.Suggest = JC.Suggest = Suggest;
    /**
     * Suggest 关键词补全提示类
     * <p><b>require</b>: 
     *      <a href='JC.BaseMVC.html'>JC.BaseMVC</a>
     * </p>
     * <p><a href='https://github.com/openjavascript/jquerycomps' target='_blank'>JC Project Site</a>
     * | <a href='http://jc2.openjavascript.org/docs_api/classes/JC.Suggest.html' target='_blank'>API docs</a>
     * | <a href='../../modules/JC.Suggest/dev/_demo' target='_blank'>demo link</a></p>
     * <h2>可用的 HTML attribute</h2>
     * <dl>
     *      <dt>sugwidth: int</dt>
     *      <dd>显示列表的宽度</dd>
     *
     *      <dt>suglayout: selector</dt>
     *      <dd>显示列表的容器</dd>
     *
     *      <dt>sugdatacallback: string</dt>
     *      <dd>
     *          请求 JSONP 数据的回调名
     *          <br /><b>注意:</b> 是字符串, 不是函数, 并且确保 window 下没有同名函数
     *      </dd>
     *
     *      <dt>suginitedcallback: string</dt>
     *      <dd>
     *          初始化完毕后的回调名称
     *      </dd>
     *
     *      <dt>sugurl: string</dt>
     *      <dd>
     *          数据请求 URL API
     *          <br />例: http://sug.so.360.cn/suggest/word?callback={1}&encodein=utf-8&encodeout=utf-8&word={0} 
     *          <br />{0}=关键词, {1}=回调名称
     *      </dd>
     *
     *      <dt>sugqueryinterval: int, default = 300</dt>
     *      <dd>
     *          设置用户输入内容时, 响应的间隔, 避免不必要的请求
     *      </dd>
     *
     *      <dt>sugneedscripttag: bool, default=true</dt>
     *      <dd>
     *          是否需要 自动添加 script 标签
     *          <br />Sugggest 设计为支持三种数据格式: JSONP, AJAX, static data
     *          <br />目前只支持 JSONP 数据
     *      </dd>
     *
     *      <dt>sugselectedcallback: function</dt>
     *      <dd>用户鼠标点击选择关键词后的回调</dd>
     *
     *      <dt>sugdatafilter: function</dt>
     *      <dd>数据过滤回调</dd>
     *
     *      <dt>sugsubtagname: string, default = dd</dt>
     *      <dd>显式定义 suggest 列表的子标签名</dd>
     *
     *      <dt>suglayouttpl: string</dt>
     *      <dd>显式定义 suggest 列表显示模板</dd>
     *
     *      <dt>sugautoposition: bool, default = false</dt>
     *      <dd>式声明是否要自动识别显示位置</dd>
     *
     *      <dt>sugoffsetleft: int, default = 0</dt>
     *      <dd>声明显示时, x轴的偏移像素</dd>
     *
     *      <dt>sugoffsettop: int, default = 0</dt>
     *      <dd>声明显示时, y轴的偏移像素</dd>
     *
     *      <dt>sugoffsetwidth: int, default = 0</dt>
     *      <dd>首次初始化时, layout的偏移宽度</dd>
     *
     *      <dt>sugplaceholder: selector</dt>
     *      <dd>声明自动定位时, 显示位置的占位符标签</dd>
     *
     *      <dt>sugprevententer: bool, default = false</dt>
     *      <dd>回车时, 是否阻止默认事件, 为真将阻止表单提交事件</dd>
     * </dl>
     * @namespace DEV.JC
     * @class Suggest
     * @constructor
     * @param   {selector|string}   _selector   
     * @version dev 0.1
     * @author  qiushaowei   <suches@btbtd.org> | 75 Team
     * @date    2013-08-11
     * @example
     */
    function Suggest( _selector ){
        _selector && ( _selector = $(_selector) );
        if( Suggest.getInstance( _selector ) ) return Suggest.getInstance( _selector ) ;
        Suggest.getInstance( _selector, this );
        Suggest._allIns.push( this );

        this._model = new Suggest.Model( _selector );
        this._view = new Suggest.View( this._model );

        this._init();
    }
    /**
     * 获取或设置 Suggest 的实例
     * @method getInstance
     * @param   {selector}              _selector
     * @param   {SuggestInstace|null}   _setter
     * @static
     * @return  {Suggest instance}
     */
    Suggest.getInstance =
        function( _selector, _setter ){
            return JC.BaseMVC.getInstance( _selector, Suggest, _setter );
        };
    /**
     * 判断 selector 是否可以初始化 Suggest
     * @method  isSuggest
     * @param   {selector}      _selector
     * @static
     * @return  bool
     */
    Suggest.isSuggest =
        function( _selector ){
            var _r;
            _selector 
                && ( _selector = $(_selector) ).length 
                && ( _r = _selector.is( '[sugurl]' ) || _selector.is( 'sugstaticdatacb' ) );
            return _r;
        };
    /**
     * 设置 Suggest 是否需要自动初始化
     * @property    autoInit
     * @type        bool
     * @default     true
     * @static
     */
    Suggest.autoInit = true;
    /**
     * 自定义列表显示模板
     * @property    layoutTpl
     * @type        string
     * @default     empty
     * @static
     */
    Suggest.layoutTpl = '';
    /**
     * Suggest 返回列表的内容是否只使用
     * @property    layoutTpl
     * @type        string
     * @default     empty
     * @static
     */
    Suggest.layoutTpl = '';
    /**
     * 数据过滤回调
     * @property    dataFilter
     * @type        function
     * @default     undefined
     * @static
     */
    Suggest.dataFilter;
    /**
     * 保存所有初始化过的实例
     * @property    _allIns
     * @type        array
     * @default     []
     * @private
     * @static
     */
    Suggest._allIns = [];
    /**
     * 隐藏其他 Suggest 显示列表
     * @method      _hideOther
     * @param       {SuggestInstance}       _ins
     * @private
     * @static
     */
    Suggest._hideOther =
        function( _ins ){
            for( var i = 0, j = Suggest._allIns.length; i < j; i++ ){
                if( Suggest._allIns[i]._model._id != _ins._model._id ){
                    Suggest._allIns[i].hide();
                }
            }
        };

    
    JC.f.extendObject( Suggest.prototype, {
        _initHanlderEvent:
            function(){
                var _p = this;

                $( [ _p._view, _p._model ] ).on('BindEvent', function( _evt, _evtName, _cb ){
                    _p.on( _evtName, _cb );
                });

                $( [ _p._view, _p._model ] ).on('TriggerEvent', function( _evt, _evtName, _data ){
                    _p.trigger( _evtName, [ _data ] );
                });

                _p._view.init();
                _p._model.init();

                _p.selector().attr( 'autocomplete', 'off' );

                _p._initActionEvent();

                _p.trigger( 'SuggestInited' );
                 
                return _p;
            }    
        /**
         *
         *  suggest_so({ "p" : true,
              "q" : "shinee",
              "s" : [ "shinee 综艺",
                  "shinee美好的一天",
                  "shinee hello baby",
                  "shinee吧",
                  "shinee泰民",
                  "shinee fx",
                  "shinee快乐大本营",
                  "shinee钟铉车祸",
                  "shinee年下男的约会",
                  "shinee dream girl"
                ]
            });
         */
        , update: 
            function( _evt, _data ){
                var _p = this;
                typeof _data == 'undefined' && ( _data = _evt );

                if( _p._model.sugdatafilter() ){
                    _data = _p._model.sugdatafilter().call( this, _data );
                }

                if( _data && _data.q ){
                    _p._model.cache( _data.q, _data );
                }

                this._view.update( _data );
                _p.trigger( 'sug_detect_id', _data );
            }
        /**
         * 显示 Suggest 
         * @method  show
         * @return  SuggestInstance
         */
        , show: function(){ this._view.show(); return this; }
        /**
         * 隐藏 Suggest
         * @method  hide
         * @return  SuggestInstance
         */
        , hide: function(){ this._view.hide(); return this; }
        /**
         * 获取 显示 Suggest 的触发源选择器, 比如 a 标签
         * @method  selector
         * @return  selector
         */ 
        , selector: function(){ return this._model.selector(); }
        /**
         * 获取 Suggest 外观的 选择器
         * @method  layout
         * @return  selector
         */
        , layout: function(){ return this._model.layout(); }
        /**
         * 使用 jquery on 绑定事件
         * @method  {string}    on
         * @param   {string}    _evtName
         * @param   {function}  _cb
         * @return  SuggestInstance
         */
        , on: function( _evtName, _cb ){ $(this).on(_evtName, _cb ); return this;}
        /**
         * 使用 jquery trigger 绑定事件
         * @method  {string}    trigger
         * @param   {string}    _evtName
         * @return  SuggestInstance
         */
        , trigger: function( _evtName, _data ){ $(this).trigger( _evtName, _data ); return this;}
        , _initActionEvent:
            function(){
                var _p = this;

                _p.on( 'SuggestUpdate', _p.update );
                _p.on( 'SuggestInited', function( _evt ){
                    if( _p._model.suginitedcallback() ){
                        _p._model.suginitedcallback().call( _p );
                    }
                });

                _p._model.selector().on('keyup', function( _evt, _showPopup ){
                    var _sp = $(this)
                        , _val = _sp.val().trim()
                        , _keycode = _evt.keyCode
                        , _ignoreTime = _sp.data('IgnoreTime')
                        ;

                    if( _keycode ){
                        switch( _keycode ){
                            case 38://up
                            case 40://down
                                {
                                    _evt.preventDefault();
                                }
                            case 37:
                            case 39:
                                {
                                    return;
                                }
                            case 27:
                                {
                                    _p.hide();
                                    return;
                                }
                        }
                    }

                    if( !_val ){
                        _p.update();
                        _p.trigger( 'update_id_selector' );
                        return;
                    }

                    if( !_p._model.layout().is(':visible') ){
                        if( _p._model.cache( _val ) ){
                            _p.update( _p._model.cache( _val ) );
                            return;
                        }
                    }

                    if( _p._model.preValue === _val && !_showPopup ){
                        return;
                    }
                    _p._model.preValue = _val;

                    if( _p._model.initValue ){
                        _p._model.initValue = '';
                    }else{
                        !_showPopup && _p.trigger( 'update_id_selector' );
                    }

                    if( _p._model.cache( _val ) ){
                        _p.update( _p._model.cache( _val ) );
                        return;
                    }

                    if( _p._model.sugqueryinterval() ){
                        JC.f.safeTimeout( function(){
                            _p._model.getData( _val );
                        }, _p, 'clearSugInterval', _p._model.sugqueryinterval() );
                    }else{
                        _p._model.getData( _val );
                    }

                });

                _p._model.selector().on('blur', function( _evt ){
                    _p._model.timeout && clearTimeout( _p._model.timeout );
                });

                _p._model.selector().on('keydown', function( _evt ){
                   var _keycode = _evt.keyCode
                        , _sp = $(this)
                        , _keyindex
                        , _isBackward
                        , _items = _p._model.items()
                        , _item
                        ;
                    _keycode == 38 && ( _isBackward = true );
                    JC.log( 'keyup', new Date().getTime(), _keycode );

                    switch( _keycode ){
                        case 38://up
                        case 40://down
                            {
                                _keyindex = _p._model.nextIndex( _isBackward );

                                if( _keyindex >= 0 && _keyindex < _items.length ){
                                    _evt.preventDefault();
                                    _item = $(_items[_keyindex]);
                                    _p._model.selectedIdentifier( _item );
                                    _p.selector().val( _p._model.getKeyword( _item ) );
                                    return;
                                }
                                break;
                            }
                        case 9://tab
                            {
                                _p.hide();
                                return;
                            }
                        case 13://回车
                            {
                                var _tmpSelectedItem;
                                if( _p._model.layout().is( ':visible' ) 
                                        && ( _tmpSelectedItem = _p._model.layout().find( 'dd.active') ) && _tmpSelectedItem.length ){
                                    _p.trigger('SuggestSelected', [ _tmpSelectedItem, _p._model.getKeyword( _tmpSelectedItem ) ]);
                                }

                                _p.hide();
                                _sp.data( 'IgnoreTime', new Date().getTime() );

                                _p._model.sugprevententer() && _evt.preventDefault();
                                break;
                            }
                    }
                });

                $( _p._model.layout() ).delegate( '.js_sugItem', 'mouseenter', function(_evt){
                    _p._model.selectedIdentifier( $(this), true );
                });

                $( _p._model.layout() ).delegate( '.js_sugItem', 'mouseleave', function(_evt){
                    $(this).removeClass('active');
                });

                _p.selector().on( 'click', function(_evt){
                    _evt.stopPropagation();
                    _p.selector().trigger( 'keyup', true );
                    Suggest._hideOther( _p );
                });

                _p.on( 'SuggestSelected', function( _evt, _sp, _keyword ){
                    _p._model.sugselectedcallback() && _p._model.sugselectedcallback().call( _p, _keyword );
                });

                $( _p._model.layout() ).delegate( '.js_sugItem', 'click', function(_evt){
                    var _sp = $(this), _keyword = _p._model.getKeyword( _sp );
                    _p.selector().val( _keyword );
                    _p.hide();

                    _p._model.preValue = _keyword;
                    
                    _p.trigger('SuggestSelected', [_sp, _keyword ]);
                    JC.f.safeTimeout( function(){
                        _p.selector().trigger( 'blur' );
                    }, null, 'SuggestItemClick', 300);

                    _p.trigger( 'update_id_selector', [ _sp ] );
                });

                _p.on( 'update_id_selector', function( _evt, _sp ){
                    if( !( _p._model.idSelector() && _p._model.idSelector().length ) ) return;

                    if( !_sp ){
                        _p._model.idSelector().val( '' );
                    }else{
                        if( !_sp.is( '[data-id]' ) ) return;
                        _p._model.idSelector().val( _sp.data( 'id' ) );
                    }
                });

                _p.on( 'sug_detect_id', function( _evt, _data ){
                    if( !( _p._model.idSelector() && _p._model.idSelector().length ) ) return;
                    JC.dir( _data );
                    if( !_data ) return;
                    var _q = _data.q, _find = [];
                    $.each( _data.s, function( _k, _item ){
                        if( !$.isPlainObject( _item ) ) return;
                        if( _item.name === _q || _item.value === _q ){
                            _find.push( _item );
                        }
                    });
                    JC.log( _find.length );
                    if( !_find.length ) return;
                    if( _find.length > 1 ){
                        if( _p._model.idSelector().val() ){
                            var _hasItem;
                            $.each( _find, function( _k, _item ){
                                if( _item.id == _p._model.idSelector().val() ){
                                    _hasItem = true;
                                    return false;
                                }
                            });
                            if( !_hasItem ){
                                _p._model.idSelector().val( _find.first().id );
                            }
                        }else{
                            _p._model.idSelector().val( _find.first().id );
                        }
                    }else{
                        _p._model.idSelector().val( _find.first().id );
                    }
                });

                if( _p._model.sugautoposition() ){
                    $(window).on('resize', function(){
                        if( _p._model.layout().is(':visible') ){
                            _p._view.show();
                        }
                    });
                }
            }
    });
    
    JC.BaseMVC.build( Suggest );
    Suggest.Model._instanceName = 'SuggestInstace';
    
    JC.f.extendObject( Suggest.Model.prototype, {
        init:
            function(){
                this._id = 'Suggest_' + new Date().getTime();
                this.initValue = this.selector().val().trim();
                return this;
            }

        , selector: function(){ return this._selector; }
        , suglayouttpl:
            function(){
                var _p = this, _r = Suggest.layoutTpl || _p.layoutTpl, _tmp;
                ( _tmp = _p.selector().attr('suglayouttpl') ) && ( _r = _tmp );
                return _r;
            }
        , layoutTpl: '<dl class="sug_layout js_sugLayout" style="display:none;"></dl>'
        , layout: 
            function(){
                var _p = this;
                !_p._layout && _p.selector().is('[suglayout]') 
                    && ( _p._layout = JC.f.parentSelector( _p.selector(), _p.selector().attr('suglayout') ) );

                !_p._layout && ( _p._layout = $( _p.suglayouttpl() )
                                    , _p._layout.hide()
                                    , _p._layout.appendTo( document.body )
                                    , ( _p._sugautoposition = true )
                                    );
                !_p._layout.hasClass('js_sugLayout') && _p._layout.addClass( 'js_sugLayout' );

                if( _p.sugwidth() ){
                    _p._layout.css( { 'width': _p.sugwidth() + 'px' } );
                }

                _p._layout.css( { 'width': _p._layout.width() + _p.sugoffsetwidth() + 'px' } );


                return _p._layout;
            }
        , sugautoposition: 
            function(){ 
                this.layout().is('sugautoposition') 
                    && ( this._sugautoposition = JC.f.parseBool( this.layout().attr('sugautoposition') ) );
                return this._sugautoposition; 
            }

        , sugwidth:
            function(){
                this.selector().is('[sugwidth]') 
                    && ( this._sugwidth = parseInt( this.selector().attr('sugwidth') ) );

                !this._sugwidth && ( this._sugwidth = this.sugplaceholder().width() );


                return this._sugwidth;
            }
        , sugoffsetleft:
            function(){
                this.selector().is('[sugoffsetleft]') 
                    && ( this._sugoffsetleft = parseInt( this.selector().attr('sugoffsetleft') ) );
                !this._sugoffsetleft && ( this._sugoffsetleft = 0 );
                return this._sugoffsetleft;
            }
        , sugoffsettop:
            function(){
                this.selector().is('[sugoffsettop]') 
                    && ( this._sugoffsettop = parseInt( this.selector().attr('sugoffsettop') ) );
                !this._sugoffsettop && ( this._sugoffsettop = 0 );
                return this._sugoffsettop;
            }
        , sugoffsetwidth:
            function(){
                this.selector().is('[sugoffsetwidth]') 
                    && ( this._sugoffsetwidth = parseInt( this.selector().attr('sugoffsetwidth') ) );
                !this._sugoffsetwidth && ( this._sugoffsetwidth = 0 );
                return this._sugoffsetwidth;
            }
        , _dataCallback:
            function( _data ){
                $(this).trigger( 'TriggerEvent', ['SuggestUpdate', _data] );
            }
        , sugdatacallback:
            function(){
                var _p = this;
                this.selector().is('[sugdatacallback]') 
                    && ( this._sugdatacallback = this.selector().attr('sugdatacallback') );
                !this._sugdatacallback && ( this._sugdatacallback = _p._id + '_cb' );
                !window[ this._sugdatacallback ] 
                    && ( window[ this._sugdatacallback ] = function( _data ){ _p._dataCallback( _data ); } );

                return this._sugdatacallback;
            }
        , sugurl:
            function( _word ){
                _word = encodeURIComponent( _word );
                this.selector().is('[sugurl]') 
                    && ( this._sugurl = this.selector().attr('sugurl') );
                !this.selector().is('[sugurl]') && ( this._sugurl = '?word={0}&callback={1}' );
                this._sugurl = JC.f.printf( this._sugurl, _word, this.sugdatacallback() );
                return this._sugurl;
            }
        , sugneedscripttag:
            function(){
                this._sugneedscripttag = true;
                this.selector().is('[sugneedscripttag]') 
                    && ( this._sugneedscripttag = JC.f.parseBool( this.selector().attr('sugneedscripttag') ) );
                return this._sugneedscripttag;
            }
        , getData:
            function( _word ){
                var _p = this, _url = this.sugurl( _word ), _script, _scriptId = 'script_' + _p._id;
                JC.log( _url, new Date().getTime() );
                if( this.sugneedscripttag() ){
                    $( '#' + _scriptId ).remove();
                    _script = JC.f.printf( '<script id="{1}" src="{0}"><\/script>', _url, _scriptId );
                    $( _script ).appendTo( document.body );
                }else{
                    $.get( _url, function( _d ){
                        _d = $.parseJSON( _d );
                        _p._dataCallback( _d );
                    });
                }
            }
        , cache: 
            function( _key, _val ){
                this._cache = this._cache || {};
                typeof _val != 'undefined' && ( this._cache[ _key ] = _val );
                return this._cache[ _key ];
            }
        , sugselectedcallback:
            function(){
                var _p = this;
                this.selector().is('[sugselectedcallback]') 
                    && ( this._sugselectedcallback = this.selector().attr('sugselectedcallback') );
                return this._sugselectedcallback ? window[ this._sugselectedcallback] : null;
            }
        , suginitedcallback:
            function(){
                var _p = this;
                this.selector().is('[suginitedcallback]') 
                    && ( this._suginitedcallback = this.selector().attr('suginitedcallback') );
                return this._suginitedcallback ? window[ this._suginitedcallback ] : null;
            }
        , sugdatafilter:
            function(){
                var _p = this;
                this.selector().is('[sugdatafilter]') 
                    && ( this._sugdatafilter = this.selector().attr('sugdatafilter') );
                this._sugdatafilter = this._sugdatafilter || Suggest.dataFilter;
                return this._sugdatafilter ? window[ this._dataCallback ] : null;
            }
        , sugqueryinterval: 
            function(){
                this.selector().is('[sugqueryinterval]') 
                    && ( this._sugqueryinterval = parseInt( this.selector().attr('sugqueryinterval') ) );
                this._sugqueryinterval = this._sugqueryinterval || 300;
                return this._sugqueryinterval;
            }
        , sugprevententer:
            function(){
                var _r;
                this.selector().is( '[sugprevententer]' )
                    && ( _r = JC.f.parseBool( this.selector().attr('sugprevententer') ) )
                    ;
                return _r;
            }
        , timeout: null
        , preValue: null
        , keyindex: -1
        , nextIndex:
            function( _isBackward ){
                var _items = this.items(), _len = _items.length;

                if( _isBackward ){
                    if( this.keyindex <= 0 ){
                        this.keyindex = _len - 1;
                    }else{
                        this.keyindex--;
                    }
                }else{
                    if( this.keyindex >= _len - 1 ){
                        this.keyindex = 0;
                    }else{
                        this.keyindex++;
                    }
                }

                return this.keyindex;
            }
        , items: function(){ return this.layout().find('.js_sugItem') }
        , selectedIdentifier:
            function( _selector, _updateKeyIndex ){
                this._preSelected && this._preSelected.removeClass( 'active' );
                _selector.addClass( 'active' );
                _updateKeyIndex && ( this.keyindex = parseInt( _selector.attr('keyindex') ) );
                this._preSelected = _selector;
            }
        , getKeyword:
            function( _selector ){
                var _keyword = _selector.attr('keyword');
                try{ _keyword = decodeURIComponent( _keyword ); }catch(ex){}
                return _keyword;
            }
        , currentData:
            function( _setter ){
                typeof _setter != 'undefined' && ( this._currentData = _setter );
                return this._currentData;
            }

        , sugsubtagname:
            function(){
                var _r = 'dd', _tmp;
                ( _tmp = this.selector().attr('sugsubtagname') ) && ( _r = _tmp );
                return _r;
            }

        , sugplaceholder: 
            function(){
                var _r = this.selector();
                this.selector().is('[sugplaceholder]') 
                    && ( _r = JC.f.parentSelector( this.selector(), this.selector().attr('sugplaceholder') ) );
                return _r;
            }

        , idSelector:
            function(){
                var _r;
                this.is( '[sugIdSelector]' ) 
                    && ( _r = JC.f.parentSelector( this.selector(), this.attrProp( 'sugIdSelector' ) ) );
                return _r;
            }
    });
    
    JC.f.extendObject( Suggest.View.prototype, {
        init:
            function() {
                return this;
            }

        , show: 
            function(){ 
                var _p = this;
                $(this).trigger( 'TriggerEvent', ['SuggestBeforeShow'] );
                this._model.layout().css( 'z-index', window.ZINDEX_COUNT++ );
                this.autoposition();
                this._model.layout().show(); 

                //fix bug for ie
                setTimeout( function(){ _p._model.layout().show(); }, 10);

                $(this).trigger( 'TriggerEvent', ['SuggestShow'] );
            }
        , autoposition:
            function(){
                if( !this._model.sugautoposition() ) return;
                var _p = this
                    , _offset = _p._model.sugplaceholder().offset()
                    , _sheight = _p._model.sugplaceholder().height()
                    ;

                _p._model.layout().css({
                    'left': _offset.left + _p._model.sugoffsetleft() + 'px'
                    , 'top': _offset.top + _p._model.sugoffsettop() + _sheight + 'px'
                });
            }
        , hide: 
            function(){ 
                this._model.layout().hide();
                this.reset();
                $(this).trigger( 'TriggerEvent', ['SuggestHide'] );
            }
        , update:
            function( _data ){
                var _p = this, _ls = [], _query, _tmp, _text, _subtagname = _p._model.sugsubtagname(), _item;

                if( !( _data && _data.s && _data.s.length ) ){
                    _p.hide();
                    return;
                }

                for( var i = 0, j = _data.s.length; i < j; i++ ){
                    _tmp = _data.s[i];
                    var _itemData = [];
                    if( typeof _tmp === 'object' ){
                         $.each( _tmp, function( _k, _sitem ){
                             _itemData.push( JC.f.printf( 'data-{0}="{1}"', _k, encodeURIComponent( _sitem ) ) );
                         });
                         _tmp = _tmp.name || _tmp.value || _tmp.id;
                    }
                    _text = _tmp;
                    _query = _data.q || '';

                    _text = _text.replace( _query, JC.f.printf( '<b>{0}</b>', _query ) );
                    /*
                    if( _tmp.indexOf( _query ) > -1 ){
                        _text = _text.slice( _query.length );
                        _text = '<b>' + _text + '</b>';
                    }
                    else _query = '';
                    */
                    _ls.push( JC.f.printf('<{4} keyword="{2}" keyindex="{3}" class="js_sugItem" {5} >{1}</{4}>'
                                , _query, _text, encodeURIComponent( _tmp ), i
                                , _subtagname
                                , _itemData.join( ' ' )
                            ));
                }

                _p._model.layout().html( _ls.join('') );
                JC.log( 'suggest update' );
                this.reset();
                _p._model.currentData( _data );
                $(this).trigger( 'TriggerEvent', ['SuggestUpdated'] );

                _p.show();
            }
        , reset:
            function(){
                JC.log( 'suggest reset' );
                this._model.keyindex = -1;
                this._model.layout().find( '.js_sugItem' ).removeClass('active'); 
                $(this).trigger( 'TriggerEvent', ['SuggestReset'] );
            }
    });

    /**
     * 初始化完后的事件
     * @event   SuggestInited
     */
    /**
     * 获得新数据的事件
     * @event   SuggestUpdate
     */
    /**
     * 数据更新完毕后的事件
     * @event   SuggestUpdated
     */
    /**
     * 显示前的事件
     * @event   SuggestBeforeShow
     */
    /**
     * 显示后的事件
     * @event   SuggestShow
     */

    $(document).delegate( 'input[type=text]', 'focus', function( _evt ){
        var _p = $(this), _ins = Suggest.getInstance( _p );
        if( _p.is( '[readonly]' ) || _p.is( '[disabled]' ) ) return;
        if( _ins || !Suggest.isSuggest( _p ) || !Suggest.autoInit ) return;
        JC.log( 'Suggest input fined:', _p.attr('name'), new Date().getTime() );
        _ins = new Suggest( _p );
    });

    $(document).on('click', function( _evt ){
        $('dl.js_sugLayout, div.js_sugLayout').hide();
    });

    return JC.Suggest;
});}( typeof define === 'function' && define.amd ? define : 
        function ( _name, _require, _cb) { 
            typeof _name == 'function' && ( _cb = _name );
            typeof _require == 'function' && ( _cb = _require ); 
            _cb && _cb(); 
        }
        , window
    )
);
