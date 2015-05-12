;(function(){
window.JC = window.JC || {log:function(){}};
JC.PATH = JC.PATH || scriptPath();
/**
 * requirejs config.js for JC Project
 */
window.requirejs && 
requirejs.config( {
    baseUrl: JC.PATH
    , urlArgs: 'v=20141017'
    , paths: {
        'JC.common': 'modules/JC.common/0.3/common'
        , 'JC.BaseMVC': 'modules/JC.BaseMVC/0.1/BaseMVC'

        //, 'JC.AjaxUpload': 'modules/JC.AjaxUpload/0.1/AjaxUpload'
        , 'JC.AjaxUpload': 'modules/JC.AjaxUpload/0.2/AjaxUpload'
        , 'JC.AjaxTree': 'modules/JC.AjaxTree/0.1/AjaxTree'
        , 'JC.AutoChecked': 'modules/JC.AutoChecked/0.1/AutoChecked'
        , 'JC.AutoFixed': 'modules/JC.AutoFixed/0.1/AutoFixed'
        , 'JC.AutoSelect': 'modules/JC.AutoSelect/0.2/AutoSelect'
        , 'JC.AutoComplete': 'modules/JC.AutoComplete/0.1/AutoComplete'

        //, 'JC.Calendar': 'modules/JC.Calendar/0.2/Calendar'
        , 'JC.Calendar': 'modules/JC.Calendar/0.3/Calendar'
        , 'JC.Calendar.date': 'modules/JC.Calendar/0.3/Calendar.date'
        , 'JC.Calendar.week': 'modules/JC.Calendar/0.3/Calendar.week'
        , 'JC.Calendar.month': 'modules/JC.Calendar/0.3/Calendar.month'
        , 'JC.Calendar.season': 'modules/JC.Calendar/0.3/Calendar.season'
        , 'JC.Calendar.year': 'modules/JC.Calendar/0.3/Calendar.year'
        , 'JC.Calendar.monthday': 'modules/JC.Calendar/0.3/Calendar.monthday'
        , 'JC.Cover' : 'modules/JC.Cover/0.1/Cover'

        , 'JC.DCalendar': 'modules/JC.DCalendar/0.1/DCalendar'
        , 'JC.DCalendar.date': 'modules/JC.DCalendar/0.1/DCalendar.date'

        , 'JC.Drag': 'modules/JC.Drag/0.1/Drag'
        , 'JC.DragSelect': 'modules/JC.DragSelect/0.1/DragSelect'

        , 'JC.FChart': 'modules/JC.FChart/0.1/FChart'
        , 'JC.Form': 'modules/JC.Form/0.2/Form'
        , 'JC.Fixed': 'modules/JC.Fixed/0.1/Fixed'
        , 'JC.FlowChart': 'modules/JC.FlowChart/0.1/FlowChart'

        , 'JC.FormFillUrl': 'modules/JC.FormFillUrl/0.1/FormFillUrl'
        , 'JC.FrameUtil': 'modules/JC.FrameUtil/0.1/FrameUtil'

        , 'JC.ImageCutter': 'modules/JC.ImageCutter/0.1/ImageCutter'

        , 'JC.LunarCalendar': 'modules/JC.LunarCalendar/0.1/LunarCalendar'
        , 'JC.LunarCalendar.default': 'modules/JC.LunarCalendar/0.1/LunarCalendar.default'
        , 'JC.LunarCalendar.getFestival': 'modules/JC.LunarCalendar/0.1/LunarCalendar.getFestival'
        , 'JC.LunarCalendar.gregorianToLunar': 'modules/JC.LunarCalendar/0.1/LunarCalendar.gregorianToLunar'
        , 'JC.LunarCalendar.nationalHolidays': 'modules/JC.LunarCalendar/0.1/LunarCalendar.nationalHolidays'

        , 'JC.NumericStepper': 'modules/JC.NumericStepper/0.1/NumericStepper'
        , 'JC.NSlider': 'modules/JC.NSlider/0.1/NSlider'

        , 'JC.Paginator': 'modules/JC.Paginator/0.1/Paginator'
        
        , 'JC.Rate': 'modules/JC.Rate/0.1/Rate'

        , 'JC.ServerSort': 'modules/JC.ServerSort/0.1/ServerSort'
        , 'JC.Slider': 'modules/JC.Slider/0.1/Slider'
        , 'JC.StepControl': 'modules/JC.StepControl/0.1/StepControl'
        //, 'JC.Suggest': 'modules/JC.Suggest/0.1/Suggest'
        , 'JC.Suggest': 'modules/JC.Suggest/0.2/Suggest'

        //, 'JC.Tab': 'modules/JC.Tab/0.1/Tab'
        , 'JC.Tab': 'modules/JC.Tab/0.2/Tab'

        , 'JC.TableFreeze': 'modules/JC.TableFreeze/0.2/TableFreeze'
        , 'JC.TableSort': 'modules/JC.TableSort/0.1/TableSort'
        , 'JC.Selectable': 'modules/JC.SelectAble/dev/Selectable'
        , 'JC.Tips': 'modules/JC.Tips/0.1/Tips'
        , 'JC.Tree': 'modules/JC.Tree/0.1/Tree'
        , 'JC.Lazyload': 'modules/JC.Lazyload/0.1/Lazyload'
        , 'JC.Scrollbar': 'modules/JC.Scrollbar/0.1/Scrollbar'

        /*
        //, 'JC.Panel': 'modules/JC.Panel/0.1/Panel'
        , 'JC.Panel':           'modules/JC.Panel/0.2/Panel'
        , 'JC.Panel.default':   'modules/JC.Panel/0.2/Panel.default'
        , 'JC.Panel.popup':     'modules/JC.Panel/0.2/Panel.popup'
        , 'JC.Dialog':          'modules/JC.Panel/0.2/Dialog'
        , 'JC.Dialog.popup':    'modules/JC.Panel/0.2/Dialog.popup'
        */

        , 'JC.Panel':           'modules/JC.Panel/0.3/Panel'
        , 'JC.Panel.default':   'modules/JC.Panel/0.3/Panel.default'
        , 'JC.Panel.popup':     'modules/JC.Panel/0.3/Panel.popup'
        , 'JC.Dialog':          'modules/JC.Panel/0.3/Dialog'
        , 'JC.Dialog.popup':    'modules/JC.Panel/0.3/Dialog.popup'

        , 'JC.Placeholder': 'modules/JC.Placeholder/0.1/Placeholder'
        //, 'JC.PopTips': 'modules/JC.PopTips/0.1/PopTips'
        , 'JC.PopTips': 'modules/JC.PopTips/0.2/PopTips'
        , 'JC.Valid': 'modules/JC.Valid/0.2/Valid'

        , 'Bizs.ActionLogic': 'modules/Bizs.ActionLogic/0.1/ActionLogic'
        , 'Bizs.AutoSelectComplete': 'modules/Bizs.AutoSelectComplete//0.1/AutoSelectComplete'

        , 'Bizs.ChangeLogic': 'modules/Bizs.ChangeLogic/0.1/ChangeLogic'

        , 'Bizs.CustomColumn' : 'modules/Bizs.CustomColumn/0.1/CustomColumn'

        , 'Bizs.DisableLogic': 'modules/Bizs.DisableLogic/0.1/DisableLogic'
        , 'Bizs.DropdownTree': 'modules/Bizs.DropdownTree/0.1/DropdownTree'

        , 'Bizs.CommonModify': 'modules/Bizs.CommonModify/0.1/CommonModify'
        , 'Bizs.FormLogic': 'modules/Bizs.FormLogic/0.2/FormLogic'
        , 'Bizs.KillISPCache': 'modules/Bizs.KillISPCache/0.1/KillISPCache'
        , 'Bizs.MoneyTips': 'modules/Bizs.MoneyTips/0.1/MoneyTips'

        , 'Bizs.MultiAutoComplete': 'modules/Bizs.MultiAutoComplete/0.1/MultiAutoComplete'

        , 'Bizs.MultiDate': 'modules/Bizs.MultiDate/0.1/MultiDate'
        , 'Bizs.MultiSelect': 'modules/Bizs.MultiSelect/0.1/MultiSelect'
        , 'Bizs.MultiselectPanel': 'modules/Bizs.MultiselectPanel/0.1/MultiselectPanel'
        , 'Bizs.MultiSelectTree': 'modules/Bizs.MultiSelectTree/0.1/MultiSelectTree'
        , 'Bizs.DMultiDate': 'modules/Bizs.DMultiDate/0.1/DMultiDate'
        , 'Bizs.MultiUpload': 'modules/Bizs.MultiUpload/0.1/MultiUpload'
        , 'Bizs.TaskViewer': 'modules/Bizs.TaskViewer/0.1/TaskViewer'
        , 'Bizs.InputSelect': 'modules/Bizs.InputSelect/0.1/InputSelect'
        , 'Bizs.MultiChangeLogic': 'modules/Bizs.MultiChangeLogic/0.1/MultiChangeLogic'

        , 'Bizs.CRMSchedule': 'modules/Bizs.CRMSchedule/0.1/CRMSchedule'
        , 'Bizs.CRMSchedulePopup': 'modules/Bizs.CRMSchedule/0.1/CRMSchedulePopup'

        , 'plugins.jquery.form': 'plugins/jquery.form/3.36.0/jquery.form'
        , 'plugins.jquery.rate': 'plugins/jquery.rate/2.5.2/jquery.rate'

        , 'jquery.mousewheel': 'modules/jquery.mousewheel/3.1.12/jquery.mousewheel'
        , 'jquery.form': 'plugins/jquery.form/3.36.0/jquery.form'
        , 'jquery.rate': 'plugins/jquery.rate/2.5.2/jquery.rate'
        , 'jquery.cookie': 'modules/jquery.cookie/1.4.1/jquery.cookie'

        , 'json2': 'modules/JSON/2/JSON'
        , 'plugins.JSON2': 'modules/JSON/2/JSON'
        , 'plugins.json2': 'modules/JSON/2/JSON'

        , 'plugins.Aes': 'plugins/Aes/0.1/Aes'
        , 'plugins.Base64': 'plugins/Base64/0.1/Base64'
        , 'plugins.md5': 'plugins/md5/0.1/md5'

        , 'plugins.requirejs.domReady': 'plugins/requirejs.domReady/2.0.1/domReady'

        , 'plugins.swfobject': 'plugins/SWFObject/2.2/SWFObject'
        , 'swfobject': 'modules/swfobject/2.3/swfobject'
        , 'SWFObject': 'modules/swfobject/2.3/swfobject'

        , 'SWFUpload': 'modules/SWFUpload/2.5.0/SWFUpload'
        , 'swfupload': 'modules/SWFUpload/2.5.0/SWFUpload'
        , 'Raphael': 'modules/Raphael/latest/raphael'

        , 'artTemplate':  "modules/artTemplate/3.0/artTemplate"
        , 'store':  "modules/store/1.3.14/store"
    }
});
/**
 * 取当前脚本标签的 src路径 
 * @static
 * @return  {string} 脚本所在目录的完整路径
 */
function scriptPath(){
    var _sc = document.getElementsByTagName('script'), _sc = _sc[ _sc.length - 1 ], _path = _sc.getAttribute('src');
    if( /\//.test( _path ) ){ _path = _path.split('/'); _path.pop(); _path = _path.join('/') + '/'; }
    else if( /\\/.test( _path ) ){ _path = _path.split('\\'); _path.pop(); _path = _path.join('\\') + '/'; }
    return _path;
}
}());
