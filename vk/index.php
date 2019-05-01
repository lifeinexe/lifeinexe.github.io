<?php
@include 'code.php';
 
$data = json_decode(file_get_contents('php://input'));
 
if($cb->check($data->secret)){
    if($data->type == 'message_new') {
        $peer = $data->object->peer_id;
        $message = $data->object->text;
        $from_id = $data->object->from_id;
       
      if($from_id > 0){
         # команды
       $cmd = explode(' ',$message, 2); $command = mb_strtolower($cmd[0]);
        $params = $cmd[1]; $cmd = explode(' ', $params);
         switch($command){
            case '!тест':
            $command = '';
                $message = '';

                $vk->send($peer, 'тест! '.$params); break;
         }
     }
       
            $cb->ok();
    }
}
 
if($data->type = 'confirmation') {
    $cb->conf();
} else { $cb->ok(); }