// ✅ VERCEL SERVERLESS FUNCTION - Redirección por país
export default function handler(req, res) {
  // Obtener el país desde los headers de Vercel
  const country = req.headers['x-vercel-ip-country'] || 'US';
  
  // URL base de tu sitio
  const baseUrl = 'https://argenframacloud.vercel.app';
  
  // Redirigir según país (código 302)
  if (country === 'AR') {
    res.redirect(302, `${baseUrl}/ar.html`);
  } else {
    res.redirect(302, `${baseUrl}/inicio.html`);
  }
}
