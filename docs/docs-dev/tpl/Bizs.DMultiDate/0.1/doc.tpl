{{extends file="public/doc/base.tpl"}}

{{block name="html_header_css" append}}
{{*
    <link href='{{$URL_ROOT}}/modules/{{$COMP_NAME}}/{{$COMP_VERSION}}/res/default/style.css' rel='stylesheet' />
*}}
{{/block}}

{{block name="body_main"}}
    {{include file="public/doc/body_main.tpl" htmlAttr=1 }}

    <!-- 外链形式 start -->
    <textArea class="detail-codetpl" type="text/template">
        <link href='{{$URL_ROOT}}/modules/{{$COMP_NAME}}/{{$COMP_VERSION}}/res/default/style.css' rel='stylesheet' />

        <script src="{{$URL_ROOT}}/modules/JC.common/{{$JCCommonLastVersion}}/common.js" ></script>
{{foreach from=$requireComps item=comp}}
        {{if !$comp.hide|default:'' }}
<script src="{{$URL_ROOT}}/modules/{{$comp.name}}/{{$comp.version|default:'0.1'}}/{{$comp.output|default:''}}"></script>
{{/if}}
{{/foreach}}
        <script src="{{$URL_ROOT}}/modules/{{$COMP_NAME}}/{{$COMP_VERSION}}/{{$OUTPUT}}" ></script>
    </textArea>
    <!-- 外链形式 end -->

    <!-- 模块加载 start -->
    <textArea class="detail-codetpl" type="text/template">
        <link href='{{$URL_ROOT}}/modules/{{$COMP_NAME}}/{{$COMP_VERSION}}/res/default/style.css' rel='stylesheet' />

        <script>
            requirejs( [ "{{$COMP_NAME}}" ], function( {{$NAME}} ){
            });
        </script>
    </textArea>
    <!-- 模块加载 end -->

    <!-- HTML属性 start -->
    <textArea class="detail-codetpl" type="text/template">
        mddate = css selector
        声明日期input[type=text][datatype=daterange]的标签
        如果缺省则自动查找子元素.js_multidate

        mdstartdate = css selector
        声明开始日期的隐藏域标签, 默认查找子元素.js_startdate

        mdenddate = css selector
        声明结束日期的隐藏域标签, 默认查找子元素.js_enddate

        mddayrange = num
        声明时间粒度为日时，最长可选取多少天，如果不需要则不声明此属性

        mdweekrange = num
        声明时间粒度为周时，最长可选取多少周，如果不需要则不声明此属性

        mdmonthrange = num
        声明时间粒度为月时，最长可选取多少月，如果不需要则不声明此属性

        mdseasonrange = num
        声明时间粒度为季时，最长可选取多少季，如果不需要则不声明此属性

        mdyearrange = num
        声明时间粒度为年时，最长可选取多少年，如果不需要则不声明此属性

        mdIgnoreUrlFill = bool, default = false
        是否忽略 URL 自动填充
    </textArea>
    <!-- HTML属性 end -->

{{/block}}

{{block name="body_footer_js" append}}
{{/block}}
