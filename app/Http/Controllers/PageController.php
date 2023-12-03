<?php

namespace App\Http\Controllers;

use App\Http\Resources\PageResource;
use App\Models\Page;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;

class PageController extends Controller
{
    public function index()
    {
        return PageResource::collection(Page::all());
    }

    public function update(Request $request, $id)
    {
        $page = Page::find($id);

        $data = $request->validate([
            'content' => 'required'
        ]);

        $page->content = $data['content'];

        if ($request->has('image')) {
            $image = $request->file('image');

            $name = time() . '.' .$image->getClientOriginalExtension();
            $image->move('storage/images', $name);

            Storage::delete('images/' . $page->image);
            $page->image = $name;
        }

        $page->save();

        return new PageResource($page);
    }
}
