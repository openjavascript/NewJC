{{extends file="public/doc/base.tpl"}}

{{block name="html_header_css" append}}
<link href='{{$URL_ROOT}}/modules/{{$COMP_NAME}}/{{$COMP_VERSION}}/res/default/style.css' rel='stylesheet' />

{{/block}}

{{block name="body_main"}}
    {{include file="public/doc/body_main.tpl" htmlAttr=1 dataFormat=1}}

    <!-- 外链形式 start -->
    <textArea class="detail-codetpl" type="text/template">
        <link href='{{$URL_ROOT}}/modules/{{$COMP_NAME}}/{{$COMP_VERSION}}/res/default/style.css' rel='stylesheet' />

    <textArea class="detail-codetpl" type="text/template">
        <link href='{{$URL_ROOT}}/modules/{{$COMP_NAME}}/{{$COMP_VERSION}}/res/default/style.css' rel='stylesheet' />

        <script src="{{$URL_ROOT}}/modules/JC.common/{{$JCCommonLastVersion}}/common.js"></script>
{{foreach from=$requireComps item=comp}}
        {{if !$comp.hide|default:'' }}
<script src="{{$URL_ROOT}}/modules/{{$comp.name}}/{{$comp.version|default:'0.1'}}/{{$comp.output|default:''}}"></script>
{{/if}}
{{/foreach}}
        <script src="{{$URL_ROOT}}/modules/{{$COMP_NAME}}/{{$COMP_VERSION}}/{{$OUTPUT}}"></script>

    </textArea>
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
        slidersubitems = selector
            指定具体子元素是那些，支持JC的选择器扩展
        
        sliderdirection = String default = 'horizontal'
            滚动的方向, 默认 horizontal, { horizontal, vertical }
        
        sliderloop = boolean default = false
            是否循环滚动
        
        sliderautomove = boolean default = false
            是否自动滚动
        
        sliderprev = selector
            后( 左 | 上 )移的触发元素selector, 控制slider向后( 左 | 上 )滚动
        
        slidernext = selector
            前( 右 | 下 )移的触发元素selector, 控制slider向前( 右 | 下 )滚动
        
        sliderhowmanyitem = int default = 1
            每次滚动多少个子元素, 默认1
        
        sliderstepms = int default = 10
            滚动效果运动的间隔时间(毫秒), 默认 10ms
        
        sliderdurationms = int default = 300
            滚动效果的总时间(毫秒), 默认 300ms
        
        sliderautomovems = int default = 2000
            自动滚动的间隔(毫秒), 默认 2000ms
    </textArea>
    <!-- HTML属性 end -->

    <!-- 数据结构 start -->
    <textArea class="detail-codetpl" type="text/template">
        数据格式为dom节点，并用slidersubitems属性进行指定
    </textArea>
    <!-- 数据结构 end -->

{{/block}}

{{block name="body_footer_js" append}}
{{/block}}
