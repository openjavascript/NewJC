{{extends file="public/base.tpl"}}
{{block name="inherit_header" append}}
<link rel="stylesheet" type="text/css" href="{{$PROJECT_ROOT}}/static/css/index.css" />
{{/block}}

{{block name="body_main"}}
    {{include file="public/index/body_header.tpl"}}

    <div class="wrapper">
        <a name="mainTop"></a>
        <div class="body clearfix">
            <div class="body-helper">
                <a href="javascript:;" class="body-homebtn" style="display:none">HOME</a>
                <a href="javascript:;" class="body-backbtn" style="display:none">BACK</a>
                <a href="javascript:;" class="body-topbtn" style="display:none">TOP</a>
            </div>

            {{include file="public/index/sidemenu.tpl"}}

            <div class="body-detail">
                <iframe id="detailframe" src="" frameborder="no" border="0" style="min-height: 600px"></iframe>
                <ul class="body-detailnav"></ul>
            </div>

            <div id="itemlist" class="body-content">
{{foreach from=$compsList item=value}}
                <ul class="body-compblock">
                    <h1 class="body-blockname">{{$value.name}}</h1>
    {{if isset( $value.desc )}}
        {{foreach from=$value.desc item=d}}
            <p class="body-blockdesc">{{$d}}</p>
        {{/foreach}}
    {{/if}}

    {{if isset( $value.data )}}
        {{foreach from=$value.data item=sitem}}
            {{if isset( $sitem.data ) }}
                {{for $i = count( $sitem.data ) - 1; $i >= 0; $i--}}
                    
                    {{if !$sitem.data[$i].hide|default:''}}


    <li class="body-comp" 
        data-id="{{"`$sitem.name` `$sitem.data[$i].version`"|md5}}"
        data-version="{{$sitem.data[$i].version|default:'0.1'}}" 
        data-name="{{$sitem.name}}"
        data-url="{{$PROJECT_ROOT}}/viewer.php?module={{$sitem.name}}&version={{$sitem.data[$i].version}}&file=detail.tpl"
        >
        <h2 class="body-comptitle clearfix">
            <span class="body-compname">{{$sitem.name}}</span>

            {{if $sitem.data[$i].outlink|default:''}}
                <a href="{{$sitem.data[$i].outlink}}" target="_blank" class="body-attrbtn">官网</a>
            {{else}}
                <a href="{{$PROJECT_ROOT}}/detail.php?module={{$sitem.name}}&version={{$sitem.data[$i].version}}&file=doc.tpl#btop" 
                    target="_detail"
                    class="body-attrbtn body-changebtn"
                >DOC</a>
                {{if !$sitem.data[$i].nodemo|default:'' }}
                <a href="{{$PROJECT_ROOT}}/detail.php?module={{$sitem.name}}&version={{$sitem.data[$i].version}}&file=demo.tpl#btop" 
                    target="_detail"
                    class="body-demobtn body-changebtn"
                >DEMO</a>
                    {{if !$sitem.data[$i].noSimpleDemo|default:''}}
                    <a href="javascript:;" 
                        target="_detail"
                        class="body-sdemobtn"
                        data-url="{{$PROJECT_ROOT}}/detail.php?module={{$sitem.name}}&version={{$sitem.data[$i].version}}&file=simple_demo.tpl#btop"
                    >SIMPLE DEMO</a>
                    {{/if}}
                {{/if}}
            {{/if}}
            <span class="body-compversion">最新版本: {{$sitem.data[$i].version}}</span>
        </h2>
        {{foreach from=$sitem.desc item=desc}}
        <p class="body-compdesc">{{$desc}}</p>
        {{/foreach}}

        {{if !$sitem.data[$i].outlink|default:''}}
            <div class="body-compdemo">
                <a href="javascript:;" class="body-compclose">close</a>
                <iframe src="" frameborder="no" border="0"></iframe>
            </div>
        {{/if}}
    </li>
                            {{break}}
                        {{/if}}
                     {{/for}}
                 {{/if}}
             {{/foreach}}
    {{/if}}
</ul>
{{/foreach}}
            </div>
        </div>
    {{include file="public/index/body_footer.tpl"}}
    </div>

{{/block}}

{{block name="body_footer_js" append}}
    <script>
        requirejs( [ '{{$PROJECT_ROOT}}/static/js/app/index.js' ] );
    </script>
{{/block}} 
