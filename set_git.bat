:: this bat file is used to set git repository
:: to run use .\set_git.bat
@echo off
:: add :: before the next row to initialize the repository
exit /b

echo "# WebTech2024" >> README.md
git init
git add README.md
git commit -m "first commit"
git branch -M main
git remote add origin https://github.com/orbalmas/WebTech2024.git
git push -u origin main