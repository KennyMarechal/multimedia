@echo off

set a=2
set b=5
set /a resultat=%a%+%b%

echo %resultat%


set /p saisie=saisissez votre text:
echo %saisie%

set pseudo=PifyZ
set variable=%pseudo:~1,3%
echo %variable%
pause