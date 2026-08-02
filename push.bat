@echo off
cd /d "C:\Users\CHERK\Downloads\fresh-sparkle-toulouse-main\fresh-sparkle-toulouse-main"
echo === Git Push vers GitHub ===
git init
git remote remove origin 2>nul
git remote add origin https://github.com/arkos-labs/fresh-sparkle-toulouse.git
git add .
git commit -m "refonte design moderne - teal/amber, reservation Dispoo, page formules"
git branch -M main
git push -u origin main
echo.
echo === Terminé ===
pause
