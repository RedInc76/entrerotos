// Candado del sitio mientras está en construcción.
// Si la variable CLAVE_SITIO está definida en Cloudflare Pages, el sitio pide contraseña.
// Para abrir el sitio al público: borrar la variable (o este archivo) y volver a publicar.
export async function onRequest({ request, env, next }) {
  const clave = env.CLAVE_SITIO;
  if (!clave) return next();

  const auth = request.headers.get('Authorization') || '';
  if (auth.startsWith('Basic ')) {
    let decodificado = '';
    try { decodificado = atob(auth.slice(6)); } catch (e) {}
    const i = decodificado.indexOf(':');
    const pass = i >= 0 ? decodificado.slice(i + 1) : '';
    if (pass === clave) return next();
  }

  return new Response('Sitio en construcción. Acceso restringido.', {
    status: 401,
    headers: {
      'WWW-Authenticate': 'Basic realm="rotos", charset="UTF-8"',
      'Content-Type': 'text/plain; charset=utf-8',
      'Cache-Control': 'no-store',
    },
  });
}
