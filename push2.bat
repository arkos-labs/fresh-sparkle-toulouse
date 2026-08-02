@echo off
cd /d "C:\Users\CHERK\Downloads\fresh-sparkle-toulouse-main\fresh-sparkle-toulouse-main"
git add src/components/site/ReviewsCarousel.tsx src/components/site/ServicePage.tsx src/routes/formules.tsx src/components/site/Header.tsx src/components/site/Footer.tsx
git commit -m "ajout carrousel avis Google + page formules + liens nav"
git push origin main
echo.
echo === Push terminé ===
pause
