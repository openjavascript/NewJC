<?php /* Smarty version Smarty-3.1.18, created on 2014-12-15 18:49:34
         compiled from "/home/suches/udocs/website/git.me.btbtd.org/webroot/jc2_requirejs_dev/docs/docs-dev/tpl/JC.BaseMVC/0.1/doc.tpl" */ ?>
<?php /*%%SmartyHeaderCode:1604149075547c4781ee3a24-56222606%%*/if(!defined('SMARTY_DIR')) exit('no direct access allowed');
$_valid = $_smarty_tpl->decodeProperties(array (
  'file_dependency' => 
  array (
    'bf515d755310ee4fb8a6335a8a39daa717200b82' => 
    array (
      0 => '/home/suches/udocs/website/git.me.btbtd.org/webroot/jc2_requirejs_dev/docs/docs-dev/tpl/JC.BaseMVC/0.1/doc.tpl',
      1 => 1418122149,
      2 => 'file',
    ),
    'c057e425a5495281e6b77508e07a842fd4d851da' => 
    array (
      0 => '/home/suches/udocs/website/git.me.btbtd.org/webroot/jc2_requirejs_dev/docs/docs-dev/tpl/public/doc/base.tpl',
      1 => 1418371302,
      2 => 'file',
    ),
    'bd4e82ecb8f87973244496c7a4a85723f1f13630' => 
    array (
      0 => '/home/suches/udocs/website/git.me.btbtd.org/webroot/jc2_requirejs_dev/docs/docs-dev/tpl/public/base.tpl',
      1 => 1418282250,
      2 => 'file',
    ),
    '289a711da12b41818a9ed7aeaaf058ad0665160b' => 
    array (
      0 => '/home/suches/udocs/website/git.me.btbtd.org/webroot/jc2_requirejs_dev/docs/docs-dev/tpl/public/index/body_header.tpl',
      1 => 1418637729,
      2 => 'file',
    ),
    '0e1cce0a883adb5863158110b4b0457db775980e' => 
    array (
      0 => '/home/suches/udocs/website/git.me.btbtd.org/webroot/jc2_requirejs_dev/docs/docs-dev/tpl/public/doc/body_header.tpl',
      1 => 1417500055,
      2 => 'file',
    ),
    '8a7b19e52bed8c537e8778026276ca6031ce66d2' => 
    array (
      0 => '/home/suches/udocs/website/git.me.btbtd.org/webroot/jc2_requirejs_dev/docs/docs-dev/tpl/public/doc/body_main.tpl',
      1 => 1418639087,
      2 => 'file',
    ),
    'e04963f39d712974ffac9d9a9e43deec467808ff' => 
    array (
      0 => '/home/suches/udocs/website/git.me.btbtd.org/webroot/jc2_requirejs_dev/docs/docs-dev/tpl/public/doc/body_footer.tpl',
      1 => 1417399569,
      2 => 'file',
    ),
    '5c1978c51a0a433b26e32e05ea27a55bc2685883' => 
    array (
      0 => '/home/suches/udocs/website/git.me.btbtd.org/webroot/jc2_requirejs_dev/docs/docs-dev/tpl/public/index/body_footer.tpl',
      1 => 1417399569,
      2 => 'file',
    ),
  ),
  'nocache_hash' => '1604149075547c4781ee3a24-56222606',
  'function' => 
  array (
  ),
  'version' => 'Smarty-3.1.18',
  'unifunc' => 'content_547c4782062680_88366897',
  'variables' => 
  array (
    'PROJECT_ROOT' => 0,
    'URL_ROOT' => 0,
    'SHOW_COMP_INFO' => 0,
    'COMP_URL' => 0,
    'VIEWER_URL' => 0,
    'COMP_ROOT' => 0,
    'NAME' => 0,
    'OUTPUT' => 0,
    'COMP_NAME' => 0,
    'COMP_VERSION' => 0,
    'TDEBUG' => 0,
    'TVERSION' => 0,
  ),
  'has_nocache_code' => false,
),false); /*/%%SmartyHeaderCode%%*/?>
<?php if ($_valid && !is_callable('content_547c4782062680_88366897')) {function content_547c4782062680_88366897($_smarty_tpl) {?><!doctype html>
<html><?php echo $_smarty_tpl->getSubTemplate ("config.tpl", $_smarty_tpl->cache_id, $_smarty_tpl->compile_id, 0, null, array(), 0);?>
<?php echo $_smarty_tpl->getSubTemplate ("public/func.tpl", $_smarty_tpl->cache_id, $_smarty_tpl->compile_id, 0, null, array(), 0);?>
<head>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1" />
        <meta name="renderer" content="webkit" />
        <meta name="Keywords" content="JQueryComps,openjavascript,JC,JC2,jquery" />
        <meta name="Description" content="JQueryComps" />
	    <title>Jquey Comps</title>

        <link rel="stylesheet" type="text/css" href="<?php echo $_smarty_tpl->tpl_vars['PROJECT_ROOT']->value;?>
/static/css/button.css" />
	    <link rel="stylesheet" type="text/css" href="<?php echo $_smarty_tpl->tpl_vars['PROJECT_ROOT']->value;?>
/static/css/common.css" />

        <script>
            window.TPATH = window.PROJECT_ROOT = "<?php echo $_smarty_tpl->tpl_vars['PROJECT_ROOT']->value;?>
";
            window.URL_ROOT = "<?php echo $_smarty_tpl->tpl_vars['URL_ROOT']->value;?>
";

<?php if ((($tmp = @$_smarty_tpl->tpl_vars['SHOW_COMP_INFO']->value)===null||$tmp==='' ? '' : $tmp)) {?>
            window.COMP_URL = "<?php echo (($tmp = @$_smarty_tpl->tpl_vars['COMP_URL']->value)===null||$tmp==='' ? '' : $tmp);?>
";
            window.VIEWER_URL = "<?php echo (($tmp = @$_smarty_tpl->tpl_vars['VIEWER_URL']->value)===null||$tmp==='' ? '' : $tmp);?>
{0}";

            window.COMP_ROOT = "<?php echo (($tmp = @$_smarty_tpl->tpl_vars['COMP_ROOT']->value)===null||$tmp==='' ? '' : $tmp);?>
";

            window.NAME = "<?php echo (($tmp = @$_smarty_tpl->tpl_vars['NAME']->value)===null||$tmp==='' ? '' : $tmp);?>
";
            window.OUTPUT = "<?php echo (($tmp = @$_smarty_tpl->tpl_vars['OUTPUT']->value)===null||$tmp==='' ? '' : $tmp);?>
";

            window.COMP_NAME = "<?php echo (($tmp = @$_smarty_tpl->tpl_vars['COMP_NAME']->value)===null||$tmp==='' ? '' : $tmp);?>
";
            window.COMP_VERSION = "<?php echo (($tmp = @$_smarty_tpl->tpl_vars['COMP_VERSION']->value)===null||$tmp==='' ? '' : $tmp);?>
";
            <?php }?>

        </script>
		<script src="<?php echo $_smarty_tpl->tpl_vars['URL_ROOT']->value;?>
/lib.js"></script>
		<script src="<?php echo $_smarty_tpl->tpl_vars['PROJECT_ROOT']->value;?>
/static/js/config.js"></script>

        <script>
            JC.PATH = URL_ROOT;
            JC.debug = <?php echo (($tmp = @$_smarty_tpl->tpl_vars['TDEBUG']->value)===null||$tmp==='' ? 0 : $tmp);?>
;

            requirejs.config( {
                baseUrl: JC.PATH
                , urlArgs: 'v=<?php echo $_smarty_tpl->tpl_vars['TVERSION']->value;?>
'
                , paths: {
                    'common': TPATH + '/static/js/app/common'
                }
            });

        </script>
        
<link rel="stylesheet" type="text/css" href="<?php echo $_smarty_tpl->tpl_vars['PROJECT_ROOT']->value;?>
/static/css/index.css" />
<link rel="stylesheet" type="text/css" href="<?php echo $_smarty_tpl->tpl_vars['PROJECT_ROOT']->value;?>
/static/css/detail.css" />
<link rel="stylesheet" type="text/css" href="<?php echo $_smarty_tpl->tpl_vars['PROJECT_ROOT']->value;?>
/static/css/codemirror.css" />
<style>
.cm-variable {
}
</style>
<script>
    <?php if (!(($tmp = @$_smarty_tpl->tpl_vars['compData']->value['nodemo'])===null||$tmp==='' ? '' : $tmp)) {?>
        window.DEMO_PATH = "<?php echo $_smarty_tpl->tpl_vars['PROJECT_ROOT']->value;?>
/viewer.php?module=<?php echo $_smarty_tpl->tpl_vars['COMP_NAME']->value;?>
&version=<?php echo $_smarty_tpl->tpl_vars['COMP_VERSION']->value;?>
&file=demo.tpl";
    <?php }?>
</script>


        

        
        
    </head>
    <body>
        <?php echo $_smarty_tpl->getSubTemplate ("public/body_header.tpl", $_smarty_tpl->cache_id, $_smarty_tpl->compile_id, 0, null, array(), 0);?>

        
    <?php /*  Call merged included template "public/index/body_header.tpl" */
$_tpl_stack[] = $_smarty_tpl;
 $_smarty_tpl = $_smarty_tpl->setupInlineSubTemplate("public/index/body_header.tpl", $_smarty_tpl->cache_id, $_smarty_tpl->compile_id, 0, null, array(), 0, '1604149075547c4781ee3a24-56222606');
content_548ebcbe7e8b56_51113357($_smarty_tpl);
$_smarty_tpl = array_pop($_tpl_stack); 
/*  End of included template "public/index/body_header.tpl" */?>

        
    <?php /*  Call merged included template "public/doc/body_header.tpl" */
$_tpl_stack[] = $_smarty_tpl;
 $_smarty_tpl = $_smarty_tpl->setupInlineSubTemplate("public/doc/body_header.tpl", $_smarty_tpl->cache_id, $_smarty_tpl->compile_id, 0, null, array(), 0, '1604149075547c4781ee3a24-56222606');
content_548ebcbe83b690_65067758($_smarty_tpl);
$_smarty_tpl = array_pop($_tpl_stack); 
/*  End of included template "public/doc/body_header.tpl" */?>


        
<div class="wrap">
    <?php /*  Call merged included template "public/doc/body_main.tpl" */
$_tpl_stack[] = $_smarty_tpl;
 $_smarty_tpl = $_smarty_tpl->setupInlineSubTemplate("public/doc/body_main.tpl", $_smarty_tpl->cache_id, $_smarty_tpl->compile_id, 0, null, array('propertyAttr'=>1,'methodAttr'=>1), 0, '1604149075547c4781ee3a24-56222606');
content_548ebcbe84cdd8_99310979($_smarty_tpl);
$_smarty_tpl = array_pop($_tpl_stack); 
/*  End of included template "public/doc/body_main.tpl" */?>

    <!-- 外链形式 start -->
    <textarea class="detail-codetpl" type="text/template">
        <script src="<?php echo $_smarty_tpl->tpl_vars['URL_ROOT']->value;?>
/JC.common/0.3/common.js" />
        <script src="<?php echo $_smarty_tpl->tpl_vars['URL_ROOT']->value;?>
/<?php echo $_smarty_tpl->tpl_vars['COMP_NAME']->value;?>
/<?php echo $_smarty_tpl->tpl_vars['COMP_VERSION']->value;?>
/<?php echo $_smarty_tpl->tpl_vars['OUTPUT']->value;?>
" />
    </textarea>
    <!-- 外链形式 end -->

    <!-- 模块加载 start -->
    <textarea class="detail-codetpl" type="text/template">
        <script>
            requirejs( [ '<?php echo $_smarty_tpl->tpl_vars['COMP_NAME']->value;?>
' ], function( <?php echo $_smarty_tpl->tpl_vars['NAME']->value;?>
 ){
            });
        </script>
    </textarea>
    <!-- 模块加载 end -->

    <textarea class="detail-codetpl" type="text/template">
        autoInit Bool static
            是否自动初始化
            Default: true
    </textarea>

    <textarea class="detail-codetpl" type="text/template">
        build ( _outClass ) static
            复制 BaseMVC 的所有方法到 _outClass
            Parameters:
                _outClass Class

        buildClass ( _inClass  _outClass ) static
            复制 _inClass 的所有方法到 _outClass
            Parameters:
                _inClass Class
                _outClass Class

        buildModel ( _outClass ) static
            为 _outClass 生成一个通用 Model 类
            Parameters:
                _outClass Class

        buildView ( _outClass ) static
            为 _outClass 生成一个通用 View 类
            Parameters:
                _outClass Class

        getInstance ( _selector  _staticClass  _classInstance ) static
            获取或设置组件实例
            Parameters:
                _selector Selector
                _staticClass Class
                _classInstance ClassInstance
            Returns:
                ClassInstance | null:

        on ( _evtName  _cb ) 
            使用 jquery on 绑定事件
            Parameters:
                _evtName String
                _cb Function
            Returns:
                BaseMVCInstance

        selector () 
            获取 显示 BaseMVC 的触发源选择器, 比如 a 标签
            Returns:
                selector

        trigger ( _evtName ) 
            使用 jquery trigger 触发绑定事件
            Parameters:
                _evtName String
            Returns:
                BaseMVCInstance  
    </textarea>
</div>



        
              

        
    <?php /*  Call merged included template "public/doc/body_footer.tpl" */
$_tpl_stack[] = $_smarty_tpl;
 $_smarty_tpl = $_smarty_tpl->setupInlineSubTemplate("public/doc/body_footer.tpl", $_smarty_tpl->cache_id, $_smarty_tpl->compile_id, 0, null, array(), 0, '1604149075547c4781ee3a24-56222606');
content_548ebcbe8909f1_24259659($_smarty_tpl);
$_smarty_tpl = array_pop($_tpl_stack); 
/*  End of included template "public/doc/body_footer.tpl" */?>
    <?php /*  Call merged included template "public/index/body_footer.tpl" */
$_tpl_stack[] = $_smarty_tpl;
 $_smarty_tpl = $_smarty_tpl->setupInlineSubTemplate("public/index/body_footer.tpl", $_smarty_tpl->cache_id, $_smarty_tpl->compile_id, 0, null, array(), 0, '1604149075547c4781ee3a24-56222606');
content_548ebcbe895fb0_88832054($_smarty_tpl);
$_smarty_tpl = array_pop($_tpl_stack); 
/*  End of included template "public/index/body_footer.tpl" */?>

        <?php echo $_smarty_tpl->getSubTemplate ("public/body_footer.tpl", $_smarty_tpl->cache_id, $_smarty_tpl->compile_id, 0, null, array(), 0);?>


         
        <?php if (isset($_GET['debug'])&&$_GET['debug']=='1') {?><?php $_smarty_tpl->smarty->loadPlugin('Smarty_Internal_Debug'); Smarty_Internal_Debug::display_debug($_smarty_tpl); ?><?php }?>
    </body>
</html>
<?php }} ?>
<?php /* Smarty version Smarty-3.1.18, created on 2014-12-15 18:49:34
         compiled from "/home/suches/udocs/website/git.me.btbtd.org/webroot/jc2_requirejs_dev/docs/docs-dev/tpl/public/index/body_header.tpl" */ ?>
