@echo off
title Hogar Luz
cd /d "%~dp0"

echo.
echo  ========================================
echo   HOGAR LUZ  -  http://localhost:3000
echo  ========================================
echo.
echo  Carpeta correcta:
echo  %cd%
echo.

if not exist "package.json" (
  echo ERROR: Ejecuta este archivo desde la carpeta Hogar-luz--main\Hogar-luz--main
  pause
  exit /b 1
)

echo  Cerrando servidores viejos en puerto 3000...
for /f "tokens=5" %%P in ('netstat -aon ^| findstr ":3000" ^| findstr "LISTENING"') do (
  taskkill /F /PID %%P >nul 2>&1
)

if not exist "node_modules\next\package.json" (
  echo  Instalando dependencias...
  call npm install
)

echo.
echo  Arrancando sitio limpio...
echo  Cuando diga "Ready", abri: http://localhost:3000
echo.

start "" cmd /c "ping -n 8 127.0.0.1 >nul & start http://localhost:3000/"

call npm run dev:fresh

pause
