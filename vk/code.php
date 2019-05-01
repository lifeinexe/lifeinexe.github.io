<?php
$vk = new VKAPI();
$cb = new cbAPI();
 
class VKAPI{
    private $token = '65f95ef8c2caec7a9359e28f174b1c40b48057822a917bd438e80d9b74e73f5fef0ddc98c7828abfe45e6';
    private $v = 5.92;
    private $url = 'https://api.vk.com/method/';
   
    public function request ($method, $params) {
        $params['v'] = $this->v;
        $params['access_token'] = $this->token;
         $url = $this->url.$method.'?'.http_build_query($params);
          return file_get_contents($url);
    }
   
    public function send ($peer, $message) {
       $params = array( 'peer_id'=>$peer, 'random_id'=>0, 'message'=>$message );
        return $this->request('messages.send', $params);
    }
   
    public function getName ($who, $full) {
        $res = json_decode($this->request('users.get', [ 'user_ids'=>$who ]));
        if($full == true){
         return $res->response[0]->first_name.' '.$res->response[0]->last_name;
        } else { return $res->response[0]->first_name; }
    }
   
    public function getUserInfo ($who) {
        $res = json_decode($this->request('users.get', [ 'user_ids'=>$who,'fields'=>'photo_id,verified,sex,bdate,city,country,home_town,online,domain,contacts,site,education,universities,schools,status,followers_count,nickname,relatives,relation,personal,activities,interests,music,movies,tv,books,games,about,quotes,timezone,screen_name,career']));
         return $res->response[0];
    }
}
 
class cbAPI {
    private $confirm = 'a67fbb41';
    private $secret = 'fuckme';
   
    public function ok ($response) {
        if($response !== null) http_response_code($response);
         die("ok");
    }
   
    public function conf () {
        die($this->confirm);
    }
   
    public function check ($wrong) {
        if($this->secret == $wrong){ return true;
        } else { return false; }
    }
}