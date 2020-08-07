public startRecord() {
  const options = {
    target: this.apiUrl
  } as proxyServer.ServerOptions
  this.serverRecord = proxyServer.createProxyServer(options)

  this.serverRecord.on('proxyRes',async function (proxyRes, req, res) {
    this.responseHeaders.push(proxyRes.headers)
    const templatePath = path.resolve(__dirname, 'template.ejs')
    const ejsTemplate = await fs.readFileSync(templatePath, { encoding: 'utf8' })
    const template = ejs.compile(ejsTemplate)
    const tmpl = template({
      requestHeaders: this.requestHeaders,
      requestBody: this.requestBody,
      responseHeaders: this.responseHeaders,
      responseBody: this.responseBody
    })
    if(this.interactionSequence === 0) {
      this.recordContent=`${tmpl}`
    } else {
      this.recordContent = `${this.recordContent}\n\n${tmpl}`
    }
    this.interactionSequence += 1
  })

  this.serverRecord.on('proxyReq', function (proxyReq, req, res) {
    this.requestHeaders.push(req.headers)
  })

  this.serverRecord.on('error', function (error, req, res) {
    res.writeHead(500, {
      'Content-Type': 'text/plain'
    })
    res.end(error.message)
  })

  this.serverRecord.listen(61417)
}

public async writeRecord(recordFileName: string) {
  const destDir = path.resolve(__dirname, 'mocks')
  await fs.mkdirSync(destDir, { recursive: true })
  const fileDir = path.resolve(__dirname, 'mocks', `${recordFileName}.md`)
  await fs.writeFileSync(fileDir, this.recordContent)
}

public endRecord() {
  this.serverRecord.close()
}


private apiUrl: string
  public serverPlayback: http.Server
  public serverRecord: proxyServer
  public requestHeaders: http.IncomingHttpHeaders
  public requestBody
  public responseHeaders: http.IncomingHttpHeaders
  public responseBody
  public recordContent: string
  private interactionSequence: number
  