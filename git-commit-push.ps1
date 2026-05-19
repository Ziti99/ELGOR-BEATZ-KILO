Write-Host "Ajout des fichiers..." -ForegroundColor Cyan
git add -A

Write-Host "`nCommit des modifications..." -ForegroundColor Cyan
git commit -m "Standardisation du design, suppression du blog et portfolio, amélioration des productions notables"

Write-Host "`nPush vers le dépôt distant..." -ForegroundColor Cyan
git push

Write-Host "`n✅ Terminé !" -ForegroundColor Green

