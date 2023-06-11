<?php

namespace App\Http\Controllers\Api\V1;

use Dompdf\Dompdf;
use Illuminate\Support\Facades\DB;
use App\Http\Controllers\Controller;
use Illuminate\Http\Response;
use Illuminate\Http\Request;

class PdfController extends Controller
{
    public function generatePdf(Request $request)
    {
        $users = DB::table('users')
            ->join('applications', 'users.id', '=', 'applications.user_id')
            ->join('recruitments', 'recruitments.id', '=', 'applications.recruitment_id')
            ->where('applications.status_id', 3)
            ->orderBy('recruitments.departament')
            ->orderBy('recruitments.name')
            ->select(
                'users.name',
                'users.surname',
                'users.email',
                'users.pesel',
                'users.phone',
                'users.address',
                'recruitments.name as recruitment_name',
                'recruitments.departament'
            )
            ->get();

        $html = '<html><body>';
        $html .= '<h1>Accepted students</h1>';
        $html .= '<table>';
        $html .= '<tr><th>Department</th><th>Name</th><th>Email</th><th>PESEL</th><th>Phone</th><th>Address</th><th>Recruitment Name</th></tr>';

        $currentDepartament = null;

        foreach ($users as $user) {
            if ($user->departament != $currentDepartament) {
                $html .= '<tr><td colspan="7"><strong>' . $user->departament . '</strong></td></tr>';
                $html .= '<tr><td colspan="7">-------------------</td></tr>';
                $currentDepartament = $user->departament;
            }

            $html .= '<tr>';
            $html .= '<td></td>';
            $html .= '<td>' . $user->name . ' ' . $user->surname . '</td>';
            $html .= '<td>' . $user->email . '</td>';
            $html .= '<td>' . $user->pesel . '</td>';
            $html .= '<td>' . $user->phone . '</td>';
            $html .= '<td>' . $user->address . '</td>';
            $html .= '<td>' . $user->recruitment_name . '</td>';
            $html .= '</tr>';
        }

        $html .= '</table>';
        $html .= '</body></html>';

        $dompdf = new Dompdf();
        $dompdf->loadHtml($html);
        $dompdf->render();

        $output = $dompdf->output();

        $response = new Response($output);
        $response->header('Content-Type', 'application/pdf');
        $response->header('Access-Control-Allow-Origin', $request->header('Origin'));
        $response->header('Access-Control-Allow-Credentials', 'true');

        return $response;
    }
}
