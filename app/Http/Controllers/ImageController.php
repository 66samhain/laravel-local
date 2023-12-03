<?php

namespace App\Http\Controllers;

use Illuminate\Support\Facades\Storage;

class ImageController extends Controller
{
    public function index()
    {
        $url = Storage::url('images/post-sample-image.jpg');

        return $url;
    }
}
