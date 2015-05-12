;(function(define, _win) { 'use strict'; define( 'JC.AutoSelect', [ 'JC.common' ], function(){
//TODO: 添加数据缓存逻辑
    /**
     * <h2>select 级联下拉框无限联动</h2>
     * <br />只要引用本脚本, 页面加载完毕时就会自动初始化级联下拉框功能
     * <br /><br />动态添加的 DOM 需要显式调用 JC.AutoSelect( domSelector ) 进行初始化
     * <br /><br />要使页面上的级联下拉框功能能够自动初始化, 需要在select标签上加入一些HTML 属性
     * <p><b>require</b>: 
     *      <a href='JC.common.html'>JC.common</a>
     * </p>
     * <p><a href='https://github.com/openjavascript/jquerycomps' target='_blank'>JC Project Site</a>
     * | <a href='http://jc2.openjavascript.org/docs_api/classes/JC.AutoSelect.html' target='_blank'>API docs</a>
     * | <a href='../../modules/JC.AutoSelect/0.2/_demo' target='_blank'>demo link</a></p>
     * <h2>select 标签可用的 HTML 属性</h2>
     * <dl>
     *      <dt>defaultselect, 这个属性不需要赋值</dt>
     *      <dd>该属性声明这是级联下拉框的第一个下拉框, <b>这是必填项,初始化时以这个为入口</b></dd>
     *
     *      <dt>selectvalue = string</dt>
     *      <dd>下拉框的默认选中值</dd>
     *
     *      <dt>selecturl = AJAX 数据请求的URL</dt>
     *      <dd>下拉框的数据请求接口, 符号 {0} 代表下拉框值的占位符</dd>
     *
     *      <dt>selectignoreinitrequest = bool, default = false</dt>
     *      <dd>
     *          首次初始化时, 是否需要请求新数据
     *          <br />有时 联动框太多, 载入页面时, 后端直接把初始数据输出, 避免请求过多
     *      </dd>
     *
     *      <dt>selecttarget = selector</dt>
     *      <dd>下一级下拉框的选择器语法</dd>
     *
     *      <dt>selectdatacb = 静态数据请求回调</dt>
     *      <dd>如果数据不需要 AJAX 请求, 可使用这个属性, 自行定义数据处理方式</dd>
     *
     *      <dt>selectrandomurl = bool, default = false</dt>
     *      <dd>AJAX 请求时, 添加随机参数, 防止数据缓存</dd>
     *
     *      <dt>selecttriggerinitchange = bool, default = true</dt>
     *      <dd>首次初始化时, 是否触发 change 事件</dd>
     *
     *      <dt>selecthideempty = bool, default = false</dt>
     *      <dd>是否隐藏没有数据的 selecct</dd>
     *
     *      <dt>selectdatafilter = 请求数据后的处理回调</dt>
     *      <dd>如果接口的数据不符合 select 的要求, 可通过这个属性定义数据过滤函数</dd>
     *
     *      <dt>selectbeforeinited = 初始化之前的回调</dt>
     *
     *      <dt>selectinited = 初始化后的回调</dt>
<dd><pre>function selectinited( _items ){
    var _ins = this;
}</pre>
</dd>
     *
     *      <dt>selectallchanged = 所有select请求完数据之后的回调, <b>window 变量域</b></dt>
     *      <dd><pre>function selectallchanged( _items ){
    var _ins = this;
}</pre>
     *      </dd>
     *
     *      <dt>selectCacheData = bool, default = true</dt>
     *      <dd>是否缓存ajax数据</dd>
     *
     *      <dt>selectItemDataFilter = function</dt>
     *      <dd>每个select 显示option前,可自定义数据过滤函数
<pre>function selectItemDataFilter2( _selector, _data, _pid){
    //alert( '_pid:' + _pid + '\n' + JSON.stringify( _data ) );
    var _r, i, j;
    if( _pid === '' ){//过滤北京id = 28
        _r = [];
        for( i = 0, j = _data.length; i < j; i++ ){
            if( _data[i][0] == 28 ) continue;
            _r.push( _data[i] );
        }
        _data = _r;
    }
    else if( _pid == 14 ){//过滤江门id=2254
        _r = [];
        for( i = 0, j = _data.length; i < j; i++ ){
            if( _data[i][0] == 2254 ) continue;
            _r.push( _data[i] );
        }
        _data = _r;
    }
    return _data;
}</pre>
     *      </dd>
     * </dl>
     * <h2>option 标签可用的 HTML 属性</h2>
     * <dl>
     *      <dt>defaultoption, 这个属性不需要赋值</dt>
     *      <dd>声明默认 option 选项, 更新option时, 有该属性的项不会被清除</dd>
     * </dl>
     * <h2>数据格式</h2>
     * <p>
     *      [ [id, name], [id, name] ... ]
     *      <br /> 如果获取到的数据格式不是默认格式,
     *      可以通过 <a href='JC.AutoSelect.html#property_dataFilter'>AutoSelect.dataFilter</a> 属性自定义函数, 进行数据过滤
     * </p>
     * @class       AutoSelect
     * @namespace   JC
     * @static
     * @version dev 0.2
     * @author  qiushaowei   <suches@btbtd.org> | 75 Team
     * @date    2013-07-28(.2), 2013-06-11(.1)
     * @param   {selector}  _selector   要初始化的级联下拉框父级节点
     * @example
        <h2>AJAX 返回内容</h2>
        <code>
            <dd>    
                <select name='select102_1' defaultselect selecturl="data/shengshi_with_error_code.php?id=0" selecttarget="select[name=select102_2]">
                    <option value="-1" defaultoption>请选择</option>
                </select>
                <select name='select102_2' selecturl="data/shengshi_with_error_code.php?id={0}" selecttarget="select[name=select102_3]">
                    <option value="-1" defaultoption>请选择</option>
                </select>
                <select name='select102_3' selecturl="data/shengshi_with_error_code.php?id={0}">
                    <option value="-1" defaultoption>请选择</option>
                </select>
            </dd>
        </code>
        <script>
            $.get( './data/shengshi_html.php?rnd='+new Date().getTime(), function( _r ){
                var _selector = $(_r);
                $( 'dl.def > dt' ).after( _selector );
                JC.AutoSelect( _selector );
            });

            JC.AutoSelect.dataFilter = 
                function( _data, _select ){
                    var _r = _data;
                    if( _data && !_data.length && _data.data ){
                        _r = _data.data;
                    }
                    return _r;
                };
        </script>
     */
    JC.AutoSelect = AutoSelect;
    JC.Form && ( JC.Form.initAutoSelect = AutoSelect );

    JC.f.addAutoInit && JC.f.addAutoInit( AutoSelect );

    function AutoSelect( _selector ){
        var _ins = [];
        _selector && ( _selector = $(_selector) );

        if( AutoSelect.isSelect( _selector ) ){
            _ins.push( new Control( _selector ) );
        }else if( _selector && _selector.length ){
            _selector.find( 'select[defaultselect]' ).each( function(){
                _ins.push( new Control( $(this ) ));
            });
        }
        return _ins;
    }
    var AutoSelectProp = {
        /**
         * 判断 selector 是否为符合自动初始化联动框的要求
         * @method  isSelect
         * @param   {selector}  _selector
         * @return  bool
         * @static
         */
        isSelect: 
            function( _selector ){
                var _r;
                _selector 
                    && ( _selector = $(_selector) ) 
                    && _selector.is( 'select' ) 
                    && _selector.is( '[defaultselect]' )
                    && ( _r = true );
                return _r;
            }
        /**
         * 是否自动隐藏空值的级联下拉框, 起始下拉框不会被隐藏
         * <br />这个是全局设置, 如果需要对具体某个select进行处理, 对应的 HTML 属性 selecthideempty
         * @property    hideEmpty
         * @type    bool
         * @default false
         * @static
         * @example
                AutoSelect.hideEmpty = true;
         */
        , hideEmpty: false
        /**
         * 级联下拉框的数据过滤函数
         * <br />默认数据格式: [ [id, name], [id, name] ... ]
         * <br />如果获取到的数据格式非默认格式, 可通过本函数进行数据过滤
         * <p>
         *  <b>注意, 这个是全局过滤, 如果要使用该函数进行数据过滤, 判断逻辑需要比较具体</b>
         *  <br />如果要对具体 select 进行数据过滤, 可以使用HTML属性 selectdatafilter 指定过滤函数
         * </p>
         * @property    dataFilter
         * @type    function
         * @default null
         * @static
         * @example
                 AutoSelect.dataFilter = 
                    function( _data, _select ){
                        var _r = _data;
                        if( _data && !_data.length && _data.data ){
                            _r = _data.data;
                        }
                        return _r;
                    };
         */
        , dataFilter: null
        /**
         * 下拉框初始化功能都是未初始化 数据之前的回调
         * <br />这个是全局回调, 如果需要对具体某一组进行处理, 对应的 HTML 属性 selectbeforeInited
         * @property    beforeInited
         * @type    function
         * @default null
         * @static
         */
        , beforeInited: null
        /**
         * 下拉框第一次初始完所有数据的回调
         * <br />这个是全局回调, 如果需要对具体某一组进行处理, 对应的 HTML 属性 selectinited
         * @property    inited
         * @type    function
         * @default null
         * @static
         */
        , inited: null
        /**
         * 下拉框每个项数据变更后的回调
         * <br />这个是全局回调, 如果需要对具体某一组进行处理, 对应的 HTML 属性 selectchange
         * @property    change
         * @type    function
         * @default null
         * @static
         */
        , change: null
        /**
         * 下拉框所有项数据变更后的回调
         * <br />这个是全局回调, 如果需要对具体某一组进行处理, 对应的 HTML 属性 selectallchanged
         * @property    allChanged
         * @type    function
         * @default null
         * @static
         */
        , allChanged: null
        /**
         * 第一次初始化所有联动框时, 是否触发 change 事件
         * <br />这个是全局回调, 如果需要对具体某一组进行处理, 对应的 HTML 属性 selecttriggerinitchange
         * @property    triggerInitChange
         * @type    bool
         * @default false
         * @static
         */
        , triggerInitChange: true
        /**
         * ajax 请求数据时, 是否添加随机参数防止缓存
         * <br />这个是全局回调, 如果需要对具体某一组进行处理, 对应的 HTML 属性 selectrandomurl
         * @property    randomurl
         * @type    bool
         * @default false
         * @static
         */
        , randomurl: false
        /**
         * 处理 ajax url 的回调处理函数
         * <br />这个是全局回调, 如果需要对具体某一组进行处理, 对应的 HTML 属性 selectprocessurl
         * @property    processUrl
         * @type    function
         * @default null
         * @static
         */
        , processUrl: null
        /**
         * 首次初始化时, 是否需要请求新数据
         * <br />有时 联动框太多, 载入页面时, 后端直接把初始数据输出, 避免请求过多
         * @property    ignoreInitRequest
         * @type        bool
         * @default     false
         * @static
         */
        , ignoreInitRequest: false
        /**
         * 获取或设置 selector 的实例引用
         * @method  getInstance
         * @param   {selector}  _selector
         * @param   {AutoSelectControlerInstance}   _ins
         * @return AutoSelectControlerInstance
         * @static
         */
        , getInstance:
            function( _selector, _ins ){
                var _r;
                _selector 
                    && ( _selector = $( _selector ) ) 
                    && ( typeof _ins != 'undefined' && _selector.data('SelectIns', _ins )
                            , _r = _selector.data('SelectIns') );
                return _r;
            }
        /**
         * 清除 select 的 所有 option, 带有属性 defaultoption 例外
         * @method  removeItems
         * @param   {selector}  _selector
         * @return  {int}   deleted items number
         * @static
         */
        , removeItems:
            function( _selector ){
                var _items = _selector.find('> option:not([defaultoption])'), _len = _items.length;
                    _items.remove();
                return _len;
            }
    };
    for( var k in AutoSelectProp ) AutoSelect[k] = AutoSelectProp[k];

    function Control( _selector ){

        if( AutoSelect.getInstance( _selector ) ) return AutoSelect.getInstance( _selector );
        AutoSelect.getInstance( _selector, this );

        this._model = new Model( _selector );
        this._view = new View( this._model, this );

        this._init();
    }

    Control.prototype = {
        _init:
            function(){
                var _p = this;

                $.each( _p._model.items(), function( _ix, _item ){
                    AutoSelect.getInstance( $(_item), _p );
                });

                _p._model.beforeInited() && _p.on( 'SelectBeforeInited', _p._model.beforeInited() );

                _p.on('SelectInited', function(){
                    if( _p._model.isInited() ) return;

                    var _tmp = _p._model.first();
                    while( _p._model.next( _tmp ) ){
                        _tmp.on( 'change', _p._responeChange );
                        _tmp = _p._model.next( _tmp );
                    }

                    if( _p._model.items().length ){
                        $( _p._model.items()[ _p._model.items().length - 1 ] ).on( 'change', function( _evt ){
                            _p.trigger( 'SelectAllChanged' );
                        });
                    }

                    _p._model.isInited( true );

                    _p._model.inited() && _p._model.inited().call( _p, _p._model.items() );

                });

                _p.on('SelectChange', function( _evt, _selector ){
                    _p._model.change( _selector ) 
                        && _p._model.change( _selector ).call( _selector, _evt, _p );
                });

                _p._model.allChanged() 
                    && _p.on( 'SelectAllChanged', function( _evt ){
                            _p._model.allChanged().call( _p, _p._model.items() );
                        });

                _p.trigger('SelectBeforeInited');
                
                if( _p._model.selectignoreinitrequest() ){
                    _p._model.triggerInitChange() && _p._model.first().trigger('change');
                    _p.trigger( 'SelectAllChanged' );
                    _p.trigger( 'SelectInited' );
                }else{
                    _p._update( _p._model.first(), _p._firstInitCb );
                }
                
                return _p;
            }    
        /**
         * 使用 jquery on 绑定事件
         * @method  {string}    on
         * @param   {string}    _evtName
         * @param   {function}  _cb
         * @return  AutoSelectInstance
         */
        , on: function( _evt, _cb ){ $(this).on( _evt, _cb ); return this; }
        /**
         * 使用 jquery trigger 绑定事件
         * @method  {string}    trigger
         * @param   {string}    _evtName
         * @return  AutoSelectInstance
         */
        , trigger: function( _evt, _args ){ $(this).trigger( _evt, _args ); return this; }
        /**
         * 获取第一个 select
         * @method  first
         * @return  selector
         */
        , first: function(){ return this._model.first(); }
        /**
         * 获取最后一个 select
         * @method  last
         * @return selector
         */
        , last: function(){ return this._model.last(); }
        /**
         * 获取所有 select
         * @method  items
         * @return  selector
         */
        , items: function(){ return this._model.items(); }
        /**
         * 是否为第一个 select
         * @method  isFirst
         * @param   {selector}  _selector
         * @return  selector
         */
        , isFirst: function( _selector ){ return this._model.isFirst( _selector ); }
        /**
         * 是否为最后一个 select
         * @method  isLast
         * @param   {selector}  _selector
         * @return  selector
         */
        , isLast: function( _selector ){ return this._model.isLast( _selector ); }
        /**
         * 是否已经初始化过
         * @method  isInited
         * @param   {selector}  _selector
         * @return  selector
         */
        , isInited: function(){ return this._model.isInited(); }
        /**
         * 获取 select 的数据
         * @method  data
         * @param   {selector}  _selector
         * @return  JSON
         */
        , data: function( _selector ){ return this._model.data( _selector ); }
        /**
         * 更新默认选中列表
         * @method  update
         * @param   {array|string}     _ls  ids for selected, (string with "," or array of ids );
         * @return  AutoSelectInstance
         */
        , update:
            function( _ls ){
                if( !( _ls && _ls.length ) ) return this;
                if( typeof _ls == 'string' ){
                    var _tmp = _ls.replace( /[\s]+/g, '').trim();
                    if( !_tmp ) return this;
                    _ls = _tmp.split(',');
                }
                var _p = this, _items = _p._model.items();
                if( !( _items && _items.length ) ) return;

                $.each( _ls, function( _ix, _item ){
                    if( !_items[ _ix ] ) return;
                    $( _items[ _ix ] ).attr('selectvalue', (_item.toString()||'').trim() );
                });

                _p._update( _p._model.first(), _p._changeCb );

                return this;
            }

        , _responeChange:
            function( _evt, _ignoreAction ){
                var _sp = $(this)
                    , _p = AutoSelect.getInstance( _sp )
                    , _next = _p._model.next( _sp )
                    , _v = _sp.val()
                    ;

                if( _ignoreAction ) return;

                //JC.log( '_responeChange:', _sp.attr('name'), _v );

                if( !( _next && _next.length ) ){
                    _p.trigger( 'SelectChange' );
                }else{
                    _p._update( _next, _p._changeCb, _v );
                }
            }

        , _update:
            function( _selector, _cb, _pid, _oldToken ){
                if( this._model.isStatic( _selector ) ){
                    this._updateStatic( _selector, _cb, _pid );
                }else if( this._model.isAjax( _selector ) ){
                    this._updateAjax( _selector, _cb, _pid, _oldToken );
                }else{
                    this._updateNormal( _selector, _cb, _pid );
                }
                return this;
            }

        , _updateAjax:
            function( _selector, _cb, _pid, _oldToken ){
                var _p = this
                    , _data
                    , _next = _p._model.next( _selector )
                    , _url, _token
                    ;

                if( _p._model.isFirst( _selector ) ){
                    typeof _pid == 'undefined' && ( _pid = _p._model.selectparentid( _selector ) || '' );
                    if( typeof _pid != 'undefined' ){
                        _url = _p._model.selecturl( _selector, _pid );
                        _token = _p._model.token( true );

                        if( _p._model.selectCacheData() && Model.ajaxCache( _url ) ){
                            setTimeout( function(){
                                _data = Model.ajaxCache( _url );
                                _p._view.update( _selector, _data, _pid );
                                _cb && _cb.call( _p, _selector, _data, _token );
                            }, 10 );
                        }else{
                            setTimeout( function(){
                                $.get( _url, function( _data ){
                                    _data = Model.ajaxCache( _url, $.parseJSON( _data ) );

                                    _p._view.update( _selector, _data, _pid );
                                    _cb && _cb.call( _p, _selector, _data, _token );
                                });
                            }, 10 );
                        }
                    }
                }else{
                    if( typeof _oldToken != 'undefined' && _oldToken != _p._model.token() ){
                        return;
                    }
                    _url = _p._model.selecturl( _selector, _pid );

                    if( _p._model.selectCacheData() && Model.ajaxCache( _url ) ){
                        _data = Model.ajaxCache( _url );
                        _p._processData( _oldToken, _selector, _cb, _data, _pid );
                    }else{
                        $.get( _url, function( _data ){
                            _data = $.parseJSON( _data );
                            _p._processData( _oldToken, _selector, _cb, Model.ajaxCache( _url, _data, _pid ) );
                        });
                    }
                }
                return this;
            }

        , _processData:
            function( _oldToken, _selector, _cb, _data, _pid ){
                var _p = this;
                setTimeout( function(){
                    if( typeof _oldToken != 'undefined' && _oldToken != _p._model.token() ){
                        return;
                    }
                    _p._view.update( _selector, _data, _pid );
                    _cb && _cb.call( _p, _selector, _data, _oldToken );
                }, 10 );
            }

        , _changeCb:
            function( _selector, _data, _oldToken ){
                var _p = this
                    , _next = _p._model.next( _selector )
                    , _token = _p._model.token()
                ;
                if( typeof _oldToken != 'undefined' ){
                    if( _oldToken !== _token ){
                        return;
                    }
                }

                _p.trigger( 'SelectChange', [ _selector ] );

                _selector.trigger( 'change', [ true ] );
                if( _p._model.isLast( _selector ) ){
                    //_p.trigger( 'SelectAllChanged' );
                }

                if( _next && _next.length ){
                    _p._update( _next, _p._changeCb, _selector.val(), _oldToken );
                }
                return this;
            }

        , _firstInitCb:
            function( _selector, _data ){
                var _p = this
                    , _next = _p._model.next( _selector );
                ;

                if( !_p._model.isInited() ){
                    _p._model.triggerInitChange() && _selector.trigger('change', [true] );
                }

                _p.trigger( 'SelectChange', [ _selector ] );
                
                if( _next && _next.length ){
                    //JC.log( '_firstInitCb:', _selector.val(), _next.attr('name'), _selector.attr('name') );
                    _p._update( _next, _p._firstInitCb, _selector.val() );
                }

                if( _p._model.isLast( _selector ) ){
                    _p.trigger( 'SelectAllChanged' );
                    !_p._model.isInited() && _p.trigger( 'SelectInited' );
                }

                return this;
            }

        , _updateStatic:
            function( _selector, _cb, _pid ){
                var _p = this, _data, _ignoreUpdate = false;
                //JC.log( 'static select' );
                if( _p._model.isFirst( _selector ) ){
                    typeof _pid == 'undefined' 
                        && ( _pid = _p._model.selectparentid( _selector ) 
                                    || _p._model.selectvalue( _selector ) 
                                    || '' 
                           );
                    if( _p._model.hasVal( _selector, _pid ) ){
                        _selector.val( _pid );
                        _ignoreUpdate = true;
                    }else if( typeof _pid != 'undefined' ){
                        _data = _p._model.datacb( _selector )( _pid );
                    }
                }else{
                    _data = _p._model.datacb( _selector )( _pid );
                }
                !_ignoreUpdate && _p._view.update( _selector, _data, _pid );
                _cb && _cb.call( _p, _selector, _data );
                return this;
            }

        , _updateNormal:
            function( _selector, _cb, _pid ){
               var _p = this, _data;
                //JC.log( 'normal select' );
                if( _p._model.isFirst( _selector ) ){
                    var _next = _p._model.next( _selector );
                    typeof _pid == 'undefined' && ( _pid = _p._model.selectvalue( _selector ) || _selector.val() || '' );
                    if( _p._model.hasVal( _selector, _pid ) ){
                        _selector.val( _pid );
                    }
                    if( _next && _next.length ){
                        _p._update( _next, _cb, _pid );
                        return this;
                    }
                }else{
                    _data = _p._model.datacb( _selector )( _pid );
                }
                _p._view.update( _selector, _data, _pid );
                _cb && _cb.call( _p, _selector, _data );
                return this;
            }
    }
    
    function Model( _selector ){
        this._selector = _selector;
        this._items = [];
        this._isInited = false;

        this._init();
    }

    Model._ajaxCache = {};
    Model.ajaxCache = 
        function( _key, _val ){
            _val && ( Model._ajaxCache[ _key ] = _val );
            return Model._ajaxCache[ _key ];
        };
    
    Model.prototype = {
        _init:
            function(){
                this._findAllItems( this._selector );
                //JC.log( 'select items.length:', this._items.length );
                this._initRelationship();
                return this;
            }

        , token:
            function( _next ){
                typeof this._token == 'undefined' && ( this._token = 0 );
                _next && ( this._token++ );
                return this._token;
            }

        , selectCacheData:
            function(){
                var _r = true;
                this.first().is( '[selectCacheData]' ) && ( _r = JC.f.parseBool( this.first().attr('selectCacheData') ) );
                return _r;
            }

        , _findAllItems:
            function( _selector ){
                this._items.push( _selector );
                _selector.is( '[selecttarget]' )
                    && this._findAllItems( JC.f.parentSelector( _selector, _selector.attr('selecttarget') ) );
            }

        , _initRelationship:
            function(){
                this._selector.data( 'FirstSelect', true );
                if( this._items.length > 1 ){
                    this._items[ this._items.length - 1 ].data('LastSelect', true);
                    for( var i = 0; i < this._items.length; i ++ ){
                        var item = this._items[i]
                            , preItem = this._items[i-1];
                            ;
                        if( preItem ){
                            item.data('PrevSelect', preItem);
                            preItem.data('NextSelect', item );

                            item.data('parentSelect', preItem); //向后兼容0.1
                        }
                    }
                }
            }

        , items: function(){ return this._items; }
        , first: function(){ return this._items[0]; }
        , last: function(){ return this._items[ this._items -1 ]; }
        , next: function( _selector ){ return _selector.data('NextSelect'); }
        , prev: function( _selector ){ return _selector.data('PrevSelect'); }
        , isFirst: function( _selector ){ return !!_selector.data('FirstSelect'); }
        , isLast: function( _selector ){ return !!_selector.data('LastSelect'); }
        , isStatic: function( _selector ){ return _selector.is('[selectdatacb]'); }
        , isAjax: function( _selector ){ return _selector.is('[selecturl]'); }

        , isInited: 
            function( _setter ){ 
                typeof _setter != 'undefined' && ( this._isInited = _setter )
                return this._isInited;
            }

        , datacb:
            function( _selector ){
                var _r;
                _selector.attr('selectdatacb') 
                    && ( _r = window[ _selector.attr('selectdatacb') ] )
                    ;
                return _r;
            }

        , selectparentid:
            function( _selector ){
                var _r;
                _selector.attr('selectparentid') 
                    && ( _r = _selector.attr('selectparentid') )
                    ;
                _selector.removeAttr( 'selectparentid' );
                return _r || '';
            }

        , selectvalue:
            function( _selector ){
                var _r = _selector.attr('selectvalue');
                _selector.removeAttr( 'selectvalue' );
                return _r || '';
            }

        , randomurl:
            function( _selector ){
                var _r = AutoSelect.randomurl;
                _selector.is('[selectrandomurl]')
                    && ( _r = JC.f.parseBool( _selector.attr('selectrandomurl') ) )
                    ;
                return _r;
            }

        , selectignoreinitrequest:
            function( _selector ){
                var _r = AutoSelect.ignoreInitRequest;

                this.first().is('[selectignoreinitrequest]')
                    && ( _r = JC.f.parseBool( this.first().attr('selectignoreinitrequest') ) )
                    ;

                _selector
                    && _selector.is('[selectignoreinitrequest]')
                    && ( _r = JC.f.parseBool( _selector.attr('selectignoreinitrequest') ) )
                    ;
                return _r;
            }

        
        , triggerInitChange:
            function(){
                var _r = AutoSelect.triggerInitChange, _selector = this.first();
                _selector.attr('selecttriggerinitchange')
                    && ( _r = JC.f.parseBool( _selector.attr('selecttriggerinitchange') ) )
                    ;
                return _r;
            }

        , hideempty:
            function( _selector ){
                var _r = AutoSelect.hideEmpty, _first = this.first();

                _first 
                    && _first.length
                    && _first.is('[selecthideempty]')
                    && ( _r = JC.f.parseBool( _first.attr('selecthideempty') ) )
                    ;

                _selector 
                    && _selector.length
                    && _selector.is('[selecthideempty]')
                    && ( _r = JC.f.parseBool( _selector.attr('selecthideempty') ) )
                    ;
                return _r;
            }

        , selecturl:
            function( _selector, _pid ){
                var _cb = AutoSelect.processUrl, _r = _selector.attr('selecturl') || '';
                    _selector.attr('selectprocessurl') 
                        && window[ _selector.attr('selectprocessurl' ) ]
                        && ( _cb = window[ _selector.attr('selectprocessurl' ) ] )
                        ;
                    _r = JC.f.printf( _r, _pid );
                    this.randomurl( _selector ) && ( _r = JC.f.addUrlParams( _r, {'rnd': new Date().getTime() } ) );
                    _cb && ( _r = _cb.call( _selector, _r, _pid ) );
                return _r;
            }

        , _userdatafilter:
            function( _selector ){
                var _r;
                _selector.attr('selectdatafilter') 
                    && ( _r = window[ _selector.attr('selectdatafilter') ] )
                    ;
                return _r;
            }

        , dataFilter:
            function( _selector, _data ){
                var _cb = this._userdatafilter( _selector ) || AutoSelect.dataFilter;
                _cb && ( _data = _cb( _data, _selector ) );
                return _data;
            }

        , beforeInited:
            function(){
                var _cb = AutoSelect.beforeInited, _selector = this.first();
                    _selector.attr('selectbeforeInited') 
                        && window[ _selector.attr('selectbeforeInited' ) ]
                        && ( _cb = window[ _selector.attr('selectbeforeinited' ) ] )
                        ;
                return _cb;
            }

        , inited:
            function(){
               var _cb = AutoSelect.inited, _selector = this.first();
                    _selector.attr('selectinited') 
                        && window[ _selector.attr('selectinited' ) ]
                        && ( _cb = window[ _selector.attr('selectinited' ) ] )
                        ;
                return _cb;
            }

        , change:
            function( _selector ){
               var _cb = AutoSelect.change;
                    _selector.attr('selectchange') 
                        && window[ _selector.attr('selectchange' ) ]
                        && ( _cb = window[ _selector.attr('selectchange' ) ] )
                        ;
                return _cb;
            }

        , allChanged:
            function(){
               var _cb = AutoSelect.allChanged, _selector = this.first();
                    _selector.attr('selectallchanged') 
                        && window[ _selector.attr('selectallchanged' ) ]
                        && ( _cb = window[ _selector.attr('selectallchanged' ) ] )
                        ;
                return _cb;
            }

        , data:
            function( _selector, _setter ){
                typeof _setter != 'undefined' && ( _selector.data('SelectData', _setter ) );
                return _selector.data( 'SelectData' );
            }

        /**
         * 判断下拉框的option里是否有给定的值
         * @param   {selector}  _select
         * @param   {string}    _val    要查找的值
         */
        , hasVal: 
            function ( _selector, _val ){
                var _r = false, _val = _val.toString();
                _selector.find('option').each( function(){
                    var _tmp = $(this);
                    if( _tmp.val() == _val ){
                        _r = true;
                        return false;
                    }
                });
                return _r;
            }

        , selectItemDataFilter:
            function( _selector ){
                var _r;
                _selector 
                    && _selector.is( '[selectItemDataFilter]' )
                    && ( _r = window[ _selector.attr( 'selectItemDataFilter' ) ] );
                return _r;
            }
    };
    
    function View( _model, _control ){
        this._model = _model;
        this._control = _control;

        this._init();
    }
    
    View.prototype = {
        _init:
            function() {
                return this;
            }

        , update:
            function( _selector, _data, _pid ){
                var _p = this, _default = this._model.selectvalue( _selector );
                _data = this._model.dataFilter( _selector, _data );

                _p._model.selectItemDataFilter( _selector ) 
                    && ( _data = _p._model.selectItemDataFilter( _selector )( _selector, _data, _pid ) );

                this._model.data( _selector, _data );

                this._control.trigger( 'SelectItemBeforeUpdate', [ _selector, _data ] );
                AutoSelect.removeItems( _selector );

                if( !_data.length ){
                    if( this._model.hideempty( _selector ) ){
                        this.hideItem( _selector );
                        this._control.trigger( 'SelectItemUpdated', [ _selector, _data ] );
                        return;
                    }
                }else{
                    !_selector.is(':visible') && _selector.show();
                }

                var _html = [], _tmp, _selected;
                for( var i = 0, j = _data.length; i < j; i++ ){
                    _tmp = _data[i];
                    _html.push( JC.f.printf( '<option value="{0}" {2}>{1}</option>', _tmp[0], _tmp[1], _selected ) );
                }
                $( _html.join('') ).appendTo( _selector );

                if( this._model.hasVal( _selector, _default ) ){
                    _selector.val( _default );
                }
                this._control.trigger( 'SelectItemUpdated', [ _selector, _data ] );
            }

        , hideItem:
            function( _selector ){
                _selector.hide();
                while( _selector = this._model.next( _selector ) ){
                    _selector.hide();
                }
            }
        
    };
    /**
     * 初始化之事的事件
     * @event   SelectBeforeInited 
     */
    /**
     * 初始化后的事件
     * @event   SelectInited 
     */
    /**
     * 响应每个 select 的 change 事件
     * @event   SelectChange 
     */
    /**
     * 最后一个 select change 后的事件
     * @event   SelectAllChanged
     */
    /**
     * select 更新数据之前触发的事件
     * @event   SelectItemBeforeUpdate
     */
    /**
     * select 更新数据之后触发的事件
     * @event   SelectItemUpdated
     */
    /**
     * 页面加载完毕时, 延时进行自动化, 延时可以避免来自其他逻辑的干扰
     */
    $(document).ready( function( _evt ){
        setTimeout( function(){ AutoSelect( document.body ); }, 200 );
    });

    return JC.AutoSelect;
});}( typeof define === 'function' && define.amd ? define : 
        function ( _name, _require, _cb) { 
            typeof _name == 'function' && ( _cb = _name );
            typeof _require == 'function' && ( _cb = _require ); 
            _cb && _cb(); 
        }
        , window
    )
);
