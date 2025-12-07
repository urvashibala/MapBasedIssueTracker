# aca-control.ps1
# Start or stop the Azure Container Apps to save costs
# Usage: ./aca-control.ps1 start
#        ./aca-control.ps1 stop

param(
    [Parameter(Mandatory=$true)]
    [ValidateSet("start", "stop")]
    [string]$Action
)

$RESOURCE_GROUP = "Segfault"
$APPS = @("segfault-backend", "segfault-frontend")

Write-Host "=== ACA Control: $($Action.ToUpper()) ===" -ForegroundColor Cyan

foreach ($app in $APPS) {
    if ($Action -eq "stop") {
        Write-Host "Stopping $app..." -ForegroundColor Yellow
        az containerapp update --name $app --resource-group $RESOURCE_GROUP --min-replicas 0 --max-replicas 0
    } else {
        Write-Host "Starting $app..." -ForegroundColor Yellow
        az containerapp update --name $app --resource-group $RESOURCE_GROUP --min-replicas 1 --max-replicas 3
    }
}

Write-Host "`n=== Done ===" -ForegroundColor Green

if ($Action -eq "start") {
    $backendUrl = az containerapp show --name "segfault-backend" --resource-group $RESOURCE_GROUP --query "properties.configuration.ingress.fqdn" -o tsv
    $frontendUrl = az containerapp show --name "segfault-frontend" --resource-group $RESOURCE_GROUP --query "properties.configuration.ingress.fqdn" -o tsv
    Write-Host "Backend:  https://$backendUrl" -ForegroundColor Cyan
    Write-Host "Frontend: https://$frontendUrl" -ForegroundColor Cyan
}
