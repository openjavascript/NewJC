//TODO: 添加文件大小判断
(function(define, _win) { 'use strict'; define( 'JC.AjaxUpload', [ 'JC.BaseMVC', 'JC.Panel' ], function(){
    /**
     * Ajax 文件上传
     * <p><b>require</b>: 
     *      <a href='JC.BaseMVC.html'>JC.BaseMVC</a>
     *      , <a href='JC.Panel.html'>JC.Panel</a>
     * </p>
     * <p>
     *      <a href='https://github.com/openjavascript/jquerycomps' target='_blank'>JC Project Site</a>
     *      | <a href='http://jc2.openjavascript.org/docs_api/classes/JC.AjaxUpload.html' target='_blank'>API docs</a>
     *      | <a href='../../modules/JC.AjaxUpload/0.1/_demo' target='_blank'>demo link</a>
     * </p>
     * <h2>可用的 html attribute</h2>
     * <dl>
     *      <dt>cauStyle = string, default = g1</dt>
     *      <dd>
     *          按钮显示的样式, <a href='../../modules/JC.AjaxUpload/0.1/res/default/style.html' target='_blank'>可选样式</a>:
     *          <dl>
     *              <dt>绿色按钮</dt>
     *              <dd>g1, g2, g3</dd>
     *
     *              <dt>白色/银色按钮</dt>
     *              <dd>w1, w2, w3</dd>
     *          </dl>
     *      </dd>
     *
     *      <dt>cauButtonText = string, default = 上传文件</dt>
     *      <dd>定义上传按钮的显示文本</dd>
     *
     *      <dt>cauHideButton = bool, default = false( no label ), true( has label )</dt>
     *      <dd>
     *          上传完成后是否隐藏上传按钮
     *      </dd>
     *
     *      <dt>cauButtonAfter= bool</dt>
     *      <dd>是否把上传按钮放在后面</dd>
     *
     *      <dt>cauUrl = url, require</dt>
     *      <dd>上传文件的接口地址
     *          <br />如果 url 带有参数 callback, 返回数据将以 jsonp 方式处理
     *      </dd>
     *
     *      <dt>cauJSONPName = function name</dt>
     *      <dd>显式声明上传后返回数据的 jsonp 回调名
     *          <h3>jsonp 返回数据示例:</h3>
url: ?callback=callback
<br /> data: 
&lt;script>
    window.parent && window.parent.callback && window.parent.callback( {"errorno":0,"errmsg":"","data":{"name":"test.jpg","url":".\/data\/images\/test.jpg"}} );
&lt;/script>
     *      </dd>
     *
     *      <dt>cauFileExt = file ext, optional</dt>
     *      <dd>允许上传的文件扩展名, 例: ".jpg, .jpeg, .png, .gif"</dd>
     *
     *      <dt>cauFileSize = [ KB | MB | GB ], default = 1024 MB</dt>
     *      <dd>上传文件大小限制</dd>
     *
     *      <dt>cauFileName = string, default = file</dt>
     *      <dd>上传文件的 name 属性</dd>
     *
     *      <dt>cauValueKey = string, default = url</dt>
     *      <dd>返回数据用于赋值给 hidden/textbox 的字段</dd>
     *
     *      <dt>cauLabelKey = string, default = name</dt>
     *      <dd>返回数据用于显示的字段</dd>
     *
     *      <dt>cauSaveLabelSelector = selector</dt>
     *      <dd>指定保存 cauLabelKey 值的 selector</dd>
     *
     *      <dt>cauStatusLabel = selector, optional</dt>
     *      <dd>开始上传时, 用于显示状态的 selector</dd>
     *
     *      <dt>cauDisplayLabel = selector, optional</dt>
     *      <dd>上传完毕后, 用于显示文件名的 selector</dd>
     *
     *      <dt>cauUploadDoneCallback = function, optional</dt>
     *      <dd>
     *          文件上传完毕时, 触发的回调
<pre>function cauUploadDoneCallback( _json, _selector, _frame ){
    var _ins = this;
    //alert( _json ); //object object
}</pre>
     *      </dd>
     *
     *      <dt>cauUploadErrorCallback = function, optional</dt>
     *      <dd>
     *          文件上传完毕时, 发生错误触发的回调
<pre>function cauUploadErrorCallback( _json, _selector, _frame ){
    var _ins = this;
    //alert( _json ); //object object
}</pre>
     *      </dd>
     *
     *      <dt>cauDisplayLabelCallback = function, optional, return = string</dt>
     *      <dd>
     *          自定义上传完毕后显示的内容 模板
<pre>function cauDisplayLabelCallback( _json, _label, _value ){
    var _selector = this
        , _label = JC.f.printf( '&lt;a href="{0}" class="green js_auLink" target="_blank">{1}&lt;/a>{2}'
                        , _value, _label
                        ,  '&nbsp;&lt;a href="javascript:" class="btn btn-cls2 js_cleanCauData">&lt;/a>&nbsp;&nbsp;'
                    )
        ;
    return _label;
}</pre>
     *      </dd>
     *
     *      <dt>cauViewFileBox = selector</dt>
     *      <dd>用于显示文件链接的容器</dd>
     *
     *      <dt>cauViewFileBoxItemTpl = selector</dt>
     *      <dd>cauViewFileBox 的脚本模板</dd>
     * </dl>
     * @namespace JC
     * @class AjaxUpload
     * @extends JC.BaseMVC
     * @constructor
     * @param   {selector}   _selector   
     * @version dev 0.1
     * @author  qiushaowei   <suches@btbtd.org> | 75 team
     * @date    2013-09-26
     * @example
            <div>
                <input type="hidden" class="js_compAjaxUpload" value=""
                    cauStyle="w1"
                    cauButtonText="上传资质文件"
                    cauUrl="/ignore/JQueryComps_dev/comps/AjaxUpload/_demo/data/handler.php"
                    cauFileExt=".jpg, .jpeg, .png, .gif"
                    cauFileName="file"
                    cauLabelKey="name"
                    cauValueKey="url"
                    cauStatusLabel="/label.js_statusLabel"
                    cauDisplayLabel="/label.js_fileLabel"
                    />
                <label class="js_fileLabel" style="display:none"></label>
                <label class="js_statusLabel" style="display:none">文件上传中, 请稍候...</label>
            </div>

            POST 数据:
                ------WebKitFormBoundaryb1Xd1FMBhVgBoEKD
                Content-Disposition: form-data; name="file"; filename="disk.jpg"
                Content-Type: image/jpeg

            返回数据:
                {
                    "errorno": 0, 
                    "data":
                    {
                        "url": "/ignore/JQueryComps_dev/comps/AjaxUpload/_demo/data/images/test.jpg", 
                        "name": "test.jpg"
                    }, 
                    "errmsg": ""
                }
     */
    JC.AjaxUpload = AjaxUpload;
    JC.f.addAutoInit && JC.f.addAutoInit( AjaxUpload );

    function AjaxUpload( _selector ){
        if( AjaxUpload.getInstance( _selector ) ) return AjaxUpload.getInstance( _selector );
        if( !_selector.hasClass('js_compAjaxUpload' ) ) return AjaxUpload.init( _selector );
        AjaxUpload.getInstance( _selector, this );
        //JC.log( AjaxUpload.Model._instanceName );

        this._model = new AjaxUpload.Model( _selector );
        this._view = new AjaxUpload.View( this._model );

        JC.log( 'AjaxUpload init', new Date().getTime() );

        this._init();
    }
    /**
     * 获取或设置 AjaxUpload 的实例
     * @method  getInstance
     * @param   {selector}      _selector
     * @return  {AjaxUploadInstance}
     * @static
     */
    AjaxUpload.getInstance =
        function( _selector, _setter ){
            if( typeof _selector == 'string' && !/</.test( _selector ) ) 
                    _selector = $(_selector);
            if( !(_selector && _selector.length ) || ( typeof _selector == 'string' ) ) return;
            typeof _setter != 'undefined' && _selector.data( AjaxUpload.Model._instanceName, _setter );

            return _selector.data( AjaxUpload.Model._instanceName );
        };
    /**
     * 初始化可识别的组件
     * @method  init
     * @param   {selector}      _selector
     * @return  {array}         instance array
     * @static
     */
    AjaxUpload.init =
        function( _selector ){
            var _r = [];
            _selector = $( _selector || document );
            if( _selector.hasClass( 'js_compAjaxUpload' ) ){
                    _r.push( new AjaxUpload( _selector ) );
            }else{
                _selector.find('input.js_compAjaxUpload, button.js_compAjaxUpload').each( function(){
                    _r.push( new AjaxUpload( $(this) ) );
                });
            }
            return _r;
        };
    /**
     * frame 文件名
     * @property    frameFileName
     * @type        string
     * @default     "default.html"
     * @static
     */
    AjaxUpload.frameFileName = 'default.html';
    /**
     * 载入 frame 文件时, 是否添加随机数防止缓存
     * @property    randomFrame
     * @type        bool
     * @default     false
     * @static
     */
    AjaxUpload.randomFrame = false;
    /**
     * frame 文件夹位于库的位置
     * @property    _FRAME_DIR
     * @type        string
     * @default     "comps/AjaxUpload/frame/"
     * @static
     * @private
     */
    AjaxUpload._FRAME_DIR = "modules/JC.AjaxUpload/0.1/frame/";
    define && !define.amd && ( AjaxUpload._FRAME_DIR = 'comps/AjaxUpload/frame/' );
    /**
     * 初始化 frame 时递增的统计变量
     * @property    _INS_COUNT
     * @type        int
     * @default     1
     * @protected
     * @static
     */
    AjaxUpload._INS_COUNT = 1;

    BaseMVC.build( AjaxUpload );

    JC.f.extendObject( AjaxUpload.prototype, {
        _beforeInit:
            function(){
                var _p = this;
                //JC.log( 'AjaxUpload _beforeInit', new Date().getTime() );
                
            }
        , _initHanlderEvent:
            function(){
                var _p = this, _fileBox = _p._model.cauViewFileBox();
                if( _fileBox && _fileBox.length ){
                    _fileBox.delegate( '.js_clearAjaxUpload', 'click', function(){
                        _p.clear();
                    });
                }
                /**
                 * iframe 加载完毕后触发的事件, 执行初始化操作
                 */
                _p.on( 'FrameLoad', function(_evt){
                    var _w = _p._model.frame().prop( 'contentWindow' );
                    if( !( _w && _w.initPage ) ) return;
                    _w.initPage( _p, _p._model );

                    if( _p._model.INITED ) return;
                    _p._model.INITED = true;
                    if( _p._model.cauDefaultHide() ){
                        setTimeout( function(){
                            _p._model.frame().hide();
                            _p._model.selector().hide();
                        }, 1);
                    }

                     _p._model.swfu( _w );
                    _p._model.uploadReady( true );
                    _p.trigger( 'UploadReady' );

                });
                /**
                 * 文件大小错误
                 */
                _p.on( 'ERR_FILE_SIZE', function( _evt, _flPath ){
                    _p._view.errFileSize( _flPath );
                    _p._view.updateChange();
                });
                /**
                 * 文件扩展名错误
                 */
                _p.on( 'ERR_FILE_EXT', function( _evt, _flPath ){
                    _p._view.errFileExt( _flPath );
                    _p._view.updateChange();
                });
                /**
                 * 上传前触发的事件
                 */
                _p.on( 'BeforeUpload', function( _d ){
                    _p._view.beforeUpload();
                    _p._model.cauBeforeUploadCallback()
                    && _p._model.cauBeforeUploadCallback().call(
                        _p
                        , _d
                        , _p._model.selector()
                        , _p._model.frame() 
                    );
                });
                /**
                 * 上传完毕触发的事件
                 */
                _p.on( 'UploadDone', function( _evt, _d, _ignore ){
                    if( _ignore ) return;
                    //JC.log( _d );
                    var _err = false, _od = _d;
                    try{ 
                        typeof _d == 'string' && ( _d = $.parseJSON( _d ) );
                    } catch( ex ){ _d = {}; _err = true; }
                    //_err = true;
                    //_d.errorno = 1;
                    //_d.errmsg = "test error"
                    if( _err ){
                        _p._view.errFatalError( _od );
                        _p._view.updateChange();

                        _p._model.cauUploadErrorCallback()
                            && _p._model.cauUploadErrorCallback().call(    
                                _p
                                , _d
                                , _p._model.selector()
                                , _p._model.frame() 
                            );
                    }else{
                        if( _d.errorno ){
                            _p._view.errUpload( _d );
                            _p._view.updateChange();
                        }else{
                            _p._view.updateChange( _d );
                        }
                        _p._model.cauUploadDoneCallback()
                            && _p._model.cauUploadDoneCallback().call(
                                _p
                                , _d
                                , _p._model.selector()
                                , _p._model.frame() 
                            );
                    }
                });
                /**
                 * frame 的按钮样式改变后触发的事件
                 * 需要更新 frame 的宽高
                 */
                _p.on( 'AUUpdateLayout', function( _evt, _width, _height, _btn ){
                    _p._view.updateLayout( _width, _height, _btn );
                });

                _p.on( 'init', function(){
                    _p._model.loadSWF( _p._model.getParams() );
                });

                _p.on( 'disable', function(){
                    if( !_p._model.uploadReady() ){
                        _p._model.beforeReadyQueue( function(){ _p._view.disable(); } );
                    }
                    _p._view.disable();
                });

                _p.on( 'enable', function(){
                    if( !_p._model.uploadReady() ){
                        _p._model.beforeReadyQueue( function(){ _p._view.enable(); } );
                    }
                    _p._view.enable();
                });

                _p.on( 'UploadReady', function(){
                    var _queue = _p._model.beforeReadyQueue();
                    setTimeout( function(){
                        $.each( _queue, function( _ix, _item ){
                            _item();
                        });
                    }, 10 );
                });

            }
        , _inited:
            function(){
                var _p = this;
                //JC.log( 'AjaxUpload _inited', new Date().getTime() );
                _p._view.loadFrame();
                AjaxUpload.getInstance( _p._model.frame(), _p );

                _p.trigger( 'inited' );
            }
        /**
         * 手动更新数据
         * @method  update
         * @param   {object}    _d
         * @return  AjaxUploadInstance
         * @example
                JC.AjaxUpload.getInstance( _selector ).update( {
                    "errorno": 0, 
                    "data":
                    {
                        "url": "/ignore/JQueryComps_dev/comps/AjaxUpload/_demo/data/images/test.jpg", 
                        "name": "test.jpg"
                    }, 
                    "errmsg": ""
                });
         */
        /**
         * 禁用上传按钮
         * @method disable
         */
        , disable: function(){ this.trigger( 'disable' ); return this; }
        /**
         * 启用上传按钮
         * @method enable
         */
        , enable: function(){ this.trigger( 'enable' ); return this; }
        , update:
            function( _d ){
                var _p = this;
                $( _p._view ).trigger('UpdateDefaultStatus')
                _d && _p.trigger('UploadDone', [ _d ] );
                return this;
            }

        , clear: 
            function(){
                var _p = this;
                $( _p._view ).trigger('UpdateDefaultStatus')
                return this;
            }
    });

    AjaxUpload.Model._instanceName = 'AjaxUpload';
    JC.f.extendObject( AjaxUpload.Model.prototype, {
        init:
            function(){
                //JC.log( 'AjaxUpload.Model.init:', new Date().getTime() );
            }

        , cauStyle: function(){ return this.attrProp('cauStyle'); }
        , cauButtonText: function(){ return this.attrProp('cauButtonText'); }

        , cauUrl: function(){ return this.attrProp( 'cauUrl' ); }

        , cauFileExt: function(){ return this.stringProp( 'cauFileExt' ); }

        , cauFileSize: function(){ return this.stringProp( 'cauFileSize' ) || '1024 MB'; }
        
        , cauFileName: 
            function(){ 
                return this.attrProp('cauFileName') || this.attrProp('name'); 
            }

        , cauLabelKey: function(){ return this.attrProp( 'cauLabelKey' ) || 'name'; }
        , cauValueKey: function(){ return this.attrProp( 'cauValueKey' ) || 'url'; }
        , cauSaveLabelSelector:
            function(){
                var _r = this.selectorProp( 'cauSaveLabelSelector' );
                return _r;
            }

        , cauStatusLabel: function(){ return this.selectorProp( 'cauStatusLabel' ); }
        , cauDisplayLabel: function(){ return this.selectorProp( 'cauDisplayLabel' ); }
        , cauDisplayLabelCallback: function(){ return this.callbackProp( 'cauDisplayLabelCallback' ); }

        , cauHideButton: 
            function(){
                var _r = false;
                this.is( '[cauHideButton]' ) 
                    && ( _r = this.boolProp( this.attrProp('cauHideButton') ) );
                return _r;
            }

        , cauDefaultHide:
            function(){
                return this.boolProp( 'cauDefaultHide' );
            }

        , cauBeforeUploadCallback:
            function(){
                return this.callbackProp( 'cauBeforeUploadCallback' );
            }
        
        , cauUploadDoneCallback:
            function(){
                return this.callbackProp( 'cauUploadDoneCallback' );
            }

        , cauUploadErrorCallback:
            function(){
                return this.callbackProp( 'cauUploadErrorCallback' );
            }

        , cauJSONPName:
            function(){
                var _r = AjaxUpload.JSONPName;

                _r = JC.f.getUrlParam( this.cauUrl(), 'callback' ) || _r;
                _r = this.attrProp( 'cauJSONPName' ) || _r;

                return _r;
            }

        , framePath:
            function(){
                var _fl = this.attrProp('cauFrameFileName') || AjaxUpload.frameFileName
                    , _r = JC.f.printf( '{0}{1}{2}', JC.PATH, AjaxUpload._FRAME_DIR, _fl )
                    ;
                this.randomFrame() 
                    && ( _r = JC.f.addUrlParams( _r, { 'rnd': new Date().getTime() } ) )
                    ;
                return _r;
            }
        , cauButtonAfter: function(){ return this.boolProp( 'cauButtonAfter' ); }
        , randomFrame:
            function(){
                var _r = AjaxUpload.randomFrame;
                this.selector().is( '[cauRandomFrame]' )
                    && ( _r = this.boolProp( 'cauRandomFrame') )
                    ;
                return _r;
            }

        , frame:
            function(){
                if( !this._iframe ){
                    var _tpl = AjaxUpload.frameTpl;
                    if( this.selector().is('[cauFrameScriptTpl]') ){
                        _tpl = JC.f.scriptContent( JC.f.parentSelector( 
                                                            this.selector()
                                                            , this.selector().attr('cauFrameScriptTpl') 
                                                            ) 
                                );
                    }
                    this._iframe = $( AjaxUpload.frameTpl );
                }
                return this._iframe;
            }

        , cauCancelCallback: function(){ return this.callbackProp( 'cauCancelCallback' ); }

        , uploadReady:
            function( _setter ){
                typeof _setter != 'undefined' && ( this._uploadReady = _setter );
                return this._uploadReady;
            }

        , beforeReadyQueue:
            function( _item ){
                !this._beforeReadyQueue && ( this._beforeReadyQueue = [] );
                _item && this._beforeReadyQueue.push( _item );
                return this._beforeReadyQueue;
            }

        , cauButtonAutoStatus:
            function(){
                var _r = true;
                this.is( '[cauButtonAutoStatus]' ) && ( _r = this.boolProp( 'cauButtonAutoStatus' ) );
                return _r;
            }

        , swfu:
            function( _setter ){
                typeof _setter != 'undefined' && ( this._swfu = _setter );
                return this._swfu;
            }

            , cauViewFileBox: function(){ return this.selectorProp( 'cauViewFileBox' ); }

            , cauViewFileBoxItemTpl: 
                function(){
                    var _r = [ '<a href="javascript:;" data-name="{0}" data-url="{1}" class="js_clearAjaxUpload">清除</a>'
                         , '&nbsp;<a href="{1}" target="_blank" data-name="{0}" data-url="{1}" class="js_viewAjaxUpload">查看</a>' ].join('')
                         , _tmp
                         ;

                    this.is( '[cauViewFileBoxItemTpl]' )
                        && ( _tmp = this.selectorProp( 'cauViewFileBoxItemTpl' ) ) 
                        && _tmp.length 
                        && ( _r = JC.f.scriptContent( _tmp ) )
                        ;

                    return _r;
                }
    });

    JC.f.extendObject( AjaxUpload.View.prototype, {
        init:
            function(){
                //JC.log( 'AjaxUpload.View.init:', new Date().getTime() );
                var _p = this;

                $( _p ).on( 'update_viewFileBox', function( _evt, _name, _url ){
                    var _box = _p._model.cauViewFileBox(), _itemTpl;
                    if( !( _box && _box.length ) ) return;
                    _itemTpl = _p._model.cauViewFileBoxItemTpl();
                    _itemTpl = JC.f.printf( _itemTpl, _name, _url );
                    _box.html( _itemTpl );
                });

                $( _p ).on( 'clear_viewFileBox', function(){
                    var _box = _p._model.cauViewFileBox();
                    if( !( _box && _box.length ) ) return;
                    _box.html( '' );
                });

                /**
                 * 恢复默认状态
                 */
                $( _p ).on( 'UpdateDefaultStatus', function( _evt ){
                    var _statusLabel = _p._model.cauStatusLabel()
                        , _displayLabel = _p._model.cauDisplayLabel()
                    ;
                    
                    _p.updateChange();
                    _p._model.frame().show();

                    _statusLabel && _statusLabel.length && _statusLabel.hide();
                    _displayLabel && _displayLabel.length && _displayLabel.hide();

                    ( _p._model.selector().attr('type') || '' ).toLowerCase() != 'hidden'
                        && _p._model.selector().show()
                        ;
                    $( _p ).trigger( 'clear_viewFileBox' );
                    _p.trigger( 'UploadComplete' );
                });

                $( _p ).on( 'CAUUpdate', function( _evt, _d ){
                    var _displayLabel = _p._model.cauDisplayLabel()
                        , _label = '', _value = ''
                        ;

                    if( typeof _d != 'undefined' ){
                        _value = _d.data[ _p._model.cauValueKey() ];
                        _label = _d.data[ _p._model.cauLabelKey() ];

                        _p._model.selector().val( _value )
                        _p._model.cauSaveLabelSelector()
                            && _p._model.cauSaveLabelSelector().val( _label );
                    }

                    if( _p._model.cauDisplayLabelCallback() ){
                        _label = _p._model.cauDisplayLabelCallback().call( _p._model.selector(), _d, _label, _value );
                    }else{
                        _label = JC.f.printf( '<a href="{0}" class="green js_auLink" target="_blank">{1}</a>', _value, _label);
                    }
                    _displayLabel 
                        && _displayLabel.length
                        && _displayLabel.html( _label ) 
                        ;
                });
            }

        , loadFrame:
            function(){
                var _p = this, _path = _p._model.framePath()
                    , _frame = _p._model.frame()
                    ;

                //JC.log( _path );

                _frame.attr( 'src', _path );
                _frame.on( 'load', function(){
                    _p.trigger( 'FrameLoad' );
                });

                //_p._model.selector().hide();
                //return;

                _p._model.cauButtonAfter() 
                    ? _p.selector().after( _frame )
                    : _p.selector().before( _frame )
                    ;
            }

        , beforeUpload:
            function(){
                var _p = this, _statusLabel = _p._model.cauStatusLabel();
                //JC.log( 'AjaxUpload view#beforeUpload', new Date().getTime() );

                this.updateChange( null, true );

                if( _statusLabel && _statusLabel.length ){
                    _p._model.selector().hide();
                    _p._model.frame().hide();
                    _statusLabel.show();
                }
            }

        , updateChange:
            function( _d, _noLabelAction ){
                var _p = this
                    , _statusLabel = _p._model.cauStatusLabel()
                    , _displayLabel = _p._model.cauDisplayLabel()
                    , _name, _url
                    ;
                //JC.log( 'AjaxUpload view#updateChange', new Date().getTime() );

                if( _statusLabel && _statusLabel.length && !_noLabelAction ){
                    _p._model.selector().show();
                    _p._model.frame().show();
                    _statusLabel.hide();
                }
                if( _displayLabel && _displayLabel.length ){
                    _displayLabel.html( '' );
                }

                _p._model.selector().val( '' );

                _p._model.cauSaveLabelSelector()
                    && _p._model.cauSaveLabelSelector().val( '' );

                if( _d && ( 'errorno' in _d ) && !_d.errorno ){
                    $(_p).trigger( 'CAUUpdate', [ _d ] );

                    _name = _d.data[ _p._model.cauLabelKey() ];
                    _url = _d.data[ _p._model.cauValueKey() ];

                    _p._model.selector().val() 
                        && _p._model.selector().is(':visible')
                        && _p._model.selector().prop('type').toLowerCase() == 'text'
                        && _p._model.selector().trigger('blur')
                        ;
                    
                    $( _p ).trigger( 'update_viewFileBox', [ _name, _url ] );

                    if( _displayLabel && _displayLabel.length ){
                        _p._model.selector().hide();
                        if( _p._model.is('[cauHideButton]') ){
                            _p._model.cauHideButton() && _p._model.frame().hide();
                        }else{
                            _p._model.frame().hide();
                        }
                        _displayLabel.show();
                        return;
                    }
                }
            }

        , updateLayout:
            function( _width, _height, _btn ){
                if( !( _width && _height ) ) return;
                var _p = this;
                //JC.log( 'AjaxUpload @event UpdateLayout', new Date().getTime(), _width, _height );
                _p._model.frame().css({
                    'width': _width + 'px'
                    , 'height': _height + 'px'
                });
            }

        , errUpload:
            function( _d ){
                var _p = this
                    , _beforeErrorCb = _p._model.callbackProp( 'cauBeforeUploadErrCallback' )
                    , _cb = _p._model.callbackProp( 'cauUploadErrCallback' )
                    ;

                _beforeErrorCb && _beforeErrorCb.call( _p._model.selector(), _d );
                if( _cb ){
                    _cb.call( _p._model.selector(), _d, _p._model.frame() );
                }else{
                    var _msg = _d && _d.errmsg ? _d.errmsg : '上传失败, 请重试!';
                    JC.Dialog 
                        ? JC.Dialog.alert( _msg, 1 )
                        : alert( _msg )
                        ;
                }
            }

        , errFileExt: 
            function( _flPath ){
                var _p = this, _cb = _p._model.callbackProp( 'cauFileExtErrCallback' );
                if( _cb ){
                    _cb.call( _p._model.selector(), _p._model.cauFileExt(), _flPath, _p._model.frame() );
                }else{
                    var _msg = JC.f.printf( '类型错误, 允许上传的文件类型: {0} <p class="auExtErr" style="color:red">{1}</p>'
                                        , _p._model.cauFileExt(), _flPath );
                    JC.Dialog 
                        ? JC.Dialog.alert( _msg, 1 )
                        : alert( _msg )
                        ;
                }
            }
        
        , errFileSize: 
            function( _flPath ){
	            var _p = this, _cb = _p._model.callbackProp( 'cauFileExtErrCallback' );
	            if( _cb ){
	                _cb.call( _p._model.selector(), _p._model.cauFileSize(), _flPath, _p._model.frame() );
	            }else{
	                var _msg = JC.f.printf( '文件大小错误, 允许上传的文件大小为: {0} <p class="auExtErr" style="color:red">{1}</p>'
	                                    , _p._model.cauFileSize(), _flPath );
	                JC.Dialog 
	                    ? JC.Dialog.alert( _msg, 1 )
	                    : alert( _msg )
	                    ;
	            }

            }

        , errFatalError: 
            function( _d ){
                var _p = this, _cb = _p._model.callbackProp( 'cauFatalErrorCallback' );
                if( _cb ){
                    _cb.call( _p._model.selector(), _d, _p._model.frame() );
                }else{
                    var _msg = JC.f.printf( '服务端错误, 无法解析返回数据: <p class="auExtErr" style="color:red">{0}</p>'
                                        , _d );
                    JC.Dialog 
                        ? JC.Dialog.alert( _msg, 1 )
                        : alert( _msg )
                        ;
                }
            }
 
        , disable:
            function(){
                var _p = this, _swfu = _p._model.swfu();
                _swfu && ( _swfu.setButtonDisabled( true ) );
            }
 
        , enable:
            function(){
                var _p = this, _swfu = _p._model.swfu();
                _swfu && ( _swfu.setButtonDisabled( false ) );
            }

    });

    $.event.special.AjaxUploadShowEvent = {
        show: 
            function(o) {
                if (o.handler) {
                    o.handler()
                }
            }
    };

    AjaxUpload.frameTpl =
        JC.f.printf(
                '<iframe src="about:blank" frameborder="0" class="AUIframe" style="{0}"></iframe>'
                , 'width: 84px; height: 24px;cursor: pointer; vertical-align: middle;'
              );
            ;

    $(document).ready( function(){
        AjaxUpload.autoInit && AjaxUpload.init();
    });

    return JC.AjaxUpload;
});}( typeof define === 'function' && define.amd ? define : 
        function ( _name, _require, _cb) { 
            typeof _name == 'function' && ( _cb = _name );
            typeof _require == 'function' && ( _cb = _require ); 
            _cb && _cb(); 
        }
        , window
    )
);
