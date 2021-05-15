<?php

namespace App\Http\Controllers;


use App\Models\Client;
use App\Models\Person;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class ClientsController extends Controller
{
    public function __construct()
    {
        $this->middleware('auth:api');
    }

    public function index(Request $request)
    {
        $clients = DB::table('clients')
            ->join('people', 'people.id', '=', 'clients.people_id')
            ->select(
                'people.id as id',
                'people.first_name as first_name',
                'people.last_name as last_name', 'people.surname as surname',
                'people.last_surname as last_surname', 'people.direction as direction',
                'people.telephone as telephone', 'people.email as email', 'clients.nit as nit')
            ->get();
        if ($request->get('sort') != null) {
            if ($request->get('sort') == 'all') {
                $clients = count(Client::all());
            } elseif ($request->get('sort') == 'month') {
                $clients = count(
                    Client::where('created_at', '>=', now()->subDays(30))
                    ->get()
                );
            } elseif ($request->get('sort') == 'city') {
                $clients = DB::table('clients')
                    ->join('people', 'people.id', '=', 'clients.people_id')
                    ->select(
                        DB::raw('count(*) as total_users'),
                        'people.direction as city')
                    ->groupBy('people.direction')
                    ->get();
            }
        }
        return response()->json($clients);
    }

    public function create()
    {
        $statuses = DB::table('status')->select('status.name as label', 'status.id as value')->get();
        return response()->json($statuses);
    }

    public function store(Request $request)
    {
        $people = Person::create([
            'first_name' => $request->first_name,
            'last_name' => $request->last_name,
            'surname' => $request->surname,
            'last_surname' => $request->last_surname,
            'direction' => $request->direction,
            'telephone' => $request->telephone,
            'email' => $request->email,
        ]);

        $client = new Client();
        $client->nit = $request->nit;
        $client->people_id = $people->id;

        if ($client->save()) {
            return response()->json(['status' => 'success']);
        } else {
            return response()->json(['status' => 'error']);
        }
    }

    public function show($id)
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

