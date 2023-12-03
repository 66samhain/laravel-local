<?php

namespace App\Http\Controllers;

use App\Http\Resources\UserResource;

class CurrentUserController extends Controller
{
    public function index()
    {
        return new UserResource(auth()->user());
    }
}
