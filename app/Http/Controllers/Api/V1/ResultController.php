<?php

namespace App\Http\Controllers\Api\V1;

use App\Models\Result;
use App\Http\Requests\StoreResultRequest;
use App\Http\Requests\UpdateResultRequest;
use App\Http\Controllers\Controller;
use App\Http\Resources\ResultCollection;
use App\Http\Resources\ResultResource;

class ResultController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        // return Result::filter()->get();
        return new ResultCollection(Result::filter()->get());
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
    public function store(StoreResultRequest $request)
    {
        return new ResultResource(Result::create($request->all()));
    }

    /**
     * Display the specified resource.
     */
    public function show(Result $result)
    {
        return new ResultResource($result);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Result $result)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateResultRequest $request, Result $result)
    {
        $result->update($request->all());
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Result $result)
    {
        $result->delete();
    }
}
