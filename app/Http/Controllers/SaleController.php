<?php

namespace App\Http\Controllers;

use App\Models\Client;
use App\Models\Person;
use App\Models\Sale;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class SaleController extends Controller
{
    public function __construct()
    {
        $this->middleware('auth:api');
    }

    public function index(Request $request)
    {

        $sales = DB::table('sales')
            ->join('products', 'products.id', '=', 'sales.product_id')
            ->select(
                'sales.id as id',
                'products.name as product',
                'products.description as description',
                'products.price as price',
                'sales.amount as amount',
                'sales.total as total'
            )
            ->get();
        if ($request->get('sort') != null) {
            if ($request->get('sort') == 'total') {
                $sales = DB::table('sales')
                    ->sum('total');
            }
        }
        return response()->json($sales);
    }

    public function create()
    {
        $statuses = DB::table('status')->select('status.name as label', 'status.id as value')->get();
        return response()->json($statuses);
    }

    public function store(Request $request)
    {
        $unitPrice = DB::table("products")
            ->select("price")
            ->where("id", $request->productId)
            ->avg('price');

        $total = $unitPrice * $request->amount;

        $userId = auth()->user()->id;

        $sale = Sale::create([
            'total' => $total,
            'amount' => $request->amount,
            'status' => 'sold',
            'users_id' => $userId,
            'status_id' => $request->statusId,
            'product_id' => $request->productId,
        ]);

        if ($sale->save()) {
//        if (true) {
            return response()->json(['status' => 'success']);
        } else {
            return response()->json(['status' => 'error']);
        }
    }

    public function show($id)
    {
        $sale = DB::table('sales')
            ->join('products', 'products.id', '=', 'sales.product_id')
            ->select(
                'products.name as product',
                'products.description as description',
                'products.price as price',
                'sales.amount as amount',
                'sales.total as total'
            )
            ->where('sales.id', '=', $id)
            ->first();
        return response()->json($sale);
    }

    public function edit($id)
    {
        $note = DB::table('clients')
            ->join('people', 'people.id', '=', 'clients.people_id')
            ->select('people.first_name as first_name',
                'people.last_name as last_name', 'people.surname as surname',
                'people.last_surname as last_surname', 'people.direction as direction',
                'people.telephone as telephone', 'people.email as email', 'clients.nit')
            ->where('clients.id', '=', $id)
            ->first();
        return response()->json($note);
    }

    public function update(Request $request, $id)
    {
        $validatedData = $request->validate([
            'first_name' => 'required|min:1|max:64',
            'email' => 'required|max:1024',
        ]);
        $client = Client::find($id);
        $people = Person::find($client->people_id);
//        $people->first_name = $request->input()
        $people->first_name = $request->input('first_name');
        $people->email = $request->input('email');
        $people->save();
        return response()->json(['status' => 'success']);
    }

    public function destroy($id)
    {
        $client = Client::find($id);
        if ($client) {
            $client->delete();
        }
        return response()->json(['status' => 'success']);
    }

    public function info()
    {
//        $getLastMonth = Client::where('created_at', '>=', now()->subDays(30))->get();
        $getLastMonth = DB::table('clients')
            ->join('people', 'people.id', '=', 'clients.people_id')
            ->select(
                'people.id as id',
                'people.first_name as first_name',
                'people.last_name as last_name', 'people.surname as surname',
                'people.last_surname as last_surname', 'people.direction as direction',
                'people.telephone as telephone', 'people.email as email', 'clients.nit as nit')
            ->get();
        response()->json($getLastMonth);
    }
}

