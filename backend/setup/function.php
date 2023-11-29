<?php 
  $action = $_POST['action']??'';

  function getProject(){
    $rpath=glob('apidoc.json');
    if(count($rpath)== 1){
    $arr =    file_get_contents('apidoc.json');
    // var_dump($arr);
   return json_decode($arr,true);
       
    } 
  }
  function getClasses(){
    $rpath=glob('../classes/*.php');
  return $rpath; 
  }
function createProject (){
 global   $version ,$projectname, $description,$title ,$url,$headertitle,$headerfile ,$footertitle,$footerfile ;
$rpath=glob('apidoc.json');
$arrs=["name"=> $projectname,
  "version"=> $version,
  "description"=> $description,
  "title"=> $title,
  "url" => $url,
  "header"=> [
    "title"=> $headertitle,
    "filename"=> $headerfile
  ],
  "footer"=> [
    "title"=> $footertitle,
    "filename"=> $footerfile
  ],
  "template"=> [
  	"withCompare"=> true,
  	"withGenerator"=> true
  ]];
$arr =['apidoc'=>$arrs]; 
    $r= fopen('apidoc.json','w+');
        fputs($r,json_encode($arr));
        fclose($r);

// var_dump('glob',$rpath);
}

switch ($action) {
    case'getclasses':
getClasses();
        break;
    case 'createproject':

        if($_POST){
          
            $version = $_POST['version'];
            $projectname = $_POST['projectname'];
            $description = $_POST['description'];
            $title = $_POST['title'];
            $url = $_POST['url'];
            $headertitle = $_POST['headertitle'];
            $headerfile = $_POST['headerfile'];
            $footertitle = $_POST['footertitle'];
            $footerfile = $_POST['footerfile'];
            }
     createProject();
     $arr= getProject();
     getClasses();
        break;
    
    default: 
   $arr= getProject();
//    var_dump('<pre>',$arr);
        break;
}
?>