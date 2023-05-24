<?php

namespace App\Http\Controllers\Api\V1;

use App\Models\Recruitment;
use App\Http\Requests\StoreRecruitmentRequest;
use App\Http\Requests\UpdateRecruitmentRequest;
use App\Http\Controllers\Controller;
use App\Http\Resources\RecruitmentCollection;
use App\Http\Resources\RecruitmentResource;

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
        return new RecruitmentResource(Recruitment::create($request->all()));
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
        //
    }
}
