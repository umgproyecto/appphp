<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;



use App\Models\Product;
use Illuminate\Support\Facades\DB;

class ProductController extends Controller
{
    public function __construct()
    {
        $this->middleware('auth:api');
    }

    public function index()
    {
//        $allProducts = DB::table('products')
//            ->select(
//                "price",
//                "name",
//                "description"
//            )
//            ->get();
        $allProducts = Product::all();
        return response()->json($allProducts);
    }

    public function create()
    {
        $statuses = DB::table('status')->select('status.name as label', 'status.id as value')->get();
        return response()->json($statuses);
    }

    public function store(Request $request)
    {
        $product = Product::create([
            'price' => $request->price,
            'name' => $request->name,
            'description' => $request->description,
        ]);

        if ($product->save()) {
            return response()->json(['status' => 'success']);
        } else {
            return response()->json(['status' => 'error']);
        }
    }

    public function show($id)
    {
        $product = DB::table('products')
            ->select(
                'price',
                'name',
                'description')
            ->where('products.id', '=', $id)
            ->first();
        return response()->json($product);
    }

    public function edit($id)
    {
       //
    }

    public function update(Request $request, $id)
    {
        //
    }

    public function destroy($id)
    {
        //
    }

}

