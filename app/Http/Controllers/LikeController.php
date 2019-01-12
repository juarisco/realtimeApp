<?php

namespace App\Http\Controllers;

use App\Model\Like;
use Illuminate\Http\Request;
use App\Model\Reply;

class LikeController extends Controller
{
    /**
     * Create a new LikeController instance.
     *
     * @return void
     */
    public function __construct()
    {
        $this->middleware('jwt');
    }

    public function likeIt(Reply $reply)
    {
        $reply->likes()->create([
            'user_id' => auth()->id(),
            // 'user_id' => 1
        ]);
    }

    public function unLikeIt(Reply $reply)
    {
        $reply->likes()->where('user_id', auth()->id())->first()->delete();
        // $reply->likes()->where('user_id', '1')->first()->delete();
    }
}
