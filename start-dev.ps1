Write-Host "========================================" -ForegroundColor Cyan
Write-Host "  Démarrage du serveur Next.js" -ForegroundColor Cyan
Write-Host "========================================" -ForegroundColor Cyan
Write-Host ""

# Arrêter les processus Node.js existants
$nodeProcesses = Get-Process node -ErrorAction SilentlyContinue
if ($nodeProcesses) {
    Write-Host "Arrêt des processus Node.js existants..." -ForegroundColor Yellow
    $nodeProcesses | Stop-Process -Force
    Start-Sleep -Seconds 2
}

# Vérifier que les dépendances sont installées
if (-not (Test-Path "node_modules")) {
    Write-Host "Installation des dépendances..." -ForegroundColor Yellow
    npm install --legacy-peer-deps
}

Write-Host "Démarrage du serveur de développement..." -ForegroundColor Green
Write-Host "Le serveur sera accessible sur http://localhost:3000" -ForegroundColor Green
Write-Host "Appuyez sur Ctrl+C pour arrêter le serveur" -ForegroundColor Yellow
Write-Host ""

# Démarrer le serveur
npm run dev

