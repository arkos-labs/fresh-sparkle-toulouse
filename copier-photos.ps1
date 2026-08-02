$src = "C:\Users\CHERK\OneDrive\Images\photo seb"
$dst = "C:\Users\CHERK\Downloads\fresh-sparkle-toulouse-main\fresh-sparkle-toulouse-main\public\realisations"
New-Item -ItemType Directory -Force -Path $dst | Out-Null
$files = Get-ChildItem "$src\*.jpeg" | Sort-Object Name
$i = 1
foreach ($f in $files) {
    $newName = "photo-{0:D2}.jpg" -f $i
    Copy-Item $f.FullName "$dst\$newName"
    Write-Host "Copie $($f.Name) -> $newName"
    $i++
}
Write-Host "`n✅ $($files.Count) photos copiées dans public/realisations/"
