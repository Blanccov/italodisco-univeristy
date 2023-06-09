<?php

namespace App\Http\Controllers\Api\V1;

use Dompdf\Dompdf;
use Illuminate\Support\Facades\DB;
use App\Http\Controllers\Controller;

class PdfController extends Controller
{
    public function generatePdf()
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

        // Generuj zawartość PDF
        $html = '<html><body>';
        $html = '<h1>Accepted students</h1>';
        $html .= '<table>';
        $html .= '<tr><th>Department</th><th>Name</th><th>Email</th><th>PESEL</th><th>Phone</th><th>Address</th><th>Recruitment Name</th></tr>';

        $currentDepartament = null; // Aktualnie przetwarzany departament

        foreach ($users as $user) {
            if ($user->departament != $currentDepartament) {
                // Wyświetl nazwę nowego departamentu
                $html .= '<tr><td colspan="7"><strong>' . $user->departament . '</strong></td></tr>';
                $html .= '<tr><td colspan="7">-------------------</td></tr>'; // Ścianka oddzielająca dane
                $currentDepartament = $user->departament;
            }

            // Wyświetl dane użytkownika
            $html .= '<tr>';
            $html .= '<td></td>'; // Puste pole dla departamentu
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

        // Inicjalizuj obiekt Dompdf
        $dompdf = new Dompdf();
        $dompdf->loadHtml($html);

        // Renderuj PDF
        $dompdf->render();

        // Generuj nazwę pliku PDF
        $filename = 'users_recruitments.pdf';

        // Zapisz lub pobierz plik PDF
        return $dompdf->stream($filename);
    }
}
