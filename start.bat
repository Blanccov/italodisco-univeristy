%systemDrive%\xampp\mysql\bin\mysql -uroot -e "CREATE DATABASE IF NOT EXISTS italo;"

php -r "copy('.env.example', '.env');"

call composer install

call php artisan migrate:fresh --seed

call php artisan key:generate

start http://127.0.0.1:8000

call php artisan serve
