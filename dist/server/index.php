<?
if (empty($_POST)) {
    echo file_get_contents("bookmark.html");
} else {
    //执行保存操作
    var_dump($_POST);
}
?>