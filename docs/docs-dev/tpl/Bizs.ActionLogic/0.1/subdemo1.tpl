{{extends file="public/simple_demo/base.tpl"}}

{{block name="html_header_css" append}}
<style class="show-css">
@import url( '{{$URL_ROOT}}/modules/JC.Panel/0.2/res/default/style.css' );
</style>
{{/block}}


{{block name="body_header" append}}
{{assign var="url" value=$smarty.server.REQUEST_URI|regex_replace:"/\&type\=[^&]+/":"" scope="global"}}
<div>
    {{$url}}
</div>
{{/block}}


{{block name="body_main"}}

    <div class="codeview-view">
        <div class="codeview-cssview">
    <textArea style="display:none;">
    </textArea>
        </div>
        <div class="codeview-jsview">
            <textArea style="display:none;"></textArea>
        </div>
        <div class="codeview-htmlview">
            <textArea style="display:none;"></textArea>
        </div>
        <div class="codeview-pageview nowview">
            <div class="show-html">

<dl>
{{*<dt>ActionLogic 示例2, 点击跳转</dt>
    <dt>balType = link</dt>
*}}
    <dd>
        <button type="button" 
            class="js_bizsActionLogic"
            balType="link" 
            balUrl="{{$url}}&type=direct1"
        >直接跳转, balUrl</button>
        , <a href="#"
            class="js_bizsActionLogic"
            balType="link" 
            balUrl="{{$url}}&type=direct2"
        >属性跳转 balUrl</a>
        , <a href="{{$url}}&type=direct3"
            class="js_bizsActionLogic"
            balType="link" 
        >href 跳转</a>
    </dd>
    <dd>
        二次确认
        <button type="button" 
            class="js_bizsActionLogic"
            balType="link" 
            balUrl="{{$url}}&type=direct2_1"
            balConfirmMsg="确认要跳转吗?"
        >balUrl</button>
        , <a href="#"
            class="js_bizsActionLogic"
            balType="link" 
            balUrl="{{$url}}&type=direct2_2"
            balConfirmMsg="确认要跳转吗?"
            balConfirmPopupType="dialog.confirm"
        >balUrl</a>
        , <a href="{{$url}}&type=direct2_3"
            class="js_bizsActionLogic"
            balConfirmMsg="确认要跳转吗?"
            balType="link" 
        >default</a>
    </dd>
</dl>
            </div>
        </div>
    </div>

{{/block}}


{{block name="body_footer_js" append}}
<script type="text/javascript" class="show-js">
    JC.debug = true;
    requirejs( [ '{{$URL_ROOT}}/modules/{{$COMP_NAME}}/{{$COMP_VERSION}}/{{$OUTPUT}}', 'Bizs.FormLogic' ], function( {{$NAME}} ){
    });
</script>
{{/block}}
