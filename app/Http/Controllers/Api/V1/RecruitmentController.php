<?php

namespace App\Http\Controllers\Api\V1;

use App\Models\Recruitment;
use App\Http\Requests\StoreRecruitmentRequest;
use App\Http\Requests\UpdateRecruitmentRequest;
use App\Http\Controllers\Controller;
use App\Http\Resources\RecruitmentCollection;
use App\Http\Resources\RecruitmentResource;
use App\Services\RecruitmentService;
use Symfony\Component\HttpFoundation\Response;
use Illuminate\Http\Request;

class RecruitmentController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        return new RecruitmentCollection(Recruitment::filter()->get());
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreRecruitmentRequest $request)
    {
        $recruitment = Recruitment::create($request->all());
        return response()->json([
            'id' => $recruitment->id,
        ], 201);
    }


    /**
     * Display the specified resource.
     */
    public function show(Recruitment $recruitment)
    {
        return new RecruitmentResource($recruitment);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Recruitment $recruitment)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateRecruitmentRequest $request, Recruitment $recruitment)
    {
        $recruitment->update($request->all());
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Recruitment $recruitment)
{
    $recruitment->is_active = false;
    $recruitment->save();

    return response('', Response::HTTP_NO_CONTENT);
}

    public function getRecruitmentsByDepartment(Request $request){
        return (new RecruitmentService())->getRecruitmentsByDepartment($request);
    }
    public function getRecruitmentsByDepartmentWithDate(Request $request){
        return (new RecruitmentService())->getRecruitmentsByDepartmentWithDate($request);
    }
    public function checkAndReopenRecruitment(){
        return (new RecruitmentService())->checkAndReopenRecruitment();
    }

    public function getDepartments(){
        return (new RecruitmentService())->getDepartments();
    }
}
