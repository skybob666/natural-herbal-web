param(
  [int]$Port = 8137
)

Set-Location -LiteralPath $PSScriptRoot
Write-Host "正在启动本地预览：http://127.0.0.1:$Port/"
Write-Host "按 Ctrl+C 停止服务。"
py -m http.server $Port