<?php if ($_valid && !is_callable('content_548ebcbe7e8b56_51113357')) {function content_548ebcbe7e8b56_51113357($_smarty_tpl) {?><div class="header js_compAutoFixed" style="z-index: 1000;" data-normalClass="cafHeaderNav" data-fixedClass="cafHeaderNav">
    <div class="wrapper">
        <div class="header-nav clearfix">
            <h1 class="header-logo">
                <a href="<?php echo $_smarty_tpl->tpl_vars['PROJECT_ROOT']->value;?>
"><span>Jquery</span><lable class="cwhite">Comps</label></a>
                <i>|</i>
                <a class="header-github" hover="logohover" href="http://github.com/openjavascript/jquerycomps" target="_blank">
                    <img class="github-unhover" src="<?php echo $_smarty_tpl->tpl_vars['PROJECT_ROOT']->value;?>
/static/img/githubLogo.png" />
                    <img class="github-hover" src="<?php echo $_smarty_tpl->tpl_vars['PROJECT_ROOT']->value;?>
/static/img/githubLogo2.png" />
                </a>
            </h1>
            <ul id="menulist" class="header-menu">
                <?php  $_smarty_tpl->tpl_vars['value'] = new Smarty_Variable; $_smarty_tpl->tpl_vars['value']->_loop = false;
 $_from = $_smarty_tpl->tpl_vars['compsList']->value; if (!is_array($_from) && !is_object($_from)) { settype($_from, 'array');}
foreach ($_from as $_smarty_tpl->tpl_vars['value']->key => $_smarty_tpl->tpl_vars['value']->value) {
$_smarty_tpl->tpl_vars['value']->_loop = true;
?>
                <li hover="header-menuhover">
                    <?php echo $_smarty_tpl->tpl_vars['value']->value['name'];?>

                    <div class="header-submenu clearfix">
                        <?php if (isset($_smarty_tpl->tpl_vars['value']->value['data'])) {?>
                            <?php  $_smarty_tpl->tpl_vars['sitem'] = new Smarty_Variable; $_smarty_tpl->tpl_vars['sitem']->_loop = false;
 $_from = $_smarty_tpl->tpl_vars['value']->value['data']; if (!is_array($_from) && !is_object($_from)) { settype($_from, 'array');}
foreach ($_from as $_smarty_tpl->tpl_vars['sitem']->key => $_smarty_tpl->tpl_vars['sitem']->value) {
$_smarty_tpl->tpl_vars['sitem']->_loop = true;
?>
                                <?php if (isset($_smarty_tpl->tpl_vars['sitem']->value['data'])) {?>
                                    <?php  $_smarty_tpl->tpl_vars['i'] = new Smarty_Variable; $_smarty_tpl->tpl_vars['i']->value = count($_smarty_tpl->tpl_vars['sitem']->value['data'])-1;
  if ($_smarty_tpl->tpl_vars['i']->value>=0) { for ($_foo=true;$_smarty_tpl->tpl_vars['i']->value>=0; $_smarty_tpl->tpl_vars['i']->value--) {
?>
                                        
                                        <?php if (!(($tmp = @$_smarty_tpl->tpl_vars['sitem']->value['data'][$_smarty_tpl->tpl_vars['i']->value]['hide'])===null||$tmp==='' ? '' : $tmp)) {?>
                                            <?php if ($_smarty_tpl->tpl_vars['value']->value['name']!='Plugin') {?>
                                                <a class="header-complink" 
                                                data-version="<?php echo $_smarty_tpl->tpl_vars['sitem']->value['data'][$_smarty_tpl->tpl_vars['i']->value]['version'];?>
" 
                                                data-name="<?php echo $_smarty_tpl->tpl_vars['sitem']->value['name'];?>
" 
                                                data-id="<?php echo md5(((string)$_smarty_tpl->tpl_vars['sitem']->value['name'])." ".((string)$_smarty_tpl->tpl_vars['sitem']->value['data'][$_smarty_tpl->tpl_vars['i']->value]['version']));?>
"
                                                target="_detail"
                                                href="<?php echo $_smarty_tpl->tpl_vars['PROJECT_ROOT']->value;?>
/detail.php?module=<?php echo $_smarty_tpl->tpl_vars['sitem']->value['name'];?>
&version=<?php echo $_smarty_tpl->tpl_vars['sitem']->value['data'][$_smarty_tpl->tpl_vars['i']->value]['version'];?>
&file=doc.tpl#btop"><?php echo $_smarty_tpl->tpl_vars['sitem']->value['name'];?>
</a>
                                            <?php } else { ?>
                                                <a href="<?php echo $_smarty_tpl->tpl_vars['sitem']->value['data'][$_smarty_tpl->tpl_vars['i']->value]['outlink'];?>
" target="_blank"><?php echo $_smarty_tpl->tpl_vars['sitem']->value['name'];?>
</a>
                                            <?php }?>
                                            <?php break 1?>
                                        <?php }?>
                                    <?php }} ?>
                                <?php }?>
                            <?php } ?>
                        <?php }?>
                    </div>
                </li>
                <?php } ?>
                <?php if (isset($_smarty_tpl->tpl_vars['extraMenu']->value)) {?>
                    <?php  $_smarty_tpl->tpl_vars['value'] = new Smarty_Variable; $_smarty_tpl->tpl_vars['value']->_loop = false;
 $_from = $_smarty_tpl->tpl_vars['extraMenu']->value; if (!is_array($_from) && !is_object($_from)) { settype($_from, 'array');}
foreach ($_from as $_smarty_tpl->tpl_vars['value']->key => $_smarty_tpl->tpl_vars['value']->value) {
$_smarty_tpl->tpl_vars['value']->_loop = true;
?>
                    <li class="header-extramenu" hover="header-menuhover">
                        <a href="<?php echo $_smarty_tpl->tpl_vars['value']->value['url'];?>
" target="_blank" hover="header-menuhover">
                        <?php echo $_smarty_tpl->tpl_vars['value']->value['name'];?>

                        </a>
                    </li>
                    <?php } ?>
                <?php }?>
            </ul>
        </div>
    </div>
</div>
<?php if (!(($tmp = @$_COOKIE['hideheader'])===null||$tmp==='' ? '' : $tmp)) {?>
<div class="js_headarBar">
    <div class="flor-img" style=""></div>
    <button type="button" class="button black medium js_hideHeader">hide this</button>
</div>
<?php }?>

<?php }} ?>
<?php /* Smarty version Smarty-3.1.18, created on 2014-12-15 18:49:34
         compiled from "/home/suches/udocs/website/git.me.btbtd.org/webroot/jc2_requirejs_dev/docs/docs-dev/tpl/public/doc/body_header.tpl" */ ?>
