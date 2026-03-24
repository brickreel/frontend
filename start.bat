@echo off
REM BrickReel Frontend Startup Script for Windows
REM This script installs dependencies and starts the development server

echo.
echo ╔════════════════════════════════════════════════════════════════╗
echo ║        BrickReel Frontend - Development Server               ║
echo ║              Starting on http://localhost:3001                ║
echo ╚════════════════════════════════════════════════════════════════╝
echo.

REM Check if node_modules exists
if not exist "node_modules" (
    echo Installing dependencies...
    call npm install
    echo Dependencies installed successfully!
    echo.
)

REM Check if .env.local exists
if not exist ".env.local" (
    echo Creating .env.local from .env.example...
    copy .env.example .env.local
    echo.
    echo ⚠️  Please update .env.local with your configuration
    echo    - NEXT_PUBLIC_API_URL should point to backend (http://localhost:3000)
    echo.
)

echo Starting development server...
echo Press Ctrl+C to stop the server
echo.

npm run dev

pause
