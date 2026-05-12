# Script para publicar la librería nettalco-theme
# Uso: .\publish.ps1 [patch|minor|major]

param(
    [Parameter(Mandatory=$false)]
    [ValidateSet('patch','minor','major')]
    [string]$VersionType = 'patch'
)

# Verificar si hay cambios sin commitear
$gitStatus = git status --porcelain
if ($gitStatus) {
    Write-Host "WARNING: Hay cambios sin commitear:" -ForegroundColor Yellow
    Write-Host $gitStatus
    $confirm = Read-Host "`n¿Continuar de todos modos? (s/n)"
    if ($confirm -ne 's') {
        Write-Host "ERROR: Publicación cancelada" -ForegroundColor Red
        exit 1
    }
}

Write-Host "`nLimpiando directorio dist..." -ForegroundColor Cyan
if (Test-Path dist) {
    Remove-Item -Recurse -Force dist
}

Write-Host "`nIncrementando versión ($VersionType)..." -ForegroundColor Cyan
npm version $VersionType --no-git-tag-version

if ($LASTEXITCODE -ne 0) {
    Write-Host "`nERROR: Error al incrementar versión" -ForegroundColor Red
    exit 1
}

$newVersion = (Get-Content package.json | ConvertFrom-Json).version
Write-Host "OK: Nueva versión: $newVersion" -ForegroundColor Green

Write-Host "`nCompilando librería..." -ForegroundColor Cyan
npm run build

if ($LASTEXITCODE -ne 0) {
    Write-Host "`nERROR: Error al compilar" -ForegroundColor Red
    exit 1
}

Write-Host "OK: Compilación exitosa" -ForegroundColor Green

# Verificar que existe .npmrc
if (-Not (Test-Path .npmrc)) {
    Write-Host "`nERROR: No se encontró .npmrc. Configura tu token primero." -ForegroundColor Red
    exit 1
}

# Copiar .npmrc al directorio dist para autenticación
Write-Host "`nCopiando configuración de autenticación..." -ForegroundColor Cyan
Copy-Item .npmrc dist/nettalco-theme/.npmrc -Force

# Publicar desde dist
Write-Host "`nPublicando a npm..." -ForegroundColor Cyan
Push-Location dist/nettalco-theme
npm publish --verbose

if ($LASTEXITCODE -ne 0) {
    Write-Host "`nERROR: Error al publicar. Verifica tu token en .npmrc" -ForegroundColor Red
    Pop-Location
    exit 1
}

Write-Host "OK: Publicación exitosa en GitHub Packages" -ForegroundColor Green
Pop-Location

# Hacer commit y tag de la versión
Write-Host "`nCreando commit y tag de versión..." -ForegroundColor Cyan
git add package.json
git commit -m "chore: bump version to $newVersion"
git tag "v$newVersion"

Write-Host "`nPublicación completada: v$newVersion" -ForegroundColor Green
Write-Host "`nNo olvides hacer: git push; git push --tags" -ForegroundColor Yellow
