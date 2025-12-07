# deploy-backend.ps1
# Deploys the backend to Azure Container Apps (Cloud Shell compatible)

$ErrorActionPreference = "Stop"

# Configuration
$ACR_NAME = "segfaultdockerimages"
$ACR_ENDPOINT = "segfaultdockerimages.azurecr.io"
$IMAGE_NAME = "segfault-backend"
$IMAGE_TAG = "latest"
$RESOURCE_GROUP = "Segfault"
$LOCATION = "westeurope"
$ACA_ENV_NAME = "segfault-deployment"
$ACA_APP_NAME = "segfault-backend"

# ACR credentials (hardcoded for toy project)
$ACR_USERNAME = "SegfaultDockerImages"
$ACR_PASSWORD = "6F6FiaZTXiNeBUk72T1MPVbzyzWxEaeD/bEHO9tmyB+ACRARTYoH"

Write-Host "=== Backend Deployment Script ===" -ForegroundColor Cyan

# Navigate to backend directory
Write-Host "`n[1/4] Navigating to segfault-backend..." -ForegroundColor Yellow
Set-Location -Path "$PSScriptRoot/segfault-backend"

# Build image using ACR Tasks (no local Docker needed)
Write-Host "`n[2/4] Building Docker image in ACR (cloud build)..." -ForegroundColor Yellow
az acr build --registry $ACR_NAME --image "${IMAGE_NAME}:${IMAGE_TAG}" .

# Check if ACA environment exists, create if not
Write-Host "`n[3/4] Setting up Azure Container Apps..." -ForegroundColor Yellow

$envExists = az containerapp env show --name $ACA_ENV_NAME --resource-group $RESOURCE_GROUP 2>$null
if (-not $envExists) {
    Write-Host "Creating ACA environment: $ACA_ENV_NAME" -ForegroundColor Magenta
    az containerapp env create `
        --name $ACA_ENV_NAME `
        --resource-group $RESOURCE_GROUP `
        --location $LOCATION
} else {
    Write-Host "ACA environment already exists: $ACA_ENV_NAME" -ForegroundColor Green
}

# Check if app exists
Write-Host "`n[4/4] Deploying Container App..." -ForegroundColor Yellow
$appExists = az containerapp show --name $ACA_APP_NAME --resource-group $RESOURCE_GROUP 2>$null

if (-not $appExists) {
    Write-Host "Creating Container App: $ACA_APP_NAME" -ForegroundColor Magenta
    
    az containerapp create `
        --name $ACA_APP_NAME `
        --resource-group $RESOURCE_GROUP `
        --environment $ACA_ENV_NAME `
        --image "${ACR_ENDPOINT}/${IMAGE_NAME}:${IMAGE_TAG}" `
        --registry-server $ACR_ENDPOINT `
        --registry-username $ACR_USERNAME `
        --registry-password $ACR_PASSWORD `
        --target-port 3000 `
        --ingress external `
        --min-replicas 1 `
        --max-replicas 3
} else {
    Write-Host "Updating Container App: $ACA_APP_NAME" -ForegroundColor Magenta
    az containerapp update `
        --name $ACA_APP_NAME `
        --resource-group $RESOURCE_GROUP `
        --image "${ACR_ENDPOINT}/${IMAGE_NAME}:${IMAGE_TAG}"
}

# Get the app URL
$appUrl = az containerapp show --name $ACA_APP_NAME --resource-group $RESOURCE_GROUP --query "properties.configuration.ingress.fqdn" -o tsv

Write-Host "`n=== Deployment Complete ===" -ForegroundColor Green
Write-Host "Backend URL: https://$appUrl" -ForegroundColor Cyan

# Return to original directory
Set-Location -Path $PSScriptRoot
