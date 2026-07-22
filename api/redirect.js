// ✅ VERCEL SERVERLESS FUNCTION - Redirección por país
// ✅ Esto NO es cloaking - Es una redirección HTTP 302 transparente

export default function handler(req, res) {
  // Obtener el país desde los headers de Vercel
  const country = req.headers['x-vercel-ip-country'] || 'US';
  
  // URL base de tu sitio
  const baseUrl = 'https://argenframacloud.vercel.app';
  
  // Redirigir según país (código 302)
  if (country === 'AR') {
    // 🇦🇷 Argentina → ar.html (versión en español)
    res.redirect(302, `${baseUrl}/ar.html`);
  } else {
    // 🌍 Resto del mundo → inicio.html (versión en inglés)
    res.redirect(302, `${baseUrl}/inicio.html`);
  }
}
