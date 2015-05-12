;void function(){
    /**
     * 取当前脚本标签的 src路径 
     * @author  scuehs@btbtd.org 2013-05-23
     * @return  {string} 脚本所在目录的完整路径
     */
    function scriptPath(){
        var _sc = document.getElementsByTagName('script'), _sc = _sc[ _sc.length - 1 ], _path = _sc.getAttribute('src');
        if( /\//.test( _path ) ){ _path = _path.split('/'); _path.pop(); _path = _path.join('/') + '/'; }
        else if( /\\/.test( _path ) ){ _path = _path.split('\\'); _path.pop(); _path = _path.join('\\') + '/'; }
        return _path;
    }
    var _path = scriptPath();
    document.write( '<script src="'+_path+'require.js" ><\/script>' );
    document.write( '<script src="'+_path+'jquery.js" ><\/script>' );
}();
