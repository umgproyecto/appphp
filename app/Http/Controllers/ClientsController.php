<?php

namespace App\Http\Controllers;


use App\Models\Notes;
use App\Models\Person;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class ClientsController extends Controller
{
    public function __construct()
    {
        $this->middleware('auth:api');
    }

    public function index()
    {
        $clients = DB::table('clients')
            ->join('people', 'people.id', '=', 'clients.people_id')
            ->select('people.first_name as first_name',
                'people.last_name as last_name', 'people.surname as surname',
                'people.last_surname as last_surname', 'people.direction as direction',
                'people.telephone as telephone', 'people.email as email', 'clients.nit as nit')
            ->get();
        return response()->json($clients);
    }

    public function create()
    {
        $statuses = DB::table('status')->select('status.name as label', 'status.id as value')->get();
        return response()->json($statuses);
    }

    public function store(Request $request)
    {
        $validatedData = $request->validate([
            'title' => 'required|min:1|max:64',
            'content' => 'required|max:1024',
            'status_id' => 'required',
            'applies_to_date' => 'required|date_format:Y-m-d',
            'note_type' => 'required|max:64'
        ]);

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

         if ($client->save()){
             return response()->json(['status' => 'success']);
         }else{
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
        $note = DB::table('notes')->where('id', '=', $id)->first();
        $statuses = DB::table('status')->select('status.name as label', 'status.id as value')->get();
        return response()->json(['statuses' => $statuses, 'note' => $note]);
    }

    public function update(Request $request, $id)
    {
        //var_dump('bazinga');
        //die();
        $validatedData = $request->validate([
            'title' => 'required|min:1|max:64',
            'content' => 'required|max:1024',
            'status_id' => 'required',
            'applies_to_date' => 'required|date_format:Y-m-d',
            'note_type' => 'required|max:64'
        ]);
        $note = Notes::find($id);
        $note->title = $request->input('title');
        $note->content = $request->input('content');
        $note->status_id = $request->input('status_id');
        $note->note_type = $request->input('note_type');
        $note->applies_to_date = $request->input('applies_to_date');
        $note->save();
        return response()->json(['status' => 'success']);
    }

    public function destroy($id)
    {
        $note = Notes::find($id);
        if ($note) {
            $note->delete();
        }
        return response()->json(['status' => 'success']);
    }
}

