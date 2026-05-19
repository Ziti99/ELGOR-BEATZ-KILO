Write-Host "Installation des dependances..." -ForegroundColor Cyan
npm install --legacy-peer-deps

Write-Host "`nDemarrage du serveur..." -ForegroundColor Green
npx next dev --turbopack

