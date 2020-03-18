<?php
session_start();
$_SESSION['click']=false;
echo '<form method="POST">';

if(isset($_SESSION['click']) == true){
 echo "<button type='button' disabled>Disable</button>";
}
else {
 echo "<button type='button' name='click'>Klik</button>";
}
echo '</form>';

$_POST['click'] ? $_SESSION['click']=true : $_SESSION['click']=false;