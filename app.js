import http from 'http';

const PORT = 3000;

const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'application/json; charset=utf-8' });
  res.end(JSON.stringify({
    status: 'online',
    mensagem: 'Servidor Node.js em execução via Contêiner Docker!',
    timestamp: new Date().toISOString()
  }));
});

server.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});