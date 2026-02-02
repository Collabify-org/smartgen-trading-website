# PowerShell script to setup images in proper folder structure
Write-Host "Setting up image folders..." -ForegroundColor Green

# Create directories
$dirs = @(
    "public\images\home",
    "public\images\blog",
    "public\images\contact",
    "public\images\service"
)

for ($i = 1; $i -le 15; $i++) {
    $dirs += "public\images\products\$i"
}

foreach ($dir in $dirs) {
    $fullPath = Join-Path $PSScriptRoot $dir
    if (!(Test-Path $fullPath)) {
        New-Item -ItemType Directory -Path $fullPath -Force | Out-Null
        Write-Host "Created: $dir" -ForegroundColor Cyan
    }
}

# Copy images
function Copy-Images {
    param($sourceFolder, $destFolder)
    
    $parentDir = Split-Path $PSScriptRoot -Parent
    $sourcePath = Join-Path $parentDir $sourceFolder
    $destPath = Join-Path $PSScriptRoot $destFolder
    
    Write-Host "Looking for: $sourcePath" -ForegroundColor Gray
    
    if (Test-Path $sourcePath) {
        $allFiles = Get-ChildItem -Path $sourcePath -File
        $images = $allFiles | Where-Object { $_.Extension -match '^\.(jpg|jpeg|png|webp|gif)$' }
        
        $count = 0
        foreach ($image in $images) {
            $destFile = Join-Path $destPath $image.Name
            Copy-Item -Path $image.FullName -Destination $destFile -Force
            $count++
        }
        
        if ($count -gt 0) {
            Write-Host "✓ Copied $count images from $sourceFolder" -ForegroundColor Green
        } else {
            Write-Host "⚠ No images found in $sourceFolder (found $($allFiles.Count) files)" -ForegroundColor Yellow
        }
    } else {
        Write-Host "✗ Source not found: $sourcePath" -ForegroundColor Red
    }
}

# Copy all images
Copy-Images "home_files" "public\images\home"
Copy-Images "blog_files" "public\images\blog"
Copy-Images "contact_files" "public\images\contact"
Copy-Images "service_files" "public\images\service"

for ($i = 1; $i -le 15; $i++) {
    Copy-Images "product_$($i)_files" "public\images\products\$i"
}

Write-Host "`nImage setup complete!" -ForegroundColor Green
Write-Host "`nFolder structure created:" -ForegroundColor Cyan
Write-Host "smartgen-react/public/images/" -ForegroundColor White
Write-Host "  home/" -ForegroundColor Gray
Write-Host "  blog/" -ForegroundColor Gray
Write-Host "  contact/" -ForegroundColor Gray
Write-Host "  service/" -ForegroundColor Gray
Write-Host "  products/1/ to 15/" -ForegroundColor Gray
