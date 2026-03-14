@echo off
setlocal
cd /d "%~dp0"
echo Serving built site from dist/ ...
echo Open: http://127.0.0.1:5502/
echo.
node scripts\serve-dist.mjs --host 127.0.0.1 --port 5502
pause

