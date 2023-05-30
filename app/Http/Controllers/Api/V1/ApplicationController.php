<?php

namespace App\Http\Controllers\Api\V1;

use App\Models\Application;
use App\Http\Requests\StoreApplicationRequest;
use App\Http\Requests\UpdateApplicationRequest;
use App\Http\Controllers\Controller;
use App\Http\Resources\ApplicationCollection;
use App\Http\Resources\ApplicationResource;
use Symfony\Component\HttpFoundation\Response;
use App\Services\ApplicationService;
use Illuminate\Http\Request;

class ApplicationController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        return new ApplicationCollection(Application::filter()->get());
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
    public function store(StoreApplicationRequest $request)
    {
        return new ApplicationResource(Application::create($request->all()));
    }

    /**
     * Display the specified resource.
     */
    public function show(Application $application)
    {
        return new ApplicationResource($application);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Application $application)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateApplicationRequest $request, Application $application)
    {
        $application->update($request->all());
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Application $application)
    {
        $application->delete();

        return response('', Response::HTTP_NO_CONTENT);
    }

    public function applyForRecruitment(Request $request){
        return (new ApplicationService())->applyForRecruitment($request);
    }
    public function processRecruitmentResults(){
        return (new ApplicationService())->processRecruitmentResults();
    }
    public function makePaymentForRecruitment(Request $request){
        return (new ApplicationService())->makePaymentForRecruitment($request);
    }
    public function showApplications(){
       return (new ApplicationService())->showApplications();
    }
    public function rejectApplication(Request $request){
        return (new ApplicationService())->rejectApplication($request);
    }
}