<?php if ($_valid && !is_callable('content_548ebcbe83b690_65067758')) {function content_548ebcbe83b690_65067758($_smarty_tpl) {?><div id="compTitle">
    <h1 class="detail-title"><?php echo $_smarty_tpl->tpl_vars['COMP_NAME']->value;?>
</h1>
    <h2 class="detail-subtitle">
        <?php echo (($tmp = @$_smarty_tpl->tpl_vars['allVersionComps']->value['subtitle'])===null||$tmp==='' ? '' : $tmp);?>

<?php if ((($tmp = @$_smarty_tpl->tpl_vars['compData']->value['download'])===null||$tmp==='' ? '' : $tmp)) {?><a href="<?php echo $_smarty_tpl->tpl_vars['compData']->value['download'];?>
" target="_blank" class="detail-titlebtn">DOWN LOAD</a><?php }?>
<?php if ((($tmp = @$_smarty_tpl->tpl_vars['allVersionComps']->value['api'])===null||$tmp==='' ? '' : $tmp)) {?><a href="<?php echo $_smarty_tpl->tpl_vars['allVersionComps']->value['api'];?>
" target="_blank" class="detail-titlebtn">查看API</a><?php }?>
    </h2>
</div>

<?php }} ?>
<?php /* Smarty version Smarty-3.1.18, created on 2014-12-15 18:49:34
         compiled from "/home/suches/udocs/website/git.me.btbtd.org/webroot/jc2_requirejs_dev/docs/docs-dev/tpl/public/doc/body_main.tpl" */ ?>
<?php if ($_valid && !is_callable('content_548ebcbe84cdd8_99310979')) {function content_548ebcbe84cdd8_99310979($_smarty_tpl) {?>
<div id="bodynav" class="body-nav js_compAutoFixed" 
    data-fixedTopPx="<?php echo $_smarty_tpl->tpl_vars['TSIDETOP']->value;?>
"
    data-fixedClass="body-nav-fixed"
></div>

<div class="detail-attr">
    <h3 id="navmark-desc" class="detail-blockname ">组件简介</h3>
    <div class="detail-ct">
        <div class="detail-desc">
            <?php  $_smarty_tpl->tpl_vars['d'] = new Smarty_Variable; $_smarty_tpl->tpl_vars['d']->_loop = false;
 $_from = $_smarty_tpl->tpl_vars['allVersionComps']->value['desc']; if (!is_array($_from) && !is_object($_from)) { settype($_from, 'array');}
foreach ($_from as $_smarty_tpl->tpl_vars['d']->key => $_smarty_tpl->tpl_vars['d']->value) {
$_smarty_tpl->tpl_vars['d']->_loop = true;
?>
            <p class="desc"><?php echo $_smarty_tpl->tpl_vars['d']->value;?>
</p>
            <?php } ?>
        </div>
        <p class="desc"><?php echo (($tmp = @$_smarty_tpl->tpl_vars['compCustomDesc']->value)===null||$tmp==='' ? '' : $tmp);?>
</p>
    </div>
    <h3 id="navmark-use" class="detail-blockname" >使用说明</h3>
    <div class="detail-ct detail-use">
        <h4 id="navmark-version" class="detail-groupname ">历史版本 : </h4>
        <div class="detail-version">
            <?php  $_smarty_tpl->tpl_vars['comp'] = new Smarty_Variable; $_smarty_tpl->tpl_vars['comp']->_loop = false;
 $_from = $_smarty_tpl->tpl_vars['allVersionComps']->value['data']; if (!is_array($_from) && !is_object($_from)) { settype($_from, 'array');}
foreach ($_from as $_smarty_tpl->tpl_vars['comp']->key => $_smarty_tpl->tpl_vars['comp']->value) {
$_smarty_tpl->tpl_vars['comp']->_loop = true;
?>
                <?php if (!(($tmp = @$_smarty_tpl->tpl_vars['comp']->value['hide'])===null||$tmp==='' ? '' : $tmp)) {?>
                <a href="#" class="detail-versionlink <?php if ((($tmp = @$_smarty_tpl->tpl_vars['comp']->value['nowVersion'])===null||$tmp==='' ? '' : $tmp)) {?>detail-nowVersion<?php }?>" data-name="<?php echo $_smarty_tpl->tpl_vars['allVersionComps']->value['name'];?>
" data-version="<?php echo $_smarty_tpl->tpl_vars['comp']->value['version'];?>
">
                <?php echo $_smarty_tpl->tpl_vars['comp']->value['version'];?>

                </a>
                <?php }?>
            <?php } ?>
        </div>
        <h4 id="navmark-require" class="detail-groupname ">组件依赖 : </h4>
        <div class="detail-require">
            <p>
                <?php if (sizeof($_smarty_tpl->tpl_vars['requireComps']->value)>0) {?>
                    <?php  $_smarty_tpl->tpl_vars['comp'] = new Smarty_Variable; $_smarty_tpl->tpl_vars['comp']->_loop = false;
 $_from = $_smarty_tpl->tpl_vars['requireComps']->value; if (!is_array($_from) && !is_object($_from)) { settype($_from, 'array');}
foreach ($_from as $_smarty_tpl->tpl_vars['comp']->key => $_smarty_tpl->tpl_vars['comp']->value) {
$_smarty_tpl->tpl_vars['comp']->_loop = true;
?>
                    <?php if ((($tmp = @$_smarty_tpl->tpl_vars['comp']->value['outlink'])===null||$tmp==='' ? '' : $tmp)) {?>
                        <a href="<?php echo (($tmp = @$_smarty_tpl->tpl_vars['comp']->value['outlink'])===null||$tmp==='' ? '' : $tmp);?>
" target="_blank" 
                            data-name="<?php echo $_smarty_tpl->tpl_vars['comp']->value['name'];?>
"
                            >
                            <?php echo $_smarty_tpl->tpl_vars['comp']->value['name'];?>

                        </a>
                    <?php } else { ?>
                        <?php if (!(($tmp = @$_smarty_tpl->tpl_vars['comp']->value['hide'])===null||$tmp==='' ? '' : $tmp)) {?>
                        <a href="#" class="detail-requirelink"
                            data-name="<?php echo $_smarty_tpl->tpl_vars['comp']->value['name'];?>
"
                            >
                            <?php echo $_smarty_tpl->tpl_vars['comp']->value['name'];?>

                        </a>
                        <?php }?>
                    <?php }?>
                    <?php } ?>
                <?php } else { ?>
                    <em>无依赖</em>
                <?php }?>
            </p>
        </div>
        <h4 id="navmark-link" class="detail-groupname">外链形式 : </h4>
        <textArea class="detail-code">
        </textArea>
        <h4 id="navmark-load" class="detail-groupname">模块加载形式 : </h4>
        <textArea class="detail-code"></textArea>
    </div>

    <?php if ((($tmp = @$_smarty_tpl->tpl_vars['constructorAttr']->value)===null||$tmp==='' ? '' : $tmp)) {?>
    <h3 id="navmark-constructor" class="detail-blockname">Constructor</h3>
    <div class="detail-ct detail-htmlattr">
        <textArea class="detail-code"></textArea>
    </div>
    <?php }?>

    <?php if ((($tmp = @$_smarty_tpl->tpl_vars['initAttr']->value)===null||$tmp==='' ? '' : $tmp)) {?>
    <h3 id="navmark-init" class="detail-blockname">Init</h3>
    <div class="detail-ct detail-htmlattr">
        <textArea class="detail-code"></textArea>
    </div>
    <?php }?>

    <?php if ((($tmp = @$_smarty_tpl->tpl_vars['htmlAttr']->value)===null||$tmp==='' ? '' : $tmp)) {?>
    <h3 id="navmark-htmlattr" class="detail-blockname">HTML Attributes</h3>
    <div class="detail-ct detail-htmlattr">
        <textArea class="detail-code"></textArea>
    </div>
    <?php }?>

    <?php if ((($tmp = @$_smarty_tpl->tpl_vars['propertyAttr']->value)===null||$tmp==='' ? '' : $tmp)) {?>
    <h3 id="navmark-properties" class="detail-blockname">Properties</h3>
    <div class="detail-ct detail-data">
        <textArea class="detail-code"></textArea>
    </div>
    <?php }?>

    <?php if ((($tmp = @$_smarty_tpl->tpl_vars['methodAttr']->value)===null||$tmp==='' ? '' : $tmp)) {?>
    <a name="methodAttr"></a>
    <h3 id="navmark-methods" class="detail-blockname">Methods</h3>
    <div class="detail-ct detail-data">
        <textArea class="detail-code"></textArea>
    </div>
    <?php }?>

    <?php if ((($tmp = @$_smarty_tpl->tpl_vars['eventAttr']->value)===null||$tmp==='' ? '' : $tmp)) {?>
    <h3 id="navmark-events" class="detail-blockname">Events</h3>
    <div class="detail-ct detail-data">
        <textArea class="detail-code"></textArea>
    </div>
    <?php }?>

    <?php if ((($tmp = @$_smarty_tpl->tpl_vars['dataFormat']->value)===null||$tmp==='' ? '' : $tmp)||(($tmp = @$_smarty_tpl->tpl_vars['dataFormatAttr']->value)===null||$tmp==='' ? '' : $tmp)) {?>
    <h3 id="navmark-dataformat" class="detail-blockname">Data Format</h3>
    <div class="detail-ct detail-data">
        <textArea class="detail-code"></textArea>
    </div>
    <?php }?>
</div>
<?php }} ?>
<?php /* Smarty version Smarty-3.1.18, created on 2014-12-15 18:49:34
         compiled from "/home/suches/udocs/website/git.me.btbtd.org/webroot/jc2_requirejs_dev/docs/docs-dev/tpl/public/doc/body_footer.tpl" */ ?>
<?php if ($_valid && !is_callable('content_548ebcbe8909f1_24259659')) {function content_548ebcbe8909f1_24259659($_smarty_tpl) {?>

    <script>
        requirejs( [ '<?php echo $_smarty_tpl->tpl_vars['PROJECT_ROOT']->value;?>
/static/js/app/doc.js' ] );
    </script>
 
<?php }} ?>
<?php /* Smarty version Smarty-3.1.18, created on 2014-12-15 18:49:34
         compiled from "/home/suches/udocs/website/git.me.btbtd.org/webroot/jc2_requirejs_dev/docs/docs-dev/tpl/public/index/body_footer.tpl" */ ?>
<?php if ($_valid && !is_callable('content_548ebcbe895fb0_88832054')) {function content_548ebcbe895fb0_88832054($_smarty_tpl) {?><div class="footer">
    <h2>友情链接：</h2>
    <p id="outlink" class="clearfix">
        <?php  $_smarty_tpl->tpl_vars['link'] = new Smarty_Variable; $_smarty_tpl->tpl_vars['link']->_loop = false;
 $_from = $_smarty_tpl->tpl_vars['websiteLink']->value; if (!is_array($_from) && !is_object($_from)) { settype($_from, 'array');}
foreach ($_from as $_smarty_tpl->tpl_vars['link']->key => $_smarty_tpl->tpl_vars['link']->value) {
$_smarty_tpl->tpl_vars['link']->_loop = true;
?>
        <a href="<?php echo $_smarty_tpl->tpl_vars['link']->value['url'];?>
" target="_blank"><?php echo $_smarty_tpl->tpl_vars['link']->value['name'];?>
</a>
        <?php } ?>
    </p>
</div>
<?php }} ?>
