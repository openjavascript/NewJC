;(function(define, _win) { 'use strict'; define( 'Bizs.DisableLogic', [ 'JC.BaseMVC' ], function(){
/**
 * <h2 style="color:red">这个应用将不再维护, 请使用 <a href='window.Bizs.ChangeLogic.html' style="color:red">Bizs.ChangeLogic</a> </h2>
 * <h2>Form Control禁用启用逻辑</h2>
 * <br/>应用场景</br>
 * <br/>表单操作时, 选择某个 radio 时, 对应的 内容有效,
 * <br/>但选择其他 radio 时, 其他的内容无效
 * <br/>checkbox / select 也可使用( 带change事件的标签 )
 * <p><b>require</b>: 
 *      <a href='JC.BaseMVC.html'>JC.BaseMVC</a>
 * </p>
 * <p><a href='https://github.com/openjavascript/jquerycomps' target='_blank'>JC Project Site</a>
 * | <a href='http://jc2.openjavascript.org/docs_api/classes/window.Bizs.DisableLogic.html' target='_blank'>API docs</a>
 * | <a href='../../modules/Bizs.DisableLogic/0.1/_demo' target='_blank'>demo link</a></p>
 *
 * div 需要 添加 class="js_bizsDisableLogic"
 *
 * <h2>box 的 HTML 属性</h2>
 * <dl>
 *      <dt>dltrigger</dt>
 *      <dd>触发禁用/起用的control</dd>
 *
 *      <dt>dltarget</dt>
 *      <dd>需要禁用/起用的control</dd>
 *
 *      <dt>dlhidetarget</dt>
 *      <dd>需要根据禁用起用隐藏/可见的标签</dd>
 *
 *      <dt>dldonecallback = function</dt>
 *      <dd>
 *      启用/禁用后会触发的回调, <b>window 变量域</b>
<pre>function dldonecallback( _triggerItem, _boxItem ){
    var _ins = this;
    JC.log( 'dldonecallback', new Date().getTime() );
}</pre>
 *      </dd>
 *
 *      <dt>dlenablecallback = function</dt>
 *      <dd>
 *      启用后的回调, <b>window 变量域</b>
<pre>function dlenablecallback( _triggerItem, _boxItem ){
    var _ins = this;
    JC.log( 'dlenablecallback', new Date().getTime() );
}</pre>
 *      </dd>
 *
 *      <dt>dldisablecallback = function</dt>
 *      <dd>
 *      禁用后的回调, <b>window 变量域</b>
<pre>function dldisablecallback( _triggerItem, _boxItem ){
    var _ins = this;
    JC.log( 'dldisablecallback', new Date().getTime() );
}</pre>
 *      </dd>
 * </dl>
 *
 * <h2>trigger 的 HTML 属性</h2>
 * <dl>
 *      <dt>dldisable = bool, default = false</dt>
 *      <dd>
 *          指定 dltarget 是否置为无效
 *          <br />还可以根据这个属性 指定 dlhidetarget 是否显示
 *      </dd>
 *
 *      <dt>dldisplay = bool</dt>
 *      <dd>指定 dlhidetarget 是否显示</dd>
 *
 *      <dt>dlhidetargetsub = selector</dt>
 *      <dd>根据 trigger 的 checked 状态 显示或者隐藏 dlhidetargetsub node</dd>
 * </dl>
 *
 * <h2>hide target 的 HTML 属性</h2>
 * <dl>
 *      <dt>dlhidetoggle = bool, false</dt>
 *      <dd>显示或显示的时候, 是否与他项相反</dd>
 *
 *      <dt>dlDisableToggle = bool, default = false</dt>
 *      <dd>disabled 的时候, 是否与他项相反</dd>
 * </dl>
 *
 * @namespace   window.Bizs
 * @class       DisableLogic
 * @constructor
 * @version dev 0.1 2013-09-04
 * @author  qiushaowei   <suches@btbtd.org> | 75 Team
 *
 * @example
        <div class="js_bizsDisableLogic"
            dltrigger="/input[type=radio]"
            dltarget="/input.js_disableItem"
            >
            <label>
                <input type="radio" name="discount" checked  
                dldisable="true"
                />自本协议签订之日起10日内生效
            </label> <br>
            <label>
                <input type="radio" name="discount" 
                dldisable="false"
                />生效时间点
            </label>
            <input type="text" class="ipt js_disableItem" datatype="date" value=""
            /><input type="button" class="UXCCalendar_btn">
        </div>
 */
    window.Bizs.DisableLogic = DisableLogic;
    JC.f.addAutoInit && JC.f.addAutoInit( DisableLogic );

    function DisableLogic( _selector ){
        if( DisableLogic.getInstance( _selector ) ) return DisableLogic.getInstance( _selector );
        DisableLogic.getInstance( _selector, this );

        JC.log( 'Bizs.DisableLogic:', new Date().getTime() );

        this._model = new Model( _selector );
        this._view = new View( this._model );

        this._init();
    }
    
    DisableLogic.prototype = {
        _init:
            function(){
                var _p = this, _tmp;

                _p._initHandlerEvent();

                $( [ _p._view, _p._model ] ).on('BindEvent', function( _evt, _evtName, _cb ){
                    _p.on( _evtName, _cb );
                });

                $([ _p._view, _p._model ] ).on('TriggerEvent', function( _evt, _evtName ){
                    var _data = JC.f.sliceArgs( arguments ).slice( 2 );
                    _p.trigger( _evtName, _data );
                });

                _p._model.init();
                _p._view.init();

                _p._model.dltrigger().on('change', function(_evt){
                    JC.log( 'dltrigger change', new Date().getTime() );
                    _p._view.change( this );
                });

                ( _tmp = _p._model.dltrigger( true ) ) && _tmp.trigger( 'change');

                return _p;
            }    
        , _initHandlerEvent:
            function(){
                var _p = this;

                _p.on( 'DisableItem', function( _evt, _triggerItem ){
                    _p._model.dldisablecallback()
                        && _p._model.dldisablecallback().call( _p, _triggerItem, _p._model.selector() );
                });

                _p.on( 'EnableItem', function( _evt, _triggerItem ){
                    _p._model.dlenablecallback()
                        && _p._model.dlenablecallback().call( _p, _triggerItem, _p._model.selector() );
                });

                _p.on( 'ChangeDone', function( _evt, _triggerItem ){
                    _p._model.dldonecallback()
                        && _p._model.dldonecallback().call( _p, _triggerItem, _p._model.selector() );
                });
            }
        /**
         * 获取 显示 DisableLogic 的触发源选择器, 比如 a 标签
         * @method  selector
         * @return  selector
         */ 
        , selector: function(){ return this._model.selector(); }
        /**
         * 使用 jquery on 绑定事件
         * @method  {string}    on
         * @param   {string}    _evtName
         * @param   {function}  _cb
         * @return  DisableLogicInstance
         */
        , on: function( _evtName, _cb ){ $(this).on(_evtName, _cb ); return this;}
        /**
         * 使用 jquery trigger 绑定事件
         * @method  {string}    trigger
         * @param   {string}    _evtName
         * @return  DisableLogicInstance
         */
        , trigger: function( _evtName, _data ){ $(this).trigger( _evtName, _data ); return this;}
    }
    /**
     * 获取或设置 DisableLogic 的实例
     * @method getInstance
     * @param   {selector}      _selector
     * @static
     * @return  {DisableLogic instance}
     */
    DisableLogic.getInstance =
        function( _selector, _setter ){
            if( typeof _selector == 'string' && !/</.test( _selector ) ) 
                    _selector = $(_selector);
            if( !(_selector && _selector.length ) || ( typeof _selector == 'string' ) ) return;
            typeof _setter != 'undefined' && _selector.data( 'DisableLogicIns', _setter );

            return _selector.data('DisableLogicIns');
        };

    DisableLogic.doneCallback = null;
    DisableLogic.enableCallback = null;
    DisableLogic.disableCallback = null;
    /**
     * 初始化 _selector | document 可识别的 DisableLogic HTML属性
     * @method  init
     * @param   {selector}  _selector, default = document
     * @static
     */
    DisableLogic.init =
        function( _selector ){
            _selector = $( _selector || document );
            _selector.find(
                    [ 
                        'div.js_bizsDisableLogic'
                        , 'dl.js_bizsDisableLogic'
                        , 'table.js_bizsDisableLogic'
                    ].join() 
            ).each( function(){
                new DisableLogic( $(this) );
            });
        };
    
    function Model( _selector ){
        this._selector = _selector;
    }
    
    Model.prototype = {
        init:
            function(){
                return this;
            }

        , selector: function(){ return this._selector; }

        , dltrigger:
            function( _curItem ){
                var _p = this, _r = JC.f.parentSelector( this.selector(), this.selector().attr('dltrigger') ), _tmp;
                if( _curItem ){
                    _r.each( function(){
                        _tmp = $(this);
                        if( _tmp.prop('checked') || _tmp.prop('selected') ){
                            _r = _tmp;
                            return false;
                        }
                    });
                }
                return _r;
            }

        , dltarget:
            function( _triggerItem ){
                var _p = this, _r, _tmp;

                _p.selector().attr('dltarget') 
                    && ( _r = JC.f.parentSelector( _p.selector(), _p.selector().attr('dltarget') ) )
                    ;

                _triggerItem 
                    && ( _triggerItem = $(_triggerItem) ).length 
                    && _triggerItem.attr('dltrigger') 
                    && ( _r = JC.f.parentSelector( _triggerItem, _triggerItem.attr('dltarget') ) )
                    ;
                return _r;
            }

        , dldisable:
            function( _triggerItem ){
                var _r = false;
                _triggerItem 
                    && ( _triggerItem = $( _triggerItem ) ).length
                    && _triggerItem.is( '[dldisable]' )
                    && ( _r = JC.f.parseBool( _triggerItem.attr('dldisable') ) )
                    ;

                if( _triggerItem.prop('nodeName').toLowerCase() == 'input' &&  _triggerItem.attr('type').toLowerCase() == 'checkbox' ){
                    _r = !_triggerItem.prop('checked');
                }
                return _r;
            }

        , dldisplay:
            function( _triggerItem ){
                var _r = false;
                if( !_triggerItem.is('[dldisplay]') ){
                    ( _triggerItem = $( _triggerItem ) ).length
                    && _triggerItem.is( '[dldisable]' )
                    && ( _r = !JC.f.parseBool( _triggerItem.attr('dldisable') ) )
                    ;
                }else{
                    ( _triggerItem = $( _triggerItem ) ).length
                    && _triggerItem.is( '[dldisplay]' )
                    && ( _r = JC.f.parseBool( _triggerItem.attr('dldisplay') ) )
                    ;
                }

                if( _triggerItem.prop('nodeName').toLowerCase() == 'input' &&  _triggerItem.attr('type').toLowerCase() == 'checkbox' ){
                    _r = _triggerItem.prop('checked');
                }

                return _r;
            }

        , dlhidetarget:
            function( _triggerItem ){
                var _p = this, _r, _tmp;

                _p.selector().attr('dlhidetarget') 
                    && ( _r = JC.f.parentSelector( _p.selector(), _p.selector().attr('dlhidetarget') ) )
                    ;

                _triggerItem 
                    && ( _triggerItem = $(_triggerItem) ).length 
                    && _triggerItem.attr('dlhidetarget') 
                    && ( _r = JC.f.parentSelector( _triggerItem, _triggerItem.attr('dlhidetarget') ) )
                    ;
                return _r;
            }

        , dlhidetoggle:
            function( _hideTarget ){
                var _r;
                _hideTarget && _hideTarget.is( '[dlhidetoggle]' ) 
                    && ( _r = JC.f.parseBool( _hideTarget.attr('dlhidetoggle') ) );
                return _r;
            }

        , dlDisableToggle:
            function( _target ){
                var _r;
                _target && _target.is( '[dlDisableToggle]' ) 
                    && ( _r = JC.f.parseBool( _target.attr('dlDisableToggle') ) );
                return _r;
            }

        , dldonecallback:
            function(){
                var _r = DisableLogic.doneCallback, _tmp;

                this.selector() 
                    && ( _tmp = this.selector().attr('dldonecallback') )
                    && ( _tmp = window[ _tmp ] )
                    && ( _r = _tmp )
                    ;

                return _r;
            }

        , dlenablecallback:
            function(){
                var _r = DisableLogic.enableCallback, _tmp;

                this.selector() 
                    && ( _tmp = this.selector().attr('dlenablecallback') )
                    && ( _tmp = window[ _tmp ] )
                    && ( _r = _tmp )
                    ;

                return _r;
            }

        , dldisablecallback:
            function(){
                var _r = DisableLogic.disableCallback, _tmp;

                this.selector() 
                    && ( _tmp = this.selector().attr('dldisablecallback') )
                    && ( _tmp = window[ _tmp ] )
                    && ( _r = _tmp )
                    ;

                return _r;
            }

    };
    
    function View( _model ){
        this._model = _model;
    }
    
    View.prototype = {
        init:
            function() {
                return this;
            }

        , change:
            function( _triggerItem ){
                _triggerItem && ( _triggerItem = $( _triggerItem ) );
                if( !( _triggerItem && _triggerItem.length && _triggerItem.is(':visible') ) ) return;
                var _p = this
                    , _isDisable = _p._model.dldisable( _triggerItem )
                    , _dlTarget = _p._model.dltarget( _triggerItem )
                    , _dlDisplay = _p._model.dldisplay( _triggerItem )
                    , _dlHideTarget = _p._model.dlhidetarget( _triggerItem )
                    ;

                if( _triggerItem.is( '[dlhidetargetsub]' ) ){
                    var _starget = JC.f.parentSelector( _triggerItem, _triggerItem.attr( 'dlhidetargetsub' ) );
                    if( _starget && _starget.length ){
                        if( _triggerItem.prop('checked') ){
                            _starget.show();
                        }else{
                            _starget.hide();
                        }
                    }
                }

                if( _dlTarget && _dlTarget.length ){
                    _dlTarget.each( function(){ 
                        var _sp = $( this );
                        if( _p._model.dlDisableToggle( _sp ) ){
                            _sp.attr('disabled', !_isDisable);
                        }else{
                            _sp.attr('disabled', _isDisable);
                        }
                        JC.Valid && JC.Valid.setValid( _sp );

                        if( _sp.is( '[dlhidetargetsub]' ) ){
                            var _starget = JC.f.parentSelector( _sp, _sp.attr( 'dlhidetargetsub' ) );
                            if( !( _starget && _starget.length ) ) return;
                            if( _isDisable ){
                                _starget.hide();
                            }else{
                                if( _sp.prop('checked') ){
                                    _starget.show();
                                }else{
                                    _starget.hide();
                                }
                            }
                        }
                    });
                }

                if( _dlHideTarget &&  _dlHideTarget.length  ){
                    _dlHideTarget.each( function(){
                        var _display = _p._model.dlhidetoggle( $(this) ) ? !_dlDisplay : _dlDisplay;
                        _display ? $(this).show() : $(this).hide();
                        //JC.log( _display, new Date().getTime() );
                    });
                }

                _isDisable 
                    ? 
                        $( _p ).trigger( 'TriggerEvent', [ 'DisableItem', _triggerItem ] )
                    :
                        $( _p ).trigger( 'TriggerEvent', [ 'EnableItem', _triggerItem ] )
                    ;

                $( _p ).trigger( 'TriggerEvent', [ 'ChangeDone', _triggerItem ] );

                JC.log( 'DisableLogic view change', new Date().getTime(), _isDisable );
            }
    };

    $(document).ready( function(){
        setTimeout( function(){
            DisableLogic.init();
        }, 10);
    });
    
    return Bizs.DisableLogic;
});}( typeof define === 'function' && define.amd ? define : 
        function ( _name, _require, _cb) { 
            typeof _name == 'function' && ( _cb = _name );
            typeof _require == 'function' && ( _cb = _require ); 
            _cb && _cb(); 
        }
        , window
    )
);
