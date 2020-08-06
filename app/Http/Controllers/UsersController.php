<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\User;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;

class UsersController extends Controller
{
    public function register(Request $request)
    {
        $full_name = $request->firstName." ".$request->lastName;
        $pass = Hash::make($request->password);
        $user = User::create([
            'name' => $full_name,
            'email' => $request->email,
            'password' => $pass
        ]);
        if ($user)
        {
            return response()->json(['message' => "Registered Successfully", $user],200);
        }
        else
        {
            return response()->json(['message' => "User not registered",],403);
        }
    }

    public function login(Request $request)
    {
        $user = Auth::attempt(['email' => $request->email, 'password' => $request->password]);
        if($user)
        {

            $token = Auth::user()->createToken('access_token')->accessToken;
            return response()->json(['message' => 'user logged in successfully',$user,'access_token' => $token],200);
        }
        else{
            return response()->json(['message' => 'could not logged you in'],401);
        }
    }
}
