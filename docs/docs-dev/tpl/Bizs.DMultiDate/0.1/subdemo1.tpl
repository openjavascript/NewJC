{{extends file="public/simple_demo/base.tpl"}}

{{block name="html_header_css" append}}
<style class="show-css">
@import url( '{{$URL_ROOT}}/modules/JC.Calendar/0.3/res/default/style.css'  );
</style>
{{/block}}

{{block name="body_main"}}
    <div class="codeview-view">
        <div class="codeview-cssview">
            <textArea style="display:none;"></textArea>
        </div>
        <div class="codeview-jsview">
            <textArea style="display:none;"></textArea>
        </div>
        <div class="codeview-htmlview">
            <textArea style="display:none;"></textArea>
        </div>
        <div class="codeview-pageview nowview">
            <div class="">
                <!-- simple demo -->
                <dl class="dmultidate-demo1">
                    <dt>hiddendateiso="true" 隐藏域的startdate和enddate为格式化的ISO格式, 自定义显示2个日期框  示例</dt>
                    <dd>
                        <div class="js_autoDMultiDate" 
                            mddayrange="31"
                            mdweekrange="12"
                            mdmonthrange="12"
                            mdseasonrange="8"
                            hiddendateiso="true"
                            lastIptBox="|.js_lastIpt"
                            >
                            <select name="dataspan" class="dataspan" 
                                >
                                <option value="day">日数据</option>
                                <option value="week">周数据</option>
                                <option value="month">月数据</option>
                                <option value="season">季数据</option>
                                <option value="custom">自定义</option>
                            </select>

                            <input type="text" class="js_multidate"
                            multidate="date"
                            datatype="daterange" 
                            currentcanselect="true" 
                            size="20" readonly=""
                            errmsg="请正确的时间范围"
                            emel="/em"
                            >

                            <span class="js_lastIpt" style="display:none;">
                                <input type="text" class="js_multidate"
                                multidate="date" 
                                datatype="daterange"
                                currentcanselect="true" 
                                size="20" readonly="" 
                                errmsg="请正确的时间范围"
                                emel="/em"
                                >
                                <em></em>
                            </span>
                            <input type="hidden" name="startdate" class="js_startdate" value="" />
                            <input type="hidden" name="enddate" class="js_enddate" value="" />
                        </div>

                    </dd>
                </dl>
            </div>
        </div>
    </div>
{{/block}}

{{block name="body_footer_js" append}}

<script type="text/template" class="show-html">
 <div class="js_autoDMultiDate" 
    mddayrange="31"
    mdweekrange="12"
    mdmonthrange="12"
    mdseasonrange="8"
    hiddendateiso="true"
    lastIptBox="|.js_lastIpt"
    >
    <select name="dataspan" class="dataspan" 
        >
        <option value="day">日数据</option>
        <option value="week">周数据</option>
        <option value="month">月数据</option>
        <option value="season">季数据</option>
        <option value="custom">自定义</option>
    </select>

    <input type="text" class="js_multidate"
    multidate="date"
    datatype="daterange" 
    currentcanselect="true" 
    size="20" readonly=""
    errmsg="请正确的时间范围"
    emel="/em"
    >

    <span class="js_lastIpt" style="display:none;">
        <input type="text" class="js_multidate"
        multidate="date" 
        datatype="daterange"
        currentcanselect="true" 
        size="20" readonly="" 
        errmsg="请正确的时间范围"
        emel="/em"
        >
        <em></em>
    </span>
    <input type="hidden" name="startdate" class="js_startdate" value="" />
    <input type="hidden" name="enddate" class="js_enddate" value="" />
</div>
</script>

<script type="text/javascript" class="show-js">
    requirejs( [ '{{$COMP_NAME}}' ] );
</script>
{{/block}}

