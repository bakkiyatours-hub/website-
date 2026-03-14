@echo off
setlocal
cd /d "%~dp0"
echo Serving built site from dist/ on your LAN ...
echo Open on your phone: http://YOUR_PC_IP:5502/
echo.
node scripts\serve-dist.mjs --host 0.0.0.0 --port 5502
pause

